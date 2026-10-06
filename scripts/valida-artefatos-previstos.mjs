#!/usr/bin/env node
// valida-artefatos-previstos.mjs — CP4: o que a spec PREVIU foi implementado?
//
// Fase 1 (repo + presença de ID). Para cada N3 `estado: implementado`, cruza os
// repositórios declarados na tabela "## Implementação" com o que o código
// REALMENTE referencia — o token do ID da feature no conteúdo (mesma convenção
// do mapa-codigo: `@ExigeFuncionalidade("EST-APR-06")`, semente do catálogo,
// migração, cabeçalho de contrato). Reprova (exit 1):
//   • repositório declarado que ESTÁ presente no checkout mas não tem NENHUM
//     arquivo referenciando o ID — previu no repo X, o repo X está aqui, e nada
//     nele aponta para a feature.
// Avisa (não reprova):
//   • repo que referencia o ID mas não está declarado na "## Implementação"
//     (implementou onde a spec não previu — mantém a tabela honesta);
//   • repositório declarado AUSENTE deste checkout — não dá para verificar aqui.
//
// Fase 2 (semeada, inativa hoje): se a coluna Caminho trouxer um caminho de
// arquivo concreto (não prosa/placeholder), confere a existência do arquivo sob
// o repo mapeado. Como os N3 de hoje usam "mergeado na main", nada dispara —
// vira checagem de nível de arquivo quando as specs passarem a declarar paths.
//
// ONDE RODA: na CI do repo de CÓDIGO (é quando o código entra), com o repo de
// doc em checkout ao lado. Cada CI enxerga só o seu repo — por isso a checagem
// é POR REPO ACESSÍVEL: repo declarado ausente não reprova, só avisa. Descobre
// backend/frontend por MAPA_BACKEND_DIR / MAPA_FRONTEND_DIR ou irmãos por prefixo
// (ver lib/mapa-codigo). Se NENHUM repo de código estiver acessível, PULA.
//
// Uso:
//   node scripts/valida-artefatos-previstos.mjs [--doc-root <dir>]
//        [--backend <dir>] [--frontend <dir>] [--estado implementado,em-desenvolvimento]
//   exit 0 = ok/pulado · 1 = feature previu e não entregou · 2 = erro de uso

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { ligarCodigo } from './lib/mapa-codigo.mjs';
import { frontMatter as lerFrontMatter } from './lib/front-matter.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));

function argOf(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}

const DOC_ROOT = resolve(argOf('--doc-root') || process.cwd());
const ESTADOS = new Set((argOf('--estado') || 'implementado').split(',').map((s) => s.trim()).filter(Boolean));

// ---- helpers de leitura de N3 (espelham o validate-doc) ----------------------
// Leitor único (lib/front-matter.mjs): tolera o carimbo antes do `---` e tira as aspas
// do valor — `estado: "implementado"` deixava de ser reconhecido e a feature era pulada.
const frontMatter = (lines) => lerFrontMatter(lines) || {};
function sectionSlice(lines, name) {
  const start = lines.findIndex((l) => l.trim() === `## ${name}`);
  if (start === -1) return null;
  const out = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].trim().startsWith('## ')) break;
    out.push(lines[i]);
  }
  return out;
}
function splitRow(row) {
  return row.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}
function tableRows(lines, name) {
  const slice = sectionSlice(lines, name);
  if (!slice) return [];
  const rows = slice.map((l) => l.trim()).filter((l) => l.startsWith('|'));
  return rows.filter((r) => !/^\|[\s:|-]+\|$/.test(r)).slice(1);
}
function isRealCell(cell) {
  const t = (cell || '').trim();
  if (!t || /^\[.*\]$/.test(t)) return false; // vazio ou placeholder [repo]
  const v = t.replace(/[`[\]]/g, '').trim();
  return Boolean(v) && !/^[—–-]+$/.test(v) && !/^repo$/i.test(v);
}
// Fase 2: a célula Caminho é um caminho de arquivo concreto (não prosa/placeholder)?
function looksLikePath(cell) {
  const t = (cell || '').replace(/[`[\]]/g, '').trim();
  return /\//.test(t) && /\.[a-z0-9]{1,5}$/i.test(t) && !/\s/.test(t);
}

function walkN3(dir, out) {
  let ents;
  try { ents = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of ents) {
    if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'engine') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walkN3(p, out);
    else if (e.name.startsWith('f-') && e.name.endsWith('.md')) out.push(p);
  }
}

// ---- coleta os N3 alvo -------------------------------------------------------
const modulesDir = join(DOC_ROOT, 'modules');
const files = [];
walkN3(modulesDir, files);

const alvos = [];
for (const f of files) {
  const lines = readFileSync(f, 'utf8').split(/\r?\n/);
  const fm = frontMatter(lines);
  if (!fm.id || !ESTADOS.has(fm.estado)) continue;
  const declaradosRepo = [];
  const declaradosPath = [];
  for (const row of tableRows(lines, 'Implementação')) {
    const cells = splitRow(row);
    if (isRealCell(cells[1])) declaradosRepo.push(cells[1].replace(/[`[\]]/g, '').trim());
    if (looksLikePath(cells[2])) declaradosPath.push({ repo: (cells[1] || '').replace(/[`[\]]/g, '').trim(), path: cells[2].replace(/[`[\]]/g, '').trim() });
  }
  alvos.push({ file: f, id: fm.id, estado: fm.estado, declaradosRepo, declaradosPath });
}

if (!alvos.length) {
  console.log(`✓ Nenhum N3 em estado {${[...ESTADOS].join(', ')}} — nada a verificar.`);
  process.exit(0);
}

// ---- liga cada feature ao código real (por token do ID) ----------------------
const cod = ligarCodigo({
  docRoot: DOC_ROOT,
  backendRoot: argOf('--backend') || undefined,
  frontendRoot: argOf('--frontend') || undefined,
  featIds: alvos.map((a) => a.id),
});

if (!cod.ok) {
  console.log('↷ Nenhum repositório de código acessível (backend/frontend) — verificação pulada.');
  console.log('  (rode na CI do repo de código, com o repo de doc ao lado, ou aponte MAPA_BACKEND_DIR/MAPA_FRONTEND_DIR.)');
  process.exit(0);
}

// repo declarado → qual lado do mapa-codigo e se está acessível
const presentes = new Map(); // nome do repo (lower) → 'back' | 'front'
if (cod.backend) presentes.set(cod.backend.toLowerCase(), 'back');
if (cod.frontend) presentes.set(cod.frontend.toLowerCase(), 'front');

let erros = 0, avisos = 0;
console.log(`Verificando ${alvos.length} feature(s) contra: ${[cod.backend, cod.frontend].filter(Boolean).join(', ')}\n`);

for (const a of alvos) {
  const byFeat = cod.byFeat[a.id] || { back: [], front: [] };
  const refCount = { back: byFeat.back.length, front: byFeat.front.length };
  const linhas = [];

  // A/B — cada repo DECLARADO e ACESSÍVEL precisa ter ≥1 arquivo referenciando o ID.
  for (const repo of a.declaradosRepo) {
    const lado = presentes.get(repo.toLowerCase());
    if (!lado) { linhas.push(`  · ${repo}: declarado, ausente deste checkout — não verificado (aviso).`); avisos++; continue; }
    if (refCount[lado] === 0) {
      linhas.push(`  ✗ ${repo}: declarado em "## Implementação", presente no checkout, mas NENHUM arquivo referencia o ID ${a.id}.`);
      erros++;
    }
  }

  // C — repo ACESSÍVEL que referencia o ID mas NÃO foi declarado (aviso).
  for (const [nome, lado] of presentes) {
    if (refCount[lado] > 0 && !a.declaradosRepo.some((r) => r.toLowerCase() === nome)) {
      linhas.push(`  ! ${nome}: referencia ${a.id} mas não está declarado na "## Implementação".`);
      avisos++;
    }
  }

  // Fase 2 (semeada) — caminho concreto declarado precisa existir sob o repo mapeado.
  for (const { repo, path } of a.declaradosPath) {
    const lado = presentes.get(repo.toLowerCase());
    if (!lado) continue; // repo ausente — não verificável aqui
    const root = lado === 'back' ? (argOf('--backend') || process.env.MAPA_BACKEND_DIR || join(DOC_ROOT, '..', `${basename(DOC_ROOT).replace(/-doc$/, '')}-backend`))
                                 : (argOf('--frontend') || process.env.MAPA_FRONTEND_DIR || join(DOC_ROOT, '..', `${basename(DOC_ROOT).replace(/-doc$/, '')}-frontend`));
    let existe = false;
    try { statSync(join(root, path)); existe = true; } catch { /* não existe */ }
    if (!existe) { linhas.push(`  ✗ ${repo}:${path} — caminho declarado não existe no repositório.`); erros++; }
  }

  if (linhas.length) console.log(`${a.id} (${a.file.replace(DOC_ROOT + '/', '')}):\n${linhas.join('\n')}`);
}

console.log('');
if (erros) {
  console.log(`❌ ${erros} artefato(s) previsto(s) sem implementação correspondente${avisos ? ` · ${avisos} aviso(s)` : ''}.`);
  console.log('   Cada feature `implementado` precisa que o código referencie o ID dela nos repositórios declarados.');
  process.exit(1);
}
console.log(`✓ Todo artefato previsto tem código correspondente${avisos ? ` · ${avisos} aviso(s)` : ''}.`);
process.exit(0);
