#!/usr/bin/env node
// Gera assets/mapa-data.js — dados da tela "Mapa de features" do visualizador
// (index.html → renderMapaView). Data-driven: varre modules/ e monta a árvore
// Produto → N1 domínios → N2 feature sets → N3 features, com a descrição de
// cada nó e o caminho do artefato. Regerar após criar/alterar N1/N2/N3.
// Uso: node scripts/gera-mapa-features.mjs
//
// Porta do gera-mapa-features.mjs do siesa-doc — mesma lógica de varredura,
// adaptada à ordem de domínios e à identidade do SIMPF (ver global/MASTER.md).
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const MODULES = join(ROOT, 'modules');

const ORDEM_DOMINIOS = ['mensuracao', 'analise-impacto', 'contratos-fabricas', 'indicadores', 'administracao', 'parametrizacao'];

function isDir(p) { try { return statSync(p).isDirectory(); } catch { return false; } }
function read(p) { try { return readFileSync(p, 'utf8'); } catch { return ''; } }

// primeiro parágrafo após um "## Cabeçalho"
function paraApos(texto, cabecalho) {
  const re = new RegExp('##\\s+' + cabecalho + '\\s*\\n+([\\s\\S]*?)(?:\\n\\s*\\n|\\n#|$)');
  const m = texto.match(re);
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
}
function m1(texto, re) { const m = texto.match(re); return m ? m[1].trim() : ''; }

// ---- varredura ----
const dominios = [];
for (const domNome of readdirSync(MODULES)) {
  if (domNome.startsWith('_') || domNome.startsWith('.')) continue;
  const domDir = join(MODULES, domNome);
  if (!isDir(domDir)) continue;
  const domReadme = read(join(domDir, 'README.md'));
  // Título do N1: "# Major Feature Set:" (canônico desde o engine 3.0.0) ou "# Domínio:"
  // (legado) — o mesmo par que o validate-doc aceita.
  if (!/^# (?:Major Feature Set|Domínio):/m.test(domReadme)) continue;

  const dom = {
    folder: domNome,
    nome: m1(domReadme, /^# (?:Major Feature Set|Domínio):\s*(.+)$/m),
    sigla: m1(domReadme, /Nível 1[^\n]*?`([A-Z]+)`/),
    desc: paraApos(domReadme, 'Descrição'),
    path: `modules/${domNome}/README.md`,
    fss: [],
  };

  for (const fsNome of readdirSync(domDir)) {
    if (fsNome.startsWith('_') || fsNome.startsWith('.')) continue;
    const fsDir = join(domDir, fsNome);
    if (!isDir(fsDir)) continue;
    const fsReadme = read(join(fsDir, 'README.md'));
    if (!/^# Feature Set:/m.test(fsReadme)) continue;

    const fs = {
      nome: m1(fsReadme, /^# Feature Set:\s*(.+)$/m),
      sigla: m1(fsReadme, /Nível 2[^\n]*?`([A-Z-]+)`/),
      desc: paraApos(fsReadme, 'Descrição'),
      path: `modules/${domNome}/${fsNome}/README.md`,
      feats: [],
    };

    for (const arq of readdirSync(fsDir)) {
      if (!arq.startsWith('f-') || !arq.endsWith('.md')) continue;
      const t = read(join(fsDir, arq));
      const id = m1(t, /^id:\s*(.+)$/m);
      if (!id) continue;
      fs.feats.push({
        id,
        nome: m1(t, /^#\s+(.+)$/m),
        desc: paraApos(t, 'Descrição'),
        estado: m1(t, /^estado:\s*(.+)$/m) || 'rascunho',
        prioridade: m1(t, /^prioridade:\s*(.+)$/m) || '',
        mvp: /^mvp:\s*true/m.test(t),
        path: `modules/${domNome}/${fsNome}/${arq}`,
      });
    }
    fs.feats.sort((a, b) => a.id.localeCompare(b.id));
    dom.fss.push(fs); // mantém também os N2 vazios (lacunas) — visualização de cobertura
  }
  dom.fss.sort((a, b) => a.sigla.localeCompare(b.sigla));
  dominios.push(dom); // mantém também os N1 sem N2 (lacunas)
}
dominios.sort((a, b) => {
  const ia = ORDEM_DOMINIOS.indexOf(a.folder), ib = ORDEM_DOMINIOS.indexOf(b.folder);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});

const totFs = dominios.reduce((s, d) => s + d.fss.length, 0);
const totFeat = dominios.reduce((s, d) => s + d.fss.reduce((n, f) => n + f.feats.length, 0), 0);
const fssVazios = dominios.reduce((s, d) => s + d.fss.filter((f) => f.feats.length === 0).length, 0);
const domsVazios = dominios.filter((d) => d.fss.length === 0).length;

const MAPA = {
  produto: { nome: 'SIMPF', desc: 'Sistema de Mensuração de Projetos e Sistemas — sistema corporativo da Caixa para mensurar sistemas e projetos de software (APF, SNAP, COSMIC ou outro método definido pela Caixa).', path: 'global/MASTER.md' },
  dominios,
  kpi: { dominios: dominios.length, fss: totFs, feats: totFeat, fssVazios, domsVazios },
};
const json = JSON.stringify(MAPA).replace(/</g, '\\u003c');

// ---- Dados para a tela "Mapa de features" do visualizador (GitHub Pages) ----
// Consumido por index.html (renderMapaView). Cada nó traz o caminho do
// artefato — o visualizador liga cada nó ao respectivo .md.
const dataJs = '// GERADO por scripts/gera-mapa-features.mjs — não editar à mão.\n'
  + 'window.MAPA_FEATURES = ' + json + ';\n';
writeFileSync(join(ROOT, 'assets', 'mapa-data.js'), dataJs);
console.log('assets/mapa-data.js gerado: ' + dominios.length + ' domínios · ' + totFs + ' feature sets · ' + totFeat + ' features.');
