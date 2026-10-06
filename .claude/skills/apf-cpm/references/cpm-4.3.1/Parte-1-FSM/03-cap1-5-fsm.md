# Parte 1 — FSM · Escopo, Referências, Termos e Definições, Abreviaturas e Processo de Medição

> Parte 1 — FSM · CPM v4.3.1

## 1 Escopo

### 1.1 Propósito

Este Padrão Internacional especifica o conjunto de definições, regras e passos para a aplicação do método de medição de tamanho funcional (FSM) do IFPUG.

### 1.2 Conformidade

Este Padrão Internacional mantém conformidade com todos os quesitos obrigatórios da ISO/IEC 14143-1:2007.

### 1.3 Aplicabilidade

Este Padrão Internacional pode ser aplicado a todos os domínios funcionais.

**NOTA** O IFPUG continua a publicar artigos ("white papers") fornecendo orientações para a utilização do método em ambientes e domínios em evolução.

Este Padrão Internacional é totalmente conversível em relação a edições anteriores dos métodos de dimensionamento de tamanho do IFPUG.

Os analistas de pontos de função do IFPUG identificaram diferentes taxas de entrega (horas para entregar um ponto de função) relacionadas à construção de aplicações em diferentes domínios funcionais, calibradas para diversos tamanhos de projeto e complexidade do software.

### 1.4 Público

Este Padrão Internacional pode ser aplicado por qualquer pessoa que requeira uma medição de tamanho funcional. As pessoas experientes com o método encontrarão neste documento uma referência útil.

## 2 Referências normativas

Os seguintes documentos referenciados são indispensáveis para a aplicação deste documento. Nas referências datadas aplica-se somente a edição citada. Nas referências não datadas, aplica-se a última edição do documento referenciado (incluindo quaisquer alterações).

ISO/IEC 14143-1:2007, *Information technology — Software measurement — Functional size measurement — Part 1: Definition of concepts*

## 3 Termos e definições

### 3.1 Análise de Pontos de Função

**APF**

método para a medição de tamanho funcional definido neste Padrão Internacional

### 3.2 aplicação

coleção coesa de procedimentos automatizados e dados, suportando um objetivo de negócio; consiste de um ou mais componentes, módulos ou subsistemas

**EXEMPLOS** contas a pagar, contas a receber, folha de pagamento, compras, produção de loja, controle de linha de montagem, radar de busca aérea, acompanhamento de alvo, acionamento de armas, programação de aeronaves e reservas de passagens.

### 3.3 Arquivo de Interface Externa

**AIE**

grupo de dados ou informações de controle logicamente relacionados, reconhecido pelo usuário, referenciado pela aplicação medida, porém mantido dentro da fronteira de outra aplicação

**NOTA** Um Arquivo de Interface Externa é um tipo de componente funcional básico.

### 3.4 Arquivo Lógico Interno

**ALI**

grupo de dados ou informações de controle logicamente relacionados, reconhecido pelo usuário, mantido dentro da fronteira da aplicação medida

**NOTA** Um Arquivo Lógico Interno é um tipo de componente funcional básico.

### 3.5 Arquivo Lógico Referenciado (tipo de arquivo referenciado)

**ALR**

função de dados lida e/ou mantida por uma função transacional

### 3.6 arranjar

atividade correspondente ao sequenciamento de atributos em uma transação funcional

### 3.7 autocontido

nenhum passo anterior ou subsequente é necessário para iniciar ou concluir o(s) Requisito(s) Funcional(is) do Usuário

**EXEMPLO** O Requisito Funcional do Usuário estabelece que um empregado deve ser incluído e atualizado. Poderiam existir várias partes que comporiam o conjunto completo de informações do empregado. Isto pode ser representado por telas físicas, janelas ou abas distintas, tais como

- Identificação do empregado,
- Localização do empregado,
- Informações de dependentes,
- Informações de salário e
- Instrução.

Para incluir um empregado, uma ou mais abas devem ser preenchidas, dependendo das regras de negócio. O processo de inclusão não estará autocontido até que todas as informações obrigatórias tenham sido digitadas e recebidas pelo sistema.

Para atualizar um empregado, uma ou mais abas podem ser atualizadas a qualquer momento, mas todas elas constituem passos do processo que satisfaz o Requisito Funcional do Usuário, de atualização do empregado.

Incluir, alterar ou excluir informações de cada aba individual não constituem processos elementares distintos, mas sim passos de processo envolvidos na atualização de um empregado. Embora seja possível entrar com informações adicionais no registro de empregado, o conjunto total de informações é considerado parte do único processo elementar: atualizar empregado.

Incluir Empregado e Atualizar Empregado seriam, cada um, um processo autocontido.

### 3.8 classificação

atividade correspondente ao sequenciamento de linhas ou registros em uma função transacional.

### 3.9 complexidade funcional

grau de complexidade específico atribuído a uma função, utilizando as regras definidas neste padrão internacional

### 3.10 componente funcional básico

**CFB**

unidade elementar dos Requisitos Funcionais do Usuário definida por e utilizada por um método FSM para fins de medição

**EXEMPLOS** Um Requisito Funcional do Usuário poderia ser "Manter Clientes", o qual poderia consistir dos seguintes CFBs: "Incluir um novo cliente", "Reportar Compras do Cliente" e "Alterar Detalhes do Cliente". Outro exemplo poderia incluir uma coleção de dados do negócio logicamente relacionados, mantida pelo software em estudo, tal como "Detalhes do Cliente". Há muitos outros exemplos.

[ISO/IEC 14143-1:2007, definition 3.1]

### 3.11 Consulta Externa

**CE**

processo elementar que envia dados ou informações de controle para fora da fronteira

**NOTA** Uma consulta Externa é um tipo de componente funcional básico.

### 3.12 contagem de pontos de função

atividade constituída pela aplicação das regras constantes deste Padrão Internacional à medição do tamanho funcional de uma aplicação ou projeto

**NOTA** Há três tipos de contagens de pontos de função: aplicação, projeto de desenvolvimento e projeto de melhoria.

### 3.13 contagem de pontos de função da aplicação

atividade correspondente à aplicação deste Padrão Internacional à medição do tamanho funcional de uma aplicação

### 3.14 contagem de pontos de função do projeto de melhoria

a atividade de aplicar este Padrão Internacional à medição do tamanho funcional de um projeto de melhoria

### 3.15 contagem de pontos de função do projeto de desenvolvimento

a atividade de aplicar este Padrão Internacional à medição do tamanho funcional de um projeto de desenvolvimento

### 3.16 Dado Elementar Referenciado (tipo de dado elementar)

**DER**

atributo único, reconhecido pelo usuário e não repetido

### 3.17 dados derivados

dados criados como resultado de processamento que envolva passos que não sejam a recuperação direta e validação de informações de funções de dados, ou que envolva passos adicionais em relação essas atividades

### 3.18 entidade dependente

entidade por si só não significativa ou importante para o negócio sem a presença de outras entidades, de modo que

- uma ocorrência da entidade X deve estar ligada a uma ocorrência da entidade Y, e
- a exclusão de uma ocorrência da entidade Y resulta na exclusão de todas as ocorrências relacionadas da entidade X.

### 3.19 entidade independente

entidade por si só significativa ou importante para o negócio sem a presença de outras entidades

### 3.20 Entrada Externa

**EE**

processo elementar que processa dados ou informações de controle enviados de fora da fronteira

**NOTA** Uma Entrada Externa é um tipo de componente funcional básico.

### 3.21 escopo da contagem

conjunto de Requisitos Funcionais do Usuário a serem incluídos na contagem de pontos de função

### 3.22 estado consistente

ponto no qual o processamento foi totalmente executado; o Requisito Funcional do Usuário foi satisfeito e nada mais há a fazer

**EXEMPLO 1** O Requisito Funcional do Usuário é imprimir um cheque e marcar como paga a conta correspondente. Se somente parte do Requisito Funcional do Usuário for satisfeita (por exemplo, apenas imprimir o cheque, ou apenas marcar a conta como paga) a aplicação não estará em um estado consistente. A impressão de um cheque sem marcar a conta como paga causa uma inconsistência na aplicação, assim como marcar a conta como paga sem imprimir o cheque.

**EXEMPLO 2** O Requisito Funcional do Usuário é ter um processo *batch* que recebe um arquivo de entrada para atualizar um depósito de dados, produz um relatório de controle de produção e retorna um relatório de erros para a aplicação chamadora. O processo não ficará em um estado consistente a não ser que todas essas partes sejam concluídas.

**EXEMPLO 3** O Requisito Funcional do Usuário é transferir um empregado para uma nova tarefa e validar o seu nível de autorização de segurança. Para executar isto, uma solicitação em tempo real é enviada à aplicação de segurança (a qual mantém as autorizações de segurança governamentais e não a segurança da aplicação) e uma resposta deve ser recebida antes que a transferência possa ser concluída. Todos os passos são necessários para criar um estado consistente. A interação com a aplicação de segurança não é uma ação ou passo independente. Não acontece por si só e, por outro lado, a transação para transferir um empregado não fica em um estado consistente sem ela.

### 3.23 fronteira

interface conceitual entre o software em estudo e seus usuários

[ISO/IEC 14143-1:2007, definition 3.3]

**NOTA** As versões anteriores deste Padrão Internacional utilizaram o termo fronteira da aplicação.

### 3.24 função de dados

funcionalidade fornecida ao usuário para atender requisitos internos ou externos de armazenamento de dados

**NOTA** Uma função de dados é um Arquivo Lógico Interno ou um Arquivo de Interface Externa.

### 3.25 função transacional (ou função de transação)

processo elementar que fornece funcionalidade ao usuário para processar dados

**NOTA** Uma função transacional é uma Entrada Externa, Saída Externa ou Consulta Externa.

### 3.26 funcionalidade de conversão

funções transacionais ou de dados, fornecidas para converter dados e/ou prover outros requisitos de conversão especificados pelo usuário

**NOTA** As funcionalidades de conversão existem somente durante o desenvolvimento ou melhoria de uma aplicação.

### 3.27 informações de controle

dados que influenciam um processo elementar especificando o quê, quando ou como os dados devem ser processados

### 3.28 intenção primária

intenção que é a primeira em importância

### 3.29 lógica de processamento

quaisquer requisitos especificamente solicitados pelo usuário para executar um processo elementar, tais como: validações, algoritmos ou cálculos, bem como a leitura ou manutenção de uma função de dados

### 3.30 manter

habilidade de incluir, alterar ou excluir dados por meio de um processo elementar

### 3.31 manutenção adaptativa

modificação de um produto de software, executada após a entrega, a fim de manter o mesmo utilizável em um ambiente alterado ou em alteração

**NOTA** A manutenção adaptativa provê as melhorias necessárias para acomodar mudanças no ambiente no qual um produto de software tem que operar. Tais mudanças são aquelas que precisam ser realizadas para manter o produto atualizado em relação ao ambiente em alteração. Por exemplo, o sistema operacional precisa sofrer um "upgrade" e algumas mudanças precisam ser efetuadas para acomodar o novo sistema operacional.

[ISO/IEC 14764:2006 Software engineering – Software life cycle processes – Maintenance, definition 3.1]

### 3.32 manutenção corretiva

modificação reativa de um produto de software, executada após a entrega para corrigir problemas descobertos

**NOTA** A modificação repara o produto de software para satisfazer requisitos.

[ISO/IEC 14764:2006 Software engineering – Software life cycle processes – Maintenance, definition 3.2]

### 3.33 manutenção perfectiva

modificação de um produto de software após a entrega, a fim de detetar e corrigir defeitos latentes no mesmo antes que se manifestem como falhas

**NOTA 1** A manutenção perfectiva fornece melhorias para os usuários, aprimoramento da documentação dos programas e recodificação dos mesmos para melhorar a performance, manutenibilidade e outros atributos do software.

**NOTA 2** Contrastar com: manutenção adaptativa; manutenção corretiva.

[ISO/IEC 14764:2006 Software engineering – Software life cycle processes – Maintenance, definition 3.7]

### 3.34 Ponto de Função

**PF**

unidade de medida de tamanho funcional conforme definida neste Padrão Internacional

### 3.35 processo elementar

menor unidade de atividade significativa para o usuário

### 3.36 projeto de desenvolvimento

projeto para desenvolver e derivar a primeira *release* de uma aplicação de software

### 3.37 projeto de melhoria

projeto para desenvolver e entregar manutenção adaptativa

**NOTA** Um projeto de melhoria também pode desenvolver e entregar manutenção corretiva e perfectiva, porém estes não contribuem para o tamanho funcional do projeto de melhoria.

### 3.38 propósito da contagem

razão para execução da contagem de pontos de função

**NOTA** Ver 5.3 a).

### 3.39 reconhecido pelo usuário

requisitos para processos e/ou dados que são acordados com, assim como entendidos pelo(s) usuário(s) e desenvolvedor(es) de software

### 3.40 Registro Lógico Referenciado (tipo de registro elementar)

**RLR**

subgrupo de dados elementares referenciados (tipos de dado elementares), reconhecido pelo usuário, contido em uma função de dados

### 3.41 Requisitos Funcionais do Usuário

subconjunto dos requisitos do usuário especificando o que o software deverá fazer em termos de tarefas e serviços

**NOTA** Os Requisitos Funcionais do Usuário incluem, mas não estão limitados a:

- transferência de dados (por exemplo: Receber dados de entrada de cliente, Enviar sinal de controle);
- transformação de dados (por exemplo: Calcular juros bancários, Derivar temperatura média);
- armazenamento de dados (por exemplo: Armazenar pedido de cliente, Registrar temperatura ambiente ao longo do tempo);
- recuperação de dados (por exemplo: Listar empregados atuais, Recuperar posição de aeronave).

Requisitos do usuário que não constituem Requisitos Funcionais do Usuário incluem, mas não estão limitados aos seguintes:

- restrições de qualidade (por exemplo: usabilidade, confiabilidade, eficiência e portabilidade);
- restrições organizacionais (por exemplo: locais para operação, hardware-alvo e conformidade com os padrões);
- restrições ambientais (por exemplo: interoperabilidade, segurança e privacidade);
- restrições de implementação (por exemplo: linguagem de desenvolvimento, prazo para entrega).

[ISO/IEC 14143-1:2007, definition 3.8]

### 3.42 Saída Externa

**SE**

processo elementar que envia dados ou informações de controle para fora da fronteira e inclui lógica de processamento adicional além daquela de uma Consulta Externa

**NOTA** Uma Saída Externa é um tipo de componente funcional básico.

### 3.43 significativo

reconhecido pelo usuário e satisfazendo um Requisito Funcional do Usuário

### 3.44 tamanho funcional

tamanho do software derivado por meio da quantificação dos Requisitos Funcionais do Usuário

[ISO/IEC 14143-1:2007, definition 3.6]

### 3.45 tamanho funcional da aplicação

medida da funcionalidade que uma aplicação fornece ao usuário, determinada pela contagem de pontos de função da aplicação

### 3.46 tamanho funcional do projeto de melhoria

medida da funcionalidade incluída, alterada ou excluída por ocasião da conclusão de um projeto de melhoria, conforme medida pela contagem de pontos de função do projeto de melhoria

**NOTA** O tamanho funcional de um projeto de melhoria pode incluir o tamanho da funcionalidade de conversão

### 3.47 tamanho funcional do projeto de desenvolvimento

medida da funcionalidade oferecida aos usuários pela primeira *release* do software, conforme medida pela contagem de pontos de função do projeto de desenvolvimento

**NOTA** O tamanho funcional de um projeto de desenvolvimento inclui o tamanho da funcionalidade de conversão.

### 3.48 tipo de entidade associativo

tipo de entidade contendo atributos que descrevem um relacionamento muitos-para-muitos entre dois outros tipos de entidade

### 3.49 tipo de entidade atributivo

tipo de entidade que descreve um ou mais atributos de outro tipo de entidade

### 3.50 tipo de função

cinco tipos de componentes funcionais básicos identificados neste Padrão Internacional

**NOTA** Os cinco tipos de função são: Entrada Externa, Saída Externa, Consulta Externa, Arquivo Lógico Interno e Arquivo de Interface Externa.

### 3.51 usuário

qualquer pessoa ou coisa que se comunique ou interaja com o software a qualquer tempo

**EXEMPLOS** Exemplos de coisas incluem, mas não estão limitados a: aplicações de software, animais, sensores ou outros hardwares.

[ISO/IEC 14143-1:2007, definition 3.11]

### 3.52 visão do usuário

Requisitos Funcionais do Usuário, conforme percebidos pelo usuário

**NOTA** Os desenvolvedores traduzem a visão do usuário para software, a fim de fornecer uma solução.

## 4 Abreviaturas

| Sigla | Significado |
|---|---|
| AIE | Arquivo de Interface Externa |
| ALI | Arquivo Lógico Interno |
| ALR | Arquivo Lógico Referenciado (tipo de arquivo referenciado) |
| APF | Análise de Ponto de Função |
| CE | Consulta Externa |
| CFB | Componente Funcional Básico |
| DER | Dado Elementar Referenciado (tipo de dado elementar) |
| EE | Entrada Externa |
| PF | Ponto de Função |
| RLR | Registro Lógico Referenciado (tipo de registro elementar) |
| SE | Saída Externa |

## 5 Processo de Medição

### 5.1 Visão Geral

Para conduzir uma contagem de pontos de função devem ser executadas as seguintes atividades, a fim de identificar e classificar os componentes funcionais básicos (ALI, AIE, EE, SE, CE):

- a) reunir a documentação disponível em conformidade com 5.2,
- b) determinar o escopo e a fronteira da contagem, identificando os Requisitos Funcionais do Usuário em conformidade com 5.3,
- c) medir as funções de dados de acordo com 5.4, 5.6 e 5.7,

**NOTA** A funcionalidade de conversão (se aplicável) é medida conforme 5.6; a funcionalidade de melhoria (se aplicável) é medida conforme 5.7.

- d) medir as funções de transação conforme 5.5, 5.6 e 5.7,

**NOTA** A funcionalidade de conversão (se aplicável) é medida conforme 5.6; a funcionalidade de melhoria (se aplicável) é medida conforme 5.7.

- e) calcular o tamanho funcional de acordo com 5.8,
- f) documentar a contagem de pontos de função conforme 5.9, e
- g) reportar o resultado da contagem de pontos de função conforme 5.10.

**NOTA** A Figura 1 fornece uma visão geral, gráfica, do processo de contagem de pontos de função.

![Figura 1 — Visão geral, gráfica, do processo de contagem de pontos de função](images/p041-figura1-processo-contagem.png)

**Figura 1 — Visão geral, gráfica, do processo de contagem de pontos de função**

### 5.2 Reunir a documentação disponível

A documentação de suporte a uma contagem de pontos de função deve descrever a funcionalidade entregue pelo software ou a funcionalidade impactada pelo projeto de software medido.

Deve ser obtida documentação suficiente para conduzir a contagem de pontos de função, ou acesso a especialistas no assunto capazes de fornecer informações adicionais para suprir quaisquer falhas na documentação.

**NOTA** A documentação adequada pode incluir requisitos, modelos de dados/objetos, diagramas de classes, diagramas de fluxos de dados, casos de uso, descrições de procedimentos, formatos de relatórios, manuais de usuário e outros artefatos do desenvolvimento de software.

### 5.3 Determinar o escopo e fronteira da contagem, identificando os Requisitos Funcionais do Usuário

Para determinar o escopo e fronteira da contagem e identificar os Requisitos Funcionais do Usuário, devem ser executadas as seguintes atividades:

- a) identificar o propósito da contagem,

  **NOTA 1** Uma contagem de pontos de função é conduzida a fim de fornecer uma resposta para uma questão de negócio, sendo a questão de negócio que determina o propósito.

  **NOTA 2** O propósito da contagem determina o escopo da contagem.

  **EXEMPLO 1** O propósito da contagem poderia ser a determinação do tamanho de uma *release* de software específica.

  **EXEMPLO 2** O propósito da contagem poderia ser a determinação do tamanho de uma aplicação, como parte do esforço da organização para determinar o tamanho de seu *portfolio* de software.

- b) identificar o tipo de contagem, com base no propósito, como um dos seguintes:
  - 1) uma contagem de pontos de função de projeto de desenvolvimento;
  - 2) uma contagem de pontos de função de aplicação;
  - 3) uma contagem de pontos de função de um projeto de melhoria,
- c) determinar o escopo da contagem, com base no propósito e tipo de contagem,
- d) determinar a fronteira de cada aplicação contida no escopo da contagem com base na visão do usuário e não em considerações técnicas

  **EXEMPLO 3** Se o propósito for estimar o custo de uma melhoria nas aplicações de Recursos Humanos (RH) e Benefícios, então:

  - o tipo de contagem é uma contagem de projeto de melhoria;
  - o escopo deverá incluir as funções transacionais e de dados incluídas, alteradas ou excluídas referentes tanto à aplicação de RH quanto à de Benefícios, assim como quaisquer requisitos de conversão referentes a cada aplicação;
  - a visão do usuário é que RH e Benefícios são áreas funcionais diferentes, por esse motivo são aplicações separadas;
  - existe uma fronteira entre as aplicações de RH e de Benefícios, assim como entre cada aplicação e o usuário.

- e) os requisitos do usuário podem incluir uma mistura de requisitos funcionais e não-funcionais; identificar quais requisitos são funcionais e excluir os não-funcionais.

### 5.4 Medir funções de dados

#### 5.4.1 Visão Geral

A funcionalidade de dados satisfaz os Requisitos Funcionais do Usuário referentes a armazenar e/ou referenciar dados. Toda a funcionalidade de dados dentro do escopo da contagem deve ser avaliada para identificar cada grupo lógico de dados.

Devem ser executadas as seguintes atividade para medir as funções de dados

- a) identificar e agrupar todos os dados lógicos em funções de dados conforme 5.4.2,
- b) classificar cada função de dados como um ALI ou AIE, de acordo com 5.4.3,
- c) contar os DERs para cada função de dados conforme 5.4.4,
- d) contar os RLRs para cada função de dados de acordo com 5.4.5,
- e) determinar a complexidade funcional de cada função de dados em conformidade com 5.4.6, e
- f) determinar o tamanho funcional de cada função de dados conforme 5.4.7.

#### 5.4.2 Identificar e agrupar todos os dados lógicos em funções de dados

**NOTA 1** As funções de dados são mais facilmente identificáveis utilizando-se um modelo lógico de dados; no entanto, isto não impede a utilização do processo de medição em ambientes onde forem utilizadas técnicas alternativas para a modelagem de dados ou objetos. A terminologia da modelagem de dados é utilizada para documentar as regras referentes às funções de dados, mas a mesma abordagem pode ser aplicada a outras técnicas.

Para identificar as funções de dados, devem ser executadas as seguintes atividades

- a) identificar todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário, dentro do escopo da contagem,
- b) excluir entidades que não sejam mantidas por nenhuma aplicação,
- c) agrupar entidades que sejam entidades dependentes,

  **NOTA 2** Entidades independentes são consideradas como grupos lógicos de dados distintos.

- d) excluir as entidades abaixo, denominadas dados de código:
  - 1) entidade de dados de substituição, que contém um código e um nome ou descrição explicativos;
  - 2) entidade de ocorrência única, que contém um ou mais atributos que raramente ou nunca mudam;
  - 3) entidade que contém dados basicamente estáticos, ou que muito raramente mudam;
  - 4) entidade de valores default, que contém valores para popular atributos;
  - 5) entidade de valores válidos, que contém valores disponíveis para seleção ou validação;
  - 6) entidade que contém uma faixa de dados para validação,

  **NOTA 3** As entidades acima referidas como dados de código podem conter outros atributos para fins de auditoria e para definir datas efetivas. A presença desses atributos não altera a natureza dessas entidades.

- e) excluir entidades que não contenham atributos requeridos pelo usuário, e
- f) remover entidades associativas que contenham atributos adicionais não requeridos pelo usuário e entidades associativas que contenham apenas chaves estrangeiras; agrupar os atributos referentes a chaves estrangeiras com as entidades primárias.

  **NOTA 4** Atributos referentes a chaves estrangeiras são dados requeridos pelo usuário para estabelecer um relacionamento com outra função de dados.

#### 5.4.3 Classificar cada função de dados como um ALI ou AIE

Uma função de dados deve ser classificada como

- a) Arquivo Lógico Interno (ALI), se for mantida pela aplicação medida, ou
- b) Arquivo de Interface Externa (AIE) se for
  - referenciada, mas não mantida, pela aplicação medida, e
  - identificada como um ALI em uma ou mais outras aplicações.

#### 5.4.4 Contar os DERs para cada função de dados

A fim de contar os DERs - Dados Elementares Referenciados (tipos de dado elementares) correspondentes a uma função de dados, devem ser executadas as seguintes atividades

- a) contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, mantido na função de dados ou recuperado da mesma por meio da execução de todos os processos elementares pertinentes ao escopo da contagem,

  **NOTA 1** Por exemplo, dentro de um ALI ou AIE, contar um único DER para os 12 campos repetidos referentes aos valores do Orçamento Mensal. Contar um DER adicional para identificar o mês aplicável.

- b) quando duas ou mais aplicações mantiverem e/ou referenciarem a mesma função de dados, contar apenas os DERs utilizados pela aplicação medida,

  **NOTA 2** Os atributos não referenciados pela aplicação medida não são contados.

- c) contar um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados, e
- d) revisar os atributos relacionados a fim de determinar se os mesmos devem ser agrupados e contados como um único DER, ou como vários DERs. O agrupamento irá depender de como os processos elementares utilizam os atributos dentro da aplicação

  **EXEMPLO** Os atributos (primeiro nome, nome do meio, sobrenome) são agrupados e contados como

  - nome (primeiro nome, nome do meio, sobrenome) se esses atributos sempre forem utilizados juntos,
  - primeiros nomes (primeiro nome e inicial do meio) e sobrenome se, além do que está acima, o sobrenome for utilizado independentemente, ou
  - primeiro nome, inicial do meio e sobrenome, se os três puderem ser utilizados independentemente.

#### 5.4.5 Contar os RLRs para cada função de dados

A fim de contar RLRs - Registros Lógicos Referenciados (tipos de arquivo referenciados) para uma função de dados, devem ser executadas as seguintes atividades

- a) contar um RLR para cada função de dados (i.e., por default, cada função de dados possui um subgrupo de DERs que é contado como um RLR),
- b) contar um RLR adicional para cada um dos seguintes subgrupos lógicos de DERs (dentro da função de dados) que contenham mais de um DER:
  - 1) entidade associativa com atributos não-chave;
  - 2) subtipo (sem ser o primeiro subtipo);
  - 3) entidade atributiva, em um relacionamento que não seja 1-1obrigatório

**NOTA 1** Um relacionamento 1-1 obrigatório é um relacionamento entre duas entidades onde cada uma se relaciona com uma e somente uma instância da entidade relacionada.

**NOTA 2** Se um modelo de dados não estiver disponível, procurar grupos de dados repetidos para identificar RLRs.

**EXEMPLO 1** Uma fatura possui um cabeçalho com informações do cliente e vários itens referentes às compras (por exemplo, número do item, descrição, preço, peso). O cabeçalho é contado como um RLR. Os itens constituem um grupo repetido e são contados como um RLR adicional.

**EXEMPLO 2** Um único atributo repetido tal como vários números de conta para o mesmo cliente não constitui um grupo repetido, sendo contado como um único DER e não como um RLR.

**EXEMPLO 3** Um grupo de DERs ocorrendo várias vezes, tal como ano, mês e valor orçado é um grupo repetido, mas é contado como três DERs e não como um RLR.

#### 5.4.6 Determinar a complexidade funcional de cada função de dados

A complexidade funcional de cada função de dados deve ser determinada utilizando-se o número de DERs e RLRs, em conformidade com a Tabela 1.

**Tabela 1 — Complexidade das funções de dados**

| RLRs \ DERs | 1 – 19 | 20 – 50 | > 50 |
|---|---|---|---|
| 1 | Baixa | Baixa | Média |
| 2 – 5 | Baixa | Média | Alta |
| > 5 | Média | Alta | Alta |

#### 5.4.7 Determinar o tamanho funcional de cada função de dados

O tamanho funcional de cada função de dados deve ser determinado utilizando-se o tipo e a complexidade funcional, de acordo com a Tabela 2.

**Tabela 2 — Tamanho das funções de dados**

| Complexidade funcional \ Tipo | ALI | AIE |
|---|---|---|
| Baixa | 7 | 5 |
| Média | 10 | 7 |
| Alta | 15 | 10 |

### 5.5 Medir funções de transação

#### 5.5.1 Visão geral

A funcionalidade de transação satisfaz os Requisitos Funcionais do Usuário que processam dados. Toda a funcionalidade de transação dentro do escopo da contagem deve ser avaliada, a fim de identificar cada processo elementar único.

Para medir funções de transação, as seguintes atividades devem ser executadas

- a) identificar cada processo elementar requerido pelo usuário, em conformidade com 5.5.2,
- b) classificar cada função de transação como uma Entrada Externa (EE), Saída Externa (SE) ou Consulta Externa (CE), conforme 5.5.3,
- c) contar os ALRs - Arquivos Lógicos Referenciados (tipos de arquivo referenciados) para cada função de transação, de acordo com 5.5.4,
- d) contar os DERs - Dados Elementares Referenciados (tipos de dado elementares) para cada função de transação, conforme 5.5.5,
- e) determinar a complexidade funcional de cada função de transação de acordo com 5.5.6, e
- f) determinar o tamanho funcional de cada função de transação conforme 5.5.7.

#### 5.5.2 Identificar processos elementares

##### 5.5.2.1

Para identificar cada processo elementar devem ser executadas as seguintes atividades

- a) Compor e/ou decompor os Requisitos Funcionais do Usuário nas menores unidades de atividade que satisfaçam todos os itens abaixo:
  - 1) é significativa para o usuário;
  - 2) constitui uma transação completa;

    **NOTA** Aos usuários de versões anteriores deste Padrão Internacional: o item 2 não é uma mudança, mas sim um refinamento para aumentar a especificidade a fim de promover interpretação consistente.

  - 3) é autocontida;
  - 4) deixa o negócio da aplicação contada em um estado consistente.

  **EXEMPLO 1** Um Requisito Funcional do Usuário pode estabelecer que deve ser fornecida uma função para Manter Informações de Empregado. Esse requisito é decomposto em unidades de trabalho menores tais como Incluir Empregado, Alterar Empregado e Consultar Empregado.

  **EXEMPLO 2** Os requisitos individuais podem estabelecer a necessidade de incluir diversos tipos de informações de empregado (por exemplo, endereço, salário e informações de dependentes), mas a menor unidade de atividade significativa para o usuário é Incluir Empregado.

- b) Identificar um processo elementar para cada unidade de atividade identificada, de modo a satisfazer todos os critérios em 5.5.2.1 a).

##### 5.5.2.2

Para determinar processos elementares únicos devem ser executadas as seguintes atividades

- a) Ao comparar um possível processo elementar com um processo elementar já identificado, contar os dois processos elementares referidos como um único processo elementar se eles:
  - 1) demandarem o mesmo conjunto de DERs;
  - 2) demandarem o mesmo conjunto de ALRs;
  - 3) demandarem o mesmo conjunto de lógicas de processamento para executar o processo elementar (consultar a lista abaixo em 5.5.2.2 b),

  **NOTA 1** As atividades referentes à medição das funções de transação são mostradas sequencialmente; no entanto, as mesmas são de fato iterativas. ALRs e DERs são identificados de acordo com 5.5.4 e 5.5.5, mas são necessários para comparar dois processos elementares semelhantes.

  **NOTA 2** Um processo elementar pode incluir variações pequenas em DERs ou ALRs, assim como múltiplas alternativas, variações ou ocorrências das lógicas de processamento abaixo.

  **EXEMPLO** Quando é identificado um processo elementar para Incluir Empregado, o fato de um empregado poder ou não ter dependentes não faz com o que o processo elementar seja dividido em dois. O processo elementar ainda é Incluir Empregado, havendo variação na lógica de processamento e nos DERs para dar conta dos dependentes.

- b) Não dividir um processo elementar com várias formas de lógica de processamento em vários processos elementares.

**NOTA 4** Um processo elementar que recebe e valida dados do usuário, lê e filtra dados de um ALI, classifica e apresenta os resultados ao usuário não pode ser dividido em vários processos elementares.

##### 5.5.2.3

Várias formas de lógica de processamento para a execução de um processo elementar estão identificadas na Tabela 3:

**Tabela 3 — Formas de lógica de processamento**

| Formas de lógica de processamento |
|---|
| 1. Validações são executadas<br>**EXEMPLO 1** Ao acrescentar um novo empregado a uma organização, o respectivo processo valida o DER referente ao tipo de empregado. |
| 2. Fórmulas e cálculos matemáticos são executados<br>**EXEMPLO 2** Ao emitir relatório com todos os empregados de uma organização, o processo calcula o número total de empregados mensalistas, empregados horistas e o total geral. |
| 3. Valores equivalentes são convertidos<br>**EXEMPLO 3** Com base em uma tabela, a idade do empregado é convertida para um grupo de faixas de idade. |
| 4. Dados são filtrados e selecionados segundo critérios especificados para comparar vários conjuntos de dados<br>**EXEMPLO 4** A fim de gerar uma lista de empregados segundo as tarefas alocadas aos mesmos, um processo elementar utiliza o número da tarefa presente nas alocações para selecionar e listar os empregados alocados a cada tarefa. |
| 5. Condições são analisadas para determinar as aplicáveis<br>**EXEMPLO 5** A lógica de processamento utilizada pelo processo elementar na inclusão de um empregado depende do mesmo ser mensalista ou horista. A entrada dos DERs (e a lógica de processamento resultante) com base em uma escolha distinta (mensalista ou horista) é parte de um processo elementar neste exemplo. |
| 6. Um ou mais ALIs são atualizados<br>**EXEMPLO 6** Ao incluir um empregado, o processo elementar atualiza o ALI de empregado para manter os dados referentes a empregado. |
| 7. Um ou mais ALIs ou AIEs são referenciados<br>**EXEMPLO 7** Ao incluir um empregado, o AIE de moeda é referenciado para obter a taxa de conversão para o dólar norte-americano, a fim de determinar o salário-hora dos empregados. |
| 8. Dados ou informações de controle são recuperados<br>**EXEMPLO 8** Para permitir a visualização de uma lista de empregados, informações dos empregados são recuperadas de uma função de dados. |
| 9. Dados derivados são criados a partir de transformação dos dados existentes, com o objetivo de criar dados adicionais<br>**EXEMPLO 9** A fim de determinar (derivar) o número de matrícula de um paciente (por exemplo, SMIJO01), os seguintes dados são concatenados:<br>— as primeiras três letras do sobrenome do paciente (por exemplo, SMI para Smith);<br>— as duas primeiras letras do primeiro nome do paciente (por exemplo, JO para John);<br>— um número de sequência de dois dígitos (começando com 01). |
| 10. É alterado o comportamento da aplicação<br>**EXEMPLO 10** O comportamento do processo elementar de pagamento dos empregados é alterado quando uma mudança é feita para efetuar o pagamento sexta-feira sim, sexta-feira não, ao invés de fazê-lo no dia 15 e no último dia do mês, resultando em 26 períodos de pagamento ao invés de 24. |
| 11. Preparar e apresentar informações fora da fronteira<br>**EXEMPLO 11** Uma lista de empregados é formatada e apresentada ao usuário. |
| 12. Existe a capacidade de receber dados e informações de controle que entram pela fronteira da aplicação<br>**EXEMPLO 12** Um usuário entra com informações para incluir um pedido de cliente na aplicação. |
| 13. Classificar ou arrumar um conjunto de dados. Esta forma de lógica de processamento não impacta a identificação do tipo ou contribui para a unicidade de um processo elementar; isto é, a orientação dos dados não constitui unicidade<br>**EXEMPLO 13** A lista de empregados é classificada em ordem alfabética ou de localização.<br>**EXEMPLO 14** Em uma tela de entrada de pedidos, as informações do cabeçalho do pedido são colocadas na parte superior da tela, enquanto os detalhes do pedido são colocados abaixo.<br>**NOTA 1** Versões anteriores deste Padrão Internacional (ISO/IEC 20926:2003) utilizaram erradamente os termos "reclassificar" e "rearrumar"; a utilização dos termos "classificar" e "arrumar" é uma correção e não uma alteração. |

#### 5.5.3 Classificar cada processo elementar como uma função de transação

##### 5.5.3.1

Para cada processo elementar

- a) a intenção primária deve ser classificada como uma das seguintes:
  - 1) alterar o comportamento da aplicação;
  - 2) manter um ou mais ALIs;
  - 3) apresentar informações ao usuário,
- b) as formas de lógica de processamento requeridas para executar o processo elementar devem ser identificadas na lista apresentada em 5.5.2.3.

##### 5.5.3.2

Cada processo elementar deve ser classificado como

- a) uma EE, se o mesmo:
  - 1) incluir lógica de processamento para receber dados ou informações de controle que entrem pela fronteira da aplicação;
  - 2) tiver um das seguintes intenções primárias
    - i) manter um ou mais ALIs, ou
    - ii) alterar o comportamento da aplicação,
- b) uma SE, se o mesmo tiver a intenção primária de apresentar informações ao usuário e incluir pelo menos uma das seguintes formas de lógica de processamento:
  - 1) cálculos matemáticos são executados;
  - 2) um ou mais ALIs são atualizados;
  - 3) dados derivados são criados;
  - 4) o comportamento da aplicação é alterado,
- c) uma CE, se o mesmo tiver a intenção primária de apresentar informações ao usuário e:
  - 1) referenciar uma função de dados para recuperar dados ou informações de controle;
  - 2) não satisfizer os critérios para ser classificado como uma SE.

**NOTA 1** A Tabela 4 apresenta um resumo do relacionamento entre a intenção primária e o tipo de função de transação.

**Tabela 4 — Relacionamento entre a intenção primária e o tipo de função de transação**

| Função | EE | SE | CE |
|---|---|---|---|
| Alterar o comportamento da aplicação | IP | F | N/A |
| Manter um ou mais ALIs | IP | F | N/A |
| Apresentar informações ao usuário | F | IP | IP |

legenda

- IP: a intenção primária do tipo de função de transação
- F: uma função do tipo de função de transação que às vezes está presente, mas que não é a intenção primária
- N/A: o tipo de função de transação não pode executar este tipo de função

**NOTA 2** A Tabela 5 apresenta um resumo do relacionamento entre as formas de processamento lógico e o tipo de função de transação.

**Tabela 5 — Relacionamento entre a lógica de processamento e o tipo de função de transação**

| Forma de lógica de processamento | EE | SE | CE |
|---|---|---|---|
| 1. Validações são executadas | p | p | p |
| 2. Cálculos matemáticos são executados | p | o* | n |
| 3. Valores equivalentes são convertidos | p | p | p |
| 4. Dados são filtrados e selecionados utilizando-se critérios especificados para comparar vários conjuntos de dados | p | p | p |
| 5. Condições são analisadas para determinar quais são aplicáveis | p | p | p |
| 6. Pelo menos um ALI é atualizado | o* | o* | n |
| 7. Pelo menos um ALI ou AIE é referenciado | p | p | o |
| 8. Dados ou informações de controle são recuperados | p | p | o |
| 9. Dados derivados são criados | p | o* | n |
| 10. O comportamento da aplicação é alterado | o* | o* | n |
| 11. Informações são preparadas e então apresentadas fora da fronteira | p | o | o |
| 12. Dados ou informações de controle entrando pela fronteira da aplicação são recebidos | o | p | p |
| 13. Um conjunto de dados é classificado ou arrumado | p | p | p |

legenda

- o: é obrigatório que o tipo de função de transação execute a forma de lógica de processamento
- o*: é obrigatório que o tipo de função de transação execute pelo menos uma destas (o*) formas de lógica de processamento
- p: o tipo de função de transação <u>pode</u> executar a forma de lógica de processamento, mas a mesma não é obrigatória
- n: o tipo de função de transação <u>não pode</u> executar a forma de lógica de processamento

#### 5.5.4 Contar ALRs para cada função de transação

Para cada função de transação, um ALR deve ser contado para cada função de dados única que for acessada (lida e/ou gravada) pela função de transação.

**NOTA** As atividades referentes à medição de funções de transação são apresentadas sequencialmente; contudo, na verdade as mesmas são iterativas. Para comparar dois processos elementares similares é necessária a identificação de ALRs, conforme dito em 5.5.2.2.

#### 5.5.5 Contar DERs para cada função de transação

A fim de contar DERs para uma função de transação, as seguintes atividades devem ser executadas

- a) Revisar tudo o que atravesse (entre e/ou saia) a fronteira,
- b) Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido que atravesse (entre e/ou saia) a fronteira durante o processamento da função de transação,

  **EXEMPLO 1** DERs que atravessam a fronteira incluem

  - atributos que o usuário introduz por meio de uma tela, bem como aqueles apresentados em um relatório ou tela,
  - atributos que entram pela fronteira da aplicação e que são necessários para especificar quando, o quê e/ou como os dados devem ser recuperados ou gerados pelo processo elementar,
  - atributos fornecidos pelo usuário da função de transação, ou apresentados a ele, e
  - atributos em um arquivo eletrônico que entrem ou saiam pela fronteira.

- c) Contar apenas um DER por função de transação para a habilidade de enviar uma mensagem de resposta da aplicação, mesmo que existam várias mensagens,

  **EXEMPLO 2** Se forem apresentadas diversas mensagens de erro/confirmação ao usuário, somente um DER será contado.

- d) Contar apenas um DER por função de transação para a habilidade de iniciar ações, mesmo que existam diversas maneiras de fazer isso, e

  **EXEMPLO 3** Se o usuário puder iniciar a geração de um relatório clicando no botão OK ou pressionando uma tecla de função, apenas um DER será contado.

- e) Não contar os seguintes itens como DERs:
  - constantes literais tais como títulos de relatórios, identificadores de telas ou painéis, cabeçalhos de colunas ou títulos de atributos;
  - rótulos gerados pela aplicação tais como atributos referentes a data e hora;
  - variáveis de paginação, números de página e informações de posicionamento, por exemplo, 'Linhas 37 a 54 de 211';
  - auxílios à navegação tais como a habilidade de navegar em uma lista utilizando "anterior", "próximo", "primeiro", "último" e seus equivalentes gráficos;
  - atributos gerados dentro da fronteira por uma função de transação e salvos em um ALI sem sair pela fronteira;
  - atributos recuperados ou referenciados de um ALI ou AIE para participarem do processamento sem que saiam pela fronteira.

**NOTA** As atividades referentes à medição de funções de transação são apresentadas sequencialmente; contudo, na verdade as mesmas são iterativas. Para comparar dois processos elementares similares é necessária a identificação dos DERs, conforme dito em 5.5.2.2.

#### 5.5.6 Determinar a complexidade funcional para cada função de transação

A complexidade funcional de cada função de transação será determinada utilizando-se o número de ALRs e DERs, em conformidade com a Tabela 6 ou 7.

**Tabela 6 — Complexidade funcional das EE**

| ALRs \ DERs | 1 – 4 | 5 – 15 | > 15 |
|---|---|---|---|
| 0 – 1 | Baixa | Baixa | Média |
| 2 | Baixa | Média | Alta |
| > 2 | Média | Alta | Alta |

**Tabela 7 — Complexidade funcional das SE e CE**

| ALRs \ DERs | 1 – 5 | 6 – 19 | > 19 |
|---|---|---|---|
| 0 – 1 | Baixa | Baixa | Média |
| 2 – 3 | Baixa | Média | Alta |
| > 3 | Média | Alta | Alta |

**NOTA** Uma CE tem no mínimo 1 ALR.

#### 5.5.7 Determinar o tamanho funcional de cada função de transação

O tamanho funcional de cada função de transação será determinado utilizando-se o tipo e a complexidade funcional, de acordo com a Tabela 8.

**Tabela 8 — Tamanho das funções de transação**

| Complexidade Funcional \ Tipo | EE | SE | CE |
|---|---|---|---|
| Baixa | 3 | 4 | 3 |
| Média | 4 | 5 | 4 |
| Alta | 6 | 7 | 6 |

### 5.6 Medir a funcionalidade de conversão

O escopo da contagem de um projeto de desenvolvimento ou melhoria também pode incluir o tamanho funcional da funcionalidade de conversão requerida para o mesmo. As funções de transação de conversão e as funções de dados (que ainda não tenham sido contadas) deverão ser contadas em conformidade com 5.4 e 5.5.

**NOTA** O escopo da contagem determinará se a funcionalidade de conversão deverá ser contada.

### 5.7 Medir a funcionalidade correspondente a melhorias

Os projetos de melhoria podem envolver inclusões, alterações e exclusões da funcionalidade existente. A funcionalidade correspondente às melhorias deverá ser medida de acordo com o que segue:

- a) Não alterar a fronteira já estabelecida para a(s) aplicação(ões) modificada(s).
- b) Contar as funções de dados incluídas, alteradas ou excluídas de acordo com 5.4.
- c) Contar as funções de transação que forem incluídas, alteradas ou excluídas de acordo com 5.5, e
- d) O tamanho funcional da aplicação poderá ser atualizado para refletir:
  - 1) a funcionalidade incluída, que aumentará o tamanho funcional da aplicação;
  - 2) a funcionalidade alterada, que poderá aumentar, diminuir ou não ter efeito sobre o tamanho funcional da aplicação;
  - 3) a funcionalidade excluída, que diminuirá o tamanho funcional da aplicação.

**NOTA 1** Uma alteração em uma função de dados pode envolver inclusão, alteração ou exclusão de DERs e/ou RLRs.

**NOTA 2** Uma alteração em uma função de transação pode envolver inclusão, alteração ou exclusão de DERs e/ou ALRs e/ou alteração na lógica de processamento.

### 5.8 Calcular o tamanho funcional

O objetivo e escopo da contagem deverão ser considerados na seleção e utilização da fórmula apropriada para calcular o tamanho funcional.

O tamanho funcional de um projeto de desenvolvimento deverá ser calculado utilizando-se a Fórmula (1):

`DFP = ADD + CFP` (1)

onde

- DFP é a contagem de pontos de função do projeto de desenvolvimento;
- ADD é o tamanho das funções a serem entregues ao usuário pelo projeto de desenvolvimento;
- CFP é o tamanho da funcionalidade de conversão.

O tamanho funcional de uma aplicação, medido após o projeto de desenvolvimento, ou a qualquer tempo no ciclo de vida da aplicação deverá ser calculado utilizando-se a Fórmula (2):

`AFP = ADD` (2)

onde

- AFP é a contagem de pontos de função da aplicação;
- ADD é o tamanho das funções a serem entregues ao usuário pelo projeto de desenvolvimento (excluído o tamanho de qualquer funcionalidade de conversão), ou a funcionalidade existente no momento da contagem da aplicação.

O tamanho funcional de um projeto de melhoria deverá ser calculado utilizando-se a Fórmula (3):

`EFP = ADD + CHGA + CFP + DEL` (3)

onde

- EFP é a contagem de pontos de função do projeto de melhoria;
- ADD é o tamanho das funções incluídas pelo projeto de melhoria;
- CHGA é o tamanho das funções alteradas pelo projeto de melhoria – conforme as mesmas estão / estarão após a implementação;
- CFP é o tamanho da funcionalidade de conversão;
- DEL é o tamanho das funções excluídas pelo projeto de melhoria.

O tamanho funcional de uma aplicação após um projeto de melhoria deverá ser calculado utilizando-se a Fórmula (4):

`AFPA = (AFPB + ADD + CHGA) - (CHGB + DEL)` (4)

onde

- AFPA é a contagem de pontos de função da aplicação após o projeto de melhoria;
- AFPB é a contagem de pontos de função da aplicação antes do projeto de melhoria;
- ADD é o tamanho das funções incluídas pelo projeto de melhoria;
- CHGA é o tamanho das funções alteradas pelo projeto de melhoria – como estão / estarão após a implementação;
- CHGB é o tamanho das funções alteradas pelo projeto de melhoria – como estão / estavam antes do início do projeto;
- DEL é o tamanho das funções excluídas pelo projeto de melhoria.

### 5.9 Documentar a contagem de pontos de função

A contagem de pontos de função deve ser documentada como segue:

- o propósito e o tipo da contagem;
- o escopo da contagem e a fronteira da aplicação;
- a data da contagem;
- uma lista de todas as funções de dados e de transação, incluindo o respectivo tipo e complexidade, bem como o número de pontos de função atribuído a cada uma;
- o resultado da contagem (ver 5.10);
- quaisquer suposições feitas e questões resolvidas.

A documentação da contagem de pontos de função também pode incluir o seguinte::

- a identificação da documentação de origem na qual a contagem foi baseada;
- a identificação dos participantes, seus papéis e qualificações;
- para cada função de dados, o número de DERs e RLRs;
- para cada função de transação, o número de DERs e de ALRs;
- uma referência cruzada de todas as funções de dados para as funções de transação;
- uma referência cruzada de todas as funções de dados para as abstrações relacionadas na documentação de origem;
- uma referência cruzada de todas as funções de transação para as abstrações relacionadas na documentação de origem.

**NOTA 1** Negociar o nível de documentação com o cliente e informar ao mesmo os custos e benefícios relacionados.

**NOTA 2** Uma Contagem de Pontos de Função completamente documentada facilitará a rastreabilidade, usabilidade e manutenibilidade; contudo, um cliente pode estar interessado apenas no resultado final.

### 5.10 Reportar o resultado da contagem de pontos de função

**NOTA** A prática de reportar consistentemente os resultados das contagens de pontos de função permitirá que os leitores identifiquem o padrão com o qual as mesmas mantém conformidade.

#### 5.10.1

Os resultados que mantenham conformidade com este Padrão Internacional deverão ser reportados como segue:

`S FP (IFPUG–IS)`

onde

- S é o resultado da contagem de pontos de função;
- FP é a unidade de tamanho do método FSM do IFPUG;
- IS é este Padrão Internacional (ISO/IEC 20926:200x).

**EXEMPLO** 250 FP (IFPUG-ISO/IEC 20926:200x)

#### 5.10.2

Os resultados que mantiverem conformidade com uma customização local deste Padrão Internacional deverão ser reportados como:

`S FP (IFPUG–IS–c)`

onde

- c representa um ou mais caracteres indicando que o resultado não mantém conformidade plena com este Padrão Internacional.

**EXEMPLO** 250 FP (IFPUG–ISO/IEC 20926:200x–a)
