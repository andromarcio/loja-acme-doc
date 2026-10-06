## Checkpoint da esteira (gates)

Qual checkpoint este PR conclui? (marque **um**)

- [ ] **CP1 — Requisitos** (PO) → gate `requisitos`
- [ ] **CP2 — Modelo físico de dados** (DBA) → gate `modelo-dados`
- [ ] **CP3 — Casos de teste** (QA) → gate `testes`
- [ ] **CP4 — Código** (Tech Lead) → gate `codigo`
- [ ] Nenhum — alteração de conteúdo que não conclui checkpoint

### Confirmação

- [ ] No(s) N3 afetado(s), marquei `aprovado: true` **apenas** no gate acima e preenchi `por` e `em` (AAAA-MM-DD).
- [ ] O checkpoint **anterior** já está aprovado na `main` (a esteira não permite pular etapas).
- [ ] Rodei `python scripts/gates.py promote --write` e **incluí o `modules/INDEX.md` atualizado** neste PR (o gate-check reprova espelho defasado).
- [ ] (CP2) Incluí as mudanças do `DATA-MODEL.md` neste PR, para o DBA ser revisor obrigatório.
- [ ] (CP3) Incluí o **plano de testes** em `qa/[dominio]/[feature-set]/[feature].md` neste PR — o gate-check exige, e é o que torna o QA revisor obrigatório.
- [ ] (CP4) Incluí o **registro da implementação** em `repos/` (e a `## Implementação` do N3 preenchida) neste PR — o gate-check exige, e é o que torna o Tech Lead revisor obrigatório.

> A verificação automática **Esteira de gates — check** valida a ordem; o review
> do CODEOWNER valida quem aprova.

---

**Feature(s):** `[SIGLA]-[SFS]-[NN]` · **Ticket:** `[STRYxxxxxxx]` — AIM em `analise-impacto/AIM-[CHAVE].md`

[Descreva a mudança.]
