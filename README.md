# Loja Acme — documentação (mentoria docqui)

Instância do framework **Docqui Caixa** usada para formar analistas no método. A Loja Acme é o sistema fictício dos exercícios: uma loja virtual em que o cliente compra sozinho, com o frete e o prazo de entrega à vista antes de confirmar.

**Comece por [`mentoria/README.md`](mentoria/README.md)**: preparação, branches, regras, roteiro e o que o mentor confere. Os tickets dos exercícios estão em [`mentoria/backlog.md`](mentoria/backlog.md), e o simulador do método, em `mentoria/simulador.html` (abra no navegador).

| | |
|---|---|
| Engine | docqui-caixa-engine 6.4.1 (`VERSION`), sincronizado em `engine/` e `scripts/` — não edite essas pastas aqui |
| Perfil | `requisitos`: esteira CP1 → CP2, estado final 📋 `especificado` |
| Cadência | `sprint`: o trabalho vive na branch da sprint até o fechamento |
| Aprovador dos checkpoints | `@andromarcio` (`.github/CODEOWNERS`) |
| Site | <https://andromarcio.github.io/loja-acme-doc/>: a `main` na raiz e cada `sprint/…` aberta em `/sprint/<id>/`; o seletor *Branch* no topo troca entre elas mantendo o arquivo aberto |

| Pasta | O que guarda |
|---|---|
| `global/` | MASTER, N0, DATA-MODEL, dicionários, NFR, SIZING, CONTAGEM-PF |
| `modules/` | N1, N2 e N3, e o `INDEX.md`, que espelha tudo |
| `analise-impacto/` | as AIMs: uma por ticket e uma por sprint |
| `qa/`, `repos/`, `prototypes/` | planos de teste, inventário de repositórios, protótipos |
| `.claude/`, `.github/` | o hook `spec-guard` da sessão, a CI (`spec-guard`, `gate-check`, `promote-estado`) e o `CODEOWNERS` |
| `mentoria/` | o material da mentoria |
