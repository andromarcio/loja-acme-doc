# Parte 2 · Capítulo 7 — Medir Funções de Transação

> Parte 2 — A Transição (Aplicando o Método FSM do IFPUG) · CPM v4.3.1

**Introdução**

Este capítulo fornece um guia para aplicação de regras para medir as funções de transação do tipo entrada externa (EE), saída externa (SE), e consulta externa (CE).

Uma função de transação é um processo elementar que oferece funcionalidade ao usuário para processar dados. Uma função de transação é uma entrada externa, saída externa, ou consulta externa.

Para exemplos que ilustran a aplicação dessas regras, vide Parte 4 – Exemplos.

**Conteúdo**

Este capítulo inclui as seguintes seções:

| Tópico | Página |
| :-- | :-- |
| **Definição e Intenção Primária: EEs, SEs e CEs** | **7-3** |
| Entrada Externa | 7-3 |
| Consulta Externa | 7-3 |
| Saída Externa | 7-3 |
| Resumo das Funções Executadas pelas EEs, SEs e CEs. | 7-4 |
| Definições de Termos Utilizados | 7-5 |
| Resumo das Lógicas de Processamento Usadas pelas EEs, SEs e CEs. | 7-8 |
| **Regras de Contagem de Função de Transação** | **7-9** |
| Procedimentos de Contagem de Função de Transação | 7-9 |
| Identificar Cada Processo Elementar | 7-10 |
| Determinar Unicidade do Processo Elementar | 7-11 |
| **Classificar Cada Processo Elementar** | **7-13** |
| Classificar como uma EE | 7-13 |
| Classificar como uma SE | 7-13 |
| Classificar como uma CE | 7-13 |
| Regras e Definições de Complexidade e Contribuição | 7-14 |
| Definição de RLR | 7-14 |
| Regra de RLR | 7-14 |
| Definição de DER | 7-14 |
| Regras de DER | 7-14 |
| Diretrizes para Complexidade e Contribuição de EE | 7-15 |
| Orientações para contagem de RLR em uma EE | 7-15 |
| Orientações para contagem de DER em uma EE | 7-15 |
| Guia de Complexidade e Contribuição para SE/CE | 7-17 |
| Orientações para contagem de RLR para SEs | 7-17 |
| Orientações para contagem de RLR para CEs | 7-17 |
| Orientações compartilhadas de contagem de DER para SEs e CEs | 7-17 |
| Determinação de Complexidade e Contribuição | 7-19 |
| **Dicas para Ajudar na Contagem EEs, SEs e CEs** | **7-21** |
| Dicas Adicionais para Ajudar na Contagem de SEs e CEs | 7-23 |

## Definição e Intenção Primária: EEs, SEs e CEs

Esta seção inclui a definição e intenção primária de uma entrada externa (EE), saída externa (SE) e uma consulta externa (CE). As definições dos termos utilizados neste manual, bem como os respectivos exemplos, foram incluídas no decorrer desta seção.

### Entrada Externa

Uma entrada externa (EE) é um processo elementar que processa dados ou informações de controle que vêm de fora da fronteira da aplicação. A intenção primária de uma EE é manter um ou mais ALIs e/ou alterar o comportamento do sistema.

### Consulta Externa

Uma consulta externa (CE) é um processo elementar que envia dados ou informações de controle para fora da fronteira da aplicação. A intenção primária de uma consulta externa é apresentar informações ao usuário através da recuperação de dados ou informações de controle. A lógica de processamento não contém fórmula matemática ou cálculo, e nem cria dados derivados. Nenhum ALI é mantido durante o processamento, nem o comportamento do sistema é alterado.

### Saída Externa

Uma saída externa (SE) é um processo elementar que envia dados ou informações de controle para fora da fronteira da aplicação e que inclui um processamento adicional ao de uma consulta externa. A intenção primária de uma SE é apresentar informações ao usuário através de lógica de processamento que não seja apenas a recuperação de dados ou informações de controle. A lógica de processamento deve conter pelo menos uma fórmula matemática ou cálculo, criar dados derivados, manter um ou mais ALIs ou alterar o comportamento do sistema.

### Resumo das Funções Realizadas pelas EEs, SEs e CEs

Como indicado na Parte 1, a principal diferença entre os tipos de função de transação é sua intenção primária. A tabela abaixo mostra resumidamente as funções que podem ser executadas por cada tipo de função de transação, especificando a intenção primária de cada uma.

*Tipo de Função de Transação:*

| Função: | EE | SE | CE |
| :-- | :-: | :-: | :-: |
| Alterar o comportamento do sistema | IP | F | N/A |
| Manter um ou mais ILFs | IP | F | N/A |
| Apresentar a informação ao usuário | F | IP | IP |

Legenda:

- **IP** a intenção primária do tipo de função de transação
- **F** é uma função do tipo de função de transação, mas não é a intenção primária e está presente algumas vezes
- **N/A** a função não é permitida para o tipo de função de transação

A principal diferença entre EEs e SEs/CEs é a intenção primária.

Algumas das diferenças entre SEs e CEs são que uma SE pode alterar o comportamento do sistema, ou manter um ou mais ALIs enquanto executa a intenção primária de apresentar informações ao usuário. Outras diferenças são identificadas na seção abaixo, que resume as formas de lógica de processamento para cada função de transação.

### Definições de Termos Utilizados

Os parágrafos seguintes incluem as definições da Parte 1 necessárias para determinar EEs, SEs e CEs.

**Processo Elementar**

Um *Processo Elementar* é a menor unidade de atividade que é significativa para o usuário.

Por exemplo, requisitos podem indicar a necessidade de adicionar diferentes tipos de informação do funcionário (ex. endereço, informações de salário e dependentes), mas a menor unidade de atividade significativa para o usuário é Adicionar Funcionário. Neste exemplo, adicionar um funcionário (sem adicionar endereço e informações de salário e dependente) não cumpre todos os critérios. Outros sistemas podem tratar a manutenção de salário e/ou informações do dependente independentemente do funcionário.

**Informações de Controle**

*Informações de controle* são dados que influenciam um processo elementar da aplicação especificando o que, quando, ou como dados serão processados.

Por exemplo, alguém do departamento de folha de pagamento estabelece ciclos de pagamentos, para planejar quando os funcionários de cada local serão pagos. O ciclo, ou programa de pagamento contém informações de datas que irão afetar o momento da ocorrência do processo elementar de pagamento de funcionários.

**Mantido**

O termo *mantido* se refere a habilidade de incluir, alterar ou excluir dados através de um processo elementar.

Os exemplos incluem, mas não são limitados a inclusão, alteração, exclusão, carga inicial, revisão, atualização, atribuição e criação.

**Usuário**

Um *usuário* é qualquer pessoa ou coisa que se comunica ou interage com o software a qualquer momento.

Os exemplos incluem pessoas do departamento do RH que interagem com a aplicação para configurar funcionários, e a aplicação de Benefícios que interage com a aplicação de RH para receber informações sobre os dependentes dos funcionários.

**Significativo**

É reconhecido pelo usuário e satisfaz um Requisito Funcional do Usuário.

**Lógica de Processamento**

*Lógica de Processamento* é definida como qualquer um dos requisitos especificamente solicitados pelo usuário para completar um processo elementar como validações, algorítmos ou cálculos e leitura ou manutenção de uma função de dados. Esses requisitos podem incluir as seguintes ações:

1. Validações são executadas

    Por exemplo, quando incluir um novo funcionário em uma organização, o processo de funcionário valida o tipo DER do funcionário.

2. Fórmulas matemáticas e cálculos são executados

    Por exemplo, ao produzir informações sobre todos os funcionários de uma organização, o processo inclui o cálculo do número total de funcionários assalariados, funcionários horistas e de todos os funcionários.

3. Valores equivalentes são convertidos

    Por exemplo, a idade do funcionário é convertida para um grupo de faixa etária usando uma tabela.

4. Dados são filtrados e selecionados através da utilização de critérios especificados para comparar vários grupos de dados

    Por exemplo, para gerar uma lista de funcionários por atribuição, um processo elementar compara o código da tarefa de uma atribuição para selecionar e listar os funcionários com esta atribuição.

5. Condições são analisadas para determinar quais são aplicáveis

    Por exemplo, a lógica de processamento empregada por um processo elementar na inclusão de um funcionário, vai depender do funcionário ser pago através de salário mensal ou horas trabalhadas. A entrada de DERs (e o resultado do processamento lógico) baseado em uma escolha diferente (assalariado ou horista) neste exemplo é parte de um processo elementar.

6. Um ou mais ALIs são atualizados

    Por exemplo, ao incluir um funcionário, o processo elementar atualiza o ALI “funcionário” para manter os dados do funcionário.

7. Um ou mais ALIs e AIEs são referenciados

    Por exemplo, ao incluir um funcionário, o AIE “moeda” é referenciado para usar a taxa de câmbio do dólar correta, para determinar o valor da hora do funcionário em dólares.

8. Dados ou informações de controle são recuperados

    Por exemplo, para ver uma lista de funcionários, as informações dos funcionários são recuperadas de uma função de dados.

9. Dados derivados são criados através da transformação de dados existentes, para criar dados adicionais

    Por exemplo, para determinar (derivar) um número de registro do paciente (ex. BARJO01), os seguintes dados são concatenados:

    - as 3 primeiras letras do sobrenome do funcionário (BAR de Barros)
    - as 2 primeiras letras do nome do funcionário (JO de João)
    - um número seqüencial de dois dígitos (começando de 01)

10. O comportamento da aplicação é alterado

    Por exemplo, o comportamento do processo elementar de pagamento de funcionários é alterado quando uma mudança é feita para pagá-los às sextas-feiras, a cada duas semanas, ao invés de pagá-los no 15º dia e no último dia do mês, resultando em 26 períodos de pagamento por ano, contra 24.

11. Preparar e apresentar informações fora da fronteira

    Por exemplo, uma lista de funcionários apresentada ao usuário.

12. Existe a capacidade de receber dados ou informações de controle que entram pela fronteira da aplicação

    Por exemplo, um usuário entra com várias informações para incluir uma ordem de compra na aplicação.

13. Dados são reclassificados ou rearrumados. Esta forma de processamento lógico não implica na identificação de tipo ou contribuição na unicidade de um processo elementar; ou seja, a orientação dos dados não constitui unicidade.

    Por exemplo, uma lista de funcionários é classificada em ordem alfabética ou de localização.

    Por exemplo, em um pedido na tela de entrada, a informação do cabeçalho é organizado no topo da tela, e os detalhes são colocados abaixo.

Um processo elementar pode incluir múltiplas alternativas ou ocorrências das ações acima.

Por exemplo, validações, filtros, reclassificações, etc.

### Resumo das Lógicas de Processamento Utilizadas pelas EEs, SEs e CEs

A tabela seguinte resume as formas de lógica de processamento que podem ser executadas pelas EEs, SEs e CEs. Para cada tipo de função de transação, certos tipos de lógica de processamento podem ser executadas para atender a intenção primária daquele tipo. As 13 ações, por si só, não permitem identificar processo elementares únicos.

*Tipo da Função de Transação*

| Formas de lógica de processamento: | EE | SE | CE |
| :-- | :-: | :-: | :-: |
| 1. Validações são efetuadas | p | p | p |
| 2. Cálculos matemáticos são efetuados | p | d\* | n |
| 3. Valores equivalentes são convertidos | p | p | p |
| 4. Dados são filtrados e selecionados por critérios específicos para comparar vários grupos de dados | p | p | p |
| 5. Condições são analisadas para determinar quais se aplicam | p | p | p |
| 6. Pelo menos um ALI é atualizado | d\* | d\* | n |
| 7. Pelo menos um ALI ou AIE é referenciado | p | p | d |
| 8. Dados ou informações de controle são recuperados | p | p | d |
| 9. Dados derivados são criados | p | d\* | n |
| 10. O comportamento do sistema é alterado | d\* | d\* | n |
| 11. Preparar e apresentar informações para fora da fronteira | p | d | d |
| 12. Dados ou informações de controle entrando pela fronteira da aplicação são aceitos | d | p | p |
| 13. Os dados são reclassificados ou reorganizados | p | p | p |

Legenda:

- **d** o tipo de função **deve** executar esta forma de lógica de processamento
- **d\*** o tipo de função **deve** executar pelo menos uma destas formas de lógica de processamento
- **p** o tipo de função **pode** executar esta forma de lógica de processamento, mas a mesma não é obrigatória
- **n** o tipo de função **não pode** executar esta forma de lógica de processamento

## Regras de Contagem de Função de Transação

Esta seção oferece um guia para a aplicação de regras na contagem das EEs, SEs e CEs.

### Procedimentos de Contagem de Função de Transação

Os procedimentos de contagem de função de transação devem incluir os seguintes passos:

| Passo | Ação |
| :-: | :-- |
| 1 | Identificar cada processo elementar. |
| 2 | Determinar o processo elementar único. |
| 3 | Classificar cada função de transação como Entrada Externa (EE), Saída Externa (SE) ou Consulta Externa (CE). |
| 4 | Determinar a complexidade functional para cada função de transação e sua contribuição para o tamanho functional. |

As regras na Parte 1 são explicadas nos seguintes parágrafos.

### Identificar Cada Processo Elementar

Para identificar cada processo elementar, as atividades a seguir devem ser realizadas:

Compor e/ou decompor os Requisitos Funcionais do Usuário até a menor unidade de atividade que satisfaz todos os itens a seguir:

- é significativo para o usuário

    Por exemplo, os requisitos funcionais do usuário requerem a habilidade de adicionar um novo funcionário na aplicação.

- constitui uma transação completa

    Por exemplo, a definição do usuário inclui informações de salário e dependentes do funcionário. Se o número de dependentes é maior do que zero, ao adicionar um funcionário deve incluir informações do dependente. Neste exemplo, adicionar um funcionário (sem adicionar endereço e informações de salário e dependente) não cumpre todos os critérios. Outros sistemas podem tratar a manutenção de salário e/ou informações do dependente independentemente do funcionário.

- é auto-contido e

    Por exemplo, o processo incluir não é auto-suficiente a menos que toda informação obrigatória seja informada e todos os passos do processamento são executados; ex. validações, cálculos, atualização de ALIs.

- deixa o negócio de aplicação sendo medida em um estado consistente

    Por exemplo, os requisitos do usuário para adicionar um funcionário incluem a configuração de informações de salário e dependentes. Se toda informação do funcionário não é adicionada, um funcionário ainda não foi criado. Adicionar alguma informação sozinha deixa o negócio de adicionar um funcionário em um estado inconsistente. Se tanto o salário do funcionário e a informação do dependente são informados, a unidade de atividade é completada e o negócio é deixado em um estado consistente.

Identifique um processo elementar para cada unidade de atividade identificada que agrupa todos os critérios acima.

### Determinar Processos Elementares Únicos

Para determinar processos elementares únicos, as atividades a seguir devem ser cumpridas

Quando comparado a um Processo Elementar (PE) já identificado, conte dois PEs similares como o mesmo Processo Elementar se eles:

- Requerem o mesmo conjunto de DERs e
- Requerem o mesmo conjunto de ALRs e
- Requerem o mesmo conjunto de lógicas de processamento para completar o processo elementar

**Nota:** Um processo elementar pode ter pequena variação em DERs ou ALRs assim como múltiplas alternativas, variações ou ocorrências de lógicas de processamento abaixo.

**Nota:** Quando os dois processos elementares são comparados e se determina que eles contém diferentes DERs, ALRs ou Processamento Lógico, eles são identificados como processos elementares separados se forem especificados como requisitos functionais distintos pelo usuário.

**Nota:** O teste de unicidade acima deve ser utilizado para comparar dois PEs que já tenham sido identificados e não como justificativa para dividir um único PE em dois PEs como resultado de variações. Dividir um único PE em dois PEs baseado nas variações pode indicar que as regras para identificar um PE não tenha sido satisfeitas.

Por exemplo, quando um PE para Adicionar Funcionário requer DERs adicionais para tratar endereços de funcionários europeus e americanos (caixa postal/ CEP, país/estado, número de telefone e código da cidade). O PE não é dividido em dois PEs por conta da pequena diferença no endereço do funcionário. O PE é ainda Adicionar Funcionário, e há uma variação na lógica de processamento e DERs para contar as diferenças no endereço e número de telefone.

Por exemplo, quando um PE para Adicionar funcionário foi identificado, o mesmo não é dividido em dois PEs para contar o fato de que um funcionário pode ou não ter dependentes. O PE ainda é Adicionar Funcionário, e há variação no processo lógico e DERs para contar dependentes.

Por exemplo, quando o requisito funcional do usuário especificar a necessidade para dois relatórios semelhantes (tal como o Relatório 1 que contém Nome do Consumidor, Identidade do Consumidor, e Endereço e Relatório 2 que contém Nome do Consumidor, Identidade do Consumidor, Endereço e Telefone), os relatórios são identificados como PEs separados uma vez que o requisito funcional do usuário especifica a necessidade para diferentes DERs. Os relatórios não são combinados em um PE único apenas porque têm DERs semelhantes.

- Não divida um processo elementar com múltiplas formas de processamento lógico em múltiplos processos elementares. Se um processo elementar é subdividido inapropriadamente o mesmo não reúne os critérios (listados acima) de um processo elementar.

### Classificar Cada Processo Elementar

Classificar cada processo elementar como uma Entrada Externa (EE), Saída Externa (SE) ou uma Consulta Externa (CE) baseado na sua intenção primária.

A intenção primária de um processo elementar deve ser identificada pelos seguintes itens:

- alterando o comportamento da aplicação
- mantendo um ou mais ALIs
- apresentando informação ao usuário

As formas de lógica de processamento necessárias para completar o processo elementar deve ser identificado através da lista apresentada na página 7-8.

**Classificar como uma EE**

Tem a intenção primária de:

- manter um ou mais ALIs ou
- alterar o comportamento da aplicação e

Incluir a lógica de processamento de aceitar dados ou informação de controle que entra na fronteira de aplicação

**Classificar como uma SE**

Tem a intenção primária de apresentar a informação ao usuário, e

Incluir pelo menos uma das formas seguintes de lógica de processamento:

- cálculos matemáticos são realizados
- um ou mais ALIs são atualizados
- é criado dado derivado ou *
- o comportamento da aplicação é alterado

**Nota:** \*Campos calculados são uma forma de dado derivado, apesar de que dados derivados podem ser também criados sem realizar o cálculo.

**Classificar como uma CE**

Tem a intenção primária de apresentar informação ao usuário, e:

- referenciar uma função de dados para recuperar dados ou informações de controle e
- não satisfaz o critério de ser classificado como uma SE

### Regras e Definições de Complexidade e Contribuição

O número de EEs, SEs e CEs e suas complexidades funcionais determinam a contribuição das funções de transação para o tamanho funcional.

Atribua uma complexidade funcional a cada EE, SE e CE identificada, com base no número de tipos de arquivos referenciados (ALRs) e tipos de dados elementares (DERs).

Na aplicação de regras de RLR/DER para funções do tipo transação, é importante reconhecer as diferenças nas funções que cada tipo pode realizar de acordo com suas regras de classificação (ex. uma CE, pela regra não pode atualizar um RLR; consequentemente o guia para contar um RLR para uma atualização de ALI não se aplica). Para identificar as funções que um tipo de função de transação pode realizar, consultar a tabela na página 7-8.

**Definição de ALR**

Um *tipo de arquivo referenciado* é uma função de dados lida e/ou mantida pela função de transação.

Um *tipo de arquivo referenciado* inclui:

- Um arquivo lógico interno lido ou mantido por uma função de transação ou
- Um arquivo de interface externa lido por uma função de transação

**Regra de ALR**

Um ALR deve ser contado para cada função de dados acessada (lida e/ou escrita).

**Definição de DER**

Um *tipo de dado elementar* é um campo único, reconhecido pelo usuário e não repetido.

**Regras de DER**

Para contar DERs como uma função de transação, as atividades a seguir devem ser realizadas

- Revisar tudo que cruza (entra e/ou sai) da fronteira
- Conte um DER para cada campo único reconhecido pelo usuário, atributo não repetido que cruza (entra e/ou sai) a fronteira durante o processamento da função de transação
- Conte apenas um DER por função de transação para a habilidade de enviar uma mensagem de resposta de aplicação mesmo que sejam mensagens múltiplas
- Conte apenas um DER por função de transação para a habilidade de iniciar ação(ões) mesmo que haja múltiplos meios para realizá-la
- Não conte os itens a seguir como DERs:
    - literais como títulos de relatório, tela ou identificador do painel, títulos de coluna e títulos de atributos
    - selos gerados automaticamente pelo sistema como atributos de data e hora
    - variável de paginação, número de páginas e informação de posicionamento; ex. ‘Linhas 37 a 54 de 211’
    - ajudas de navegação como a habilidade de navegar com uma lista utilizando “anterior”, “próximo”, “primeiro”, “ultimo” e seus gráficos equivalentes
    - atributos gerados dentro da fronteira por uma função de transação e armazenado em um ALI sem sair da fronteira
    - atributos obtidos ou referenciados de um ALI ou AIE para a participação em processamento sem sair da fronteira

**Regras de Complexidade e Contribuição de EE**

Esta seção define as regras de ALR e DER utilizadas para determinar a complexidade e contribuição das entradas externas.

**Regras de ALR para uma EE**

Reconhecendo que uma EE deve atualizar um ALI ou alterar o comportamento da aplicação, as seguintes regras são aplicáveis quando contar ALRs:

- Conte um ALR para cada ALI mantido
- Conte um ALR para cada ALI ou AIE lido
- Conte apenas um ALR para cada ALI que seja lido e mantido

**Diretrizes de DER para uma EE**

Reconhecendo que uma EE deve atualizar um ALI ou controlar o comportamento da aplicação, as seguintes regras são aplicáveis quando contar DERs:

- Revise tudo que cruza (entra e/ou sai) a fronteira
- Conte um DER para cada campo único reconhecido pelo usuário, atributo não repetido que cruza (entra e/ou sai) da fronteira durante o processamento da função de transação

    Por exemplo, nome do trabalho e grade de pagamento são dois campos que o usuário informa quando inclui um trabalho.

- Conte apenas um DER por função de transação para a habilidade de enviar uma mensagem de resposta mesmo se forem várias mensagens

    Por exemplo, se um usuário tenta incluir um funcionário existente na aplicação de Recursos Humanos, o sistema gera a respectiva mensagem de erro e o campo incorreto é marcado. Conte um DER que incluirá todas as respostas que indicam condições de erro, confirmam que o processamento está concluído, ou confirmam que o processamento deverá continuar.

- Conte apenas um DER por função de transação para a habilidade de iniciar ação(ões) mesmo que haja múltiplos meios para isto

    Por exemplo, se o usuário pode iniciar a inclusão de um funcionário clicando no botão OK ou pressionando uma tecla PF, conte um DER para a habilidade de iniciar o processo.

- Não conte os itens a seguir como DERs:
    - literais como títulos de relatório, tela ou identificador do painel, títulos de coluna e títulos de atributos
    - selos gerados automaticamente pelo sistema como atributos de data e hora
    - variáveis de paginação, número de páginas e informação de posicionamento; ex. ‘Linhas 37 a 54 de 211’
    - ajudas de navegação como a habilidade de navegar com uma lista utilizando “anterior”, “próximo”, “primeiro”, “último” e seus equivalentes gráficos
    - atributos gerados dentro da fronteira pela função transacional e gravadas no ALI sem sair da fronteira

        Por exemplo, a fim de manter o salário-hora em dólar para funcionários horistas que trabalhem em outros países com outras moedas, o salário-hora local é informado pelo usuário. Durante o processamento dos dados fornecidos para incluir um funcionário, uma taxa de câmbio é recuperada pelo sistema de moedas, para calcular o salário-hora em dólares. O salário-hora em dólar é mantido no ALI funcionário, como resultado da inclusão do funcionário. O salário-hora em dólar não poderia ser contado como um DER para a EE porque não entra pela fronteira, sendo ao invés disso calculado internamente (i.e., é um dado derivado).

    - atributos obtidos ou referenciados de um ALI ou AIE para a participação no processamento sem sair da fronteira

        Por exemplo, quando o pedido do cliente é incluído no sistema, o preço unitário é automaticamente recuperado para cada item pedido e gravado no registro da fatura. O preço unitário não poderia ser contado como um DER para a EE porque não atravessa a fronteira da aplicação quando o usuário inclui o pedido do cliente.

**Regras de Complexidade e Contribuição de SE/CE**

Esta seção define as regras de ALR e DER usadas para determinar a complexidade e contribuição das saídas externas e consultas externas.

**Regras Comuns para CEs**

Reconhecendo que uma CE não pode atualizar um ALI, o guia a seguir aplica quando contar ALRs para CEs:

- Conte um ALR para cada ALI ou AIE lido

**Guia RLR para SEs**

Reconhecendo que uma SE pode atualizar um ALI, o guia adicional a seguir aplica quando conta ALRs para SEs:

- Conte um ALR para cada ALI ou AIE lido
- Conte um ALR para cada ALI mantido
- Conte apenas um ALR para cada ALI que é lido ou mantido

**Regras Comuns de DER para SEs e CEs**

As seguintes regras são aplicáveis à contagem de DERs, tanto para SEs quanto para CEs:

- Revise tudo que cruza (entra e/ou sai) a fronteira
- Conte um DER para cada campo único, não repetido, reconhecido pelo usuário, que cruza (entra e/ou sai) a fronteira durante o processamento da função de transação

    Por exemplo (SE/CE), para gerar uma lista de funcionários, o nome do funcionário é um campo que o usuário fornece para indicar quais funcionários devem ser listados.

    Por exemplo (SE/CE), uma mensagem de texto pode ser uma única palavra, uma sentença ou uma frase – uma linha ou parágrafo incluído em um relatório como comentário explicativo conta como um único DER.

    Por exemplo (SE/CE), um número de conta ou data fisicamente gravado em vários campos é contado como um DER quando requerido como um único pedaço de informação.

    Por exemplo (SE/CE), um gráfico tipo pizza poderia ter uma legenda de categoria e um equivalente numérico na saída gráfica. Conte dois DERs – um para indicar a categoria e outro para o valor numérico.

- Conte apenas um DER por função de transação para a capacidade de enviar uma mensagem de resposta da aplicação mesmo que haja múltiplas mensagens

    Por exemplo (SE/CE), se um usuário tenta solicitar uma listagem, mas não tem acesso à informação, conte um DER para a resposta do sistema.

- Conte um DER para a habilidade de especificar uma ação a ser executada por função de transação, mesmo que existam vários meios para isto.

    Por exemplo (SE/CE), se o usuário pode iniciar a geração de um relatório clicando no botão OK ou pressionando a chave PF, conte um DER para a habilidade de iniciar o relatório.

- Não conte os itens a seguir como DERs:
    - literais como títulos de relatório, tela ou identificador do painel, títulos de coluna e títulos de atributos
    - Por exemplo (SE/CE), literais inclui títulos de relatório, tela ou identificador do painel, títulos de coluna e títulos de campo.
    - selos gerados automaticamente pelo sistema como atributos de data e hora

        Por exemplo (SE/CE), campos de data e hora se são exibidos.

    - variável de paginação, número de páginas e informação de posicionamento; ex. ‘Linhas 37 a 54 de 211’

        Por exemplo (SE/CE), número de páginas aparecendo em um relatório.

    - ajudas de navegação como a habilidade de navegar com uma lista utilizando “anterior”, “próximo”, “primeiro”, “último” e seus equivalentes gráficos

        Por exemplo (SE/CE), botões anterior e próximo que permite o usuário navegar adiante e atrás de uma lista de registros.

    - atributos gerados dentro da fronteira por uma função de transação e salvo em um ALI sem sair da fronteira

        Por exemplo (SE), quando contracheque é impresso, o campo de estado do ALI funcionário é atualizado para indicar que o contracheque foi impresso. Não conte o campo de estado como um DER pois o mesmo não cruza a fronteira.

        **Nota:** Uma CE pela regra não pode atualizar uma ALI, então esta regra não se aplica.

    - atributos obtidos ou referenciados de um ALI ou AIE para a participação no processamento sem sair da fronteira

        Por exemplo (SE/CE), quando um relatório de contas passadas é criado, a conta dos dados é referenciado para determinar se a conta é passada, mas isso não aparece no relatório. Não conte a conta de dados passados como uma DER pois o mesmo não cruza a fronteira.

### Determinação de Complexidade e Contribuição

A complexidade functional de cada função de transação deve ser determinada utilizando os passos abaixo.

| Passo | Ação |
| :-: | :-- |
| 1 | Identificar e contar os ALRs e DERs, as regras de contagem de complexidade e contribuição que se encontram na página 7-14 devem ser usadas. |
| 2 | A complexidade funcional de cada função de transação deve ser determinada usando o número de ALRs e DERs de acordo com as matrizes a seguir. |

**Entrada Externas:**

|  | 1 a 4 DERs | 5 a 15 DERs | 16 ou mais DERs |
| :-- | :-- | :-- | :-- |
| 0 a 1 ALRs | Baixa | Baixa | Média |
| 2 ALRs | Baixa | Média | Alta |
| 3 ou mais ALRs | Média | Alta | Alta |

**Saída Externas e Consultas Externas:**

|  | 1 a 5 DERs | 6 a 19 DERs | 20 ou mais DERs |
| :-- | :-- | :-- | :-- |
| 0 a 1 ALRs | Baixa | Baixa | Média |
| 2 a 3 ALRs | Baixa | Média | Alta |
| 4 ou mais ALRs | Média | Alta | Alta |

| Passo | Ação |
| :-: | :-- |
| 3 | O tamanho funcional de cada função de transação deve ser determinadao usando o tipo e a complexidade funcional de acordo com as tabelas abaixo. |

**Entrada Externas e Consultas Externas:**

| Classificação da Complexidade Funcional | Pontos de Função |
| :-- | :-: |
| Baixa | 3 |
| Média | 4 |
| Alta | 6 |

**Saída externas:**

| Classificação da Complexidade Funcional | Pontos de Função |
| :-- | :-: |
| Baixa | 4 |
| Média | 5 |
| Alta | 7 |

## Dicas para Ajudar na Contagem de EEs, SEs, e CEs

As dicas seguintes podem ajudar na aplicação das regras de contagem de EEs, SEs e CEs e executar a medição de tamanho funcional.

As dicas *não são* regras e não devem ser usadas como regras.

- O dado é recebido de fora da fronteira da aplicação?
    - Observe o fluxo de dados.
    - Identifique onde ocorre a interface entre o usuário e outras aplicações na decomposição funcional do processo.
- O processo é a menor unidade de atividade na perspectiva do usuário?
    - Observe os diferentes formulários impressos ou on-line utilizados.
    - Revise os ALIs para identificar como o usuário agrupa as informações.
    - Identifique onde ocorre a interface com o usuário e outras aplicações na decomposição funcional do processo.
    - Observe o que acontece no sistema manual.
    - Note que uma entrada física, um arquivo de transação ou uma tela pode, quando visto logicamente, corresponder a um certo número de EEs, SEs ou CEs.
    - Note que duas ou mais entradas físicas, arquivos de transação ou telas (ex., abas em uma tela) podem corresponder a uma EE, SE ou CE se a lógica de processamento for idêntica.
    - Lembrar que dois ou mais relatórios físicos, telas ou arquivos de saída em lote podem correspondem a uma SE/CE se o processamento lógico for idêntico.
- O processo é autocontido e deixa o negócio em um estado consistente?
    - Revise outras entradas externas, saídas externas e consultas externas para entender como o usuário trabalha com a informação.
    - Analise o diagrama de processos para obter dicas.
    - Observe o que acontece no sistema manual.
    - Confira a consistência com outras decisões.
- Identifique a intenção primária do processo elementar antes de classificá-lo como uma EE, SE ou CE.
- A identificação do(s) processo(s) elementar(es) é baseada em um entendimento e interpretação comum dos requisitos entre o usuário e os desenvolvedores.
- Cada elemento de uma decomposição funcional pode não ser mapeado para um único processo elementar.
- A identificação do processo elementar requer a interpretação dos requisitos do usuário.
- O processamento lógico é único de outras EEs, SEs e CE?
    - Identificar entradas e saída batchs baseada no processamento lógico requerido.
    - Uma transação que ocorra em entrada física múltipla, arquivos de transação ou telas, mas o qual tem processamento lógico idêntico, tipicamente corresponde para uma função de transação (EE, SE, CE).
    - Lembre que a ordenação ou reorganização de um conjunto de dados não torna o processamento lógico único.
- Os atributos de dados são diferentes dos de outras EEs, SEs e CEs?
    - Se os atributos de dados parecem ser um subconjunto de atributos de dados de outra EE, SE e CE, certifique-se que dois processos elementares são requeridos pelo usuário — um para os atributos de dados principais e um para os subconjuntos.
- Conte apenas um ALR para cada ALI/AIE referenciado mesmo se os ALI/AIE tiverem vários RLRs.

### Dicas Adicionais para Ajudar na Contagem de SEs e CEs

- O processo é a menor unidade de atividade na perspectiva do usuário?
    - Uma SE ou CE pode ser disparada por um processo dentro da fronteira da aplicação.

        Por exemplo, o usuário solicita que um relatório com todos os salários de funcionários alterados seja enviado para a área de orçamento a cada 8 horas, com base em um relógio interno.

        **Situação A.** O relatório contém nome do funcionário, CPF e salário-hora, todos recuperados do arquivo de funcionário. Esta é a menor unidade de atividade na perspectiva do usuário, não contém fórmulas matemáticas ou cálculos, e nenhum ALI é mantido no processo. Esta é uma CE.

        **Situação B.** O relatório contém nome do funcionário, CPF e salário-hora, todos recuperados do arquivo de funcionário. O relatório também inclui o percentual de mudança no salário do funcionário, calculado a partir dos dados do arquivo de funcionário. Esta é a menor unidade de atividade na perspectiva do usuário, e nenhum ALI é mantido no processo. No entanto, dado que o processo contém uma fórmula matemática, esta é uma SE.

    - Dados derivados de uma SE não precisam ser mostrados na saída.

        Por exemplo, todo mês, um relatório é gerado listando todos os funcionários a serem avaliados nos próximos 30 dias. Os registros são selecionados calculando-se a data da próxima avaliação com base na data da última avaliação do funcionário, que é um campo do arquivo de funcionários, e a data atual + 30 dias. Este seria contado como uma SE, e não como uma CE.
