#!/usr/bin/env node
// monta-site-preview.mjs — o site da instância: a `main` na raiz e, ao lado, cada branch de
// entrega ainda não mesclada, para consultar os requisitos antes do merge.
//
// Por quê (decisão do PO, 2026-10-05): a `main` só recebe o que foi entregue — e, até o
// merge, os requisitos da sprint (ou da história) em andamento precisam continuar
// consultáveis no mesmo site, não só no GitHub. O GitHub Pages publica um artefato só,
// substituído a cada deploy: por isso cada deploy remonta TUDO — a `main` e todas as
// branches de entrega abertas —, venha o push de onde vier.
//
//   _site/                       ← a main (o que está em produção)
//   _site/sprint/<id>/           ← cada `sprint/<id>` aberta
//   _site/historia/<CHAVE>/      ← cada `historia/<CHAVE>` aberta
//   _site/previews.json          ← a lista, para o visualizador montar o seletor
//   _site/<tipo>/<id>/preview.json ← { tipo, id, branch, commit, data } — a faixa
//                                   "requisitos ainda não entregues" do visualizador
//
// "Aberta" = a branch existe no remoto e não está contida na main (`merge-base
// --is-ancestor`): mesclada e não apagada, ela sai do site no deploy seguinte. Em cada
// cópia roda o gerador da árvore do visualizador (`assets/generate-tree.js`), que é da
// instância; sem ele, a cópia sai sem árvore e o script avisa.
//
// Uso (a partir da raiz da instância, com o checkout da main e as branches buscadas):
//   node scripts/monta-site-preview.mjs [--out _site] [--remote origin]

import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { unidadeDaBranch } from './lib/instancia.mjs';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const ROOT = resolve('.');
const OUT = resolve(opt('--out', '_site'));
const REMOTE = opt('--remote', 'origin');
const git = (...a) => execFileSync('git', ['-C', ROOT, ...a], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();

const FORA = new Set(['.git', 'node_modules', '_site']);
function copia(de, para) {
  mkdirSync(para, { recursive: true });
  for (const n of readdirSync(de)) {
    if (FORA.has(n) || resolve(de, n) === OUT) continue;
    cpSync(join(de, n), join(para, n), { recursive: true });
  }
}
function arvore(dir, rotulo) {
  const gerador = join(dir, 'assets', 'generate-tree.js');
  if (!existsSync(gerador)) { console.log(`  ⚠ ${rotulo}: sem assets/generate-tree.js — publicado sem a árvore do visualizador.`); return; }
  execFileSync('node', [gerador], { cwd: dir, stdio: ['ignore', 'ignore', 'inherit'] });
}

rmSync(OUT, { recursive: true, force: true });
copia(ROOT, OUT);
arvore(OUT, 'main'); // antes dos previews: a árvore da main não pode embuti-los
console.log(`✓ main → ${OUT}`);

const refs = git('for-each-ref', '--format=%(refname:short)', `refs/remotes/${REMOTE}/sprint`, `refs/remotes/${REMOTE}/historia`)
  .split('\n').filter(Boolean);
const previews = [];
for (const ref of refs) {
  const unidade = unidadeDaBranch(ref.replace(new RegExp(`^${REMOTE}/`), ''));
  if (!unidade) continue;
  let mesclada = false;
  try { git('merge-base', '--is-ancestor', ref, 'HEAD'); mesclada = true; } catch { /* não contida na main: aberta */ }
  if (mesclada) { console.log(`  · ${ref}: já mesclada na main — fora do site.`); continue; }
  const tmp = mkdtempSync(join(tmpdir(), 'preview-'));
  try {
    git('worktree', 'add', '--detach', tmp, ref);
    const caminho = `${unidade.tipo}/${unidade.id}`;
    const destino = join(OUT, unidade.tipo, unidade.id);
    copia(tmp, destino);
    arvore(destino, caminho);
    const info = {
      tipo: unidade.tipo, id: unidade.id, branch: `${unidade.tipo}/${unidade.id}`, caminho: `${caminho}/`,
      commit: git('rev-parse', '--short=12', ref), data: git('log', '-1', '--format=%cs', ref),
    };
    writeFileSync(join(destino, 'preview.json'), `${JSON.stringify(info, null, 2)}\n`);
    previews.push(info);
    console.log(`✓ ${ref} → ${caminho}/`);
  } finally {
    try { git('worktree', 'remove', '--force', tmp); } catch { rmSync(tmp, { recursive: true, force: true }); }
  }
}
writeFileSync(join(OUT, 'previews.json'), `${JSON.stringify(previews, null, 2)}\n`);
console.log(`${previews.length} branch(es) de entrega aberta(s) no site.`);
