# Parte 4 · Capítulo 2 — Exemplos de Contagem de Funções de Transação

> Parte 4 — Exemplos · CPM v4.3.1

**Introdução**

Esta seção utiliza uma aplicação de Recursos Humanos (RH) para ilustrar os procedimentos aplicados na contagem do tamanho de funções de transação. Além desta seção, os exemplos estão descritos nos Estudos de Casos que são parte da documentação suplementar do IFPUG.

**Nota:** Os exemplos utilizados nesta seção e ao longo deste manual possuem duas finalidades:

1. Ilustrar como as regras de contagem de pontos de função são aplicadas para um determinado conjunto de requisitos do usuário.
2. Possibilitar a prática de contagem a partir dos procedimentos de contagem apresentados.

Cada contador deve:

- Analisar os requisitos específicos do usuário que são aplicáveis para cada projeto ou aplicação que será contado, e
- Contar baseado nesses requisitos

**Conteúdo**

Esta seção descreve como os exemplos estão organizados e inclui exemplos detalhados de cada função de transação.

| Tópico | Página |
|---|---|
| Organização dos Exemplos de Contagem | 2-2 |
| Regras Gerais dos Procedimentos de Contagem das Funções de Transação | 2-5 |
| Exemplos de Identificação de Processo Elementar | 2-7 |
| Exemplos de Contagem de EE | 2-63 |
| Exemplos de Contagem de SE | 2-105 |
| Exemplos de Contagem de CE | 2-129 |

## Organização dos Exemplos de Contagem

Esta seção explica como os exemplos são apresentados.

### Resumo da Organização

A lista abaixo descreve, em linhas gerais, a sequência de informações dos exemplos detalhados.

Para cada exemplo:

- As EEs, SEs e as CEs são identificadas
- Os ALRs e DERs que contribuem para a definição da complexidade funcional são contados.

### Diagrama da Organização

O diagrama abaixo ilustra como os exemplos estão organizados:

![Diagrama da organização dos exemplos: cada exemplo identifica EEs, SEs e CEs e conta os ALRs/DERs.](images/p335-diagrama-organizacao.png)

### Componentes de Contagem de cada Exemplo

Cada exemplo inclui os seguintes componentes:

- As bases para a contagem
- Tabelas de regras de contagem que foram aplicadas

### Diagrama de Componentes

O diagrama abaixo ilustra os componentes de cada exemplo e o fluxo de informação.

![Diagrama de componentes de cada exemplo e o fluxo de informação: a Base para a Contagem (Requisitos do Usuário, modelo de dados e de processos, telas/relatórios) alimenta a Tabela de Regras de Contagem para identificar EE, SE e CE e, para cada uma, contar os ALRs e DERs.](images/p336-diagrama-componentes.png)

**Base para a Contagem**

Cada exemplo inicia com a definição da base para a contagem. Conforme apresentado no diagrama de componentes, a medição do tamanho funcional pode ser baseada nos seguintes componentes incluídos nos exemplos:

- Requisitos do usuário
- Modelo de dados e de processos
- Janelas, telas ou relatórios

**Nota:** Nem todos os componentes acima estão incluídos nos diagramas de todos os exemplos. Em alguns exemplos, os requisitos são suficientes para serem utilizados como base para a contagem. Já outros exemplos incluem um modelo de dados ou de processo, janelas, telas e/ou relatórios.

**Tabelas de Regras de Contagem**

A análise para identificar as funções é apresentada em uma tabela que contém a lista de regras de contagem por tipo de função. As regras são aplicadas aos componentes que compõem a base para a contagem. A análise realizada é descrita na coluna "A Regra se Aplica?" da tabela de regras de contagem.

**Nota:** Se todas as regras se aplicarem, o exemplo será contado como uma EE, SE ou CE.

As tabelas apresentadas ao longo do capítulo mostram as regras aplicadas e suas respectivas explicações para os tipos que determinam a complexidade de cada tipo de função identificada.

## Regras Gerais dos Procedimentos de Contagem das Funções de Transação

O processo de análise de todos os exemplos segue os procedimentos descritos no início deste capítulo. Os passos do processo estão relacionados à aplicação das regras para medir as funções de transação conforme definido na Parte 1, e inclui os itens a seguir:

- Identificar cada Processo Elementar solicitado pelo usuário
- Determinar Processos Elementares únicos
- Classificar cada Processo Elementar como uma Entrada Externa (EE), Saída Externa (SE), ou uma Consulta Externa (CE)
- Contar os Arquivos Lógicos Referenciados (ALRs) para cada função de transação
- Contar os Dados Elementares Referenciados (DETs) para cada função de transação
- Determinar a complexidade funcional para cada função de transação
- Determinar o tamanho funcional de cada função de transação.

## Exemplos de Identificação de Processo Elementar

**Introdução**

Esta seção utiliza diversos exemplos para ilustrar os procedimentos de identificação de processos elementares, de acordo com as características específicas de cada um.

**Nota:** Cada exemplo apresenta apenas o requisito específico à situação ilustrada, apesar de na prática ser necessária a avaliação de todos os requisitos e seus respectivos impactos functionais. Ocasionalmente, são feitas algumas referências às funções relacionadas que também existem, mas não estão ilustradas (i.e., Incluir Funcionário e Atualizar Funcionário).

**Conteúdo**

Esta seção inclui os seguintes exemplos:

| Tópico | Página |
|---|---|
| Descrição Geral dos Exemplos de Contagem de Identificação de Processo Elementar | 2-8 |
| Exemplo: Dados de um Novo Funcionário / Dependentes | 2-9 |
| Exemplo: Imprimir um Cheque / Marcá-lo como Pago | 2-16 |
| Exemplo: Exibir Lista das Funções Assinaladas | 2-21 |
| Exemplo: Imprimir as Funções Assinaladas / Salvar os Critérios Selecionados | 2-26 |
| Exemplo: Funcionário - Informações da Entrevista | 2-31 |
| Exemplo: Funcionário - Informações sobre a Carteira de Habilitação | 2-36 |
| Exemplo: Processamento Batch de Carga de Dados dos Funcionário | 2-41 |
| Exemplo: Assinalar um Funcionário a uma Função | 2-47 |
| Exemplo: Processos Elementares Similares | 2-57 |

### Descrição Geral dos Exemplos de Contagem de Identificação de Processo Elementar

Os exemplos de identificação de processos elementares estão descritos na tabela abaixo:

| Exemplo | Descrição Resumida | Página |
|---|---|---|
| Dados de um Novo Funcionário/ Dependentes | Este exemplo mostra como múltiplos processos podem compor um processo elementar. | 2-9 |
| Imprimir um Cheque / Marcá-lo como Pago | Este exemplo ilustra o conceito sobre a intenção primária de um processo elementar. | 2-16 |
| Exibir Lista das Funções Assinaladas | Este exemplo mostra que a entrada dos critérios de seleção de um relatório não é um processo elementar. | 2-21 |
| Imprimir as Funções Assinaladas / Salvar os Critérios Selecionados | Este exemplo mostra explicitamente que salvar os critérios selecionados para uso posterior é um processo elementar separado. | 2-26 |
| Funcionário - Informações da Entrevista | Este é outro exemplo de múltiplos processos que compoem um processo elementar. | 2-31 |
| Funcionário - Informações sobre a Carteira de Habilitação | Este é um terceiro exemplo de múltiplos processos que compoem um processo elementar. | 2-36 |
| Processamento *Batch* de Carga de Dados dos Funcionários | Este exemplo ilustra como relatórios de erro e relatórios estatísticos produzidos a partir do resultado de um processamento *Batch* não são considerados processos elementares separados. | 2-41 |
| Assinalar um Funcionário a uma Função | Este exemplo ilustra a avaliação de processos elementares similiares para determinar se são ou não únicos. | 2-47 |
| Processos Elementares Similares | Este exemplo mostra como dois Processos Elementares similares são contados como transações únicas. | 2-57 |

### Exemplo: Dados de um Novo Funcionário / Dependentes

**Requisitos do Usuário**

Ao incluir um novo funcionário, é solicitado ao usuário que entre com:

1. dados de identificação (básicos) do funcionário e
2. informação dos dependentes, caso o número de dependentes seja maior do que zero.

O arquivo de transação é criado durante a atualização da informação do funcionário. Este arquivo de transação é enviado periodicamente (i.e., no final do dia) para o Sistema de Benefícios.

**Nota:** A atualização da informação dos dependentes de funcionários existentes não está incluída neste exemplo. Para este processo, devem-se consultar os Estudos de Casos 1-3 onde está ilustrado um exemplo de contagem de processos de atualização.

**Inclusão do Funcionário sem a Informação dos Seus Dependentes**

Determinar se a inclusão das informações básicas de um funcionário sem a informação dos dependentes é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Incluir um funcionário é parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Não. A transação completa inclui a inclusão da informação do funcionário com a informação dos dependentes associada, caso o número de dependentes seja maior do que zero. Esses passos não podem ser separados logicamente. |
| • É auto-contido e | Não. Incluir a informação dos dependentes associada ao funcionário incluído é um passo subsequente necessário para completar o processo elementar. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Incluir o funcionário sem adicionar os dependentes não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, o dependente precisa ser incluído. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Incluir um funcionário (sem incluir as informações dos dependentes) não satisfaz todos os critérios. |

**Conclusão**

Incluir um funcionário sem as informações dos dependentes não satisfaz os requisitos de um processo elementar.

**Inclusão apenas das Informações Dos Dependentes**

Determinar se a inclusão das informações dos dependentes sem incluir a informação dos funcionários é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Incluir um dependente é parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Não. Esta atividade não é uma transação completa porque não pode ser executada independente da inclusão de um funcionário. |
| • É auto-contido e | Não. Esta atividade não é auto-contida porque não pode ser executada independentemente da inclusão de um funcionário. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Incluir um dependente sem incluir um funcionário não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, tanto funcionário como dependente precisam ser incluídos. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Incluir um dependente (sem o respectivo funcionário) não satisfaz a todos os critérios. Por isto, não é um processo elementar. |

**Conclusão**

Incluir somente as informações de dependentes não satisfaz os requisitos de um processo elementar. Neste exemplo, incluir um funcionário (sem incluir as informações dos dependentes) não satisfaz todos os critérios. Outros sistemas podem manter a informação dos dependentes independentemente da dos funcionários.

**Inclusão de um Funcionário com as Informações dos Dependentes**

Para um funcionário que possui dependente, determinar se a inclusão das informaçãos do funcionário com a informação dos seus respectivos dependentes é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Incluir um funcionário com a informação dos dependentes é parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Sim. Juntas, as informações do funcionário e de seus dependentes são utilizadas para incluir um novo funcionário no sistema de RH. Esses passos não podem ser separados logicamente. |
| • É auto-contido e | Sim. Esta atividade é significativa e auto-contida e toda informação necessária é incluída na aplicação de RH. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. O negócio é deixado em um estado consistente quando o funcionário é incluído, assim como os dependentes, quando aplicável. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Incluir um Funcionário com as Informações dos Dependentes satisfaz todos os critérios acima. |

**Conclusão**

Incluir um Funcionário com as Informações dos Dependentes satisfaz os requisitos de um processo elementar.

Poderia se adotar implementações diferentes do requisito de adicionar dependentes a um funcionário, como por exemplo:

- um campo de entrada de dados chamado Número de Dependentes dentro da tela de funcionários que permite a exibição da tela de dependentes
- um botão de comando que exibe a tela de dependentes
- um item de menu na tela de funcionários que exibe a tela de dependentes
- a possibilidade de incluir os dependentes na tela de inclusão dos funcionários

Independente da implementação adotada para este requisito, existe um processo elementar, de inclusão de um funcionário com os dependentes.

Não foram identificados processos elementares separados em função de dados opcionais, como por exemplo: Incluir Funcionário com dependentes, Incluir Funcionário sem dependentes.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise que foi feita para determinar se o processo elementar é único ou não:

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
|---|---|
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| • Requerem o mesmo conjunto de DERs e | Sim. Incluir um Funcionário requer o mesmo conjunto de DERs que Atualizar um Funcionário. |
| • Requerem o mesmo conjunto de ALRs e | Sim. Incluir um Funcionário requer o mesmo conjunto de ALRs que Atualizar Funcionário. |
| • Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. Incluir Funcionário tem um conjunto diferente de lógica de processamento em relação ao processo Atualizar um Funcionário. |
| 2. Não dividir um processo elementar com múltiplas formas de lógica de processamento em múltiplos processos elementares. | Os requisitos funcionais do usuário consideram que há uma única função. A função Incluir um Funcionário não foi dividida em dois processos elementares (i.e., Incluir Apenas Funcionário, Incluir Apenas os Dependentes). |

**Conclusão**

Incluir um Funcionário é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

**Enviar Arquivo de Transação para o Sistema de Benefícios**

Determinar se o envio de arquivos de transação para o Sistema de Benefícios é um processo elementar adicional. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Enviar o arquivo de transação para o Sistema de Benefícios faz parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Sim. Enviar o arquivo de transação para o Sistema de Benefícios é uma transação completa. É uma função logicamente separada da função Incluir Funcionário. |
| • É auto-contido e | Sim. A atividade de enviar as transações para o Sistema de Benefícios é auto-contida. O Arquivo de Transação é enviado independentemente (i.e., no final do dia) da função Incluir Funcionário. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Após as transações serem enviadas para o Sistema de Benefícios, o negócio da aplicação de RH fica em um estado consistente. O requisito funcional do usuário foi totalmente satisfeito sem que haja necessidade de que algo a mais seja feito. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Enviar Arquivo de Transação para o Sistema de Benefícios satisfaz todos os critérios acima. |

**Conclusão**

Enviar Arquivo de Transação para o Sistema de Benefícios satisfaz os requisitos de um processo elementar.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não:

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
|---|---|
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| • Requerem o mesmo conjunto de DERs e | Não. Enviar o arquivo de transação para o Sistema de Benefícios requer DERs diferentes de outros Processos Elementares identificados. |
| • Requerem o mesmo conjunto de ALRs e | Sim. Enviar o arquivo de transação para o Sistema de Benefícios requer o mesmo conjunto de ALRs que Incluir um Funcionário. |
| • Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. Enviar o arquivo de transação para o Sistema de Benefícios tem um conjunto de lógica de processamento diferente dos outros processos elementares identificados. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Não há nada a ser separado. |

**Conclusão**

Enviar o Arquivo de Transação para o Sistema de Benefícios é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

### Exemplo: Imprimir um Cheque / Marcá-lo como Pago

**Requisitos do Usuário**

Imprimir um cheque e, como resultado, marcá-lo na conta corrente como pago. Todos os dados impressos no cheque já estão armazenados no arquivo de Cheques.

O diagrama abaixo mostra o fluxo de dados deste exemplo:

![Fluxo de dados do exemplo: o processo Imprimir Cheque referencia o ALI Cheque (Número do Cheque, Quantia, Portador, Indicador de Cheque Pago, Data de Emissão) e gera o cheque impresso.](images/p349-fluxo-imprimir-cheque.png)

**Marcar na Conta como Cheque Pago**

Determinar se marcar na conta corrente como cheque pago é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Marcar na Conta como Cheque Pago faz parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Não. Marcar na Conta como Cheque Pago não representa uma transação completa, a menos que o cheque seja também impresso. Esses passos não podem ser separados logicamente. |
| • É auto-contido e | Não. Marcar na Conta como Cheque Pago sem imprimí-lo não é uma função auto-contida. O cheque não pode ser marcado como pago na conta corrente independentemente da impressão do mesmo. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Marcar na Conta como Cheque Pago sem imprimí-lo não deixa o negócio em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, a função de marcar na conta como cheque pago necessita ocorrer quando o cheque é impresso. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Marcar na Conta como Cheque Pago não satisfaz a todos os critérios. Por isto, não é um processo elementar. |

**Conclusão**

Marcar na Conta como Cheque Pago não satisfaz os requisitos de um processo elementar.

**Imprimir um Cheque**

Determinar se imprimir um cheque sem marcar na conta como pago é um processo elementar ou não. A análise realizada está conforme tabela abaixo:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Imprimir um Cheque faz parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Não. Esta atividade não é uma transação completa, a menos que o cheque seja marcado como pago na Conta Corrente. Esses passos não podem ser separados logicamente. |
| • É auto-contido e | Não. Imprimir um Cheque não é uma função auto-contida até que o passo sub-sequente de marcar o cheque como pago na conta corrente seja executado. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Imprimir um Cheque sem marcá-lo como pago na conta corrente não deixa o negócio em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, o cheque precisa ser marcado como pago na conta corrente. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Imprimir um Cheque não satisfaz a todos os critérios. Por isto, não é um processo elementar. |

**Conclusão**

Imprimir um Cheque não satisfaz a os requisitos de um processo elementar.

**Imprimir um Cheque e Marcá-lo como Pago na Conta Corrente**

Determinar se imprimir um cheque e marcá-lo como pago na conta corrente é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Imprimir um Cheque e Marcá-lo como Pago na Conta Corrente fazem parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Sim. Imprimir um Cheque e Marcá-lo como Pago na Conta Corrente constitui uma transação completa. Esses passos não podem ser separados logicamente. |
| • É auto-contido e | Sim. Imprimir um Cheque e Marcá-lo como Pago na Conta Corrente é auto-contido. Não existe nenhuma necessidade de se executar passos anteriores ou sub-sequentes. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Imprimir um Cheque e Marcá-lo como Pago na Conta Corrente deixa o negócio em um estado consistente. O requisito funcional do usuário é totalmente cumprido. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Imprimir um Cheque e Marcá-lo como Pago na Conta Corrente satisfaz todos os critérios acima. Portanto, é um processo elementar. |

**Conclusão**

Imprimir um Cheque e Marcá-lo como Pago na Conta Corrente satisfaz os requisitos de um processo elementar.

O requisito do usuário é imprimir o cheque. Marcá-lo como pago na Conta Corrente é parte do processo de impressão do cheque. As funções Imprimir e Marcar juntas correspondem à menor unidade da atividade que é significativa para o usuário. O processo como um todo é significativo para o usuário, constitui uma transação completa, é auto-contido e deixa o negócio da aplicação que está sendo contada em um estado consistente.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
|---|---|
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| • Requerem o mesmo conjunto de DERs e | Não. O conjunto de DERs utilizado para Imprimir um Cheque e de Marcá-lo como pago é diferente de qualquer outro processo elementar. |
| • Requerem o mesmo conjunto de ALRs e | Não. O conjunto de ALRs utilizado para Imprimir um Cheque e de Marcá-lo como pago é diferente de qualquer outro processo elementar. |
| • Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. O conjunto de lógica de processamento utilizado para Imprimir um Cheque e de Marcá-lo como pago é diferente de qualquer outro processo elementar. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Marcar um cheque como pago na Conta Corrente é parte da lógica de processamento da impressão de um cheque. |

**Conclusão**

Imprimir um Cheque e Marcá-lo como Pago na Conta Corrente é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

### Exemplo: Exibir Lista das Funções Assinaladas

**Requisitos do Usuário**

Exibir uma lista das funções assinaladas para um determinado intervalo de datas. O usuário estará habilitado a entrar com os critérios de seleção. Não existe nenhum requisito para armazenar os critérios selecionados uma vez que o relatório tenha sido impresso. O diagrama abaixo mostra o fluxo de dados deste exemplo:

![Tela Critérios da Lista das Funções Assinaladas, com os campos Código Funcionário, Data Inicial e Data Final e os botões Imprimir e Cancelar.](images/p354-tela-criterios-lista-funcoes.png)

**Entrar com os Critérios de Seleção**

Determinar se a entrada dos critérios de seleção (sem exibir a lista das funções assinaladas) é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Entrar com os Critérios de Seleção faz parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Não. Entrar com os Critérios de Seleção (sem exibir a lista das funções assinaladas) não é uma transação completa. Esses passos não podem ser separados logicamente. |
| • É auto-contido e | Não. Entrar com os Critérios de Seleção (sem exibir a lista das funções assinaladas) não é auto-contido. Exibir Lista das Funções Assinaladas é um passo sub-sequente do processo que é necessário para completar o processo elementar. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Entrar com os Critérios de Seleção (sem exibir a lista das funções assinaladas) não deixa o negócio em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, a lista das funções assinaladas precisa ser exibida. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Entrar com os Critérios de Seleção (sem exibir a lista das funções assinaladas) não satifaz os critérios acima. |

**Conclusão**

Entrar com os Critérios de Seleção não satisfaz os requisitos de um processo elementar.

**Visão das Funções Assinaladas**

Determinar se a exibir a lista das funções assinaladas (sem entrar com os critérios de seleção) é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Exibir a lista das funções assinaladas faz parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Não. Exibir a lista das funções assinaladas (sem entrar com os critérios de seleção) não pode ser executado sem que os critérios de seleção sejam informados. Esses passos não podem ser separados logicamente. |
| • É auto-contido e | Não. Exibir a lista das funções assinaladas (sem entrar com os critérios de seleção) não é auto-contido. A lista das funções assinaladas não pode ser exibida independentemente do passo anterior que corresponde à entrada dos critérios de seleção. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Exibir a lista das funções assinaladas (sem entrar com os critérios de seleção) não deixa o negócio em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, os critérios de seleção precisam ser informados. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Exibir a lista das funções assinaladas (sem entrar com os critérios de seleção) não satisfaz os critérios acima. |

**Conclusão**

Exibir a lista das funções assinaladas (sem entrar com os critérios de seleção) não satisfaz os requisitos de um processo elementar.

**Entrada dos Critérios de Seleção e Exibição das Funções Assinaladas**

Determinar se a exibição da lista de funções assinaladas com a entrada dos critérios de seleção é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Entrar com os Critérios de Seleção e Exibir a Lista de Funções Assinaladas faz parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Sim. Entrar com os Critérios de Seleção e Exibir a Lista de Funções Assinaladas é uma transação completa. Esses passos não podem ser separados logicamente. |
| • É auto-contido e | Sim. Entrar com os Critérios de Seleção e Exibir a Lista de Funções Assinaladas é uma transação auto-contida. Não existe necessidade de se executar passos anteriores ou sub-sequentes |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Entrar com os Critérios de Seleção e Exibir a Lista de Funções Assinaladas deixa o negócio em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, os critérios de seleção precisam ser informados e a lista exibida. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Entrar com os Critérios de Seleção e Exibir a Lista de Funções Assinaladas satifaz todos os critérios acima. |

**Conclusão**

Entrar com os Critérios de Seleção e Exibir a Lista de Funções Assinaladas satisfaz aos critérios de um processo elementar.

Informação de Controle é a entrada de uma SE ou CE. A solicitação específica de qual e/ou como o dado será recuperado ou gerado faz parte do processo elementar de fornecer os dados do usuário e não do próprio processo elementar.

Entrar com os critérios de seleção não é a menor unidade de uma atividade que seja significativa para o usuário. Não é auto-contida porque não pode ser executada independentemente de gerar o relatório. Entrar com os critérios de seleção e gerar o relatório juntos corresponde à menor unidade de atividade que é significativa para o usuário, constitui uma transação completa, é auto-contida e deixa o negócio da aplicação que está sendo contada em um estado consistente.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise que foi executada para determinar se o processo elementar é único ou não:

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
|---|---|
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| • Requerem o mesmo conjunto de DERs e | Não. O conjunto de DERs utilizado para Entrar com os critérios de seleção e exibir a lista de funções assinaladas é diferente de qualquer outro processo elementar. |
| • Requerem o mesmo conjunto de ALRs e | Não. O conjunto de ALRs utilizado para Entrar com os critérios de seleção e exibir a lista de funções assinaladas é diferente de qualquer outro processo elementar. |
| • Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. O conjunto de lógicas de processamento utilizado para entrar com os critérios de seleção e exibir a lista de funções assinaladas é diferente de qualquer outro processo elementar. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | É necessário entrar com os critérios de seleção para ver a lista de funções assinaladas. |

**Conclusão**

Entrar com os Critérios de Seleção e Exibir a Lista de Funções Assinaladas é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

### Exemplo: Imprimir as Funções Assinaladas / Salvar os Critérios Selecionados

**Requisitos do Usuário**

Imprimir uma lista das funções assinaladas para um determinado intervalo de datas. O usuário estará habilitado a entrar com os critérios de seleção. Existe um requisito que permite ao usuário armazenar os critérios selecionados para uso posterior.

O diagrama abaixo mostra o fluxo de dados deste exemplo:

![Fluxo de dados do exemplo: a tela Critérios da Lista das Funções Assinaladas (campos Código Funcionário, Data Inicial, Data Final e botões Imprimir, Salvar e Cancelar) alimenta os processos Salvar Critérios de Seleção (ALI Critérios do Relatório) e Imprimir Listas das Funções Assinaladas (ALI Funções), que gera a Lista das Funções.](images/p359-fluxo-imprimir-salvar-criterios.png)

**Entrar e Salvar os Critérios de Seleção Informados**

Determinar se salvar os critérios de seleção informados (sem imprimir a lista de funções assinaladas) é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Salvar os critérios de seleção faz parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Sim. Salvar os critérios de seleção é uma transação completa. É uma função separada logicamente da função de impressão da lista de funções assinaladas. |
| • É auto-contido e | Sim. Salvar os critérios de seleção é uma transação auto-contida. Pode ser executada independentemente de imprimir a lista de funções assinaladas. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Salvar os critérios de seleção deixa o negócio em um estado consistente. O requisito funcional do usuário está totalmente satisfeito sem que haja mais nada a ser feito. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Salvar os critérios de seleção atende a todos os critérios acima. |

**Conclusão**

Entrar e Salvar os Critérios de Seleção informados satisfaz os requisitos de um processo elementar.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
|---|---|
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| • Requerem o mesmo conjunto de DERs e | Não. O conjunto de DERs utilizado para Salvar os critérios de seleção informados é diferente de qualquer outro processo elementar. |
| • Requerem o mesmo conjunto de ALRs e | Não. O conjunto de ALRs utilizado para Salvar os critérios de seleção informados é diferente de qualquer outro processo elementar. |
| • Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. O conjunto de lógica de processamento utilizado para salvar os critérios de seleção informados é diferente de qualquer outro processo elementar. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Não há nada a ser separado. |

**Conclusão**

Salvar os Critérios de Seleção Informados é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

**Imprimir a Lista de Funções Assinaladas**

Determinar se imprimir a lista de funções assinaladas, tendo o critério de seleção sido salvo ou não, é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
|---|---|
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| • É significativo para o usuário | Sim. Imprimir a lista de funções assinaladas faz parte dos requisitos funcionais do usuário. |
| • Constitui uma transação completa | Sim. Imprimir a lista de funções assinaladas é uma transação completa. É uma função logicamente separada de salvar os critérios de seleção informados. |
| • É auto-contido e | Sim. Imprimir a lista de funções assinaladas é uma transação auto-contida. Pode ser executada independentemente de salvar os critérios de seleção informados. |
| • Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Imprimir a lista de funções assinaladas deixa o negócio em um estado consistente. O requisito funcional do usuário está totalmente satisfeito sem que haja mais nada a ser feito. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Imprimir a lista de funções assinaladas satifaz todos os critérios acima |

**Conclusão**

Imprimir a Lista de Funções Assinaladas é um processo elementar.

Entrar com os critérios de seleção é significativo ao usuário porque os critérios podem ser salvos pelo mesmo para uso posterior. Imprimir a lista ou Salvar os critérios de Seleção informados podem ser executados independentemente, e ambos deixam o negócio em um estado consistente. Ambos os processos, armazenar os critérios de seleção e gerar o relatório, são significativos ao usuário, constituem em transações completas, são auto-contidos e deixam o negócio da aplicação que está sendo contada em um estado consistente. De acordo com as Regras de Identificação de Processos Elementares, conclui-se que há dois processos elementares.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
|---|---|
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| • Requerem o mesmo conjunto de DERs e | Não. O conjunto de DERs utilizado para imprimir a lista de funções assinaladas é diferente de qualquer outro processo elementar. |
| • Requerem o mesmo conjunto de ALRs e | Não. O conjunto de ALRs utilizado para imprimir a lista de funções assinaladas é diferente de qualquer outro processo elementar. |
| • Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. O conjunto de lógica de processamento utilizado para imprimir a lista de funções assinaladas é diferente de qualquer outro processo elementar. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Não há nada a ser separado. |

**Conclusão**

Imprimir a Lista de Funções Assinaladas é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

### Exemplo: Funcionário - Informações da Entrevista

**Requisitos do Usuário**

Quando um funcionário for incluído, além dos dados pessoais (i.e., Identificação, sobrenome, endereço, etc.), é necessário entrar com os detalhes da entrevista feita pelo funcionário. As informações da entrevista incluem o nome do entrevistador, a data da entrevista e os comentários do entrevistador em relação ao candidato.

O diagrama abaixo mostra o fluxo de dados deste exemplo:

![Diagrama de fluxo de dados do exemplo: janelas "Incluir Funcionário" e "Inclui Detalhes da Entrevista" e o fluxo Incluir Funcionário → Incluir Detalhes da Entrevista → ALI Funcionário](images/p364-dfd-informacoes-entrevista.png)

**Entrar com os Dados Pessoais do Funcionário**

Determinar se Entrar apenas com os dados pessoais do funcionário é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Entrar com os dados pessoais do funcionário faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Não. A transação completa inclui tanto a entrada dos dados pessoais do funcionário quanto os detalhes da entrevista do funcionário. Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Não. Incluir os detalhes da entrevista feita pelo funcionário é um passo sub-sequente necessário para completar o processo elementar. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Entrar com os dados pessoais do funcionário sem entrar também com os detalhes da entrevista não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, os detalhes da entrevista precisam ser informados. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Entrar apenas com os dados pessoais do funcionário não satisfaz nenhum dos critérios de identificação de um processo elementar. |

**Conclusão**

Entrar com os Dados Pessoais do Funcionário (sem incluir também os detalhes da entrevista) não satisfaz aos requisitos de um processo elementar.

**Entrar com os Detalhes da Entrevista do Funcionário**

Determinar se entrar com os detalhes da entrevista do funcionário é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Entrar com os detalhes da entrevista do funcionário faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Não. A transação completa inclui tanto a entrada dos dados pessoais do funcionário quanto os detalhes da entrevista do funcionário. Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Não. Entrar apenas com os detalhes da entrevista do funcionário não pode ser executado independentemente da entrada dos detalhes da entrevista em si. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Entrar apenas com os detalhes da entrevista do funcionário sem entrar também com suas informações pessoais não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, tanto os dados pessoais do funcionário como os detalhes da sua entrevista precisam ser informados. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Entrar apenas com os detalhes da entrevista do funcionário não satisfaz nenhum dos critérios de identificação de um processo elementar. |

**Conclusão**

Entrar apenas com os detalhes da entrevista do funcionário (sem entrar também com informações pessoais do funcionário) não satisfaz aos requisitos de um processo elementar.

**Entrar com os Dados Pessoais do Funcionário e os Detalhes da Sua Entrevista**

Determinar se entrar com os dados pessoais do funcionário juntamente com os detalhes da sua entrevista é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Entrar com os dados pessoais do funcionário e os detalhes da sua entrevista, ambos fazem parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Sim. Entrar com os dados pessoais do funcionário e os detalhes da sua entrevista juntos são uma transação completa. Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Sim. Entrar com os dados pessoais do funcionário e os detalhes da sua entrevista juntos são uma função auto-contida. Não existem passos anteriores ou subsequentes cuja execução seja necessária. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Entrar com os dados pessoais do funcionário e os detalhes da sua entrevista deixa o negócio em um estado consistente. Para satisfazer o requisito funcional do usuário, ambos os passos do processo precisam ser executados. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Entrar com os dados pessoais do funcionário e os detalhes da sua entrevista satisfaz todos os critérios acima. |

**Conclusão**

Entrar com os dados pessoais do funcionário juntamente com os detalhes da sua entrevista satisfaz o critério de um processo elementar.

Se dois processos de entrada são sempre sequenciais e dependentes (onde passo um e passo dois são mandatórios), então existe um processo elementar e uma função.

Um novo funcionário não pode ser registrado até que seus dados pessoais e os detalhes da sua entrevista sejam incluídos. Entrar com os dados pessoais de um funcionário ou com os detalhes da sua entrevista isoladamente não seria considerada como a menor unidade de atividade significativa para o usuário.

Entrar com os Dados Pessoais do Funcionário juntamente com os Detalhes da Sua Entrevista representa a menor unidade de atividade que é significativa para o usuário, constitui uma transação completa, é auto-contida e deixa o negócio da aplicação que está sendo contada em um estado consistente.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
| --- | --- |
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| - Requerem o mesmo conjunto de DERs e | Não. O conjunto de DERs utilizado para Entrar com os Dados Pessoais do Funcionário juntamente com os Detalhes da Sua Entrevista é diferente de qualquer outro processo elementar. |
| - Requerem o mesmo conjunto de ALRs e | Não. O conjunto de ALRs utilizado para Entrar com os Dados Pessoais do Funcionário juntamente com os Detalhes da Sua Entrevista é diferente de qualquer outro processo elementar. |
| - Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. A lógica de processamento utilizada para Entrar com os Dados Pessoais do Funcionário juntamente com os Detalhes da Sua Entrevista é diferente de qualquer outro processo elementar. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Um novo funcionário não pode ser registrado até que os dados pessoais e os detalhes da entrevista sejam informados. |

**Conclusão**

Entrar com os Dados Pessoais do Funcionário e com os Detalhes de Entrevista é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

### Exemplo: Funcionário - Informações sobre a Carteira de Habilitação

**Requisitos do Usuário**

Quando um novo funcionário é incluído, deve-se entrar com os seguintes dados pessoais do funcionário: Identificação, sobrenome, endereço, e se o funcionário possui habilitação ou não. Caso o funcionário possua carteira de habilitação, é necessário executar um passo secundário para registrar o número da sua carteira de habilitação, a categoria e a data de validade.

**Note:** Atualizar as informações pessoais de um funcionário existente incluindo dados de sua carteira de habilitação não está sendo considerado neste exemplo.

O diagrama abaixo mostra o fluxo de dados deste exemplo:

![Diagrama de fluxo de dados do exemplo: janelas "Incluir Funcionário" e "Incluir Informações da Carteira de Habilitação" e o fluxograma com a decisão "Carteira de Habilitação?" (Sim/Não) até o ALI Funcionário](images/p369-dfd-carteira-habilitacao.png)

**Entrar com os Dados Pessoais do Funcionário**

Determinar se entrar apenas com os dados pessoais do funcionário é um processo elementar ou não. A tabela seguinte mostra esta análise:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Incluir um funcionário faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Não. A transação completa inclui tanto a entrada dos dados pessoais do funcionário quanto às informações da sua carteira de habilitação (caso exista). Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Não. Entrar com os dados da carteira de habilitação do funcionário (caso exista) é um passo subsequente necessário para completar o processo elementar. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Entrar com os dados pessoais do funcionário sem incluir as informações da sua carteira de habilitação (caso exista) não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, as informações da carteira de habilitação precisam ser informados (caso existam). |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Entrar apenas com os dados pessoais do funcionário não satisfaz nenhum dos critérios de identificação de um processo elementar. |

**Conclusão**

Entrar com os Dados Pessoais do Funcionário sem entrar com os dados de sua carteira de habilitação (caso a possua) não satisfaz aos requisitos de um processo elementar.

**Entrar com os Dados da Carteira de Habilitação do Funcionário**

Determinar se Entrar apenas com os dados da carteira de habilitação do funcionário sem entrar também com suas informações pessoais é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Entrar com as informações da carteira de habilitação faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Não. A transação completa inclui tanto a entrada dos dados pessoais do funcionário quanto às informações da sua carteira de habilitação (caso exista). Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Não. Entrar com as informações pessoais do funcionário corresponde a um passo anterior necessário para completar o processo elementar. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Entrar apenas com as informações da carteira de habilitação do funcionário não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, tanto os dados pessoais do funcionário como a sua carteira de habilitação (caso exista) precisam ser informados. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Entrar apenas com as informações da carteira de habilitação do funcionário não satisfaz nenhum dos critérios de identificação de um processo elementar. |

**Conclusão**

Entrar com as Informações da Carteira de Habilitação do funcionário (sem entrar com os seus dados pessoais) não satisfaz aos requisitos de um processo elementar.

**Entrar com os Dados Pessoais do Funcionário e as Informações de Sua Carteira de Habilitação**

Determinar se entrar com os dados pessoais do funcionário juntamente com as informações de sua carteira de habilitação é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. . Incluir um funcionário e registrar os dados de sua carteira de habilitação fazem parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Sim. A transação completa inclui a entrada dos dados pessoais do funcionário bem como os dados da sua carteira de habilitação (caso exista). Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Sim. Incluir um funcionário e registrar os dados de sua carteira de habilitação é uma função auto-contida. Não existem passos anteriores ou subsequentes cuja execução seja necessária. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Entrar com os dados pessoais de um funcionário e dos dados de sua carteira de habilitação (caso exista) deixa o negócio em um estado consistente. Para satisfazer o requisito funcional do usuário, ambos os passos do processo precisam ser executados. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Incluir um funcionário e registrar os dados de sua carteira de habilitação satisfaz todos os critérios acima. |

**Conclusão**

Se dois processos de entrada são sempre sequenciais e dependentes, mas o segundo é opcional (mandatório apenas se aplicável), então existe um processo elementar.

Incluir um Funcionário e Registrar os Dados de Sua Carteira de Habilitação é um Processo Elementar. Se um funcionário não possui carteira de habilitação, o passo “Entrar com os Dados da Sua Carteira de Habilitação” não é relevante. Se um funcionário possui uma carteira de habilitação, uma tela secundária precisa ser preenchida para completar o Processo Elementar e deixar o negócio da aplicação que está sendo contada em um estado consistente.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
| --- | --- |
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| - Requerem o mesmo conjunto de DERs e | Não. O conjunto de DERs utilizado para Incluir um Funcionário e os Dados de Sua Carteira de Habilitação é diferente de qualquer outro processo elementar. |
| - Requerem o mesmo conjunto de ALRs e | Não. O conjunto de ALRs utilizado para Incluir um Funcionário e os Dados de Sua Carteira de Habilitação é diferente de qualquer outro processo elementar. |
| - Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. A lógica de processamento utilizada para Incluir um Funcionário e os Dados de Sua Carteira de Habilitação é diferente de qualquer outro processo elementar. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Se um funcionário possui uma carteira de habilitação, um novo funcionário não pode ser registrado até que os seus dados pessoais e os dados de sua carteira de habilitação sejam informados. |

**Conclusão**

Entrar com os Dados Pessoais do Funcionário juntamente com as informações de Sua Carteira de Habilitação é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

### Exemplo: Processamento Batch de Carga de Dados dos Funcionário

**Requisitos do Usuário**

Uma carga dos dados de um novo funcionário em modo *batch* a partir dos dados enviados por outra aplicação deve ser aceita. Os dados do funcionário devem ser validados e armazenados no arquivo Funcionários; um relatório de erros é gerado com todos os erros identificados durante o processamento *batch*. O departamento de RH é notificado via e-mail com o resumo desse processamento.

O diagrama abaixo mostra o fluxo de dados deste exemplo:

![Diagrama de fluxo de dados do processamento batch: Carga de Dados de Funcionário → Aplicação de RH → arquivo Funcionário, Relatório de Erros e E-mail de Notificação com Resumo do Processamento Batch](images/p374-dfd-processamento-batch.png)

**Processar Carga de Dados de um Funcionário**

Determinar se aceitar a Carga de Dados de um Funcionário e processar as transações sem gerar o relatório de erros e o resumo do processamento é um processo elementar ou não. A análise realizada está ilustrada na tabela a seguir:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Aceitar a Carga de Dados de um Funcionário e processar as transações faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Não. A transação completa inclui reportar os erros e o resumo da Carga de Dados de um Funcionário. Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Não. Gerar um Relatório de Erros e Enviar um E-mail de Notificação são passos subsequentes necessários para completar o processo elementar. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Processar a Carga de Dados do Funcionário sem gerar um Relatório de Erros e nem um E-mail de Notificação não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, os erros encontrados e o resumo do processamento da Carga de Dados de um Funcionário precisam ser reportados. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Nenhum dos critérios foi atingido. |

**Conclusão**

Aceitar a carga de Dados de um Funcionário e processar as transações sem gerar o relatório de erros ou enviar um e-mail com o resumo do processamento não satisfaz aos requisitos de um processo elementar.

**Gerar um Relatório de Erros**

Determinar se gerar um relatório de erros sem processar a Carga de Dados do Funcionário é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Gerar um Relatório de Erros faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Não. Gerar um Relatório de Erros está intrinsecamente ligado ao processo de atualizaçao e os erros não podem ser detectados a não ser durante esse processamento. Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Não. Gerar um relatório de erros sem processar a Carga de Dados do Funcionário não é uma função auto-contida. O Relatório de Erros não pode ser gerado independentemente do processamento e validação da Carga de Dados do Funcionário. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Gerar um relatório de erros sem processar a Carga de Dados do Funcionário não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, o Relatório de Erros precisa ser produzido a partir do resultado do processamento e da validação da Carga de Dados do Funcionário. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Nenhum dos critérios foi atingido. |

**Conclusão**

Gerar um relatório de erros sem processar a Carga de Dados do Funcionário não satisfaz aos requisitos de um processo elementar.

**Gerar um E-mail de Notificação**

Determinar se gerar um E-mail de Notificação sem processar a Carga de Dados do Funcionário é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Gerar um E-mail de Notificação com o resumo do processamento faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Não. Gerar um E-mail de Notificação está intrisicamente ligado ao processo de atualização e as estatísticas do processamento não podem ser calculadas a não ser duramento esse processamento. Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Não. Gerar um E-mail de Notificação sem processar a Carga de Dados do Funcionário não é uma função auto-contida. As estatísticas do processamento não podem ser calculadas independentemente do processamento da Carga de Dados do Funcionário. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Não. Gerar um E-mail de Notificação sem processar a Carga de Dados do Funcionário não deixa o negócio da aplicação em um estado consistente. Para mantê-lo em estado consistente, o requisito funcional do usuário deve ser satisfeito sem que haja mais nada a ser feito. Para satisfazer o requisito funcional do usuário, o E-mail de Notificação precisa ser gerado a partir do resultado do processamento da Carga de Dados do Funcionário. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Nenhum dos critérios foi atingido. |

**Conclusão**

Gerar um E-mail de Notificação sem processar a Carga de Dados do Funcionário não satisfaz aos requisitos de um processo elementar.

**Processar a Carga de Dados do Funcionário, Gerar Relatório de Erros e E-mail de Notificação**

Determinar se aceitar a carga de dados de um funcionário, processar a transação, gerar um relatório de erros e enviar um e-mail de notificação é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Processar a Carga de Dados do Funcionário, gerar Relatório de Erros e E-mail de Notificação fazem parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Sim. Processar a Carga de Dados do Funcionário, gerar Relatório de Erros e E-mail de Notificação é uma transação completa. Esses passos não podem ser separados logicamente. |
| - É auto-contido e | Sim. Processar a Carga de Dados do Funcionário, gerar Relatório de Erros e E-mail de Notificação é uma função auto-contida. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Processar a Carga de Dados do Funcionário, gerar Relatório de Erros e E-mail de Notificação deixa o negócio em um estado consistente. Para satisfazer o requisito funcional do usuário, todos os passos precisam ser executados para processar a Carga de Dados do Funcionário |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Todos os critérios para identificar um processo elementar foram satisfeitos conforme demonstrado acima. |

**Conclusão**

Processar a Carga de Dados do Funcionário incluindo a geração do Relatório de Erros e do E-mail de Notificação satisfazem os requisitos funcionais do usuário.

Aceitar a Carga de Dados do Funcionário, processar as transações, gerar o Relatório de Erros e o E-mail de Notificação é um Processo Elementar. Se a carga não for aceita e as transações não forem processadas, os passos “Gerar Relatório de Erros” e “Gerar E-mail de Notificação” não serão relevantes. Todos os passos do processamento precisam ser executados para completar o processo elementar e deixar o negócio da aplicação que está sendo contada em um estado consistente.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
| --- | --- |
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| - Requerem o mesmo conjunto de DERs e | Não. O conjunto de DERs utilizado para Processar a Carga de Dados do Funcionário é diferente de qualquer outro processo elementar. |
| - Requerem o mesmo conjunto de ALRs e | Não. O conjunto de ALRs utilizado para Processar a Carga de Dados do Funcionário é diferente de qualquer outro processo elementar. |
| - Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Não. A lógica de processamento utilizada para Processar a Carga de Dados do Funcionário é diferente de qualquer outro processo elementar. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Conforme discutido anteriormente, não é apropriado subdividir um processo elementar. |

**Conclusão**

O Processamento Batch da Carga de Dados dos Funcionários é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

### Exemplo: Assinalar um Funcionário a uma Função

**Requisitos do Usuário**

Assinalar um funcionário a uma função. Entrar com as informações da funcão assinalada através da entrada das seguintes informações para cada função e funcionário assinalado:

- Data de Efetivação
- Salário
- Avaliação de Desempenho

Para facilitar o assinalamento, o usuário solicitou uma lista de assinalamento de funcionários e/ou uma lista das funções com os funcionários assinalados.

**Janela da Lista de Assinalamentos de Funcionários**

Esta janela exibe a lista de funcionários e as funções assinaladas para cada funcionário.

![Janela AF-1 Lista de Assinalamento de Funcionários (mockup do Sistema de Recursos Humanos) com a legenda dos botões Visualizar, Novo, Editar e Excluir](images/p380-janela-af1-lista-assinalamento-funcionarios.png)

**Janela de Assinalamento de Funcão**

A janela seguinte mostra o assinalamento de um funcionário a uma determinada função (por funcionário).

![Janela AF-3 Iniciar Assinalamento de Função (mockup) com a legenda dos botões OK e Cancelar](images/p381-janela-af3-iniciar-assinalamento-funcao.png)

Se o usuário não entrar com os dados corretamente, é exibida uma mensagem de erro.

**Janela de Exibição da Lista de Assinalamento de Funções**

A próxima janela mostra a lista de funções e os funcionários assinalados para cada função.

![Janela AF-1 Lista das Funções Assinaladas (mockup do Sistema de Recursos Humanos) com a legenda dos botões Visualizar, Novo, Editar e Excluir](images/p382-janela-af1-lista-funcoes-assinaladas.png)

**Janela de Assinalamento de um Funcionário a uma Função**

A janela abaixo mostra o assinalamento de um funcionário a uma função (por função).

![Janela AF-3 Iniciar Assinalamento de Funcionário (mockup) com a legenda dos botões OK e Cancelar](images/p383-janela-af3-iniciar-assinalamento-funcionario.png)

Se o usuário não entrar com os dados corretamente, é exibida uma mensagem de erro.

**Lista de Assinalamento de Funcionários**

Determinar se Listar os Assinalamentos por Funcionário é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Listar os Assinalamentos por Funcionário faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Sim. Listar os Assinalamentos por Funcionário é uma transação completa. É uma função logicamente independente. |
| - É auto-contido e | Sim. Listar os Assinalamentos por Funcionário é uma função auto-contida. Listar os Assinalamentos por Funcionário é executada independentemente de assinalar um funcionário a uma função. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Listar os Assinalamentos por Funcionário deixa o negócio de uma aplicação em um estado consistente. O requisito funcional do usuário foi totalmente satisfeito e não há mais nada necessário a ser feito. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Listar os Assinalamentos por Funcionário satisfaz todos os critérios acima. |

**Conclusão**

Listar os Assinalamentos por Funcionário satisfaz os requisitos de um processo elementar.

**Assinalar Funcionário a uma Funcão (por Funcionário)**

Determinar se Assinalar Funcionário a uma Funcão (por Funcionário) é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Assinalar Funcionário a uma Funcão (por Funcionário) faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Sim. Assinalar Funcionário a uma Funcão (por Funcionário) é uma transação completa. É uma função logicamente independente. |
| - É auto-contido e | Sim. Assinalar Funcionário a uma Funcão (por Funcionário) é uma função auto-contida. Assinalar Funcionário a uma Funcão (por Funcionário) é executada independentemente de Listar os Assinalamentos dos Funcionários. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Assinalar Funcionário a uma Funcão (por Funcionário) deixa o negócio de uma aplicação em um estado consistente. O requisito funcional do usuário foi totalmente satisfeito e não há mais nada necessário a ser feito. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Assinalar Funcionário a uma Funcão (por Funcionário) satisfaz todos os critérios acima. |

**Conclusão**

Assinalar Funcionário a uma Funcão (por Funcionário) satisfaz os requisitos de um processo elementar.

**Listar as Funções Assinaladas**

Determinar se Listar as Funções Assinaladas é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Listar as Funções Assinaladas faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Sim. Listar as Funções Assinaladas é uma transação completa. É uma função logicamente independente. |
| - É auto-contido e | Sim. Listar as Funções Assinaladas é uma função auto-contida. Listar as Funções Assinaladas é executado independentemente de assinalar um funcionário a uma determinada função. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Listar as Funções Assinaladas deixa o negócio de uma aplicação em um estado consistente. O requisito funcional do usuário foi totalmente satisfeito e não há mais nada necessário a ser feito. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Listar as Funções Assinaladas satisfaz todos os critérios acima. |

**Conclusão**

Listar as Funções Assinaladas satisfaz os requisitos de um processo elementar.

**Assinalar Funcionário a uma Função (por Função)**

Determinar se Assinalar Funcionário a uma Função (por Função) é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Identificar o Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Assinalar Funcionário a uma Função (por Função) faz parte dos requisitos funcionais do usuário. |
| - Constitui uma transação completa | Sim. Assinalar Funcionário a uma Função (por Função) é uma transação completa. É uma função logicamente independente. |
| - É auto-contido e | Sim. Assinalar Funcionário a uma Função (por Função) é uma função auto-contida Assinalar Funcionário a uma Função (por Função) é executada independentemente de Listar as Funções Assinaladas. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. Assinalar Funcionário a uma Função (por Função) deixa o negócio da aplicação em um estado consistente. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Assinalar Funcionário a uma Função (por Função) satisfaz todos os critérios acima. O requisito funcional do usuário foi totalmente satisfeito e não há mais nada necessário a ser feito. |

**Conclusão**

Assinalar Funcionário a uma Função (por Função) satisfaz os requisitos de um processo elementar.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se os processos elementares Listar os Assinalamentos por Funcionário e Listar as Funções Assinaladas são únicos ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
| --- | --- |
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| - Requerem o mesmo conjunto de DERs e | Sim. O conjunto de DERs utilizado para Listar os Assinalamentos por Funcionário é mesmo do conjunto de DERs utilizado para Listar as Funções Assinaladas. |
| - Requerem o mesmo conjunto de ALRs e | Sim. O conjunto de ALRs utilizado para Listar os Assinalamentos por Funcionário é mesmo do conjunto de ALRs utilizado para Listar as Funções Assinaladas. |
| - Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Sim. O conjunto de lógica de processamento para Listar os Assinalamentos por Funcionário é mesmo que o de Listar as Funções Assinaladas. A única diferença entre eles está na sequência de exibição dos campos e ordem das linhas. Conforme já definido nas Formas de Lógica de Processamento, diferenças na forma de ordenar ou exibir os campos não configura um processo elementar único. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Não há nada a ser separado. |

**Conclusão**

Listar os Assinalamentos por Funcionário e/ou Listar as Funções Assinaladas é um processo elementar único.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se os processos elementares Assinalar Funcionário a uma Função (por Funcionário) e Assinalar Funcionário a uma Função (por Função) são únicos ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
| --- | --- |
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| - Requerem o mesmo conjunto de DERs e | Sim. O conjunto de DERs para Assinalar Funcionário a uma Função (por Funcionário) é o mesmo utilizado para Assinalar Funcionário a uma Função (por Função). |
| - Requerem o mesmo conjunto de ALRs e | Sim. O conjunto de ALRs para Assinalar Funcionário a uma Função (por Funcionário) é o mesmo utilizado para Assinalar Funcionário a uma Função (por Função). |
| - Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Sim. O conjunto de lógica de processamento para Assinalar Funcionário a uma Função (por Funcionário) é mesmo que o Assinalar Funcionário a uma Função (por Funcão). A única diferença entre eles está na sequência de exibição dos atributos na tela. Conforme já definido nas Formas de Lógica de Processamento, diferenças na forma de ordenar ou exibir os atributos não configura um processo elementar único. |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Não há nada a ser separado. |

**Conclusão**

Dois processos elementares únicos foram identificados:

- Listar os Assinalamentos por Funcionário e/ou Listar as Funções Assinaladas
- Assinalar Funcionário a uma Função (por Funcionário) e/ou Assinalar Funcionário a uma Função (por Função)

Quando dois processos elementares similares são comparados e identifica-se que eles contém o mesmo conjunto de DERs, ALRs e Lógica de Processamento, eles são identificados como um único processo elementar.

### Exemplo: Processos Elementares Similares

**Requisitos do Usuário**

O usuário que utilize as informações de funcionários requer dois relatórios que são bem similares. Um relatório incluirá o e-mail dos funcionários e será distribuído para a equipe remota que requer comunicação via e-mail ao invés de por telefone. Veja os exemplos de relatórios com seus respectivos detalhamentos.

Todos os dados do relatório vêm do mesmo arquivo lógico exceto o endereço de e-mail que vem de um arquivo lógico diferente que é mantido dentro da mesma aplicação.

**Lista de Funcionários (com Endereço de E-mail)**

![Relatório de exemplo: Lista de Funcionários com a coluna Endereço de E-mail](images/p390-lista-funcionarios-com-email.png)

**Lista de Funcionários (sem Endereço de E-mail)**

![Relatório de exemplo: Lista de Funcionários sem a coluna Endereço de E-mail](images/p390-lista-funcionarios-sem-email.png)

**Lista de Funcionários (sem Endereço de E-mail)**

Determinar se Exibir a Lista de Funcionários (Sem Endereço de E-mail) é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Regras de Contagem de Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Exibir a Lista de Funcionários (sem Endereço de E-mail) é um requisito funcional do usuário. |
| - Constitui uma transação completa | Sim. Exibir a Lista de Funcionários (sem Endereço de E-mail) é uma transação completa que atende a um grupo de usuários. |
| - É auto-contido e | Sim. Exibir a Lista de Funcionários (sem Endereço de E-mail) é significativo por si só. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. O negócio é mantido em um estado consistente quando a Lista de Funcionários (Sem o Endereço de E-mail) é criada. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Exibir a Lista de Funcionários (Sem o Endereço de E-mail) satisfaz a todos os critérios acima. |

**Conclusão**

Exibir a Lista de Funcionários (Sem o Endereço de E-mail) satisfaz aos requisitos de um processo elementar.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
| --- | --- |
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| - Requerem o mesmo conjunto de DERs e | Sim. A Lista de Funcionários (Sem o Endereço de E-mail) requer um conjunto de DERs diferente da Lista de Funcionários (Com o Endereço de E-mail). |
| - Requerem o mesmo conjunto de ALRs e | Sim. A Lista de Funcionários (Sem o Endereço de E-mail) requer um conjunto de ALRs diferente da Lista de Funcionários (Com o Endereço de E-mail). |
| - Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Sim. A Lista de Funcionários (Sem o Endereço de E-mail) requer um conjunto de lógica de processamento diferente da Lista de Funcionários (Com o Endereço de E-mail). |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Não há nada a ser separado. |

**Conclusão**

Exibir a Lista de Funcionários (Sem o Endereço de E-mail) é um processo elementar único em relação a todos os outros processos elementares que já foram identificados.

**Lista de Funcionários (Com Endereço de E-mail)**

Determinar se Exibir a Lista de Funcionários (Com Endereço de E-mail) é um processo elementar ou não. A tabela abaixo ilustra a análise realizada:

| Regras de Contagem de Processo Elementar | A Regra se Aplica? |
| --- | --- |
| 1. Compor e/ou decompor os Requisitos Funcionais do Usuário na menor unidade de uma atividade, que satisfaça todos os critérios abaixo: | |
| - É significativo para o usuário | Sim. Exibir a Lista de Funcionários (Com Endereço de E-mail) é um requisito funcional do usuário. |
| - Constitui uma transação completa | Sim. Exibir a Lista de Funcionários (Com Endereço de E-mail) é uma transação completa que atende a um grupo de usuários. |
| - É auto-contido e | Sim. Exibir a Lista de Funcionários (Com Endereço de E-mail) é significativo por si só. |
| - Deixa o negócio da aplicação que está sendo contada em um estado consistente. | Sim. O negócio é mantido em um estado consistente quando a Lista de Funcionários (Com o Endereço de E-mail) é criada. |
| 2. Identificar um processo elementar para cada unidade de atividade identificada que satisfaça todos os critérios acima. | Exibir a Lista de Funcionários (Com o Endereço de E-mail) satisfaz a todos os critérios acima. |

**Conclusão**

Exibir a Lista de Funcionários (Com o Endereço de E-mail) satisfaz aos requisitos de um processo elementar.

**Determinar Processos Elementares Únicos**

A tabela abaixo mostra a análise realizada para determinar se o processo elementar é único ou não.

| Determinar Processos Elementares Únicos | A Regra se Aplica? |
| --- | --- |
| 1. Quando comparado com um Processo Elementar já identificado, contar dois Processos Elementares similares como o mesmo Processo Elementar, se ambos: | |
| - Requerem o mesmo conjunto de DERs e | Sim. A Lista de Funcionários (Com o Endereço de E-mail) requer um conjunto de DERs diferente da Lista de Funcionários (Sem o Endereço de E-mail). |
| - Requerem o mesmo conjunto de ALRs e | Sim. A Lista de Funcionários (Com o Endereço de E-mail) requer um conjunto de ALRs diferente da Lista de Funcionários (Sem o Endereço de E-mail). |
| - Requerem o mesmo conjunto de lógica de processamento para completar o processo elementar | Sim. A Lista de Funcionários (Com o Endereço de E-mail) requer um conjunto de lógica de processamento diferente da Lista de Funcionários (Sem o Endereço de E-mail). |
| 2. Não separar um processo elementar com múltiplas formas de lógicas de processamento em múltiplos processos elementares. | Não há nada a ser separado. |

**Conclusão**

O processo elementar Exibir a Lista de Funcionários (Com o Endereço de E-mail) é único em relação a todos os outros processos elementares identificados.

Dois processos são determinados para satisfazer os critérios de um processo elementar, então são comparados entre si para determinar se eles contêm DERs, ALRs e Lógicas de Processamento diferentes.

Quando os dois processos elementares são comparados e determina-se que eles contêm DERs, ALRs ou Lógica de Processamento diferentes, eles são identificados como processos elementares separados, se eles são especificados como requisitos funcionais distintos pelo usuário.

Dois processos elementares únicos são identificados:

- Exibir a Lista de Funcionários (Sem o Endereço de E-mail) e
- Exibir a Lista de Funcionários (Com o Endereço de E-mail)

## Exemplos de Contagem de EE

**Introdução**

Esta seção utiliza uma aplicação de Recursos Humanos (RH) para ilustrar os procedimentos de contagem de entradas externas (EE). Além desta seção, os exemplos estão descritos nos Estudos de Casos que é parte da documentação suplementar do IFPUG.

**Conteúdo**

Esta seção inclui os seguintes exemplos:

| Topic | Page |
|---|---|
| Descrição Geral dos Exemplos de Contagem de EE | 2-64 |
| Exemplo: Informações de Controle de Relatório | 2-65 |
| Exemplo: Tela de Entrada | 2-69 |
| Exemplo: Processamento *Batch* com Múltiplas EEs e EEs Duplicadas | 2-72 |
| Exemplo: Correção de Transações Suspensas | 2-75 |
| Exemplo: EE com Múltiplos Arquivos Lógicos Referenciados | 2-78 |
| Exemplo: Conversão de Dados | 2-82 |
| Exemplo: Referenciando Dados a partir de Outra Aplicação | 2-85 |
| Exemplo: EE com Tela de Saída – 1 | 2-87 |
| Exemplo: EE com Tela de Saída – 1 | 2-90 |
| Exemplo: EE com Atributos Recuperados de um AIE | 2-93 |
| Exemplo: EE Excluir | 2-99 |
| Exemplo: Incluir Nível de Segurança de Janelas | 2-102 |

### Descrição Geral dos Exemplos de Contagem de EE

Os exemplos de entradas externas estão descritos na tabela abaixo:

| Exemplo | Descrição Geral | Página |
|---|---|---|
| Informações de Controle de Relatórios | Este exemplo mostra as informações de controle utilizadas para impressão de relatórios. | 2-65 |
| Tela de Entrada | Este exemplo ilustra a contagem de uma transação online via tela de entrada. | 2-69 |
| Processamento *Batch* com Múltiplas EEs e EEs Duplicadas | Este exemplo mostra a contagem de um arquivo de transação com múltiplos tipos ou tipos de registros formatados. | 2-72 |
| Correção de Transações Suspensas | Este exemplo ilustra a contagem da correção de transações suspensas, registradas em um arquivo de transações suspensas durante um processamento batch de adição ou atualização de funções. | 2-75 |
| EE com Múltiplos Arquivos Lógicos Referenciados | Este exemplo ilustra o uso de um diagrama de fluxo de dados para contar uma entrada externa que contém múltiplos arquivos lógicos referenciados (ALRs). | 2-78 |
| Conversão de Dados | Este exemplo ilustra a contagem do processo de conversão de um grupo de dados para um novo formato com elementos de dados adicionais. | 2-82 |
| Referenciando Dados a partir de Outra Aplicação | Este exemplo mostra como um arquivo de interface externa (discutida no Capítulo 6 da Parte 2) não é contado como uma entrada externa. | 2-85 |
| EE com Tela de Saída – 1 | Este exemplo ilustra uma EE com a exibição de um campo calculado. | 2-87 |
| EE com Tela de Saída – 2 | Este exemplo ilustra uma EE com a exibição de um campo calculado e CEs embutidas. | 2-90 |
| EE com Atributos Recuperados de um AIE | Este exemplo ilustra uma EE com atributos que são recuperados de um AIE que não atravessa a fronteira da aplicação. | 2-93 |
| EE Excluir | Este exemplo ilustra a contagem de DERs de uma transação de exclusão. | 2-99 |
| Incluir Nível de Segurança de Janelas | Este exemplo ilustra a contagem de funcionalidade responsável por manter uma aplicação de segurança. | 2-102 |

### Exemplo: Informações de Controle de Relatório

**Requisitos do Usuário**

O usuário requer a habilidade para controlar como e onde os relatórios de assinalamentos serão impressos. A lista abaixo mostra os requisitos específicos do usuário para a criação do relatório:

1. Controlar os seguintes aspectos de processamento do relatório:
   - Classificação (*Sort*)
   - Porta da impressora
   - Tipo de saída (i.e., microficha e/ou papel)
2. Salvar os controles utilizados na criação do relatório de funções assinaladas.
3. Gerar e salvar as mudanças.
4. Enviar uma mensagem para confirmar que os controles usados para criação dos relatórios de funções assinaladas foram adicionados e/ou modificados, e que os mesmos estão sendo gerados.

**Nota:** Este exemplo mostra apenas o requisito para adicionar o conjunto de informações de controle do relatório de assinalamentos. O Estudo de Casos ilustra a contagem do requisito completo do usuário.

**Exemplo da Tela**

A tela abaixo é utilizada para Estabelecer os Controles para geração do Relatório das Funções Assinaladas.

![Tela do Sistema de Recursos Humanos: janela "Relatório das Funções Assinaladas" com opções de Classificação, Impressora e cópias, e legenda dos botões JR-1](images/p398-tela-controle-relatorio.png)

**Passo 1 — Identificar o Processo Elementar**

| | |
|---|---|
| A Função de Transação satisfaz os requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é Único ou não**

| | |
|---|---|
| A Função de Transação é única relação aos outros processos elementares? | Sim. Nenhum outro processo elementar executa essa função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
|---|---|
| 1. Possui como intenção primária: | |
| • Manter um ou mais ALIs ou | Sim. Os dados que entram na fronteira da aplicação são utilizados eventualmente como dados de controle. São dados de negócio, armazenados no ALI de Controle de Relatório. |
| • Alterar o comportamento da aplicação. | Não. |
| 2. Inclui a lógica de processamento para aceitar dados ou informações de controle que entram na fronteira da aplicação. | Sim. Informações de Controle de Relatórios entram na fronteira da aplicação. |

**Conclusão**

Estabelecer os Controles para Geração do Relatório das Funções Assinaladas é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI de Controle de Relatório é lido e mantido, mas é contado apenas uma vez. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo não repetido, reconhecido como único pelo usuário, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Classificação dos Dados (Sort), Porta da Impressora, Tipo de Saída. |
| 2. Contar apenas um DER por função de transação para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam múltiplas mensagens. | Mensagem ao Usuário. |
| 3. Contar apenas um DER por função de transação para a habilidade de iniciar uma ou mais ações, mesmo que existam múltiplas formas para iniciá-la(s). | Botão de Comando OK. |
| 4. Não contar os seguintes itens como DERs: | |
| • Literais, tais como: títulos de relatórios, identificadores de telas, cabeçalhos de colunas e títulos de atributos. | Nenhum dos literais existentes na tela de entrada das Informações de Controle é contado. |
| • *Application generated stamps*, tais como: atributos de data e hora. | Não existe nenhum item deste tipo. |
| • Variáveis de paginação, tais como: número de páginas e informações de posicionamento, i.e., 'Linhas 37 a 54 de 211' | Não existe nenhum item deste tipo. |
| • Ajudas de navegação, tais como: a habilidade para navegar dentro de uma lista utilizando atalhos como "anterior", "próximo", "primeiro", "último" e suas representações gráficas equivalentes. | Não existe nenhum item deste tipo. |
| • Atributos gerados dentro da fronteira da aplicação por uma função de transação e armazenados em um ALI sem sair da fronteira. | Não existe nenhum item deste tipo. |
| • Atributos recuperados ou referenciados de um ALI ou AIE para serem usados no processamnto sem sair da fronteira. | Não existe nenhum item deste tipo. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
|---|---|
| 1 ALR e 5 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
|---|---|
| O Tamanho Funcional é de 1 EE de Complexidade Baixa | 3 PF |

### Exemplo: Tela de Entrada

**Requisitos do Usuário**

O usuário requer a habilidade de:
- Incluir as informações de uma Função em modo *online*
- Gerar uma mensagem de erro e destacar os campos incorretos de forma que o erro possa ser corrigido em modo *online*.
- Salvar as informações da função que foi incluída.

**Exemplo da Tela**

A tela de Dados de Função abaixo é utilizada para Incluir uma Nova Função.

![Tela "Dados da Função" (terminal) para incluir uma nova função, com os campos Código da Função, Nome da Função, Faixa Salarial e linhas de Descrição da Função](images/p402-tela-dados-funcao.png)

| | | | |
|---|---|---|---|
| Entra: | Retorna para a tela anterior. | F1: | Mostra a tela de ajuda no nível do campo ou da tela. |
| Ação 7: | Mostra os dados da função anterior, caso exista | F7: | Sobe 10 linhas de descrição. |
| Ação 8: | Mostra os dados da próxima função, caso exista. | F8: | Desce 10 linhas de descrição. |
| Ação 9: | Salva os dados da função informados. | F12: | Retorna para a tela anterior. |

**Passo 1 — Identificar o Processo Elementar**

| | |
|---|---|
| A Função de Transação satisfaz os requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é Único ou não**

| | |
|---|---|
| A Função de Transação é única relação aos outros processos elementares? | Sim. Nenhum outro processo elementar executa essa função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
|---|---|
| 1. Possui como intenção primária: | |
| • Manter um ou mais ALIs ou | Sim. O ALI de Funções é mantido. |
| • Alterar o comportamento da aplicação. | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui a lógica de processamento para aceitar dados ou informações de controle que entram na fronteira da aplicação. | Sim. A informação da Função entra na fronteira para que o ALI de Funções seja mantido. |

**Conclusão**

Incluir uma Nova Função é uma EE.

Consultar os Estudos de Casos para ver como os requisitos de atualizar e excluir e suas respectivas telas são contados.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI de Funções é mantido e lido, mas é contado apenas uma vez. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo não repetido, reconhecido como único pelo usuário, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Código da Função, Nome da Função, Faixa Salarial, Descrição da Função (repetido). O Número de Linhas da Descrição da Função existe apenas por razões técnicas e não deveria ser contado como um DER. |
| 2. Contar apenas um DER por função de transação para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam múltiplas mensagens. | Mensagens de Erro. |
| 3. Contar apenas um DER por função de transação para a habilidade de iniciar uma ou mais ações, mesmo que existam múltiplas formas para iniciá-la(s). | Tecla de Ação Incluir. |
| 4. Não contar os seguintes itens como DERs: | |
| • Literais. | Literais como "Código da Função" não são contados. |
| • *Application generated stamps* | Não existe nenhum item deste tipo. |
| • Variáveis de paginação | Não existe nenhum item deste tipo. |
| • Teclas de Navegação | F7 e F8. |
| • Atributos gerados sem sair da fronteira e | Não existe nenhum item deste tipo. |
| • Atributos recuperados ou referenciados de um ALI ou AIE para serem usados no processamnto sem sair da fronteira. | Não existe nenhum item deste tipo. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
|---|---|
| 1 ALR e 6 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
|---|---|
| O Tamanho Funcional é de 1 EE de Complexidade Baixa | 3 PF |

### Exemplo: Processamento Batch com Múltiplas EEs e EEs Duplicadas

**Requisitos do Usuário**

O usuário requer a habilidade de:
- Incluir as informações de uma Função em modo *batch*
- Atualizar as informações de uma Função em modo *batch*

**Nota:** O foco deste exemplo é incluir uma Função em modo *batch*. O exemplo anterior apresentou a mesma função só que em modo *online*. Os Estudos de Casos ilustra a contagem de todos os requisitos do usuário para Incluir uma Função, tanto em modo *online* como em *batch*.

**Requisitos de Construção**

Ficou decidido que, durante o processamento *batch*, qualquer Função que não for atualizada com sucesso, será gravada em um arquivo de funções suspensas, que será mantido separadamente. (Veja o próximo exemplo).

**Formato dos Registros**

O diagrama abaixo apresenta o formato dos registros para este exemplo:

![Formato dos registros do processamento batch: régua de posições e cinco registros de exemplo (ADD/CHG) com campos delimitados por barra](images/p405-formato-registros.png)

**Descrição dos Registros**

A tabela abaixo inclui a descrição de cada tipo de registro.

| Registro | Posição | Descrição |
|---|---|---|
| 01 | 1-3 | Tipo de Transação |
| | 4-5 | Tipo de Registro |
| | 6-10 | Código da Função |
| | 11-45 | Nome da Função |
| | 46-47 | Faixa Salarial |
| 02 | 1-3 | Tipo de Transação |
| | 4-5 | Tipo de Registro |
| | 6-10 | Código da Função |
| | 11-12 | Número de Linhas da Descrição |
| | 13-41 | Linha da Descrição |

Onde os Tipos de Registros são:

| | |
|---|---|
| 01 | Incluir registro para uma nova função |
| 02 | Incluir registro para as descrições de uma nova função. |

**Passo 1 — Identificar o Processo Elementar – Transação Tipo 01**

| | |
|---|---|
| A Função de Transação satisfaz os requisitos de um Processo Elementar? | Não. Uma função sem a descrição não é significativa para o usuário. |

**Passo 1 — Identificar o Processo Elementar – Transação Tipo 02**

| | |
|---|---|
| A Função de Transação satisfaz os requisitos de um Processo Elementar? | Não. A descrição não pode existir sem a função a que está associada. O dado ficaria inconsistente. |

**Passo 1 — Identificar o Processo Elementar – Transação Tipo 1 + 2**

| | |
|---|---|
| A Função de Transação satisfaz os requisitos de um Processo Elementar? | Sim. Função e sua descrição são significativas para o usuário. |

**Passo 2 — Determinar se o Processo Elementar é Único ou não**

| | |
|---|---|
| A Função de Transação é única relação aos outros processos elementares? | Sim. Incluir uma Função em modo *Batch* (Transação Tipo 1 + 2) é similar à transação de Incluir uma Função em modo *Online*. Entretanto, Incluir uma função em modo *Batch* mantém um ALI adicional (Funções Suspensas), o que a inclusão de uma função em modo *online* não faz. |

**Passo 3 — Classificar cada Processo Elementar – Transação Tipo 1 + 2**

| Regras de Contagem de EE | A Regra se Aplica? |
|---|---|
| 1. Possui como intenção primária: | |
| • Manter um ou mais ALIs ou | Sim. Incluir Função tem a intenção primária de manter o ALI de Funções. |
| • Alterar o comportamento da aplicação. | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui a lógica de processamento para aceitar dados ou informações de controle que entram na fronteira da aplicação. | Sim. Incluir Função inclui lógica de processamento para aceitar as informações da Função. |

**Conclusão**

Incluir uma Função (Transação Tipo 1 + 2) é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI de Funções é mantido e lido, mas é contado apenas uma vez. O ALI de Funções Suspensas é mantido. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo não repetido, reconhecido como único pelo usuário, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Código da Função, Nome da Função, Faixa Salarial, Descrição da Função (repetido).<br>Tipo de Transação e o Número de Linhas da Descrição da Função existem apenas por razões técnicas e não deveriam ser contados como um DER. |
| 2. Contar apenas um DER por função de transação para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam múltiplas mensagens. | Não se aplica. Os Erros são armazenados em arquivo de registros suspensos. |
| 3. Contar apenas um DER por função de transação para a habilidade de iniciar uma ou mais ações, mesmo que existam múltiplas formas para iniciá-la(s). | Tipo de Transação. |
| 4. Não contar os seguintes itens como DERs: | |
| • Literais. | Não existe nenhum. |
| • *Application generated stamps* | Não existe nenhum. |
| • Variáveis de paginação | Não existe nenhum. |
| • Teclas de Navegação | Não existe nenhum. |
| • Atributos gerados sem sair da fronteira e | Não existe nenhum. |
| • Atributos recuperados ou referenciados de um ALI ou AIE para serem usados no processamnto sem sair da fronteira. | Não existe nenhum. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
|---|---|
| 2 ALRs e 5 DERs | Complexidade é Média |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
|---|---|
| O Tamanho Funcional é de 1 EE de Complexidade Média | 4 PF |

### Exemplo: Correção de Transações Suspensas

**Requisitos do Usuário**

Foi decidido que qualquer função cuja atualização não for bem sucedida durante o processamento *batch* deverá ser armazenada em um arquivo de transações suspensas. O usuário requer uma tela para acessar e editar as transações incorretas.

**Nota:** O foco deste exemplo é apenas em relação ao requisito de corrigir transações suspensas. Os Estudos de Casos ilustram a contagem do requisito completo do usuário.

**Diagrama de Fluxo de Dados**

O diagrama abaixo apresenta o fluxo de dados deste exemplo:

![Diagrama de fluxo de dados da correção de transações suspensas: processos (Visualizar/Atualizar/Excluir Funções Suspensas, Incluir/Atualizar Função em modo Batch, Exibir/Incluir Faixas Salariais, Visualizar Funções), armazenamentos (FUNÇÃO SUSPENSA, FAIXA SALARIAL, FUNÇÃO) e legenda](images/p408-dfd-transacoes-suspensas.png)

**Passo 1 — Identificar o Processo Elementar**

| | |
|---|---|
| A Função de Transação satisfaz os requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é Único ou não**

| | |
|---|---|
| A Função de Transação é única relação aos outros processos elementares? | Sim. Nenhum outro processo elementar executa essa função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
|---|---|
| 1. Possui como intenção primária: | |
| • Manter um ou mais ALIs ou | Sim. Corrigir as Transações Suspensas de Função possui como intenção primária, manter o ALI de Funções Suspensas. |
| • Alterar o comportamento da aplicação. | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui a lógica de processamento para aceitar dados ou informações de controle que entram na fronteira da aplicação. | Sim. Incluir Função possui lógica de processamento para aceitar as informações de uma Função. |

**Conclusão**

Corrigir as Transações Suspensas de Função é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI de Funções Suspensas é mantido e referenciado, mas é contado apenas uma vez. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo não repetido, reconhecido como único pelo usuário, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Tipo de Transação, Código da Função, Nome da Função, Faixa Salarial, Descrição da Função (repetido).<br>O Tipo de Registro o Número de Linhas da Descrição da Função existem apenas por razões técnicas e, portanto, não são contados como um DER. Todos os outros campos são reconhecidos pelo usuário. |
| 2. Contar apenas um DER por função de transação para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam múltiplas mensagens. | Não existe nenhuma mensagem. |
| 3. Contar apenas um DER por função de transação para a habilidade de iniciar uma ou mais ações, mesmo que existam múltiplas formas para iniciá-la(s). | Tecla Entra. |
| 4. Não contar os seguintes itens como DERs: | |
| • Literais. | Não existe nenhum. |
| • *Application generated stamps* | Não existe nenhum. |
| • Variáveis de paginação | Não existe nenhum. |
| • Teclas de Navegação | Não existe nenhum. |
| • Atributos gerados sem sair da fronteira e | Não existe nenhum. |
| • Atributos recuperados ou referenciados de um ALI ou AIE para serem usados no processamnto sem sair da fronteira. | Não existe nenhum. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
|---|---|
| 1 ALR e 6 DERs | Complexidade é Baixa. |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
|---|---|
| O Tamanho Funcional é de 1 EE de Complexidade Baixa | 3 PF |

### Exemplo: EE com Múltiplos Arquivos Lógicos Referenciados

**Requisitos do Usuário**

O usuário requer a habilidade de Incluir Assinalamentos de Função.

**Nota:** O foco deste exemplo é mostrar apenas incluir assinalamentos de função. Os Estudos de Casos ilustram a contagem do requisito completo do usuário.

**Exemplo da Tela**

O diagrama a seguir mostra um exemplo da janela de assinalamento de função a um funcionário.

![Janela "Iniciar Assinalamento de Função" (tela AF-3) do Sistema de Recursos Humanos, com campos do funcionário e da função e legenda dos botões OK/Cancelar](images/p411-tela-assinalamento-funcao.png)

**Diagrama de Fluxos de Dados**

O diagrama abaixo mostra o fluxo de dados para o processo de assinalamento de funções.

![Diagrama de fluxo de dados do processo de assinalamento de funções: processos 3.1 a 3.8 (Assinalar Funcionário à Função, Transferir Funcionário, Excluir/Consultar Assinalamento da Função, Processar Ajuda), armazenamentos (FUNÇÃO, FUNÇÕES ASSINALADAS, FUNCIONÁRIO/DEPENDENTES, TELA DE AJUDA) e legenda](images/p412-dfd-assinalamento-funcao.png)

**Passo 1 — Identificar o Processo Elementar**

| | |
|---|---|
| A Função de Transação satisfaz os requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é Único ou não**

| | |
|---|---|
| A Função de Transação é única relação aos outros processos elementares? | Sim. Nenhum outro processo elementar executa essa função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
|---|---|
| 1. Possui como intenção primária: | |
| • Manter um ou mais ALIs ou | Sim. Incluir Assinalamentos de Função tem como intenção primária, manter o ALI de Funções Assinaladas. |
| • Alterar o comportamento da aplicação. | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui a lógica de processamento para aceitar dados ou informações de controle que entram na fronteira da aplicação. | Sim. Incluir o Assinalamento de Função possui lógica de processamento para aceitar as informações de Assinalamento de Função. |

**Conclusão**

Incluir Assinalamentos de Função é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI Funcionário é lido para garantir que o funcionário existe.<br>O ALI de Funções é lido para garantir que a função existe.<br>O ALI de Funções Assinaladas é mantido e lido, mas é contado apenas uma vez. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo não repetido, reconhecido como único pelo usuário, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Nome do Funcionário, Identificação do Funcionário, Localização, Unidade de Negócio, Código da Função, Nome da Função, Data de Efetivação, Salário, Avaliação de Desempenho.<br>A tela exibe o Nome do Funcionário com três campos físicos. Entretanto, o diagrama de fluxo de dados trato como um único elemento de dados. Baseado na revisão da funcionalidade da aplicação, o Nome do Funcionário sempre é usado na sua totalidade. Não existe nenhuma tela ou relatório que utilize parte do nome separadamente. Por isto, será contado como um único DER. |
| 2. Contar apenas um DER por função de transação para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam múltiplas mensagens. | Mensagens de Erro. |
| 3. Contar apenas um DER por função de transação para a habilidade de iniciar uma ou mais ações, mesmo que existam múltiplas formas para iniciá-la(s). | Botão de Comando OK. |
| 4. Não contar os seguintes itens como DERs: | |
| • Literais. | Literais, tais como: "Código da Função" não são contados. |
| • *Application generated stamps* | Não existe nenhum. |
| • Variáveis de paginação | Não existe nenhum. |
| • Teclas de Navegação | Não existe nenhum. |
| • Atributos gerados sem sair da fronteira e | Não existe nenhum. |
| • Atributos recuperados ou referenciados de um ALI ou AIE para serem usados no processamnto sem sair da fronteira. | Não existe nenhum. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
|---|---|
| 3 ALRs e 11 DERs | Complexidade é Alta |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
|---|---|
| O Tamanho Funcional é de 1 EE de Complexidade Alta | 6 PF |

### Exemplo: Conversão de Dados

**Requisitos do Usuário**

O usuário comprou um novo pacote de uma aplicação de RH. Ele requer a habilidade para Conversão das Informações do Funcionário pela migração das informações existentes dos funcionários (Nome, Identificação do Funcionário, Número de Dependentes, Código de Tipo, Nível de Supervisão, Taxa Padrão por Hora, Unidade de Negócio, Nome do Local) para a nova aplicação.

O sistema antigo não permitia ao usuário a manutenção das informações dos dependentes dos funcionários. As informações dos dependentes poderão ser criadas após a migração dos dados dos funcionários existentes para a nova aplicação.

**Nota:** O Capítulo 5 da Parte 3 (Atividades de Conversão de Dados) explica como a conversão de dados é mensurada.

**Diagramas de Dados**

O diagrama abaixo mostra os dados das aplicações de RH nova e antiga:

![Modelos de dados das aplicações de RH antiga e nova: entidade FUNCIONÁRIO com subtipos FUNC_ASSALARIADO e FUNC_HORISTA; a Nova Aplicação de RH inclui a entidade atributiva Dependente; com legenda de notação](images/p415-modelo-dados-conversao.png)

**Passo 1 — Identificar o Processo Elementar**

| | |
|---|---|
| A Função de Transação satisfaz os requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é Único ou não**

| | |
|---|---|
| A Função de Transação é única relação aos outros processos elementares? | Sim. Nenhum outro processo elementar executa essa função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
|---|---|
| 1. Possui como intenção primária: | |
| • Manter um ou mais ALIs ou | Sim. O ALI Funcionário é mantido. |
| • Alterar o comportamento da aplicação. | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui a lógica de processamento para aceitar dados ou informações de controle que entram na fronteira da aplicação. | Sim. Dados do arquivo de funcionários da aplicação de RH antiga atravessam a fronteira da aplicação. |

**Conclusão**

Conversão das Informações do Funcionário é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI Funcionários é mantido e lido, mas é contado apenas uma vez. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo não repetido, reconhecido como único pelo usuário, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Nome, Identificação do Funcionário, Número de Dependentes, Código de Tipo, Nível de Supervisão, Taxa Padrão por Hora, Unidade de Negócio, Nome do Local. |
| 2. Contar apenas um DER por função de transação para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam múltiplas mensagens. | Não existe nenhum. |
| 3. Contar apenas um DER por função de transação para a habilidade de iniciar uma ou mais ações, mesmo que existam múltiplas formas para iniciá-la(s). | Não existe nenhum. |
| 4. Não contar os seguintes itens como DERs: | Não existe nenhum. |
| • Literais. | Não existe nenhum. |
| • *Application generated stamps* | Não existe nenhum. |
| • Variáveis de paginação | Não existe nenhum. |
| • Teclas de Navegação | Não existe nenhum. |
| • Atributos gerados sem sair da fronteira e | Não existe nenhum. |
| • Atributos recuperados ou referenciados de um ALI ou AIE para serem usados no processamnto sem sair da fronteira. | Não existe nenhum. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
|---|---|
| 1 ALR e 8 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
|---|---|
| O Tamanho Funcional é de 1 EE de Complexidade Baixa | 3 PF |

### Exemplo: Referenciando Dados a partir de Outra Aplicação

**Requisitos do Usuário**

O usuário requer que a aplicação de Recursos Humanos tenha as seguintes capacidades:
- Todos os funcionários horistas devem ser pagos em Dólares Americanos.
- Quando as informações do funcionário são incluídas ou modificadas, a aplicação de Recursos Humanos deve acessar a aplicação de Moedas Correntes para recuperar a taxa de conversão da moeda. Depois de recuperar a taxa de conversão da moeda, a aplicação de RH converte a taxa padrão de horas local do funcionário para a taxa de horas em Dólares Americanos, utilizando o seguinte cálculo:

(Taxa Padrão de Horas) / (Taxa de Conv. Moeda) = Taxa de Horas em Dólares Americanos

**Diagrama de Dados**

O diagrama a seguir apresenta o relacionamento para este exemplo.

![Modelo de dados relacionando a aplicação Moeda Corrente (entidade TAXA DE CONVERSÃO) à aplicação RH (FUNCIONÁRIO com subtipos ASSALARIADO e HORISTA e entidade atributiva DEPENDENTE)](images/p418-modelo-dados-moeda.png)

![Legenda da notação do modelo de dados: Tipo de Entidade, Tipo de Entidade Atributiva, Entidade Subtipo, Relacionamento 1-N Mandatório, Relacionamento 1-N Opcional](images/p419-legenda-modelo-dados.png)

**Informação de Conversão de Moeda**

A informação de conversão de moeda inclui

MOEDA

- Taxa_Base_Conversão_Moeda
- Moeda

**Passo 1 — Identificar o Processo Elementar**

| | |
|---|---|
| A Função de Transação atende os requisitos de um Processo Elementar? | Não. Dados de referência são significativos apenas quando associados à inclusão de um funcionário. |

**Conclusão**

Não existe uma EE para recuperação das informações de conversão de moeda. Veja os exemplos de contagem de AIE nos Exemplos de Contagem de Funções de Dados para verificar porque as informações de conversão de moeda podem ser contadas como AIE quando as informações do funcionário são incluídas ou modificadas. Incluir ou Modificar informações de Funcionário são contados como EEs.

### Exemplo: EE com Tela de Saída – 1

**Requisitos do Usuário**

O usuário requer a habilidade de Entrar com uma Transação de Vendas para um cliente. O custo de cada item e o total da transação devem ser exibidos para revisão, antes de a informação ser salva. Se qualquer erro ocorrer, uma mensagem de erro apropriada deve ser exibida.

**Exemplo de Tela**

A seguinte tela de transação de vendas é uma simplificação para ilustrar como os campos de saída são contados. O usuário entra com o nome do cliente e a data da transação. Quando cada item e quantidade requerida são incluídos, o sistema calcula e mostra os custos como apresentado abaixo.

```
                             Transação de Vendas

 Nome do Cliente: _______________________________________________
 Data da Transação: ________



     Item                       Qtd   Custo Item    Custo Total Item
     __________________________ _____ $____.__      $____.__
     __________________________ _____ $____.__      $____.__
     __________________________ _____ $____.__      $____.__
     __________________________ _____ $____.__      $____.__
     __________________________ _____ $____.__      $____.__
     __________________________ _____ $____.__      $____.__

                                          Sub Total $____.__
                                        Taxa Vendas $____.__
                                              Total $____.__

 F1=Salvar
```

**Passo 1 — Identificar o Processo Elementar**

| | |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

| | |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
| --- | --- |
| 1. Possui como intenção primária:<br>• Manter um ou mais ALIs ou | Sim. Entrar com uma Transação de Vendas possui a intenção primária de manter o ALI Transação de Vendas |
| • Alterar o comportamento da aplicação | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui lógica de processamento para aceitar dados ou controle de informação que entra na fronteira da aplicação. | Sim. Entrar com uma Transação de Vendas inclui lógica de processamento para aceitar informação de vendas. |

**Conclusão**

Entrar com uma Transação de Vendas é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI Transação de Vendas é lido e mantido, mas é contado apenas uma vez. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Os seguintes DERs de entrada são contados:<br>Nome do Cliente<br>Data da Transação<br>Item (repetido)<br>Quantidade (repetido)<br><br>Os seguintes DERs de saída são contados:<br>Custo do Item (repetido)<br>Custo Total do Item (repetido)<br>Sub Total da Transação<br>Taxa de Vendas<br>Total da Transação |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Mensagens de Erro. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Tecla F1. |
| 4. Não contar os seguintes itens como DERs:<br>• Literais | Literais como “Item” não são contados |
| • application generated stamps | Não existem. |
| • Variáveis de paginação | Não existem. |
| • Navegação | Não existem. |
| • Atributos gerados sem saída da fronteira e | Não existem. |
| • Atributos recuperados ou referenciados de um ALI ou AIE sem saída da fronteira | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
| --- | --- |
| 1 ALR e 11 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
| --- | --- |
| Tamanho Funcional de 1 EE de Média Complexidade | 3 PF |

### Exemplo: EE com Tela de Saída - 2

**Requisitos do Usuário**

O usuário requer a habilidade de Assinalar uma Função a um funcionário. Para selecionar um funcionário e função, o usuário requer a habilidade de referenciar o funcionário e arquivos de funções utilizando 2 listas de *drop-down*. A lista de funcionários é requerida para apresentar o código e nome do funcionário. A lista de funções é requerida para apresentar o código e descrição da função. O código dos funcionários assinalados à função é exibido depois do registro salvo. No caso de erro, uma mensagem apropriada é exibida.

**Exemplo de Tela**

A seguinte tela de Funções Assinaladas é uma simplificação de como campos de saída são contados. O usuário seleciona o funcionário de uma lista de *drop-down*, apresentando o nome e código do funcionário. Na seleção, o sistema requer o código do funcionário para o assinalamento. O usuário seleciona a função de uma lista de *drop-down* apresentando o código e descrição da função. O sistema requer o código da função para o assinalamento. Quando o assinalamento é salvo, o sistema determina o número total de funcionários e o apresenta ao usuário.

![Tela Funções Assinaladas do Sistema de Recursos Humanos](images/p423-tela-funcoes-assinaladas.png)

As listas de *drop-down* para Funções e Funcionários são CEs e não são analisadas neste exemplo.

**Passo 1 — Identificar o Processo Elementar**

| | |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

| | |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
| --- | --- |
| 1. Possui como intenção primária:<br>• Manter um ou mais ALIs ou | Sim. Assinalar uma Função possui a intenção primária de manter o ALI de Funções Assinaladas. |
| • Alterar o comportamento da aplicação | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui lógica de processamento para aceitar dados ou controle de informação que entra na fronteira da aplicação. | Sim. Assinalar uma Função inclui lógica de processamento para aceitar informações de Funções Assinaladas |

**Conclusão**

Assinalar uma Função é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI de Funções Assinaladas é mantido.<br>Os ALIs de Funcionário e Função não são contados como ALRs, uma vez que são parte de CEs separadas. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Os seguintes DERs de entrada são contados:<br>Código do Funcionário<br>Código da Função<br>Data do Assinalamento<br>Os seguintes DERs de saída são contados.<br>Funcionário Assinalado à Função<br><br>Os DERs de Nome de Funcionário e Nome da Função nas listas de *drop-down* não são contados como DERs, uma vez que são parte de CEs separados. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Uma mensagem é retornada em caso de erro. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Existe apenas uma maneira da função ser invocada, através do botão Salvar. |
| 4. Não contar os seguintes itens como DERs:<br>• Literais | Literais como “Código da Função” não são contados |
| • application generated stamps | Não existem. |
| • Variáveis de paginação | Não existem. |
| • Navegação | Não existem. |
| • Atributos gerados sem saída da fronteira e | Não existem. |
| • Atributos recuperados ou referenciados de um ALI ou AIE sem saída da fronteira | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
| --- | --- |
| 1 ALR e 6 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
| --- | --- |
| Tamanho Funcional de 1 EE de Baixa Complexidade | 3 PF |

### Exemplo: EE com Atributos Recuperados de um AIE

**Requisitos do Usuário**

O usuário requer a habilidade de Incluir um funcionário entrando com:

- Informação de funcionário
- Informação de salário ou taxa por hora
- Informação de dependente
- A localização deve ser uma localização válida do Sistema de Ativos Fixos.
- A taxa por hora é convertida para Dólares Americanos; os dados de moeda são acessados a partir do Sistema de Moedas Correntes, para converter uma taxa por hora padrão em Dólares Americanos, baseado na moeda do funcionário.

**Exemplo de Telas**

Os seguintes diagramas são exemplos das janelas para inclusão de um funcionário.

![Janela EN-1 Dados de Funcionário e legenda dos botões de navegação](images/p426-en1-dados-funcionario.png)

![Janela EN-2S Dados de Funcionário: Assalariado e legenda dos botões](images/p427-en2s-funcionario-assalariado.png)

![Janela EN-2H Dados de Funcionário: Horista e legenda dos botões](images/p427-en2h-funcionario-horista.png)

![Janela EN-3 Dados de Dependente de Funcionário e legenda dos botões](images/p428-en3-dados-dependente.png)

**Passo 1 — Identificar o Processo Elementar**

| | |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

| | |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
| --- | --- |
| 1. Possui como intenção primária:<br>• Manter um ou mais ALIs ou | Sim. Incluir um Funcionário possui a intenção primária de manter o ALI Funcionário. |
| • Alterar o comportamento da aplicação | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui lógica de processamento para aceitar dados ou controle de informação que entra na fronteira da aplicação. | Sim. Incluir um Funcionário inclui lógica de processamento para aceitar informação de Funcionário. |

**Conclusão**

Incluir um Funcionário é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI Funcionário é mantido. Os AIEs de Moeda Corrente e Localização são referenciados. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Nome (Sobrenome, Primeiro Nome, Iniciais do Meio), Número de Identificação, Número de Dependentes, Localização, Tipo de Salário, Nível do Supervisor, Taxa por Hora, Unidade de Negócio, Nome do Dependente (Sobrenome, Primeiro Nome, Iniciais do Meio), Identificação do Dependente, Data de Nascimento do Dependente.<br><br>A tela divide o Nome do Funcionário em três campos físicos. Baseado na revisão da funcionalidade da aplicação, o Nome do Funcionário é sempre usado na sua totalidade. Não existem telas ou relatórios onde somente um pedaço do nome é usado sem os demais. O mesmo é também verdadeiro para o Nome do Dependente. O Nome do Funcionário e o Nome do Dependente são contados como DERs únicos. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Uma mensagem é retornada em caso de erro. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Botão OK. |
| 4. Não contar os seguintes itens como DERs:<br>• Literais | Literais como “Sobrenome” não são contados. |
| • application generated stamps | Não existem. |
| • Variáveis de paginação | Não existem. |
| • Navegação | Não existem. |
| • Atributos gerados sem saída da fronteira e | Taxa por Hora em Dólares Americanos é calculada, mas não sai da fronteira. |
| • Atributos recuperados ou referenciados de um ALI ou AIE sem saída da fronteira | Taxa de Conversão para Moeda Base é recuperado do AIE Moeda Corrente para calcular a Taxa por Hora em Dólares Americanos, mas não sai da fronteira. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
| --- | --- |
| 3 ARL e 13 DERs | Complexidade é Alta |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
| --- | --- |
| Tamanho Funcional de 1 EE de Alta Complexidade | 6 PF |

### Exemplo: EE Excluir

**Requisitos do Usuário**

O usuário requer a habilidade de Excluir um Funcionário.

Excluir todas as informações sobre um Funcionário específico. Ao excluir um funcionário atualmente assinalado a uma função, atualizar o assinalamento da função, configurando o status para inativo.

- Gerar mensagens de erro e destacar campos incorretos se os campos não permitirem edição. Cinco (5) mensagens de erro e uma (1) mensagem de confirmação estão incluidas na transação de exclusão de informações do funcionário.
- Ao excluir um funcionário, atualizar o Status Inativo com um “X” e colocar a data do sistema em Data de Efetivação para cada Função Assinalada associada.

**Exemplo de Tela**

O diagrama seguinte é um exemplo de janela utilizada para excluir um funcionário.

![Janela EE2 Editar Funcionário e legenda dos botões](images/p432-ee2-editar-funcionario.png)

**Passo 1 — Identificar o Processo Elementar**

| | |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

| | |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
| --- | --- |
| 1. Possui como intenção primária:<br>• Manter um ou mais ALIs ou | Sim. Excluir um Funcionário possui a intenção primária de manter o ALI Funcionário. |
| • Alterar o comportamento da aplicação | Não. O comportamento da aplicação não é alterado. |
| 2. Inclui lógica de processamento para aceitar dados ou controle de informação que entra na fronteira da aplicação. | Sim. Excluir um Funcionário inclui lógica de processamento para aceitar informações de Funcionário. |

**Conclusão**

Excluir um Funcionário é uma EE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI Funções Assinaladas é mantido. O ALI Funcionários é referenciado e mantido. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Número de Identidade. Todos os outros atributos na tela são parte da pesquisa que precede à Exclusão. Eles não são contados como DERs para a Deleção. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Uma mensagem é retornada em caso de erro. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Botão Excluir. |
| 4. Não contar os seguintes itens como DERs:<br>• Literais | Literais como “Identidade” não são contados. |
| • application generated stamps | Não existem. |
| • Variáveis de paginação | Não existem. |
| • Navegação | Não existem. |
| • Atributos gerados sem saída da fronteira e | O atributo de Status Inativo é atualizado, mas não sai da fronteira. Não é contado. |
| • Atributos recuperados ou referenciados de um ALI ou AIE sem saída da fronteira | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
| --- | --- |
| 2 ALR e 3 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
| --- | --- |
| Tamanho Funcional de 1 EE de Baixa Complexidade | 3 PF |

### Exemplo: Incluir Nível de Segurança de Janelas

**Requisitos do Usuário**

O requisito para gerenciar nível de segurança foi incluido durante a fase de Construção. O usuário quer incluir, modificar, excluir e consultar informações de nível de segurança no Sistema de Recursos Humanos. A funcionalidade de inclusão é ilustrada abaixo.

Incluir informações de nível de segurança de janelas entrando com

- Identificador do Usuário.
- Caixas para Funções Assinaladas, Função, Funcionário, Localização e funções de Geração de Relatórios.
- Nível de Segurança de Usuário para as funções acima (p.ex., permitir ou não permitir o acesso).

Gerar mensagens de erro e destacar campos incorretos se os campos não permitirem edição. Duas (2) mensagens de erro e uma (1) mensagem de confirmação estão incluídas para a transação de inclusão de informações de nível de segurança.

**Tela de Inclusão de Nível de Segurança de Janelas**

A seguinte ilustração apresenta a tela para incluir nível de segurança de janelas.

![Tela SW-1 RH Janela de Configuração de Segurança e legenda dos botões](images/p435-sw1-configuracao-seguranca.png)

As caixas na ilustração acima representam a Identificação das Janelas.

**Passo 1 — Identificar o Processo Elementar**

| | |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

| | |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de EE | A Regra se Aplica? |
| --- | --- |
| 1. Possui como intenção primária:<br>• Manter um ou mais ALIs ou | Sim. O ALI Nível de Segurança de Janelas é mantido. |
| • Alterar o comportamento da aplicação | Não. O comportamento da aplicação não é alterado. O comportamento da aplicação será alterado pelo controle da funcionalidade que o usuário pode executar quando ele entra no sistema. |
| 2. Inclui lógica de processamento para aceitar dados ou controle de informação que entra na fronteira da aplicação. | Sim. As informações de Nível de Segurança de Janelas entram na fronteira para manter o ALI de Nível de Segurança de Janelas. |

**Conclusão**

Incluir Nível de Segurança de Janelas é uma EE.

Veja os Estudos de Casos para verificar como os requisitos de alteração e exclusão e telas associadas a estas funções são contadas.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados única que é acessada (lida e/ou mantida) pela função de transação. | O ALI Nível de Segurança de Janelas é mantido. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Identificador do Usuário, Janelas, Nível de Segurança do Usuário. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Mensagens de Erro. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Tecla de Ação OK. |
| 4. Não contar os seguintes itens como DERs:<br>• Literais | Literais como “ID Usuário” não são contados |
| • application generated stamps | Não existem itens deste tipo. |
| • Variáveis de paginação | Não existem itens deste tipo. |
| • Navegação | Não existem itens deste tipo. |
| • Atributos gerados sem saída da fronteira e | Não existem itens deste tipo. |
| • Atributos recuperados ou referenciados de um ALI ou AIE sem saída da fronteira | Não existem itens deste tipo. |

**Passo 6 — Determinar a Complexidade Funcional**

| | |
| --- | --- |
| 1 ALR e 5 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

| | |
| --- | --- |
| Tamanho Funcional de 1 EE de Baixa Complexidade | 3 PF |

## Exemplos de Contagem de SE

**Introdução**

Esta seção utiliza uma aplicação de Recursos Humanos (RH) para ilustrar procedimentos usados para contagem de saídas externas. Em adição a esta seção, exemplos estão nos Estudos de Casos incluídos em documentação suplementar do IFPUG.

**Conteúdo**

Esta seção inclui os seguintes exemplos:

| Tópico | Página |
| --- | --- |
| Descrição Geral dos Exemplos de Contagens de SE | 2-106 |
| Exemplo: Relatório Impresso | 2-107 |
| Exemplo: Relatório Online | 2-110 |
| Exemplo: Transação Enviada para Outra Aplicação | 2-113 |
| Exemplo: Mensagens de Erro/Confirmação | 2-115 |
| Exemplo: Notificação de Revisão de Desempenho | 2-116 |
| Exemplo: SE Disparado sem Dados Entrando na Fronteira | 2-119 |
| Exemplo: Intenção Primária de uma SE | 2-122 |
| Exemplo: SE como Arquivo de Transação | 2-125 |

### Descrição Geral dos Exemplos de Contagens de SE

Os exemplos para SEs estão descritos na tabela a seguir.

| Exemplo | Descrição Sumarizada | Página |
| --- | --- | --- |
| Relatório Impresso | Este exemplo ilustra a contagem de um relatório impresso em papel. | 2-107 |
| Relatório Online | Este exemplo apresenta a contagem de um relatório *online*. | 2-110 |
| Transação Enviada para Outra Aplicação | Este exemplo ilustra uma transação gerada por uma aplicação e enviada para outra aplicação. | 2-113 |
| Mensagens de Erro/Confirmação | Este exemplo apresenta que erros ou mensagens de confirmação não são contados como saídas externas. | 2-115 |
| Exemplo: Notificação de Revisão de Desempenho | Este exemplo ilustra uma notificação baseada em um cálculo. | 2-116 |
| SE Disparada sem Dados Entrando na Fronteira | Este exemplo ilustra o conceito em que uma SE pode ser disparada sem dados entrando na fronteira. | 2-119 |
| Intenção Primária de uma SE | Este exemplo ilustra que uma SE pode atualizar um arquivo. | 2-122 |
| SE como Arquivo de Transação | Este exemplo ilustra que a existência de cálculos determina que o processo elementar seja uma SE e não uma CE. | 2-125 |

### Exemplo: Relatório Impresso

**Requisitos do Usuário**

O usuário do Sistema de Recursos Humanos requer uma listagem dos assinalamentos de funções dos funcionários.

O relatório é gerado a partir da recuperação de:

- Um assinalamento a partir do ALI de funções assinaladas
- Informações adicionais a partir dos ALIs funcionário e função.

O ALI de controle do relatório é referenciado para determinar como gerar o relatório.

**Exemplo de Relatório**

O seguinte relatório de Funções com Funcionários lista funções e funcionários assinalados a elas.

![Relatório impresso HRS006 "Funções com Funcionários" do Sistema de Recursos Humanos](images/p440-relatorio-impresso.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de SE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário e | Sim. O relatório de Funções com Funcionários tem a intenção primária de apresentar informações ao usuário. |
| 2. Inclui, no mínimo, uma das seguintes formas de lógica de processamento: |  |
| • Cálculos matemáticos são executados | Sim. O número total de funções é considerado tanto calculado quanto derivado. |
| • Um ou mais ALIs são atualizados | Não. Nenhum ALI é atualizado. |
| • Dados derivados são criados ou | Sim. O número total de funções é considerado tanto calculado quanto derivado. |
| • O comportamento da aplicação é alterado | Não. O comportamento da aplicação não é alterado. |

**Conclusão**

O Relatório de Funções com Funcionários é uma SE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | Os seguintes ALIs são lidos:<br>• Funcionário<br>• Função<br>• Funções Assinaladas<br>• Controle de Relatório |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Código da Função, Nome da Função, Identificação do Funcionário e Número Total de Funções são exibidos. Contar cada um apenas uma vez. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Não existem |
| 4. Não contar os seguintes itens como DERs: |  |
| • Literais tais como títulos de relatório, identificadores de tela ou painéis, cabeçalhos de coluna e títulos de atributo. | Identificadores de relatório, títulos de relatório e cabeçalhos de coluna não são contados. |
| • *application generated stamps,* tais como atributos de data e hora | A data do relatório não é contada. |
| • Variáveis de paginação, números de página e informações de posicionamento, p.ex., “Linhas 37 a 54 de 211” | O número da página não é contado. |
| • Recursos navegacionais tais como habilidade de navegar dentro de uma lista utilizando “anterior”, “próximo”, “primeiro”, “ultimo” e suas equivalências gráficas | Não existem. |
| • Atributos gerados dentro da fronteira por uma função de transação e salvos em um ALI, sem saída da fronteira | Não existem. |
| • Atributos recuperados ou referenciados a partir de um ALI ou AIE para participação no processamento, sem saída da fronteira. | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 4 ALRs e 5 DERs | Complexidade é Média |

**Passo 7 — Determinar o Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 SE de Média Complexidade | 5 PF |

### Exemplo: Relatório Online

**Requisitos do Usuário**

O usuário requer um relatório de funcionários em ordem descendente pela duração das funções atuais assinaladas. Este relatório é exibido *online* e contém dados calculados/derivados (por exemplo, duração do assinalamento da função)

**Exemplo de Tela**

A tela Funcionários por Duração do Assinalamento a seguir lista funcionários por duração do assinalamento.

![Tela "Funcionários por Duração do Assinalamento" listando funcionários por duração do assinalamento](images/p443-tela-funcionarios-duracao.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de SE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário e | Sim. Funcionários por Duração do Assinalamento tem a intenção primária de apresentar informações ao usuário. |
| 2. Inclui, no mínimo, uma das seguintes formas de lógica de processamento: |  |
| • Cálculos matemáticos são executados | Sim. Três campos calculados são considerados tanto calculados como derivados. |
| • Um ou mais ALIs são atualizados | Não. Nenhum ALI é atualizado |
| • Dados derivados são criados ou | Sim. Três campos calculados são considerados tanto calculados como derivados. |
| • O comportamento da aplicação é alterado | Não. O comportamento da aplicação não é alterado. |

**Conclusão**

O relatório de Funcionários por Duração do Assinalamento é uma SE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | Os ALIs Funcionário, Função, e Funções Assinaladas são lidos. Nenhum ALI é mantido. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Identificação do Funcionário, Nome do Funcionário, Nome da Função e Duração do Assinalamento são repetidos. Contar cada um somente uma vez.<br>Identificação de funcionários acima de 24 meses e acima de 12 meses. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Uma tecla de função é utilizada para exibir o relatório online. |
| 4. Não contar os seguintes itens como DERs: |  |
| • Literais | Literais tais como “Identificação do Funcionário” não são contados. |
| • *application generated stamps* | A data do relatório não é contada. |
| • Variáveis de paginação | “Linhas 1 a 18” não são contados. |
| • Navegação | F7 e F8 não são contados. |
| • Atributos gerados sem saída da fronteira | Não existem. |
| • Atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 3 ALRs e 8 DERs | Complexidade é Média |

**Passo 7 — Determinar o Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 SE de Média Complexidade | 5 PF |

### Exemplo: Transação Enviada para Outra Aplicação

**Requisitos do Usuário**

Quando o Sistema de Recursos Humanos inclui dados dos dependentes de um funcionário, o usuário requer que este Arquivo de Dependente seja enviado para aplicação de Benefícios para manter os registros consistentes. Esta informação é enviada para Benefícios diariamente.

**Requisitos de Construção**

Se dados de dependente são adicionados, esta informação é formatada apropriadamente no arquivo de transação de saída.

Durante a implementação da solução, foi decidido incluir um cabeçalho e um registro detalhe com as informações de benefícios. Estes registros são utilizados por Benefícios para garantir que nada está incorreto tecnicamente durante a transmissão do arquivo.

**Exemplo de Formato do Registro**

O formato do registro de dependente de funcionário a seguir contém informações a respeito de dependentes incluídos e modificados.

![Layout do formato do registro do arquivo de transação de dependentes (registros Cabeçalho, Detalhe e Total)](images/p446-formato-registro.png)

**Descrição dos Campos**

A tabela a seguir inclui descrições para cada campo do registro.

| Tipo de Registro | Posição | Descrição |
| --- | --- | --- |
| Cabeçalho | 1 | Tipo de Registro C |
|  | 2-13 | Nome do Arquivo |
|  | 14-19 | Data da Criação |
| Dependente | 1 | Tipo de Registro D |
|  | 2-10 | Identificação do Funcionário |
|  | 11-19 | Identificação do Dependente |
|  | 20-39 | Nome do Dependente |
|  | 40-45 | Data de nascimento do Dependente |
| Total | 1 | Tipo de Registro T |
|  | 2-10 | Número total de registros |

**Passo 1 — Identificar o Processo Elementar - Cabeçalho**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Não. O cabeçalho não contém dados significativos para o usuário. |

**Passo 1 — Identificar o Processo Elementar - Total**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Não. O total não contém dados significativos para o usuário. |

**Passo 1 — Identificar o Processo Elementar - Dependente**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. A seção dependente do arquivo de transação satisfaz os requisitos para um Processo Elementar. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de SE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário e | Sim. O arquivo de Dependentes possui a intenção primária de apresentar informações ao usuário. |
| 2. Inclui, no mínimo, uma das seguintes formas de lógica de processamento: |  |
| • Cálculos matemáticos são executados | Não. Cálculos não são executados. |
| • Um ou mais ALIs são atualizados | Não. Nenhum ALI é atualizado. |
| • Dados derivados são criados ou | Não. Nenhum dado derivado é criado. |
| • O comportamento da aplicação é alterado | Não. O comportamento da aplicação não é alterado. |

**Conclusão**

O Arquivo de Dependentes não se qualifica como uma SE; seria contado com uma CE (não analisada aqui).

### Exemplo: Mensagens de Erro/Confirmação

**Requisitos do Usuário**

Usuário requer mensagem de retorno quando uma informação de função é mantida. Mais especificamente, o usuário requer mensagens para indicar qualquer edição ou erros de validação ou para indicar que o processo foi completado com sucesso.

**Exemplo de Tela**

A seguinte tela de Função exibe uma mensagem de confirmação (abaixo na tela).

![Tela "Dados de Função" exibindo a mensagem de confirmação "Processamento Completado com Sucesso", com a legenda das teclas de função](images/p448-tela-dados-funcao.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Não. A saída de uma mensagem de erro não é uma função auto-contida. É um DER de saída na EE de Inclusão da Função. |

### Exemplo: Notificação de Revisão de Desempenho

**Requisitos do Usuário**

O usuário requer notificação automática quando um funcionário completou 12 meses no assinalamento de uma função. Isto indica que uma revisão de desempenho deve ser realizada.

**Exemplo de Janela**

A janela de Notificação de Revisão de Desempenho descreve a mensagem de notificação.

![Janela "Notificação de Revisão de Desempenho" com a mensagem de notificação](images/p449-janela-notificacao.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de SE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário e | Sim. Notificação de Revisão de Desempenho possui a intenção primária de apresentar informação ao usuário. |
| 2. Inclui, no mínimo, uma das seguintes formas de lógica de processamento: |  |
| • Cálculos matemáticos são executados | Sim. A data correspondente a 12 meses do assinalamento a uma função é calculada. |
| • Um ou mais ALIs são atualizados | Não. Nenhum ALI é atualizado |
| • Dados derivados são criados ou | Não. Nenhum dado derivado é criado. |
| • O comportamento da aplicação é alterado | Não. O comportamento da aplicação não é alterado. |

**Conclusão**

A Notificação de Revisão de Desempenho é uma SE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | Os ALIs Funcionário, Função e Funções Assinaladas são lidos. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Data, Identificação do Funcionário, Nome do Funcionário, Código da Função, Nome da Função. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Não existem. |
| 4. Não contar os seguintes itens como DERs: |  |
| • Literais | Literais tais como "Funcionário" não são contados. |
| • *application generated stamps* | A data e hora do relatório não são contadas. |
| • Variáveis de paginação | Não existem. |
| • Navegação | Não existem. |
| • Atributos gerados sem saída da fronteira | Não existem. |
| • Atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 3 ALR e 5 DERs | Complexidade é Baixa. |

**Passo 7 — Determinar o Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 SE de complexidade Baixa. | 4 PF |

### Exemplo: SE Disparado sem Dados Entrando na Fronteira

**Requisito do Usuário**

O usuário requer que a aplicação imprima o Relatório Semanal de Funcionários automaticamente todos os Domingos às 23:00. O relatório contém detalhes para cada funcionário com um total dos funcionários.

**Modelo de Dados**

O diagrama a seguir apresenta o fluxo de dados para este exemplo.

![Diagrama de fluxo de dados: o processo Imprimir Relatório Semanal Funcionários lê o ALI Funcionários e gera o Relatório Semanal de Funcionários](images/p452-modelo-dados-relatorio-semanal.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de SE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário e | Sim. O Relatório Semanal de Funcionários possui a intenção primária de apresentar informação ao usuário. |
| 2. Inclui, no mínimo, uma das seguintes formas de lógica de processamento: |  |
| • Cálculos matemáticos são executados | Sim. O Total de Funcionários é um campo calculado. |
| • Um ou mais ALIs são atualizados | Não. Nenhum ALI é atualizado |
| • Dados derivados são criados ou | Sim. O relatório contém um campo calculado. |
| • O comportamento da aplicação é alterado | Não. O comportamento da aplicação não é alterado. |

**Conclusão**

O Relatório Semanal de Funcionários é uma SE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O ALI Funcionário é lido. Nenhum ALI é mantido. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Nome, Localização, Total de Funcionários. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Não existem |
| 4. Não contar os seguintes itens como DERs: |  |
| • Literais | Literais tais como "Nome" não são contados. |
| • *application generated stamps* | Não existem |
| • Variáveis de paginação | Não existem |
| • Navegação | Não existem |
| • Atributos gerados sem saída da fronteira | Não existem |
| • Atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira | Não existem |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 1 ALR e 3 DERs | Complexidade é Baixa. |

**Passo 7 — Determinar o Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 SE de Complexidade Baixa | 4 PF |

### Exemplo: Intenção Primária de uma SE

**Requisitos do Usuário**

Imprimir um Cheque e, como resultado, marcar na conta o cheque como pago. Todos os dados impressos no cheque já estão armazenados no arquivo de cheques.

O diagrama a seguir apresenta o fluxo de dados para este exemplo.

![Diagrama de fluxo de dados: o processo Imprimir Cheque lê e mantém o ALI Cheque e imprime o cheque](images/p455-modelo-dados-imprimir-cheque.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de SE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário e | Sim. A intenção primária é imprimir um cheque. A manutenção do ALI é secundária. |
| 2. Inclui, no mínimo, uma das seguintes formas de lógica de processamento: |  |
| • Cálculos matemáticos são executados | Não. Nenhum cálculo é executado. |
| • Um ou mais ALIs são atualizados | Sim. O ALI Cheques é atualizado. |
| • Dados derivados são criados ou | Não. Nenhum dado derivado é criado. |
| • O comportamento da aplicação é alterado | Não. O comportamento da aplicação não é alterado. |

**Conclusão**

Imprimir um Cheque é uma SE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O ALI Cheques é lido e mantido, mas é contado somente uam vez. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Número do Cheque, Quantia, Portador, Data de Emissão do Cheque. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Não existem. |
| 4. Não contar os seguintes itens como DERs: |  |
| • Literais | Não existem. |
| • *application generated stamps* | Existe uma data impressa no cheque, que representa um dado reconhecido pelo usuário e é contada. |
| • Variáveis de paginação | Não existem. |
| • Navegação | Não existem. |
| • Atributos gerados sem saída da fronteira | O Indicador de Cheque Pago não é contado, uma vez que não atravessa a fronteira. |
| • Atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 1 ALR e 4 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 SE de Complexidade Baixa | 4 PF |

### Exemplo: SE como Arquivo de Transação

**Requisitos do Usuário**

No final do mês, gerar o Arquivo Mensal de Cheques e enviá-lo para Aplicação B. Os números dos cheques, datas de emissão dos cheques e valor dos cheques são incluídos no arquivo, com um valor computado de contagem de cheques processados e o valor total de todos os cheques impressos no mês. O número de cheques impressos e o valor total de todos os cheques impressos são utilizados pelos usuários da Aplicação B para prover extratos bancários.

**Modelo de Dados**

O diagrama a seguir apresenta o fluxo de dados para este exemplo.

![Diagrama de fluxo de dados: na Aplicação A, o processo Gerar Arquivo Mensal de Cheques lê o ALI Cheques e envia o Arquivo Mensal de Cheques para a Aplicação B](images/p458-modelo-dados-arquivo-mensal.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de SE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário e | Sim. A intenção primária é gerar um arquivo de transação. |
| 2. Inclui, no mínimo, uma das seguintes formas de lógica de processamento: |  |
| • Cálculos matemáticos são executados | Sim. O arquivo inclui dois campos calculados. |
| • Um ou mais ALIs são atualizados | Não. Nenhum ALI é atualizado. |
| • Dados derivados são criados ou | Sim. O arquivo inclui dois campos calculados. |
| • O comportamento da aplicação é alterado | Não. O comportamento da aplicação não é alterado. |

**Conclusão**

O Arquivo Mensal de Cheques é uma SE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O ALI Cheques é lido. Não existem ALIs mantidos. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Número do Cheque, Valor do Cheque, Data de Emissão do Cheque, Mês, Número de cheques impressos, Quantia Total dos Cheques. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Não existem |
| 4. Não contar os seguintes itens como DERs: |  |
| • Literais | Não existem |
| • *application generated stamps* | Não existem |
| • Variáveis de paginação | Não existem |
| • Navegação | Não existem |
| • Atributos gerados sem saída da fronteira | Não existem |
| • Atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira | Não existem |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 1 ALR e 6 DERs | Complexidade é Baixa |

**Passo 7 — Determinar o Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 SE de Complexidade Baixa | 4 PF |

## Exemplos de Contagem de CE

**Introdução**

Este seção utiliza uma aplicação de Recursos Humanos (RH) para ilustrar procedimentos para contar consultas externas. Em adição a esta seção, exemplos estão nos Estudos de Casos incluídos em documentação suplementar do IFPUG.

**Conteúdo**

Esta seção inclui os seguintes exemplos:

| Tópico | Página |
| --- | --- |
| Descrição Geral dos Exemplos de Contagem de CE | 2-106 |
| Exemplo: Menus de Aplicação | 2-131 |
| Exemplo: Lista de Dados Recuperados | 2-133 |
| Exemplo: Drop-Down List Box | 2-138 |
| Exemplo: Ajuda no Nível de Campo – Primeira Ocorrência | 2-142 |
| Exemplo: Ajuda no Nível de Campo – Segunda Ocorrência | 2-145 |
| Exemplo: Consulta Implícita | 2-147 |
| Exemplo: CE Disparada sem Dados Entrando na Fronteira | 2-151 |
| Exemplo: Dados Enviados para Outra Aplicação | 2-154 |
| Exemplo: Funcionalidade Adicional de Ajuda | 2-157 |
| Exemplo: Logon de Nível de Segurança | 2-161 |

### Descrição Geral dos Exemplos de Contagem de CE

Os exemplos de CEs estão listados e descritos na tabela a seguir.

| Exemplo | Descrição Sumária | Página |
| --- | --- | --- |
| Menus de Aplicação | Este exemplo mostra que menus navegacionais ou outros recursos navegacionais não são contados como CEs. | 2-131 |
| Lista de Dados Recuperados | Este exemplo ilustra acontagem para uma lista. | 2-133 |
| Drop-Down List Box | Este exemplo ilustra a contagem de uma *drop-down list*. | 2-138 |
| Ajuda no Nível de Campo – Primeira Ocorrência | Este exemplo ilustra que uma janela de Ajuda no nível de campo é contada para a primeira ocorrência. | 2-142 |
| Ajuda no Nível de Campo – Segunda Ocorrência | Este exemplo ilustra que uma segunda instância de uma janela de Ajuda no nível de campo não é contada. | 2-145 |
| Consulta Implícita | Este exemplo ilustra contagem de consulta que não está explicitamente definida mas está implícita. | 2-147 |
| CE Disparada sem Dados Entrando na Fronteira | Este exemplo ilustra contagem de recuperação e apresentação de dados disparados internamente por tempo. | 2-151 |
| Dados Enviados para Outra Aplicação | Este exemplo ilustra contagem de dados enviados para outra aplicação através de um arquivo. | 2-154 |
| Funcionalidade Adicional de Ajuda | Este exemplo ilustra contagem de funcionalidade adicional de Ajuda. | 2-157 |
| Logon de Nível de Segurança | Este exemplo ilustra contagem de função de *logon*. | 2-161 |

### Exemplo: Menus de Aplicação

**Requisitos do Usuário**

A aplicação de Recursos Humanos requer menus e recursos de navegação.

**Exemplo de Janelas**

O diagrama a seguir apresenta o menu *drop-down* Funcionário no menu principal do Sistema de Recursos Humanos. Esta é a solicitação de entrada.

![Menu principal do Sistema de Recursos Humanos com o menu drop-down Funcionário aberto (Novo, Revisar, Editar, Relatório).](images/p464-menu-funcionario.png)

Quando o usuário seleciona Novo no menu *drop-down*, a seguinte janela de Dados de Funcionário é exibida em branco.

![Janela Dados de Funcionário exibida em branco, com a legenda das ações EN-1 (Cancelar retorna ao menu inicial; OK navega para a próxima tela).](images/p465-janela-dados-funcionario.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Não. Menus existem para satisfazer requisitos navegacionais ao invés de requisitos funcionais do usuário. |

**Conclusão**

Menus não satisfazem os requisitos de um processo elementar.

### Exemplo: Lista de Dados Recuperados

**Requisitos do Usuário**

O usuário possui os seguintes requisitos:

- Visualizar uma Lista de Funcionários organizada por Sobrenome, Primeiro Nome e as Iniciais do Meio.

Este exemplo foca na visualização de uma lista de funcionários na aplicação de Recursos Humanos.

**Diagrama de Fluxo de Dados**

O seguinte diagrama apresenta o fluxo dados para este exemplo.

![Diagrama de Fluxo de Dados da consulta à Lista de Funcionários, envolvendo os processos 1.4 Consultar Funcionário e 1.5 Consultar Lista Funcionários, com legenda.](images/p466-dfd-lista-funcionarios.png)

**Exemplo de Janelas**

O seguinte diagrama apresenta o menu *drop-down* para funcionário. O campo Revisar e a tecla Entrar formam a parte de entrada deste exemplo.

![Menu drop-down Funcionário com a opção Revisar selecionada no menu principal do Sistema de Recursos Humanos.](images/p467-menu-revisar.png)

Quando o usuário seleciona Revisar no menu *drop-down* Funcionário, a seguinte janela é exibida com uma lista de funcionários.

![Janela Lista de Funcionários (EI-1) com colunas Sobrenome, Primeiro Nome, IM, Identificação e Tipo de Salário, e as ações Visualizar, Dependentes e Cancelar.](images/p467-lista-funcionarios.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de CE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário, e: | Sim. A intenção primária é apresentar informações ao usuário. |
| • referencia uma função de dados para recuperar dados ou informação de controle e | Sim. Dados são recuperados do ALI Funcionário. |
| • não satisfaz o critério de ser classificado como uma SE | Sim. Não executa cálculos, não cria dados derivados e não atualiza um ALI. |

**Conclusão**

A Lista de Funcionários é uma CE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O ALI Funcionário é lido. Uma CE não pode manter um ALI por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Os seguintes campos são repetidos e contados apenas uma vez: Sobrenome, Primeiro Nome, Iniciais do Meio, ID, Tipo de Salário.<br><br>A lista é organizada utilizando elementos individuais do nome (como Sobrenome, Primeiro Nome, Iniciais do Meio). Como resultado, os elementos individuais do Nome são reconhecidos pelo usuário. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Sim. O campo Revisar/tecla Entrar iniciam a ação. |
| 4. Não contar os seguintes itens como DERs: |  |
| • Literais tais como títulos de relatório, identificadores de tela ou painéis, cabeçalhos de coluna e títulos de atributo. | Cabeçalhos de tela e coluna não são contados. |
| • *application generated stamps*, tais como atributos de data e hora | Não existem. |
| • Variáveis de paginação, números de página e informações de posicionamento, p.ex., "Linhas 37 a 54 de 211" | Não existem. |
| • Recursos navegacionais tais como habilidade de navegar dentro de uma lista utilizando "anterior", "próximo", "primeiro", "ultimo" e suas equivalências gráficas | A barra de rolagem não é contada. |
| • Atributos gerados dentro da fronteira por uma função de transação e salvos em um ALI, sem saída da fronteira | Não existem. |
| • Atributos recuperados ou referenciados a partir de um ALI ou AIE para participação no processamento, sem saída da fronteira. | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 1 ALR e 6 DERs | Complexidade é Baixa |

### Step 7 — Determinar Tamanho Funcional

|  |  |
| --- | --- |
| Tamanho Funcional de 1 CE de Complexidade Baixa | 3 PF |

### Exemplo: Drop-Down List Box

**Requisitos do Usuário**

O usuário requer a capacidade de visualizar uma Lista de Unidades de Negócio adicionada ao Sistema de Recursos Humanos pelo usuário.

**Exemplo de Janelas**

O diagrama a seguir apresenta a janela de Dados de Funcionário Horista com o campo de Unidade de Negócio.

![Janela Dados de Funcionário Horista (EI-3H) com o campo Unidade de Negócios e botão Dependentes.](images/p471-dados-funcionario-horista.png)

Quando o usuário seleciona a seta, a seguinte lista de *drop-down* é exibida.

![Lista drop-down de Unidades de Negócio exibida (UPFCA, L841, CPLG) na janela Dados de Funcionário Horista.](images/p472-drop-down-list.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de CE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário, e: | Sim. A intenção primária é apresentar informações ao usuário. |
| • referencia uma função de dados para recuperar dados ou informação de controle e | Sim. Dados são recuperados a partir do ALI Unidades de Negócio. O ALI Unidades de Negócio contém inúmeros atributos sobre uma Unidade de Negócio. |
| • não satisfaz o critério de ser classificado como uma SE | Sim. Não executa cálculos, não cria dados derivados e não atualiza um ALI. |

**Conclusão**

A Lista de Unidades de Negócio é uma CE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O ALI Unidades de Negócio é lido. Uma CE não pode manter um ALI, por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Unidade de Negócio. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Sim. A seta abaixo ativa a *listbox*. |
| 4. Não contar os seguintes itens como DERs: |  |
| • literais | Não existem. |
| • *application generated stamps* | Não existem. |
| • variáveis de paginação | Não existem. |
| • navegação | Não existem. |
| • atributos gerados sem saída da fronteira e | Não existem. |
| • atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira. | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 1 ALR e 2 DERs | Complexidade é Baixa |

### Step 7 — Determinar Tamanho Funcional

|  |  |
| --- | --- |
| Tamanho Funcional de 1 CE de Complexidade Baixa | 3 PF |

### Exemplo: Ajuda no Nível de Campo – Primeira Ocorrência

**Requisitos do Usuário**

Durante a construção do Sistema de Recursos Humanos, um requisito para Ajuda *online* de nível de campo foi adicionado. A informação de Ajuda é mantida por uma aplicação separada. A informação de Ajuda é referenciada pelas aplicações de Recursos Humanos, Moedas Correntes, Ativos Fixos, e Benefícios.

**Exemplo de Janelas**

O diagrama a seguir apresenta a janela de Dados do Funcionário.

![Janela Dados de Funcionário Horista (EI-3H) com o campo Taxa por Hora em destaque.](images/p475-janela-dados-funcionario.png)

Quando o usuário pressiona **F1** enquanto o cursor está sobre o campo de taxa por hora, uma caixa mostra o texto de Ajuda como apresentado no diagrama a seguir.

![Caixa de Ajuda no nível de campo exibindo o texto de Ajuda para "Taxa por hora", com valores válidos e valores default.](images/p476-ajuda-taxa-por-hora.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de CE | A Regra se Aplica? |
| --- | --- |
| 1. Possui a intenção primária de apresentar informações ao usuário, e: | Sim. A Ajuda no nível de Campo possui a intenção primária de apresentar informação ao usuário. |
| • referencia uma função de dados para recuperar dados ou informação de controle e | Sim. Dados são recuperados do AIE Ajuda |
| • não satisfaz o critério de ser classificado como uma SE | Sim. Não executa cálculos, não cria dados derivados e não atualiza nenhum ALI. |

**Conclusão**

A Ajuda de Nível de Campo é uma CE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
| --- | --- |
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O AIE Ajuda é lido. Uma CE não pode manter um ALI por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
| --- | --- |
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | ID da Janela, ID do Campo, Mensagem da Ajuda, Valor *Default*, Valores Válidos |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Sim. A tecla F1. |
| 4. Não contar os seguintes itens como DERs: |  |
| • literais | Literais como "Valores Válidos" não são contados. |
| • *application generated stamps* | Não existem. |
| • variáveis de paginação | Não existem. |
| • navegação | Não existem. |
| • atributos gerados sem saída da fronteira e | Não existem. |
| • atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira. | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 1 ALR e 6 DERs | Complexidade é Baixa |

**Passo 7 — Determinar Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 CE de Complexidade Baixa | 3 PF |

### Exemplo: Ajuda no Nível de Campo – Segunda Ocorrência

**Requisitos do Usuário**

Durante a construção do Sistema de Recursos Humanos, um requisito para Ajuda *online* no nível de campo foi adicionado. A Ajuda *online* está relacionado aos processos de inclusão, exclusão e alteração de informações de Recursos Humanos. As informações de Ajuda são mantidas por uma aplicação separada. As informações de Ajuda são referenciadas pelas aplicações de Recursos Humanos, Moedas Correntes, Ativos Fixos e Benefícios.

**Exemplo de Janelas**

O diagrama a seguir apresenta a janela de Dados de Funcionário.

![Janela Dados de Funcionário Horista (EI-3H) com os campos Taxa por Hora e Unidade de Negócio.](images/p478-janela-dados-funcionario.png)

O usuário posiciona o cursor no campo para o qual a ajuda é necessária, e pressiona a tecla **F1** para visualizar a Ajuda para aquele campo.

**Passo 1 — Identificar o Processo Elementar**

|  |  |
| --- | --- |
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
| --- | --- |
| A Função de Transação é única em relação a outros processos elementares? | Não. Esta função executa a mesma função que foi descrita no exemplo anterior. Os DERs, ALRs e a lógica de processamento para esta função são as mesmas que o exemplo anterior. Ela não é contada novamente. |

**Conclusão**

A Segunda Ocorrência de Ajuda no Nível de Campo não é um processo elementar único e não é contado como uma CE.

### Exemplo: Consulta Implícita

**Requisitos do Usuário**

O usuário requer a habilidade de visualizar informações de assinalamento enquanto edita informações de funções assinaladas. Embora, não esteja explícito, é implícito que as Informações de Funções Assinaladas devem ser recuperadas antes de serem liberadas para alteração.

**Exemplo de Janelas**

O diagrama a seguir apresenta a janela Editar Funções Assinaladas com apenas o nome do funcionário e o código da função.

![Janela Editar Funções Assinaladas apresentando apenas o nome do funcionário e o código da função (tela AE-5).](images/p480-janela-editar-funcoes-vazia.png)

Quando o usuário entra com o nome do funcionário e o código da função, a informação de função é exibida como apresentado no diagrama a seguir.

![Janela Editar Funções Assinaladas com as informações da função exibidas após a entrada do nome do funcionário e do código da função (tela AE-5).](images/p481-janela-editar-funcoes-com-dados.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
|---|---|
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
|---|---|
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar que executasse esta função foi contado até o momento. Se uma consulta direta também existisse, seria considerada uma duplicidade e não seria contada novamente. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de CE | A Regra se Aplica? |
|---|---|
| 1. Possui a intenção primária de apresentar informações ao usuário, e: | Sim. A Consulta Implícita Assinalameno de Função possui a intenção primária de apresentar informações ao usuário. |
| - referencia uma função de dados para recuperar dados ou informação de controle e | Sim. Dados são recuperados a partir dos ALIs Funções Assinaladas, Funcionário e Função. |
| - não satisfaz o critério de ser classificado como uma SE | Sim. Não executa cálculos, não cria dados derivados e não atualiza nenhum ALI. |

**Conclusão**

Consulta Implícita de Funções Assinaladas é uma CE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | Os ALIs Funções Assinaladas, Funcionário e Função são lidos. Uma CE não pode manter um ALI por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Nome, ID, Localização, Unidade de Negócio, Código da Função, Data, Salário e Avaliação de Desempenho |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Sim. A tecla de comando. |
| 4. Não contar os seguintes itens como DERs: |  |
| - literais | Literais como título da tela não são contados. |
| - *application generated stamps* | Não existem |
| - variáveis de paginação | Não existem |
| - navegação | Não existem |
| - atributos gerados sem saída da fronteira e | Não existem |
| - atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira. | Não existem |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
|---|---|
| 3 ALRs e 10 DERs | Complexidade é Média |

**Passo 7 — Determinar Tamanho Funcional**

|  |  |
|---|---|
| Tamanho Funcional de 1 CE de Complexidade Média | 4 PF |

**Conclusão**

A Consulta Implícita de Funções Assinaladas é um processo elementar e é contado como uma CE. Se uma consulta direta também existisse, seria considerada uma duplicidade e não seria contada novamente.

### Exemplo: CE Disparada sem Dados Entrando na Fronteira

**Requisitos do Usuário**

O usuário requer que a aplicação imprima o Relatório Mensal de Associados automaticamente todo mês.

O diagrama a seguir apresenta o fluxo de dados para este exemplo.

![Diagrama de fluxo de dados: Imprimir Relatório Mensal de Associados, lendo o ALI Associados e gerando o Relatório Mensal de Associados.](images/p484-dfd-relatorio-mensal-associados.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
|---|---|
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
|---|---|
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de CE | A Regra se Aplica? |
|---|---|
| 1. Possui a intenção primária de apresentar informações ao usuário, e: | Sim. O Relatório Mensal de Associados possui a intenção primária de apresentar informações ao usuário. |
| - referencia uma função de dados para recuperar dados ou informação de controle e | Sim. Dados são recuperados a partir do ALI Associados. |
| - não satisfaz o critério de ser classificado como uma SE | Sim. Não executa cálculos, não cria dados derivados e não atualiza nenhum ALI. |

**Conclusão**

O Relatório Mensal de Associados é uma CE. Neste exemplo, a transação é disparada por um evento temporal dentro da fronteira.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O ALI Associados é lido. Uma CE não pode atualizar um ALI, por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Nome, Cidade, País |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Não existem. A função é executada automaticamene todo mês. |
| 4. Não contar os seguintes itens como DERs: |  |
| - literais | Literais como "Nome" não são contados. |
| - *application generated stamps* | Não existem. |
| - variáveis de paginação | Não existem. |
| - navegação | Não existem. |
| - atributos gerados sem saída da fronteira e | Não existem. |
| - atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira. | Não existem. |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
|---|---|
| 1 ALR e 3 DERs | Complexidade é Baixa |

**Passo 7 — Determinar Tamanho Funcional**

|  |  |
|---|---|
| Tamanho Funcional de 1 CE de Complexidade Baixa | 3 PF |

### Exemplo: Dados Enviados para Outra Aplicação

**Requisitos do Usuário**

Ao final de cada dia, enviar um Arquivo Diário de Cheques para Aplicação B listando os números dos cheques, o valor e a data de emissão de cada cheque impresso no dia.

O diagrama a seguir apresenta o fluxo de dados para este exemplo.

![Diagrama de fluxo de dados: Gerar Arquivo Diário de Cheques na Aplicação A, lendo o ALI Cheque e enviando o Arquivo Diário de Cheques para a Aplicação B.](images/p487-dfd-arquivo-diario-cheques.png)

**Passo 1 — Identificar o Processo Elementar**

|  |  |
|---|---|
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
|---|---|
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de CE | A Regra se Aplica? |
|---|---|
| 1. Possui a intenção primária de apresentar informações ao usuário, e: | Sim. O Arquivo Diário de Cheques possui a intenção primária de apresentar informações. Neste caso, o usuário é a Aplicação B. |
| - referencia uma função de dados para recuperar dados ou informação de controle e | Sim. Dados são recuperados a partir do ALI Cheques. |
| - não satisfaz o critério de ser classificado como uma SE | Sim. Não executa cálculos, não cria dados derivados e não atualiza nenhum ALI |

**Conclusão**

O Arquivo de Cheques Diário é uma CE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O ALI Cheques é lido. Uma CE não pode manter um ALI, por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | Número do Cheque, Valor do Cheque, Data de Emissão do Cheque. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Não existem. A função é executada automaticamente todo mês. |
| 4. Não contar os seguintes itens como DERs: |  |
| - literais | Não existem |
| - *application generated stamps* | Não existem |
| - variáveis de paginação | Não existem |
| - navegação | Não existem |
| - atributos gerados sem saída da fronteira e | Não existem |
| - atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira. | Não existem |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
|---|---|
| 1 ALR e 3 DERs | Complexidade é Baixa |

**Passo 7 — Determinar Tamanho Funcional**

|  |  |
|---|---|
| Tamanho Funcional de 1 CE de Complexidade Baixa | 3 PF |

### Exemplo: Funcionalidade Adicional de Ajuda

**Requisitos do Usuário**

Durante aconstrução do Sistema de Recursos Humanos, um requisito para uma funcionalidade adicional de Ajuda foi incluída. A informação de Ajuda é mantida por uma aplicação separada.A informação de Ajuda é referenciada pelas aplicações de Recursos Humanos, Ativos Fixos e Benefícios.

**Processo de Contagem**

O diagrama a seguir apresenta a janela de Dados de Funcionário

![Janela de Dados de Funcionário do Sistema de Recursos Humanos (tela EI-3H Dados de Funcionário Horista).](images/p490-janela-dados-funcionario-ajuda.png)

Quando o usuário seleciona a função de Ajuda no cabeçalho de qualquer Janela, três seleções ficam habilitadas: Janela, Pesquisa e Sobre

**Passo 1 — Identificar o Processo Elementar**

|  |  |
|---|---|
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. Janela, Pesquisa e Sobre aparecem para executar 3 funções independentes. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
|---|---|
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. Estas funções são contadas apenas uma vez dentro da aplicação. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de CE | A Regra se Aplica? |
|---|---|
| 1. Possui a intenção primária de apresentar informações ao usuário, e: | Sim. Janela, Pesquisa e Sobre possuem a intenção primária de apresentar informação ao usuário. |
| - referencia uma função de dados para recuperar dados ou informação de controle e | Dados de Janela são recuperados a partir do AIE Ajuda, baseado na Janela atual<br>Pesquisa habilita o usuário a entrar um tópico e recuperar Dados de Tópico a partir do AIE Ajuda<br>Sobre está recuperando dados estáticos não mantidos no AIE Ajuda. Portanto não atende à definição de um CE. |
| - não satisfaz o critério de ser classificado como uma SE | Sim. Não executa cálculos, não cria dados derivados e não atualiza nenhum ALI |

**Conclusão**

Janela de Ajuda é uma CE e a capacidade de Pesquisa é uma CE. Janela de Ajuda para a seleção “Sobre” não é contada porque não é mantida através de um processo elementar.

É importante garantir que a janela estática de Ajuda não seja contada. Ambientes comuns, especialmente aplicações web, frequentemente contém janela estática de Ajuda.

Também é important garantor que as fronteiras estejam corretamente avaliadas. Funcionalidade de Ajuda é frequentemente provida por uma aplicação externa, como *RoboHelp*, que provê toda funcionalidade de Ajuda (i.e., manutenção, armazenamento e apresentação de janela de Ajuda). Neste exemplo, nenhuma funcionalidade é creditada para a aplicação a qual a janela de Ajuda pertence.

Janela de Ajuda e Pesquisa de Ajuda são individualmente analisados abaixo.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado) para Janela de Ajuda**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O AIE Ajuda é lido. Uma CE não pode manter um ALI por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | ID de Janela, Descrição de Janela (apenas texto). |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Sim. Seleção pelo Menu Ajuda |
| 4. Não contar os seguintes itens como DERs: |  |
| - literais | Literais como cabeçalhos de tela não são contados. |
| - *application generated stamps* | Não existem |
| - variáveis de paginação | Não existem |
| - navegação | Não existem |
| - atributos gerados sem saída da fronteira e | Não existem |
| - atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira. | Não existem |

**Passo 6 — Determinar a Complexidade Funcional da Janela de Ajuda**

|  |  |
|---|---|
| 1 ALR e 3 DERs | Complexidade é Baixa |

**Passo 7 — Determinar Tamanho Funcional para a Janela de Ajuda**

|  |  |
|---|---|
| Tamanho Funcional de 1 CE de Complexidade Baixa | 3 PF |

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado) para a Capacidade de Pesquisa**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O AIE Ajuda é lido. Uma CE não pode manter um ALI por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | ID da Aplicação, Tópico Cadastrado, Mensagem(ns) de Ajuda retornadas. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Não existem |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Sim. Seleção pelo Menu Ajuda |
| 4. Não contar os seguintes itens como DERs: |  |
| - literais | Literais como cabeçalhos de tela não são contados. |
| - *application generated stamps* | Não existem |
| - variáveis de paginação | Não existem |
| - navegação | Não existem |
| - atributos gerados sem saída da fronteira e | Não existem |
| - atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira. | Não existem |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
|---|---|
| 1 ALR e 4 DERs | Complexidade é Baixa |

**Passo 7 — Determinar Tamanho Funcional para a Capacidade de Pesquisa**

|  |  |
|---|---|
| Tamanho Funcional de 1 CE de Complexidade Baixa | 3 PF |

### Exemplo: Logon de Nível de Segurança

**Requisitos do Usuário**

O usuário requer uma função de *logon* para controlar o nível de segurança das janelas. A funcionalidade é ilustrada abaixo.

A função de *logon* requer a entrada dos seguintes campos:

- Identificador do Usuário
- Senha do Usuário

Quando o usuário realiza o *logon*, o arquivo de Nível de Segurança é lido para validar o identificador do usuário e a senha, assim como para determinar as janelas que o usuário pode acessar e manter.

Gerar mensagens de erro e destacar campos incorretos se os campos não permitirem edição. Duas (2) mensagens de erro e uma (1) mensagem de confirmação estão incluídas para a transação de *logon* de nível de segurança.

**Tela de *Logon* de Nível de Segurança**

A ilustração a seguir apresenta a janela para o *logon* no sistema.

![Janela de Logon de Nível de Segurança do Sistema de Recursos Humanos, com os campos ID Usuário e Senha.](images/p494-janela-logon-nivel-seguranca.png)

O usuário pressiona a tecla entra depois que toda informação é incluída. O ID do Usuário e a Senha são validados e logicamente todo acesso do usuário é assinalado.

**Passo 1 — Identificar o Processo Elementar**

|  |  |
|---|---|
| A Função de Transação atende aos requisitos de um Processo Elementar? | Sim. |

**Passo 2 — Determinar se o Processo Elementar é único**

|  |  |
|---|---|
| A Função de Transação é única em relação a outros processos elementares? | Sim. Nenhum outro processo elementar executa esta função. |

**Passo 3 — Classificar cada Processo Elementar**

| Regras de Contagem de CE | A Regra se Aplica? |
|---|---|
| 1. Possui a intenção primária de apresentar informações ao usuário, e: | Sim. A intenção primária é apresentar informação ao usuário. |
| - referencia uma função de dados para recuperar dados ou informação de controle e | Sim. Dados são recuperados a partir do ALI Nível de Segurança. |
| - não satisfaz o critério de ser classificado como uma SE | Sim. Não executa cálculos, não cria dados derivados e não atualiza nenhum ALI |

**Conclusão**

O *Logon* de Nível de Segurança é uma CE.

**Passo 4 — Contar ALR - Arquivo Lógico Referenciado (tipo de arquivo referenciado)**

| Regra de Contagem de ALR | A Regra se Aplica? |
|---|---|
| 1. Um ALR deve ser contado para cada função de dados que é acessada (lida e/ou mantida) pela função de transação. | O ALI Nível de Segurança é lido. Uma CE não pode manter um ALI por definição. |

**Passo 5 — Contar DER - Dado Elementar Referenciado (tipo de dado elementar)**

| Regras de Contagem de DER | A Regra se Aplica? |
|---|---|
| 1. Contar um DER para cada atributo único, reconhecido pelo usuário e não repetido, que atravessa (entra e/ou sai) a fronteira durante o processamento de uma função de transação. | ID Usuário, Senha. |
| 2. Contar apenas um DER para a função de transação, para a habilidade da aplicação de enviar uma mensagem de resposta, mesmo que existam multiplas mensagens. | Mensagens de Confirmação e Erro. |
| 3. Contar apenas um DER para a função de transação, para a habilidade de iniciar ação(ões), mesmo que existam múltiplas maneiras de fazê-lo. | Tecla Entra |
| 4. Não contar os seguintes itens como DERs: |  |
| - literais | Literais como cabeçalhos de tela não são contados. |
| - *application generated stamps* | Não existem |
| - variáveis de paginação | Não existem |
| - navegação | Não existem |
| - atributos gerados sem saída da fronteira e | Não existem |
| - atributos recuperados ou referenciados a partir de um ALI ou AIE sem saída da fronteira. | Não existem |

**Passo 6 — Determinar a Complexidade Funcional**

|  |  |
|---|---|
| 1 ALR e 4 DERs | Complexidade é Baixa |

**Passo 7 — Determinar Tamanho Funcional**

|  |  |
|---|---|
| Tamanho Funcional de 1 CE de Complexidade Baixa | 3 PF |
