# Parte 2 · Capítulo 3 — Reunir Informações Disponíveis

> Parte 2 — A Transição (Aplicando o Método FSM do IFPUG) · CPM v4.3.1
>
> *Observação: o título acima segue o Sumário Principal (Conteúdo). No corpo do manual impresso, o cabeçalho deste capítulo aparece como "Obter Documentação Disponível".*

**Introdução**

Este capítulo apresenta a documentação comumente disponível durante o ciclo de vida de uma aplicação e a importância do papel do usuário.

**Conteúdo**

Este capítulo inclui:

| Tópico | Página |
|---|---|
| **Visão do Usuário** | **3-2** |
| **Documentação Disponível Durante o Ciclo de Vida de uma Aplicação** | **3-3** |
| Fase: Requisitos Iniciais do Usuário | 3-4 |
| Fase: Requisitos Técnicos | 3-5 |
| Fase: Requisitos Funcionais Finais do Usuário | 3-6 |
| **Comparações entre as Fases do Ciclo de Vida** | **3-8** |
| **Documentação Útil do Projeto da Aplicação** | **3-9** |
| **Tamanho Funcional** | **3-10** |

## Visão do Usuário

Um *usuário* é qualquer pessoa ou coisa que se comunica ou interage com o software a qualquer momento.

A visão do usuário é o Requisito Funcional do Usuário *como percebido* pelo usuário.

Requisitos Funcionais do Usuário são um subconjunto dos requisitos do usuário que descrevem o que o software deverá fazer em termos de tarefas e serviços.

A visão do usuário representa uma descrição formal das necessidades dos negócios do usuário, na linguagem do usuário. Os desenvolvedores traduzem a informação do usuário para informações em linguagem técnica a fim de prover uma solução.

A visão do usuário:

- É uma descrição das funções do negócio
- Pode ser feito por declaração verbal pelo usuário através de seu ponto de vista
- É aprovada pelo usuário
- Pode ser usada para medir o tamanho funcional
- Pode variar na forma física (ex., catálogo de transações, propostas, documento de requisitos, especificações externas, especificações detalhadas, manuais do usuário)

Uma medição de tamanho funcional é realizada utilizando a informação em uma linguagem que é comum para o usuário(s) e desenvolvedores.

## Documentação Disponível Durante o Ciclo de Vida de uma Aplicação

Os requisitos do usuário evoluem rapidamente nas fases iniciais de um projeto. Os usuários e desenvolvedores devem decidir, de comum acordo, quais funções deverão ser incluídas em uma aplicação. Estas decisões a respeito das funções de um projeto podem ser influenciadas por:

- Necessidades da organização
- Riscos (de negócios e técnicos) associados ao projeto
- Recursos disponíveis (ex. orçamento, pessoal) para o projeto
- Tecnologia disponível na organização
- Influência de outros usuários ou desenvolvedores através de comentários e sugestões.

No começo de um projeto é produzido o estudo de viabilidade. Ele é a especificação de nível mais alto e é normalmente muito curto; por exemplo:

- A organização precisa de uma aplicação para se adaptar a uma nova legislação sobre impostos
- A organização precisa de uma aplicação para administrar estoques de maneira mais eficiente
- A organização precisa de uma aplicação para administrar recursos humanos de maneira mais eficiente

Depois do estudo de viabilidade, o usuário desenvolve requisitos que se tornam mais precisos com o passar do tempo. Em algum momento, o usuário trocará idéias com os desenvolvedores para criar os requisitos detalhados. Os desenvolvedores de software podem antecipar seus trabalho de desenvolvimento e implementação dos requisitos com base no estudo de viabilidade. As conversas entre usuários e desenvolvedores de software levam a requisitos mais refinados. O processo de desenvolvimento varia de acordo com as diferentes organizações. Este manual irá considerar, para fins ilustrativos, um modelo com três categorias de documentos de requisitos:

- Requisitos Iniciais do Usuário
- Requisitos Técnicos Iniciais
- Requisitos Funcionais Finais

Assim como em outras metodologias de desenvolvimento, a Fase de Requisitos Funcionais Finais é fase mais precisa para a medição de tamanho funcional.

## Fase: Requisitos Iniciais do Usuário

Esta fase representa os requisitos dos usuários antes das sessões entre os usuários e os desenvolvedores de software. Pode ter uma ou mais das características abaixo:

- Incompleta

  *Por exemplo*, Nos Requisitos Iniciais do Usuário podem faltar funções necessárias à integridade referencial

- Falta de funcionalidades "utilitárias"

  *Por exemplo*, relatórios de validação essenciais ou consultas podem estar faltando

- Impossibilidade de implementação ou uso muito difícil

  *Por exemplo*, um usuário pode pedir uma consulta on-line que requeira uma hora de processamento de CPU

- Muito genérica

  *Por exemplo*, os requisitos podem não incluir a lista específica de campos de reconhecimento do usuário

- Não atender às necessidades para todos os usuários da aplicação

  *Por exemplo*, os requisitos de um projeto específico podem variar de um usuário para outro, se não tiverem as mesmas necessidades funcionais

- Requisitos definidos sem considerar as fronteiras de aplicação

  *Por exemplo*, fronteiras da aplicação futura e/ou atual podem não estar sendo consideradas

- Expressos em um contexto diferente ou em uma terminologia não compatível com a análise de pontos de função

  *Por exemplo*: os Requisitos Iniciais do Usuário podem fazer referência ao aspecto físico ou manual do sistema.

**Exemplo**

No departamento de RH de uma organização, um usuário expressa seu requisito assim:

"Sempre que eu estou trabalhando com um funcionário, quero poder ver as informações do funcionário informando o seu nome".

Este requisito implica no desenvolvimento de uma tela de consulta e de um grupo de dados de funcionário.

Exemplo de Funcionalidades dos Requisitos Inicial do Usuário:

- CE — consulta de um funcionário específico
- ALI — grupo de dados de funcionário

## Fase: Requisitos Técnicos

Esta segunda fase representa a visão dos desenvolvedores de software sobre os requisitos criados a partir do estudo de viabilidade. Um trabalho dos desenvolvedores de software, dentre outros, é organizar os requisitos dentro das aplicações existentes, se existirem. Os Requisitos Técnicos Iniciais podem incluir elementos necessários para a implementação, mas não são utilizados na medição de tamanho funcional (ex.: arquivos temporários, índices, etc.). Esta fase pode ter uma ou mais das características abaixo:

- Dependência tecnológica

  *Por exemplo*: os arquivos físicos variam com base no ambiente de banco de dados.

- Terminologia não familiar com os usuários

  *Por exemplo*, desenvolvedores de software podem se referir aos arquivos físicos ao invés de grupos lógicos de dados.

- Funcionalidades podem ser determinadas enfatizando restrições técnicas

  *Por exemplo*: alguns desenvolvedores tendem a limitar o escopo dos requisitos pelo foco na capacidade computacional (CPU) disponível no momento na organização.

- Fronteiras são determinadas de acordo com a arquitetura técnica ao invés de processos do negócio

  *Por exemplo*: pode haver requisitos técnicos separados para cliente e servidor, mas ambos devem ser considerados na mesma fronteira de aplicação quando se estiver medindo o tamanho funcional.

**Exemplo**

*Desenvolvedor*: "Eu reconheço a necessidade de uma consulta de funcionários. Um índice é necessário para acelerar a busca de funcionários específicos".

As funções dos Requisitos Técnicos Iniciais podem ser identificadas como:

- CE — consulta de um funcionário específico
- ALI — grupo de dados de funcionário
- ALI\* — índice do arquivo de funcionário

  \*Arquivos de índices não são incluídos na medição de tamanho funcional. Neste exemplo, o arquivo de índice foi incorretamente identificado como um ALI para ilustrar um erro potencial na contagem por parte dos desenvolvedores de software.

## Fase: Requisitos Funcionais Finais

Esta terceira fase dos requisitos origina-se de sessões conjuntas entre o(s) usuário(s) e o(s) desenvolvedor(es). As sessões conjuntas são necessárias para tornar os requisitos funcionais consistentes e completos para a aplicação. Esta fase é a versão final dos requisitos funcionais do usuário para a aplicação antes do início da fase de desenvolvimento e tem as seguintes características:

- Terminologia que pode ser entendida tanto pelos usuários quanto pelos desenvolvedores de software
- Descrições integradas de todos os requisitos do usuário, incluindo requisitos de todos os grupos de usuários existentes
- Todos os processos de negócio são completamente definidos, incluindo toda ação do usuário, campos entrando e saindo da fronteira de aplicação, fontes de dados são definidas por cada processo de negócio, e as validações que ocorram como parte de cada processo de negócio
- Cada processo e grupo de dados é aprovador por usuário e desenvolvedor
- A viabilidade e utilidade são aprovadas pelos desenvolvedores de software

**Exemplo**

*Usuário*: "Sempre que eu estou trabalhando com um funcionário, quero poder ver as informações dos funcionários informando seu nome."

*Desenvolvedor*: "Reconheço a necessidade de consulta de funcionários, mas muitos funcionários podem ter o mesmo nome. Não é possível especificar um funcionário individualmente através de seu nome; por esta razão, sugiro uma lista de funcionários on-line (nome, localização e número da previdência social), através da qual seja possível selecionar um funcionário. Será necessário um índice para acelerar a recuperação de um funcionário específico".

*Usuário*: "Concordo que a lista de seleção de funcionários é necessária neste caso, e isto também pode ser usado para outros propósitos além da seleção de funcionário".

Resultado desta conversa entre o usuário e o desenvolvedor:

- Incluir uma lista on-line de funcionários nos requisitos funcionais do usuário e no tamanho funcional
- Excluir o índice de funcionários da contagem de pontos de função já que esta é uma solução técnica

Funções do Exemplo de Requisitos Funcionais Finais:

- CE — consulta a um específico funcionário
- CE — lista on-line de funcionários
- ALI — grupo de dados de funcionário

O documento de Requisitos Funcionais Finais é a versão final dos requisitos antes de iniciar a fase de desenvolvimento. Neste momento, deverá haver concordância quanto aos requisitos documentados estarem concluídos, formalizados e aprovados. A medição de tamanho funcional, assumindo que não haja nenhuma mudança adicional no escopo, deverá ser consistente com a medição na conclusão do desenvolvimento.

## Comparação das Fases do Ciclo de Vida

Antes de iniciar uma medição de tamanho funcional, determine a fase do ciclo de vida da aplicação e se você vai fazer uma aproximação, ou uma medição. Documente qualquer suposição.

Uma aproximação permite fazer suposições sobre funções desconhecidas e/ou suas complexidades, para determinar um tamanho funcional aproximado.

Uma medição inclui a identificação de todas as funções e suas complexidades, para efetuar uma análise de pontos de função.

Num primeiro estágio, os Requisitos Iniciais do Usuário podem ser o único documento disponível para a análise de pontos de função. Apesar das desvantagens, este tamanho pode ser muito útil para produzir uma estimativa antecipada. A utilização da análise de pontos de função para obter aproximações nas várias fases do ciclo de vida é apresentada a seguir:

| Fase do Ciclo de Vida | O tamanho pode ser aproximado | O tamanho pode ser medido |
|---|---|---|
| **Proposta**: usuários expressam necessidades e intenções | sim | não |
| **Requisitos**: desenvolvedores e usuário revisam e concordam quanto às necessidades e intenções do usuário | sim | sim |
| **Projeto**: os desenvolvedores podem incluir elementos para implementação que não são usados pela análise de pontos de função | sim | sim |
| **Construção** | sim | sim |
| **Entrega** | sim | sim |
| **Manutenção** | sim | sim |

**Nota:** Não foi assumido nenhum ciclo de vida específico. Se utilizar uma abordagem iterativa, você deve esperar uma aproximação do tamanho durante boa parte do ciclo de vida de desenvolvimento.

Esteja certo de estar medindo somente requisitos novos ou refinados de acordo com as necessidades e intenções do usuário.

## Utilidade do Projeto/Documentação da Aplicação

Em geral, os itens a seguir são úteis quando se faz alguma medição de tamanho funcional:

- Documentos de requisitos
- Diagrama de entidades
- Modelos de objetos
- Modelos de dados
- Arquivo e esquemas banco de dados (com lógica, atributos necessários do usuário identificados)
- Acordos de Interface com descrições de entradas em lote/arquivos de transação e interfaces de/para outras aplicações
- Exemplos de relatórios, telas online e outras interfaces de usuário
- Demonstração da operação de aplicação
- Uma ou mais especialistas na aplicação (para a aplicação que está sendo medida)
- Um ou mais clientes/usuários de aplicação (passíveis de serem consultados durante o processo de medição)
- Guia de usuário, manual de treinamento e ajuda da aplicação
- Documentação do projeto do sistema
- Especificações funcionais
- Casos de uso

**Nota:** Esta lista acima não é exaustiva.

## Tamanho Funcional

O CPM do IFPUG foi transformado em padrão ISO para a medição de tamanho funcional, com a exclusão das Características Gerais do Sistema, que medem requisitos não funcionais (técnicos e de qualidade). Até certo ponto, esta transformação permitiu que o Comitê de Práticas de Contagem tratasse consistentemente itens como Dados de Código. A consideração mais importante em relação a estas questões é como os requisitos não funcionais afetam o tamanho. Como não são parte do tamanho funcional, não contribuem para o tamanho funcional. Entretanto, ainda são parte de todos os requisitos (funcional e não funcional) para o software, contribuindo então para o tamanho do mesmo.

Para uma discussão detalhada sobre tamanho funcional e como ele irá tanto conduzir como restringir a evolução da análise de pontos de função, consulte o documento do IFPUG Framework for Functional Sizing[^1].

[^1]: Framework for Functional Sizing, IFPUG CPC, Release 1.0, September 2003
