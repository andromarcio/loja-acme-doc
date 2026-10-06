# PROMPT_CONTAGEM — Contagem de Pontos de Função (APF) por escopo

> **Quando usar**: você quer **contar (ou recontar) Pontos de Função** de um
> recorte do sistema já especificado — uma **feature**, um **feature set** ou um
> **domínio** inteiro — em **uma única passada**, sem a elicitação
> pergunta-a-pergunta. O prompt lê a documentação existente (N3, DATA-MODEL),
> aplica as regras do IFPUG CPM 4.3.1, **grava a contagem na fonte onde ela já
> mora** e, **só após a sua confirmação**, atualiza o consolidado
> `global/CONTAGEM-PF.md`.
>
> **Quem participa**: Dev/Analista de Métricas (conduz) + Tech Lead/PO (confirma).
>
> **Insumo necessário**:
> - Um **código de escopo** (ver *Passo 0*): feature, feature set ou domínio.
> - Os N3 do escopo já especificados (idealmente pós-`PROMPT_3B`).
> - `global/DATA-MODEL.md` e os fragmentos `global/data-models/[dominio].md`.
> - Critérios em `global/SIZING.md` (regras CAIXA — **prevalecem** sobre o genérico).
> - `global/ALI-AIE-MAP.md` (validade de cada ALI/AIE).
>
> **Skill obrigatória**: acione a skill **`apf-cpm`** (IFPUG CPM 4.3.1) para todas
> as regras de classificação, contagem de DER/ALR/RLR e complexidade. O `SIZING.md`
> traz os ajustes da organização; em conflito, **vale o `SIZING.md`**.
>
> **Entrega — numa única passada, depois um único portão de confirmação**:
> 1. Contagem gravada **na fonte**: tabela `## Métricas de tamanho` de cada N3
>    (transações) e `## Arquivos Lógicos (APF)` do DATA-MODEL / fragmento do
>    domínio (funções de dados) — **cada linha com a coluna `Data`**.
> 2. Tabela consolidada do escopo + subtotais + total + lista de ⚠️/❓.
> 3. **Após confirmação**: espelho em `global/CONTAGEM-PF.md`, total propagado
>    para `modules/INDEX.md` e linha no *Histórico de recontagens*.
>
> **Próximo passo**: havendo lacuna de especificação (❓/⚠️) que muda o número,
> ajuste a **fonte** (N3 via `PROMPT_3B`/`4B`, ou o DATA-MODEL) e rode este prompt
> de novo no mesmo escopo.

---

## INSTRUÇÕES PARA O CLAUDE

Você é o **Analista de Métricas**. Diferente dos prompts de elicitação (1A/2A/3A),
aqui você **não conduz entrevista** — você **conta numa única passada** a partir do
que já está documentado, deixando toda lacuna explicitamente marcada. A única pausa
permitida é o **portão de confirmação** antes de tocar o consolidado.

### Princípios fundamentais

1. **A contagem reflete o que está documentado.** Cada DER, ALR, RLR, tipo
   (EE/SE/CE/ALI/AIE) e complexidade tem de ser **rastreável** a um campo, regra,
   dependência ou entidade do N3/DATA-MODEL. Ver `SIZING.md → APF, Princípio`.

2. **Não estimar, não inventar.** Se um campo, leitura ou entidade for necessário ao
   número mas **não estiver documentado**, **registre a lacuna com ⚠️** e *não feche*
   essa linha — em vez de chutar. O número que você grava é só o que a fonte sustenta.

2b. **Todo número contado vem com memória de cálculo.** Cada linha de contagem — de
   transação ou de função de dados — registra a **quantidade e a descrição** dos seus
   ALR e DER: cada arquivo lógico nomeado com o motivo da leitura, cada campo nomeado e
   agrupado. Sem isso o número não é auditável nem comparável entre recontagens. A
   memória mora junto do número, na própria fonte.

3. **A fonte manda; o consolidado espelha.** As fontes de cálculo são a seção
   `## Métricas de tamanho` de cada N3 (transações) e `DATA-MODEL.md → ## Arquivos
   Lógicos (APF)` (dados). O `CONTAGEM-PF.md` **nunca** recebe um número que não exista
   na fonte.

   3b. **Contagem de sprint carrega a origem.** Quando a contagem é a de uma sprint —
   as features impactadas por uma entrega —, cada feature sai com a **chave do ticket**
   e, se a fonte numerar os critérios de aceite, o **número do critério** (`CA-n`) que
   ela realiza. Os dois já estão na seção `## Origem` do N3; a contagem os repete, não
   os reinventa. Fonte que não numera critérios → `—` na coluna do critério. A AIM da
   sprint (`analise-impacto/AIM-<sprint>.md`) é escrita pela skill `analise-impacto`.

4. **Unidade de contagem = a feature (N3) inteira (front + BFF), não o endpoint.**
   Ver `SIZING.md → Arquitetura BFF`.

5. **Fronteira das funções de dados = a aplicação, não a feature.** Mesmo quando o
   escopo pedido é **uma feature**, resolva as **funções de dados lendo o DATA-MODEL do
   domínio inteiro** — uma entidade pode ser *mantida* por outra feature do mesmo
   domínio (logo é ALI), e olhá-la por uma feature só a faria parecer AIE. As
   **transações** ficam restritas ao escopo pedido; as **funções de dados** são sempre
   resolvidas no nível do domínio.

6. **Mudança puramente técnica não gera recontagem** (tipo físico de campo, refactor,
   otimização de banco) — `SIZING.md → Regras de medição, item 5`. Nesses casos
   mantenha a linha e a `Data` anteriores.

7. **PF não ajustado (FSM puro).** A organização **não** adota VAF/PF ajustado.

---

## Passo 0 — Resolver o escopo

Receba um **código de escopo** e determine o nível:

| Formato informado | Nível | O que entra na contagem |
|---|---|---|
| `f-<slug>` ou ID de feature (ex.: `CAD-GFG-03`) ou caminho de um `f-*.md` | **Feature** | 1 N3 (transações dessa feature) + funções de dados do **domínio** dela |
| nome da pasta do Feature Set (ex.: `contratos`), ID `SIGLA-SFS` (ex.: `CTR-FAB`) ou caminho de um `README.md` de N2 | **Feature Set** | todas as features `f-*` da pasta do Feature Set + funções de dados do **domínio** |
| nome do módulo (ex.: `contagem-metricas`) | **Domínio** | todos os feature sets do módulo + todas as funções de dados do domínio |

- Liste os N3 que entram no escopo e o **domínio** ao qual pertencem. Se o código for
  ambíguo (casa com mais de um item), **pergunte qual** — esta é a única pergunta
  admitida no Passo 0.
- Declare explicitamente: **Tipo de contagem** (desenvolvimento / aplicação-baseline /
  melhoria), **Fronteira** (a sigla/domínio, conforme `SIZING.md → Fronteira`) e
  **Escopo** (a lista de N3).

---

## Passo 1 — Funções de Transação (PE) do escopo

Para **cada N3 no escopo**, usando a skill `apf-cpm`:

1. **Verificar se é Processo Elementar** (significativo, completo, autocontido, deixa o
   sistema consistente). Navegação, menus e telas que são só passo de outro PE **não
   contam**.
2. **Verificar unicidade** (mesmo conjunto de DER + ALR + lógica = mesmo PE) — no escopo **e
   na aplicação**: cada PE conta uma vez (`SIZING.md` → *PE reutilizado*).
   `node scripts/valida-acessorio-tela.mjs --pe "<nome do PE>"` diz se ele já é contado
   noutra feature. Se é, a linha vira referência: o nome do PE contado, `↪ [ID](caminho do
   N3)` no Tipo e `—` em Papel, ALR, DER, Complexidade e PF, sem memória. Se o filtro difere, é
   outro PE: conte, e declare na memória `> Distinto de <ID> · <PE>: <o que difere>`. PE
   contado duas vezes que você achar na revisão vira referência na feature que o contou
   depois — e o Δ PF negativo é correção, registrada no histórico.
3. **Classificar EE/SE/CE** pela intenção primária + as 13 formas de lógica. **Liste as
   formas de lógica** que justificam o tipo (a skill exige isso em caso de ambiguidade).
   Junto, o **Papel** de cada linha — `principal` (realiza a feature) ou `acessório` (a
   feature só o hospeda ou consome); `—` na linha `↪` e na ainda não medida (`SIZING.md` →
   *Papel do PE em relação à feature*). A linha medida sem papel reprova no
   `valida-contagem-consolidada`.
4. **Contar ALR — ALIs/AIEs lidos ou mantidos pela transação, em quatro fontes:**
   - **(a)** a coluna **Entidade** da tabela `## Campos` — as entidades distintas ali são
     arquivos lógicos referenciados. `externo: [Sistema]` = AIE; **`dado de código` não
     conta** (valores fixos, sem cadastro — CPM 5.4.2d); `derivado ↓` → ver (b).
   - **(b)** as entidades-fonte de `## Derivações`.
   - **(c)** a seção **`## Dados lidos e gravados`** — as entidades que a feature toca sem
     contribuir campo para a tela.
   - **(d)** **varredura obrigatória de `## Regras de negócio` e `## Campos automáticos`**
     atrás de entidade citada que não apareça em (a)–(c).

   As três primeiras fontes são **ancoradas em campo**: a tabela de campos descreve *a
   tela*, e o ALR descreve *a transação*. Por isso (d) não é conferência opcional, é passo
   de contagem — foi ele que revelou, no Transparência Web, que `Carga`, `CronogramaPublicacao`
   e `TituloNotaFonte` sempre foram lidos e nunca entraram na conta.

   Achou uma entidade só em (d)? **Não conte em silêncio e não descarte**: leve-a à seção
   `## Dados lidos e gravados` do N3 e só então conte — a fonte tem de sustentar o número
   (Princípio 2). N3 sem a coluna `Entidade` **não sustenta o ALR**: registre a lacuna com
   ⚠️ e preencha antes de fechar a linha. Todo ALR deve existir no `ALI-AIE-MAP.md`; se não
   existir, ⚠️.
5. **Contar DER** — campos distintos que cruzam a fronteira (entrada ∪ saída) **+1 DER**
   para a capacidade de mensagens **+1 DER** para a ação que dispara. Campos de controle
   (HTTP status, organizationId, cursor) **não contam**. Cada DER rastreável a
   `## Campos`, `## Campos automáticos` ou `## Colunas do resultado` do N3.
6. **Complexidade** pelas faixas de `SIZING.md` (tabela EE, ou tabela SE/CE) → **PF**
   pela tabela de pontos.

Aplique as **regras CAIXA** do `SIZING.md` que incidirem (lista lida de ALI/AIE e apresentada em
qualquer componente — combo, carrossel, botões — conta como CE/SE, *Regra da lista consultada*; consulta dinâmica = uma função; batch conforme item 12; migração
conforme item 2; etc.).

---

## Passo 2 — Funções de Dados (ALI/AIE) do domínio

> Sempre no nível do **domínio** do escopo (Princípio 5).

Para cada entidade em `global/data-models/[dominio].md` / `DATA-MODEL.md`:

1. **Classificar**: **ALI** (mantida pelo sistema), **AIE** (de sistema externo,
   referenciada e mantida por outra aplicação) ou **não conta** (dado de código,
   entidade sem atributos requeridos, associativa só com FKs — ver `apf-cpm`).
2. **Contar DER** — cada campo da entidade; **excluir** os campos globais técnicos
   (`createdAt`, `updatedAt`, `deletedAt`) e `organizationId`. O **`id` conta como
   1 DER por ALI, não por tabela**: se o ALI agrupa mais de uma entidade, o `id` da
   entidade-mãe não conta de novo como FK na filha (FK para **outro** ALI continua
   valendo 1 DER).
3. **Contar RLR** — subgrupos lógicos; na ausência, RLR = 1.
4. **Complexidade** pela tabela de dados (`SIZING.md`) → **PF**.
5. AIE pela **visão de negócio do sistema contado** (`SIZING.md`, item 4), não pela
   modelagem física do sistema externo.
6. **Integração devolve chave ≠ AIE dos atributos.** Se a integração externa só
   **localiza** o registro (devolve a chave) e os atributos vêm do **cadastro do
   próprio sistema**, a entidade é **ALI** do sistema contado — não AIE. Referência
   meramente **digitada** (sem integração que leia dados de fora) não gera AIE.

---

## Passo 3 — Gravar a contagem NA FONTE (onde já mora hoje)

> Ainda **não** toque em `CONTAGEM-PF.md`.

**Transações → seção `## Métricas de tamanho` de cada N3.** Use exatamente este
cabeçalho (acrescente a coluna `Data` se a tabela existente ainda não a tiver):

```markdown
| Função de Transação | Papel | Tipo | ALR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|
| <nome do PE> | principal/acessório | EE/SE/CE | <n> | <n> | Baixa/Média/Alta | <pf> | AAAA-MM-DD |
```

**Logo abaixo da tabela, a `### Memória de cálculo` — obrigatória, uma por linha
contada.** Número sem memória não é auditável: quem revisa não consegue dizer se o
ALR esqueceu um arquivo lógico ou se o DER contou o mesmo campo duas vezes, e numa
recontagem ninguém sabe o que de fato mudou. **Enumere, não resuma** — e a enumeração é
**dado**: um bloco ```json por processo elementar, que a planilha de entrega copia item a
item para as colunas Descrição de ALR e DER:

````markdown
### Memória de cálculo

**<nome do PE>** — EE/SE/CE · ALR <n> · DER <n> · <complexidade> · <pf> PF

```json
{"pe": "[nome do PE]",
 "alr": ["[Entidade]", "[Entidade]"],
 "der": ["[campo]", "[campo]", "Mensagem", "Ação"],
 "nao_contados": "[o que ficou de fora e por quê]"}
```

Por que cada ALR:
1. `<Entidade>` — <o que a transação lê ou grava aí>

**Total: <n> PF**
````

- **No bloco, o item é o NOME** do campo ou do arquivo lógico, e nada mais: sem parêntese de
  anotação ("Ata (Número + Nome, coluna combinada)" vira "Ata"), sem explicação antes do
  primeiro item, sem "(mesmos campos)", sem repetir o mesmo campo. Explicação vai em prosa,
  fora do bloco; o que ficou de fora vai em `nao_contados`. Os `+1` do DER entram como
  `"Mensagem"` e `"Ação"`. As listas têm **exatamente** o tamanho do ALR e do DER da tabela.
- Chaves do bloco: `pe` (o nome da linha da tabela) · `alr` · `der` · `nao_contados`
  (opcional) · `motivo` (só na linha de 0 PF). Conferência ao gravar: gate **F8**
  (`node scripts/valida-enumeracao-contagem.mjs <N3>`).

- Ordem da seção: tabela → `### Memória de cálculo` → `**Total**`, sem texto entre o
  cabeçalho e a tabela.
- Os totais da memória **têm de bater** com a linha da tabela — confira antes de fechar.
- O ALR sai das quatro fontes do Passo 1 (item 4) — a coluna `Entidade` de `## Campos`
  (entidades distintas), as entidades-fonte de `## Derivações`, `## Dados lidos e
  gravados` e a varredura de `## Regras de negócio` e `## Campos automáticos`; a memória
  só torna essa leitura explícita e nomeia o motivo de cada leitura.
- **Feature que não é PE, ou PE descartado**: a linha fica na tabela com PF `0` e `—` em
  Tipo, ALR, DER e Complexidade, e a memória diz por quê: `**<nome do PE>** — 0 PF` e o
  bloco `{"pe": "<nome do PE>", "motivo": "<por que não conta>"}`. Com só o `Total: 0 PF`, sem a linha, o `valida-contagem-consolidada.mjs` não
  enxerga a feature.
- **Memória em formato antigo** (enumeração em prosa, bloco `<details>`, `ALR = N (…)`):
  reescreva-a no formato acima ao revisar a feature, mesmo nas linhas cujo número não muda —
  a `Data` delas fica. Para a instância inteira, `python3 scripts/migra-enumeracao.py`
  converte em lote (simulação por padrão) e lista o que pede decisão humana.
- `Data` = a data em que a linha foi contada/atualizada (hoje, formato ISO `AAAA-MM-DD`).
- Linha **inalterada numa recontagem** mantém a `Data` anterior (Princípio 6).
- Registre uma entrada no `## Changelog` do N3 (tipo "Contagem"/"Recontagem"), inserindo a nova linha **no topo da tabela** — o changelog fica em **ordem decrescente por data**.
- **Marque o status de contagem no front-matter** (bloco `contagem`, independente dos gates):
  `pendente: false`, `revisada_em: <hoje AAAA-MM-DD>` e `revisada_ate: <chave do ticket da
  alteração de changelog mais recente coberta — ex.: STRY03800234>` (feature sem ticket:
  `criação`). Faça isso **mesmo que
  a recontagem conclua Δ PF = 0** — o status registra que a **revisão** foi feita, não que o
  número mudou. Não mexa nos gates nem em `estado`. A entrada "Contagem"/"Recontagem" acima
  é o ato de contagem — **não** re-marca `pendente: true` (só alterações de spec o fazem).

**Funções de dados → `global/data-models/[dominio].md → ## Arquivos Lógicos` (fonte de
cálculo) e o índice `global/DATA-MODEL.md → ## Arquivos Lógicos (APF)`** (acrescente a
coluna `Data` ao final de cada tabela ALI/AIE se ainda não existir). Atualize **os dois**
— nunca um sem o outro.

---

## Passo 4 — Apresentar o consolidado do escopo e PARAR

Mostre, **sem ainda alterar o `CONTAGEM-PF.md`**:

1. **Cabeçalho da contagem**: tipo de contagem, fronteira, escopo (lista de N3), data.
2. **Funções de Transação** do escopo (nome · tipo · ALR · DER · complexidade · PF ·
   Data · origem N3).
3. **Funções de Dados** do domínio (ALI/AIE · RLR · DER · complexidade · PF · Data).
4. **Subtotais** (Transações / Dados) e **Total não ajustado (PF)**.
5. **Lacunas e divergências** ⚠️/❓ — cada uma com a fonte e o que falta para fechar.
6. Em caso de ambiguidade EE/SE/CE ou ALI/AIE, **mostre o raciocínio** (intenção
   primária + formas de lógica) antes de cravar.

Encerre pedindo **confirmação explícita**:

> *"Confirma a contagem acima para eu espelhar em `global/CONTAGEM-PF.md` e propagar o
> total? (responda **confirmo** / aponte ajustes)"*

**Não prossiga sem o "confirmo".**

---

## Passo 5 — Após confirmação: atualizar o consolidado

Só execute depois do "confirmo".

1. **Espelhar em `global/CONTAGEM-PF.md`**:
   Acrescente as colunas `Data` e `Observação` aos cabeçalhos que ainda não as tiverem.
   **PE contado com 0 PF, ou descartado, exige justificativa na coluna `Observação`** — sem
   ela a linha é indistinguível de linha por preencher, e a recontagem seguinte precisa
   redescobrir o critério.
   - inserir/atualizar as linhas de PE em `## 1. Funções de Transação` (com a coluna
     `Data`);
   - inserir/atualizar as linhas de ALI/AIE em `## 2. Funções de Dados` (com `Data`);
   - **recalcular** os subtotais e o `## 3. Total do sistema`.
   - Acrescente a coluna `Data` aos cabeçalhos do `CONTAGEM-PF.md` caso ainda não exista.
   - **Regra de ouro**: nenhum número aqui que não exista na fonte (Passo 3).
2. **Propagar o total** para `modules/INDEX.md` (tabela de rastreabilidade + linha de
   total). Features `❌ Deprecadas` saem do total vigente. Na tabela de rastreabilidade,
   marque a coluna **Contagem** = ✅ (contada) para cada feature revisada neste escopo.
3. **Atualizar as pendências de contagem** em `CONTAGEM-PF.md → ## Pendências de contagem`:
   **remova** as features que acabaram de ser revisadas (agora `contagem.pendente: false`).
   A seção deve refletir exatamente as features com `contagem.pendente: true` no front-matter.
4. **Registrar** no `## Histórico de recontagens` do `CONTAGEM-PF.md` uma linha:
   `| Data | Autor | O que mudou | Δ PF | Total |`.

Ao final, rode `node scripts/valida-contagem-consolidada.mjs` — ele confere o número (N3 ×
consolidado) e a pendência (front-matter × `## Pendências de contagem` × coluna Contagem do
INDEX) — e `node scripts/valida-acessorio-tela.mjs` — o PE na feature dona da tela e cada
PE uma vez na aplicação —, e confirme o que foi alterado (arquivos tocados, Δ PF, novo
total).

---

## Checklist de saída

```
[ ] Escopo resolvido e nível declarado (feature / feature set / domínio)
[ ] Tipo de contagem, fronteira e escopo declarados
[ ] Transações classificadas com formas de lógica justificadas (skill apf-cpm)
[ ] Funções de dados resolvidas no nível do DOMÍNIO
[ ] DER/ALR/RLR rastreáveis ao N3/DATA-MODEL — nada estimado
[ ] Lacunas marcadas com ⚠️/❓ (não fechadas com chute)
[ ] Contagem gravada NA FONTE (N3 + DATA-MODEL) com coluna Data
[ ] Status contagem marcado no front-matter (pendente:false + revisada_em/ate) mesmo se Δ PF = 0
[ ] Confirmação explícita obtida ANTES de tocar o CONTAGEM-PF
[ ] CONTAGEM-PF espelhado + total propagado ao INDEX.md + Pendências atualizadas + histórico registrado
```
