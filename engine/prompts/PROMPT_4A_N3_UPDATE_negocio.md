# PROMPT 4A — N3 Update Negócio
## Atualização de Feature Existente · Parte negocial

> **Modelo de estrutura**: `engine/templates/modules/_template-dominio/_template-feature-set/_template-feature.md` *(referência humana — o prompt já embute o esqueleto)*
> **Quem participa**: PO + dev (ou só PO)
> **Insumo necessário**: descrição da mudança desejada + a feature alvo
> (informada por nome/palavra-chave e **localizada pelo engine**, ou colada manualmente)
> **Entrega**: N3 negocial atualizado com as mudanças solicitadas e changelog
>
> **Pré-requisito**: PROMPT_3A e PROMPT_3B originais já aprovados
> **Próximo passo**: após aprovação, usar PROMPT_4B para a parte técnica
>
> ⚠️ **Use este prompt para manutenção (Brownfield).**
> Para features novas do zero, use PROMPT_3A.

---

## INSTRUÇÕES PARA O CLAUDE

> **Protocolo obrigatório desta sessão (F1 preflight · F2 autovalidação):**
> 1. **Antes de gerar** — rode `node scripts/preflight-spec.mjs [dominio] [feature-set]` (ou, sem disco, leia o N0 + `modules/INDEX.md` + o N1/N2 pertinentes) e apresente um bloco **"Contexto verificado"**: o que já existe, IDs tomados, próximo NN livre, regras/campos já canônicos a **referenciar** (não reescrever). Não duplique ID/pasta/regra/campo existente.
> 2. **Depois de gravar** — rode `node scripts/validate-doc.mjs <arquivo>` (estrutura) **e** `node scripts/validate-feature-semantics.mjs <arquivo>` (é mesmo uma feature? — critérios FD de `engine/FEATURE-DEFINITION.md`); se algum reprovar, **apresente os desvios, corrija e repita até `✓`**. Nunca conclua com um validador reprovando.
> *(No Claude Code os hooks em `.claude/settings.json` já enforçam isso automaticamente.)*

Você vai me ajudar a atualizar uma especificação de feature (N3) já existente
do ponto de vista de negócio. Você **não reescreverá** tudo do zero —
apenas aplicará a mudança solicitada sobre o conteúdo atual.

Para evitar que o fluxo seja quebrado, você agirá como uma **Máquina de
Estados**. Toda resposta deve iniciar informando o estado atual:

```
[INICIALIZACAO] → [LOCALIZACAO_FEATURE] → [IDENTIFICACAO_MUDANCA]
                → [AVALIACAO_IMPACTO] → [ALINHAMENTO] → [GERACAO_ATUALIZACAO]
```

Regras da sessão:
- **Localize a feature antes de editar.** Nunca assuma qual é a feature alvo:
  pergunte qual é, busque-a no repositório e **confirme com o usuário** o que foi
  encontrado antes de coletar a mudança
- Trabalhe apenas na feature solicitada
- Verifique se a mudança afeta outras regras, fluxos ou campos — se sim, pergunte
- Mantenha linguagem de negócio — sem mencionar tabelas, endpoints ou tecnologias
- **Mensagens de UI**: toda mensagem exibida num cenário sai do `MESSAGE-DICTIONARY`.
  Genérica → marcador `# ← MESSAGE-DICTIONARY: BASELINE`. Específica → chave
  `<DOMINIO>_<SITUACAO>` + marcador `# ← MESSAGE-DICTIONARY: <CHAVE>` no cenário, e a
  entrada acrescentada ao catálogo na mesma entrega. Mensagem nova não catalogada é
  pendência ⚠️, não texto livre
- Faça uma pergunta de cada vez
- Sinalize suposições com ⚠️

---

## CONTEXTO DO PROJETO

=== MASTER.md ===
[cole aqui o conteúdo do MASTER.md]

=== FIELD-DICTIONARY.md ===
[cole aqui o conteúdo do FIELD-DICTIONARY.md]

=== RULES-DICTIONARY.md ===
[cole aqui o conteúdo do RULES-DICTIONARY.md]

=== N3 EXISTENTE DA FEATURE ===
[**No Claude Code**: deixe em branco — o engine localiza a feature no passo
LOCALIZACAO_FEATURE a partir do nome/palavra-chave que você informar.
**No fluxo copy-paste**: cole aqui o .md negocial atual da feature.]

=== AIM DO TICKET *(opcional — do PROMPT_AIM)* ===
[cole aqui a AIM do ticket que motiva esta alteração — `analise-impacto/AIM-<CHAVE>.md`.
Quando presente, acrescente a chave do ticket à seção `## Origem` do N3, com o link
da AIM e Tipo "Alteração", e registre-a no changelog.]

---

## PASSO 1 — Inicialização

**[Estado: INICIALIZACAO]**

Confirme o que foi recebido e aguarde:
> "Vamos atualizar uma feature existente. Posso iniciar localizando a feature que
> você quer alterar?"

---

## PASSO 2 — Localização da feature

**[Estado: LOCALIZACAO_FEATURE]**

Nunca assuma qual é a feature alvo. Identifique-a junto com o usuário antes de
qualquer coleta de mudança.

**1. Pergunte qual feature** (se ainda não foi informada por nome/ID/palavra-chave):
> "Qual feature você quer alterar? Pode informar o nome, o ID (ex.: `USR-PRM-01`)
> ou uma palavra-chave do que ela faz."

**2. Busque a feature no repositório:**
- **No Claude Code (com ferramentas de arquivo):** procure nos N3 em
  `modules/**/[feature].md` por correspondências no nome do arquivo, na `## Descrição`,
  no ID e nos campos. Não peça para colar o conteúdo — leia direto do disco.
- **No fluxo copy-paste:** use o N3 colado na seção CONTEXTO; se nenhum foi colado,
  peça que cole o N3 da feature.

**3. Apresente o que foi encontrado e confirme** antes de avançar:
- Se houver **uma** correspondência clara, mostre um cartão de identificação e peça
  confirmação:
  > "Encontrei esta feature:
  > - **Feature:** [nome] (`[ID]`)
  > - **Caminho:** `modules/[dom]/[fs]/[feat].md`
  > - **Descrição:** [1º parágrafo da ## Descrição — a entrega]
  > - **Campos:** [lista curta dos Label PO]
  >
  > É esta que você quer alterar?"
- Se houver **mais de uma** correspondência, liste as candidatas (nome, ID, caminho,
  descrição em uma linha) e peça para o usuário escolher — **uma pergunta**.
- Se **nenhuma** for encontrada, informe e pergunte se a feature usa outro nome ou se
  ainda não foi especificada (nesse caso, é caso de PROMPT_3A, não de manutenção).

Só transite para `IDENTIFICACAO_MUDANCA` após o usuário confirmar a feature. A partir
daqui, leia o N3 confirmado como base e trabalhe apenas sobre ele.

---

## PASSO 3 — Identificação da mudança

**[Estado: IDENTIFICACAO_MUDANCA]**

Faça esta pergunta e aguarde:
> "O que você deseja alterar, adicionar ou remover nesta feature?
> Descreva a necessidade em linguagem de negócio.
> Se a mudança vem de um ticket (ServiceNow, issue, experimento), informe a chave
> (ex.: `STRYxxxxxxx`) para eu registrá-la na seção `## Origem` e no changelog."

---

## PASSO 4 — Avaliação de impacto negocial

**[Estado: AVALIACAO_IMPACTO]**

Com base na resposta, avalie no N3 existente os pontos abaixo.
Para cada ponto com impacto, formule uma pergunta de esclarecimento —
**uma por vez**, aguardando resposta antes da próxima:

- **Campos**: novos campos são necessários? Algum campo sai ou muda? Todo campo
  novo/alterado precisa da coluna **Entidade** preenchida (entidade dona — principal por
  padrão; outra entidade / `externo:` / `derivado ↓` quando for o caso). Se a mudança
  cria um campo **calculado**, atualize a seção `## Derivações` (fórmula + campos-fonte
  com entidade). Entidade citada e ainda inexistente no data-model → `⚠️` + opção `DM`.
- **Regras de negócio**: a mudança altera regras atuais ou insere uma nova?
- **Dicionários**: se a mudança introduz (ou revela) um campo ou regra com
  potencial de reuso, proponha ⚠️ promovê-lo ao FIELD-DICTIONARY / RULES-DICTIONARY
  (com aprovação) em vez de registrá-lo apenas inline. Se a mudança altera um
  campo/regra **já canônico**, sinalize que o dicionário pode precisar de ajuste.
- **Cenários**: quais novos cenários surgem? Quais ficam obsoletos?
- **Comportamento de tela**: a UI precisará de mudanças?
- **Lista ou funcionalidade compartilhada**: se a mudança toca um PE que esta feature
  reutiliza — linha com `↪ [ID](…)` na `## Métricas de tamanho` (`SIZING.md` → *PE
  reutilizado*) —, ela vale para toda tela que o usa. Pergunte se é isso: sendo, a
  alteração vai para o PE onde ele conta — o ticket entra também na `## Origem` e no
  Changelog da feature `ID`, com a contagem pendente — e as outras features que o
  reutilizam entram na AIM como regressão (`node scripts/generate-impact-draft.mjs`
  as lista). Se a mudança vale só para esta tela, a lista deixa de ser a mesma: esta
  feature passa a ter um PE próprio.

Exemplo de pergunta:
> "Notei que você quer adicionar 'Data de validade'. Esse campo será obrigatório?"

---

## PASSO 5 — Alinhamento final

**[Estado: ALINHAMENTO]**

Após todas as perguntas respondidas, apresente um resumo das mudanças
alinhadas e confirme:
> "Com base no que discutimos, as mudanças negociais são:
> [lista resumida]. Posso gerar a versão atualizada do N3?"

---

## PASSO 6 — Geração da atualização

**[Estado: GERACAO_ATUALIZACAO]**

Gere a versão atualizada das seções negociais do N3 afetadas,
evidenciando o que mudou. Se a alteração veio de um ticket, adicione a linha
correspondente à seção `## Origem` (Tipo "Alteração", com o link da AIM do ticket). Adicione ou atualize a
seção de changelog. **Insira a nova linha no topo da tabela** (logo abaixo do
cabeçalho), mantendo o changelog em **ordem decrescente por data** — a entrada
mais recente sempre primeiro:

```markdown
## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| [data] | [nome] | Novo campo / Regra alterada / Correção | [o que mudou e por quê] |
| [data anterior] | … | … | … |
```

**Marque a contagem como pendente** (bloco `contagem` do front-matter, independente dos
gates): toda alteração de spec que gerou entrada no changelog exige nova revisão de PF —
defina `contagem.pendente: true` (deixe `revisada_em`/`revisada_ate` como estavam, para
manter o histórico da última revisão). Isso vale **mesmo que você ache que a contagem não
muda** — quem decide é a revisão via opção CT. Propague o marcador: na tabela de
rastreabilidade do `modules/INDEX.md`, coluna **Contagem** = 📋 (pendente) para esta
feature; e acrescente-a a `global/CONTAGEM-PF.md → ## Pendências de contagem` (se ainda não
constar). Não toque nos gates nem em `estado`.

Apresente apenas as seções alteradas (não repita o que não mudou).
Se houver promoções aprovadas a dicionários, liste-as como ação pendente
(⚠️ aplicar no FIELD-DICTIONARY / RULES-DICTIONARY antes de implementar).
Pergunte:
> "A atualização negocial do N3 de [feature] está correta?
> Ajusta algo ou avanço para a parte técnica via PROMPT_4B?"

---

## PASSO 7 — Fechar o elo recíproco (se a alteração veio de um ticket)

**[Estado: GERACAO_ATUALIZACAO]**

> Execute **somente se** um ticket motivou esta alteração (uma linha Tipo
> "Alteração" foi adicionada à `## Origem` no PASSO 6). O elo ticket ↔ feature
> é **M:N** e precisa ficar registrado dos dois lados mais o índice — senão o
> caminho inverso ("quais features este ticket alterou?") fica incompleto.

Atualize os outros dois lados, espelhando a linha que entrou na `## Origem`:

**1. `analise-impacto/AIM-<CHAVE>.md`** — na seção `## Features` da AIM do ticket,
adicione a linha desta feature se ainda não constar (Operação "Alteração"), e
registre uma linha no topo do Changelog da AIM ("Feature alterada") — mantendo o
Changelog em ordem decrescente por data. A linha da feature no changeset da AIM
(`## Artefatos impactados`) é a desta passada: a execução segue o escopo que o PO
avalizou.

**2. `modules/INDEX.md`** — garanta que existe a linha do par ticket↔feature na
tabela `## Rastreabilidade: ticket → spec → código` (adicione se faltar;
atualize o Status se ele mudou com esta alteração).

**No Claude Code (com ferramentas de arquivo):** edite os arquivos direto no disco.
**No fluxo copy-paste:** entregue os blocos como patch para o usuário aplicar.

> 💡 Para auditar todos os elos de uma vez e detectar links unilaterais, use o
> **PROMPT_AUDIT_TRACE_LINKS** (opção **AT** no menu).
