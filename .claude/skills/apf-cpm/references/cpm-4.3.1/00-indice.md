# CPM 4.3.1 — Manual de Práticas de Contagem (IFPUG), em português

Transcrição integral do manual, incorporada à skill como **fonte normativa**. Os arquivos de `references/` fora desta pasta são a destilação operacional — rápida de ler e suficiente na maioria das contagens; **este manual é quem decide** quando a destilação e a prática divergirem, ou quando a dúvida for de regra e não de aplicação.

> **Figuras.** Os 111 diagramas ER e telas do manual **não** foram copiados: só o texto. Eles vivem no repositório de origem, `andromarcio/metricas-software` (mesma estrutura de pastas, subdiretórios `images/`). Os links `![…](images/…)` foram mantidos como estão, de modo que copiar as imagens para cá faz tudo funcionar sem editar nada. Nenhuma regra do manual depende de ver a figura — elas ilustram os cenários de agrupamento de entidades.

## O que está em cada parte

| Parte | Conteúdo | Quando abrir |
|---|---|---|
| `00-Introducao/` | Créditos, prefácio e introdução ao CPM | Contexto; raramente necessária numa contagem |
| `Parte-1-FSM/` | Medição de tamanho funcional segundo a ISO/IEC 14143 | Dúvida sobre o que é (e o que não é) medição funcional |
| `Parte-2-A-Transicao/` | **O procedimento de contagem**: tipo de contagem, escopo e fronteira, medir funções de dados (cap. 6) e de transação (cap. 7) | É a parte operacional — as matrizes de complexidade e as regras de DER, RLR e ALR estão aqui |
| `Parte-3-Praticas-de-Contagem/` | **Os casos difíceis**: dados de código, agrupamento de arquivos lógicos, dados compartilhados, projetos de melhoria, conversão de dados | Quando a dúvida é "isto é um ALI ou faz parte de outro?", "isto conta?" — é onde a contagem realmente trava |
| `Parte-4-Exemplos/` | Exemplos resolvidos de funções de dados e de transação | Para calibrar contra um caso já decidido pelo IFPUG antes de arbitrar |
| `Parte-5-Apendices-e-Glossario/` | Tabela de cálculo, mudanças da versão anterior, tamanho funcional ajustado e o **glossário** | Definição exata de um termo; o apêndice C trata do ajuste (VAF), que este framework não adota |

## Achados da conferência (2026-08-30)

A destilação da skill foi confrontada com o manual na incorporação. Confere em tudo o que foi verificado:

- **Matrizes de complexidade** — as três (dados; EE; SE/CE) batem com `Parte-2-A-Transicao/06` e `/07`, inclusive as faixas de ALR que diferem entre EE (`0–1 · 2 · 3+`) e SE/CE (`0–1 · 2–3 · 4+`).
- **DER contado uma vez por arquivo lógico** — `Parte-2-A-Transicao/06`, regras de DER: *"se um número de funcionário aparece duas vezes em um ALI ou AIE como (1) chave do registro do funcionário e (2) chave estrangeira do registro do dependente, conte o DER apenas uma vez"*. É a regra do identificador que o `SIZING.md` adota.
- **ALR lido e mantido conta uma vez** — `Parte-2-A-Transicao/07`, regras de ALR por tipo de transação.

Os dois desvios corrigidos nesta base em 2026-08-29/30 — a tabela única de complexidade de transação e o identificador fora do DER — estavam no `SIZING.md`, não na skill: a destilação já seguia o manual nos dois pontos.
