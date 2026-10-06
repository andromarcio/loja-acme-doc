#!/usr/bin/env node
// validate-impact.mjs — valida uma AIM (Análise de Impacto) e suas invariantes.
//
// A AIM é o artefato do ticket (decisão do PO, 2026-09-28): um arquivo por ticket em
// `analise-impacto/AIM-<CHAVE>.md`, versionado à medida que o ticket avança — aberto pelo
// PROMPT_AIM com o ticket, o que ele VAI alterar e o aval do PO; fechado depois da entrega
// pela skill analise-impacto com o que ele ALTEROU. A AIM da sprint
// (`analise-impacto/AIM-<sprint>.md`) consolida os tickets entregues na sprint. Este
// validador é o contrato determinístico das duas: estrutura + cobertura + reconciliação.
// Não julga o conteúdo.
//
// AIM do ticket (`tipo: ticket`):
//   front-matter  `ticket` (a mesma chave do nome do arquivo) e `estado` da esteira:
//                 rascunho → em-análise → escopo-aprovado → em-execução → concluído
//   seções        Descrição do ticket · Critérios de aceite · Features · Artefatos
//                 impactados · Alterações na spec, por Feature Set · Reconciliação ·
//                 Changelog
//   de em-análise em diante: a `## Features` com ao menos uma feature, e o changeset sem
//                 linha de exemplo do template e com as invariantes de cobertura:
//     C1  ao menos uma linha N3 (a feature-âncora)
//     C2  linha `funcional`     → linha `QA`   (mudança funcional é testada)
//     C3  linha `não-funcional` → linha `NFR` E linha `QA` (NFR verificável)
//     AIM aberta na entrega (`aberta-na-entrega: true`): C2 e C3 viram aviso — não houve
//     escopo prévio a cobrir.
//     Existência: `alterar` sobre arquivo que não existe é erro; `criar` sobre arquivo que
//     já existe é aviso só até `escopo-aprovado` — depois, a execução o criou.
//   escopo-aprovado|em-execução|concluído → `avalizado-por`
//   concluído     → `sprint`; a visão final em `## Alterações na spec, por Feature Set`
//                   (linha com ID de feature, sem exemplo do template); a
//                   `## Reconciliação` preenchida — com conteúdo fora da citação de
//                   instrução, que pode ficar —; e cada feature da `## Features` com N3
//                   no ESTADO FINAL da esteira da instância — `implementado` no perfil
//                   `completo`, `especificado` no `requisitos` — ou `deprecado`. A AIM e
//                   o N3 têm máquinas de estado próprias (o ticket e a feature são N:N);
//                   é aqui que elas se encontram: o ticket não está entregue enquanto
//                   uma feature dele está em `revisao-necessaria`, em desenvolvimento
//                   ou por especificar.
//
// AIM da sprint (`tipo: sprint`): `sprint` no front-matter; `## Tickets da sprint` e
// `## Alterações na spec, por Feature Set` com linhas; e conferida com as AIMs dos tickets
// da pasta (em `concluído` reprova; em `rascunho`, avisa):
//     S1  os mesmos tickets — cada listado com a sua AIM, de `sprint:` igual; e toda AIM
//         com `sprint:` igual, listada — com a AIM concluída;
//     S2  cada feature e cada função de dados UMA vez; a coluna Ticket só com tickets
//         listados;
//     S3  a visão final de cada ticket dentro da sprint, nos dois sentidos: a feature
//         que ele alterou está na linha que cita a chave dele, e a linha que cita a chave
//         está na visão final dele; cada `### ALI|AIE:` dele, em `## Funções de dados
//         alteradas`; natureza incluída se algum ticket a incluiu, alterada se não
//         (PFB/PFL diferente do ticket único é aviso: os dois espelham o N3);
//     S4  o `## Apurável da sprint` como a soma das linhas — o Total sempre; Transações e
//         Funções de dados, quando a tabela as traz. Sem a seção, na concluída, é aviso.
//
// Formato anterior à AIM única — registro `demandas/<chave>.md`, `impactos/AIM-AAAA-NNN.md`
// do PROMPT_IMPACTO, relatório `ANALISE_IMPACTO_*.md` — reprova, com a instrução de migrar.
//
// Reconciliação (opcional):
//   --touched "a,b,c"    compara os artefatos declarados (caminhos) com esta lista
//   --git-base <ref>     usa `git -C <root> diff --name-only <ref>...HEAD`
//   → declarado e não tocado = escopo não cumprido; tocado e não declarado = desvio.
//
// Uso:
//   node scripts/validate-impact.mjs <analise-impacto/AIM-….md> [--root <inst>] [--touched …|--git-base …]

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { scanInstance, featureById } from './lib/trace-index.mjs';
import { perfilDa, ESTADO_FINAL } from './lib/instancia.mjs';

const args = process.argv.slice(2);
const opt = (n, d = null) => { const i = args.indexOf(n); return i !== -1 && args[i + 1] ? args[i + 1] : d; };
const FILE = args.find((a, k) => !a.startsWith('--') && a.endsWith('.md') && !['--root', '--touched', '--git-base'].includes(args[k - 1]));
if (!FILE || !existsSync(FILE)) {
  console.error('Uso: node scripts/validate-impact.mjs <analise-impacto/AIM-….md> [--root <inst>] [--touched …|--git-base …]');
  process.exit(2);
}
const ROOT = opt('--root', dirname(dirname(FILE)) || '.');
const raw = readFileSync(FILE, 'utf8');
const lines = raw.split(/\r?\n/);
const errors = [];
const warns = [];
const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

const sai = () => {
  console.log(`validate-impact — ${FILE}`);
  for (const w of warns) console.log(`  ⚠️  ${w}`);
  if (errors.length) {
    for (const e of errors) console.log(`  ✗ ${e}`);
    console.log(`\n${errors.length} erro(s), ${warns.length} aviso(s).`);
    process.exit(1);
  }
};

/* ------------------------- front-matter ------------------------- */
// Carimbo e linhas em branco antes do `---`, como o leitor único (lib/front-matter.mjs);
// o comentário de fim de linha (`campo: valor  # …`) não faz parte do valor.
function frontMatter(ls) {
  const out = {};
  let i = 0;
  while (i < ls.length && (!ls[i].trim() || /^\s*<!--.*-->\s*$/.test(ls[i]))) i++;
  if (ls[i] && ls[i].trim() === '---') {
    for (i++; i < ls.length && ls[i].trim() !== '---'; i++) {
      const m = ls[i].match(/^([a-z][\w-]*):\s*(.*)$/i);
      if (m) out[m[1].toLowerCase()] = m[2].replace(/\s+#.*$/, '').trim().replace(/^(["'])(.*)\1$/, '$2');
    }
  }
  return out;
}
const fm = frontMatter(lines);

/* --------------------- formato anterior --------------------- */
const MIGRE = 'o ticket agora tem uma AIM só, em `analise-impacto/AIM-<CHAVE>.md` — migre (CHANGELOG → 3.0.0, "AIM única")';
if (basename(FILE).startsWith('ANALISE_IMPACTO_')) {
  errors.push(`relatório pós-entrega no formato anterior (\`ANALISE_IMPACTO_*\`): ${MIGRE}.`);
  sai();
}
if (/(^|[\\/])demandas[\\/]/.test(FILE)) {
  errors.push(`registro do ticket no formato anterior (\`demandas/\`): ${MIGRE}.`);
  sai();
}
if (!fm.tipo && (fm['feature-ancora'] || fm['feature-âncora'] || fm.origem)) {
  errors.push(`AIM no formato anterior (PROMPT_IMPACTO, \`feature-ancora\`/\`origem\`, sem \`tipo\`): ${MIGRE}.`);
  sai();
}

const tipo = norm(fm.tipo);
if (!['ticket', 'sprint'].includes(tipo)) {
  errors.push('front-matter sem `tipo: ticket` ou `tipo: sprint`.');
  sai();
}

/* ----------------------------- apoio ----------------------------- */
const ID_RE = /\b[A-Z]{3}-[A-Z]{3}-\d{2}\b/;
const splitRow = (r) => r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
const temSecao = (s) => lines.some((l) => l.trim() === `## ${s}`);
const corpoDe = (s, ls = lines) => {
  const i = ls.findIndex((l) => l.trim() === `## ${s}`);
  if (i < 0) return [];
  const out = [];
  for (let k = i + 1; k < ls.length && !/^##\s/.test(ls[k].trim()); k++) out.push(ls[k]);
  return out;
};
// Tabelas de uma seção: [{ cab: [...], linhas: [[...]] }] — sem o separador.
const tabelasDe = (s, ls = lines) => {
  const out = [];
  let atual = null;
  for (const l of corpoDe(s, ls).map((x) => x.trim())) {
    if (!l.startsWith('|')) { atual = null; continue; }
    if (/^\|[\s:|-]+\|?$/.test(l)) continue;
    if (!atual) { atual = { cab: splitRow(l).map(norm), linhas: [] }; out.push(atual); continue; }
    atual.linhas.push(splitRow(l));
  }
  return out;
};
const EXEMPLO = /\[[^\]]*\]|<(?:dom|fs|slug|CHAVE)>|SIGLA-SFS-NN/i; // placeholder do template
const conteudoForaDaCitacao = (s) => corpoDe(s).join('\n').replace(/<!--[\s\S]*?-->/g, '').split('\n')
  .filter((l) => l.trim() && !/^\s*>/.test(l));

/* =========================== AIM da sprint =========================== */
if (tipo === 'sprint') {
  if (!fm.sprint || EXEMPLO.test(fm.sprint)) errors.push('front-matter sem `sprint:` (o rótulo da sprint).');
  for (const s of ['Tickets da sprint', 'Alterações na spec, por Feature Set']) {
    if (!temSecao(s)) errors.push(`falta a seção \`## ${s}\`.`);
  }
  const tickets = tabelasDe('Tickets da sprint').flatMap((t) => t.linhas).filter((c) => !EXEMPLO.test(c[0] || ''));
  const feats = tabelasDe('Alterações na spec, por Feature Set').flatMap((t) => t.linhas)
    .filter((c) => ID_RE.test(c[0] || '') && !EXEMPLO.test(c.join(' ')));
  if (temSecao('Alterações na spec, por Feature Set') && !feats.length)
    errors.push('`## Alterações na spec, por Feature Set` sem linha de feature — a AIM da sprint consolida as features entregues.');
  const conferidas = confereSprint(tickets);
  sai();
  console.log(`  ✓ AIM da sprint bem-formada — ${tickets.length} ticket(s), ${feats.length} feature(s), conferida com ${conferidas} AIM(s) de ticket${warns.length ? `, ${warns.length} aviso(s)` : ''}.`);
  process.exit(0);
}

// A AIM da sprint consolida as AIMs dos tickets (decisão do PO, 2026-09-28): os mesmos
// tickets — os de `sprint:` igual, cada um com a sua AIM —, cada feature e cada função de
// dados UMA vez, a visão final de cada ticket concluído dentro dela, e o apurável como a
// soma das linhas. Na AIM `concluído`, divergência reprova; em `rascunho`, a consolidação
// está em curso e ela é aviso. Devolve quantas AIMs de ticket da sprint foram conferidas.
function confereSprint(tickets) {
  const fechada = norm(fm.estado) === 'concluido';
  const acusa = (msg) => (fechada ? errors : warns).push(msg);
  const rotulo = String(fm.sprint || '').trim();
  const num = (c) => {
    const m = String(c ?? '').replace(/\*/g, '').match(/-?\d+(?:[.,]\d+)?/);
    return m ? Number(m[0].replace(',', '.')) : null;
  };
  const fmt = (x) => (x == null ? '—' : String(Math.round(x * 100) / 100).replace('.', ','));
  const natureza = (c) => { const v = norm(c).replace(/[`*]/g, '').trim(); return v === 'nova' ? 'incluida' : v; };
  const col = (t, re) => t.cab.findIndex((h) => re.test(h));
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const listados = [...new Set(tickets.map((c) => ((c[0] || '').match(/`([^`]+)`/) || [])[1])
    .filter(Boolean).map((k) => k.trim().toUpperCase()))];
  // A coluna Ticket: as chaves em crase (um ID de feature citado não é chave) e, sem
  // crase, as dos tickets listados — "⚠️ sem ticket" não traz nenhuma.
  const chavesDe = (cel) => {
    const s = String(cel || '');
    const out = (s.match(/`([^`]+)`/g) || []).map((x) => x.replace(/`/g, '').trim().toUpperCase())
      .filter((k) => k && !/^[A-Z]{3}-[A-Z]{3}-\d{2}$/.test(k));
    for (const k of listados)
      if (!out.includes(k) && new RegExp(`(?<![\\w-])${esc(k)}(?![\\w-])`, 'i').test(s)) out.push(k);
    return out;
  };
  const alteracoesDe = (ls) => tabelasDe('Alterações na spec, por Feature Set', ls).flatMap((t) => {
    const iF = Math.max(col(t, /^feature$/), 0);
    const iT = col(t, /^(ticket|item do jira)$/);
    const iN = col(t, /^natureza$/);
    const iB = col(t, /^pfb$/);
    const iL = col(t, /^pfl$/);
    return t.linhas.map((c) => ({ c, m: (c[iF] || '').match(ID_RE) }))
      .filter(({ c, m }) => m && !EXEMPLO.test(c.join(' ')))
      .map(({ c, m }) => ({
        id: m[0], chaves: iT >= 0 ? chavesDe(c[iT]) : [], natureza: iN >= 0 ? natureza(c[iN]) : '',
        pfb: iB >= 0 ? num(c[iB]) : null, pfl: iL >= 0 ? num(c[iL]) : null,
      }));
  });

  // O que a sprint diz.
  const linhas = alteracoesDe(lines);
  const funcoes = tabelasDe('Funções de dados alteradas').flatMap((t) => {
    const iF = col(t, /^funcao de dados$/);
    if (iF < 0) return [];
    return t.linhas.map((c) => ({ nome: (c[iF] || '').replace(/[`*]/g, '').trim(), pfb: num(c[col(t, /^pfb$/)]), pfl: num(c[col(t, /^pfl$/)]) }))
      .filter((f) => f.nome && !EXEMPLO.test(f.nome));
  });
  const repetidos = (arr) => [...arr.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())].filter(([, n]) => n > 1);
  for (const [id, n] of repetidos(linhas.map((l) => l.id)))
    acusa(`\`${id}\` aparece ${n} vezes em \`## Alterações na spec, por Feature Set\` — na AIM da sprint, cada feature entra uma vez (a coluna Ticket junta as chaves).`);
  for (const [nome, n] of repetidos(funcoes.map((f) => norm(f.nome))))
    acusa(`a função de dados \`${nome}\` aparece ${n} vezes em \`## Funções de dados alteradas\` — cada função entra uma vez.`);
  for (const l of linhas) for (const k of l.chaves)
    if (!listados.includes(k)) acusa(`\`${l.id}\` cita o ticket \`${k}\`, que não está em \`## Tickets da sprint\`.`);

  // O que as AIMs dos tickets dizem: os mesmos tickets, nos dois sentidos.
  const dir = dirname(FILE);
  const aims = readdirSync(dir).filter((n) => /^AIM-.+\.md$/.test(n)).map((n) => {
    const ls = readFileSync(join(dir, n), 'utf8').split(/\r?\n/);
    const f = frontMatter(ls);
    return { n, ls, fm: f, k: String(f.ticket || '').trim().toUpperCase() };
  }).filter((a) => norm(a.fm.tipo) === 'ticket' && a.k);
  const daSprint = rotulo ? aims.filter((a) => norm(a.fm.sprint) === norm(rotulo)) : [];
  for (const a of daSprint)
    if (!listados.includes(a.k)) acusa(`o ticket \`${a.k}\` tem \`sprint: ${rotulo}\` (\`${a.n}\`), mas não está em \`## Tickets da sprint\`.`);
  for (const k of listados) {
    const a = aims.find((x) => x.k === k);
    if (!a) acusa(`ticket \`${k}\` sem AIM em \`${dir}/\` — a sprint consolida as AIMs dos tickets.`);
    else if (norm(a.fm.sprint) !== norm(rotulo))
      acusa(`o ticket \`${k}\` está em \`## Tickets da sprint\`, mas a AIM dele ${a.fm.sprint ? `diz \`sprint: ${a.fm.sprint}\`` : 'não diz a sprint'}.`);
  }

  // A visão final de cada ticket concluído, dentro da sprint.
  const porFeature = new Map(); // id → [{ k, natureza, pfb, pfl }]
  for (const a of daSprint) {
    if (norm(a.fm.estado) !== 'concluido') {
      acusa(`a AIM do ticket \`${a.k}\` está em \`${a.fm.estado || '—'}\` — a sprint consolida a visão final dos tickets concluídos.`);
      continue;
    }
    const finais = alteracoesDe(a.ls);
    for (const f of finais) {
      if (!porFeature.has(f.id)) porFeature.set(f.id, []);
      porFeature.get(f.id).push({ ...f, k: a.k });
      const l = linhas.find((x) => x.id === f.id);
      if (!l) acusa(`\`${f.id}\` está na visão final da AIM de \`${a.k}\`, mas não em \`## Alterações na spec, por Feature Set\` da sprint.`);
      else if (!l.chaves.includes(a.k)) acusa(`\`${f.id}\`: a coluna Ticket da sprint não cita \`${a.k}\`, que alterou a feature.`);
    }
    for (const l of linhas.filter((x) => x.chaves.includes(a.k)))
      if (!finais.some((f) => f.id === l.id)) acusa(`\`${l.id}\` cita \`${a.k}\`, mas a visão final da AIM de \`${a.k}\` não tem a feature.`);
    for (const h of a.ls.filter((x) => /^###\s+(ALI|AIE):/i.test(x.trim()))) {
      const nome = h.trim().replace(/^###\s+(ALI|AIE):\s*/i, '').split(/\s+[—–]\s+/)[0].trim();
      if (nome && !EXEMPLO.test(nome) && !funcoes.some((f) => norm(f.nome) === norm(nome)))
        acusa(`a função de dados \`${nome}\` está na AIM de \`${a.k}\`, mas não em \`## Funções de dados alteradas\` da sprint.`);
    }
  }
  // Natureza e PF da linha da sprint × os das AIMs. Incluída por um ticket da sprint, a
  // feature entra nela como incluída, ainda que outro a tenha alterado depois. O PF só
  // se compara com ticket único: com dois, a sprint soma os PE de ambos uma vez só.
  for (const l of linhas) {
    const fs = (porFeature.get(l.id) || []).filter((f) => l.chaves.includes(f.k));
    if (!fs.length) continue;
    if (l.natureza && fs.every((f) => f.natureza)) {
      const espera = fs.some((f) => f.natureza === 'incluida') ? 'incluida' : 'alterada';
      const mostra = (v) => `\`${v === 'incluida' ? 'incluída' : v}\``;
      if (l.natureza !== espera)
        acusa(`\`${l.id}\`: natureza ${mostra(l.natureza)} na sprint, mas ${fs.map((f) => `${mostra(f.natureza)} na AIM de \`${f.k}\``).join(', ')}${fs.length > 1 ? ` — a sprint diz ${mostra(espera)}` : ''}.`);
    }
    const [f] = fs;
    if (fs.length === 1 && l.chaves.length === 1
      && ((f.pfb != null && l.pfb != null && f.pfb !== l.pfb) || (f.pfl != null && l.pfl != null && f.pfl !== l.pfl)))
      warns.push(`\`${l.id}\`: PFB/PFL ${fmt(l.pfb)}/${fmt(l.pfl)} na sprint e ${fmt(f.pfb)}/${fmt(f.pfl)} na AIM de \`${f.k}\` — as duas espelham o N3.`);
  }

  // O apurável é a soma das linhas: o Total, sempre; Transações e Funções de dados, quando
  // a tabela as traz — a do relatório anterior à AIM única, que o migra-aim preserva,
  // quebra as transações por origem ("Features alteradas…", "Features novas…").
  const ap = tabelasDe('Apurável da sprint')[0];
  if (!ap) {
    if (fechada) warns.push('sem `## Apurável da sprint` — a soma das transações e das funções de dados que a equipe de métricas audita.');
  } else if (ap.linhas.some((c) => EXEMPLO.test(c.join(' ')))) {
    acusa('`## Apurável da sprint` ainda com o exemplo do template (`[soma]`).');
  } else if (col(ap, /^pfb$/) < 0 || col(ap, /^pfl$/) < 0) {
    acusa('`## Apurável da sprint` sem as colunas PFB e PFL.');
  } else {
    const iB = col(ap, /^pfb$/);
    const iL = col(ap, /^pfl$/);
    const soma = (arr, campo) => arr.reduce((s, x) => s + (x[campo] || 0), 0);
    const confere = (nome, re, pfb, pfl, exigida) => {
      const c = ap.linhas.find((x) => re.test(norm(String(x[0] || '').replace(/\*/g, ''))));
      if (!c) { if (exigida) acusa(`\`## Apurável da sprint\` sem a linha ${nome}.`); return; }
      const [b, l] = [num(c[iB]), num(c[iL])];
      if (b == null || l == null) { acusa(`\`## Apurável da sprint\`, linha ${nome}: PFB/PFL sem número ("${c[iB] || ''}" / "${c[iL] || ''}").`); return; }
      if (Math.abs(b - pfb) > 0.005 || Math.abs(l - pfl) > 0.005)
        acusa(`\`## Apurável da sprint\`, linha ${nome}: ${fmt(b)} / ${fmt(l)}, mas a soma dá ${fmt(pfb)} / ${fmt(pfl)}.`);
    };
    const tr = [soma(linhas, 'pfb'), soma(linhas, 'pfl')];
    const fd = [soma(funcoes, 'pfb'), soma(funcoes, 'pfl')];
    confere('Transações', /^transac/, ...tr, false);
    confere('Funções de dados', /^funcoes de dados/, ...fd, false);
    confere('Total', /^total/, tr[0] + fd[0], tr[1] + fd[1], true);
  }
  return daSprint.length;
}

/* =========================== AIM do ticket =========================== */
const ESTADOS = ['rascunho', 'em-analise', 'escopo-aprovado', 'em-execucao', 'concluido'];
const est = norm(fm.estado);
if (!fm.estado) errors.push('front-matter sem `estado:` (rascunho|em-análise|escopo-aprovado|em-execução|concluído).');
else if (!ESTADOS.includes(est)) errors.push(`\`estado: ${fm.estado}\` não é um estado válido da esteira da AIM.`);
const depoisDe = (e) => ESTADOS.indexOf(est) >= ESTADOS.indexOf(e);

if (!fm.ticket || EXEMPLO.test(fm.ticket)) errors.push('front-matter sem `ticket:` (a chave na ferramenta de origem).');
else {
  const doNome = basename(FILE, '.md').replace(/^AIM-/, '');
  if (!basename(FILE).startsWith('AIM-') || doNome.toLowerCase() !== fm.ticket.toLowerCase())
    errors.push(`o arquivo deve se chamar \`AIM-${fm.ticket}.md\` (a chave do \`ticket:\`), não \`${basename(FILE)}\`.`);
}
const naEntrega = norm(fm['aberta-na-entrega']) === 'true';

for (const s of ['Descrição do ticket', 'Critérios de aceite', 'Features', 'Artefatos impactados',
  'Alterações na spec, por Feature Set', 'Reconciliação', 'Changelog']) {
  if (!temSecao(s)) errors.push(`falta a seção \`## ${s}\`.`);
}

// Features: o elo recíproco da `## Origem` dos N3.
const features = tabelasDe('Features').flatMap((t) => t.linhas).filter((c) => ID_RE.test(c[0] || '') && !/SIGLA-SFS-NN/.test(c[0]));
if (depoisDe('em-analise') && temSecao('Features') && !features.length)
  errors.push('`## Features` sem feature — de `em-análise` em diante, a AIM diz quais N3 realizam o ticket.');

/* ---------------------- changeset ---------------------- */
const TIPOS = new Set(['N3', 'QA', 'DATA-MODEL', 'FIELD-DICT', 'RULES-DICT', 'MESSAGE-DICT', 'ERROR-DICT',
  'NFR', 'PATTERNS', 'API-PATTERNS', 'MÉTRICA', 'METRICA', 'PROTÓTIPO', 'PROTOTIPO', 'REPOSITÓRIO', 'REPOSITORIO']);
const tabCs = tabelasDe('Artefatos impactados')[0] || { cab: [], linhas: [] };
const rows = tabCs.linhas.map((c) => ({
  artefato: (c[0] || '').replace(/`/g, ''), tipo: (c[1] || '').toUpperCase(), operacao: norm(c[2]),
  secao: c[3] || '', natureza: norm(c[4]), oque: c[5] || '', prov: c[6] || '', bruta: c.join(' | '),
}));
if (depoisDe('em-analise') && temSecao('Artefatos impactados')) {
  if (!rows.length) errors.push('a seção `## Artefatos impactados` não tem tabela de linhas.');
  if (rows.length && !(tabCs.cab.includes('artefato') && tabCs.cab.includes('tipo') && tabCs.cab.includes('natureza')))
    errors.push('cabeçalho da tabela de artefatos deve ter ao menos: Artefato, Tipo, Natureza.');
  const exemplos = rows.filter((r) => /<(?:dom|fs|slug)>|\[[^\]]*\]/.test(r.bruta));
  for (const r of exemplos) errors.push(`linha de exemplo do template no changeset: \`${r.artefato}\` — troque pelo artefato real ou apague.`);
  for (const r of rows) {
    if (r.tipo && !TIPOS.has(r.tipo)) warns.push(`Tipo desconhecido "${r.tipo}" (${r.artefato}).`);
    const isPath = /^(modules|global|qa|prototypes|analise-impacto)\//.test(r.artefato) || /\.md$/.test(r.artefato);
    const looksConcrete = isPath && !/[()<>[\]]| de /.test(r.artefato); // ignora "qa/ de X", "prototypes/ (tela…)"
    if (looksConcrete) {
      const exists = existsSync(join(ROOT, r.artefato));
      if (r.operacao === 'alterar' && !exists) errors.push(`\`${r.artefato}\` marcado \`alterar\` mas não existe — é \`criar\`?`);
      // Até o aval, `criar` sobre arquivo existente é suspeito — a linha devia ser `alterar`?
      // Da execução em diante, a passada criou o arquivo: em `em-execução` e `concluído` ele
      // existe por construção, e o aviso seria ruído em toda AIM que criou algo.
      if (r.operacao === 'criar' && exists && !depoisDe('em-execucao')) warns.push(`\`${r.artefato}\` marcado \`criar\` mas já existe — é \`alterar\`?`);
    }
  }
  const has = (pred) => rows.some(pred);
  const isFunc = (n) => n.startsWith('funcional');
  const isNF = (n) => n.includes('nao-funcional') || n.startsWith('nao');
  const cobertura = (msg) => (naEntrega ? warns : errors).push(msg + (naEntrega ? ' (AIM aberta na entrega: aviso)' : ''));
  if (!has((r) => r.tipo === 'N3')) errors.push('C1: nenhuma linha `N3` — todo ticket ancora em ao menos uma feature.');
  if (has((r) => isFunc(r.natureza)) && !has((r) => r.tipo === 'QA'))
    cobertura('C2: há mudança `funcional` sem linha `QA` — mudança funcional deve ser testada (gate CP3).');
  if (has((r) => isNF(r.natureza))) {
    if (!has((r) => r.tipo === 'NFR')) cobertura('C3: há mudança `não-funcional` sem linha `NFR`.');
    if (!has((r) => r.tipo === 'QA')) cobertura('C3: há mudança `não-funcional` sem linha `QA` (teste não-funcional que a verifique).');
  }
}

/* --------------------- portões por estado --------------------- */
if (depoisDe('escopo-aprovado') && !fm['avalizado-por'])
  errors.push(`estado \`${fm.estado}\` exige front-matter \`avalizado-por\` (o aval do PO no escopo).`);
if (est === 'concluido') {
  if (!fm.sprint) errors.push('estado `concluído` exige `sprint:` — a sprint em que o ticket foi entregue.');
  const final = tabelasDe('Alterações na spec, por Feature Set').flatMap((t) => t.linhas)
    .filter((c) => ID_RE.test(c[0] || '') && !EXEMPLO.test(c.join(' ')));
  if (!final.length)
    errors.push('estado `concluído` exige a visão final em `## Alterações na spec, por Feature Set` — o que foi alterado, uma linha por feature, sem o exemplo do template.');
  // A instrução do template vem em citação (`> Preenchida no fechamento…`) e pode ficar;
  // o que conta é o conteúdo FORA dela (e fora de comentário).
  if (!conteudoForaDaCitacao('Reconciliação').length)
    errors.push('estado `concluído` exige `## Reconciliação` preenchida (declarado × tocado) — escreva o resultado fora da citação de instrução.');

  // Cada feature no estado final da esteira do perfil (lib/instancia.mjs).
  const perfil = perfilDa(ROOT);
  const alvo = ESTADO_FINAL[perfil];
  const n3 = featureById(scanInstance(ROOT));
  for (const c of features) {
    const id = c[0].match(ID_RE)[0];
    const f = n3.get(id);
    if (!f) {
      errors.push(`\`${id}\` (## Features) não tem N3 — o ticket não fecha com feature por especificar.`);
      continue;
    }
    if (f.estado === alvo || f.estado === 'deprecado') continue;
    const como = f.estado === 'revisao-necessaria'
      ? ' A alteração foi entregue? Volte o `estado` ao derivado dos gates, rode `python3 scripts/gates.py promote --write` e atualize o Status aqui.'
      : '';
    errors.push(`\`${id}\` está em \`${f.estado || '—'}\` (${f.path}) — a AIM só fecha com cada feature no estado final da esteira desta instância, \`${alvo}\` (perfil \`${perfil}\`), ou \`deprecado\`.${como}`);
  }
}

/* ----------------------- reconciliação ------------------------ */
const touchedOpt = opt('--touched');
const gitBase = opt('--git-base');
let touched = null;
if (touchedOpt) touched = touchedOpt.split(',').map((s) => s.trim()).filter(Boolean);
else if (gitBase) {
  try {
    touched = execFileSync('git', ['-C', ROOT, 'diff', '--name-only', `${gitBase}...HEAD`], { encoding: 'utf8' })
      .split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  } catch (e) { warns.push(`reconciliação: git diff falhou (${String(e.message).split('\n')[0]}).`); }
}
if (touched) {
  const declared = rows.filter((r) => /^(modules|global|qa|prototypes)\//.test(r.artefato) && !/[()]| de /.test(r.artefato))
    .map((r) => r.artefato);
  const inSpec = (p) => /^(modules|global|qa|prototypes)\//.test(p);
  const notTouched = declared.filter((d) => !touched.includes(d));
  const notDeclared = touched.filter((t) => inSpec(t) && !declared.includes(t));
  for (const d of notTouched) errors.push(`reconciliação: \`${d}\` foi declarado mas NÃO tocado (escopo não cumprido).`);
  for (const t of notDeclared) errors.push(`reconciliação: \`${t}\` foi tocado mas NÃO declarado (desvio de escopo).`);
}

/* ------------------------------ saída ------------------------------ */
sai();
console.log(`  ✓ AIM bem-formada — ${fm.estado}, ${features.length} feature(s), ${rows.length} linha(s) no changeset${warns.length ? `, ${warns.length} aviso(s)` : ''}.`);
