# Funções de Dados (ALI / AIE) — CPM 4.3.1 §5.4 + Parte 3

> **Fonte normativa**: [`cpm-4.3.1/Parte-2-A-Transicao/06-cap6-medir-funcoes-de-dados.md`](./cpm-4.3.1/Parte-2-A-Transicao/06-cap6-medir-funcoes-de-dados.md) · [`cpm-4.3.1/Parte-3-Praticas-de-Contagem/02-cap2-arquivos-logicos.md`](./cpm-4.3.1/Parte-3-Praticas-de-Contagem/02-cap2-arquivos-logicos.md). Este arquivo é a destilação; em divergência ou dúvida de regra, o manual decide.

Funções de dados satisfazem requisitos de **armazenar e/ou referenciar** dados. Avalie toda a funcionalidade de dados do escopo para identificar cada grupo lógico de dados.

Atividades (5.4): (a) identificar e agrupar dados lógicos; (b) classificar como ALI ou AIE; (c) contar DER; (d) contar RLR; (e) determinar complexidade; (f) determinar tamanho.

---

## 5.4.2 Identificar e agrupar os dados lógicos

Um modelo lógico de dados facilita, mas não é obrigatório. Para identificar funções de dados, aplique os 6 subpassos a seguir **na sequência** (Parte 3, Cap. 2):

### Subpasso 1.1 — Identificar dados logicamente relacionados

- Identifique todos os dados / informações de controle **logicamente relacionados e reconhecidos pelo usuário**, dentro do escopo.
- Considere apenas entidades significativas e requeridas pelo usuário.
- **Atenção:** não assuma que toda entidade do modelo de dados é uma função de dados (arquivos de índice, entidades de modelo físico, não contam).
- Funções de dados podem existir na visão do usuário sem estarem representadas no modelo normalizado (ex.: dados históricos agregados). Inclua-as.

### Subpasso 1.2 — Excluir entidades não mantidas por nenhuma aplicação

Entidades que não são mantidas por nenhum processo elementar nesta ou em qualquer outra aplicação **não contam**. Exclua-as de toda consideração posterior.

### Subpasso 1.3 — Agrupar entidades dependentes

Para cada entidade restante, determine se é independente ou dependente:

**Teste de dependência (Parte 3, §2-16):**
> "Suponha que desejamos excluir uma ocorrência da entidade A. O que aconteceria com as ocorrências ligadas da entidade B?"

- **Situação 1 (dependente):** B pode ser excluída junto com A → B não tem significado para o negócio sem A → **agrupar A e B no mesmo arquivo lógico**.
- **Situação 2 (independente):** B tem significado para o negócio mesmo sem A → B não pode ser excluída automaticamente → **arquivos lógicos separados**.

> ⚠️ **Não confundir** "relacionamento obrigatório/opcional" com "(in)dependência de entidades". Uma entidade com relacionamento obrigatório (1:N) pode ser independente (ex.: Funcionário com relação obrigatória com Função — excluir a Função não exclui os Funcionários, que são realocados).

#### Dois métodos complementares para agrupar dados:

**Método a) Orientado por processos elementares:**
- Se várias entidades são **sempre criadas juntas** e **excluídas juntas** pelos PEs, é forte indicação de que pertencem ao **mesmo arquivo lógico**.
- Transações de **alteração** frequentemente acessam só uma entidade do grupo, então são menos indicativas que inclusão/exclusão.
- *Exemplo:* Pedido (cabeçalho + itens): não se pode criar um pedido sem pelo menos um item; excluir o pedido exclui todos os itens → **1 arquivo lógico**.

**Método b) Orientado por (in)dependência de entidades:**
- Avalie par a par os relacionamentos entre as entidades restantes usando a tabela abaixo.

#### Tabela-resumo: De entidades para arquivos lógicos via (in)dependência

| Tipo de relacionamento (A:B) | Condição | Resultado |
|---|---|---|
| **(1):(N)** — bilateral opcional | A e B são independentes | **2 ALs** |
| **1:N** — B obrigatório | B dependente de A | **1 AL** (agrupados) |
| **1:N** — B obrigatório | B independente de A | **2 ALs** |
| **1:(N)** — B opcional | B dependente de A | **1 AL** (agrupados) |
| **1:(N)** — B opcional | B independente de A | **2 ALs** |
| **(1):N** — A obrigatório | A dependente de B | **1 AL** (agrupados) |
| **(1):N** — A obrigatório | A independente de B | **2 ALs** |
| **(1):(1)** — bilateral opcional | A e B são independentes | **2 ALs** |
| **1:1** — bilateral obrigatório | A e B são dependentes | **1 AL** |
| **1:(1)** — B opcional | B dependente de A | **1 AL** (agrupados) |
| **1:(1)** — B opcional | B independente de A | **2 ALs** |
| **(N):(M)** — bilateral opcional | A e B são independentes | **2 ALs** |
| **N:M** / **N:(M)** — com lado obrigatório | B dependente de A | **1 AL** (agrupados) |
| **N:M** / **N:(M)** — com lado obrigatório | B independente de A | **2 ALs** |

> **Na dúvida, decida por entidades independentes** (2 ALs separados).

**Exemplos de dependência vs independência (Parte 3):**
- Funcionário → Dependente (1:(N)): excluir Funcionário exclui seus Dependentes → Dependente é **dependente** → **1 AL**.
- Funcionário → Criança Adotada (1:(N)): excluir Funcionário NÃO exclui a Criança (ela é reatribuída) → Criança é **independente** → **2 ALs**.
- Comitê → Membro ((1):N): se o Comitê é "ad hoc" e perde significado sem membros → Comitê é **dependente** de Membro → **1 AL**. Se é parte da estrutura organizacional → **independente** → **2 ALs**.

### Subpasso 1.4 — Excluir dados de código

Filtrar **dados de código** — entidades incluídas como resposta a requisitos **não-funcionais** do usuário (qualidade, implementação técnica). Dados de código não contribuem para o tamanho funcional.

#### O que SÃO dados de código (não contam):

Três áreas gerais (Parte 3, §1-10):

| Área | Tipo | Descrição | Exemplo |
|------|------|-----------|---------|
| **Substituição** | Código + Descrição | Código e nome explicativo intercambiáveis. Se é dado de substituição, é dado de código. | Estados (SP → "São Paulo"), Cores (01 → "Vermelho") |
| **Estáticos/Constantes** | Uma ocorrência | Entidade com 1 único registro e atributos que raramente mudam | Dados da organização (nome, endereço da empresa) |
| | Dados estáticos | Conteúdo e quantidade de instâncias quase nunca mudam | Elementos químicos, tabelas de PF do IFPUG |
| | Valores default | Valores-padrão para novos registros de negócio | Template de configuração de relatório |
| **Valores válidos** | Valores válidos | Lista de valores disponíveis para seleção/validação, essencialmente estática | Tipos de pagamento, Situações fixas |
| | Faixa de valores | Limites para validação | Faixa de telefones, faixa de temperatura |

> Quaisquer desses tipos podem incluir atributos adicionais (data de vigência, auditoria, abreviatura). A presença desses atributos **não** muda a classificação como dado de código.

**Diferença-chave entre Dados de Código e Dados de Referência:**
- **Dados de Código:** pode-se substituir o código pela descrição sem mudar o significado dos Dados de Negócio (ex.: "SP" ↔ "São Paulo").
- **Dados de Referência:** NÃO se pode substituir (ex.: Código do Imposto ↔ Alíquota do Imposto → significados diferentes). **Dados de Referência contam como função de dados.**

#### O que NÃO são dados de código (contam normalmente):

- Entidades com **montantes financeiros, taxas de câmbio, alíquotas de impostos** (se não forem constantes) → **Dados de Referência**.
- **Dados de controle**: dados mantidos pelo usuário contendo regras de negócio que dizem à aplicação o que fazer → **Dados de Negócio**.
- Tabela de Taxa de Câmbio (não é substituição, não é estática, apoia atividades de negócio) → **Dado de Referência**.
- Faixa de tributação progressiva (o percentual não restringe a receita; apoia o negócio) → **Dado de Referência**.

#### 4 consequências de excluir dados de código (Parte 3, §1-9):

1. **Não** conte dados de código como Arquivo Lógico (ALI/AIE).
2. **Não** conte dados de código como DER ou RLR em outro ALI/AIE.
3. **Não** conte dados de código como ALR em funções de transação.
4. **Não** conte transações que mantêm exclusivamente dados de código.

### Subpasso 1.5 — Excluir entidades sem atributos requeridos pelo usuário

Entidades que contêm **apenas atributos não-funcionais** (ex.: índices de performance, chaves técnicas sem significado de negócio) são excluídas. Não contam como arquivo lógico nem como RLR.

### Subpasso 1.6 — Remover entidades associativas key-to-key

- **Entidades associativas com apenas chaves estrangeiras** (sem atributos de negócio adicionais): representam implementação de relacionamento N:M → **não** são arquivo lógico nem RLR. Agrupe as chaves estrangeiras como DER nas entidades primárias.
- **Entidades associativas com atributos não-chave técnicos** (timestamp, flags de auditoria): se esses atributos não são requeridos pelo usuário, trate como key-to-key.
- **Entidades associativas com atributos de negócio requeridos pelo usuário**: avalie como entidade normal nos subpassos 1.3a/1.3b.

---

## 5.4.3 Classificar como ALI ou AIE

- **ALI** — grupo lógico **mantido** (incluir/alterar/excluir) pela aplicação medida.
  - "Mantido" = capacidade de modificar dados por PE. Inclui: incluir, alterar, excluir, popular, revisar (corrigir), atualizar, assinalar, criar.
- **AIE** — grupo lógico **referenciado, mas não mantido** pela aplicação medida, **e** que é um ALI em uma ou mais outras aplicações.

Se um arquivo lógico **não** é mantido por nenhum PE (nem nesta app, nem em outra), **não conta** de modo algum.

A diferença é sempre relativa à **aplicação medida** e à sua fronteira. O mesmo arquivo pode ser ALI numa contagem e AIE em outra.

> **Dados compartilhados (Parte 3, Cap. 3):** quando duas aplicações compartilham dados, a classificação depende da intenção primária:
> - Se a app B **apenas referencia** dados da app A (leitura, cópia estática, screen scraping) → **AIE** na app B.
> - Se a app B **mantém seus próprios dados** a partir de dados recebidos → **ALI** na app B (+ EE para receber).
> - Se ambas as apps **mantêm o mesmo depósito de dados** → **ALI** em ambas.

---

## 5.4.4 Contar DER

- (a) Um DER para cada **atributo único, reconhecido pelo usuário e não repetido** mantido na função de dados ou recuperado dela, considerando todos os processos elementares do escopo.
  - *Ex.:* 12 campos de "orçamento mensal" repetidos = **1 DER** (+ 1 DER para identificar o mês).
- (b) Quando duas+ aplicações mantêm/referenciam a mesma função, conte **só os DER usados pela aplicação medida**.
- (c) Um DER para cada atributo de **relacionamento** (chave estrangeira) requerido pelo usuário.
- (d) Atributos relacionados podem ser **1 DER ou vários**, conforme os processos elementares os usem.
  - *Ex.:* (primeiro nome, nome do meio, sobrenome) = **1 DER** se sempre usados juntos; **2 ou 3 DER** se usados independentemente.
- (e) O **identificador** da função de dados é atributo reconhecido pelo usuário → **1 DER**, contado **uma única vez por arquivo lógico**, não por tabela. Quando o AL agrupa duas entidades (1:N com a filha dependente), o identificador da mãe replicado na filha como chave estrangeira é o **mesmo dado** — **não** conta um segundo DER.

### Como decidir se um atributo composto é 1 DER ou vários (Parte 3, §2-32):

1. **Se o atributo é sempre usado por inteiro** em todas as transações → **1 DER**. Não deve existir situação onde um componente é usado sem os outros.
2. **Se apenas parte do atributo é usada** em algumas transações (ex.: só o sobrenome) → conte **mais de 1 DER**, conforme o número de partes independentes reconhecidas.
3. **Olhe para ordenação e critérios de seleção:** se lista/relatório é ordenado ou filtrado por componente individual → indica independência de componentes → **DERs separados**.

### Campos de status (Parte 3, §2-35):

- Se o status **aparece nos requisitos do usuário e no modelo lógico**, mesmo que não seja visível em telas → **conte como DER**.
- Se o status é um "flag" técnico **desconhecido pelo usuário** (ex.: flag de exclusão lógica) → **não** conte.

### Datas do sistema (Parte 3, §2-35):

- **Data requerida pelo negócio** (Data da Efetivação referenciada nos requisitos) → **conte como DER**, mesmo que não apareça em telas.
- **Data técnica** (timestamp de recuperação/backup, auditoria não requerida pelo usuário) → **não conte**.

### Chaves estrangeiras (Parte 3, §2-36):

- Se o relacionamento é requerido pelo usuário (ex.: "O local deve ser válido no Sistema de Ativo Fixo") → conte a chave estrangeira como **1 DER** na entidade que referencia.
- Em relacionamento N:M sem entidade associativa contável: conte a chave estrangeira de cada lado como **1 DER** na outra entidade.
- **FK interna ao próprio arquivo lógico não conta.** Se as duas entidades foram agrupadas no mesmo AL pelo subpasso 1.3, a FK que liga a filha à mãe é o identificador **já contado** → não conte um segundo DER. Só conta a FK que atravessa a fronteira do AL (aponta para outro ALI/AIE).

### NÃO contar como DER:

- Atributos puramente técnicos (stamps de auditoria não requeridos, índices, chaves secundárias de acesso).
- Atributos de projeto/implementação não reconhecidos pelo usuário.

---

## 5.4.5 Contar RLR

RLR = subgrupo lógico de DERs dentro da função de dados.

- (a) Conte **1 RLR por função de dados** por padrão (todo ALI/AIE tem ao menos 1 RLR).
- (b) Conte **1 RLR adicional** para cada subgrupo lógico de DERs (com mais de um DER) que seja:
  1. **Entidade associativa com atributos não-chave de negócio** (ver 3 situações abaixo);
  2. **Subtipo** (exceto o primeiro subtipo — ver análise de subtipos);
  3. **Entidade atributiva** num relacionamento que **não** seja 1-1 obrigatório.
- Sem modelo de dados: procure **grupos de dados repetidos** para achar RLR.

### Entidades associativas e RLR (Parte 3, §2-41):

| Situação | Descrição | Resultado |
|---|---|---|
| **1** | Entidade associativa com **apenas chaves** (key-to-key) | **Não** conta como RLR nem como AL |
| **2** | Entidade associativa com **atributos de negócio** requeridos pelo usuário, mas **não** é mantida independentemente | Conta como **1 RLR** no(s) arquivo(s) lógico(s) que agrupa |
| **3** | Entidade associativa que **é mantida independentemente** (regra de negócio exige retenção mesmo sem as entidades pai) | Conta como **AL separado** com **1 RLR** próprio |

### Entidades atributivas e RLR (Parte 3, §2-44):

- **Atributiva opcional** (1:(N)): se a entidade atributiva pode existir ou não (ex.: Benefícios do Funcionário — alguns funcionários não têm) → **conta como RLR adicional**.
- **Atributiva obrigatória** (1:1): se a entidade atributiva é obrigatória e 1:1 com a entidade pai (ex.: Preço do Produto — todo produto tem exatamente um preço) → **não** conta como RLR adicional; DERs são absorvidos no RLR padrão.

### Subtipos e RLR (Parte 3, §2-46):

- Se os subtipos têm **atributos próprios significativamente diferentes** e/ou **transações separadas** para manutenção → conte **1 RLR por subtipo** (não conte o supertipo separadamente; ele é herdado).
  - *Ex.:* Funcionário com subtipos Permanente e Contratado, atributos distintos → **2 RLR** (Permanente e Contratado).
- Se os subtipos têm apenas **1 atributo opcional diferente** sem importância significativa na visão do negócio → **não** conte RLR separado.
  - *Ex.:* Estado civil (casado/solteiro) com 1 atributo "nome do cônjuge" → não justifica RLR separado.

> **Dica:** na dúvida, **não** conte um subgrupo como RLR. O impacto na contagem é menor que no Passo 1 (identificar ALs).

### Grupos repetitivos (Parte 3, §2-48):

- **Grupo com múltiplos atributos repetidos** (cabeçalho + itens): → **conte como RLR** adicional.
  - *Ex.:* Fatura com cabeçalho (cliente) + itens (repetidos): cabeçalho = 1 RLR, itens = +1 RLR → **2 RLR**.
- **Campo único repetitivo** (múltiplas contas bancárias do mesmo funcionário): → **1 DER**, **não** conta como RLR.
- **Grupo repetido de poucos atributos** ({ano, mês, valor orçado}): → conta como **3 DER** (com 1 DER adicional para o identificador), **não** como RLR.

### Tabela expandida: Entidades → ALs com RLRs e DERs

| Tipo de relacionamento (A:B) | Condição | ALs | RLRs | DERs |
|---|---|---|---|---|
| **(1):(N)** | Independentes | 2 ALs | 1 RLR cada | DERs de cada |
| **1:N** / **1:(N)** | B dependente | 1 AL | 2 RLRs | Soma de DERs |
| **1:N** / **1:(N)** | B independente | 2 ALs | 1 RLR cada | DERs de cada |
| **1:1** | Dependentes | 1 AL | 1 RLR | Soma de DERs |
| **1:(1)** | B dependente | 1 AL | 1 ou 2 RLRs | Soma de DERs |
| **1:(1)** | B independente | 2 ALs | 1 RLR cada | DERs de cada |
| **(N):(M)** | Independentes | 2 ALs | 1 RLR cada | DERs de cada |
| **N:M** / **N:(M)** | B dependente | 1 AL | 2 RLRs | Soma de DERs |
| **N:M** / **N:(M)** | B independente | 2 ALs | 1 RLR cada | DERs de cada |

> **Notas:**
> - "1 RLR e DERs de cada" = avalie as duas entidades separadamente.
> - "Soma de DERs" = conte todos os atributos únicos/não-repetidos das entidades agrupadas.
> - Conte a chave estrangeira do lado "muitos" **quando as entidades ficam em ALs separados**. Se foram agrupadas em **1 AL**, essa chave é o identificador da mãe, já contado — **não** conte de novo.

---

## 5.4.6 / 5.4.7 — Complexidade e tamanho

Cruze RLR × DER na **Tabela 1**, depois aplique a **Tabela 2** (tamanho):

Tabela 1 (complexidade):

| RLR \ DER | 1–19 | 20–50 | > 50 |
|---|---|---|---|
| **1** | Baixa | Baixa | Média |
| **2–5** | Baixa | Média | Alta |
| **> 5** | Média | Alta | Alta |

Tabela 2 (tamanho em PF): ALI → Baixa 7 / Média 10 / Alta 15 · AIE → Baixa 5 / Média 7 / Alta 10.

---

## Checklist rápido para função de dados

1. ✅ É um grupo de dados logicamente relacionados, reconhecido pelo usuário?
2. ✅ É mantido por algum PE (nesta app ou outra)?
3. ❌ É dado de código? → Se sim, **não conta**.
4. ❌ Tem apenas atributos técnicos? → Se sim, **não conta**.
5. ❌ É entidade associativa key-to-key? → Se sim, **não conta** (agrupe FKs).
6. 🔍 É dependente de outra entidade? → Se sim, **agrupe** no mesmo AL.
7. 📊 Classificar: mantido pela app medida? → **ALI**. Só referenciado? → **AIE**.
8. 🔢 Contar DER (atributos reconhecidos + FKs de negócio) e RLR (subgrupos lógicos).
9. 📐 Cruzar na tabela de complexidade e obter PF.
