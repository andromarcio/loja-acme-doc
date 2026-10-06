# Parte 2 · Capítulo 6 — Medir Funções de Dados

> Parte 2 — A Transição (Aplicando o Método FSM do IFPUG) · CPM v4.3.1

**Introdução**

Este capítulo oferece um guia de aplicação das regras e procedimentos para medir funções de dados.

As funções de dados representam a funcionalidade oferecida ao usuário para satisfazer requisitos de dados internos e externos. Uma função de dado pode ser um arquivo lógico interno ou um arquivo de interface externo.

O termo *arquivo* aqui não significa arquivo físico ou tabela. Nesse caso, arquivo se refere a um grupo de dados logicamente relacionados e não à implementação física destes grupos de dados.

**Conteúdo**

Este capítulo inclui as seguintes seções:

| Tópico | Página |
|---|---|
| **Definição e Intenção Primária: ALIs e AIEs** | 6-2 |
| Arquivos Lógicos Internos | 6-2 |
| Arquivo de Interface Externa | 6-2 |
| Diferença entre ALIs e AIEs | 6-2 |
| Definições para Termos Utilizados | 6-2 |
| **Procedimentos para Contagem de Funções de Dados** | 6-4 |
| Regras de Identificação das Funções de Dados | 6-4 |
| Regras de Classificação de Funções de Dados | 6-5 |
| Definições e Regras de Complexidade e Contribuição | 6-5 |
| Definição de DER | 6-5 |
| Regras de DER | 6-5 |
| Definição RLR | 6-7 |
| Regras de RLR | 6-7 |
| Determinação da Complexidade e Contribuição | 6-8 |
| **Dicas para Ajudar na Contagem** | 6-10 |

## Definição e Intenção Primária: ALIs e AIEs

Esta seção inclui a definição e a intenção primária de um arquivo lógico interno (ALI) e de um arquivo de interface externa (AIE). São definidos os termos utilizados nas definições, assim como exemplos foram incluídos ao longo desta seção.

### Arquivos Lógicos Internos

Um arquivo lógico interno (ALI) é um grupo de dados ou de informações de controle logicamente relacionados, reconhecido pelo usuário, mantido dentro da fronteira da aplicação que está sendo contada. A intenção primária de um ALI é armazenar dados mantidos através de um ou mais processos elementares da aplicação que está sendo contada.

### Arquivo de Interface Externa

Um arquivo de interface externa (AIE) é um grupo de dados ou de informações de controle logicamente relacionados, reconhecido pelo usuário, referenciado pela aplicação que está sendo contada, porém, mantido dentro da fronteira de uma outra aplicação. A intenção primária de um AIE é armazenar dados referenciados através de um ou mais processos elementares dentro da fronteira da aplicação que está sendo contada. Isto significa que um AIE contado para uma aplicação deve ser um ALI em outra aplicação.

### Diferença entre ALIs e AIEs

A diferença primária entre um arquivo lógico interno e um arquivo de interface externa é que um AIE **não é** mantido pela aplicação que está sendo contada, enquanto que um ALI é mantido pela aplicação que está sendo contada.

### Definições para Termos Utilizados

Os seguintes parágrafos ajudam na definição de ALIs e AIEs através da definição dos termos utilizados dentro das definições.

**Informações de Controle**

*Informações de Controle* são dados que influenciam um processo elementar. Especificam o que, quando ou como os dados serão processados.

Por exemplo, alguém do departamento da folha de pagamento estabelece ciclos de pagamentos para especificar quando os funcionários de cada local serão pagos. O ciclo de pagamento, ou cronograma, contém informações de periodicidade que determinam quando o processo elementar de pagamento de funcionários ocorrerá.

**Reconhecido pelo Usuário**

O termo reconhecido pelo usuário refere-se a requisitos definidos para processos e/ou grupos de dados que foram acordados e entendidos tanto pelo(s) usuário(s) quanto pelos desenvolvedor(es) de software.

Por exemplo, usuários e desenvolvedores concordam que uma Aplicação de Recursos Humanos terá funcionalidade para manter e guardar informações do Funcionário na aplicação.

**Mantido**

O termo mantido refere-se à habilidade de incluir, modificar ou excluir dados a partir de um processo elementar.

Exemplos incluem, mas não estão limitados a, inclusão, modificação, exclusão, carga inicial, revisão, atualização, atribuição e criação.

**Processo Elementar**

Um processo elementar é a menor unidade de atividade que tem significado para o usuário.

Deve-se compor e/ou decompor os Requisitos Funcionais do Usuário até a menor unidade de atividade, a qual satisfaz os itens a seguir:

- é significativo para o usuário
- constitui uma transação completa
- é auto contida e
- deixa o negócio da aplicação contada em um estado consistente

Por exemplo, os requisitos do usuário para adicionar um funcionário inclui informações de salário e dependentes. Um funcionário não terá sido criado se não forem incluídas todas as respectivas informações. Incluir separadamente apenas parte das informações deixará o negócio de incluir um funcionário em um estado inconsistente. Se forem incluídos tanto o salário do empregado quanto as informações do(s) dependente(s), a unidade de atividade será concluída e o negócio será deixado em um estado consistente.

## Procedimentos para Contagem de Funções de Dados

Esta seção oferece um guia na aplicação de regras para a contagem das funções de dado (arquivos lógicos internos e arquivos de interface externa).

Este resumo foi incluído para mostrar as regras no contexto dos procedimentos de contagem de ALI e de AIE.

**Nota:** Os procedimentos detalhados de contagem estão na página 6-4. Um guia adicional e exemplos estão na Parte 3 Arquivos Lógicos.

O procedimento para medir funções de dados inclui os seguintes passos:

| Passo | Ação |
|:---:|---|
| 1 | Identificar as funções de dados. |
| 2 | Classificar cada função de dado como um ALI ou AIE. |
| 3 | Determinar a complexidade dos ALI ou AIE e sua contribuição para o tamanho funcional. |

### Regras de Identificação das Funções de Dados

Uma função de dados representa a funcionalidade fornecida ao usuário para atender requisitos de armazenamento de dados internos e externos. Uma função de dados é um ALI ou um AIE.

**Nota:** Funções de dados são mais facilmente identificadas quando se utiliza um modelo lógico de dados; entretanto, isto não impede a medição em ambientes onde técnicas alternativas de modelagem de dados ou objetos são empregadas. A terminologia de modelagem de dados é utilizada para documentar as regras de funções de dados, porém a mesma abordagem pode ser aplicada com outras técnicas.

Para identificar funções de dados, as atividades a seguir devem ser cumpridas:

- Identificar no escopo da contagem todos os dados e informações de controle logicamente relacionados e reconhecidos pelo usuário.
- Excluir entidades que não são mantidas por nenhuma aplicação.
- Agrupe entidades relacionadas que são dependentes (Consulte Parte 3 Arquivos Lógicos)

  **Nota:** Entidades independentes devem ser consideradas grupos lógicos de dados separados.
- Excluir as entidades classificadas como Dados de código (Consulte Parte 3 Dados de Código)
- Excluir entidades que não contém atributos necessários para o usuário.
- Remover entidades associativas que contém atributos adicionais não necessários para o usuário e entidades associativas que contém apenas chaves estrangeiras; agrupe atributos de chave estrangeira com as entidades primárias

  **Nota:** Atributos chave estrangeira são dados necessários para o usuário estabelecer uma relação com outra função de dado.

### Regras de Classificação de Funções de Dados

Classificar como um ALI se o dado é mantido pela aplicação que está sendo medida.

Classificar como um AIE se:

- É referenciado, mas não mantido, pela aplicação que está sendo medida e
- É identificado como um ALI em uma ou mais aplicações

**Nota:** Se a função de dados satisfaz ambas as regras, classifique-a como ALI.

### Definições e Regras de Complexidade e Contribuição

O número de ALIs, AIEs, e suas respectivas complexidades funcionais determinam a contribuição das funções de dados para o tamanho funcional.

Atribua a cada ALI e AIE identificado uma complexidade funcional com base na quantidade de tipos de dados elementares (DERs) e de tipos de registros elementares (RLRs) associados ao ALI ou AIE.

Esta seção define DERs e RLRs e inclui regras para cada um.

**Definição de DER**

Um *tipo de dado elementar* é um campo único, reconhecido pelo usuário e não repetido.

**Regras de DER**

Para a contagem de Tipos de Dados Elementares (DERs) para uma função de dados, as regras a seguir devem ser aplicadas:

- Conte um DER para cada campo único, reconhecido pelo usuário e não repetido, mantido ou recuperado pela função de dados durante a execução de todos os processos elementares no escopo da contagem.

  Por exemplo, o(s) resultado(s) do cálculo de um processo elementar, como o valor do imposto sobre uma venda, referente a um pedido de cliente mantido em um ALI é contado como um DER no ALI de pedido de cliente.

  Por exemplo, acessar o preço de um item salvo em um arquivo de faturamento, ou campos como um time stamp, se requisitado pelo usuário, são contados como DERs.

  Por exemplo, se um número de funcionário aparece duas vezes em um ALI ou AIE como: (1) chave do registro do funcionário e (2) chave estrangeira do registro do dependente, conte o DER apenas uma vez.

  Por exemplo, dentro de um ALI ou AIE, conte um DER para os 12 campos Valor Mensal Orçado. Conte um DER adicional para identificar o mês aplicável.
- Conte apenas os DERs que estão sendo usados pela aplicação que está sendo medida quando duas ou mais aplicações estiverem sendo mantidas e/ou referenciando a mesma função de dados.

  **Nota:** Atributos que não são referenciados pela aplicação que está sendo medida não são contados.

  Por exemplo, a Aplicação A pode identificar e utilizar um endereço como: rua, cidade, estado e CEP. A Aplicação B pode ver o endereço como um bloco de dados sem considerar os componentes individuais. A Aplicação A contaria quatro DERs; a Aplicação B contaria um DER.

  Por exemplo, a Aplicação X mantém e/ou referencia um ALI que contém CPF, Nome, Rua, Caixa Postal, Cidade, Estado e CEP. A Aplicação Z mantém e/ou referencia Nome, Cidade e Estado. A Aplicação X contaria sete DERs; a Aplicação Z contaria três DERs.
- Conte um DER para cada parte de dado requisitada pelo usuário para estabelecer um relacionamento com outra função de dado.

  Por exemplo, na Aplicação de RH, as informações de um funcionário são mantidas dentro de um ALI. O nome da função do funcionário é incluído como parte das informações do funcionário. Este DER é contado porque é necessário para relacionar um funcionário a uma função existente na organização. Este tipo de dado elementar é conhecido como *chave estrangeira*.

  Por exemplo, em uma aplicação orientada a objetos (OO), o usuário solicita uma associação entre classes de objetos, as quais foram identificadas como ALIs distintos. O Nome do local é um DER do ALI Local. O nome do local é requerido ao processar as informações do funcionário; conseqüentemente, também é contado como um DER dentro do ALI funcionário.
- Revisar os atributos relacionados para determinar se eles estão agrupados e contados como um simples DER ou se são contados como DERs múltiplos; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação

  Por exemplo, um número de conta que é armazenado em vários campos é contado como um DER.

  Por exemplo, uma imagem antes ou depois de um grupo de 10 campos mantidos para fins de auditoria deve ser contado como um DER para a imagem antes (todos os 10 campos) e um DER para a imagem depois (todos os 10 campos), totalizando 2 DERs.

**Definição RLR**

Um *Tipo de Registro Elementar* (RLR) é um subgrupo de dados reconhecido pelo usuário dentro de uma função de dados.

**Regras de RLR**

Para Contar Tipos de Registro Elementar (RLRs) para uma função de dados, as atividades a seguir devem ser executadas:

- Conte um RLR para cada função de dados (por padrão cada função de dado tem um subgrupo de DERs para ser contado como um RLR)
- Conte um RLR adicional para cada subgrupo de DER lógico adicional (com a função de dados) que contém mais de um DER:
  - entidade associativa com atributos não-chave
  - subtipo (outro além do primeiro subtipo) e
  - entidade atributiva, em um relacionamento que não seja obrigatório 1-1

**Nota:** Um relacionamento obrigatório 1-1 reflete a relação entre duas entidades onde cada uma é relacionada com uma, e apenas uma, instância de uma entidade relacionada.

Por exemplo, em uma Aplicação de Recursos Humanos, a informação para um funcionário é adicionado através da adição de informações gerais. Além das informações gerais, o funcionário é um assalariado ou horista.

O usuário determinou que um funcionário ou é assalariado ou é horista. Cada tipo de funcionário possui atributos próprios. Os dois tipos podem ter informações sobre dependentes. Neste exemplo, existem três subgrupos ou RLRs, como mostrado abaixo:

- Funcionário assalariado; incluindo informações gerais
- Funcionário horista; incluindo informações gerais
- Dependente do funcionário

**Nota:** Se não houver um modelo de dados, procure grupos de dados repetidos a fim de identificar RLRs.

**Nota:** Existem dois tipos de subgrupos: Opcional e Obrigatório. *Subgrupos Opcionais* são aqueles que o usuário tem a opção de usar um ou nenhum dos subgrupos durante o processo elementar que inclui ou cria uma instância do dado.

*Subgrupos Obrigatórios* são subgrupos onde o usuário deve usar pelo menos um durante um processo elementar que adiciona ou cria uma instância de dados.

### Determinação da Complexidade e Contribuição

A complexidade funcional de cada função de dados deve ser determinada utilizando os passos abaixo.

| Passo | Ação |
|:---:|---|
| 1 | Para identificar e contar os RLRs e DERs, use as regras de contagem de complexidade e contribuição que iniciam na página 6-5. |
| 2 | A complexidade funcional de cada função de dados deve ser determinada utilizando o número de RLRs e DERs de acordo com esta matriz. |

|  | 1 a 19 DERs | 20 a 50 DERs | 51 ou mais DERs |
|---|---|---|---|
| **1 RLR** | Baixa | Baixa | Média |
| **2 a 5 RLRs** | Baixa | Média | Alta |
| **6 ou mais RLRs** | Média | Alta | Alta |

Por exemplo, uma função de dados com 51 DERs e 2 RLRs se traduz uma complexidade funcional alta.

| Passo | Ação |
|:---:|---|
| 3 | O tamanho funcional de cada função de dados é determinado usando o tipo e a complexidade funcional de acordo com as tabelas abaixo. |

Tabela de Contribuição de ALI: Use a tabela a seguir para atribuir um tamanho funcional para cada ALI.

| Grau de Complexidade Funcional | Pontos de Função |
|---|:---:|
| Baixo | 7 |
| Médio | 10 |
| Alto | 15 |

Tabela de Contribuição de AIE: Use a tabela a seguir para atribuir um tamanho funcional para cada AIE.

| Grau de Complexidade Funcional | Pontos de Função |
|---|:---:|
| Baixo | 5 |
| Médio | 7 |
| Alto | 10 |

Por exemplo, um alto grau de complexidade funcional para um AIE se transforma em 10 pontos de função.

| Passo | Ação |
|:---:|---|
| 4 | A contribuição dos ALIs e AIEs para o tamanho funcional podem ser totalizadas. |

Por exemplo, a tabela a seguir mostra o cálculo para um ALI de complexidade alta, dois AIEs de complexidade média e um AIE de complexidade alta.

| Tipo de Função | Complexidade Funcional | Total da Complexidade | Total do Tipo de Função |
|---|---|:---:|:---:|
| ALI | 0 &nbsp;·&nbsp; Baixa &nbsp;·&nbsp; X 7 = | 0 | |
|  | 0 &nbsp;·&nbsp; Média &nbsp;·&nbsp; X 10 = | 0 | |
|  | 1 &nbsp;·&nbsp; Alta &nbsp;·&nbsp; X 15 = | 15 | 15 |
| AIE | 0 &nbsp;·&nbsp; Baixa &nbsp;·&nbsp; X 5 = | 0 | |
|  | 2 &nbsp;·&nbsp; Média &nbsp;·&nbsp; X 7 = | 14 | |
|  | 1 &nbsp;·&nbsp; Alta &nbsp;·&nbsp; X 10 = | 10 | 24 |

Neste exemplo, não existem ALIs de baixa ou alta complexidade e apenas um ALI de alta complexidade; portanto, o tamanho total para os ALIs é de 15 pontos. Para os AIEs, não existe nenhum de complexidade baixa, dois de complexidade média (14 pontos) e um de alta complexidade (10 pontos) totalizando 24 pontos para os AIEs.

O tamanho funcional engloba o total final para todos os tipos de funções. As contribuições para ALIs e AIEs podem ser acrescentadas à tabela que lista todos os tipos de funções. O Apêndice A inclui uma tabela que pode ser usada para registrar o total para todas as funções.

## Dicas para Ajudar na Contagem

As dicas a seguir podem ajudar a aplicar as regras de ALI e AIE. Estas dicas *não são* regras e não devem ser usadas como regras.

- Os dados constituem um grupo lógico que suporta os requisitos específicos do usuário?
  - Uma aplicação pode usar um ALI ou AIE em diversos processos, mas o ALI ou AIE é contado apenas uma vez.
  - Um arquivo lógico não pode ser contado tanto como ALI e AIE para a mesma aplicação. Considere a intenção primária do grupo de dados. Se o grupo de dados satisfizer ambas as regras, conte-o apenas como um ALI.
  - Se o grupo de dados não foi contado como um ALI ou AIE por si só, conte seus atributos como DERs para o ALI ou AIE que inclui este grupo.
  - Não assuma que um arquivo físico, tabela ou classe de objeto equivale a um arquivo lógico quando observar dados lógicos na visão do usuário.
  - Apesar de algumas tecnologias de armazenamento como tabelas em um banco de dados relacional, arquivos seqüenciais ou classes de objetos estarem relacionadas a ALIs ou AIEs, não assuma que haverá sempre um relacionamento lógico-físico um-para-um.
  - Não assuma que um arquivo físico, tabela ou classe de objeto deva ser contado ou incluído como parte de um ALI ou AIE.
- Onde os dados são mantidos? Dentro ou fora da fronteira da aplicação?
  - Observe o fluxo de trabalho.
  - Na decomposição funcional do processo, identifique onde ocorrem as interfaces com o usuário e com outras aplicações.
  - Navegue através do diagrama de processos para conseguir dicas.
  - Contabilize os ALIs mantidos por mais de uma aplicação em cada aplicação no momento que a aplicação é medida.
  - Apenas os DERs utilizados por cada aplicação contada devem ser utilizados para medir o ALI/AIE.
- Os dados em um ALI são mantidos através de um processo elementar da aplicação?
  - Uma aplicação pode usar um ALI ou AIE várias vezes, mas o ALI ou AIE deve ser contado apenas uma vez.
  - Um processo elementar pode manter mais do que um ALI.
  - Navegue através do diagrama de processos para obter dicas.
