# Parte 3 · Capítulo 2 — Arquivos Lógicos

> Parte 3 — Práticas de Contagem · CPM v4.3.1

**Introdução**

Este capítulo aplica as definições e regras referentes aos arquivos lógicos, usando um processo descritivo para a identificação e classificação das funções de dados.

Essas orientações ilustram a identificação de funções de dados a partir de modelos de dados normalizados. Uma visão geral de normalização de dados é fornecida para apoiar essa abordagem. Contudo, isso não exclui o uso dessas orientações em ambientes onde técnicas alternativas para a modelagem de dados ou objetos forem empregadas.

**Conteúdo**

Este capítulo inclui as seguintes seções:

| Tópico | Página |
|---|---|
| Resumo da Metodologia | 2-2 |
| Conceitos de Modelagem de Dados | 2-3 |
| Passo 1: Identificar Arquivos Lógicos | 2-10 |
| Passo 2: Classificar Arquivos Lógicos | 2-26 |
| Passo 3: Identifique Tipos de Dados Elementares | 2-26 |
| Passo 4: Identificar Tipos de Registro Elementares | 2-38 |
| Bibliografia | 2-51 |

## Resumo da Metodologia

### Introdução

Um processo passo-a-passo para estabelecer um conjunto de arquivos lógicos (Arquivo Lógico Interno e Arquivo de Interface Externo) é usado, onde cada passo enxerga os dados em um nível de detalhe mais refinado. Os detalhes de cada passo são explicados nas seções subsequentes.

| Passo | Ação |
|---|---|
| 1 | **Identificar Arquivos Lógicos**<br>Para cada entidade lógica de dados, identifique como as entidades relacionadas são agrupadas em arquivos lógicos, os quais refletem a "visão do usuário". Por exemplo, determine se as entidades de dados são um arquivo lógico independente por si só ou se entidades relacionadas devem ser agrupadas em um único arquivo lógico. Este passo é explicado na Seção "Passo 1: Identificar Arquivos Lógicos". |
| 2 | **Classificar Arquivos Lógicos**<br>Cada arquivo lógico identificado é classificado como ALI ou AIE. Este passo é explicado na Seção "Passo 2: Classificar Arquivos Lógicos". |
| 3 | **Identificar Tipos de Dados Elementares**<br>Para cada arquivo lógico, identifique os elementos de dados usados pela aplicação medida. Este passo é explicado na Seção "Passo 3 : Identifique Tipos de Dados Elementares" |
| 4 | **Identificar Tipos de Registro Elementares**<br>Para cada arquivo lógico, identifique como os dados relacionados são agrupados em tipos de registro elementares, os quais refletem a "visão do usuário". Este passo é explicado na Seção "Passo 4: Identifique Tipos de Registro Elementares". |

O passo com o maior impacto no tamanho funcional é o Passo 1: Identificar Arquivos Lógicos, porque a identificação da quantidade correta de arquivos lógicos é crucial para alcançar a consistência entre contagens. Os passos restantes influenciam o tamanho funcional em um grau consideravelmente menor, porque não afetam a quantidade de arquivos lógicos, mas apenas o seu tipo e classificação de complexidade.

## Conceitos de Modelagem de Dados

### Introdução

Uma revisão das definições usadas no domínio da análise de dados (o qual inclui modelagem lógica e física de dados) pode fornecer uma base para o entendimento, assim como esclarecer o propósito das regras de práticas de contagem, conforme relacionadas à identificação de Arquivos Lógicos, Tipos de Registro Elementares e Tipos de Dados Elementares. Um profundo entendimento dos conceitos de modelagem de dados está implícito na Análise de Pontos de Função, ao medir Funções de Dados da maneira apropriada e correta. A seção "Termos da Modelagem de Dados" resume os termos da modelagem de dados.

### Conceitos Chave em Modelagem de Dados

Uma revisão das definições usadas no domínio de análise de dados (o qual inclui modelagem de dados e SGBD) pode fornecer uma base para o entendimento, assim como esclarecer o propósito das regras de práticas de contagem na medida em que se relacionam especificamente a Arquivos Lógicos, Tipos de Registro Elementares (RLRs) e Tipos de Dado Elementares (DERs). Um entendimento de conceitos de dados é assumido na aplicação das orientações descritas no próximo capítulo para medir as Funções de Dados de maneira apropriada e correta.

**Tipo de Entidade**

**Definições de Entidade (ou Tipo de Entidade)**

- Qualquer pessoa, local, coisa, evento ou conceito distinto sobre o qual informação é mantida (Thomas Bruce, 1992)
- Uma coisa que pode ser identificada de forma distinta (Peter Chen, 1976).
- Qualquer objeto distinto representado em uma base de dados (C.J. Date, 1986)
- Uma entidade de dados representa alguma "coisa" que será armazenada para referência futura. O termo entidade se refere à representação lógica dos dados (Clive Finkelstein, 1989)
- A palavra entidade significa qualquer coisa sobre a qual armazenamos informação (por exemplo, um cliente, fornecedor, ferramenta mecânica, empregado, poste, assento de companhia aérea, etc.). Para cada entidade, certos atributos são armazenados (James Martin, 1989)
- Uma entidade também pode representar o relacionamento entre duas ou mais entidades, chamadas entidades associativas (Michael Reingruber, 1994)
- Uma entidade pode representar um subconjunto de informações relevante para uma instância de uma entidade, chamada entidade subtipo (também conhecido como entidade secundária ou entidade categoria) (Michael Reingruber, 1994)

Para resumir, uma entidade:

- é um objeto de dados principal sobre o qual informações são coletadas
- é uma pessoa, local, coisa ou evento de informação
- pode ter uma instância (uma ocorrência)
- é uma coisa fundamental relevante para o usuário, sobre a qual uma coleção de fatos é mantida; uma associação entre entidades que contém atributos é por si só uma entidade
- envolve informações, uma representação de coisas similares que compartilham características ou propriedades
- é frequentemente representada graficamente em um modelo de dados por um retângulo, com o nome escrito dentro do mesmo

**Elemento de Dados**

No mundo da modelagem de dados, o elemento básico é chamado ***elemento de dados*** ou ***item de dados***. Ele é

- o componente fundamental
- a partícula fundamental no universo do sistema de informações (Gary Schutt)
- a menor unidade de dados com nome que tem significado no mundo real/do usuário (Graeme Simsion)

### Atividades da Modelagem de Dados

A modelagem de dados aborda itens de dados, registros lógicos e arquivos. Um **Sistema de Arquivos** é composto de registros de itens de dados. **Itens de dados** são definidos como a menor unidade de dados com nome que tem significado para o mundo real. Um grupo de itens relacionados tratado como uma unidade é conhecido como um **registro**. Um **arquivo** é uma coleção de registros de um único tipo.

Na implementação física de dados por meio de bases de dados relacionais, são usados os seguintes termos: um item de dados é chamado "atributo" ou "coluna", um registro é chamado "linha" ou "tupla" e um arquivo é chamado "tabela". Esses termos não mudam o significado básico dos conceitos.

**Mapeando Conceitos de Dados para a Terminologia de Pontos de Função**

Podemos ainda mapear esses termos para a análise de pontos de função, conforme mostrado na seguinte matriz:

| Conceito da Modelagem de Dados | Termo da Modelagem de Dados | Termo de Base de Dados Relacional | Termo da APF | Conceito da APF |
|---|---|---|---|---|
| Menor unidade de dado com nome que tem significado para o mundo real | Item de Dados | Atributo ou Coluna | Tipo de Dado Elementar (DER) | Um tipo de dado elementar (DER) é um campo único, não-repetido, reconhecido pelo usuário |
| Grupos de itens relacionados os quais são tratados como uma unidade | Registro | Linha ou Tupla | Tipo de Registro Elementar (RLR) | Um tipo de registro elementar (RLR) é um subgrupo de elementos de dados reconhecido pelo usuário e armazenado em um ALI ou AIE |
| Coleção de registros de um único tipo | Arquivo | Tabela | Arquivo Lógico (Arquivo Lógico Interno - ALI ou Arquivo de Interface Externa - AIE) | Arquivo refere-se a grupos de dados logicamente relacionados e não à implementação física desses grupos de dados |

Uma vez que todos os dados tenham sido identificados, o analista de dados aplica várias regras de normalização para representar graficamente os dados em vários Diagramas de Entidade-Relacionamento. Um resumo das regras de normalização pode ser encontrado na Seção "Termos da Modelagem de Dados".

### Termos da Modelagem de Dados

**Entidade (ou Tipo de Entidade)**

- Principais objetos de dados sobre os quais informações são coletadas
- Pessoa, local, coisa ou evento de informação
- Instância de entidade (uma ocorrência)
- Representada graficamente por um retângulo, com o nome da entidade escrito em seu interior
- Uma coisa fundamental relevante para o usuário, sobre a qual uma coleção de fatos é mantida. Uma associação entre entidades que contém atributos é por si só uma entidade

**Tipo de Entidade Associativa**

Um tipo de entidade que contém atributos que descrevem em mais detalhe um relacionamento de muitos para muitos entre dois outros tipos de entidades.

**Tipo de Entidade Atributiva**

Um tipo de entidade que descreve em mais detalhe uma ou mais características de outro tipo de entidade.

**Entidade Subtipo**

Uma subdivisão de tipo de entidade. Um subtipo herda todos os atributos e relacionamentos de seu tipo de entidade pai e pode ter atributos e relacionamentos adicionais próprios.

**Relacionamentos**

Representam associações do mundo real entre uma ou mais entidades

- Um-para-Um
- Um-para-Vários
- Vários-para-Vários
- Representados por uma linha a qual conecta as entidades.
- O nome do relacionamento é escrito ao lado da linha

Relacionamentos são definidos por como as entidades são conectadas:

- Opcionais, apresentadas no texto com parêntesis 1:(N), (1):(N)
- Obrigatórias, apresentadas no texto sem parêntesis 1:1, 1:N

**Atributos**

- Uma característica de uma entidade. Atributos são geralmente análogos a Tipos de Dados Elementares (DERs).

### Normalização

Dados são normalizados pelo uso de 5 regras

1. Elimine Grupos Repetidos (1ª Forma Normal)
2. Elimine Dados Redundantes (2ª Forma Normal)
3. Elimine Colunas não dependentes da Chave (3ª Forma Normal)
4. Isole Relacionamentos Independentes múltiplos (nenhuma tabela pode conter dois ou mais relacionamentos 1:N ou N:M – 4ª Forma Normal)
5. Isole relacionamentos múltimos semanticamente relacionados (restrições práticas podem justificar a separação de relacionamentos logicamente relacionados de muitos para muitos – 5ª Forma Normal)

Ao realizar a análise de pontos de função, é preferível analisar o modelo lógico em 3ª Forma Normal.

Ignore múltiplas entidades incluídas em função da tecnologia (em geral 5ª forma normal)

### Conceitos de Entidade-Relacionamento

Uma vez que todos os dados necessários tenham sido identificados, o analista de dados aplica várias regras de normalização para representar graficamente os dados em vários Diagramas de Entidade-Relacionamento. A tabela a seguir pode ser aplicada para melhor entender o conceito de Tipo de Registro Elementar.

| Conceito de Entidade-Relacionamento | Termo E-R | Termo na APF | Definição do IFPUG |
|---|---|---|---|
| Objeto de dados principal sobre o qual informações são coletadas (pessoa, local, coisa ou evento); um item de relevância fundamental para o usuário sobre o qual uma coleção de fatos é mantida | Entidade ou Tipo de Entidade | Arquivo Lógico Interno (ALI) ou Arquivo de Interface Externa (AIE) | O arquivo se refere a um grupo de dados logicamente relacionados e não à implementação física desses grupos de dados |
| Um tipo de entidade que contem atributos que descrevem complementarmente relacionamentos entre outras entidades | Tipo de Entidade Associativa | Tipo de Registro Elementar (RLR) | Subgrupo de elementos de dados reconhecido pelo usuário em um ALI ou AIE (opcional ou obrigatório) |
| Um tipo de entidade que descreve complementarmente uma ou mais características de outro tipo de entidade | Tipo de Entidade Atributiva | Tipo de Registro Elementar (RLR) | Subgrupo de elementos de dados reconhecido pelo usuário em um ALI ou AIE (opcional ou obrigatório) |
| Uma divisão de um tipo de entidade, a qual herda todos os atributos e relacionamentos de seu tipo de entidade pai; pode ter atributos e relacionamentos adicionais, únicos | Entidade Subtipo | Tipo de Registro Elementar (RLR) | Subgrupo de elementos de dados reconhecido pelo usuário em um ALI ou AIE (opcional ou obrigatório) |

## Passo 1: Identificar Arquivos Lógicos

### Background

Na APF, um arquivo lógico é um grupo de dados conforme visto pelo usuário. Um arquivo lógico é composto de uma ou mais entidades de dados. Este capítulo fornece orientações sobre como agrupar as entidades candidatas identificadas em um ou mais arquivos lógicos.

O processo consiste dos seguintes passos, todos os quais são explicados em detalhe nos seguintes parágrafos desta seção:

**Passo 1**

| Subpasso |
|---|
| 1. Identifique todos os dados ou informações de controle reconhecidos pelo usuário logicamente relacionados no escopo da contagem |
| 2. Exclua as entidades não mantidas por qualquer aplicação. |
| 3. Agrupe em arquivos lógicos as entidades relacionadas que forem entidades dependentes |
| 4. Exclua aquelas entidades referenciadas como dados de código |
| 5. Exclua as entidades que não contenham atributos exigidos pelo usuário |
| 6. Remova as entidades associativas que contenham atributos adicionais não exigidos pelo usuário e entidades associativas que contenham apenas chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades principais. |

O passo mais difícil é o agrupamento de dados (subpasso 3). O agrupamento final de dados em arquivos lógicos é o resultado do efeito combinado de dois métodos de agrupamento:

- Método a) é orientado pelo processo, baseado nas transações de usuário na aplicação
- Método b) é orientado pelos dados, baseado nas regras de negócio

Contudo, como as transações do usuário também são (ou deveriam ser) baseadas em regras de negócio, cada método apoia o outro. Essa abordagem dupla pode revelar eventuais deficiências na especificação funcional e torna o processo de identificação de arquivos lógicos confiável e passível de repetição.

**Subpasso 1.1 — Identificar dados ou informações de controle logicamente relacionados reconhecidos pelo usuário dentro do escopo da contagem**

Antes de tomar a decisão sobre quais entidades devem ser agrupadas em arquivos lógicos como um conjunto, deve-se determinar quais entidades candidatas devem ser consideradas para o agrupamento lógico das entidades (subpasso 1.3) e quais devem ser excluídas. Os passos a seguir ajudarão a identificar essas entidades de uma maneira passível de repetição.

Os princípios de orientação geral da Parte I – Medir Funções de Dados são claros: considere apenas entidades significativas e requeridas pelo usuário. Preste atenção especial quando da identificação de arquivos lógicos a partir de um modelo (normalizado) de dados:

- Não assuma que todas as entidades são arquivos lógicos; por exemplo, arquivos de índice, entidades em um modelo de dados físico.
- Arquivos lógicos podem existir em uma perspectiva do usuário, mas em alguns casos podem não ser identificados no modelo (normalizado) de dados; por exemplo, arquivos históricos contendo dados agregados. Não esqueça de incluir esses arquivos lógicos no restante do processo.

**Subpasso 1.2 — Exclua entidades não mantidas por qualquer aplicação**

Determine quais entidades não são mantidas por um processo elementar nesta ou em outra aplicação. Exclua essas entidades de considerações usubsequentes, pois as mesmas não são contadas.

**Subpasso 1.3 — Agrupe em arquivos lógicos as entidades relacionadas que são entidades dependentes**

Para cada entidade de dados restante, identifique como as entidades relacionadas devem ser agrupadas em arquivos lógicos, os quais refletem a "visão do usuário"; isto é, determine se as entidades de dados constituem por si mesmas um arquivo lógico independente ou se as entidades relacionadas devem ser agrupadas em um único arquivo lógico.

Identifique a visão do usuário (= visão de negócio) do agrupamento de dados investigando:

a) Como os dados são acessados como um grupo por processos elementares dentro da fronteira da aplicação (Subpasso 1.3a, página 2-14)
b) Os relacionamentos entre as entidades e a sua interdependência baseada nas regras de negócio (Subpasso1.3b, da página 2-15 até a 2-24).

**Subpasso 1.4 — Excluir entidades referenciadas como dados de código**

Filtrar dados de código. Dados de código são incluídos como resposta a um requisito não-funcional do usuário (requisitos de qualidade, implementação física e/ou razão técnica). Dados de código são explicados em detalhe na Parte 3 – Capítulo 1 "Dados de Código".

**Subpasso 1.5 — Excluir entidades que não contenham atributos requeridos pelo usuário**

Determinar quais entidades não contém atributos reconhecidos e requeridos pelo usuário, contendo apenas atributos não funcionais. Exemplos de atributos não funcionais são aqueles que existem como um resultado de um projeto ou consideração de implementação; por exexplo, índice de arquivos criados por razões de performance, tais como índices alternados (ver Parte 1 – Medir Funções de Dados). Excluir tais entidades de considerações posteriores; as mesmas não são contadas como um arquivo lógico ou RLR.

**Subpasso 1.6 — Remover entidades associativas que contenham atributos adicionais não requeridos pelo usuário e entidades associativas que contenham apenas chaves estrangeiras; agrupar atributos de chaves estrangeiras com as entidades primárias**

1.6.1 Determinar quais entidades são entidades associativas. Uma entidade associativa contém chaves estrangeiras de entidades conectadas juntamente com outros atributos. Note que duas situações podem surgir como resultado:

a) Os atributos adicionais não-chave são um resultado do projeto ou consideração de implementação, ou existem para satisfazer um requisito técnico (não requeridos pelo usuário; ex.: um campo de data/hora com o propósito de recuperação de dados). Estes atributos técnicos não são contados como elementos de dados. Trate estas entidades como entidades key-to-key (veja abaixo).
b) Os atributos adicionais não-chave são necessários para satisfazer os requisitos funcionais do usuário e são requeridos pelo usuário. Estas entidades são avaliadas nas próximas sessões: Identificar Arquivos Lógicos (Passos 1.3a/1.3b).

**Exemplo:**

![Modelo E-R: Pedido — Itens do Pedido — Produto, com Timestamp na entidade associativa](images/p160-mer-pedido-itens-produto.png)

*Timestamp é normalmente um atributo técnico não reconhecido pelo usuário. Neste caso, para a entidade Itens do Pedido, aplica-se a situação 1.3a. A entidade key-to-key é resolvida pela inclusão do Código do Produto como uma chave estrangeira no Pedido e do Código do Pedidono Produto (passo 1.6).*

1.6.2 Determinar quais entidades são entidades key-to-key (intersecção); por ex., eles possuem apenas chaves como elementos de dados e não têm nenhum outro atributo não-chave.

Estas entidades normalmente representam a implementação de uma relação muitos para muitos (N:M) em um modelo de dados normalizado. Existem apenas por razões de modelagem de dados e projeto de banco de dados e não como resultado de um requisito do usuário.

Exclua estas entidades de outras considerações; elas não são contadas como arquivo lógico ou RLR. De acordo com as regras (Parte 1), o atributo que faz referência (chave estrangeira) é contado como um elemento de dado em ambas entidades conectadas pela entidade key-to-key. Veja também as diretrizes na Sessão "Passo 3: Identificar Tipos de Elementos de Dados".

**Verificação Final**

Verificar se todas as entidades restantes são resultado de requisitos funcionais do usuário. Estas entidades e as relações e interdependências entre as mesmas serão abordados na próxima sessão: Identificar Arquivos Lógicos (subpasso 1.3a/1.3b).

### Identificar Arquivos Lógicos Utilizando o Método de Processos Elementares (Subpasso 1.3a)

A visão de negócio do usuário sobre os dados é refletida em como as transações do usuário acessam os dados.

Reveja como os processos elementares dentro da fronteira da aplicação mantêm as entidades. Se várias entidades são sempre *criadas* juntas e *excluídas* juntas então esta é uma forte indicação de que as mesmas devem ser agrupadas dentro de um único arquivo lógico. Reveja também os processos elementares usados para extrair os dados, para determinar se o processo de extração acessa o mesmo grupo de entidades. Nota: as transações que modificam dados frequentemente têm como alvo apenas uma entidade no grupo; dessa forma, as transações de modificação não fornecem uma orientação tão eficaz para agrupamento de dados quanto as transações de inclusão e exclusão.

**Exemplo**

Um pedido de compra do cliente é um grupo único de dados a partir da perspectiva do negócio do usuário; ele é composto dos Dados Básicos do Pedido (cliente, endereço, data, etc.) e dos detalhes sobre cada item pedido. A partir da perspectiva do negócio, um pedido não pode ser criado sem pelo menos um item e se o pedido for excluído, tanto os dados básicos como todos os seus itens serão excluídos. Entretanto, os dados básicos e os itens podem ter transações de manutenção independentes; por ex., a alteração do status do pedido é uma função diferente da alteração dos itens do pedido. As funções de *inclusão* e *exclusão* indicam, a partir da perspectiva do usuário, que "pedido" é um arquivo lógico único que agrupa os dados básicos do pedido e os itens do pedido.

Utilize o subpasso 1.3a para validar os grupos de dados lógicos candidatos que foram identificados.

### Identificar Arquivos Lógicos Utilizando o Método de (In)Dependência de Entidades (Subpasso 1.3b)

#### Introdução

O Método de (In)Dependência de Entidades, como definido e explicado nesta seção, fornece um método reproduzível para identificar corretamente Arquivos Lógicos (ALs) a partir de um modelo de dados. Nesta seção, o termo "entidade" refere-se a uma entidade em um modelo de dados normalizado (normalmente na terceira forma normal).

A Seção "Tipos de Relacionamentos" explica os diferentes tipos de relacionamentos e as diferenças entre os conceitos "relacionamento obrigatório/opcional" e "entidades dependentes/independentes".

A Seção "(In)Dependência de Entidades Ilustrada para Todos os Tipos de Relacionamentos" explica o método em mais detalhes para cada tipo de relacionamento.

A Seção "Resumo: de Entidades para Arquivos Lógicos via (In)Dependência de Entidades" resume os tipos de relacionamentos e as condições para quando contar um AL.

O Método de Dependência de Entidades agrupa entidades pela avaliação dos relacionamentos e interdependências das entidades em comparação com as regras de negócio. Os princípios do guia são *entidades independentes* e *entidades dependentes*.

**Entidades Independentes**

*Entidade independente* significa uma entidade que é significativa ou tem sentido para o negócio por si só, sem a presença de outras entidades.

**Entidades Dependentes**

*Entidade dependente* significa uma entidade que não é significativa ou não tem sentido para o negócio por si só, sem a presença de outras entidades, de modo que:

- uma ocorrência da entidade X deve estar ligada a uma ocorrência da entidade Y
- a eliminação de uma ocorrência da entidade Y resulta na eliminação de todas as ocorrências relacionadas da entidade X

**Nota**

Não confunda o conceito de *entidade independente/entidade dependente* com o conceito de *relacionamento opcional/obrigatório*. Os exemplos na Seção "(In)Dependência de Entidade Ilustrada para Todos os Tipos de Relacionamentos" mostram claramente que estes são conceitos diferentes.

**Determinar Dependência**

Para determinar se a entidade B é dependente ou independente da entidade A, é preciso determinar:

*"B é significativa para o negócio independentemente da ocorrência de A ligada a ela?"*

Um teste simples para determinar a situação (entidade dependente ou independente) é o seguinte. Mesmo que não haja requisito do usuário para a exclusão, (ainda assim) faça a pergunta:

*"Suponha que nós quiséssemos excluir uma ocorrência "a" da entidade A; o que aconteceria à ocorrência "b" da entidade B ligada a "a"?"*

Dependendo das regras do negócio, distinguimos duas situações essencialmente diferentes:

**Situação 1**

Se, de acordo com as regras de negócio, uma ocorrência de B não tem significado/importância independente para o usuário e pode também ser excluída, então aparentemente a ocorrência de B não tem significado para o usuário independentemente da ocorrência correspondente de A. A entidade B é considerada uma entidade dependente de A. As entidades A e B devem ser agrupadas juntas no mesmo arquivo lógico.

**Situação 2**

Se a ocorrência de B tem significado para o negócio mesmo independentemente da ocorrência correspondente de A, as regras de negócio não permitirão a exclusão da ocorrência de B. As entidades A e B serão consideradas arquivos lógicos separados.

Avaliar o modelo de dados de um sistema de informação por meio da avaliação de todos os pares de entidades ligadas resulta na identificação dos arquivos lógicos.

Na Seção "Entidades (In)Dependentes Ilustrada para Todos os Tipos de Relacionamento" este método é explicado em mais detalhes para diferentes tipos de relacionamentos.

A Seção "Resumo: de Entidades para Arquivos Lógicos via (In-)Dependência de Entidades" resume como contar cada tipo de relacionamento na APF.

#### Tipos de Relacionamentos

Antes de assumir como conclusivos os princípios da (In)Dependência de Entidades para todos os tipos de relacionamento, deve-se entender claramente os diferentes tipos/naturezas dos relacionamentos. Esta seção explica os diferentes tipos, assim como os conceitos de "opcional" e "obrigatório".

**Exemplo**

Duas entidades, Função e Funcionário, por exemplo, podem ser conectadas entre si via um relacionamento; por ex.: "ocupa".

**Natureza do Relacionamento**

A natureza do relacionamento determina quantos funcionários podem trabalhar em uma função de acordo com o modelo de dados (0, 1 ou mais) e em quantas funções um funcionário pode trabalhar (0, 1 ou mais).

**1 : N**

Assuma que as regras de negócio determinem que vários funcionários (no mínimo 1) podem ser utilizados em uma função, e que um funcionário tem que trabalhar em uma (e apenas uma) função. Neste caso dizemos que o relacionamento entre Função e Funcionário é 1:N

![Relacionamento 1:N entre função e funcionário (ocupa)](images/p165-rel-1-n.png)

**1 : (N)**

É mais provável que as regras de negócio determinem que uma função *pode* estar vaga, isto é, nenhum funcionário tenha sido alocado para a função. Neste caso o relacionamento entre Função e Funcionário é opcional e definido como 1:(N).

![Relacionamento 1:(N) entre função e funcionário (ocupa)](images/p165-rel-1-opcN.png)

**(1) : N**

Se as regras de negócio determinam que um funcionário pode existir sem uma função, mas uma função sempre tem um funcionário a ela alocado, definimos o relacionamento entre Função e Funcionário como (1):N

![Relacionamento (1):N entre função e funcionário (ocupa)](images/p165-rel-opc1-n.png)

**(1) : (N)**

Na situação onde uma função pode estar vaga e um funcionário pode existir sem uma função, ambos os lados do relacionamento são opcionais. O relacionamento entre Função e Funcionário é definido como (1):(N).

![Relacionamento (1):(N) entre função e funcionário (ocupa)](images/p166-rel-opc1-opcN.png)

**Conceito "Obrigatório/Opcional" versus "(In)Dependência de Entidades".**

Para deixar clara a diferença entre os conceitos de "relacionamento obrigatório/opcional" e "dependência/independência de entidades", assuma, como um exemplo, a seguinte extensão das regras de negócio "funcionário(s) não é(são) permitido(s) sem uma função" (relacionamento do tipo 1:N e 1:(N)).

Quando uma função se torna obsoleta, isto não significa que os funcionários não são mais significativos para o negócio. Um funcionário tem significado para o negócio independente da função relacionada. Funcionário é uma entidade independente de função. Devido ao relacionamento obrigatório com função, todos os funcionários têm que ser alocados a uma nova função, antes de a função poder ser excluída.

Então pode acontecer que uma ocorrência da entidade B (ex. Funcionário) possa ter um link obrigatório com uma ocorrência da entidade A (por ex. Função) no relacionamento A:B entre as entidades A e B, mas aquela entidade B é por si só significativa para o negócio. Neste caso, quando alguém quiser excluir uma ocorrência da entidade A, tem-se que antes reatribuir uma ocorrência ligada de B para outra ocorrência de A.

#### (In)Dependência de Entidade Ilustrada para Todos os Tipos de Relacionamento

**(In)Dependência de Entidade em um Relacionamento (1):(N)**

**(1) : (N)**

Se um relacionamento entre duas entidades A e B é bilateralmente opcional, as entidades podem existir independentemente e (todas ocorrências de) A e B são significativas para o negócio independentemente da(s) ocorrência(s) relacionada(s) com a outra entidade.

Então, A e B são consideradas entidades independentes uma da outra. A APF conta as entidades A e B como dois arquivos lógicos separados, conforme indicado na tabela da Seção "Resumo: de Entidades para Arquivos Lógicos via (In-)Dependência de Entidades".

**(In)Dependência de Entidade em um Relacionamento 1:(N)**

**1 : (N)**

Em um relacionamento 1:(N) entre duas entidades A e B (veja figura 1), pode existir uma ocorrência da entidade A para nenhuma, uma ou muitas ocorrências da entidade B relacionadas. Por outro lado, cada ocorrência de B tem que ser associada a uma ocorrência de A.

**Exemplo**

No relacionamento 1:(N) entre Funcionário e Filho (ou Dependente) em uma Aplicação de RH, um Funcionário deve ter 0, 1 ou muitos Dependentes a ele relacionados, mas um Dependente tem que estar relacionado a um (e apenas um) Funcionário (veja figura 2).

Como B deve ser relacionado a um A, isto levanta a questão se B é dependente ou independente de A.

Para determinar se a entidade B é dependente ou independente de A, é necessário responder:

*"B é significativo para o negócio independentemente do A a ela relacionado?"*

Veja um teste simples para diferenciar a dependência e independência de entidades. Mesmo que não existam requisitos do usuário para exclusão, faça a seguinte pergunta:

*"Suponha que desejamos excluir uma ocorrência da entidade A; o que acontecerá com as ocorrências relacionadas da entidade B que têm um relacionamento obrigatório com uma ocorrência de A?"*

As regras de negócio podem resultar em duas possibilidades:

**Situação 1**

Se a exclusão de A for permitida, todas as ocorrências de B relacionadas também deverão ser excluídas, pois o negócio não está mais interessado nas ocorrências de B. Por exemplo (veja figura 2): Uma aplicação de RH mantém informações sobre funcionários e seus dependentes. Assuma que as regras de negócio definiram que quando um Funcionário (A) deixa a companhia, não tem mais sentido para o negócio manter a informação sobre os dependentes (B).

**Situação 2**

A exclusão de A não é permitida enquanto ocorrências de B ainda estiverem a ela relacionadas, pois o negócio está ainda interessado nas ocorrências de B, mesmo além do contexto do A correspondente. Por exemplo (veja figura 3): Uma organização adota crianças e designa cada criança a um funcionário. O funcionário é a pessoa de contato entre a companhia e a criança. No caso de um funcionário deixar a companhia, as informações sobre a criança associada (do funcionário desligado) ainda são significativas para o negócio. Então, antes que se permita a exclusão do Funcionário (A), tem-se que primeiramente atribuir a Criança associada (B) a outro Funcionário (A) (pois a natureza deste relacionamento não permite uma Criança sem um relacionamento com Funcionário).

Na situação (1) dizemos que B é uma *entidade dependente* de A, e na situação (2) que B é uma *entidade independente* de A.

A APF conta as entidades A e B como um único arquivo lógico na situação (1) (*dependência*), enquanto na situação (2) A e B são arquivos lógicos separados (*independência*) conforme indicado na tabela da Seção "Resumo: de Entidades para Arquivos Lógicos via (In-)Dependência de Entidades".

Ilustração do relacionamento 1:(N):

![Fig. 1 — Relacionamento 1:(N) genérico entre entidades A e B](images/p168-fig1-a-b.png)

Fig. 1: Cada entidade do tipo A pode referenciar 0, 1 ou muitas entidades do tipo B. Uma entidade do tipo B tem que referenciar exatamente uma entidade do tipo A.

![Fig. 2 — Funcionário e Dependente (Aplicação de RH)](images/p168-fig2-funcionario-dependente.png)

Fig. 2: A aplicação de RH mantém informações sobre funcionários e seus dependentes.

![Fig. 3 — Funcionário e Criança Adotada (Aplicação de RH)](images/p168-fig3-funcionario-crianca-adotada.png)

Fig. 3: A aplicação de RH mantém informações sobre Funcionários e sobre as Crianças Adotadas que são designadas para um Funcionário.

As figuras 2 e 3 possuem modelos de dados similares, mas diferentes regras de negócio resultam em diferentes arquivos lógicos identificados.

**(In)Dependência de Entidade em um Relacionamento (1):N**

**(1) : N**

Um relacionamento (1):N entre duas entidades A e B (veja figura 4) pode ser tratado de forma similar. Estes tipos de relacionamentos, entretanto, raramente aparecem na prática.

Em um relacionamento (1):N entre duas entidades A e B, cada A deve ser atribuído a 1 ou muitos Bs. Por outro lado, um B pode (mas não necessariamente) ser atribuído a uma ocorrência de A.

**Exemplo**

Em um relacionamento (1):N entre Comitê e Membro da Organização, um Comitê tem que ter membros (pelo menos 1). Um membro da organização pode (mas não necessariamente) servir em um Comitê (veja figuras 5 e 6).

Devido a uma ocorrência de A ter que estar relacionada a uma de B, levanta-se a questão se A é dependente ou independente de B.

Para determinar se a entidade A é dependente ou independente de B, precisa-se responder:

*"A é significativa para o negócio independentemente da entidade B a ela relacionada?"*

Veja a seguir um teste simples para diferenciar a dependência e independência de entidades. Mesmo que não existam requisitos do usuário para exclusão, faça a pergunta:

*"Assuma que temos uma ocorrência da entidade A à qual estão relacionadas uma ou mais ocorrências da entidade B. Suponha que desejamos excluir a última ocorrência relacionada à entidade B; o que aconteceria com esta ocorrência de A, que possui um relacionamento obrigatório com pelo menos uma ocorrência de B?"*

As regras de negócio podem resultar em duas possibilidades:

**Situação 1**

Quando o último B é excluído, o A relacionado é também excluído pois o negócio não se interessa mais por ele. Por exemplo (veja a figura 5): Uma organização tem comitês aos quais membros são atribuídos.

A regra de negócio é que um comitê deve ter membros, mas nem todos os membros precisam participar de um comitê. Uma regra de negócio adicional é que a organização encerra um comitê assim que não haja mais membros participando do mesmo; pode-se dizer que os comitês são vistos como grupos de trabalho "ad hoc".

Neste caso quando o último membro de um comitê sai do comitê, não tem sentido para o negócio manter informações sobre o comitê. Os dados do comitê são excluídos assim que o último membro deixa o comitê.

**Situação 2**

A exclusão do último B não é possível enquanto exista algum A ainda referenciado por ele, pois o negócio está ainda interessado neste específico A, mesmo além do contexto dos Bs que o referenciam. Por exemplo (veja figura 6), uma organização tem comitês aos quais membros são atribuídos.

A regra de negócio é que um comitê deve ter membros, mas nem todos os membros precisam participar de um comitê. Comitês são vistos como parte da estrutura organizacional. Eles têm significado para o negócio além dos membros que os servem.

Antes que o último membro de um específico comitê deixe o comitê, um novo membro tem que ser atribuído àquele comitê pois a natureza do relacionamento não permite um comitê sem membros.

Na situação (1), A é aparentemente não significativo para o negócio a menos que ele esteja relacionado a um ou mais Bs, enquanto na situação (2) ele é significativo.

Na situação (1) nós dizemos que A é uma *entidade dependente* de B e na situação (2) que A é uma *entidade independente* de B.

A APF conta as entidades A e B como um único arquivo lógico na situação (1) (*dependência*), enquanto na situação (2) A e B são arquivos lógicos separados (*independência*), como indicado na tabela da Seção "Resumo: de Entidades para Arquivos Lógicos via (In-)Dependência de Entidades".

Ilustração do relacionamento (1):N:

![Fig. 4 — Relacionamento (1):N genérico entre entidades A e B](images/p171-fig4-a-b.png)

Fig. 4: Cada entidade do tipo A tem que ser referenciada por 1 ou mais entidades do tipo B; uma entidade do tipo B pode, mas não necessariamente, referenciar uma entidade do tipo A.

![Fig. 5 — Comitê Ad Hoc e Membro da Organização](images/p171-fig5-comite-adhoc-membro.png)

Fig. 5: Membros de uma organização podem (mas não necessariamente) estar ativos em um comitê de trabalho. Um Comitê tem que ter (um ou mais) membros participando.

![Fig. 6 — Comitê e Membro da Organização](images/p171-fig6-comite-membro.png)

Fig. 6: Membros de uma organização podem (mas não necessariamente) estar ativos em um comitê de trabalho. Um Comitê tem que ter (um ou mais) membros participando.

As figuras 5 e 6, tem modelo de dados similares, mas regras de negócio diferentes resultando em diferentes arquivos lógicos identificados.

**(In)Dependência de Entidade em um Relacionamento 1:N**

**1 : N**

Em um relacionamento 1:N entre duas entidades A e B, cada entidade B tem que ser atribuída a um e apenas um A, e a cada A tem que ser atribuído pelo menos a um B. Aplicam-se as mesmas regras de dependência e independência das entidades.

![Relacionamento 1:N entre Pedido e Entrada do Pedido (tem)](images/p171-rel-1-n-pedido.png)

**Situação 1**

Se B não é significativo para o negócio independentemente do A a ele relacionado, então B é considerado uma entidade dependente de A.

**Situação 2**

Se B é significativo para o negócio independentemente do A a ele relacionado, então B é considerado uma entidade independente de A.

A APF conta as entidades A e B como um arquivo lógico na situação (1) (*dependência*), enquanto que na situação (2) A e B são arquivos lógicos separados (*independência*), como indicado na tabela da Seção "Resumo: de Entidades para Arquivos Lógicos via (In-)Dependência de Entidades".

#### Resumo: De Entidades para Arquivos Lógicos via (In)Dependência de Entidades

Na tabela abaixo, A e B são duas entidades de um modelo de dados (normalizado) que devem ser contadas de acordo com esta Seção e que são interconectadas via um relacionamento. A tabela resume como as diversas situações são contadas.

| Tipo de Relacionamento entre duas entidades, A e B | Quando esta Condição Existe | Então conte como Arquivo Lógico (AL) |
|---|---|---|
| (1) : (N) | (A e B são independentes) | 2 ALs |
| 1 : N | Se B é entidade dependente de A | 1 AL |
| 1 : N | Se B é entidade independente de A | 2 ALs |
| 1 : (N) | Se B é entidade dependente de A | 1 AL |
| 1 : (N) | Se B é entidade independente de A | 2 ALs |
| (1) : N | Se A é entidade dependente de B | 1 AL |
| (1) : N | Se A é entidade independente de B | 2 ALs |
| (1) : (1) | (A e B são independentes) | 2 ALs |
| 1 : 1 | (A e B são dependentes) | 1 AL |
| 1 : (1) | Se B é entidade dependente de A | 1 AL |
| 1 : (1) | Se B é entidade independente de A | 2 ALs |
| (N) : (M) | (A e B são independentes) | 2 ALs |
| N : M | Se B é entidade dependente de A | 1 AL |
| N : M | Se B é entidade independente de A | 2 ALs |
| N : (M) | Se B é entidade dependente de A | 1 AL |
| N : (M) | Se B é entidade independente de A | 2 ALs |

**Legenda**

AL = Arquivo lógico (ALI ou AIE)<br>(..) = Lado opcional do relacionamento

**Notas**

1. Na dúvida, decida por entidades independentes.
2. Em algumas situações mais que duas entidades podem também formar um arquivo lógico.

## Passo 2: Classificar Arquivos Lógicos

Os arquivos lógicos identificados precisam ser validados segundo as regras de contagem de ALI/AIE na Parte 1.

Classifique um arquivo lógico como um Arquivo Lógico Interno (ALI) se processos elementares dentro da fronteira da aplicação que está sendo contada, mantém (criam, alteram ou excluem) elementos de dados dentro do arquivo.

Classifique um arquivo lógico como um Arquivo de Interface Externa (AIE) se processos elementares dentro da fronteira da aplicação sendo contada apenas referenciam os elementos de dados dentro do arquivo, *e* o arquivo lógico é mantido por um processo elementar em outra aplicação.

Se um arquivo lógico identificado *não* é mantido por um processo elementar (dentro desta aplicação ou em outra), então o arquivo lógico não é contado de modo algum.

## Passo 3: Identifique Tipos de Dados Elementares

O dado elementar é a menor unidade que tem significado para o usuário e representa um fato específico sobre um negócio, por exemplo:

| Nome do Dado Elementar | Valor do Dado Elementar |
|---|---|
| Taxa | $900 |
| Data do Nascimento | 15 Jan 1965 |
| Nome | InfoMerge |

### Termos e Definições de Dados Elementares

Ao iniciar o estudo de um modelo de dados lógico, começamos considerando esses elementos de dados como atributos. Um atributo representa um fato específico sobre uma entidade ou um relacionamento. Na tabela abaixo as entidades são mostradas em MAIÚSCULO, os atributos em minúsculo:

| Representação | Exemplo |
|---|---|
| ENTIDADE_atributo | CURSO_taxa |
| ENTIDADE.atributo | COMPANHIACLIENTE.nome |

Atributos/elementos de dados podem ser encontrados em:

- Visões do usuário (relatórios, telas)
- Dicionários de dados (modelos do negócio, modelos de dados)
- Arquivos existentes (estrutura de registros em programas, layouts de arquivos)

Quando estiver revendo os dados, o analista de dados segue esta premissa básica: todos os elementos de dados reconhecidos pelo usuário devem ser tratados como um atributo, e dessa forma devem ser mostrados em relação a uma entidade específica.

O atributo pode ter as seguintes propriedades: nome (sinônimo), característica, propósito (uso), origem, valores válidos, valor (estrutura), unidade, e dependências. Iremos explorar estas propriedades antes de rever o mapeamento de DERs para atributos/elementos de dados da Análise de Pontos de Função do IFPUG.

**Nome do Atributo**

Um nome único que resume as características apresentadas. Ele contém os seguintes componentes:

- **origem** (entidade/relacionamento) *seguido por um ponto*
- **descritivo** (adjetivo do atributo) *seguido por um hífen*
- **classe** (atributo base)

Muitas tecnologias não aceitam espaços. Então vários nomes são concatenados com hífens.

Exemplo:<br>COMPANHIA_CLIENTE.endereço-entrega<br>SEMINARIO_MATRICULA. efetividade-avaliação

**Característica**

A propriedade do ambiente sendo medido ou representado. O nome da entidade que tem a característica é sempre presente; por exemplo, Endereço-Entrega: endereço em que os materiais serão entregues para a COMPANHIA-CLIENTE.

**Propósito**

Fazer a pergunta "Como o atributo é utilizado pelo negócio" justifica o atributo.

Exemplo: CURSO.data-qualificação<br>Propósito: Usado nas seções de recapitulação de planejamento

**Dependências**

As situações onde outros valores de atributos no modelo influenciam ou restringem o valor deste atributo. Por exemplo, CURSO-grau final não pode existir antes do término do curso, mas tem que existir ao término do mesmo.

**Atributos Chave**

Fornecem o relacionamento entre uma entidade e outra. Existem diferentes tipos de chaves no modelo de dados, ex.: chaves primárias, chaves secundárias e chaves estrangeiras.

Uma **Chave Primária (PK)** é o identificador único de uma entidade.

**Chaves Secundárias (SK)** são atributos que fornecem acesso mais rápido às informações, como:

- LIVROESCOLAR.preço (SK)
- LIVROESCOLAR.nome-editora (SK).

Chaves Secundárias não fazem parte da informação do modelo de dados (modelo de dados lógico) mas são usados principalmente para auxiliar no acesso (implementação física).

**Chaves Estrangeiras (FK)** são atributos usados para representar relacionamentos de uma entidade com outra.

**Atribuição**

O último conceito de modelagem de dados que devemos considerar antes da análise dos DERs é Atribuição, que prescreve/descreve onde os atributos residem, dentro da entidade ou dentro do relacionamento. Existem algumas regras comuns de atribuição que são seguidas na modelagem de dados:

1. Um atributo é atribuído à sua melhor "origem" única, que é indicada na propriedade de característica no FORMULÁRIO DE DEFINIÇÃO DE ATRIBUTO.
2. O identificador único (chave primária) de uma entidade será atribuído também a cada relacionamento em que ele participa.

Existem algumas diretrizes adicionais a serem seguidas ao tentar colocar um atributo na entidade mais apropriada:

1. Se a definição do atributo referir-se a uma entidade, aloque o atributo àquela entidade
2. Se a definição do atributo referir-se a diversas entidades, então crie um relacionamento e aloque o atributo ao relacionamento ou à entidade à qual ele se aplicar.

### Mapeando Elementos de Dados para Tipos de Elementos de Dados da APF

Agora que nós já revisamos os conceitos de elementos de dados e atributos na perspectiva da modelagem de dados, podemos relacionar estes conceitos às definições e regras de Pontos de Função do IFPUG:

| Conceito de Modelagem de Dados | Termo da Modelagem de Dados | Termo de BD Relacional | Termo da APF | Conceito da APF |
| --- | --- | --- | --- | --- |
| Menor unidade de dados definida que tem significado no mundo real | Item de Dados | Atributo ou Coluna | Tipo de Elemento de Dados (DER - Dado Elementar Referenciado) | Um tipo de elemento de dados (DER) é um campo reconhecido pelo usuário, único e não repetido |
| Grupos de itens relacionados que são tratados como uma unidade | Registro | Linha ou Tupla | Tipo de Registro Elementar (RLR - Registro Lógico Referenciado) | Um tipo de registro elementar (RLR) é um subgrupo de elementos de dados, reconhecido pelo usuário, dentro de um ALI ou AIE |
| Coleção de registros de um mesmo tipo | Arquivo | Tabela | Arquivo Lógico (Arquivo Lógico Interno – ALI ou Arquivo de Interface Externa – AIE) | Arquivo se refere a um grupo de dados relacionados logicamente e não à implementação física deste grupo de dados |

**Tipos de Elementos de Dados (DERs)** são campos ou atributos, reconhecidos pelo usuário, únicos e não repetidos.

As seguintes regras se aplicam ao contar DERs em um arquivo lógico:

- Conte um DER para cada campo único, reconhecido pelo usuário e não repetido, mantido em/ou recuperado de uma função de dados através da execução de todos os processos elementares dentro de um escopo de contagem
- Conte apenas aqueles DERs que estão sendo usados pela aplicação que está sendo contada quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados
- Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados
- Revise atributos relacionados para determinar se são agrupados e contados como um único DER ou se são contados como vários DERs; o agrupamento vai depender de como o processo elementar utiliza os atributos dentro da aplicação

Não conte atributos que existam puramente para satisfazer um requisito técnico e não foram especificados pelo usuário. Exemplos destes atributos não funcionais são atributos resultantes de considerações de projeto ou de implementação.

_Exemplo:_ O campo PEDIDO_data é contado como um DER no Pedido já que ele precisa ser mantido para satisfazer um requisito do negócio do usuário. Entretanto, a marca (stamp) de data e hora de cada registro do pedido existe para satisfazer a integridade e a confiabilidade dos dados. A solução técnica para estes requisitos de qualidade foi copiar o banco de dados e disponibilizar para recuperação baseado nesta informação da marca (stamp). Consequentemente, a marca (stamp) de data e hora não deve ser contada como um DER.

### Outras Situações

A seguir exemplos de contagem de tipo de elementos de dados (DERs).

#### Atributos

Atributos que são compostos de diversos elementos de dados relacionados são armazenados separadamente.

Devem os atributos serem contados como diversos elementos de dados ou como um único elemento de dados? As regras de DER na Parte 1 dizem para você "contar cada campo reconhecido pelo usuário".

Como você determina se ele é reconhecido pelo usuário como uma coisa ou várias coisas? Reveja as transações dentro da aplicação para determinar se o atributo é tratado como um item ou mais de um.

Considere os seguintes itens na tomada de decisão:

a) Se o atributo é sempre usado por inteiro, então ele é contado como um único elemento de dados (DER). Não devem existir situações em que um componente individual de um atributo é usado sem os outros. Baseado neste uso, o atributo é contado como um único elemento de dado.

b) Se em algumas situações, apenas uma parte do atributo (ex. o sobrenome) é usada, então mais do que um elemento de dados deve ser contado. Olhe para o uso em componentes dentro da aplicação para determinar quantas partes reconhecidas existem. A opção não é necessariamente um ou todos. Baseado no que você está vendo, pode ser apropriado contar apenas dois DERs, ainda que existam na realidade cinco partes físicas.

c) Olhe para a existência de requisitos de ordenação ou de edições e critérios de seleção. Se uma lista ou relatório é ordenado ou selecionado por um simples componente do atributo, isto sugere independência de componentes na visão do usuário.

#### Contando Nomes

Nome (primeiro nome, nome do meio, último nome)

Muitas aplicações precisam manter informações sobre os nomes das pessoas. O nome deve ser contado como vários elementos de dados ou um elemento de dados único?

Reveja as transações dentro da aplicação para determinar se o nome é tratado como um item ou mais do que um item. Por exemplo: Nos Estudos de Caso 1,2 e 3, veja como o Nome do Funcionário é usado em várias funções de transação.

Essas funções sempre usam o nome inteiro ou algumas vezes apenas usam uma parte?

Nos Estudos de Caso, o Nome do Funcionário é sempre usado inteiramente. Não existem telas ou relatórios onde uma única parte do nome é usada sem as outras partes. Também não existem situações onde uma parte do nome é usada para ordenação, edição ou critério de seleção. Seu uso dentro da aplicação sugere que Nome do Funcionário é um elemento de dados único (DER).

#### Contando Endereços

Endereço (endereço, cidade, estado e CEP)

Muitas aplicações precisam manter informações sobre endereços. O endereço ser deve contado como vários elementos de dados ou um elemento de dados único?

Reveja as transações dentro da aplicação para determinar se o endereço é tratado como um item ou mais do que um item. Por exemplo: Nos Estudos de Caso 1, 2 e 3, veja como o Endereço de Localização é usado em várias funções de transação.

As transações sempre referenciam o endereço inteiro ou algumas vezes apenas usam uma parte?

Nos Estudos de Caso, o Endereço é sempre usado inteiramente. Não existem telas ou relatórios onde uma única parte do endereço seja usada sem as outras partes. Não existe situação onde uma parte do endereço seja usada para ordenação, edição ou critério de seleção. Seu uso dentro da aplicação sugere que Endereço da Localização é um elemento de dado único (DER).

Se existisse uma lista de locais que permitisse ao usuário listar todos os locais em uma cidade, estado ou CEP específico, mais de um elemento de dado deveria ser contado. Com base nas informações fornecidas, aparentemente cidade, estado e CEP são reconhecidos pelo usuário como partes independentes do endereço. Dessa forma, quatro DERs devem ser contados (Endereço, Cidade, Estado e CEP).

#### Contando Campos Repetitivos

Muitas vezes as aplicações mantém múltiplas ocorrências de um elemento de dados. De acordo com as regras de DER na Parte 1, conte um campo repetitivo apenas uma vez.

Depois que os campos repetitivos forem reduzidos para um único DER, verifique se os requisitos do negócio estão ainda sendo satisfeitos. Considere os seguintes exemplos:

**Exemplo 1: Código do Funcionário**

Nos Estudos de Casos 1, 2 e 3, olhe para os requisitos de Manter Funcionário e para o relacionamento entre Funcionário e Dependente no Diagrama de Entidade e Relacionamento (DER). De acordo com os resultados dos Estudos de Casos, Funcionário é um AL que inclui Dependente. Os arquivos lógicos de Funcionário e Dependente conteriam cada um o Código do Funcionário.

Aplicando as regras de DER "repetitivos", conte Código do Funcionário como um único DER para o ALI Funcionário. Agora determine se os requisitos do negócio ainda são satisfeitos.

O requisito era manter Dependente como uma parte da informação do Funcionário. Sim, os requisitos de negócio estão satisfeitos, portanto, um DER é contado.

**Exemplo 2: Horas Trabalhada Diariamente**

Um sistema de reportar horas tipicamente mantém o número de horas que uma pessoa trabalha a cada dia. Ao rever as estruturas de dados, as Horas Trabalhadas são salvas separadamente para cada dia da semana (Horas Trabalhada de Segunda-feira, Horas Trabalhada de Terça-feira, etc.).

Aplicando as regras de DER "repetitivos", conte apenas Horas Trabalhadas. Determine se os requisitos do negócio ainda são satisfeitos. Se a aplicação apenas mantém informação sobre Horas Trabalhadas, está satisfeito o requisito do negócio para manter horas trabalhadas a cada dia?

Não, não está. A fim de satisfazer aquele requisito, conte Dia da Semana. A aplicação tem a habilidade de acompanhar separadamente cada hora trabalhada a cada dia (Horas Trabalhada de Segunda-feira, Horas Trabalhada de Terça-feira, etc.), portanto, dois DERs são contados.

#### Contando Campos de Status

As aplicações frequentemente mantém informação do status atual dos dados (ex., Ativo, Inativo, Pendente, Aprovado, etc.). Este status é normalmente atualizado através das diversas transações dentro da aplicação. Estes campos de status podem ou não ser fisicamente visíveis ao usuário através das transações da aplicação. Considere os seguintes exemplos:

**Exemplo 1: Status Inativo**

Os Estudos de Caso 1, 2 e 3, incluem um indicador de Status. Quando um cargo ou um funcionário é excluído, os requisitos do usuário indicam que toda atribuição ao cargo excluído deve ser atualizada para o status de "inativo".

Ao rever as telas de atribuição de cargo em toda a aplicação, o status nunca é mostrado ou atualizado diretamente em nenhuma tela. Apesar da falta de visibilidade, o Status ainda é contado como um DER para o cargo atribuído. O fato dele aparecer no Modelo de Dados Lógico e nos Requisitos do Usuário sugerem que ele é reconhecido pelo usuário no Arquivo Lógico, mas em nenhuma transação. Então, um DER é contado no ALI.

**Exemplo 2: Status Não Contado**

O usuário solicita a habilidade de excluir Funcionários. A equipe técnica não quer fazer a exclusão física dos registros; então, eles implementaram um "flag de status" em Funcionário. Quando o usuário exclui um Funcionário, o Status é marcado como "Inativo". O usuário desconhece a existência do campo de Status em Funcionário. Então, o campo Status não deve ser contado como um DER.

#### Contando Datas do Sistema

As aplicações frequentemente retêm datas do sistema associadas com seus dados para refletir a versão dos dados. Datas do Sistema podem ter muitos nomes diferentes (última atualização, última aprovação, etc.) e são frequentemente acompanhadas pelo código do usuário (última atualização por, última aprovação por). Estas datas do sistema são tipicamente atualizadas através de diversas transações dentro da aplicação. Em muitos casos, a data do sistema é mantida por requisitos de negócio. O usuário necessita saber quando o dado foi alterado ou aprovado. Existem também casos onde a data do sistema está sendo mantida apenas por razões técnicas.

Considere os seguintes exemplos:

**Exemplo 1: Data da Efetivação**

Os Estudos de Casos 1, 2 e 3, incluem uma referência à Data da Efetivação. Quando um cargo ou um funcionário é excluído, os requisitos do usuário indicam que qualquer atribuição de cargo associada deve ser atualizada para marcar a data da efetivação como sendo a data atual do sistema.

Ao rever as telas de atribuição de cargo em toda a aplicação, a data da efetivação nunca é mostrada ou atualizada diretamente em nenhuma tela. Apesar da falta de visibilidade, a Data da Efetivação é ainda contada como um DER para cargo. O fato dele aparecer no Modelo de Dados Lógico e os Requisitos do Usuário referenciarem-no pelo nome sugerem que o mesmo é reconhecido pelo usuário. Então, um DER é contado no Arquivo Lógico.

**Exemplo 2: Data da Recuperação**

A ferramenta de Backup/Recuperação utilizada pela aplicação usa a data do sistema armazenada na tabela para recuperar o dado para um ponto particular no tempo. Neste caso, a Data da Recuperação não é reconhecida pelo usuário e não deve ser contada.

**Exemplo 3: Data da Auditagem**

A equipe técnica decide que deve registrar a data do sistema e o código do usuário sempre que o dado é alterado para resolver qualquer questão futura sobre quando ou por quem uma alteração foi feita. Neste caso, a data do sistema não é reconhecida pelo usuário e não deve ser contada.

#### Contando Chaves Estrangeiras

As aplicações frequentemente mantêm relacionamentos entre uma entidade e outra. Em alguns casos eles existem para satisfazer requisitos de validação de dados, mas em outros casos eles definem regras de negócio entre as duas entidades. O conceito de Atribuição na modelagem de dados é melhor ilustrado pela criação de chaves estrangeiras.

**Exemplo 1: Local (N) : (1)**

Os Estudos de Casos 1, 2 e 3 incluem os requisitos do usuário para Inclusão e Atualização de Funcionários: "O local deve ser um local válido no Sistema de Ativo Fixo (SAF)."

O Diagrama de Entidades e Relacionamentos também reforça este requisito do negócio pela ilustração do relacionamento entre a entidade Funcionário e a entidade Local. De acordo com o diagrama, um Funcionário pode ter um Local, e um Local pode ter muitos Funcionários. Nesta situação, o Nome do Local deve ser incluído nos atributos das tabelas lógicas e físicas. Conte o atributo Nome do Local como um elemento de dados (DER) para Funcionário.

**Exemplo 2: Cubículo (1) : (N)**

Considere uma variação do exemplo anterior. Um empregado pode ter um número ilimitado de cubículos. Um cubículo só pode ser ocupado por um empregado por vez. O Código do Cubículo deve ser válido como identificado na tabela CUBÍCULO. O Diagrama de Entidades e Relacionamentos estaria garantindo o requisito do negócio pela ilustração do relacionamento entre a entidade CUBÍCULO e a entidade FUNCIONARIO. De acordo com o diagrama, um Empregado pode ter muitos cubículos, mas um Cubículo só pode ser ocupado por um Empregado. Nesta situação, o Código do Empregado é um atributo em CUBÍCULO.

![Diagrama de Entidades e Relacionamentos: entidades Empregado e Cubículo em relacionamento (1):(N); ID Empregado (FK) em Cubículo, com anotação "conte a chave estrangeira no lado muitos do relacionamento".](images/p185-cubiculo-1n-er.png)

Nota: nem todos os atributos estão retratados nas entidades.

O relacionamento deveria ser refletido na tabela CUBÍCULO pela identificação do Empregado que ocupa o Cubículo. O código do Empregado é contado como um elemento de dado (DER) para Cubículo.

**Exemplo 3: Cubículo (N) : (M)**

Considere uma variação do exemplo anterior. Um empregado tem que ter pelo menos um cubículo, mas pode ter um número ilimitado de cubículos. Um cubículo pode ser ocupado por mais de um empregado por vez. O Código do cubículo deve ser válido como identificado no CUBÍCULO. O Diagrama de Entidades e Relacionamentos novamente garantiria o requisito de negócio pela ilustração do relacionamento entre Empregado e Cubículo. De acordo com este diagrama, um Empregado pode ter muitos cubículos, e um Cubículo pode ser ocupado por muitos Empregados.

![Diagrama de Entidades e Relacionamentos: entidades Empregado, Cubículo Empregado e Cubículo em relacionamento (N):(M); anotações "conte ID Cubículo como um DER", "conte ID Empregado como um DER" e "conte a chave estrangeira no lado um do relacionamento".](images/p185-cubiculo-nm-er.png)

Nota: nem todos os atributos estão retratados nas entidades.

O relacionamento é demonstrado na tabela Cubículo-Empregado, o qual conteria uma ocorrência de cada empregado no relacionamento com o cubículo. Ele incluiria o Código do Empregado e o Código do Cubículo como chave primária. Como explicado nas Seções "Passo 1: Identificar Arquivos Lógicos" e "Passo 4: Identificar Tipos de Registros Elementares", Cubículo-Empregado não é contado como um Arquivo Lógico nem como um RLR. Código do Cubículo é contado como um elemento de dados (DER) em Empregado porque estabelece um relacionamento com a entidade Empregado e Código Empregado é contado como um elemento de dados (DER) em Cubículo porque estabelece um relacionamento com a entidade Cubículo.

### Observação

A identificação do número correto de DERs não influencia o número de arquivos lógicos, mas apenas sua complexidade. Enquanto, este passo influencia o tamanho funcional de forma limitada, o efeito é consideravelmente menor do que no Passo 1: Identificar Arquivos Lógicos.

## Passo 4: Identifique Tipos de Registro Elementares

O tipo de registro elementar (RLR) representa a visão do usuário dos _subgrupos_ de dados dentro de um arquivo lógico identificado, o qual foi discutido enteriormente na Seção "Passo 1: Identificar Arquivos Lógicos".

Tipos de registros elementares correspondem tipicalmente a entidades que foram agrupadas em arquivos lógicos como discutido na Seção "Passo 1: Identificar Arquivos Lógicos". Eles precisam ser revistos cuidadosamente para garantir que o usuário os identifique como um subgrupo lógico, e deste modo, sejam contados como um Tipo de Registro Elementar (RLR).

### Termos e Definições de Tipo de Registro Elementar

Este capítulo mostra um modelo de dados lógico na 3ª. Forma Normal e ignora diversas entidades criadas por razões técnicas; se você não tem um modelo de dados uma tentativa deve ser feita para (des)normalizar os dados.

As definições estão baseadas nos conceitos de modelo de dados descritos na Seção "Conceitos de Modelagem de Dados".

**Tipo de Entidade Associativa**

Um tipo de entidade que contém atributos que descrevem em detalhe um relacionamento muitos-para-muitos entre dois outros tipos de entidades, também conhecida como entidade de intersecção.

**Tipo de Entidade Atributiva**

Um tipo de entidade que descreve em mais detalhes uma ou mais características de outro tipo de entidade.

**Entidade Subtipo**

Uma subdivisão de um tipo de entidade; herda todos os atributos e relacionamentos do seu tipo de entidade pai, e pode ter atributos e relacionamentos adicionais próprios.

#### Mapeando os Termos de Modelagem de Dados para a Terminologia de Pontos de Função

Os termos de Modelagem de Dados podem ser mapeados para a análise de pontos de função como mostrado na seguinte tabela:

| Conceito de Modelagem de Dados | Termo de Modelagem de Dados | Termo de Banco Dados Relacional | Termo da APF | Conceito de APF |
| --- | --- | --- | --- | --- |
| Grupos de itens relacionados que são tratados como uma unidade | Registro | Linha ou Tupla | Tipo de Registro Elementar (RLR – Registro Lógico Referenciado) | Um _tipo de registro elementar_ (RLR) é um subgrupo de elementos de dados, reconhecido pelo usuário dentro de um ALI ou AIE. |
| Coleção de registros de um mesmo tipo | Arquivo | Tabela | Arquivo Lógico (Arquivo lógico interno – ALI ou Arquivo de interface externa – AIE) | Arquivo se refere a um grupo de dados relacionados logicamente e não à implementação física deste grupo de dados. |

A seguinte tabela pode ser aplicada para auxiliar o entendimento do conceito de Tipo de Registro Elementar.

| Conceito de Entidades e Relacionamentos | Termo de Entidades e Relacionamentos | Termo da APF | Conceito de APF |
| --- | --- | --- | --- |
| Principais objetos de dados sobre os quais informações são coletadas (pessoa, lugar, coisa ou evento); um item de fundamental importância para o usuário sobre os quais uma coleção de fatos é mantida. | Entidade ou Tipo de Entidade | Arquivo Lógico | Arquivo refere-se a um grupo de dados logicamente relacionados e não à implementação física deste grupos de dados; se não existirem outros subgrupos, o arquivo lógico é contado com um único Tipo de Registro Elementar (RLR) |
| Um tipo de entidade que contém atributos que ajudam a descrever um relacionamento entre outras entidades. | Tipo de Entidade Associativa | Pode ser um arquivo lógico ou um possível tipo de registro elementar (RLR); veja a Seção "Analisando Entidades Associativas para determinar RLRs" para mais considerações. | Subgrupo de elementos de dados reconhecidos pelo usuário dentro de um ALI ou AIE, pode ser opcional ou obrigatório. |
| Um tipo de entidade que ajuda a descrever uma ou mais características de outro tipo de entidade. | Tipo de Entidade Atributiva | Possivelmente um Tipo de Registro Elementar (RLR); veja a Seção "Analisando Entidades Atributivas para Determinar RLRs" para mais considerações. | Subgrupo de elementos de dados reconhecidos pelo usuário dentro de um ALI ou AIE, pode ser opcional ou obrigatório. |
| Uma divisão do tipo de entidade, que herda todos os atributos e relacionamentos de seu tipo de entidade pai, e pode ter atributos e relacionamentos adicionais únicos. | Entidade Subtipo | Possivelmente um Tipo de Registro Elementar (RLR); veja a Seção "Analisando Subtipos para Determinar RLRs" para mais considerações. | Subgrupo de elementos de dados reconhecidos pelo usuário dentro de um ALI ou AIE, pode ser opcional ou obrigatório. |

A Análise de Pontos de Função considera as associativas, atributivas e subtipos como subgrupos de dados. Isto será explorado na discussão de como contar RLRs.

### Analisando Entidades Associativas para Determinar RLRs

Uma entidade associativa é usada para associar duas ou mais entidades como uma maneira de definir um relacionamento muitos-para-muitos. Este tipo de entidade é frequentemente criada pelo modelador de dados para implementar algumas regras de negócio requeridas para relacionar duas entidades separadas.

Existem três possibilidades a considerar quando encontrar entidades associativas.

**Situação 1**

**Entidade Associativa _não é_ contada como um RLR**

A secretaria acadêmica tem um requisito de gerenciar todos os estudantes registrados para um curso e saber os cursos que o estudante completou previamente. Curso é uma entidade e Estudante é uma entidade. O modelador de dados criou uma entidade associativa chamada Curso do Estudante como uma interseção entre as duas, e esta entidade associativa apenas contém as chaves de cada entidade.

![Diagrama de Entidades e Relacionamentos: entidades Estudante e Curso ligadas pela entidade associativa Curso do Estudante, que contém apenas ID Estudante (PK) e Número do Curso (PK).](images/p189-situacao1-curso-estudante-er.png)

A entidade Curso do Estudante _não_ é considerada um RLR nem deve ser contada como um arquivo lógico separado porque não contém nenhum elemento de dado adicional além das duas chaves primárias (PK) das entidades que fazem a interseção.

Estudante é um arquivo lógico com 1 RLR (Estudante) e Curso é um arquivo lógico com 1 RLR (Curso).

**Situação 2**

**Entidade Associativa _é_ contada como um RLR**

A secretaria acadêmica tem um requisito de identificar todos os estudantes registrados para um curso. Além disso ela precisa da informação sobre os resultados do curso para o(s) estudante(s). O Curso é uma entidade e o Estudante é uma entidade. O modelador de dados criou uma entidade associativa chamada Curso do Estudante como uma interseção entre as duas, e esta entidade associativa contém as chaves de cada entidade bem como o resultado do curso do estudante.

![Diagrama de Entidades e Relacionamentos: entidades Estudante e Curso ligadas pela entidade associativa Curso do Estudante, que contém ID Estudante (PK), Número do Curso (PK) e Resultado do Estudante no Curso.](images/p190-situacao2-curso-estudante-er.png)

Não existe regra de negócio que solicite que curso do estudante seja mantido independentemente; então Curso do Estudante não satisfaz as regras para ser contado como um arquivo lógico separado. Neste caso, a entidade Curso do Estudante _é_ considerada um RLR, pois contém pelo menos um atributo reconhecido pelo usuário (\*), além das duas chaves primárias das entidades que participam da intersecção.

(\*) Na Seção "Subpasso 1.5 Excluir entidades que não contém atributos requeridos pelo usuário", atributos não chaves que são resultado de considerações de projeto ou de implementação, ou que satisfazem um requisito técnico, não são considerados elementos de dados.

A fim de ser contado como um RLR, um subgrupo deve conter um ou mais atributos além das chaves primárias. Estudante é um arquivo lógico com 2 RLRs (Estudante e Curso do Estudante) e Curso é um arquivo lógico com 2 RLRs (Curso e Curso do Estudante).

Se o requisito do negócio indicar que o relacionamento representado pela entidade associativa pertence a apenas um dos arquivos lógicos, o RLR será contado apenas naquele arquivo lógico.

**Situação 3**

**Entidade Associativa contada como um _arquivo lógico_, com um único RLR**

Um departamento de RH mantém informações sobre Funcionário, Funções e Funções Atribuídas. A entidade Funções Atribuídas é necessária, mesmo que um Funcionário não esteja mais associado com a Função ou que a Função não seja mais uma função disponível para alocação.

![Diagrama de Entidades e Relacionamentos: entidades Funcionário e Funções ligadas pela entidade associativa Funções Atribuídas, que contém ID Funcionário (PK), Número da Função (PK), Data, Salário, Classificação de Desempenho e Situação.](images/p191-situacao3-funcoes-atribuidas-er.png)

Nota: Nem todos os atributos são retratados como entidades.

Embora Funções Atribuídas seja uma entidade associativa, ela é mais que um mapeamento key-to-key entre duas entidades, e é mais que um RLR associado com um arquivo lógico. Se uma regra de negócio solicita que a informação de Funções Atribuídas deva ser retida independentemente, Funções Atribuídas é considerada um arquivo lógico como descrito na Seção "Identificar Arquivos Lógicos Utilizando o Método de (In)Dependência de Entidades (Subpasso 1.3b)".

Se não existirem regras de negócio solicitando que as informações de Funções Atribuídas devam ser retidas independentemente, então esta entidade associativa é contada como na situação 2 acima.

### Analisando Entidades Atributivas para Determinar RLRs

Uma entidade atributiva é um tipo de entidade que ajuda a descrever uma ou mais características de um outro tipo de entidade. Pela definição ela é uma extensão lógica de outra entidade; em Análise de Pontos de Função uma entidade atributiva representa um Tipo de Registro Elementar daquela entidade.

Uma entidade atributiva é contada como sendo um RLR do arquivo lógico que ela está definindo (Situação 1) ou como uma extensão do arquivo lógico (Situação 2).

**Situação 1**

**Uma entidade atributiva _opcional_**

Um funcionário pode aderir a um plano de benefícios. Em nosso modelo de dados, Funcionário é uma entidade. Benefícios Funcionário é uma entidade atributiva de Funcionário e contém informações sobre os benefícios que o funcionário tem. Benefícios Funcionário não pode existir sem Funcionário, e é então logicamente relacionado.

![Diagrama de Entidades e Relacionamentos: entidade Funcionário ligada à entidade atributiva opcional Benefícios Funcionário.](images/p192-situacao1-beneficios-er.png)

Benefícios Funcionário é contado como um RLR pois é uma entidade atributiva opcional. Funcionário é um arquivo lógico com 2 RLRs, Funcionário e Benefícios de Funcionário.

**Situação 2**

**Uma entidade atributiva _obrigatória_**

Um sistema de vendas deve manter informações sobre cada produto e sobre seus respectivos preços. Produto é uma entidade. Informações de Preço do Produto é uma entidade atributiva relacionada a Preço, contendo: preço anterior, preço atual, preço futuro projetado e data efetiva do preço. Informações de Preço do Produto não existe sem Produto e é então logicamente relacionada.

![Diagrama de Entidades e Relacionamentos: entidade Produto ligada à entidade atributiva obrigatória Informação de Preço do Produto.](images/p193-situacao2-preco-produto-er.png)

Informações de Preço do Produto _não_ é contado como um RLR. Produto é um arquivo lógico com 1 RLR, contendo Produto e Informações sobre Preço do Produto.

### Analisando Subtipos para Determinar RLRs

Uma entidade subtipo é uma subdivisão de tipo de entidade. Um subtipo herda todos os atributos e relacionamentos da entidade pai, e pode ter atributos e relacionamentos adicionais próprios. As regras de modelagem de dados determinam que uma entidade pode ter qualquer número de grupos de subtipos independentes associados a ela, os quais podem ser opcionais ou obrigatórios. Cada subtipo pode ter apenas um pai. Na modelagem de dados, embora o pai e o subtipo sejam representados como entidades diferentes, eles são logicamente parte da mesma entidade.

Ao analisar subtipos no modelo de dados, olhe para o relacionamento requeridos para a entidade "pai", como mostrado nas seguintes situações.

**Situação 1**

**Subtipo que é um subgrupo e então _é_ contado como um RLR**

Um funcionário tem que ser um funcionário permanente ou um funcionário contratado, mas não pode ser os dois. Os dados comuns do funcionário são pertinentes a todos os funcionários e são obrigatórios. Além disso, os dados comuns são herdados pelas entidades subtipo obrigatórias, permanente e contratado.

![Diagrama de subtipos: entidade Funcionário contendo os subtipos Funcionário Permanente e Funcionário Contratado.](images/p194-situacao1-subtipo-er.png)

Na revisão destes dados a partir da perspectiva de pontos de função, dois subgrupos lógicos do arquivo lógico Funcionário são identificados:

- Dados do funcionário permanente incluem informações do funcionário permanente como também as informações comuns do funcionário.
- Dados do funcionário contratado incluem informações do funcionário contratado como também as informações comuns do funcionário.

Nesta situação existe um arquivo lógico (Funcionário) com dois RLRs, funcionário permanente e funcionário contratado.

**Situação 2**

**Subtipo que _não é_ um subgrupo e então não é contado como um RLR**

Se existem atributos únicos entre entidades subtipo, considere seriamente se um subgrupo separado realmente existe e desta forma constituiria um tipo de registro elementar (RLR). Um simples atributo opcional único não resultaria em um RLR diferente da perspectiva do usuário, mesmo se representado como uma entidade subtipo em um modelo de dados lógico.

O estado civil de um Funcionário pode ser casado ou solteiro. Se casado, o nome do cônjuge é armazenado. Embora possa ser representado como um subtipo em um modelo de dados, o nome do cônjuge é apenas um atributo opcional dentro do grupo lógico de dados do Funcionário.

![Diagrama de subtipos: entidade Funcionário contendo os subtipos Funcionário Casado e Funcionário Solteiro.](images/p195-situacao2-subtipo-er.png)

Um atributo diferente neste caso não faz diferença significativa entre o funcionário casado e solteiro a partir da visão do negócio.

**Dicas**

Olhe para o modelo de dados cuidadosamente. Quando houver dúvida, pergunte ao usuário a intenção dos subtipos separados. O analista de dados cria o modelo de dados representando sua visão do mundo do usuário. Na prática, depende da visão do usuário/regras de negócio se estas entidades subtipo são importantes para o usuário e devem ser consideradas como RLRs.

Se existem transações separadas para incluir/alterar atributos únicos para estas entidades subtipo, isto seria uma indicação de que _deveríamos_ ter RLRs separados para estes subtipos de entidades.

### Outras Situações

Se você não tem um modelo de dados, procure grupos repetitivos de dados. Você pode encontrar algumas das seguintes situações. Aqui estão algumas dicas adicionais para contagem.

**Grupos/Dados Repetitivos**

Grupos repetitivos são múltiplas ocorrências dos mesmos dados, que podem ser repetidos diversas vezes dentro de um arquivo lógico.

**Situação 1**

**_Grupos_ repetitivos contados como RLR**

O grupo de dados de Pedido consiste em Cabeçalho do Pedido e pode ter várias ocorrências de Item de Pedido. Item de Pedido contém mais do que um atributo único. Cabeçalho do Pedido e Item de Pedido representam dois subgrupos separados. Nós podemos contar dois RLRs para o arquivo lógico Pedido.

**Situação 2**

**_Dados_ repetitivos não contados como RLR**

Um campo repetitivo (DER) não resultaria em um subgrupo separado ou RLR. Por exemplo, um Funcionário deve ter diversos números de contas de bancos. Isto _não_ implicaria em dois RLRs para Funcionário ("todos os dados sem numero da conta do banco" e "números das contas dos bancos").

**Observação**

Na dúvida, _não_ conte um subgrupo de informações como um RLR.

A Identificação do número correto de RLRs não influencia o _número_ de arquivos lógicos identificados, influencia apenas na complexidade do arquivo lógico. Embora este passo influencie no tamanho funcional, esta influência é em nível inferior a dos arquivos lógicos no Passo 1: "Identificar Arquivos Lógicos".

### Considerando Tipo de Dados Elementares e Tipo de Registros Elementares em Conjunto com Arquivos Lógicos via (In)Dependência de Entidades

Agora que os Tipos de Dados Elementares e Tipos de Registros Elementares foram discutidos, a tabela mostrada na Seção "Resumo: de Entidades para Arquivos Lógicos via (In)Dependência de Entidades" é expandida, incluindo DERs e RLRs.

| Tipo de Relacionamento entre duas entidades, A e B | Quando esta Condição Existe | Então conte como Arquivos Lógicos com RLRs e DERs como abaixo: |
| --- | --- | --- |
| (1) : (N) | (A e B são independentes) | 2 ALs, 1 RLR e DERs para cada |
| 1 : N | Se B é entidade dependente de A | 1 AL, 2 RLRs, soma de DERs |
|  | Se B é entidade independente de A | 2 ALs, 1 RLR e DERs para cada |
| 1 : (N) | Se B é entidade dependente de A | 1 AL, 2 RLRs, soma de DERs |
|  | Se B é entidade independente de A | 2 ALs, 1 RLR, e DERs para cada |
| (1) : N | Se A é entidade dependente de B | 1 AL, 2 RLRs, soma DERs |
|  | Se A é entidade independente de B | 2 ALs, 1 RLR, e DERs para cada |
| (1) : (1) | (A e B são independentes) | 2 ALs, 1 RLR, e DERs para cada |
| 1 : 1 | (A e B são dependentes) | 1 AL, 1 RLR, soma DERs |
| 1 : (1) | Se B é entidade dependente de A | 1 AL, 1 ou 2 RLRs, soma DERs |
|  | Se B é entidade independente de A | 2 ALs, 1 RLR, e DERs para cada |
| (N) : (M) | (A e B são independentes) | 2 ALs, 1 RLR, e DERs para cada |
| N : M | Se B é entidade dependente de A | 1 AL, 2 RLRs, soma DERs |
|  | Se B é entidade independente de A | 2 ALs, 1 RLR, e DERs para cada |
| N : (M) | Se B é entidade dependente de A | 1 AL, 2 RLRs, soma DERs |
|  | Se B é entidade independente de A | 2 ALs, 1 RLR, e DERs para cada |

**Notas**

- 1 RLR e DERs para cada significa: avaliar as duas entidades por conta própria.
- Soma DERs significa: contar todos os atributos únicos, não repetidos de entidades ligadas entre si.
- Contar a chave estrangeira do lado muitos do relacionamento.
- Em algumas situações mais de duas entidades podem formar um arquivo lógico; nesse caso mais de dois (2) RLRs devem ser contados.

**Legenda**

- AL = Arquivo lógico (ALI ou AIE)
- (..) = Lado opcional do relacionamento
- RLR = Tipo de Registro Elementar
- DER = Tipo de Dado Elementar

## Bibliografia

As fontes foram consultadas ou citadas neste capítulo.

Booch, Grady, James Rumbaugh, Ivar Jacobson. _The Unified Modeling Language User Guide._ Reading: Addison-Wesley, 1994. ISBN: 0-2015-7168-4.

NESMA. _Definitions and Counting Guidelines for the Application of Function Point Analysis: A Practical Manual, Version 2.2_. (NESMA, 2003). ISBN: 978-90-76258-17-1.

Nota: Este manual é também chamado de NESMA Counting Practices Manual. Descreve o padrão da metodologia de APF, e muitos aspectos relacionados a aplicação de APF. Pode ser usado junto com o manual do IFPUG. Para maiores informações, acesse o site da NESMA www.nesma.org .

Garmus, David, David Herron. _Function Point Analysis: Measurement Practices for Successful Software Projects_. Boston: Addison-Wesley Information Technology Series, 2001. ISBN: 0-201-69944-3.

Martin, James, Carma McClure. _Diagramming Techniques for Analyst and Programmers_. Englewood Cliffs: Prentice-Hall, Inc., 1985. ISBN: 0-132-087944.

Modern Language Association of America. _MLA Handbook for Writers of Research Papers, Fifth Edition_. Boston: Addison Wesley, 1999.

Reingruber, Michael C. and William W. Gregory. _The Data Modeling Handbook: A Best-Practice Approach to Building Quality Data Models._ Canada: John Wiley & Sons, Wiley-QED Publication, 1994. ISBN: 0-471-05290-6.

Silverman, Len, W. H. Inmon, Kent Graziano. _The Data Model Resource Book: A Library of Logical Data Models and Data Warehouse Design_. Boston: Addison-Wesley, Inc. Out of Print: AISN: 0-471-15364-8.

Simsion, Graeme. _Data Modeling Essentials: Analysis, Design, and Innovation_. Boston: International Thomson Computer Press, 1994. ISBN: 1-850-932877-3.

Schuldt, Gary. "Information Modeling for Information Systems Analysts", A workshop at AT&T Bell Laboratories. Holmdel, N.J., May, 1992.

Teorey, Toby J. _Database Modeling & Design: The Fundamental Principles, Second Edition_. San Francisco: Morgan Kaufmann Publishers, Inc., 1994. ISBN: 1-558-60291-1.
