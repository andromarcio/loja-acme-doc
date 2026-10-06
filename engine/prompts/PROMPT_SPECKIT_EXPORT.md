# PROMPT — Exportação N3 → spec-kit
## Ponte: especificação (N3) → workspace do GitHub spec-kit

> **Modo**: DEV
> **Entrada**: N3 **técnicos aprovados** (3B concluído) de um Feature Set + artefatos globais
> **Saída**: workspace que o **spec-kit vanilla** consome — `.specify/memory/constitution.md`,
> `.specify/feature.json`, `specs/NNN-[feature-set]/{spec.md, plan.md, data-model.md, contracts/, quickstart.md}`
> **Pré-requisito**: todos os N3 do escopo com `estado: especificado` no front-matter (gates CP1+CP2+CP3 aprovados na esteira de checkpoints) e no `INDEX.md`
> **Próximo passo (fora deste prompt)**: no projeto-alvo, rodar o spec-kit **vanilla**:
> `/speckit.tasks` → (opcional `/speckit.analyze`) → `/speckit.implement`

---

## INSTRUÇÕES PARA O CLAUDE

Você é um engenheiro de plataforma. Sua tarefa é **traduzir** a especificação já
validada (N3 + globais) para os arquivos que o **GitHub spec-kit** sabe consumir,
**sem perda de informação** e **sem reabrir decisões de negócio**. O spec-kit é
usado *vanilla* — você **não** modifica o spec-kit; apenas **alimenta** a pasta que
ele já lê. A geração de `tasks.md` e do código fica para os comandos vanilla
`/speckit.tasks` e `/speckit.implement`, rodados depois no projeto-alvo.

### Princípio de granularidade

- **1 Feature Set (N2) = 1 "feature" do spec-kit** (uma pasta `specs/NNN-…/`).
- **1 N3 (verbo + entidade) = 1 User Story** priorizada no `spec.md`.
- O CRUD do engine (5 N3) vira 5 user stories → fatias de MVP no `/speckit.tasks`.

### Regras de geração

1. **Resolver, não referenciar.** Todo ponteiro `→ ver X` / `# ← X` do N3 deve ser
   **inlined**: abra o dicionário / `data-models/[dominio].md` / `API-PATTERNS.md`
   citado e escreva o conteúdo resolvido no artefato do spec-kit. O spec-kit não
   pode ficar com referência pendente para `global/…`.
2. **Negocial → `spec.md`; técnico → `plan.md`/`data-model.md`/`contracts/`.** Use a
   convenção de visibilidade do N3: o que está fora do `dev-only` vira `spec.md`
   (agnóstico de tecnologia); o `dev-only` vira os artefatos técnicos.
3. **Sem inventar.** Se faltar dado para um campo do spec-kit, escreva
   `[NEEDS CLARIFICATION: …]` (marcador nativo do spec-kit) — não preencha por suposição.
4. **Front-matter é a fonte estruturada.** Use `id`, `prioridade`, `entidade`,
   `endpoints`, `error_codes`, `data_model_ref`, `depende_de` para montar os artefatos
   de forma determinística; o corpo do N3 resolve o conteúdo legível.
5. **Não gerar `tasks.md`.** É produzido pelo `/speckit.tasks` vanilla. Opcionalmente,
   anexe a "Sequência de implementação" e o "Design de testes" (estilo `PROMPT_SDD`)
   como *guidance* no `plan.md`, mas sem substituir o `/speckit.tasks`.

---

## CONTEXTO DO PROJETO

=== Diretório de saída (raiz do projeto inicializado com spec-kit) ===
[caminho onde existe (ou existirá) `.specify/` — ex.: `../meu-app` ou `examples/speckit-pilot/target`]

=== MASTER.md ===
[cole/leia global/MASTER.md — inclui o bloco "Technical Context" normalizado]

=== API-PATTERNS.md ===
[cole/leia global/API-PATTERNS.md]

=== NFR.md ===
[cole/leia global/NFR.md]

=== DESIGN-SYSTEM.md ===
[cole/leia global/DESIGN-SYSTEM.md — para os estados obrigatórios de tela]

=== ERROR-DICTIONARY.md / FIELD-DICTIONARY.md / RULES-DICTIONARY.md / MESSAGE-DICTIONARY.md ===
[cole/leia os dicionários globais]

=== DATA-MODEL (fragmento do domínio) ===
[cole/leia global/data-models/[dominio].md do domínio do Feature Set]

=== N2 DO FEATURE SET ===
[cole/leia modules/[dominio]/[feature-set]/README.md]

=== N3(s) DO FEATURE SET (técnicos, estado: especificado) ===
[cole/leia todos os .md de feature do Feature Set]

---

## PASSO 0 — Gate de completude (bloqueante)

**Não exporte** se qualquer item abaixo falhar. Apresente um relatório e pare.

> **Itens sensíveis à Superfície**: `endpoints`/`## API` valem para features que
> **expõem API** (Superfície `API`, ou `Tela própria`/`Modal`/`Ação em tela` com backend).
> Uma feature `CLI`/`Job/Pipeline` **não é barrada por não ter endpoints** — o
> equivalente dela é a seção `## Execução e operação` (e o contrato de execução do
> PASSO 6). O data-model referenciado pode ser o fragmento de **entidades** ou o de
> **artefatos** (`Modelo de artefatos (dados persistidos)`), conforme o caso.

```
[ ] Todos os N3 do escopo têm front-matter com estado: especificado (gates requisitos+modelo-dados+testes aprovados)?
[ ] O estado no modules/INDEX.md de cada feature é 📋 especificado?
[ ] Todo campo de cada N3 resolve no data-model do domínio (entidades: Label PO → Label Dev → campo banco; artefatos: campo/atributo na estrutura do artefato)?
[ ] Todo error_code do front-matter existe no ERROR-DICTIONARY.md?
[ ] Feature que expõe API: todo endpoint do front-matter tem seção ## API correspondente no N3?
[ ] Feature CLI/Job/Pipeline: a seção ## Execução e operação está preenchida (comando/gatilho, parâmetros, reexecução, saídas)?
[ ] Todo ponteiro "→ ver X" do N3 aponta para um alvo existente e resolvível?
[ ] O MASTER.md tem o bloco "Technical Context" preenchido (ou marcado NEEDS CLARIFICATION)?
[ ] Cada N3 tem prioridade (P1/P2/P3) no front-matter?
```

Se houver falhas, liste-as como **lacunas bloqueantes** (com o N3 e a seção de
origem) e oriente: complete via `PROMPT_3B` / `PROMPT_4B` antes de reexportar.

---

## PASSO 1 — Resolver destino e numeração

1. Defina o **short-name** do Feature Set em kebab-case (ex.: `Contatos` → `contatos`).
2. Numere a pasta sequencialmente olhando `specs/` no diretório de saída
   (`001`, `002`, …). Resultado: `specs/NNN-[short-name]/`.
3. Garanta a existência de `.specify/memory/` no diretório de saída (o projeto-alvo
   deve ter sido inicializado com `specify init`; se não, avise o usuário).

---

## PASSO 2 — Gerar `.specify/memory/constitution.md`

As convenções globais do engine viram **princípios não-negociáveis** — o spec-kit os
trata como *gates* do `/plan` e do `/implement`. Derive **um princípio por convenção**:

| Princípio (sugerido) | Fonte no engine |
|---|---|
| Envelope de resposta de API padronizado | `MASTER.md` (Padrão de resposta) + `API-PATTERNS.md` |
| Nunca expor PK; usar chave de negócio em URLs | `MASTER.md` (O que NUNCA fazer) |
| Exclusão lógica (soft delete via `deletedAt`) | `MASTER.md` (Decisões transversais) |
| Isolamento por organização (multitenant) em toda query | `MASTER.md` / `API-PATTERNS.md` |
| Validação no backend (nunca só no client) | `MASTER.md` (Decisões transversais) |
| Códigos de erro só do ERROR-DICTIONARY | `ERROR-DICTIONARY.md` |
| Auditoria de ações críticas (AUD-01) | `NFR.md` (AUD-*) |
| Estados obrigatórios de tela (loading/empty/error/success) | `DESIGN-SYSTEM.md` |
| Requisitos não-funcionais herdados como gate | `NFR.md` (DES/SEG/CONF/…) |

Use o formato de `constitution-template.md` do spec-kit (Core Principles nomeados +
Governance). Cada princípio: nome, descrição imperativa ("MUST …") e a origem.

---

## PASSO 3 — Gerar `specs/NNN-[short-name]/spec.md`

Cabeçalho: `# Feature Specification: [Nome do Feature Set]`. Preencha as seções
**mandatórias** do `spec-template.md` do spec-kit a partir dos N3:

### User Scenarios & Testing — **uma User Story por N3**, ordenadas por `prioridade`

Para cada N3, na ordem P1 → P2 → P3:

```markdown
### User Story N - [Nome da feature do N3] (Priority: [P1/P2/P3])

[Descrição em linguagem de negócio — da seção ## Descrição do N3]

**Why this priority**: [valor de negócio — da seção ## Origem / NFR]

**Independent Test**: [como testar isolada — derive do cenário de Caminho feliz]

**Acceptance Scenarios**:
1. **Given** [...], **When** [...], **Then** [...]   ← cenários "Caminho feliz" + "Erros de validação" do N3
```

### Edge Cases

- Os grupos Gherkin **"Conflitos com dados existentes"** e **"Estados especiais"** de
  todos os N3 → bullets de Edge Case.

### Requirements

- **Functional Requirements (FR-###)**: cada item de `## Regras de negócio` dos N3
  (com as regras canônicas do `RULES-DICTIONARY` **resolvidas**) → `FR-001`, `FR-002`, …
  Formato: "System MUST …". Inclua as restrições de acesso (perfis do N2).
- **Key Entities**: a `entidade` de cada N3 + entidades de `data-models/[dominio].md`,
  descritas **sem** detalhe de implementação (isso vai no `data-model.md`).

### Success Criteria (SC-###)

- A seção `## Critérios de sucesso` de cada N3 + métricas herdadas do `NFR.md`.
  Mensuráveis e agnósticos de tecnologia.

### Assumptions

- `## Campos automáticos` dos N3 + decisões transversais do `MASTER.md`.

> **Regra spec.md**: nada de stack/endpoint/campo de banco aqui — isso é `plan.md`/`contracts/`.

---

## PASSO 4 — Gerar `specs/NNN-[short-name]/plan.md`

Use `plan-template.md` do spec-kit:

- **Summary**: objetivo do Feature Set (do N2) + abordagem técnica (da stack do MASTER).
- **Technical Context**: copie **literalmente** o bloco "Technical Context" do
  `MASTER.md` (Language/Version, Primary Dependencies, Storage, Testing, Target
  Platform, Project Type, Performance Goals, Constraints, Scale/Scope). Campos sem
  decisão → `NEEDS CLARIFICATION`.
- **Constitution Check**: liste os princípios do PASSO 2 como gates a respeitar.
- **Project Structure**: derive da estrutura de pastas/repos do `MASTER.md` e da seção
  "Arquivos a criar ou alterar" dos N3 (estilo `PROMPT_SDD` seção 10).
- *(Opcional)* anexe, como guidance, a "Sequência de implementação" e o "Design de
  testes" no estilo do `PROMPT_SDD` — sem gerar `tasks.md`.

---

## PASSO 5 — Gerar `specs/NNN-[short-name]/data-model.md`

**Resolva** o fragmento `global/data-models/[dominio].md` para as entidades do escopo:

- Entidades + campos nas **3 camadas** (Label PO / Label Dev / campo banco), tipos,
  constraints, obrigatoriedade, unicidade.
- Enums, índices, relacionamentos (incl. "Relacionamentos de seleção" / comboboxes).
- Campos globais (`id`, `organization_id`, `created_at`, `updated_at`, `deleted_at`).

Este é o arquivo que carrega Label Dev e campo banco — que o `spec.md` **não** tem.

---

## PASSO 6 — Gerar `specs/NNN-[short-name]/contracts/`

**Features que expõem API** — um arquivo por endpoint (de `endpoints` no
front-matter + seção `## API` do N3), **resolvendo** o `API-PATTERNS.md`:

```markdown
# [MÉTODO] /api/v1/[rota]

**Acesso**: [autenticado — roles …]
**Request** (body/query): [tipos com Label Dev — de ## API + data-model]
**Response 2xx**: [envelope padrão resolvido do API-PATTERNS]
**Errors**: [tabela HTTP | code | situação — códigos resolvidos do ERROR-DICTIONARY]
**Paginação/Filtros**: [quando GET de coleção — padrão do API-PATTERNS]
```

**Features `CLI`/`Job/Pipeline`** — um arquivo por comando/execução (da seção
`## Execução e operação` do N3), o **contrato de execução**:

```markdown
# [comando ou nome do job]

**Invocação**: [comando/gatilho — de ## Execução e operação + dev-only do 3B]
**Parâmetros**: [tabela parâmetro | obrigatório | efeito — com tipos do data-model]
**Pré-condições**: [ambiente e artefatos de entrada exigidos]
**Saídas**: [artefatos produzidos — formato e invariantes do data-model de artefatos]
**Códigos de saída/erros**: [situações de falha e como são reportadas]
**Reexecução**: [resumo/idempotência — o que acontece ao rodar de novo]
```

---

## PASSO 7 — Gerar `quickstart.md` e `.specify/feature.json`

- `quickstart.md` (opcional, recomendado): os cenários de **Caminho feliz** de cada N3
  como passos de validação executáveis ("para validar a US-N, faça …").
- `.specify/feature.json`: `{ "feature_directory": "specs/NNN-[short-name]" }`
  (aponta a feature ativa para os comandos a jusante do spec-kit).

---

## PASSO 8 — Conferência de fidelidade e próximos passos

Antes de encerrar, rode a checagem e apresente o resultado:

```
[ ] Cada N3 virou uma User Story priorizada no spec.md?
[ ] Toda regra de negócio virou um FR-###?
[ ] Todo cenário Gherkin virou Acceptance Scenario ou Edge Case?
[ ] Todo campo resolve em data-model.md? Todo endpoint tem contract?
[ ] Toda convenção (envelope, soft delete, isolamento, auditoria, erros) está na constitution?
[ ] Nenhum ponteiro "→ ver global/…" sobrou nos artefatos emitidos?
```

Depois informe:

> "✅ Workspace spec-kit gerado em `specs/NNN-[short-name]/`.
> Agora, **no projeto-alvo** (vanilla), rode:
> 1. `/speckit.tasks` — gera `tasks.md` organizado pelas user stories
> 2. (opcional) `/speckit.analyze` — consistência cruzada spec/plan/tasks
> 3. `/speckit.implement` — gera o código + testes
>
> Escopo desta ponte: **código + testes**. CI, container e deploy ficam fora
> (evolução futura)."
