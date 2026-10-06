#!/usr/bin/env node
// mapa-codigo.mjs — liga cada feature (ID N3) aos ARQUIVOS REAIS que a implementam
// nos repositórios de código da instância ([x]-backend, [x]-frontend), para o "Mapa
// de features" descer de spec até código. Somente-leitura e determinístico.
//
// Vínculo: um arquivo implementa a feature X quando referencia o token do ID de X
// (`ADM-MOD-01`) no conteúdo — a mesma convenção que o próprio código já usa
// (`@ExigeFuncionalidade("X")`, semente do catálogo, migração, comentário de
// contrato, cabeçalho de spec). Duas fontes de ruído são removidas:
//   • Registro compartilhado: arquivo que cita muitas features (catálogo, enum,
//     switch) não é específico de nenhuma — vai para `registros`, não para cada uma.
//   • Citação pedagógica "lição DEM-PAI-01": referência a uma lição, não
//     implementação — removida antes de casar os IDs.
//
// Os repositórios são irmãos do repo de doc por padrão, com o mesmo prefixo dele
// ("siesa-doc" → ../siesa-backend, ../siesa-frontend; "simpf-doc" → ../simpf-…);
// sobrescreva com MAPA_BACKEND_DIR / MAPA_FRONTEND_DIR. Se um
// repositório não existe (CI só com o doc), a varredura o ignora — o mapa continua
// gerando, só sem a camada de código daquele repositório.
//
// Uso direto (relatório de conferência):
//   node scripts/lib/mapa-codigo.mjs            # tabela feature × arquivos BE/FE
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const ID_RE = /\b[A-Z]{3}-[A-Z]{3}-\d{2}\b/g;
// citação pedagógica ("lição DEM-PAI-01"), não implementação — tolera quebra de
// linha e prefixo de comentário entre "lição" e o ID (`lição\n * DEM-PAI-01`).
const LICAO_RE = /li[çc][ãa]o[\s*]+[A-Z]{3}-[A-Z]{3}-\d{2}/gi;
const LIMIAR_REGISTRO = 6; // arquivo que cita >= 6 features é registro/catálogo compartilhado
const IGNORAR_DIR = new Set(['node_modules', 'target', 'dist', 'build', '.git', '.angular', 'coverage']);

// Prioridade de exibição das camadas do back-end (borda → dentro → schema → teste).
const ORDEM_CAMADA = ['api', 'aplicação', 'domínio', 'workers', 'infra', 'migração', 'config', 'outro', 'teste'];
const ORDEM_TIPO = ['rota', 'componente', 'template', 'estilo', 'serviço', 'spec', 'outro'];

function walk(dir, exts, acc = []) {
  let ents;
  try { ents = readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of ents) {
    if (e.name.startsWith('.') || IGNORAR_DIR.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, exts, acc);
    else if (exts.some((x) => e.name.endsWith(x))) acc.push(p);
  }
  return acc;
}

function camadaBackend(rel) {
  if (/\/db\/migration\//.test(rel)) return 'migração';
  if (/(^|\/)src\/test\//.test(rel)) return 'teste';
  if (/\/api\//.test(rel)) return 'api';
  if (/\/application\//.test(rel)) return 'aplicação';
  if (/\/dominio\//.test(rel)) return 'domínio';
  if (/\/workers\//.test(rel)) return 'workers';
  if (/\/infra\//.test(rel)) return 'infra';
  if (/\.(ya?ml|properties)$/.test(rel)) return 'config';
  return 'outro';
}
function tipoFrontend(rel) {
  if (rel.endsWith('.spec.ts')) return 'spec';
  if (/\.routes\.ts$/.test(rel) || /\/app\.routes\.ts$/.test(rel)) return 'rota';
  if (rel.endsWith('.service.ts')) return 'serviço';
  if (rel.endsWith('.html')) return 'template';
  if (rel.endsWith('.scss') || rel.endsWith('.css')) return 'estilo';
  if (rel.endsWith('.ts')) return 'componente';
  return 'outro';
}

// Varre um repositório e devolve { perFeat: Map<id,[{path,kind}]>, registros:[{path,nIds}] }.
function scanRepo(root, exts, classify) {
  const base = join(root, 'src');
  const dir = existsSync(base) ? base : root;
  const perFeat = new Map();
  const registros = [];
  for (const abs of walk(dir, exts)) {
    const rel = abs.slice(root.length + 1);
    let txt;
    try { txt = readFileSync(abs, 'utf8'); } catch { continue; }
    const ids = [...new Set(txt.replace(LICAO_RE, ' ').match(ID_RE) || [])];
    if (!ids.length) continue;
    if (ids.length >= LIMIAR_REGISTRO) { registros.push({ path: rel, nIds: ids.length }); continue; }
    const kind = classify(rel);
    for (const id of ids) {
      if (!perFeat.has(id)) perFeat.set(id, []);
      perFeat.get(id).push({ path: rel, kind });
    }
  }
  return { perFeat, registros };
}

function ordenar(arquivos, ordem) {
  return arquivos.slice().sort((a, b) => {
    const ia = ordem.indexOf(a.kind), ib = ordem.indexOf(b.kind);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.path.localeCompare(b.path);
  });
}

// API principal: devolve o vínculo feature → código dos dois repositórios.
export function ligarCodigo(opts = {}) {
  const docRoot = opts.docRoot || process.cwd();
  // Prefixo da instância a partir da pasta do doc: "siesa-doc" → "siesa".
  const prefixo = basename(docRoot).replace(/-doc$/, '');
  const beRoot = opts.backendRoot || process.env.MAPA_BACKEND_DIR || join(docRoot, '..', `${prefixo}-backend`);
  const feRoot = opts.frontendRoot || process.env.MAPA_FRONTEND_DIR || join(docRoot, '..', `${prefixo}-frontend`);
  const temBack = existsSync(beRoot) && statSync(beRoot).isDirectory();
  const temFront = existsSync(feRoot) && statSync(feRoot).isDirectory();

  const be = temBack ? scanRepo(beRoot, ['.java', '.sql', '.yml', '.yaml', '.properties'], camadaBackend)
    : { perFeat: new Map(), registros: [] };
  const fe = temFront ? scanRepo(feRoot, ['.ts', '.html', '.scss', '.css'], tipoFrontend)
    : { perFeat: new Map(), registros: [] };

  const byFeat = {};
  // Com featIds (as features REAIS do modules/), só elas entram — IDs achados só em
  // fixtures de teste (XXX-YYY-99, CRE-PRO-*) não viram nó. Sem featIds, devolve tudo
  // o que foi achado (modo relatório). O limiar de registro usa TODOS os tokens do
  // arquivo, então isso não muda a detecção de registro compartilhado.
  const ids = opts.featIds && opts.featIds.length
    ? new Set(opts.featIds)
    : new Set([...be.perFeat.keys(), ...fe.perFeat.keys()]);
  for (const id of ids) {
    byFeat[id] = {
      back: ordenar(be.perFeat.get(id) || [], ORDEM_CAMADA),
      front: ordenar(fe.perFeat.get(id) || [], ORDEM_TIPO),
    };
  }
  return {
    ok: temBack || temFront,
    backend: temBack ? basename(beRoot) : null,
    frontend: temFront ? basename(feRoot) : null,
    byFeat,
    registros: { back: be.registros.sort((a, b) => a.path.localeCompare(b.path)),
                 front: fe.registros.sort((a, b) => a.path.localeCompare(b.path)) },
  };
}

// ---- relatório de conferência (execução direta) -------------------------------
if (import.meta.url === `file://${process.argv[1]}`) {
  const docRoot = new URL('../..', import.meta.url).pathname;
  const featIds = walk(join(docRoot, 'modules'), ['.md'])
    .filter((p) => /\/f-[^/]+\.md$/.test(p))
    .flatMap((p) => (readFileSync(p, 'utf8').match(/^id:\s*([A-Z]{3}-[A-Z]{3}-\d{2})/m) || []).slice(1));
  const r = ligarCodigo({ docRoot, featIds });
  const ids = Object.keys(r.byFeat).sort();
  console.log(`backend=${r.backend || '—'}  frontend=${r.frontend || '—'}  features=${ids.length}`);
  console.log(`registros compartilhados: back=${r.registros.back.length} front=${r.registros.front.length}\n`);
  let comBack = 0, comFront = 0, arqBE = 0, arqFE = 0;
  console.log('FEATURE         BE  (camadas)                          FE  (tipos)');
  for (const id of ids) {
    const b = r.byFeat[id].back, f = r.byFeat[id].front;
    if (b.length) comBack++; if (f.length) comFront++;
    arqBE += b.length; arqFE += f.length;
    const bc = [...new Set(b.map((x) => x.kind))].join(',');
    const fc = [...new Set(f.map((x) => x.kind))].join(',');
    console.log(`${id.padEnd(14)} ${String(b.length).padStart(2)}  ${bc.padEnd(34)} ${String(f.length).padStart(2)}  ${fc}`);
  }
  console.log(`\ncom back=${comBack} com front=${comFront} · arquivos BE=${arqBE} FE=${arqFE}`);
  console.log('registros back:', r.registros.back.map((x) => `${x.path}(${x.nIds})`).join(', '));
}
