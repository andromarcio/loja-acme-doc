<!-- docqui: {{VERSION}} | prompt: {{PROMPT_ID}} | atualizado: {{YYYY-MM-DD}} -->
# CONTAGEM-PF.md
> **Registro consolidado da contagem de Pontos de Função (APF / IFPUG CPM 4.3.1)**
> do sistema. Reúne num só lugar **todos os Processos Elementares (PE)** — as
> Funções de Transação EE/SE/CE — e **todas as entidades que possuem contagem**
> — as Funções de Dados ALI/AIE.
>
> Este arquivo é o **consolidado** (índice de leitura); as **fontes de cálculo** são:
> - **Funções de Transação (PE)** → a seção `## Métricas de tamanho` de cada **N3**.
> - **Funções de Dados (ALI/AIE)** → `global/DATA-MODEL.md → ## Arquivos Lógicos (APF)`
>   (validade do ALI/AIE em `global/ALI-AIE-MAP.md`).
>
> Critérios de contagem: `global/SIZING.md`.
>
> ℹ️ **Template do kit** — preencha as tabelas com os PE e entidades reais do seu
> sistema. As linhas abaixo são **exemplos** entre colchetes; substitua-as.

---

## ⚙️ Regra de manutenção (LEIA ANTES DE EDITAR)

> **Gatilho:** *sempre que um N3 for criado/alterado ou uma entidade (ALI/AIE) for
> criada/alterada, a contagem deve ser revisada e — havendo alteração — este arquivo
> deve ser atualizado.*
>
> **Quem edita este arquivo é a revisão de contagem** — a opção `CT`
> (`PROMPT_CONTAGEM`), depois da confirmação do Tech Lead/PO. O `PROMPT_3B` e o
> `PROMPT_4B` contam na fonte e pedem a revisão; não tocam este arquivo.

Procedimento da revisão, para um N3 ou uma entidade:

1. **Reconte na fonte** seguindo `global/SIZING.md`:
   - mudou um N3? → revise a tabela `## Métricas de tamanho` do próprio N3;
   - mudou uma entidade/ALI? → revise a linha em `global/DATA-MODEL.md → ## Arquivos Lógicos (APF)`.
2. **Compare com o valor registrado aqui.** Se for igual, as tabelas não mudam — mas a revisão foi feita: a feature sai de `## Pendências de contagem` e fica com `contagem.pendente: false` (registre no Changelog do N3 que a contagem permanece inalterada).
3. **Havendo alteração**, atualize **neste arquivo**: a linha do PE/entidade, os subtotais e o **Total do sistema**.
4. **Propague o total** para `modules/INDEX.md` (tabela de rastreabilidade + linha de total).
5. **Registre** a recontagem no `## Changelog` do N3 (ou no histórico desta página, para mudança de entidade).

> ⚠️ **Mudança puramente técnica** que **não** altera a lógica de processamento sob a
> ótica do usuário (tipo físico de campo, otimização de banco, refactor interno)
> **não gera nova contagem** — ver `SIZING.md → Regras de medição de serviços, item 5`.
> Nesse caso, a contagem permanece e este arquivo **não** muda.

> Regra de ouro: **as fontes (N3 e DATA-MODEL.md) mandam; este arquivo as espelha.**
> Nunca registre aqui um número que não exista na fonte.

---

## Pendências de contagem

> Features cuja **última alteração ainda não foi revisada** para Pontos de Função —
> espelho de `contagem.pendente: true` no front-matter dos N3 (status **independente**
> da esteira de gates). Uma feature entra aqui quando é criada/alterada (3A/4A/CRUD/WIZARD/RT/R1/R3)
> e **sai** quando a contagem é revisada (opção `CT` / `PROMPT_CONTAGEM`) — mesmo que a
> revisão conclua **Δ PF = 0** (o que se registra é a *revisão feita*, não a mudança do número).

| Feature (N3) | Domínio | Alteração pendente (ticket) | Desde |
|---|---|---|---|
| [ID](../modules/[dominio]/[feature-set]/[feature].md) | [Domínio] | [STRYxxxxxxx / criação] | [AAAA-MM-DD] |

> Vazia = nenhuma contagem pendente (toda alteração já foi revisada). A visão por feature
> fica na coluna **Contagem** (📋/✅) de `modules/INDEX.md`.

---

## 1. Funções de Transação — Processos Elementares (PE)

> Unidade de contagem = a **feature (N3) inteira** (front + BFF), não o endpoint.
> Ver *Arquitetura BFF* em `global/SIZING.md`. Cada PE classifica-se como **EE**, **SE** ou **CE**.

| # | Feature (N3) | Papel | Domínio | Tipo | ALR | DER | Complexidade | PF | Data | Status | Observação |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Nome da feature](../modules/[dominio]/[feature-set]/[feature].md) | [principal/acessório/—] | [Domínio] | [EE/SE/CE] | [N] | [N] | [Baixa/Média/Alta] | [PF] | [AAAA-MM-DD] | [📋/🔄/✅] |

> **PE reutilizado** — a linha `↪ [ID](…)` da tabela de um N3 — **não** ganha linha aqui: cada PE conta uma vez na aplicação, na feature onde é contado (`SIZING.md` → *PE reutilizado*).

> A coluna **Papel** espelha a da `## Métricas de tamanho` do N3 (`principal` · `acessório`; PE sem feature — workflow, integração, notificação — sai com `—`). Por feature, a soma de PF dos principais tem de bater com a da fonte — `SIZING.md` → *Papel do PE em relação à feature*.

> A coluna **Observação** guarda o que é do **processo elementar**, não de uma contagem específica: por que uma linha ficou sem PF, que convenção a equipe de métricas aplicou ali, que armadilha de leitura ela esconde. É o lugar de registrar o critério **uma vez**, para que a próxima recontagem não precise redescobri-lo — e para que uma linha zerada não se confunda com linha por preencher.


**Subtotal Funções de Transação: [N] PF** ([N] PE).

> Features `❌ Deprecadas` saem do total vigente (mantêm-se no histórico).

---

## 2. Funções de Dados — entidades com contagem (ALI / AIE)

> Espelho de `global/DATA-MODEL.md → ## Arquivos Lógicos (APF)`. A contagem de DER
> **exclui** os campos globais técnicos (createdAt, updatedAt, deletedAt) e conta o `id`
> como **1 DER por ALI**, não por tabela. Validade do
> ALI/AIE em `global/ALI-AIE-MAP.md`.

### ALIs — Arquivos Lógicos Internos

| ALI | Domínio | Entidades constituintes | RLR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|
| [Nome do ALI] | [Domínio] | [Entidade(s)] | [N] | [N] | [Baixa/Média/Alta] | [PF] | [AAAA-MM-DD] |

**Subtotal ALIs: [N] PF.**

#### Memória de cálculo — [Nome do ALI]

**RLR ([N])** — subgrupos lógicos do arquivo:
1. `[Entidade principal]` — [papel no grupo]
2. `[Entidade dependente]` — [por que entra como subgrupo, e não como AL próprio]

**DER ([N])** — atributos únicos reconhecidos pelo usuário:
- `[Entidade principal]` ([N]): [atributo] · [atributo]
- `[Entidade dependente]` ([N]): [atributo] · [atributo]
- **+1** identificador (uma vez por ALI, não por tabela)

> Não contados: [campos globais técnicos · FK interna ao próprio AL · dado de código].

### AIEs — Arquivos de Interface Externa

| AIE | Sistema externo | Entidades / estruturas usadas | RLR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|
| [Nome do AIE] | [Sistema] | [Entidade(s)] | [N] | [N] | [Baixa/Média/Alta] | [PF] | [AAAA-MM-DD] |

**Subtotal AIEs: [N] PF.**

**Subtotal Funções de Dados: [N] PF.**

---

## 3. Total do sistema

| Categoria | PF |
|---|---|
| Funções de Transação (PE: EE/SE/CE) | [N] |
| Funções de Dados (ALI/AIE) | [N] |
| **Total não ajustado (PF)** | **[N]** |

> **PF não ajustado** (FSM puro) — não adotar VAF/PF ajustado (ver `SIZING.md`).

---

## Histórico de recontagens

| Data | Autor | O que mudou | Δ PF | Total |
|---|---|---|---|---|
| [AAAA-MM-DD] | [Autor] | [Carga inicial / recontagem] | [±N / —] | [N] |

---

## Links
[SIZING.md](./SIZING.md) · [DATA-MODEL.md](./DATA-MODEL.md) · [ALI-AIE-MAP.md](./ALI-AIE-MAP.md) · [MASTER.md](./MASTER.md) · [INDEX geral](../modules/INDEX.md)
