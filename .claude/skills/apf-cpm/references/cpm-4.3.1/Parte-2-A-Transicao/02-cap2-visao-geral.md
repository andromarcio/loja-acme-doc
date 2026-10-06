# Parte 2 · Capítulo 2 — Visão Geral do Método FSM do IFPUG

> Parte 2 — A Transição (Aplicando o Método FSM do IFPUG) · CPM v4.3.1

**Introdução**

Este capítulo apresenta uma visão geral do Método de Medição de Tamanho Funcional (FSM) do IFPUG. Também apresenta um exemplo simples dos procedimentos de contagem de pontos de função.

**Conteúdo**

Este capítulo contempla as seguintes seções:

| Tópico | Página |
|---|---|
| **Procedimento do Método de Medição de Tamanho Funcional** | **2-2** |
| Procedimento por Capítulo | 2-2 |
| Exemplo Simples de Contagem | 2-3 |
| Diagrama Simplificado | 2-3 |
| Obter Documentação Disponível | 2-4 |
| Determinar o Escopo da Contagem e Fronteira e Identificar os Requisitos Funcionais do Usuário | 2-4 |
| Medir Funções de Dados | 2-5 |
| Medir Funções de Transação | 2-6 |
| Calcular o Tamanho Funcional | 2-7 |

## Procedimento do Método de Medição de Tamanho Funcional

Esta seção apresenta um procedimento de alto nível para o Método de Medição de Tamanho Funcional do IFPUG.

### Diagrama do Procedimento

![Diagrama do procedimento: obter documentação disponível → determinar escopo da contagem e fronteiras e identificar requisitos funcionais do usuário → medir funções de dados / medir funções de transação → calcular tamanho funcional → documentar e relatar](images/p066-diagrama-procedimento.png)

## Procedimento por Capítulo

A tabela seguinte apresenta o procedimento de contagem de pontos de função, que é explicado nos capítulos restantes da Parte 2.

**Nota:** Um exemplo simples do procedimento de contagem é apresentado nas páginas seguintes deste capítulo.

| Procedimento | Capítulo |
|---|---|
| Obter Documentação Disponível | 3 Obter Documentação Disponível |
| Determinar o Escopo da Contagem e Fronteira e Identificar Requisitos Funcionais do Usuário | 4 Determinar Tipo da Contagem |
| Determinar o Escopo da Contagem e Fronteira e Identificar Requisitos Funcionais do Usuário | 5 Determinar o Escopo da Contagem e Fronteira e Identificar Requisitos Funcionais do Usuário |
| Medir Funções de Dados | 6 Medir Funções de Dados |
| Medir Funções Transação | 7 Medir Funções Transação |

**Nota:** Não existem capítulos específicos para Calcular o Tamanho Funcional e Documentar e Relatar, pois estes procedimentos não necessitam de explicação adicional além da que foi fornecida na Parte 1.

## Exemplo Simples de Contagem

Esta seção apresenta um exemplo simples do procedimento de contagem de pontos de função e os componentes do tamanho funcional.

### Diagrama Simplificado

O diagrama seguinte apresenta os componentes para o exemplo de contagem de uma Aplicação de Recursos Humanos. Use o diagrama como referência enquanto estiver lendo os parágrafos restantes deste capítulo.

![Diagrama simplificado da contagem de uma Aplicação de Recursos Humanos, mostrando a Fronteira da aplicação, o ALI "Dados de Empregado", o AIE "Taxa de Conversão" (mantido pelo Sistema Monetário), a EE "Cadastra Novo Empregado", a SE "Relatório Sumarizado de Empregados" e a CE "Solicita e Apresenta Informação do Empregado"](images/p067-diagrama-simplificado-fronteira.png)

## Obter Documentação Disponível

O primeiro passo do procedimento de contagem de pontos de função é obter a documentação disponível, de acordo com 5.2 da Parte 1, para sustentar a medição funcional de tamanho. Ela deve descrever a funcionalidade entregue pelo software ou a funcionalidade que é impactada pelo projeto de software que está sendo medido.

Uma documentação adequada pode incluir requisitos, modelos de dados/objetos, diagramas de classe, diagramas de fluxo de dados, casos de uso, descrições procedurais, layout de relatórios e telas, manuais de usuário e outros artefatos do desenvolvimento de software. Se não há documentação suficientemente disponível, deve se buscar o acesso aos especialistas no negócio para cobrir as lacunas da documentação.

O capítulo 3 discute a documentação disponível durante o ciclo de vida de uma aplicação.

## Determinar o Escopo da Contagem e Fronteira e Identificar os Requisitos Funcionais do Usuário

Uma medição de tamanho funcional é feita para responder a uma questão de negócio. De acordo com 5.3 da Parte 1, é a questão de negócio que determina o propósito da contagem.

De acordo com o seu propósito, as contagens de pontos de função podem ser identificadas da seguinte maneira:

- Contagem de pontos de função de projeto de desenvolvimento
- Contagem de pontos de função de projeto de melhoria
- Contagem de pontos de função da aplicação

O Capítulo 4 fornece orientações para terminar o tipo da contagem de pontos de função.

O escopo da contagem define o conjunto dos Requisitos Funcionais do Usuário que serão incluídos na contagem de pontos de função.

A fronteira é uma interface conceitual entre o software em análise e seus usuários.

O diagrama simplificado anterior apresenta a fronteira da aplicação entre a Aplicação de Recursos Humanos (que está sendo medida) e o Sistema Monetário (externo). Também apresenta a fronteira da aplicação da Aplicação de Recursos Humano e seus usuários.

O Capítulo 5 discute mais sobre escopo da contagem e fronteira da aplicação.

## Medir Funções de Dados

Uma função de dados representa a funcionalidade fornecida ao usuário para atender suas necessidades internas e externas de armazenamento de dados. Uma função de dados pode ser um arquivo lógico interno ou um arquivo de interface externa.

- Um arquivo lógico interno (ALI) é um grupo de dados ou informações de controle, reconhecido pelo usuário e mantido dentro da fronteira da aplicação sendo medida. A principal intenção de um ALI é armazenar dados mantidos por um ou mais processos elementares da aplicação sendo medida.

  O diagrama simplificado anterior apresenta um grupo de dados relacionado a empregado mantido dentro da Aplicação de Recursos Humanos como um exemplo de Arquivo Lógico Interno.

- Um arquivo de interface externa (AIE) é um grupo de dados ou informações de controle, reconhecido pelo usuário, e que é apenas referenciado pela aplicação sendo medida, mas que são mantidos dentro da fronteira de outra aplicação. A principal intenção de um AIE é armazenar dados referenciados por um ou mais processos elementares da aplicação sendo medida. Isto significa que um AIE contado para uma aplicação deve ser um ALI em alguma outra aplicação.

  O diagrama simplificado anterior mostra informação de taxa de conversão mantida pelo Sistema Monetário e que é referenciado pela Aplicação de Recursos Humanos como um exemplo de Arquivo de Interface Externa.

O Capítulo 6 da Parte 2 discute o uso das regras para medir funções de dados.

A Parte 3 contém orientações adicionais para medir funções de dados.

A Parte 4 contém exemplos que ilustram o uso das regras das funções de dados.

## Medir Funções de Transação

Uma função de transação é um processo elementar que fornece funcionalidade ao usuário para processamento de dados. Uma função de transação pode ser uma entrada externa, saída externa ou consulta externa.

- Uma entrada externa (EE) é um processo elementar que processa dados ou informações de controle recebidos de fora da fronteira da aplicação. A intenção primária de uma EE é manter um ou mais ALIs e/ou alterar o comportamento do sistema.

  O diagrama simplificado anterior mostra o processo de cadastrar um novo empregado na Aplicação de Recursos Humanos como um exemplo de uma Entrada Externa.

- Uma saída externa (SE) é um processo elementar que envia dados ou informações de controle para fora da fronteira da aplicação e inclui processamento adicional além daquele existente em uma consulta externa. A intenção primária de uma saída externa é apresentar dados ao usuário através de lógica de processamento que não seja apenas recuperação de dados ou informação de controle. A lógica de processamento deve contar ao menos uma fórmula matemática ou cálculo, e/ou criar dados, e/ou manter um ou mais ALIs, e/ou alterar o comportamento do sistema.

  O diagrama simplificado anterior mostra o processo de gerar um relatório que sumariza todos os empregados da Aplicação de Recursos Humanos como um exemplo de Saída Externa.

- Uma consulta externa (CE) é um processo elementar que envia dados ou informações de controle para fora da fronteira da aplicação. A intenção primária de uma consulta externa é apresentar dados ao usuário através de recuperação de dados ou informação de controle. A lógica de processamento não contém fórmula matemática, nem cálculo, nem cria dados derivados. Nenhum ALI é mantido durante o processamento, nem o comportamento do sistema é alterado.

  O diagrama simplificado anterior mostra o processo de solicitar dados de empregado como um exemplo de Consulta Externa.

O Capítulo 7 da Parte 2 discute o uso das regras para medir funções de transação.

A Parte 3 contém orientações adicionais para medir funções de transação.

A Parte 4 contém exemplos que ilustram o uso das regras para medir funções de transação.

## Calcular o Tamanho Funcional

O tamanho funcional representa o tamanho do software obtido pela quantificação dos requisitos funcionais do usuário.

A funcionalidade específica da aplicação do usuário é avaliada em termos do que é entregue, não como é entregue. Apenas componentes solicitados e definidos pelo usuário são contados.

O tamanho funcional é obtido através da medição das funções de dados e de transação. Estas funções são detalhadas em tipo de funções descritas nos parágrafos seguintes.

Alguns indivíduos podem usar o valor do fator de ajuste (VAF), que considera 14 características gerais de sistema (CGSs). Para orientação no uso do VAF e das CGSs, consulte o Apêndice C.
