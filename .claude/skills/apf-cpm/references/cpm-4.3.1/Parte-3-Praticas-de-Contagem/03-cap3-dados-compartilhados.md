# Parte 3 · Capítulo 3 — Dados Compartilhados

> Parte 3 — Práticas de Contagem · CPM v4.3.1

### Introdução

Este capítulo fornece diretrizes adicionais para auxiliar na identificação de arquivos de interface externa (AIEs) e de arquivos lógicos internos (ALIs) bem como arquivos de transação quando dois ou mais sistemas interagem (isto é, diretrizes e esclarecimentos na contagem de dados que são compartilhados entre os sistemas).

### Conteúdo

Este capítulo inclui as seguintes seções:

| Tópico | Página |
|---|---|
| **Contagem de Dados Compartilhados Entre Aplicações** | **3-2** |
| **Cenários de Contagem – Grupo 1** | **3-7** |
| Cenário 1: Leitura | 3-7 |
| Cenário 2: Cópia Estática de Imagem | 3-9 |
| Cenário 3: Cópia/Carga de Imagem – Sem Processamento Adicional | 3-11 |
| Cenário 4: Cópia/Carga de Imagem de uma Tabela Física – Sem Processamento Adicional | 3-13 |
| Cenário 5: Cópia e *merge* | 3-15 |
| Cenário 6: Screen Scraping | 3-17 |
| **Cenários da Contagem – Grupo 2** | **3-18** |
| Cenário 7: Atualizando o Mesmo Dado Armazenado | 3-18 |
| Cenário 8: Dados de Transação Padrão | 3-20 |
| **Resumo** | **3-22** |

## Contagem de Dados Compartilhados Entre Sistemas

**Aplicações que Compartilham Dados**

As aplicações que compartilham dados com outras aplicações:

- Referenciam ou utilizam os dados para concluir uma transação que está sendo processada dentro do sistema que está recebendo ou acessando os dados, ou
- Mantêm arquivos lógicos internos dentro do sistema que está recebendo ou acessando os dados

**Métodos de Compartilhamento de Dados**

Os dados compartilhados, utilizados pelos processos elementares dentro de uma aplicação para manter dados em um arquivo lógico interno ou para apresentar dados ao usuário, podem ser transferidos via:

- Telas on-line (ex. *screen scraping*)
- Acesso direto aos arquivos de dados de outros sistemas
- Arquivos transferidos
- Recuperação direta on-line real-time das informações
- Aplicações *web*

Com o intuito de analisar corretamente estas implementações, os usuários precisam considerar a intenção primária e ter um entendimento comum dos termos que representam as diversas implementações técnicas.

**Intenção Primária**

O conceito de intenção primária é útil na identificação de arquivos lógicos internos e arquivos de interface externa com relação à utilização dos dados na aplicação sendo analisada. A intenção primária refere-se ao papel mais significativo ou importante que a função tem a intenção de realizar. A definição de intenção primária é "intenção que é o primeiro lugar em importância". Portanto, é importante **determinar a intenção primária** na discussão de cada cenário. A implementação física não afeta a intenção primária e deste modo não deve influenciar a análise.

**Definição & Intenção Primária (ALI/AIE)**

**Arquivo Lógico Interno:**

Um Arquivo Lógico Interno (ALI) é um grupo de dados ou informações de controle logicamente relacionados, identificável pelo usuário, mantido dentro da fronteira da aplicação. A intenção primária de um ALI é armazenar dados mantidos através de um ou mais processos elementares da aplicação sendo contada.

Nota: O termo mantido é a capacidade de modificar dados através de um processo elementar. Exemplos incluem, mas não se limitam a, incluir, alterar, excluir, popular, revisar (corrigir), atualizar, assinalar e criar.

**Arquivo de Interface Externa:**

Um Arquivo de Interface Externa (AIE) é um grupo de dados logicamente relacionados ou informação de controle, reconhecido pelo usuário, referenciado pela aplicação sendo medida, mas que é mantido dentro da fronteira de outra aplicação. A intenção primária de um AIE é armazenar dados referenciados por um ou mais processos elementares dentro da fronteira da aplicação medida. Isto significa que um AIE contado por uma aplicação deve ser um ALI em outra aplicação.

## Termos Comuns

Os seguintes termos comuns são utilizados neste documento para descrever técnicas de implementações físicas:

| Termo | Utilizado no Documento |
|---|---|
| **Cópia** | Definição IEEE:<br>(1) Ler os dados de uma origem, deixando a fonte de dados inalterada, e gravar o mesmo dado em outro lugar em uma forma física que pode ser diferente daquela utlizada na fonte. Por exemplo, copiar dados de um disco magnético para uma fita magnética.<br>(2) O resultado de um processo de cópia como o descrito acima. Por exemplo, uma cópia de um arquivo de dados. |
| **Arquivo** | Definição IEEE:<br>"...grupo de registros relacionados tratados como uma unidade. Por exemplo, um arquivo pode consistir de um grupo de registros de fatura." |
| **Imagem** | Uma replicação exata de outro objeto, arquivo ou tabela normalmente criada através de um utilitário. |
| **Carga** | Definição IEEE:<br>"... para copiar instruções do computador ou dados de um depósito externo para um depósito interno ..." |
| **Merge** | Vários arquivos com os mesmos elementos de dados consolidados em um único arquivo. |
| **Refresh** | Processo de recriação de um grupo de dados para atualização a partir da origem. |

## Organização dos Cenários da Contagem

A APF muitas vezes se baseia nas descrições de desenvolvedores das características físicas de uma aplicação. Este capítulo trata estas descrições físicas que um analista de pontos de função frequentemente encontra para auxiliar na correta interpretação de muitas destas interfaces de aplicação.

Este capítulo utiliza diversos cenários como ajuda na análise de situações de dados compartilhados.

**Abordagem**

Este capítulo usa as seguintes abordagens na discussão de dados compartilhados:

- ***Descrição*** - Uma expressão de alto nível do exemplo que está sendo discutido.
- ***Cenário*** - É apresentado um exemplo que geralmente descreve uma atividade física ou transação a respeito de arquivos sendo transferidos entre duas aplicações; ex., compartilhamento de dados.
- ***Diagrama do Cenário*** - O cenário é representado graficamente, como uma ajuda para mapear uma situação ou cenário similar. A seta nos diagramas reflete a direção do fluxo de dados, não a aplicação que inicia a interface.
- ***Interpretação da Contagem*** - Uma interpretação da contagem para o cenário é fornecida, que inclui uma discussão do exemplo e como o mesmo deve ser contado, bem como qualquer premissa com relação à intenção primária.
- ***Diagrama da Solução*** - A solução é representada graficamente.
- ***Resumo da Contagem*** - Os dados e funções de transação aplicáveis a cada aplicação são resumidos na tabela.
- ***FAQs/Variações*** - Se aplicável, algumas variações comuns do cenário podem ser incluídas na sequência da discussão.

**Símbolos Utilizados no Diagrama de Solução**

Os seguintes símbolos são utilizados no diagrama de solução:

- ☑ acima de um tipo de componente indica que o componente **é contado** para a aplicação;
- ☒ acima de um tipo de componente indica que o componente **não deve ser contado** para o cenário
- ⇐ o diagrama retrata a direção do fluxo de dados, não a aplicação que inicia a interface

**Convenções de Nome dos Cenários**

Para manter a consistência, as seguintes convenções para nomenclatura foram utilizadas em todos os cenários:

| Termo | Descrição |
|---|---|
| **Sistema A** | Sistema origem para os dados referenciados ou de transação. |
| **Sistema B** | Sistema que recebe os dados referenciados ou de transação. |
| **Arquivo X** | Um ALI contado no sistema A. |
| **Arquivo X (Principal X)** | Um AIE contado no Sistema B que é um subgrupo de dados do Arquivo X. |
| **Arquivo Y** | Um ALI contado no Sistema B. |
| **Arquivo Z** | Um arquivo de transferência de dados. Este arquivo é gerado pelo Sistema A e lido (processado) pelo Sistema B. |
| **Fronteiras** | As aplicações A e B representam duas aplicações <u>separadas</u>, assim, representam duas fronteiras separadas. |

**Resumo dos Cenários**

Os cenários a seguir não representam uma lista completa das diversas formas que os dados compartilhados são implementados, mas fornecem diretrizes para muitas situações encontradas. A compreensão destes exemplos facilitará o entendimento de cenários adicionais que podem ser encontrados.

Os cenários focam situações onde os dados solicitados para completar os processos elementares da Aplicação B são obtidos da Aplicação A. A Aplicação B é a aplicação que está sendo contada. Os cenários são divididos em dois grupos, cada um dos quais possui diversas implementações:

**GRUPO 1:** A intenção primária é a Aplicação B referenciar dados mantidos pela Aplicação A. Existem duas áreas que são tratadas: funcional e não-funcional.

**Funcional**

Por Razões Funcionais (requisitos do sistema), os sistemas compartilham dados nos seguintes cenários

| Número do Cenário | Cenário | Resumo da Descrição |
|---|---|---|
| 1 | **LEITURA** | A Aplicação B acessa fisicamente os dados da Aplicação A. Este exemplo está atualmente documentado no CPM. |
| 2 | **CÓPIA ESTÁTICA DE IMAGEM** | A Aplicação A gera uma imagem de um depósito de dados, que reflete o estado atual dos dados em um certo tempo e permanece dentro desta fronteira. |

**Não-Funcional**

Por Razões Não-Funcionais (performance, segurança, etc.), a Aplicação B deve usar os dados da Aplicação A e o faz da seguinte forma:

| Número do Cenário | Cenário | Resumo da Descrição |
|---|---|---|
| 3 | **CÓPIA/CARGA DE IMAGEM**<br>**Sem Lógica de Processamento** | A Aplicação A gera uma imagem sem lógica de processamento adicional e a envia para a Aplicação B; o Sistema B carrega a cópia sem lógica de processamento adicional. |
| 4 | **CÓPIA/CARGA DE IMAGEM**<br>**Subgrupo de um ALI** | A Aplicação A gera uma cópia exata de um subgrupo (ex. RLR) sem lógica de processamento adicional e a envia para a Aplicação B. A Aplicação B carrega o RLR sem lógica de processamento adicional. |
| 5 | **CÓPIA / MERGE**<br>**"*Refresh*"** | Os dados guardados em dois sistemas são copiados e mesclados para formar um arquivo que é carregado num terceiro sistema. |
| 6 | **SCREEN SCRAPING** | A Aplicação B acessa telas da Aplicação A para referenciar/obter dados para uso no processamento de uma transação. |

**GRUPO 2** A intenção primária é que a Aplicação B mantenha seus próprios dados através dos dados mantidos pela Aplicação A.

| Número do Cenário | Cenário | Descrição do Cenário |
|---|---|---|
| 7 | **MANTER DEPÓSITO DE DADOS COMUM** | O mesmo depósito de dados é mantido por duas aplicações diferentes. Este exemplo está atualmente documentado no CPM. |
| 8 | **DADOS PADRÃO DE TRANSAÇÃO** | Dados de transação são fornecidos pela aplicação de origem. |

## Cenários de Contagem – Grupo 1

Em cada um dos cenários de 1 a 6, a intenção primária é uma aplicação referenciar dados mantidos por uma ou mais aplicações diferentes; isto pode ser implementado das seguintes maneiras:

### Cenário 1: Leitura

**Descrição**

A Aplicação B acessa fisicamente os dados da Aplicação A para executar uma consulta.

**Cenário**

Uma transação processada pela Aplicação B precisa de informações de um depósito de dados mantido dentro da Aplicação A. A Aplicação B é responsável pelo acesso aos dados da Aplicação A, e a Aplicação B mantém o software para este acesso.

**Diagrama**

![Diagrama do Cenário 1 (Leitura): a Aplicação B recupera dados do arquivo lógico Cliente mantido na Aplicação A.](images/p208-cenario1-diagrama.png)

**Interpretação de Contagem**

***Aplicação A:*** Na perspectiva da Aplicação A, não existe requisito para enviar dados. Os dados estão disponíveis na Aplicação A. Nenhum crédito é dado para a Aplicação A para a transação executada pela Aplicação B, embora o arquivo de dados seja um ALI para a Aplicação A.

***Aplicação B:*** Na perspectiva da Aplicação B, tanto logicamente quanto fisicamente, existe apenas um depósito de dados envolvido. A Aplicação B conta o depósito de dados que reside na Aplicação A como um AIE. A Aplicação B também conta aquele arquivo de dados como um ALR na transação.

**Diagrama da Solução**

![Diagrama da Solução do Cenário 1 (Leitura): Cliente é ALI na Aplicação A e AIE na Aplicação B; EE e SE/CE não são contados.](images/p209-cenario1-solucao.png)

**Resumo da Contagem**

| | ALI | AIE | EE | SE/CE | Nota |
|---|---|---|---|---|---|
| Aplicação A | ✓ | | | | |
| Aplicação B | | ✓ | | | Cliente é também contado como um ALR na função de transação. |

### Cenário 2: Cópia Estática de Imagem

**Descrição**

A Aplicação A gera uma cópia estática de um ALI, refletindo o estado atual dos dados daquele momento, e a cópia permanece em sua fronteira.

**Cenário**

No setor bancário, as transações financeiras são conciliadas diariamente entre todas as instituições financeiras. As transações financeiras subsequentes dos clientes são validadas contra o respectivo saldo a partir desta conciliação. Para atender a este requisito do negócio, a Aplicação A periodicamente gera uma cópia estática dos dados do arquivo lógico Cliente para o Cliente principal (ou Cliente') para que outros sistemas possam referenciá-lo. Cliente' (ou Cliente principal) permanece dentro da fronteira da Aplicação A. Podem existir diferenças entre os dados atuais do Cliente e os dados do Cliente'. A Aplicação B utiliza Cliente'.

**Diagrama de Solução**

![Diagrama do Cenário 2 (Cópia Estática de Imagem): a Aplicação B recupera dados do arquivo lógico Cliente para validar o Cliente com o Cliente'.](images/p210-cenario2-diagrama.png)

**Interpretação da Contagem**

***Aplicação A:*** Na perspectiva da Aplicação A, Cliente é um arquivo lógico interno para a Aplicação A. O Cliente' (principal) não é contado como um ALI separado, nem é tampouco contado como um RLR do Cliente. Cliente' é apenas uma fotografia de Cliente em um determinado tempo.

***Aplicação B:*** Na perspectiva da Aplicação B, Cliente é um arquivo de interface externa para a Aplicação B e é também contado como um ALR para a transação da Aplicação B.

**Diagrama da Solução**

![Diagrama da Solução do Cenário 2 (Cópia Estática de Imagem): Cliente é ALI na Aplicação A e AIE na Aplicação B; EE e SE/CE não são contados.](images/p211-cenario2-solucao.png)

**Resumo da Contagem**

| | ALI | AIE | EE | SE/CE | Nota |
|---|---|---|---|---|---|
| Aplicação A | ✓ | | | | |
| Aplicação B | | ✓ | | | Cliente é também contado como um ALR na função de transação. |

### Cenário 3: Cópia/Carga de Imagem - Nenhum Processamento Adicional

**Descrição**

A Aplicação A gera uma cópia estática sem lógica de processamento adicional e a envia à Aplicação B; a Aplicação B carrega uma cópia sem lógica de processamento adicional

**Cenário**

A Aplicação B requer a habilidade de acessar o arquivo X na Aplicação A apenas para validação e referência. A Aplicação B requer (ex. performance, etc) que a Aplicação A envie um arquivo completo para a Aplicação B. Os dados existentes armazenados na Aplicação B são atualizados a cada vez com a cópia.

**Diagrama**

![Diagrama do Cenário 3 (Cópia/Carga de Imagem): o Arquivo X do Sistema A é copiado/carregado via arquivo Z para a Cópia do Arquivo X no Sistema B.](images/p212-cenario3-diagrama.png)

**Interpretação de Contagem**

Na perspectiva da Aplicação A, esta transferência de dados é uma solução técnica criada para satisfazer o requisito de negócio em que a Aplicação B deve ter acesso, com o propósito de recuperação de dados, ao Arquivo X da Aplicação A.

<u>Logicamente</u> os dados armazenados permanecem na Aplicação A. Neste caso, a cópia dos dados armazenados de uma aplicação para outra é a solução de um requisito não-funcional do usuário (por ex., os dados na Aplicação A não estão disponíveis quando são solicitados pela Aplicação B).

A *intenção primária* da perspectiva de B é referenciar os dados que estão logicamente em A. Uma indicação adicional é que o arquivo no Sistema B é "atualizado" a cada vez com a cópia. Da mesma forma, nenhuma lógica de processamento é executada nem na Aplicação A nem na Aplicação B.

*Transações* - As transações para transferência de dados: o download da aplicação A e a carga do arquivo pela Aplicação B são partes de uma solução técnica e não são contados em nenhuma das aplicações. Na prática, ao contar a Aplicação A isoladamente, pode não ficar aparente para o Analista de Pontos de Função que esta solução exista para satisfazer um requisito não-funcional do usuário, e a mesma pode ser contada incorretamente como uma CE/SE. Nenhum dos dois sistemas conta o Arquivo Z como uma função de transação.

*Arquivos* - Existe apenas um arquivo lógico envolvido. A Aplicação A conta o Arquivo X como um ALI. A Aplicação B conta sua versão copiada do Arquivo X como um AIE. Nenhum dos dois sistemas conta o Arquivo Z como uma função de dados.

**Diagrama da Solução**

![Diagrama da Solução do Cenário 3 (Cópia/Carga de Imagem): Arquivo X é ALI na Aplicação A e AIE na Aplicação B; o Arquivo Z (ALI/AIE), SE e EE não são contados.](images/p213-cenario3-solucao.png)

**Resumo da Contagem**

| | ALI | AIE | EE | SE/CE | Nota |
|---|---|---|---|---|---|
| Aplicação A | ✓ | | | | |
| Aplicação B | | ✓ | | | |

**FAQs, Variações Adicionais**

**P?** O que acontece se um arquivo lógico na Aplicação A é composto por diversas tabelas físicas e a Aplicação A fornece cópias individuais de mais de uma tabela para a Aplicação B?

**R:** O AIE é identificado da mesma maneira como no cenário acima; apenas os campos usados são contados como DERs.

**P?** O que acontece se você tem um armazenamento de dados particionado?

**R:** É particionado para melhor performance, mas ainda é logicamente um arquivo de dados; representa implementação física.

### Cenário 4: Cópia/Carga de Imagem de uma Tabela Física – Nenhum Processamento Adicional

**Descrição**

A Aplicação A gera uma cópia de uma tabela física dentro de um arquivo lógico da Aplicação A sem lógica de processamento adicional e a envia à Aplicação B. A Aplicação B carrega a tabela física sem qualquer lógica de processamento adicional.

**Cenário**

A Aplicação B requer (p. ex., performance, etc.) a habilidade de acessar uma parte do arquivo X na Aplicação A apenas para validação e referência. A Aplicação A envia uma tabela física com o arquivo lógico para a Aplicação B. A visão existente daquela tabela física na Aplicação B é "atualizada" a cada vez com a cópia.

**Diagrama**

![Diagrama do Cenário 4 (Cópia/Carga de Imagem de uma Tabela Física): o Arquivo X do Sistema A é copiado/carregado via arquivo Z para o Arquivo X' no Sistema B.](images/p214-cenario4-diagrama.png)

**Interpretação de Contagem**

Uma vez que o dado é uma cópia da imagem dos dados da Aplicação A, a tabela do Arquivo X' é parte do arquivo lógico X da Aplicação A. A Aplicação B conta o Arquivo X' (com apenas os elementos de dados usados da tabela do Arquivo X') como um AIE.

<u>Logicamente</u> os dados armazenados permanecem na Aplicação A. Neste caso, a cópia dos dados armazenados de uma aplicação para outra é a solução de requisitos não-funcionais do usuário; p. ex., os dados na Aplicação A não estão disponíveis quando solicitados pela Aplicação B.

A *intenção primária* é a Aplicação B referenciar os dados que existem logicamente na Aplicação A.

*Transações* – Uma vez que não existem funções lógicas de transação na carga ou propagação da cópia, nenhuma transação é contada em nenhuma das aplicações para suportar a cópia e carga dos dados compartilhados. Então, a Aplicação A não conta a cópia para a Aplicação B como uma SE/CE, e a Aplicação B não a conta como uma EE. Uma indicação adicional seria que o arquivo na Aplicação B é "atualizado" a cada vez com a cópia.

*Arquivos* – Existe apenas um arquivo lógico envolvido. A Aplicação A conta o Arquivo X como um ALI. A Aplicação B conta a tabela copiada do Arquivo X como um AIE.

**Diagrama da Solução**

![Diagrama da Solução do Cenário 4 (Cópia/Carga de Imagem de uma Tabela Física): Arquivo X é ALI na Aplicação A e AIE na Aplicação B; o Arquivo Z (ALI/AIE), SE e EE não são contados.](images/p215-cenario4-solucao.png)

**Resumo da Contagem**

| | ALI | AIE | EE | SE/CE | Nota |
|---|---|---|---|---|---|
| Aplicação A | ✓ | | | | |
| Aplicação B | | ✓ | | | |

### Cenário 5: Cópia/Merge

**Descrição**

Dados armazenados em duas aplicações são copiados e fundidos para formar um arquivo que é carregado para dentro de uma terceira aplicação. Diversos arquivos com os mesmos elementos de dados são consolidados em apenas um arquivo.

**Cenário**

Para evitar uma sobrecarga da Aplicação C para procurar dinamicamente os dados das Aplicações A e B, os dados são copiados da Aplicação A e da Aplicação B e fundidos em um novo depósito de dados na Aplicação C. O usuário solicitou que as informações das Aplicações A e B sejam atualizadas diariamente para validação ou apenas para referência. Utilitários de carga, *unload* e *merge* são utilizados. Não existe lógica de processamento envolvida. Isto é normalmente uma solução técnica onde duas aplicações têm diferentes instâncias dos mesmos dados lógicos requeridos por uma terceira aplicação.

**Diagrama**

![Diagrama do Cenário 5 (Cópia/Merge): dados dos Sistemas A e B são copiados e fundidos (Merge) para um novo depósito de dados no Sistema C.](images/p216-cenario5-diagrama.png)

**Interpretação da Contagem**

Logicamente, os depósitos de dados permanecem nas Aplicações A e B. A fusão de dados dentro de um único depósito de dados não é requisito suficiente para a criação um novo ALI para a Aplicação C. Desde que não exista lógica de processamento adicional, nenhuma transação é contada para nenhuma aplicação.

Os dados para a Aplicação C devem ser avaliados de acordo com o item 3.4 da Parte 1 – Medir Funções de Dados e Parte 3, Capítulo 2 – Arquivos Lógicos. Ainda que os dados venham de duas diferentes aplicações, os elementos de dados são exatamente os mesmos (veja definição para "merge"). Dessa forma, um único arquivo lógico é identificado para a Aplicação C como um AIE.

**Diagrama da Solução**

![Diagrama da Solução do Cenário 5 (Cópia/Merge): Arquivo é ALI nas Aplicações A e B e AIE na Aplicação C; o depósito fundido (ALI/AIE), SE e EE não são contados.](images/p217-cenario5-solucao.png)

**Resumo da Contagem**

| | ALI | AIE | EE | SE/CE | Nota |
|---|---|---|---|---|---|
| Aplicação A | ✓ | | | | |
| Aplicação B | ✓ | | | | |
| Aplicação C | | ✓ | | | Também contar um ALR na função de transação. |

### Cenário 6: Screen Scraping

**Descrição**

Acesso a outras transações de telas da aplicação para referenciar/obter dados ou para atualizar aqueles dados da aplicação.

**Cenário**

A Aplicação B "lê" o conteúdo de uma tela de consulta na Aplicação A e usa estes dados no processamento de uma função de transação.

**Diagrama**

![Diagrama do Cenário 6 (Screen Scraping): a Aplicação B lê, via tela, os dados da Tabela Arquivo X exibidos pelo Sistema A.](images/p218-cenario6-diagrama.png)

**Interpretação da Contagem**

Logicamente, a Aplicação B está lendo os dados da Aplicação A. A Aplicação A já contou os dados exibidos como um SE/CE (não contados aqui), enquanto a Aplicação B conta os dados como um AIE. Sob uma perspectiva transacional, a Aplicação A é passiva e não conta nada adicionalmente. Para a aplicação B, *screen scraping* é parte do processo elementar da transação e é contado como um ALR (AIE), uma vez que o dado foi originalmente recuperado a partir do ALI da Aplicação A.

**Diagrama da Solução**

![Diagrama da Solução do Cenário 6 (Screen Scraping): Tabela Arquivo X é ALI na Aplicação A e AIE na Aplicação B; os SE/CE não são contados aqui.](images/p218-cenario6-solucao.png)

**Resumo da Contagem**

| | ALI | AIE | EE | SE/CE | Nota |
|---|---|---|---|---|---|
| Aplicação A | ✓ | | | | |
| Aplicação B | | ✓ | | | |

## Cenários da Contagem – Grupo 2

Em cada um dos cenários 7 e 8, a intenção primária é a Aplicação B manter seus próprios dados a partir de dados mantidos pela Aplicação A; isto pode ser implementado como segue:

### Cenário 7: Atualizando o mesmo Depósito de Dados

**Descrição**

O mesmo depósito de dados é mantido por duas diferentes aplicações.

**Cenário**

Tanto o Sistema A quanto o Sistema B mantêm o mesmo ALI. Cada um tem sua própria visão dos dados. Existem alguns elementos de dados comuns e outros são únicos para cada sistema.

**Diagrama**

![Diagrama do Cenário 7 (Atualizando o mesmo Depósito de Dados): o Arquivo X reside em uma Fronteira Estendida, mantido tanto pelo Sistema A quanto pelo Sistema B.](images/p219-cenario7-diagrama.png)

**Interpretação da Contagem**

Um ALI é contado para ambas as aplicações, pois cada um tem transações para mantê-lo. As Aplicações A e B mantêm dados no mesmo ALI. Cada aplicação conta apenas um RLR e DERs mantidos, utilizados ou referenciados por aquela Aplicação.

**Diagrama da Solução**

![Diagrama da Solução do Cenário 7 (Atualizando o mesmo Depósito de Dados): o Arquivo X na Fronteira Estendida é contado como ALI tanto na Aplicação A quanto na Aplicação B.](images/p220-cenario7-solucao.png)

**Resumo da Contagem**

| | ALI | AIE | EE | SE/CE | Nota |
|---|---|---|---|---|---|
| Aplicação A | ✓ | | | | |
| Aplicação B | ✓ | | | | |

### Cenário 8: Dados Padrão de Transação

**Descrição**

Dados de transação são fornecidos pela aplicação de origem.

**Cenário**

A Aplicação A gera um arquivo de transação contendo modificações, o Arquivo Z, que é carregado na Aplicação B. Os registros são geralmente de mais de um tipo. A Aplicação B processa as transações de entrada de acordo com o tipo de transação dos registros do Arquivo Z, antes da atualização dos registros no Arquivo interno Y. Os DERs no Arquivo X da Aplicação A e no Arquivo X' da Aplicação B são diferentes. Por exemplo, o Arquivo X é o Catálogo Principal de Material enquanto o Arquivo Y é uma Lista de Produtos gerada localmente. O processamento inclui os seguintes tipos de transações:

- Inclusão
- Alteração
- Exclusão

Esta transferência de dados é um requisito de negócio do usuário. Tanto a Aplicação A quanto B possuem um requisito para acessar uma versão do Arquivo X, entretanto os DERs nos dois arquivos são diferentes. A Aplicação A envia apenas dados relacionados a alterações. A Aplicação B lê os registros no Arquivo Z e, baseado nos tipos de transação, inicia diferentes lógicas de processamento.

**Diagrama**

![Diagrama do Cenário 8 (Dados Padrão de Transação): o Arquivo X do Sistema A gera dados de transação (arquivo Z) que atualizam o Arquivo Y no Sistema B.](images/p221-cenario8-diagrama.png)

**Interpretação da Contagem**

Se cada registro gravado pela Aplicação A no Arquivo Z é processado da mesma forma, apenas uma CE/SE é contada. Apenas quando existirem diferentes lógicas de processamento envolvidas você poderá ter diversas funções de transação (ex., SE/CE) dentro de um único arquivo.

A Aplicação B conta EEs para cada função de manutenção única no Arquivo Y. O número de Tipos de Transações no arquivo de transação Z normalmente determina o número destas funções, mas isto não é necessariamente assim. Diferentes lógicas de processamento devem ser demonstradas.

Existem dois arquivos envolvidos. A Aplicação A conta o Arquivo X como um ALI. A Aplicação B conta o Arquivo Y como um ALI. Nenhum dos dois sistemas conta o Arquivo Z como um arquivo lógico.

**Diagrama da Solução**

![Diagrama da Solução do Cenário 8 (Dados Padrão de Transação): Arquivo X é ALI e SE/CE na Aplicação A; Arquivo Y é ALI e EE (Inclusão, Alteração, Exclusão) na Aplicação B; o Arquivo Z (ALI/AIE) não é contado.](images/p222-cenario8-solucao.png)

**Resumo da Contagem**

| | ALI | AIE | EE | SE/CE | Nota |
|---|---|---|---|---|---|
| Aplicação A | ✓ | | | ✓ | |
| Aplicação B | ✓ | | ✓ | | |

## Resumo

No decorrer deste capítulo, os cenários tiveram foco na utilização de dados dentro da aplicação que está sendo contada e a aplicação das regras de identificação de ALI e AIE relativas à 'intenção primária'.

Este capítulo não ilustra todas as possíveis implementações de compartilhamento de dados entre aplicações. Entretanto, fornece exemplos suficientes que permitem a um Analista de Pontos de Função aplicar consistentemente as regras de identificação para ALIs e AIEs, focando na intenção primária para a utilização dos dados e fronteiras das aplicações envolvidas na contagem.
