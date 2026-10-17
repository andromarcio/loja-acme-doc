"""Gera o retrato de gestão do Pages, sem alterar a documentação ou os gates."""

import argparse
from datetime import date, datetime, timezone
import json
from pathlib import Path
import re
import subprocess

import gates


LEVEL = re.compile(r"^>\s*\*\*Nível ([123])\*\*.*?`([A-Z]{3}(?:-[A-Z]{3})?(?:-\d{2})?)`", re.MULTILINE)


def git(root, *arguments):
    return subprocess.check_output(
        ["git", "-C", str(root), *arguments], encoding="utf-8", stderr=subprocess.PIPE
    ).strip()


def repository_snapshot(root, branch=None):
    records = git(root, "for-each-ref", "--format=%(refname)\t%(symref)\t%(objectname)\t%(committerdate:iso-strict)",
                  "refs/heads", "refs/remotes")
    branches = {}
    for record in records.splitlines():
        ref, symbolic, commit, updated = record.split("\t")
        if symbolic:
            continue
        local = ref.startswith("refs/heads/")
        name = ref.removeprefix("refs/heads/") if local else ref.removeprefix("refs/remotes/").split("/", 1)[1]
        item = branches.setdefault(name, {"name": name, "local": False, "remotes": [], "commit": commit[:12], "updated": updated})
        if local:
            item["local"] = True
        else:
            item["remotes"].append(ref.removeprefix("refs/remotes/").split("/", 1)[0])
    return {
        "branch": branch or git(root, "rev-parse", "--abbrev-ref", "HEAD"),
        "commit": git(root, "rev-parse", "--short=12", "HEAD"),
        "dirty": bool(git(root, "status", "--porcelain", "--untracked-files=no")),
        "shallow": git(root, "rev-parse", "--is-shallow-repository") == "true",
        "branches": sorted(branches.values(), key=lambda item: item["name"]),
    }


def feature_governance(meta):
    result = {"state": "sem-governanca", "nextGate": None, "approved": False, "issues": []}
    if not gates.has_gates(meta):
        return result
    issues = result["issues"]
    gates.validar_estrutura(meta, "N3", issues)
    for name in gates.GATE_ORDER:
        gate = meta["gates"].get(name)
        if isinstance(gate, dict) and not isinstance(gate.get("aprovado"), bool):
            issues.append(f"Gate {name}: aprovado deve ser booleano.")
    if issues:
        result["state"] = "governanca-invalida"
        return result
    gates.validar_prefixo(meta, "N3", issues)
    gates.validar_estado(meta, "N3", issues)
    for name in gates.GATE_ORDER:
        if gates.gate_aprovado(meta, name):
            gate = meta["gates"][name]
            responsible = gate.get("por")
            stamp = str(gate.get("em", ""))
            try:
                valid_date = bool(re.fullmatch(r"\d{4}-\d{2}-\d{2}", stamp)) and bool(date.fromisoformat(stamp))
            except ValueError:
                valid_date = False
            if not isinstance(responsible, str) or not responsible.strip() or not valid_date:
                issues.append(f"Gate {name}: aprovação sem responsável ou data.")
    result.update(
        state=gates.estado_de_exibicao(meta),
        nextGate=gates.proximo_checkpoint(meta) or None,
        approved=gates.gate_aprovado(meta, "requisitos"),
    )
    if issues:
        result.update(state="governanca-invalida", approved=False, nextGate=None)
    return result


def build_snapshot(root, git_root=None, branch=None):
    root = Path(root).resolve()
    profile = gates.aplicar_perfil(str(root))
    artifacts = []
    missing = []
    for file in sorted((root / "modules").rglob("*.md")):
        relative = file.relative_to(root)
        if any(part.startswith("_") for part in relative.parts):
            continue
        text = file.read_text(encoding="utf-8")
        level = LEVEL.search(text)
        if not level:
            continue
        number, identifier = level.groups()
        meta = gates.parse_front_matter(text)
        title = re.search(r"^#\s+(.+)", text, re.MULTILINE)
        item = {
            "level": int(number), "id": identifier,
            "title": re.sub(r"^(?:Feature Set|Domínio|Major Feature Set):\s*", "", title[1]) if title else identifier,
            "path": relative.as_posix(), "domain": identifier.split("-")[0],
        }
        if number == "3":
            item.update(feature_governance(meta))
            first_content = next((line.strip() for line in text.lstrip("\ufeff").splitlines()
                                  if line.strip() and not line.strip().startswith("<!--")), "")
            if meta is None and first_content == "---":
                item.update(state="governanca-invalida", issues=["Front-matter ausente ou ilegível."])
            counting = (meta or {}).get("contagem")
            pending = counting.get("pendente") if isinstance(counting, dict) else None
            item["countPending"] = pending if isinstance(pending, bool) else None
        artifacts.append(item)
        if number == "2":
            section = re.search(r"^## Features[ \t]*\n([\s\S]*?)(?=\n## |\Z)", text, re.MULTILINE)
            if section:
                for link in re.finditer(r"\[([^\n]+?)\]\((?:<)?(\.?/?f-[^)\s>]+\.md)(?:>)?\)", section[1]):
                    target = file.parent / link[2]
                    if not target.exists():
                        missing.append({"domain": item["domain"], "title": link[1].replace("*", ""),
                                        "featureSet": identifier, "path": item["path"]})
    return {
        "schema": 1, "generatedAt": datetime.now(timezone.utc).isoformat(),
        "profile": profile, "gateOrder": list(gates.GATE_ORDER),
        "repository": repository_snapshot(Path(git_root or root), branch),
        "artifacts": sorted(artifacts, key=lambda item: (item["id"], item["path"])), "missingFeatures": missing,
        "prototypes": len([file for file in (root / "prototypes").rglob("*.html")
                           if not any(part.startswith("_biblioteca-") for part in file.parts)
                           and not any(part.lower().startswith("_template") for part in file.parts)]),
        "dataModels": len([file for file in (root / "global" / "data-models").glob("*.md")
                           if file.name != "INDEX.md"]),
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", default=".")
    parser.add_argument("--git-root")
    parser.add_argument("--branch")
    args = parser.parse_args()
    snapshot = build_snapshot(args.root, args.git_root, args.branch)
    destination = Path(args.root) / "assets" / "dashboard-data.js"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(
        "// Gerado por scripts/gera-dashboard.py; não editar.\n"
        + "window.DASHBOARD_DATA = " + json.dumps(snapshot, ensure_ascii=True) + ";\n",
        encoding="utf-8",
    )
    print(f"Dashboard gerado: {len(snapshot['artifacts'])} artefatos; "
          f"{len(snapshot['repository']['branches'])} branches conhecidas.")


if __name__ == "__main__":
    main()
