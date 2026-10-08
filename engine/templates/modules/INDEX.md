# Índice geral de módulos
> Visão consolidada de todos os domínios do sistema.
> Mantido via PROMPT 1A/1B — atualizar após cada N1 aprovado.

---

## Domínios

| Domínio | Pasta | Responsabilidade | Feature Sets |
|---|---|---|---|
| [Nome do Domínio](./[dominio]/README.md) | `modules/[dominio]/` | [responsabilidade em uma frase] | [N] |

---

## Rastreabilidade: ticket → spec → código

| Ticket (AIM) | Feature | Domínio | Status | Contagem | PF | CFP | Repositórios |
|---|---|---|---|---|---|---|---|
| [`STRYxxxxxxx`](../analise-impacto/AIM-[CHAVE].md) | [[SIGLA]-[SFS]-[NN]: Nome da Feature](./[dominio]/[feature-set]/[feature].md) | [Domínio] | ✏️ Rascunho | 📋 | — | — | — |

<!--
  Ticket: chave do ticket que originou ou alterou a feature (seção "Origem" do N3),
  com o link da AIM do ticket (`analise-impacto/AIM-<CHAVE>.md`).
  Uma feature pode ter mais de um ticket; um ticket, mais de uma feature.
  Status: o `estado` do front-matter do N3, com o ícone da legenda abaixo — um N3
    recém-gerado é ✏️ Rascunho. Avança com os gates (um PR por checkpoint, que
    regenera a seção Esteira de checkpoints); nunca se escreve adiantado. Vale o mesmo
    na ## Features da AIM do ticket: o audit compara as duas.
  PF: a opção CT (PROMPT_CONTAGEM, passo 5) o propaga depois da revisão — o 3B e o 4B
    contam só no N3. Ver critérios em global/SIZING.md.
  Contagem: status de contagem APF da feature — espelha `contagem.pendente` do
    front-matter do N3 (INDEPENDENTE dos gates/Status). ✅ = contada (revisão de PF
    feita para a última alteração do changelog, mesmo Δ PF = 0) · 📋 = pendente
    (há alteração ainda não revisada). Alteração de spec (3A/4A/CRUD/WIZARD/RT/R1/R3) → 📋;
    revisão via opção CT / PROMPT_CONTAGEM → ✅. Lista consolidada de pendentes em
    global/CONTAGEM-PF.md → ## Pendências de contagem.
  Totais vigentes excluem features ❌ Deprecadas.

  GATES DETERMINÍSTICOS desta tabela:
  - `node scripts/audit-trace-links.mjs` prova que cada par ticket↔feature está
    nos TRÊS lugares (## Origem do N3 + ## Features da AIM + esta linha)
    — roda no hook de gravação e no CI (engine/templates/ci/spec-guard.yml).
  - `node scripts/suspect-links.mjs --mark` troca o Status para ⚠️ Revisão necessária
    quando o outro lado do elo mudou depois da última verificação (carimbos
    trace-verified). O ⚠️ gravado por ele é tolerado pelo audit até a reverificação.
-->

**Total vigente: — PF · — CFP** *(dimensionamento pendente — a opção CT propaga o total depois da revisão; critérios em `global/SIZING.md`)*

---

<!-- GATES:INICIO -->
## Esteira de checkpoints (gates)

> ⚙️ **Seção gerada por `scripts/gates.py` — não editar à mão.** Espelha o estado de cada feature na esteira (CP1 requisitos (PO/Negócio) → CP2 modelo-dados (DBA/Arquiteto) → CP3 testes (QA) → CP4 codigo (Tech Lead)). Reflete o estado em **[AAAA-MM-DD]**.

_Nenhuma feature com esteira de gates ainda._
<!-- GATES:FIM -->

---

<!-- PENDENCIAS:INICIO -->
## Pendências de especificação

> ⚙️ **Seção gerada pelo PROMPT_PENDENCIAS (PD) — não editar à mão.**
> Varre as fontes (AIMs em `analise-impacto/`, READMEs de N2, N3 com ⚠️) e espelha aqui o que está
> **pendente de especificar**. Edições manuais entre os marcadores são sobrescritas na
> próxima execução. Reflete o estado em **[AAAA-MM-DD]** — rode o **PD** para atualizar.

### Existência (falta N3)

> Algo é conhecido como necessário mas ainda **não tem N3**. Resolva pela rota indicada.

| Item | Nível | Origem | Rota |
|---|---|---|---|
| [Cancelar pedido] | N3 | [`STRYxxxxxxx`](../analise-impacto/AIM-[CHAVE].md) · N2 [Feature Set] | 3A |

### Conteúdo (⚠️ em aberto)

> O artefato **existe**, mas tem lacunas/suposições aguardando esclarecimento.

| Feature | Lacuna | Arquivo |
|---|---|---|
| [Nome da feature] | [pergunta em aberto, ex.: idade mínima exigida?] | [arquivo.md](./[dominio]/[feature-set]/[feature].md) |
<!-- PENDENCIAS:FIM -->

---

## Entidades consolidadas

| Entidade | Domínio | N1 de origem |
|---|---|---|
| [Nome da Entidade] | [Domínio] | [[dominio]/README.md](./[dominio]/README.md) |

---

## Eventos do sistema

| Evento | Publicado por | Consumido por | Payload principal |
|---|---|---|---|
| `[entidade.acao]` | [Domínio] | [Domínio] | `{ [campos] }` |

---

## Mapa de integrações entre domínios

| Domínio origem | Depende de | Tipo | Descrição |
|---|---|---|---|
| [Domínio] | [Domínio] | Leitura / Escrita / Evento | [o que consome e como] |

---

## Legenda de status

Estados da **esteira de checkpoints**, derivados dos `gates` no front-matter de cada N3. A próxima etapa só ocorre após a aprovação da anterior — ordem: requisitos → modelo-dados → testes → código.

| Ícone | Estado | Checkpoint | Descrição |
|---|---|---|---|
| ✏️ | rascunho | — | N3 em elaboração, nenhum gate aprovado |
| 📝 | requisitos-aprovados | CP1 (PO) | Requisitos validados — aguardando modelo de dados |
| 🧱 | modelo-validado | CP2 (DBA) | Modelo físico de dados validado — aguardando testes |
| 📋 | especificado | CP3 (QA) · CP2 no perfil `requisitos` | **Pronto para desenvolvimento** (CP1+CP2+CP3 aprovados; no perfil `requisitos`, CP1+CP2 — o estado final da esteira dele) |
| 🔄 | em-desenvolvimento | — | Implementação em andamento (estado manual) |
| ✅ | implementado | CP4 (code review) | Em produção, rastreabilidade preenchida |
| ⚠️ | revisao-necessaria | — | Spec e código (ou spec e ticket) divergem — a spec mudou depois da implementação, o código mudou sem a spec, ou o outro lado de um elo mudou (estado manual; o `suspect-links` também o marca) |
| ❌ | deprecado | — | Feature removida do sistema |
