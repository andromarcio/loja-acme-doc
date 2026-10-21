// Desde a 7.0.0, os níveis têm nome em português: Domínio (N1), Agrupamento Funcional (N2) e
// Funcionalidade (N3). Os artefatos que as instâncias já têm continuam com os nomes anteriores
// até rodar o migra-niveis, e os leitores aceitam os dois.
const LEGADO = {
  'Agrupamentos Funcionais': 'Feature Sets',
  'Funcionalidades': 'Features',
  'Alterações na spec, por Agrupamento Funcional': 'Alterações na spec, por Feature Set',
  'Dependências entre funcionalidades': 'Dependências entre features',
  'Domínios previstos (N1)': 'Major Feature Sets previstos (N1)',
};
const ATUAL = Object.fromEntries(Object.entries(LEGADO).map(([atual, legado]) => [legado, atual]));

// Nomes aceitos de uma seção `## …`: o atual primeiro, o legado depois.
export const nomesDaSecao = (nome) => (LEGADO[nome] ? [nome, LEGADO[nome]] : [nome]);
export const ehSecao = (linha, nome) => nomesDaSecao(nome).some((n) => linha.trim() === `## ${n}`);
// Nome atual de uma seção lida (o legado vira o atual; os demais ficam como estão).
export const secaoAtual = (nome) => ATUAL[nome] || nome;

export const TITULO_N1 = /^# (?:Domínio|Major Feature Set):\s*/;
export const TITULO_N2 = /^# (?:Agrupamento Funcional|Feature Set):\s*/;
