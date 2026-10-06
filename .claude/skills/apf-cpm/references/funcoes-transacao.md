# Funções de Transação (EE / SE / CE) — CPM 4.3.1 §5.5 + Parte 2 Cap. 7

> **Fonte normativa**: [`cpm-4.3.1/Parte-2-A-Transicao/07-cap7-medir-funcoes-de-transacao.md`](./cpm-4.3.1/Parte-2-A-Transicao/07-cap7-medir-funcoes-de-transacao.md) · [`cpm-4.3.1/Parte-4-Exemplos/02-cap2-funcoes-de-transacao.md`](./cpm-4.3.1/Parte-4-Exemplos/02-cap2-funcoes-de-transacao.md). Este arquivo é a destilação; em divergência ou dúvida de regra, o manual decide.

Funções de transação são processos elementares que oferecem funcionalidade ao usuário para **processar dados**. Cada função de transação é classificada como Entrada Externa (EE), Saída Externa (SE) ou Consulta Externa (CE).

Atividades (5.5): (a) identificar processos elementares; (b) determinar unicidade; (c) classificar como EE, SE ou CE; (d) contar DER e ALR; (e) determinar complexidade e tamanho.

---

## Passo 1 — Identificar cada processo elementar

### Definição de Processo Elementar (PE)

A **menor unidade de atividade** que é significativa para o usuário. Compor e/ou decompor os Requisitos Funcionais do Usuário até que cada PE satisfaça **todos** os critérios:

1. **É significativo para o usuário** — reconhecido como atividade funcional.
2. **Constitui uma transação completa** — todos os dados necessários são processados.
3. **É autocontido** — não depende de outro PE para completar a atividade.
4. **Deixa o negócio em estado consistente** — após execução, os dados estão íntegros.

> **Exemplo:** Adicionar Funcionário inclui informações de salário e dependentes. Adicionar apenas parte dos dados NÃO satisfaz os critérios (estado inconsistente). O PE é "Adicionar Funcionário" como um todo.

> ⚠️ **Não subdivida** um PE com múltiplas formas de lógica de processamento em vários PEs. Se subdividido indevidamente, os fragmentos não satisfarão os 4 critérios acima.

> ⚠️ **Contadores / totalizadores / resumos na mesma tela de pesquisa.** Quando a tela **já exibe** os contadores ao abrir e eles se **atualizam pelo mesmo filtro** da pesquisa, eles **não** são um PE independente — falham no critério **3 (autocontido)** e no **4 (estado consistente)**: entregar só os contadores, sem a pesquisa, deixa o sistema incompleto/inconsistente. São **DERs** do PE de pesquisa (e, sendo dado **calculado** — forma de lógica 9 —, empurram a pesquisa de CE para **SE**), não uma CE/SE à parte. Só conte um resumo como PE próprio quando ele tiver **acionamento e consistência próprios**, separados da listagem (rota/filtro/tela dedicados). *Teste rápido:* "se eu entregasse só isto, o sistema ficaria consistente e útil sozinho?" — se não, é o **mesmo** PE.

---

## Passo 2 — Determinar unicidade do processo elementar

Dois PEs similares são **o mesmo PE** se e somente se **todos** estes critérios forem iguais:

1. Mesmo conjunto de **DERs**
2. Mesmo conjunto de **ALRs** (arquivos lógicos referenciados)
3. Mesmo conjunto de **lógicas de processamento**

### Regras importantes de unicidade:

- Um PE pode ter **pequenas variações** em DERs, ALRs ou lógica de processamento (ex.: endereço europeu vs americano com campos diferentes) → **ainda é o mesmo PE**, com variações internas.
- Se dois PEs foram **especificados como requisitos distintos pelo usuário** e contêm DERs, ALRs ou lógica de processamento diferentes → **são PEs separados**.
- **Não use o teste de unicidade** para *dividir* um PE em dois. Use-o apenas para *comparar* dois PEs já identificados.
- **Ordenação/reclassificação de dados NÃO constitui unicidade** (forma de lógica 13 — não identifica tipo nem contribui para unicidade).

> **Exemplo:** Relatório 1 (Nome, ID, Endereço) e Relatório 2 (Nome, ID, Endereço, Telefone) → se especificados como requisitos separados pelo usuário, são **PEs distintos** (DERs diferentes), mesmo sendo semelhantes.

> **Contraexemplo:** Adicionar Funcionário com ou sem dependentes → **mesmo PE** (variação na lógica, não um PE separado).

---

## Passo 3 — Classificar cada processo elementar

### Definições e intenção primária

| Tipo | Definição | Intenção primária |
|---|---|---|
| **EE** (Entrada Externa) | PE que processa dados ou informações de controle vindos de **fora** da fronteira | **Manter** um ou mais ALIs **e/ou alterar** o comportamento do sistema |
| **SE** (Saída Externa) | PE que envia dados ou informações de controle para **fora** da fronteira, com processamento adicional | **Apresentar** informação ao usuário (com cálculos, dados derivados, manutenção de ALI ou alteração de comportamento) |
| **CE** (Consulta Externa) | PE que envia dados ou informações de controle para **fora** da fronteira | **Apresentar** informação ao usuário (apenas recuperação, sem cálculos, sem dados derivados, sem manter ALI, sem alterar comportamento) |

### Tabela de funções permitidas por tipo

| Função | EE | SE | CE |
|---|---|---|---|
| Alterar comportamento do sistema | **IP** | F | ❌ |
| Manter um ou mais ALIs | **IP** | F | ❌ |
| Apresentar informação ao usuário | F | **IP** | **IP** |

> **IP** = intenção primária · **F** = função permitida (mas não é intenção primária) · **❌** = não permitido

### Regras de classificação

#### Classificar como **EE** se:

- Intenção primária: **manter um ou mais ALIs** OU **alterar o comportamento** do sistema; **E**
- Inclui lógica de processamento para **aceitar dados ou informações de controle que entram pela fronteira**.

#### Classificar como **SE** se:

- Intenção primária: **apresentar informação ao usuário**; **E**
- Inclui **pelo menos uma** das seguintes formas de lógica de processamento:
  - Cálculos matemáticos são realizados
  - Um ou mais ALIs são atualizados
  - Dado derivado é criado
  - Comportamento da aplicação é alterado

> **Nota:** campos calculados são uma forma de dado derivado, mas dados derivados podem ser criados sem cálculo (ex.: concatenação de campos para gerar número de registro).

> **Exemplo de SE com dado derivado não exibido:** Relatório mensal listando funcionários a serem avaliados nos próximos 30 dias. A data da próxima avaliação é calculada (data da última avaliação + 30 dias) para filtrar os registros, mas NÃO aparece no relatório. O cálculo torna o PE uma **SE** (não CE).

#### Classificar como **CE** se:

- Intenção primária: **apresentar informação ao usuário**; **E**
- Referencia uma função de dados para **recuperar dados ou informações de controle**; **E**
- **Não** satisfaz nenhum critério de SE (sem cálculo, sem dado derivado, sem manter ALI, sem alterar comportamento).

---

## As 13 formas de lógica de processamento

Cada PE utiliza uma ou mais das 13 formas. A tabela define quais são **obrigatórias**, **opcionais** ou **proibidas** para cada tipo:

| # | Forma de lógica de processamento | EE | SE | CE |
|---|---|---|---|---|
| 1 | Validações são efetuadas | p | p | p |
| 2 | Cálculos matemáticos são efetuados | p | **d*** | **n** |
| 3 | Valores equivalentes são convertidos | p | p | p |
| 4 | Dados são filtrados/selecionados por critérios específicos | p | p | p |
| 5 | Condições são analisadas para determinar quais se aplicam | p | p | p |
| 6 | Pelo menos um ALI é atualizado | **d*** | **d*** | **n** |
| 7 | Pelo menos um ALI ou AIE é referenciado | p | p | **d** |
| 8 | Dados ou informações de controle são recuperados | p | p | **d** |
| 9 | Dados derivados são criados | p | **d*** | **n** |
| 10 | O comportamento do sistema é alterado | **d*** | **d*** | **n** |
| 11 | Preparar e apresentar informações fora da fronteira | p | **d** | **d** |
| 12 | Dados/informações de controle entrando pela fronteira são aceitos | **d** | p | p |
| 13 | Dados são reclassificados ou reorganizados (NÃO constitui unicidade) | p | p | p |

### Legenda:

- **d** = o tipo **deve** executar esta forma (obrigatória)
- **d*** = o tipo **deve** executar **pelo menos uma** das formas marcadas com d* (obrigatória condicional)
- **p** = o tipo **pode** executar (opcional)
- **n** = o tipo **não pode** executar (proibida)

### Implicações práticas:

- **EE** deve: (d) aceitar dados pela fronteira [12]; E (d*) pelo menos uma de: atualizar ALI [6], alterar comportamento [10].
- **SE** deve: (d) apresentar informações fora da fronteira [11]; E (d*) pelo menos uma de: cálculo [2], atualizar ALI [6], dado derivado [9], alterar comportamento [10].
- **CE** deve: (d) referenciar ALI/AIE [7]; E (d) recuperar dados [8]; E (d) apresentar informações [11]. NÃO pode: cálculo [2], atualizar ALI [6], dado derivado [9], alterar comportamento [10].

> **Forma 13 (reclassificação/reorganização):** NÃO identifica tipo nem contribui para unicidade. Uma lista ordenada por nome vs por localização é o **mesmo PE** (apenas reorganização).

### Exemplos detalhados das formas:

| # | Exemplo |
|---|---|
| 1 | Ao incluir funcionário, valida o tipo do funcionário |
| 2 | Ao listar funcionários, calcula total de assalariados, horistas e total geral |
| 3 | Converte idade do funcionário para faixa etária usando tabela |
| 4 | Para gerar lista por atribuição, compara código da tarefa para filtrar/selecionar |
| 5 | Lógica de inclusão depende de o funcionário ser assalariado ou horista (caminhos diferentes) |
| 6 | Ao incluir funcionário, atualiza o ALI "Funcionário" |
| 7 | Ao incluir funcionário, referencia o AIE "Moeda" para obter taxa de câmbio |
| 8 | Para ver lista de funcionários, recupera dados de uma função de dados |
| 9 | Deriva número de registro concatenando 3 letras do sobrenome + 2 do nome + sequencial |
| 10 | Altera ciclo de pagamento de quinzenal para bisemanal (26 períodos vs 24) |
| 11 | Lista de funcionários apresentada ao usuário |
| 12 | Usuário informa dados para incluir uma ordem de compra |
| 13 | Lista de funcionários classificada em ordem alfabética ou por localização |

---

## Passo 4a — Contar ALR (Arquivo Lógico Referenciado)

### Definição de ALR

Um **ALR** (tipo de arquivo referenciado) é uma função de dados **lida e/ou mantida** pela função de transação.

ALR inclui:
- Um ALI **lido ou mantido** por uma função de transação
- Um AIE **lido** por uma função de transação

> **Regra fundamental:** conte **1 ALR para cada função de dados** (ALI ou AIE) acessada, mesmo que tenha vários RLRs. Cada ALI/AIE conta como no máximo **1 ALR** por PE.

### Regras de ALR por tipo

#### ALR para EE:

- Conte 1 ALR para cada **ALI mantido**
- Conte 1 ALR para cada **ALI ou AIE lido**
- Conte **apenas 1 ALR** para cada ALI que é **lido E mantido** (não duplique)

#### ALR para SE:

- Conte 1 ALR para cada **ALI ou AIE lido**
- Conte 1 ALR para cada **ALI mantido**
- Conte **apenas 1 ALR** para cada ALI que é **lido E mantido** (não duplique)

#### ALR para CE:

- Conte 1 ALR para cada **ALI ou AIE lido**
- (CE não pode manter ALI, então não há ALR de manutenção)

---

## Passo 4b — Contar DER (Tipo de Dado Elementar)

### Definição de DER (transação)

Um DER é um **campo único, reconhecido pelo usuário, não repetido**, que **cruza (entra e/ou sai) a fronteira** durante o processamento da função de transação.

### Regras gerais de DER (aplicáveis a EE, SE e CE):

1. **Conte 1 DER** para cada campo único, reconhecido pelo usuário, não repetido, que **cruza a fronteira** (entra e/ou sai).
2. **Conte apenas 1 DER** para a habilidade de enviar **mensagem de resposta** (mesmo que sejam múltiplas mensagens — erro, confirmação, continuação).
3. **Conte apenas 1 DER** para a habilidade de **iniciar ação** (mesmo com múltiplos meios: botão OK, tecla PF, Enter, etc.).

### NÃO conte como DER:

| Item | Motivo |
|---|---|
| **Literais** (títulos de relatório, tela, painel, coluna, atributo) | Informação estática de apresentação |
| **Selos automáticos** (data/hora gerados pelo sistema) | Não reconhecidos pelo usuário como campo de entrada/saída |
| **Variáveis de paginação** (nº de página, "Linhas 37 a 54 de 211") | Controle técnico de apresentação |
| **Ajudas de navegação** (anterior, próximo, primeiro, último e equivalentes gráficos) | Funcionalidade técnica de interface |
| **Atributos gerados internamente e gravados no ALI sem sair da fronteira** | Não cruzam a fronteira |
| **Atributos obtidos/referenciados de ALI/AIE para processamento sem sair da fronteira** | Não cruzam a fronteira |

### Regras específicas de DER para EE:

- Conte DERs que **entram** pela fronteira (campos informados pelo usuário ou recebidos de outra aplicação).
- Conte DERs que **saem** pela fronteira (ex.: mensagem de confirmação/erro).
- **Não** conte como DER um campo **calculado internamente** e gravado no ALI sem sair da fronteira.

> **Exemplo:** Ao incluir funcionário em outro país, o salário-hora local é informado (DER). A taxa de câmbio é recuperada do AIE "Moeda" e o salário-hora em dólar é calculado e gravado no ALI. O salário-hora em dólar **NÃO** é DER para a EE (não entra pela fronteira; é derivado internamente).

> **Exemplo:** Ao incluir pedido, o preço unitário é recuperado automaticamente para cada item e gravado na fatura. O preço unitário **NÃO** é DER para a EE (não cruza a fronteira no momento da inclusão).

### Regras específicas de DER para SE:

- Conte DERs que **entram** pela fronteira (critérios de seleção do relatório, parâmetros).
- Conte DERs que **saem** pela fronteira (campos exibidos no relatório/tela).
- **Não** conte como DER um campo atualizado no ALI mas que **não sai** pela fronteira.

> **Exemplo (SE):** Ao imprimir contracheque, o campo "status" do ALI Funcionário é atualizado para indicar que o contracheque foi impresso. O campo "status" **NÃO** é DER (não cruza a fronteira → não aparece no output).

### Regras específicas de DER para CE:

- Mesmas regras de SE, exceto que CE não pode atualizar ALI.
- Conte DERs que entram (critérios) e saem (dados exibidos).

> **Exemplo (SE/CE):** Ao criar relatório de contas passadas, a data da conta é referenciada para determinar se é passada, mas **não aparece** no relatório. A data **NÃO** é DER (não cruza a fronteira).

### Campos compostos em transações:

- Um número de conta ou data **fisicamente gravado em vários campos** conta como **1 DER** se reconhecido pelo usuário como uma informação única.
- Um gráfico tipo pizza com categoria + valor numérico: **2 DERs** (categoria e valor).
- Uma mensagem de texto (palavra, frase, parágrafo) em relatório como comentário: **1 DER**.

---

## Passo 5 — Determinar complexidade e tamanho

### Matrizes de complexidade

#### Entradas Externas (EE):

| ALR \ DER | 1–4 | 5–15 | ≥ 16 |
|---|---|---|---|
| **0–1** | Baixa | Baixa | Média |
| **2** | Baixa | Média | Alta |
| **≥ 3** | Média | Alta | Alta |

#### Saídas Externas (SE) e Consultas Externas (CE):

| ALR \ DER | 1–5 | 6–19 | ≥ 20 |
|---|---|---|---|
| **0–1** | Baixa | Baixa | Média |
| **2–3** | Baixa | Média | Alta |
| **≥ 4** | Média | Alta | Alta |

### Tabelas de contribuição (PF)

#### EE e CE (mesma tabela):

| Complexidade | PF |
|---|---|
| Baixa | 3 |
| Média | 4 |
| Alta | 6 |

#### SE:

| Complexidade | PF |
|---|---|
| Baixa | 4 |
| Média | 5 |
| Alta | 7 |

---

## Fluxograma de classificação EE / SE / CE

```
PE identificado
│
├─ Intenção primária: MANTER ALI ou ALTERAR comportamento?
│   ├─ SIM → Aceita dados/controle pela fronteira? → SIM → ✅ EE
│   └─ NÃO ↓
│
├─ Intenção primária: APRESENTAR informação ao usuário?
│   ├─ SIM → Tem cálculo / dado derivado / mantém ALI / altera comportamento?
│   │         ├─ SIM → ✅ SE
│   │         └─ NÃO → Referencia ALI/AIE para recuperar dados? → SIM → ✅ CE
│   └─ NÃO → ⚠️ Reavaliar se é PE válido
```

---

## Dicas práticas (não são regras)

### Dicas gerais para EE, SE e CE:

- O dado é recebido de **fora** da fronteira? → Observe o fluxo de dados.
- O processo é a **menor unidade de atividade** na perspectiva do usuário?
  - Uma entrada/tela/arquivo físico pode corresponder a N PEs (ou vice-versa).
  - Duas ou mais telas/abas com lógica idêntica podem ser **1 PE**.
  - Dois ou mais relatórios físicos com lógica idêntica podem ser **1 SE/CE**.
- O processo é **autocontido** e deixa o negócio em **estado consistente**?
- **Identifique a intenção primária** ANTES de classificar.
- Conte **apenas 1 ALR** por ALI/AIE, mesmo que o ALI tenha vários RLRs.

### Dicas adicionais para SE e CE:

- Uma SE/CE pode ser **disparada por um processo interno** (ex.: relatório gerado a cada 8h por relógio interno).
  - **Situação A:** Relatório com nome, CPF, salário-hora — todos apenas recuperados → **CE**.
  - **Situação B:** Mesmo relatório + percentual de mudança salarial (calculado) → **SE** (contém cálculo matemático).
- **Dados derivados de uma SE não precisam aparecer na saída.** O cálculo pode ser usado apenas para filtrar/selecionar registros.

### Comparativo rápido EE vs SE vs CE:

| Aspecto | EE | SE | CE |
|---|---|---|---|
| **Direção primária dos dados** | Entrada (de fora → dentro) | Saída (de dentro → fora) | Saída (de dentro → fora) |
| **Intenção primária** | Manter ALI / alterar comportamento | Apresentar info ao usuário | Apresentar info ao usuário |
| **Pode manter ALI?** | ✅ (obrigatório, d*) | ✅ (opcional, d*) | ❌ |
| **Pode fazer cálculo?** | ✅ (opcional) | ✅ (d*) | ❌ |
| **Pode criar dado derivado?** | ✅ (opcional) | ✅ (d*) | ❌ |
| **Pode alterar comportamento?** | ✅ (d*) | ✅ (d*) | ❌ |
| **Deve aceitar dados pela fronteira?** | ✅ (obrigatório) | ✅ (opcional) | ✅ (opcional) |
| **Deve apresentar informação?** | ✅ (opcional) | ✅ (obrigatório) | ✅ (obrigatório) |
| **Deve referenciar ALI/AIE?** | ✅ (opcional) | ✅ (opcional) | ✅ (obrigatório) |
| **Tabela de complexidade** | ALR×DER (EE) | ALR×DER (SE/CE) | ALR×DER (SE/CE) |
| **PF por complexidade** | B=3, M=4, A=6 | B=4, M=5, A=7 | B=3, M=4, A=6 |

---

## Checklist rápido para função de transação

1. ✅ É a menor unidade de atividade significativa para o usuário?
2. ✅ É autocontido e deixa o negócio em estado consistente?
3. 🔍 É único? (DERs + ALRs + lógica de processamento diferentes de outros PEs?)
4. 📋 Identificar intenção primária:
   - Manter ALI / alterar comportamento → **EE**
   - Apresentar informação COM cálculo/derivado/manutenção/alteração → **SE**
   - Apresentar informação SEM nenhuma das anteriores → **CE**
5. 🔢 Contar **ALR** (cada ALI/AIE acessado = 1 ALR, sem duplicar lido+mantido).
6. 🔢 Contar **DER** (campos que cruzam a fronteira + 1 mensagem + 1 ação).
7. 📐 Cruzar na tabela de complexidade (EE usa tabela diferente de SE/CE).
8. 💯 Obter PF pela tabela de contribuição.
