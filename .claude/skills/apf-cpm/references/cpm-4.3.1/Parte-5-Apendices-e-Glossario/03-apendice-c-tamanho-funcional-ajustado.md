# Apêndice C — Tamanho Funcional Ajustado

> Parte 5 — Apêndices e Glossário · CPM v4.3.1

**Introdução**

Este capítulo explica as Características Gerais dos Sistemas (CGSs) e o Valor do Fator de Ajuste (VAF).

**Nota: Aplicação das CGSs, cálculo do VAF, e cálculo do tamanho funcional ajustado não estão incluídos no FSM do IFPUG e são considerados opcionais no CPM do IFPUG.**

De qualquer forma, quando se informa o tamanho funcional medido utilizando o método do IFPUG, o tamanho informado é o resultado antes de qualquer ajuste. O tamanho é informado em unidades de PFs. Quando estiver utilizando tamanhos informados por outras fontes, primeiro determine se eles foram 'ajustados' ou estão 'não ajustados'. Falhar nesta determinação pode resultar em erros ao comparar ou utilizar os dois conjuntos de resultados. Sempre demonstre se o tamanho funcional informado é 'ajustado' (aFP) ou 'não ajustado' (FP).

**Conteúdo**

Este capítulo inclui as seguintes seções:

| Tópico | Página |
| --- | --- |
| Passos para Cálculo do Tamanho Funcional Ajustado | C-3 |
| Determinação do Fator de Ajuste | C-4 |
| Diretrizes para determinar o Grau de Influência das CGSs | C-6 |
| Tabela de Cálculo do Fator de Ajuste | C-31 |
| **Pontos de Função Ajustados de Projeto de Desenvolvimento** | **C-32** |
| Fórmula: Tamanho Funcional Ajustado do Projeto de Desenvolvimento (aDFP) | C-32 |
| Exemplo: Tamanho Funcional Ajustado do Projeto de Desenvolvimento (aDFP) | C-33 |
| Tamanho Funcional Ajustado do Projeto de Melhoria (aEFP) | C-37 |
| Formula: Tamanho Funcional Ajustado do Projeto de Melhoria (aEFP) | C-38 |
| Exemplo: Tamanho Funcional Ajustado do Projeto de Melhoria (aEFP) | C-39 |
| Tamanho Funcional Ajustado da Aplicação (aAFP) | C-43 |
| Fórmula: Tamanho Funcional Inicial Ajustado da Aplicação (aAFP) | C-43 |
| Fórmula: Tamanho Funcional Ajustado da Aplicação Depois do Projeto de Melhoria (aAFPA) | C-44 |
| Exemplo: Contagem de Aplicação | C-45 |

## Passos para Cálculo do Tamanho Funcional Ajustado

A lista a seguir inclui os passos da análise de pontos de função apresentados na Parte 1, ampliados para prover o tamanho funcional ajustado.

| Passo | Ação |
| --- | --- |
| 1 | Determinar o tamanho funcional utilizando as regras da Parte 1 e a orientação de implementação da Parte 2. |
| 2 | Determinar o Fator de Ajuste de acordo com a orientação neste apêndice. |
| 3 | Calcular o tamanho funcional ajustado de acordo com as fórmulas neste apêndice. |

O restante deste capítulo apresenta as Características Gerais do Sistema, Fator de Ajuste resultante seguidos das fórmulas para calcular o Tamanho Funcional Ajustado. Exemplos de cálculos estão incluídos para cada um dos três tipos de contagem de pontos de função:

- Projeto de Desenvolvimento
- Projeto de Melhoria
- Aplicação

## Determinação do Fator de Ajuste

O Fator de Ajuste (VAF) é baseado nas 14 características gerais do sistema (CGSs) que classificam a funcionalidade geral da aplicação sendo contada.

Cada característica tem descrições associadas que ajudam a determinar o nível de influência da característica. O nível de influência de cada característica varia em uma escala de 0 a 5, de sem influência até forte influência.

As 14 características gerais do sistema estão resumidas no Fator de Ajuste. Quando aplicado, o fator de ajuste ajusta o tamanho funcional não ajustado em +/- 35% para produzir o tamanho funcional ajustado.

## Procedimentos para Determinar o VAF

Os seguintes passos descrevem os procedimentos para determinar o fator de ajuste.

| Passo | Ação |
| --- | --- |
| 1 | Avalie cada uma das 14 características gerais do sistema na escala de 0 a 5 para determinar o nível de influência (NI). |
| 2 | Some os níveis de influência das 14 características gerais do sistema para produzir o total do nível de influência (TDI). |
| 3 | Insira o TDI na equação abaixo para obter o fator de ajuste.<br><br>VAF = (TDI * 0,01) + 0,65<br><br>Por exemplo, o seguinte fator de ajuste é calculado se houver o nível de influência 3 para cada uma das 14 CGS (3 * 14)<br><br>VAF = (42 * 0,01) + 0,65<br>VAF = 1,07 |

Uma tabela para facilitar o cálculo é apresentada neste Apêndice.

## Características Gerais do Sistema

As características gerais do sistema são um grupo de 14 questões que avaliam a complexidade da aplicação como um todo.

As 14 características gerais do sistema são:

1. Comunicação de Dados
2. Processamento Distribuído
3. Performance
4. Configuração Intensamente Utilizada
5. Volume de Transações
6. Entrada de Dados On-Line
7. Eficiência do Usuário Final
8. Atualização On-Line
9. Processamento Complexo
10. Reusabilidade
11. Facilidade de Instalação
12. Facilidade de Operação
13. Múltiplos Locais
14. Facilidade de Mudança

## Níveis de Influência

Com base nos requisitos estabelecidos pelo usuário, cada característica geral do sistema (CGS) deve ser avaliada em termos de seus níveis de influência (NI) em uma escala de 0 a 5.

| Pontue como | Influência no Sistema |
| --- | --- |
| 0 | Não presente ou sem influência |
| 1 | Influência Mínima |
| 2 | Influência Moderada |
| 3 | Influência Média |
| 4 | Influência Significativa |
| 5 | Forte influência |

## Diretrizes para determinar o Grau de Influência das CGSs

Cada uma das descrições das características gerais do sistema seguintes inclui diretrizes para a determinação do nível de influência.

Cada diretriz contém uma definição da CGS, regras para determinação do nível de influência e, em situações nas quais a regra requer esclarecimento adicional, são fornecidas dicas para ajudar a aplicar as regras consistentemente em todas as plataformas.

Não se pretende que as dicas cubram todas as situações. Ao invés disso, a intenção é que as mesmas forneçam orientação adicional para a determinação do nível de influência apropriado.

### 1. Comunicação de Dados

**Definição**

A característica Comunicação de Dados descreve até que ponto a aplicação se comunica diretamente com o processador.

Os *dados* e *informações de controle* utilizados pela aplicação são enviados ou recebidos através de recursos de comunicação. Considera-se que os dispositivos conectados localmente à unidade de controle utilizam recursos de comunicação. O protocolo é um conjunto de convenções que permite a transferência ou intercâmbio de informações entre dois sistemas ou dispositivos. Todos os links de comunicação de dados necessitam de algum tipo de protocolo.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | A aplicação é puramente batch ou uma estação de trabalho isolada |
| 1 | A aplicação é batch, mas possui entrada de dados ***ou*** impressão remota |
| 2 | A aplicação é batch, mas possui entrada de dados ***e*** impressão remota |
| 3 | A aplicação inclui entrada de dados on-line ou front-end de teleprocessamento para um processo batch ou sistema de consulta |
| 4 | A aplicação é mais que um front-end, mas suporta ***apenas um*** tipo de protocolo de comunicação. |
| 5 | A aplicação é mais que um front-end, e suporta ***mais de um*** tipo de protocolo de comunicação. |

**Dicas**

Exemplos de protocolo incluem FTP, dial-up, Token Ring, Ethernet, SNA, TCP/IP, IPX/SPX, http, XML, WAP, NTP, ICQ e NETBEUI. Esta lista não deve ser considerada completa.

**Dicas para as Regras 1 e 2**

- Dispositivos remotos podem incluir um terminal 3270 conectado ao computador mainframe que permita apenas validações simples (numérico versus alfa) ou impressoras conectadas através de portas paralelas (o usuário pode especificar para onde a saída será direcionada).
- A entrada de dados não envolve leitura ou gravação diretamente em um ALI. Os dados são informados on-line, mas as transações são armazenadas em um arquivo temporário para posterior atualização batch do (s) ALI(s).

**Dicas para a Regra 3**

- Regras de negócio simples e um mínimo de validações (ex.:alfa/numérico, verificação de faixa, dados obrigatórios, etc.) podem ser executados. Quando os dados forem finalmente processados pela aplicação, validações adicionais serão executadas.
- A entrada de dados não envolve leitura ou gravação diretamente em um ALI. Os dados são informados on-line, mas as transações são armazenadas em um arquivo temporário para posterior atualização batch do (s) ALI(s).

**Dicas para a Regra 4**

- Os dados da aplicação são coletados e podem atualizar diretamente os ALI(s), ou serem armazenados para processamento futuro, utilizando um dispositivo de entrada que executa validações baseadas nas regras de negócio.
- Apenas um protocolo de comunicação de dados é utilizado. Normalmente não haverá necessidade de validações adicionais quando os dados forem processados pela aplicação.
- A entrada de dados envolve leitura ou gravação em um ALI.
- Por exemplo, "data entry" de cliente-servidor ou "data entry" de Internet, mas não ambos.

**Dicas para a Regra 5**

- Idem ao 4, entretanto, a coleta de dados é executada utilizando vários protocolos de processamento.
- Por exemplo, "data entry" de cliente-servidor e "data entry"de Internet para a mesma transação.

**Normalmente**

- Aplicações batch pontuam de 0 a 3
- Aplicações on-line pontuam 4
- Aplicações Web pontuam 4 ou 5
- Sistemas real-time, de telecomunicações ou de controle de processos pontuam 4 ou 5.

### 2. Processamento Distribuído

**Definição**

A característica Processamento Distribuído descreve até que ponto a aplicação transfere dados entre seus componentes físicos.

Funções distribuídas de dados ou de processamento são uma característica da aplicação dentro de sua respectiva fronteira.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Dados não são transferidos ou processados em outro componente do sistema. |
| 1 | Dados são preparados para transferência, sendo então transferidos e processados em outro componente do sistema, para processamento pelo usuário. |
| 2 | Dados são preparados para transferência, sendo então transferidos e processados em outro componente do sistema, ***não*** para processamento pelo usuário. |
| 3 | O processamento distribuído e a transferência de dados são online e em **apenas** uma direção. |
| 4 | O processamento distribuído e a transferência de dados são online e em **ambas as** direções. |
| 5 | O processamento distribuído e a transferência de dados são online e executados dinamicamente no componente mais apropriado do sistema. |

**Dicas**

O processamento distribuído de dados, por definição, não é uma aplicação contida em um processador central que envia dados para outra aplicação. Em um ambiente distribuído, a aplicação é vista como requerendo vários componentes (hardware) no qual certo processamento ou dados residem. Um usuário capacitado irá normalmente reconhecer esta configuração.

**Dicas para a Regra 0**

- Os componentes de apresentação, processamento e I/O estão todos no mesmo lugar (ex.: aplicações stand-alone).

**Dicas para a Regra 1**

- A aplicação transfere dados para a máquina-cliente de um usuário, então ele pode usar o Excel ou outras ferramentas de relatórios para preparar gráficos e executar outras análises.
- Processo que transfere dados do mainframe para um componente externo para processamento do usuário. Esta transferência é executada utilizando um protocolo simples, como FTP.
- Transferidos para um usuário para processamento.

**Dicas para a Regra 2**

- Processo que transfere dados do mainframe para uma plataforma intermediária. Por exemplo: processamento com SAS-PC.
- A aplicação envia dados para o cliente ou para o servidor. Estes dados são então processados ou utilizados para produzir relatórios, etc. Nenhum dado ou confirmação é enviado de volta para o cliente ou servidor.
- Transferidos para um componente para processamento.

**Dicas para a Regra 3**

- Os dados são enviados entre o cliente e o servidor em apenas uma direção. Estes dados são então processados ou utilizados para produzir relatórios, etc. pela aplicação receptora. Estes dados tipicamente incluem transações que atualizam um ALI no cliente ou servidor.
- Por exemplo, aplicações cliente-servidor ou web.

**Dicas para a Regra 4**

- Dados são enviados entre o cliente e o servidor em ambas as direções. Estes dados são então processados ou utilizados para produzir relatórios, etc. pela aplicação receptora. Estes dados tipicamente incluem transações que atualizam um ALI no cliente ou servidor.
- Por exemplo, aplicações cliente-servidor ou web.
- A aplicação roda sob um sistema operacional que trata automaticamente a alocação entre componentes, porém, o uso do sistema operacional não influencia o projeto e implementação da aplicação.

**Dicas para a Regra 5**

- O desenvolvedor deve considerar uma aplicação de software especial que olhe para vários processadores e roda a aplicação em um tipo específico de processador. Isto é invisível para o usuário.
- A aplicação roda sob um sistema operacional que trata automaticamente a alocação dinâmica entre componentes, e o uso do sistema operacional influencia especificamente o projeto e implementação da aplicação.

**Normalmente**

- A maioria das aplicações, incluindo aplicações legadas, recebem 0.
- As aplicações distribuídas primitivas, inclusive aplicações batch em que dados não são transferidos online pontuam 1 ou 2.
- Aplicações cliente-servidor ou web recebem 3 ou 4.
- É raro uma nota 5.
- Existindo múltiplos servidores ou processadores, cada qual seria selecionado dinamicamente de acordo com sua disponibilidade para receber nota 5.

### 3. Performance

**Definição**

A característica Performance descreve o grau segundo o qual considerações sobre tempo de resposta e performance de throughput (volume de processamento) influenciaram o desenvolvimento da aplicação.

Objetivos de performance da aplicação, declarados ou aprovados (ou implícitos) pelo usuário, referentes a tempo de resposta ou throughput, influenciam ou influenciarão o projeto, desenvolvimento, instalação e suporte à aplicação.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Nenhum requisito especial de performance foi estabelecido pelo usuário. |
| 1 | Requisitos de performance e projeto foram estabelecidos e revisados, mas nenhuma ação especial foi requerida. |
| 2 | Tempo de resposta e volume de processamento são críticos durante o horário de pico. Nenhum projeto especial para utilização da CPU foi solicitado. O prazo para processamento é para o próximo ciclo de negócios. |
| 3 | Tempo de resposta e volume de processamento são críticos durante todo o horário comercial. Nenhum projeto especial para utilização da CPU foi solicitado. Os requisitos de prazo para processamento das interfaces com sistemas são restritivos. |
| 4 | Adicionalmente, requisitos de performance declarados pelo usuário são suficientemente rigorosos para requerer tarefas de análise de performance na fase de design. |
| 5 | Adicionalmente, ferramentas de análise de performance foram usadas nas fases de projeto, desenvolvimento, e/ou implementação para satisfazer os requisitos de performance declarados pelo usuário. |

**Dicas**

- As CGS 3, 4 e 5 estão de certa forma relacionadas. Para esta CGS, pense em termos de "O quão rápido nós conseguimos fazer a aplicação rodar e quanto isto impactou o projeto, desenvolvimento e/ou implementação?".
- Os usuários podem requerer acesso a seus dados em tempo real, estabelecendo, explicitamente ou não, padrões para tempo de resposta e capacidade de processamento (throughput).
- Tempo de resposta normalmente diz respeito ao processamento interativo; Throughput (volume de processamento) refere-se ao processamento batch.

**Normalmente**

- Aplicações batch recebem nota de 0 a 4.
- Aplicações on-line (incluindo cliente-servidor interativo ou web) recebem de 0 a 4.
- Aplicações web recebem 4 ou 5.
- A maioria dos sistemas on-line MIS (Management Information System - Sistema de Informação Gerencial) recebe 2.
- Sistemas real-time, de telecomunicações ou controle de processos recebem de 0 a 5.
- Uma nota 5 requer o uso de ferramentas de análise de performance.

### 4. Configuração Intensamente Utilizada

**Definição**

Configuração Intensamente Utilizada descreve o nível segundo o qual as restrições nos recursos do computador influenciam o desenvolvimento da aplicação.

Uma configuração operacional intensamente utilizada pode requerer considerações especiais no projeto da aplicação. Por exemplo, o usuário deseja executar a aplicação em um equipamento existente ou alocado, que será intensamente utilizado.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Nenhuma restrição operacional, implícita ou explícita, foi incluída. |
| 1 | Existem restrições operacionais, mas são menos restritivas que em uma aplicação típica. Nenhum esforço especial é necessário para satisfazer as restrições. |
| 2 | Existem restrições operacionais, mas são as típicas de qualquer aplicação. É necessário esforço especial para satisfazer as restrições, através de controladores ou programas de controle. |
| 3 | As restrições operacionais estabelecidas requerem limites especiais em uma parte da aplicação no processador central ou um processador dedicado. |
| 4 | As restrições operacionais estabelecidas requerem limites especiais na aplicação inteira no processador central ou um processador dedicado. |
| 5 | Adicionalmente, existem limites especiais na aplicação em componentes distribuídos do sistema. |

**Dicas**

- As CGSs 3, 4 e 5 estão de certa forma relacionadas.
- Para esta CGS pense em termos de "Quanto a infra-estrutura influencia o projeto (design)?".

**Exemplos**

Exemplos de restrições operacionais podem incluir o seguinte (lista não exaustiva):

- Esta questão indica que a aplicação deve rodar em um computador subdimensionado e que não consegue tratar adequadamente as funcionalidades novas ou alteradas e que os desenvolvedores podem, de alguma forma, superar isto desenvolvendo a aplicação de outro modo.
- Mais de uma aplicação acessando os mesmos dados pode criar restrições operacionais.
- Uma aplicação competindo pelos mesmos recursos e tecnologia, com a possibilidade de deadlocks, deve ser ajustada e limitada para evitar degradação de performance.

**Normalmente**

- A maioria das aplicações recebe nota 2.
- Cliente-servidor, web, real-time, telecomunicações ou sistemas de controle de processos recebem de 3 a 5, mas você precisaria de um processador dedicado, ou de múltiplos processadores processando as mesmas transações e buscando os recursos mais eficientes de processamento.

### 5. Volume de Transações

**Definição**

A característica Volume de Transações descreve o nível segundo o qual a taxa de transações do negócio influencia o desenvolvimento da aplicação.

O volume de transações é alto e influencia o projeto, desenvolvimento, instalação e suporte da aplicação. Os usuários podem precisar do que eles consideram como tempo de resposta normal mesmo durante as horas de pico de volume.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Não é antecipado nenhum período de pico de transações. |
| 1 | Os baixos volumes de transações têm efeito mínimo nas fases de projeto, desenvolvimento e instalação. |
| 2 | O volume médio de transações tem algum efeito sobre as fases de projeto, desenvolvimento e instalação. |
| 3 | O alto volume de transações afeta as fases de projeto, desenvolvimento e instalação. |
| 4 | O alto volume de transações declarado pelo usuário nos requisitos técnicos da aplicação ou no acordo de nível de serviço é suficientemente alto para requerer tarefas de análise de performance nas fases de projeto, desenvolvimento e/ou instalação. |
| 5 | O alto volume de transações declarado pelo usuário nos requisitos técnicos da aplicação ou no acordo de nível de serviço é suficientemente alto para requerer tarefas de análise de performance e, adicionalmente, utilização de ferramentas de análise de performance nas fases de projeto, desenvolvimento e/ou instalação |

**Dicas**

- As CGSs 3, 4 e 5 estão de certa forma relacionadas. Para esta CGS pense em termos de "Quantas transações podem ser processadas pela aplicação em um determinado período de tempo?"
- Muitas vezes esta nota é a mesma para a CGS 3, porque o volume de transação freqüentemente influencia os requisitos de performance.

**Normalmente**

- Aplicações batch recebem de 0 a 3.
- Aplicações on-line (incluindo interações de Cliente-servidor ou Web) recebem de 0 a 4.
- Sistemas real-time, de telecomunicações ou controle de processos recebem de 0 a 5.
- Uma nota 5 requer a utilização de ferramentas de análise de performance.

### 6. Entrada de Dados On-Line

**Definição**

A característica Entrada de Dados On-line descreve os níveis segundo os quais os dados são informados ou recuperados através das transações interativas.

Interfaces on-line com o usuário para entrada de dados, funções de controle, relatórios e consultas são fornecidos pela aplicação.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Todas as transações são processadas de modo batch |
| 1 | 1% a 7% das transações são interativas |
| 2 | 8% a 15% das transações são interativas |
| 3 | 16% a 23% das transações são interativas |
| 4 | 24% a 30% das transações são interativas |
| 5 | Mais de 30% das transações são interativas |

**Dicas**

- Aqui fazemos referência aos tipos de transações e não aos volumes.
- Por exemplo, se uma aplicação tem 45 EEs, SEs e CEs, qual o percentual das EEs, SEs e CEs é executado via transações on-line.

**Normalmente**

- Aplicações batch recebem 0 ou 1.
- Aplicações on-line, real-time, de telecomunicações ou sistemas de controle de processos recebem 5.
- A maioria das aplicações on-line atuais (incluindo cliente-servidor interativo ou web) recebem 5.
- Sistemas batch com características on-line podem ter a maioria das transações batch, mas o sistema deve ser pelo menos 71 % batch para receber menos do que 5.

### 7. Eficiência do Usuário Final

**Definição**

A característica Eficiência do Usuário Final descreve o nível segundo o qual foram considerados os fatores humanos e a facilidade de uso para o usuário na aplicação medida.

As funções on-line fornecidas enfatizam um projeto ("design") para maior eficiência (fatores humanos/amigabilidade ao usuário). O projeto inclui:

- Auxílio à navegação (ex.: teclas de função, saltos, menus gerados dinamicamente, hiper-links)
- Menus
- Ajuda on-line e documentação
- Movimentação automática do cursor
- Paginação
- Impressão remota (através de transações on-line)
- Teclas de função pré-definidas (ex.: limpeza de tela, solicitação de ajuda, cópia de tela)
- Tarefas batch executadas a partir de transações on-line
- Combos (caixas de combinação)
- Uso intenso de vídeo reverso, brilho, cores, sublinhado e outros indicadores
- Documentação impressa das transações on-line (ex.: print screen)
- Interface de mouse
- Janelas pop-up
- Templates e/ou defaults
- Suporte bilíngüe (Suporte a 2 idiomas: conte como 4 itens)
- Suporte Multi-idiomas (Suporte a mais de 2 idiomas: conte como 6 itens)

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Nenhum dos itens acima |
| 1 | 1 a 3 dos itens acima |
| 2 | 4 a 5 dos itens acima. |
| 3 | 6 ou mais dos itens acima, mas não existem requisitos específicos do usuário relacionados à eficiência. |
| 4 | 6 ou mais dos itens acima, e os requisitos estabelecidos pelo usuário quanto a eficiência são suficientemente fortes para requerer o projeto de tarefas que incluam fatores humanos. |
| 5 | 6 ou mais dos itens acima, e os requisitos estabelecidos pelo usuário quanto à eficiência são suficientemente fortes para requerer o uso de ferramentas e processos especiais para demonstrar que os objetivos foram alcançados. |

**Dicas**

- Utilize uma convenção de atribuir a nota 4 sempre que a aplicação for implementada em ambiente GUI (a não ser que ela receba 5).
- Normalmente somente ambientes de software que preparam aplicações para "mass-markets" ou usuários não-técnicos recebem 5, e apenas se existirem especialistas em ergonomia e/ou estudos de usabilidade como parte do processo.

**Normalmente**

- Aplicações puramente batch recebem 0.
- Interface com o usuário em modo caracter recebe 1 ou talvez 2.
- Interface GUI para ser usada com baixo volume de transações recebe 3.
- Interface GUI para ser usada com alto volume de transações, assim como a maioria das interfaces de Intranet recebem 4 (devem existir tarefas de "design" referentes a fatores humanos).
- Interface com o usuário de Intranet recebe 5 (requer o uso de ferramentas e processos especiais para demonstrar que os objetivos foram alcançados).

### 8. Atualização On-Line

**Definição**

A característica Atualização On-line descreve os níveis segundo os quais os arquivos lógicos internos são atualizados on-line.

A aplicação fornece atualização on-line dos arquivos lógicos internos.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Nenhuma. |
| 1 | A atualização on-line de 1 a 3 arquivos de controle está incluída. O volume de atualizações é pequeno e a recuperação é fácil. |
| 2 | A atualização on-line de 4 ou mais arquivos de controle está incluída. O volume de atualizações é pequeno e a recuperação é fácil. |
| 3 | A atualização on-line da maioria dos arquivos lógicos internos está incluída. |
| 4 | Adicionalmente, a proteção contra perda de dados é essencial e foi especialmente projetada e programada no sistema. |
| 5 | Adicionalmente, elevados volumes fazem considerar os custos do processo de recuperação. Procedimentos de recuperação altamente automatizados com um mínimo de intervenção do operador estão incluídos. |

**Dicas**

- A atualização on-line normalmente requer um arquivo chaveado ou banco de dados.
- A recuperação automática fornecida pelo sistema operacional conta se impactar a aplicação.

**Normalmente**

- As aplicações puramente batch recebem 0
- Atualizações on-line de arquivos que modificam a forma segundo a qual a aplicação processa ou valida dados recebidos recebem 1 ou 2.
- A atualização on-line dos dados persistentes do usuário recebe 3.
- Aplicações MIS (Sistema de Informação Gerencial) recebem 3 ou menos.
- A maioria das aplicações GUI (Interface Gráfica do Usuário) recebem 3 ou mais.
- Aplicações que utilizam recuperação programada como por exemplo "SQL roll back" ou "commit" recebem 4. Backup operacional ou rotineiro não é considerado proteção contra perda de dados.
- Aplicações que executam recuperação de dados, reinicialização ou outras funções autocontidas em caso de erro do sistema recebem 5. A recuperação pode requerer um operador para pressionar "enter" ou executar outra função mínima para iniciar o processo.

### 9. Processamento Complexo

**Definição**

A característica Processamento Complexo descreve os níveis segundo os quais a lógica de processamento influenciou o desenvolvimento da aplicação. Os seguintes componentes estão presentes:

- Controle sensível e/ou processamento específico de segurança da aplicação.
- Processamento lógico extensivo.
- Processamento matemático extensivo.
- Muito processamento de exceção, resultando em transações incompletas que devem ser processadas novamente.
- Processamento complexo para manipular múltiplas possibilidades de entrada e saída.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Nenhum dos itens acima |
| 1 | Qualquer 1 dos itens acima |
| 2 | Quaisquer 2 dos itens acima |
| 3 | Quaisquer 3 dos itens acima |
| 4 | Quaisquer 4 dos itens acima |
| 5 | Todos os 5 itens acima |

**Dicas**

- O controle sensível ou processo de segurança (ex.: usuários individuais teriam diferentes autorizações para acesso em telas onde pudessem ver e/ou alterar dados) pode incluir processamento especial de auditoria (dados de auditoria seriam capturados sempre que dados fossem visualizados e/ou alterados e reportados).
- O processamento específico de segurança da aplicação pode incluir processamento de segurança desenvolvido internamente ou utilizar pacotes de segurança comprados.
- **Processamento Lógico Extensivo** é lógica Booleana (utiliza AND, OR) de dificuldade maior que a média, ou um mínimo de 4 comandos condicionais aninhados (IF, CASE). O processamento lógico extensivo não ocorre na maioria das aplicações MIS (Sistema de Informação Gerencial).
- **Processamento Matemático Extensivo** é a aritmética que está além da capacidade de uma calculadora de 4 operações (soma, subtração, multiplicação, divisão). Isto normalmente não está presente na maioria das aplicações MIS. Todavia, uma aplicação de engenharia pode se qualificar.
- O processamento de exceção inclui transações de ATM (caixa automática) incompletas, causadas por interrupção de TP, perda de valores de dados, falhas de validações ou verificação por redundância cíclica (cycle redundancy checks), que podem ser usados para recriar as partes dos dados que foram perdidas.
- As múltiplas possibilidades de entrada/saída incluem multimídia, dispositivos independentes, voz, leitura ótica de caracteres (OCR), leitura de código de barras, leitura da retina e bafômetro.

**Normalmente**

- Esta pontuação não é dependente de plataforma.

### 10. Reusabilidade

**Definição**

A característica Reusabilidade descreve os níveis segundo os quais a aplicação e o código da aplicação foram especificamente projetados, desenvolvidos e suportados para serem utilizados em outras aplicações.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Não há código reutilizável. |
| 1 | É utilizado código reutilizável dentro da aplicação. |
| 2 | Menos de 10% do código desenvolvido da aplicação foi planejado para utilização em mais de uma aplicação. |
| 3 | 10% do código desenvolvido da aplicação foi planejado para utilização em mais de uma aplicação da aplicação. |
| 4 | A aplicação foi especificamente empacotada e/ou documentada para fácil reutilização, e está customizada ao nível do código fonte. |
| 5 | A aplicação foi especificamente empacotada e/ou documentada para fácil reutilização, e está customizada para uso através da manutenção dos parâmetros pelo usuário. |

**Dicas**

**Dicas para Regra 1**

- Uma nota 1 é concedida para a reutilização do código, independentemente de onde ele foi desenvolvido.
- Código desenvolvido especificamente para reutilização dentro da aplicação e utilizado mais de uma vez dentro da aplicação conta tanto quanto código recuperado de uma biblioteca central e disponível para uso geral.

**Dicas para Regra 2**

- Para receber 2 ou mais, o código deve ter sido desenvolvido para uso em mais de uma aplicação, armazenada e gerenciada em uma biblioteca central e disponível para uso geral. O código de uma aplicação que é "copiado e colado" em outra aplicação não é considerado reutilização.
- O código reutilizado deve estar apoiado por documentação que possibilite e facilite a reutilização.

**Dicas para Regra 5**

- Exemplos de aplicações customizadas através do uso de parâmetros incluem PeopleSoft e SAP e geralmente receberão 5.
- O código reutilizável pode ser modificado *levemente* na aplicação receptora.
- Exemplos de reutilização incluem objetos ou outros códigos estáticos mantidos em uma biblioteca de código/objeto.

**Normalmente**

- Esta pontuação não é dependente de plataforma.

### 11. Facilidade de Instalação

**Definição**

A característica Facilidade de Instalação descreve os níveis segundo os quais a conversão de ambientes anteriores influenciou o desenvolvimento da aplicação.

A facilidade de instalação e de conversão são características da aplicação. Um plano de conversão e instalação e/ou ferramentas de conversão foram fornecidos e testados durante a fase de teste do sistema.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
| --- | --- |
| 0 | Nenhuma consideração especial foi estabelecida pelo usuário **e nenhum** "Setup" especial foi requerido para instalação. |
| 1 | Nenhuma consideração especial foi estabelecida pelo usuário, **mas** um "Setup" especial foi requerido para instalação. |
| 2 | Requisitos de conversão e instalação foram estabelecidos pelo usuário, e guias de conversão e instalação foram fornecidos e testados. O impacto da conversão no projeto **não é** considerado importante. |
| 3 | Requisitos de conversão e instalação foram estabelecidos pelo usuário, e guias de conversão e instalação foram fornecidos e testados. O impacto da conversão no projeto **é** considerado importante |
| 4 | Adicionalmente ao item 2, ferramentas automáticas de instalação e conversão foram fornecidas e testadas. |
| 5 | Adicionalmente ao item 3, ferramentas automáticas de instalação e conversão foram fornecidas e testadas. |

**Dicas**

- A conversão e instalação incluem a conversão de dados pré-existentes para novos arquivos de dados, carga de arquivos com dados reais ou o desenvolvimento de um software especial de conversão, como no caso da tradução de uma versão para outra.
- Deve ser utilizado software comprado ou desenvolvido para que a aplicação receba pontos referentes à instalação e conversão.

**Dica para a Regra 1**

- A maioria das aplicações de negócio requerem algum "Setup" especial para instalação da aplicação e recebem 1.

**Dica para a Regra 2**

- Se a aplicação tem requisitos de conversão e instalação e guias de instalação foram fornecidos, e o fornecimento destas funções e guias não estavam no caminho crítico do projeto, atribua 2.

**Dica para a Regra 3**

- Se a aplicação tem requisitos de conversão e instalação e guias de instalação foram fornecidos, e o fornecimento destas funções e guias estavam no caminho crítico do projeto, atribua 3.

**Dica para as Regras 4 e 5**

- Se a aplicação tem requisitos de conversão e instalação e pode ser instalada sem intervenção externa, atribua 4 ou 5, dependendo dos outros requisitos para a pontuação 2 e 3.

**Normalmente**

- Esta pontuação não é dependente de plataforma.

### 12. Facilidade de Operação

**Definição**

A característica Facilidade de Operação descreve os níveis segundo os quais a aplicação atende aos aspectos operacionais, tais como os processos de inicialização, backup e recuperação.

A facilidade de operação é uma característica da aplicação. A aplicação minimiza a necessidade de atividades manuais, tais como montagem de fitas, manuseio de papel e intervenção manual direta do operador.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
|:--:|---|
| 0 | Nenhuma consideração operacional especial, além dos procedimentos normais de backup foi estabelecida pelo usuário. |
| 1 - 4 | Um, alguns ou todos os itens seguintes aplicam-se à aplicação. Selecione aqueles que se aplicam. Cada item vale um ponto, exceto quando houver indicação em contrário:<br>• Processos de inicialização, de backup e de recuperação foram fornecidos, mas a intervenção humana é necessária.<br>• Processos de inicialização, de backup e de recuperação foram fornecidos, e a intervenção humana não é necessária (conte 2 itens)<br>• A aplicação minimiza a necessidade de montagem de fitas e/ou acesso a dados remotos requerendo intervenção humana.<br>• A aplicação minimiza a necessidade de manuseio de papéis |
| 5 | A aplicação é projetada para operação não assistida. Isto é, nenhuma intervenção humana é necessária para operar o sistema, que não seja a inicialização e término da aplicação. A recuperação automática de erros é uma característica da aplicação. |

**Dicas**

**Dica para a Regra 1-4a**

- A aplicação tem a habilidade de executar inicialização, backup e recuperação; porém, a resposta humana é requerida para iniciar a função.

**Dica para a Regra 1-4b**

- A aplicação tem a habilidade de executar inicialização, backup e recuperação; e nenhuma resposta humana é requerida para iniciar a função.

**Dica para a Regra 1-4c**

- A aplicação minimiza a necessidade de acesso a dados que não estejam imediatamente disponíveis.
- Isto pode incluir a importação de dados de um processador distribuído para o processador local antes da execução, a fim de eliminar demoras no acesso.

**Dica para a Regra 1-4d**

- A aplicação foi projetada para suprir o usuário com dados em um formado condensado, ou através de um outro meio diferente de papel.
- Isto pode incluir a eliminação de informações impressas detalhadas, ou acesso a relatórios on-line, consultas, microfichas, CD ou outra mídia semelhante.

**Dica para a Regra 5**

- A nota 5 é atribuída a uma aplicação que executa e se recupera automaticamente dos erros, ela mesma - uma operação não assistida.
- Operação não-assistida pode incluir satélite sem tripulação, reator nuclear ou controle de tráfego aéreo.

**Normalmente**

- Esta pontuação não é dependente de plataforma.

### 13. Múltiplos Locais

**Definição**

A característica Múltiplos Locais descreve os níveis segundo os quais a aplicação foi desenvolvida para diferentes ambientes de hardware e software.

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
|:--:|---|
| 0 | As necessidades de ***apenas um*** local de instalação foram consideradas no projeto. |
| 1 | As necessidades de mais de um local de instalação foram consideradas no projeto e a aplicação está projetada para operar apenas em ambientes de hardware e software ***idênticos***. |
| 2 | As necessidades de mais de um local de instalação foram consideradas no projeto e a aplicação está projetada para operar apenas em ambientes de hardware e software ***similares***. |
| 3 | As necessidades de mais de um local de instalação foram consideradas no projeto e a aplicação está projetada para operar em ambientes de hardware e software ***diferentes***. |
| 4 | A documentação e o plano de suporte foram fornecidos e testados para suportar a instalação da aplicação em múltiplos locais e a aplicação é descrita pelo item 2. |
| 5 | A documentação e o plano de suporte foram fornecidos e testados para suportar a instalação da aplicação em múltiplos locais e a aplicação é descrita pelo item 3. |

**Dicas**

O termo múltiplos locais é um termo lógico e não necessariamente físico. Podem existir múltiplos locais dentro do mesmo local físico. A determinação do fator está baseada nas necessidades das diversas instalações.

**Dicas para Regra 0**

- A maioria das aplicações mainframe provavelmente recebem 0.
- Porém, se uma aplicação está instalada em vários computadores mainframe com múltiplas configurações significativamente diferentes ou diferentes sistemas operacionais, ela receberia uma nota maior que 0.

**Dicas para Regra 1**

- Por exemplo, Windows NT em hardware com exatamente a mesma configuração.

**Dicas para Regra 2**

- Por exemplo, Windows 95, 98 e NT em hardware com uma configuração similar.
- As variações podem incluir diferentes tamanhos de memória, várias capacidades de armazenamento, diferentes velocidades de processadores e diferentes tipos de impressoras.

**Dicas para Regra 3**

- Por exemplo, Windows, OS X, UNIX, Linux e VOS3 em diferentes tipos de hardware.
- As diferenças podem incluir PC baseado em Intel MAC, Tandem, Sun e AS400.

**Normalmente**

A pontuação depende do número de plataformas diferentes.

### 14. Facilidade de Mudança

**Definição**

A característica Facilidade de Mudança descreve os níveis segundo os quais a aplicação foi desenvolvida para fácil modificação da lógica de processamento ou estrutura de dados.

As seguintes características podem ser aplicáveis à aplicação:

A: Consulta Flexível:

1. Consultas e/ou relatórios flexíveis são fornecidos, permitindo a manipulação de pedidos ***simples***. (conte como 1 item)
2. Consultas e/ou relatórios flexíveis são fornecidos, permitindo a manipulação de pedidos de complexidade ***média***. (conte como 2 itens)
3. Consultas e/ou relatórios flexíveis são fornecidos, permitindo a manipulação de pedidos ***complexos***. (conte como 3 itens)

B: Dados de controle do negócio:

1. Dados de controle do negócio são guardados em tabelas mantidas pelo usuário através de processos on-line interativos, mas as alterações só têm efeito no próximo dia útil. (conte como 1 item)
2. Dados de controle do negócio são guardados em tabelas mantidas pelo usuário através de processos on-line interativos, e as alterações têm efeito imediato. (conte como 2 itens)

**Pontos**

| Atribua | Descrições para Determinar o Nível de Influência |
|:--:|---|
| 0 | Nenhum dos itens acima |
| 1 | Qualquer 1 dos itens acima |
| 2 | Quaisquer 2 dos itens acima |
| 3 | Quaisquer 3 dos itens acima |
| 4 | Quaisquer 4 dos itens acima |
| 5 | Quaisquer 5 dos itens acima |

**Dicas**

**Relatórios e Consultas Flexíveis:**

- A facilidade de consulta e relatório flexível significa mais do que uma lista de seleções em uma consulta ou relatório "enlatado".
- É a capacidade do usuário de controlar os dados, fonte de dados, seqüência e formato das suas consultas ou relatórios solicitados.
- Significa a liberdade (autonomia) de projetar o layout da tela, classificação horizontal e vertical, apresentação dos itens de dados, seleção dos critérios tanto dos arquivos quanto dos itens de dados.
- Inclui programação do usuário para consultas, às vezes denominada consulta ou relatório "ad-hoc".
- A utilização de filtros que controlam a quantidade de dados vistos ou impressos em um formato fixo não considerada consulta/relatório flexível.
- A capacidade de escrever uma consulta e/ou relatório é muitas vezes fornecida por linguagens como SQL ou Focus, ou por algumas das ferramentas mais dinâmicas para a geração de relatórios "ad-hoc" (ex. Crystal Reports) .

**Dica para a Regra A1**

- Pedidos simples podem incluir lógica "e/ou" aplicada **a apenas um** arquivo lógico interno.

**Dica para a Regra A2**

- Pedidos de complexidade média podem incluir lógica "e/ou" aplicada **a mais de um** arquivo lógico interno.

**Dica para a Regra A3**

- Pedidos complexos podem incluir combinações de lógica "e/ou" em um ou mais arquivos lógicos internos.

**Dados de Controle do Negócio:**

- Dados de Controle do Negócio (Dados Referenciados) são armazenados para suportar as regras de negócio para a manutenção dos Dados do Negócio; ex.: em uma aplicação de folha de pagamento, seriam as alíquotas governamentais para cada faixa salarial e a data em que a alíquota entrou em vigor.
- Veja a Parte 2, Dados de Códigos para informações adicionais.

**Normalmente**

A pontuação não depende de plataforma

## Tabela de Cálculo do Fator de Ajuste

A tabela a seguir é fornecida para facilitar o cálculo do Fator de Ajuste.

| Características Gerais do Sistema (CGSs) | Grau de Influência (DI) 0 - 5 |
|---|:--:|
| 1. Comunicação de Dados | |
| 2. Processamento Distribuído | |
| 3. Performance | |
| 4. Configuração Intensamente Utilizada | |
| 5. Volume de Transações | |
| 6. Entrada de Dados On-Line | |
| 7. Eficiência do Usuário Final | |
| 8. Atualização On-Line | |
| 9. Processamento Complexo | |
| 10. Reusabilidade | |
| 11. Facilidade de Instalação | |
| 12. Facilidade de Operação | |
| 13. Múltiplos Locais | |
| 14. Facilidade de Mudança | |
| Total do nível de influência (TDI) | |
| Fator de Ajuste (VAF) | |

```
VAF = (TDI * 0.01) + 0.65
```

## Pontos de Função Ajustados de Projeto de Desenvolvimento

### Funcionalidades da Aplicação

Funcionalidades da aplicação consistem em funções usadas depois da instalação do software para satisfazer as necessidades correntes de negócio do usuário.

### Funcionalidades de Conversão

Funcionalidades de conversão consistem em funções fornecidas apenas na instalação para converter dados e/ou atender outros requisitos de conversão especificados pelo usuário, tais como relatórios especiais de conversão.

Por exemplo, se uma aplicação de Recursos Humanos (RH) estava em uso e uma nova aplicação é instalada, os usuários desejam que as informações dos funcionários sejam convertidas e carregadas dentro da nova aplicação. O requisito de conversão especificado pelo usuário é para transferir os dados atuais dos funcionários para o novo sistema de RH.

### Fator de Ajuste da Aplicação

O fator de ajuste é determinado utilizando-se as 14 características gerais do sistema para avaliar a complexidade funcional da aplicação.

### Fórmula: Tamanho Funcional Ajustado do Projeto de Desenvolvimento (aDFP)

Utilize a seguinte fórmula para calcular o tamanho funcional ajustado do Projeto de Desenvolvimento.

```
aDFP = DFP * VAF
```

Onde:

- `aDFP` é o tamanho funcional ajustado do Projeto de Desenvolvimento
- `DFP` é o tamanho funcional do Projeto de Desenvolvimento (`DFP = ADD + CFP`; Veja Parte 1)
- `VAF` é o Fator de Ajuste

**Nota:** Depois da instalação do software, o tamanho funcional da Aplicação é calculado utilizando-se os componentes do tamanho funcional do Projeto de Desenvolvimento.

### Exemplo: Tamanho Funcional Ajustado do Projeto de Desenvolvimento (aDFP)

Esta seção mostra um exemplo da contagem para um projeto de desenvolvimento. O projeto inclui tanto funcionalidades da aplicação como de conversão.

**Nota:** a seguinte contagem é destinada a ser apenas um exemplo e não está especificamente relacionada com outras seções deste manual. Todas as funcionalidades relacionadas podem não estar incluídas (isto é, pode haver funcionalidades faltantes).

#### Funcionalidade da Aplicação

As seguintes tabelas mostram as funcionalidades da aplicação medidas para um projeto de desenvolvimento.

| Funções de Dados | RLRs | DERs | Complexidade Funcional |
|---|:--:|:--:|:--:|
| **Arquivos Lógicos Internos** | | | |
| Informações da Tarefa | 2 | 5 | Baixa |
| Tarefas Suspensas | 2 | 6 | Baixa |
| Definições de Relatórios | 1 | 4 | Baixa |
| Informações dos Funcionários | 1 | 6 | Baixa |
| **Arquivos de Interface Externa** | | | |
| Informações de Locais | 1 | 6 | Baixa |
| Informações de Conversão | 1 | 2 | Baixa |
| Informações de Ajuda de Telas | 1 | 2 | Baixa |
| Informações de Ajuda de Campos | 1 | 5 | Baixa |

| Funções de Transação | ALRs | DERs | Complexidade Funcional |
|---|:--:|:--:|:--:|
| **Entradas Externas** | | | |
| Definição do Relatório de Alocação | 1 | 5 | Baixa |
| Inclusão das informações da Tarefa (tela entrada) | 1 | 7 | Baixa |
| Inclusão das informações da Tarefa (entrada batch) | 2 | 6 | Média |
| Correção de Tarefas Suspensas | 1 | 7 | Baixa |
| Atribuição da Tarefa ao Funcionário | 3 | 7 | Alta |
| EE com tela de saída – 1 | 2 | 11 | Média |
| EE com tela de saída – 2 | 1 | 6 | Baixa |
| **Saídas Externas** | | | |
| Relatório das Tarefas com Funcionários | 4 | 5 | Média |
| Relatório dos Funcionários por Duração da Tarefa | 3 | 7 | Média |
| Notificação de Avaliação da Performance | 3 | 4 | Baixa |
| Relatório Semanal de Funcionários | 1 | 3 | Baixa |
| Impressão do Cheque | 1 | 3 | Baixa |
| Arquivo de Transação do Cheque | 1 | 4 | Baixa |
| **Consultas Externas** | | | |
| Lista de Dados Recuperados | 1 | 4 | Baixa |
| Unidade de Negociação | 1 | 2 | Baixa |
| Ajuda Nível Campo | 1 | 6 | Baixa |
| Relatório Semanal de filiação | 1 | 3 | Baixa |
| Arquivo Diário de Cheques | 1 | 2 | Baixa |

#### Funcionalidade de Conversão

A seguinte tabela mostra as funcionalidades de conversão para o projeto de desenvolvimento.

| Função de Transação | ALRs | DERs | Complexidade Funcional |
|---|:--:|:--:|:--:|
| **Entrada Externa** | | | |
| Migração do Funcionário | 1 | 11 | Baixa |

#### Contribuição da Aplicação para o Tamanho Funcional

A seguinte tabela mostra a contribuição ao tamanho funcional não ajustado.

| Tipo de Função | | Complexidade Funcional | | Totais por tipo de Complexidade | Totais por Tipo de Função |
|---|:--:|:--:|:--:|:--:|:--:|
| ALIs | 4 | Baixa | X 7 = | 28 | |
| | 0 | Média | X 10 = | 0 | |
| | 0 | Alta | X 15 = | 0 | 28 |
| AIEs | 4 | Baixa | X 5 = | 20 | |
| | 0 | Média | X 7 = | 0 | |
| | 0 | Alta | X 10 = | 0 | 20 |
| EEs | 4 | Baixa | X 3 = | 12 | |
| | 2 | Média | X 4 = | 8 | |
| | 1 | Alta | X 6 = | 6 | 26 |
| SÉS | 4 | Baixa | X 4 = | 16 | |
| | 2 | Média | X 5 = | 10 | |
| | 0 | Alta | X 7 = | 0 | 26 |
| CEs | 5 | Baixa | X 3 = | 15 | |
| | 0 | Média | X 4 = | 0 | |
| | 0 | Alta | X 6 = | 0 | 15 |
| | | | | | Incluídos  115 |

#### Contribuição da Conversão para o Tamanho Funcional

A seguinte tabela mostra a contribuição das funcionalidades de conversão para o tamanho funcional.

| Tipo de Função | | Complexidade Funcional | | Total Complexidade | Totais por Tipo de Função |
|---|:--:|:--:|:--:|:--:|:--:|
| EEs | 1 | Baixa | X 3 = | 3 | |
| | 0 | Média | X 4 = | 0 | |
| | 0 | Alta | X 6 = | 0 | |
| | | | | | CFP  3 |

#### Cálculo Final

Utilizando as contagens de complexidade e contribuição para este exemplo, o tamanho ajustado do Projeto de Desenvolvimento é demonstrado abaixo. O Fator de Ajuste para este exemplo é 1.05.

```
aDFP = (ADD + CFP) * VAF
aDFP = (115 + 3) * 1.05
aDFP = 123.9 ou 124
```

## Tamanho Funcional Ajustado do Projeto de Melhoria (aEFP)

O tamanho funcional ajustado do Projeto de Melhoria consiste de três componentes:

- Funcionalidades da Aplicação incluídas nos requisitos do usuário para o projeto
- Funcionalidades de Conversão incluídas nos requisitos do usuário para o projeto
- Fator de Ajuste da Aplicação

### Considerações sobre a CGS para o Projeto de Melhoria

As 14 Características Gerais do Sistema (CGSs) opcionais, definidas neste apêndice, devem ser revistas para alteração. Pequenas melhorias normalmente não exigem tal revisão. Exemplos de mudanças que podem indicar uma necessidade de revisão das CGSs incluem:

- Adição de funções on-line em uma aplicação batch;
- Aumento do volume de transações e/ou redução de tempo de resposta que agora necessitem de projeto de performance e atividades de teste;
- Novas características de usabilidade solicitadas;
- Adição de uma interface Web em uma aplicação on-line existente;
- Adição de um novo protocolo de comunicação em uma aplicação existente.

### Funcionalidade da Aplicação

As funcionalidades da aplicação consistem em:

- Pontos de função identificados a partir das funcionalidades que são incluídas pela melhoria
- Pontos de função contados devido a funcionalidades existentes que são alteradas durante o projeto de melhoria
- Pontos de função contados para as funcionalidades excluídas durante o projeto de melhoria

### Funcionalidades de Conversão

As funcionalidades de conversão consistem em pontos de função fornecidos por qualquer funcionalidade de conversão solicitada pelo usuário.

### Fator de Ajuste

Os dois fatores de ajuste são:

- Fator de ajuste da aplicação antes do projeto de melhoria iniciar
- Fator de ajuste da aplicação depois do projeto de melhoria estar concluído

### Formula: Tamanho Funcional Ajustado do Projeto de Melhoria (aEFP)

Utilize a seguinte formula para calcular o tamanho funcional ajustado do Projeto de Melhoria.

**Nota:** Requisitos de conversão de dados *estão incluídos* nesta contagem.

```
aEFP = [(ADD + CHGA + CFP) * VAFA] + (DEL * VAFB)
```

Onde:

- `aEFP` É o tamanho funcional ajustado do Projeto de Melhoria
- `ADD` É o tamanho das funções sendo adicionadas pelo Projeto de Melhoria
- `CHGA` É o tamanho das funções sendo alteradas pelo Projeto de Melhoria – tal como elas são/serão *depois* da implementação
- `CFP` É o tamanho da Funcionalidade de Conversão
- `VAFA` É o Fator de Ajuste da Aplicação *depois* do Projeto de Melhoria estar concluído
- `DEL` É o tamanho das funções sendo excluídas pelo Projeto de Melhoria
- `VAFB` É o Fator de Ajuste da Aplicação *antes* do Projeto de Melhoria iniciar

**Nota:** Quando um projeto de melhoria é instalado, o tamanho funcional da Aplicação deve ser atualizado para refletir as alterações nas funcionalidades da aplicação.

### Exemplo: Tamanho Funcional Ajustado do Projeto de Melhoria (aEFP)

Esta seção mostra um exemplo para um projeto de melhoria. Os requisitos para o projeto de melhoria incluem as seguintes mudanças:

- O usuário não precisa mais incluir uma tarefa on-line, portanto, esta funcionalidade é para ser ou foi excluída.
- O usuário precisa receber um relatório adicional sobre tarefas que foram incluídas no total.
- DERs adicionais são requeridos para incluir tarefas em modo batch e para corrigir transações suspensas. Uma referência à segurança também é incluída na transação de inclusão de tarefa.

#### Funcionalidade da Aplicação

Os seguintes parágrafos explicam as funcionalidades da aplicação contadas para o exemplo do projeto de melhoria. Cada funcionalidade é descrita como incluída, alterada ou excluída.

**Funcionalidades Incluídas**

A seguinte tabela mostra a complexidade funcional da funcionalidade incluída contada quando o projeto estiver concluído.

**Nota:** O fornecimento de um novo relatório foi uma saída externa adicional.

| Funções de Transação | ALRs | DERs | Complexidade Funcional |
|---|:--:|:--:|:--:|
| **Saída Externa** | | | |
| Relatório de Tarefas | 1 | 15 | Baixa |

**Funcionalidades Alteradas**

A seguinte tabela mostra a complexidade funcional das funcionalidades alteradas, depois que o projeto de melhoria estiver concluído.

**Nota:** a complexidade de incluir uma tarefa foi aumentada porque um tipo de arquivo adicional foi referenciado. A complexidade de correção de transações suspensas continua baixa.

**Depois**

| Funções de Transação | ALRs | DERs | Complexidade Funcional |
|---|:--:|:--:|:--:|
| **Entrada Externa** | | | |
| Inclusão de informações de tarefa (modo batch) | 3 | 8 | Alta |
| Correção de transações suspensas | 1 | 8 | Baixa |

**Antes**

| Funções de Transação | ALRs | DERs | Complexidade Funcional |
|---|:--:|:--:|:--:|
| **Entrada Externa** | | | |
| Inclusão de informações de tarefa (modo batch) | 2 | 6 | Média |
| Correção de transações suspensas | 1 | 7 | Baixa |

**Funcionalidades Excluídas**

A seguinte tabela mostra a complexidade funcional da funcionalidade excluída identificada no final do projeto.

| Funções de Transação | ALRs | DERs | Complexidade Funcional |
|---|:--:|:--:|:--:|
| **Entradas Externas** | | | |
| Inclusão de informação de tarefa (tela entrada) | 1 | 7 | Baixa |

#### Contribuição da Aplicação para o Tamanho Funcional

Os seguintes parágrafos explicam a contribuição das funcionalidades da aplicação para o tamanho funcional total não ajustado.

**Funcionalidades incluídas**

A seguinte tabela mostra a contribuição para o tamanho funcional das funcionalidades incluídas, identificadas ao final do projeto.

| Tipo de Função | | Complexidade Funcional | | Totais por tipo de Complexidade | Totais por Tipo de Função |
|---|:--:|:--:|:--:|:--:|:--:|
| SEs | 1 | Baixa | X 4 = | 4 | |
| | 0 | Média | X 5 = | 0 | |
| | 0 | Alta | X 7 = | 0 | |
| | | | | | ADD  4 |

**Funcionalidades alteradas**

A seguinte tabela mostra a contribuição das funcionalidades alteradas para o tamanho funcional das funcionalidades alteradas tal como existirão depois do Projeto de Melhoria estar concluído.

**Depois**

| Tipo de Função | | Complexidade Funcional | | Totais por tipo de Complexidade | Totais por Tipo de Função |
|---|:--:|:--:|:--:|:--:|:--:|
| EEs | 1 | Baixa | X 3 = | 3 | |
| | 0 | Média | X 4 = | 0 | |
| | 1 | Alta | X 6 = | 6 | |
| | | | | | CHGA  9 |

**Antes**

| Tipo de Função | | Complexidade Funcional | | Totais por tipo de Complexidade | Totais por Tipo de Função |
|---|:--:|:--:|:--:|:--:|:--:|
| EEs | 1 | Baixa | X 3 = | 3 | |
| | 1 | Média | X 4 = | 4 | |
| | 0 | Alta | X 6 = | 0 | |
| | | | | | CHGB  7 |

**Funcionalidades excluídas**

A seguinte tabela mostra a contribuição ao tamanho funcional das funcionalidades excluídas.

| Tipo de Função | | Complexidade Funcional | | Totais por tipo de Complexidade | Totais por Tipo de Função |
|---|:--:|:--:|:--:|:--:|:--:|
| EEs | 1 | Baixa | X 3 = | 3 | |
| | 0 | Média | X 4 = | 0 | |
| | 0 | Alta | X 6 = | 0 | |
| | | | | | DEL  3 |

#### Cálculo Final

O fator de ajuste da aplicação era 1,05 antes do início do projeto. O fator de ajuste continua o mesmo depois do término do projeto. Utilizando a contagem de complexidade e contribuição para este exemplo, o tamanho funcional ajustado do Projeto de Melhoria está demonstrado abaixo:

```
aEFP = [(ADD + CHGA + CFP) * VAFA] + (DEL * VAFB)
aEFP = [(4 + 9 + 0) * 1.05] + (3 * 1.05)
aEFP = 16.8 ou 17
```

## Tamanho Funcional Ajustado da Aplicação (aAFP)

Esta seção fornece fórmulas para calcular o tamanho funcional ajustado da Aplicação. Existem duas variações desta fórmula:

- Fórmula para determinar o tamanho funcional inicial ajustado para uma Aplicação
- Fórmula para recalcular o tamanho funcional ajustado para uma Aplicação *depois* de um Projeto de Melhoria ter alterado as Funcionalidades da Aplicação

### Fórmula: Tamanho Funcional Inicial Ajustado da Aplicação (aAFP)

Utilize a fórmula desta seção para determinar o tamanho funcional inicial ajustado para uma Aplicação. Inicialmente, o usuário está recebendo novas funcionalidades. Não existem alterações nas funcionalidades existentes ou exclusões de funcionalidades obsoletas ou desnecessárias. O tamanho funcional ajustado da Aplicação *não inclui* requisitos de conversão.

```
aAFP = ADD * VAF
```

Onde:

- `aAFP` É o tamanho funcional inicial ajustado da Aplicação
- `ADD` É o tamanho das funções do Projeto de Desenvolvimento a serem entregues ao usuário ou a Funcionalidade que existe em qualquer momento que a Aplicação seja medida.
- `VAF` É o Fator de Ajuste da Aplicação.

### Fórmula: Tamanho Funcional Ajustado da Aplicação Depois do Projeto de Melhoria (aAFPA)

Quando um projeto de melhoria é instalado, o tamanho funcional da Aplicação existente deve ser atualizado para refletir as modificações na Aplicação. As funcionalidades da aplicação podem ser alteradas de várias maneiras:

- Funcionalidades incluídas (novas) aumentam o tamanho da aplicação
- Funcionalidades alteradas aumentam, diminuem ou não afetam o tamanho da aplicação
- Funcionalidades excluídas diminuem o tamanho da aplicação
- Mudanças no fator de ajuste aumentam ou diminuem o tamanho da aplicação.

**Nota:** Como as funcionalidades de conversão não afetam o tamanho funcional ajustado da Aplicação, qualquer funcionalidade de conversão associada a um projeto de melhoria está inteiramente excluída do cálculo do tamanho funcional ajustado da Aplicação.

Utilize a seguinte fórmula para calcular o tamanho funcional ajustado da Aplicação após o projeto de melhoria:

```
aAFPA = [(AFPB + ADD + CHGA) - (CHGB + DEL)] * VAFA
```

Onde:

- `aAFPA` É o tamanho funcional ajustado da Aplicação *depois* do Projeto de Melhoria
- `AFPB` É o tamanho funcional da Aplicação *antes* do Projeto de Melhoria começar.
- `ADD` É o tamanho das funções sendo incluídas pelo Projeto de Melhoria.
- `CHGA` É o tamanho das funções sendo alteradas pelo Projeto de Melhoria – tal como elas são / serão após a implementação
- `CHGB` É o tamanho das funções sendo alteradas pelo Projeto de Melhoria – tal como elas são / eram antes do inicio do projeto
- `DEL` É o tamanho das funções sendo excluídas pelo Projeto de Melhoria.
- `VAFA` É o fator de ajuste da aplicação depois que o projeto de melhoria estiver concluído.

**Nota:** Se este valor estiver indisponível, pode ser calculado utilizando-se a fórmula `AFPB = aAFPB/VAFB`; Onde `aAFPB` é o tamanho funcional ajustado da Aplicação *antes* do Projeto de Melhoria e `VAFB` é o Fator de Ajuste da Aplicação *antes* do Projeto de Melhoria.

### Exemplo: Contagem de Aplicação

Esta seção mostra um exemplo de tamanho funcional inicial ajustado e o tamanho funcional ajustado que reflete um Projeto de Melhoria. Os números para estas medições de tamanho funcional provem do exemplo de Aplicação, anterior neste apêndice.

#### Tamanho Funcional Inicial Ajustado da Aplicação (aAFP)

O tamanho funcional inicial ajustado da Aplicação é demonstrado abaixo. O Fator de Ajuste é 1.05.

```
aAFP = ADD * VAF
aAFP = 115 * 1.05
aAFP = 120.75 ou 121
```

**Nota:** Apenas o tamanho das funcionalidades da aplicação instaladas para o usuário são incluídas no tamanho inicial.

#### Tamanho Funcional Ajustado da Aplicação Depois (aAFPA)

O tamanho funcional ajustado da Aplicação para refletir o projeto de Melhorias é demonstrado abaixo. O Fator de Ajuste é 1.05.

```
aAFPA = [(AFPB + ADD + CHGA) - (CHGB + DEL)] * VAFA
aAFPA = [(115 + 4 + 9) - (7 + 3)] * 1.05
aAFPA = 123.9 ou 124
```
