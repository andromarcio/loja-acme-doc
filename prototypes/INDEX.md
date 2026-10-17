<!-- docqui: 6.4.1 | prompt: PROMPT_PROTOTYPE_FLOW_FULL | atualizado: 2026-10-17 -->
# Protótipos — Manifesto de fidelidade e aprovação
> Fonte de verdade do vínculo **protótipo ↔ N3**, do nível de **fidelidade** e do
> **status de aprovação**. Uma tela com fidelidade **obrigatória** só vira **contrato
> de implementação** quando o protótipo está **aprovado** aqui (com quem e quando).

| Protótipo | Feature (N3) | Fidelidade | Status | Aprovado por | Data |
|---|---|---|---|---|---|
| [prototypes/vendas/checkout/flow.html](./vendas/checkout/flow.html) | `VND-CHK-01` | referência | rascunho | — | — |

## Como manter

- A pasta `prototypes/` **espelha `modules/`**: `prototypes/[dominio]/[feature-set]/[feature]/`, com os mesmos nomes de pasta e um `README.md` em cada nível — domínio (índice dos Feature Sets com protótipo), Feature Set (protótipo de fluxo) e feature (protótipos de estado). Modelos em `engine/templates/prototypes/_template/`.
- Ao **gerar** um protótipo, registre a linha com status **rascunho** e a fidelidade lida do N3 (linha `Fidelidade ao protótipo` na `## Superfície`).
- Na **aprovação**, troque o status para **aprovado** e preencha **quem** e **quando**. Só então a tela é **contrato** para a codificação.
- A implementação de telas **obrigatória** exige a **checklist de fidelidade** — `node scripts/fidelity-checklist.mjs <pasta-do-protótipo> <N3.md>` — com **todos os estados cobertos** (✅, ou ⚠️ com desvio aprovado; nenhum ❌).
- **Reforço opcional (CI, onde há runtime):** regressão visual `node scripts/proto-visual-diff.mjs <protótipo> <tela-implementada>` — roda no **repositório de código** (Playwright + app), não aqui. Ver o cabeçalho do script.

## Legenda

- **Fidelidade** — `obrigatória`: a implementação reproduz o protótipo; `referência`: guia a intenção.
- **Status** — `rascunho`: em elaboração; `aprovado`: travado como contrato (registrar quem/quando).
