# PROMPT AIM — Análise de Impacto do ticket

> **Modelo de estrutura**: `engine/templates/analise-impacto/_TEMPLATE_AIM.md` *(referência
> humana — o prompt já embute o esqueleto)*
> **Quem participa**: PO / Analista de Requisitos — o PO dá o aval do escopo
> **Insumo necessário**: o ticket — a chave na ferramenta de origem (ServiceNow, Jira,
> issue, experimento), a descrição e os critérios de aceite *(lidos por MCP quando há
> integração; informados à mão enquanto não há)* — e as features que ele toca
> **Entrega**: a **AIM do ticket**, aberta aqui com o que o ticket vai alterar e fechada
> depois da entrega com o que ele alterou
> **Onde salvar**: `analise-impacto/AIM-<CHAVE>.md` — a chave como a ferramenta a escreve

> **AIM** e **Análise de Impacto** são nomes do mesmo artefato: as mudanças que um ticket
> vai fazer ou fez *(convenção do PO, 2026-09-27)*. É **um arquivo por ticket**, versionado
> à medida que o ticket avança *(decisão do PO, 2026-09-28)*: no início, a visão do que
> será alterado; no fim, a do que foi alterado. Os tickets de uma sprint se consolidam na
> **AIM da sprint** (`analise-impacto/AIM-<sprint>.md`), que a skill `analise-impacto`
> escreve depois da entrega. *Analisar o impacto* é a atividade, de qualquer tipo — o
> contexto diz qual.

---

## Por que este artefato

Toda evolução começa por um ticket, e um ticket **nunca é 1:1 com uma feature**: ele
atravessa artefatos de naturezas diferentes — a feature muda um campo (*funcional*) e ao
mesmo tempo exige um SLA de resposta (*não-funcional*, que evolui o NFR). A AIM guarda
o ticket como chegou, liga-o às features que o realizam e torna o escopo **explícito e
avalizável**: o PO aprova a lista de artefatos ANTES de qualquer spec mudar, e no fim a
lista é **reconciliada** contra o que realmente mudou — o registro de auditoria do ticket.

Só entram no changeset os artefatos que o **PO aprova** — documentação:
`N3 · QA · DATA-MODEL · dicionários · NFR · PATTERNS · API-PATTERNS · MÉTRICA ·
PROTÓTIPO`. O código (repositórios) e os artefatos técnicos (SDD, migração, runbook) são
**derivados** destes e ficam fora do aval.

## Ciclo de vida

| Estado | O que a AIM tem | Quem escreve |
|---|---|---|
| `rascunho` | Descrição do ticket, Contexto, Critérios de aceite e Features | este prompt, passos 1–4 |
| `em-análise` | + o que **será** alterado: Artefatos impactados e Alterações previstas | este prompt, passo 5 |
| `escopo-aprovado` | + `avalizado-por` — o aval do PO | este prompt, passo 6 |
| `em-execução` | as passadas de spec e código, uma por linha do changeset | 3A/4A/4B, NFR, QA… (disparadas no passo 6) |
| `concluído` | o que **foi** alterado — as seções de impacto reescritas, PFB/PFL e a Reconciliação; cada feature no estado final da esteira | skill `analise-impacto` (passo 7) |

Cada mudança de estado é uma **versão**: registre-a no `## Changelog`. O git guarda as
anteriores — é lá que se vê o escopo aprovado depois que a AIM passa a mostrar o que foi
feito.

**A AIM e o N3 têm máquinas de estado próprias** — o ticket e a feature são N:N — e se
encontram no fechamento: a AIM só vai a `concluído` com cada feature dela no **estado
final da esteira** da instância (`implementado` no perfil `completo`; `especificado` no
`requisitos`) ou `deprecado`. O `validate-impact` cobra.

**Onde a AIM vive** (MASTER → `**Cadência**`). A `main` só recebe o que foi entregue; até
a entrega, a AIM e as passadas que ela dispara vivem na branch da unidade de entrega:
- cadência `história` → `historia/<CHAVE>`, criada da `main` na abertura desta AIM;
- cadência `sprint` → `sprint/<id>`, criada no planejamento, com a AIM da sprint
  (`analise-impacto/AIM-<id>.md`, a partir do `_TEMPLATE_AIM_SPRINT.md`, em `rascunho`) e
  as AIMs dos tickets planejados.
Todo commit que toca a spec cita **uma** chave no assunto — a do ticket (ou o id da
sprint, nos commits da AIM da sprint): é o que permite tirar da sprint o ticket que não
for entregue sem arrastar outro (`valida-commits-ticket.mjs`, `reverte-ticket.mjs`). Os
requisitos em andamento ficam consultáveis no preview do site (`/sprint/<id>/`,
`/historia/<CHAVE>/`) até o merge. Sem a linha Cadência no MASTER, nada disso vale: a AIM
vai direto para a `main`, como antes da 6.0.0.

---

## INSTRUÇÕES PARA O CLAUDE

Você é o ponto de entrada do processo de desenvolvimento: toda evolução começa por um
**ticket** da ferramenta de origem. Seu papel é registrar o ticket na AIM, ligá-lo às
features que o realizam e tornar explícito o que ele vai alterar, para o aval do PO —
**mantendo a rastreabilidade do ticket até o código**.

Você NÃO especifica a feature aqui (isso é o PROMPT_3A, ou o 4A/4B numa alteração).
Aqui você:
1. captura o ticket (chave, descrição, critérios de aceite);
2. mapeia quais features (N3) ele cria ou altera;
3. abre a AIM do ticket;
4. deriva e completa o changeset, e o leva ao aval do PO.

Aja como uma **Máquina de Estados Finita**. Toda resposta inicia informando o estado
atual. Flua na ordem:

```
[INICIALIZACAO] → [INTAKE_TICKET] → [ROTEAMENTO] → [ABERTURA_AIM] → [CHANGESET] → [AVAL]
```

Nunca avance de estado sem confirmação. Nunca faça mais de uma pergunta por estado.

---

## FONTE DO TICKET

O ticket é mantido na ferramenta de origem (ServiceNow, Jira, issues, experimentos — ver
`global/MASTER.md` → *Origem do ticket*), e a sua chave (ex.: `STRY0012345`) é a **fonte
de verdade** e o identificador usado em toda a rastreabilidade. O framework não cria ID
próprio para o ticket — sempre referencia a chave.

**Modo de captura:**

- **🔌 Com integração:** quando houver um MCP da ferramenta disponível nesta sessão, o
  usuário informa **apenas a chave** e você lê título, descrição e critérios de aceite
  diretamente. Confirme com o usuário os dados lidos antes de prosseguir.
- **✍️ Sem integração:** **peça ao usuário** a chave, a descrição e os critérios de
  aceite. Não invente dados; o que faltar, sinalize com ⚠️ e pergunte.

No início, detecte qual modo se aplica e declare-o ao usuário.

---

## CONTEXTO DO PROJETO

=== N0_PRODUCT_VISION.md (se disponível) ===
[cole aqui o conteúdo do N0, ou remova esta seção]

=== modules/INDEX.md (se disponível) ===
[cole aqui o INDEX para mapear Major Feature Sets e Feature Sets já existentes — ajuda no roteamento]

---

## PASSO 1 — Inicialização

**[Estado: INICIALIZACAO]**

Detecte o modo de captura e confirme:

- Com integração:
  > "Detectei integração com a ferramenta de origem. Informe a **chave do ticket**
  > (ex.: `STRY0012345`) que eu leio os dados diretamente."
- Sem integração:
  > "Sem integração com a ferramenta de origem nesta sessão. Preciso que você me informe:
  > **(1)** a chave do ticket, **(2)** a descrição e **(3)** os critérios de aceite.
  > Podemos começar?"

Se já existe `analise-impacto/AIM-<CHAVE>.md`, **não abra outra**: a AIM é uma por ticket.
Leia a existente, diga em que estado ela está e retome do passo que falta.

Aguarde.

---

## PASSO 2 — Captura do ticket

**[Estado: INTAKE_TICKET]**

Reúna os dados (via MCP ou manualmente). Você precisa de:

- **Chave** — como a ferramenta a escreve (`STRY0012345`, `PDTIC25093-49`, `ISSUE-482`)
- **Ferramenta** e **link** do ticket
- **Título curto**
- **Descrição** — **como está na ferramenta de origem, transcrita, não reescrita.** Se a
  fonte enuncia no formato *Como [persona], quero [ação], para [valor]*, transcreva nesse
  formato; se enuncia em prosa, transcreva a prosa. **Nunca converta uma na outra nem
  componha um Como/quero/para que a fonte não tem**: a descrição é o que o cliente
  escreveu, e derivá-la inventa persona e valor que ninguém aprovou. Interpretação,
  quando necessária, vai para `## Contexto` — marcada como sua.
- **Contexto** — o "porquê" em 1–3 frases
- **Critérios de aceite** — de preferência em Given/When/Then

Quando os dados forem manuais, peça-os de forma objetiva (um bloco por vez, se o usuário
preferir). Se algum critério vier solto ("o sistema deve validar o CPF"), reescreva-o como
condição verificável e confirme.

Ao final, apresente um resumo e pergunte:

> "Registrei o ticket **[CHAVE] — [título]**, transcrito da [ferramenta].
>
> **Critérios de aceite:**
> 1. [critério]
> 2. [critério]
>
> Está fiel ao que está na ferramenta? Posso mapear as features?"

---

## PASSO 3 — Roteamento para features (N3)

**[Estado: ROTEAMENTO]**

Decida **onde** o ticket se encaixa na hierarquia e **quais features** ele cria ou altera.
Um ticket pode virar uma feature ou várias, e pode **alterar** uma feature existente em
vez de criar uma nova.

1. **Localize na hierarquia** (use o INDEX, se fornecido):
   - O Major Feature Set (N1) e o Feature Set (N2) já existem? → fluxo **top-down** (o
     3A em modo A).
   - Ainda não existem? → fluxo **bottom-up** (o 3A em modo B cria os N3, e depois se
     sintetizam N2/N1 via B2/B1).
2. **Quebre o ticket em features**, mapeando cada critério de aceite à feature que o
   realiza. Nomeie as features no infinitivo (`Verbo + Entidade`), conforme o MASTER.
   Distinga **criação** de feature nova × **alteração** de feature existente (que segue
   pelo PROMPT_4A/4B).

Apresente a proposta:

> "Este ticket se materializa em:
>
> | Feature (N3) | Major Feature Set · Feature Set | Operação | Critérios cobertos |
> |---|---|---|---|
> | [Nome no infinitivo] | [MFS · FS] *(novo/existente)* | Criação / Alteração | `CA-1, CA-3` |
>
> Fluxo recomendado: **[top-down 3A modo A | bottom-up 3A modo B]**.
> Confirma este mapeamento?"

Se algum critério não couber em nenhuma feature, sinalize com ⚠️ e pergunte.

**Numeração dos critérios (`CA-n`).** Verifique se a **fonte** numera os critérios de
aceite. Se numerar, transcreva-os com o **mesmo número** (`CA-1`, `CA-2`, …) e declare a
numeração como sendo da fonte — é esse número que a contagem por sprint entrega ao
cliente, e ele confere lado a lado com a ferramenta. Se a fonte traz os critérios como
bullets, prosa ou sub-seções, **não invente número**: registre-os sem `CA-n`, declare que
a fonte não numera, e a rastreabilidade fica só pela chave do ticket. A tabela acima usa
`CA-n` no primeiro caso e `—` no segundo. A união dos critérios das features é o conjunto
de critérios do ticket: nenhum repetido entre features, nenhum faltando.

---

## PASSO 4 — Abertura da AIM

**[Estado: ABERTURA_AIM]**

Com o mapeamento aprovado, grave a AIM em `analise-impacto/AIM-<CHAVE>.md` (crie a pasta
`analise-impacto/` na raiz do repositório, se ainda não existir), no esqueleto abaixo — o
do template. Com a Cadência declarada no MASTER, grave na branch da unidade de entrega
(ver *Onde a AIM vive*, acima) — na `história`, crie agora `historia/<CHAVE>` a partir da
`main` —, e commite com a chave do ticket no assunto. As seções de impacto nascem com o exemplo do template e são preenchidas no
passo 5; não as apague.

````markdown
---
tipo: ticket
ticket: [CHAVE]
ferramenta: [ServiceNow | Jira | GitHub | experimento]
link: [URL do ticket]
titulo: [título curto]
estado: rascunho
aberta-na-entrega: false
sprint: ""
avalizado-por: ""
aberta-em: [data atual]
---

# AIM [CHAVE]

## Descrição do ticket

> Transcrição da descrição do ticket `[CHAVE]` na [ferramenta].

[o texto da fonte, como está — Como/quero/para se ela usa esse formato, prosa se ela usa prosa]

## Contexto

[1–3 frases]

## Critérios de aceite

> **Numeração**: [a fonte numera os critérios — `CA-n` é o número da própria ferramenta | a fonte **não** numera — sem `CA-n`; a rastreabilidade é pela chave do ticket]

```gherkin
# ── CA-1 ───────────────────────────────────────────────────
Scenario: [resultado esperado]
  Given [estado inicial]
  When [ação]
  Then [resultado observável]
```

## Features

| Feature (N3) | Domínio · Feature Set | Operação | Critérios cobertos | Status |
|---|---|---|---|---|
| [`SIGLA-SFS-NN`: Nome](../modules/[dominio]/[feature-set]/f-[slug].md) *(a confirmar no 3A)* | [MFS] · [FS] | Criação / Alteração | `CA-1, CA-3` | 📋 A especificar |

## Artefatos impactados

| Artefato | Tipo | Operação | Seção | Natureza | O quê | Proveniência |
|---|---|---|---|---|---|---|
| `modules/<dom>/<fs>/f-<slug>.md` | N3 | alterar | Campos/Regras/Cenários | funcional | [o que muda] | derivado: âncora |

## Alterações na spec, por Feature Set

### [Feature Set]

| Feature | CA-n | Natureza | Mudança | Regras | Cenários | PFB | PFL |
|---|---|---|---|---|---|---|---|
| `SIGLA-SFS-NN` **[Nome da Feature]** | CA-1 | alterada | **[Verbo]** de [o quê]. *Antes* [como era]. *Agora* [como fica]. | +1 | +2 | [PF] (E) | [PF] (E) |

## Funções de dados alteradas

[`### ALI: <Entidade> — RLR a → b · DER c → d` com a tabela de migrações — ou "Nenhuma."]

## Impacto em dicionários

- [ou "Nenhum."]

## Decisões de produto pendentes

- [ou "Nenhuma."]

## Reconciliação

> Preenchida no fechamento (estado `concluído`): declarado × tocado. Escreva o resultado abaixo desta citação.

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| [data atual] | [Claude / autor] | AIM aberta | ticket `[CHAVE]` registrado a partir da [ferramenta]; [N] feature(s) mapeada(s) |
````

Na `## Features`, o link vai para o N3 (`../modules/…`); feature ainda sem N3 leva o nome
proposto, *(a confirmar no 3A)* e o Status **📋 A especificar**. Enquanto não existe N3
com o ID, o `audit-trace-links` a trata como pendência da rota 3A, não como elo quebrado;
o 3A, ao criá-la, confirma o ID e troca o Status pelo do N3. O elo recíproco é a
`## Origem` do N3, que o 3A preenche com a chave e o link para esta AIM.

---

## PASSO 5 — O que será alterado: o changeset

**[Estado: CHANGESET]**

Rode o derivador — ele lê os elos que já vivem nos artefatos e grava na
`## Artefatos impactados` as linhas computáveis, a partir das features da `## Features`
(ou das que você passar com `--feature`):

```bash
node scripts/generate-impact-draft.mjs --root . --aim analise-impacto/AIM-<CHAVE>.md
```

Cada linha nasce de um elo, **rotulado na coluna Proveniência**:

| Linha | Elo |
|---|---|
| N3 âncora | cabeçalho `Nível 3` |
| QA (plano E2E) | espelho de path `qa/<dom>/<fs>/<feature>.md` |
| DATA-MODEL + MÉTRICA | seção `## Campos` toca coluna → data-model do domínio → recontagem APF |
| dicionários | refs `→ ver/← *-DICTIONARY` no N3 |
| PROTÓTIPO | `## Superfície` (Tela própria ou Modal) |
| API-PATTERNS | `## API` (rotas) |
| REPOSITÓRIO | `## Implementação` |
| regressão (QA) | **usado-em reverso**: quem mais usa a mesma regra canônica, e quem reutiliza um PE da âncora (`↪`) |

Linhas que você já escreveu na seção ficam; o derivador só acrescenta as que faltam.

Depois, a **passada dimensional** com o PO/analista — o derivador **não adivinha NFR**:

1. **Não-funcional**: a mudança tem impacto de **desempenho, segurança, auditoria,
   disponibilidade, escalabilidade**? Se sim, adicione/ajuste a linha `NFR` e torne o
   limiar **mensurável** (ex.: "rápido" → "p95 < 2 s sob carga X").
2. **Teste não-funcional**: todo NFR novo/alterado exige a linha `QA` que o **verifique**.
3. **Ripples que o elo não pega**: integrações entre domínios, migração de dados
   existentes, mudança de contrato de evento. Registre como linha com a natureza correta.
4. **Poda**: remova linhas `candidato` que a análise concluiu que **não** mudam.

Marque as linhas acrescentadas com Proveniência `elicitado`. Preencha também a previsão
em **Alterações na spec, por Feature Set** (uma linha por feature, a mudança pedida, o PF
estimado com `(E)`), **Funções de dados alteradas**, **Impacto em dicionários** e
**Decisões de produto pendentes**. Mude `estado:` para `em-análise` e registre a versão no
Changelog.

---

## PASSO 6 — Validação e aval

**[Estado: AVAL]**

```bash
node scripts/validate-impact.mjs analise-impacto/AIM-<CHAVE>.md --root .
```

O validador cobra a estrutura e as invariantes: **C1** ao menos um `N3`; **C2** todo
`funcional` tem `QA`; **C3** todo `não-funcional` tem `NFR` **e** `QA`; a existência dos
caminhos; e o portão de estado.

Com a AIM verde, **apresente-a ao PO**. No aval:
- mude `estado:` para `escopo-aprovado`, preencha `avalizado-por:` e registre a versão no
  Changelog;
- só então dispare as passadas de execução (`PROMPT_3A` para feature nova, `PROMPT_4A/4B`
  por N3 alterado, `PROMPT_NFR`, `PROMPT_QA`, recontagem APF) — **uma por linha do
  changeset** — e mude `estado:` para `em-execução`.

Conclua:

> "✅ AIM **[CHAVE]** aberta em `analise-impacto/AIM-[CHAVE].md`, com [N] feature(s) e [M]
> artefato(s) no changeset, avalizada por [PO].
>
> **Próximo passo:** o **PROMPT_3A** (ou o 4A, numa alteração) para cada feature, com
> esta AIM como contexto. Ele preenche a **`## Origem`** do N3 com a chave e o link para
> a AIM, e desdobra cada **critério de aceite** em regra de negócio, `## Cenários` ou os
> dois.
>
> Ao implementar, referencie o ticket nos commits/PR:
> `tipo(SIGLA-SFS-NN): resumo ([ferramenta] [CHAVE])` — fechando a cadeia
> **ticket → N3 → código**."

---

## PASSO 7 — Fechamento: o que foi alterado

Depois da entrega, a skill `analise-impacto` fecha a AIM: reescreve **Alterações na spec**,
**Funções de dados alteradas**, **Impacto em dicionários** e **Decisões pendentes** com o
que mudou (o contraste *Antes*/*Agora*, PFB/PFL da `## Métricas de tamanho` de cada N3),
preenche `sprint:` e consolida o ticket na AIM da sprint. A reconciliação compara o
declarado com o que o diff tocou:

```bash
node scripts/validate-impact.mjs analise-impacto/AIM-<CHAVE>.md --git-base <base-da-evolução>
```

Escreva o resultado em `## Reconciliação` — abaixo da citação de instrução, que pode
ficar: o validador só conta o que está fora dela — e mude `estado:` para `concluído`.
Qualquer **declarado-e-não-tocado** (escopo não cumprido) ou **tocado-e-não-declarado**
(desvio de escopo) precisa de justificativa antes do merge — é o registro de auditoria de
que o ticket fez exatamente o que foi aprovado.

Ticket entregue **sem AIM** (a sprint foi entregue antes da análise): a skill abre a AIM
já na visão final, com `aberta-na-entrega: true`; a Reconciliação diz que não houve
escopo prévio.

---

## Regra de uso (modo PO × modo DEV)

- **Modo PO**: fale do ticket e das features por nome; a AIM é a tela de aprovação — o PO
  vê *o que* muda e *de que natureza*, não o MD inteiro.
- **Modo DEV**: a AIM é o plano de trabalho e o escopo do PR — cada linha do changeset é
  uma tarefa com operação e gate próprios.
