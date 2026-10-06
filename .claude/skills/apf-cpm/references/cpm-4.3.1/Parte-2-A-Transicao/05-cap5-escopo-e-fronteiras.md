# Parte 2 · Capítulo 5 — Determinar Escopo da Contagem e Fronteiras da Aplicação

> Parte 2 — A Transição (Aplicando o Método FSM do IFPUG) · CPM v4.3.1

**Introdução**

Este capítulo fornece uma orientação na aplicação de regras, procedimentos e dicas para determinar a fronteira das aplicações e para estabelecer o escopo da contagem.

**Conteúdo**

Este capítulo inclui as seguintes seções:

| Tópico | Página |
|---|---|
| **Escopo da Contagem e Fronteira** | 5-2 |
| Propósito de Contagem | 5-2 |
| Escopo da Contagem | 5-3 |
| Fronteira | 5-4 |
| **Determinar o Escopo da Contagem e Fronteira - Regras e Procedimentos** | 5-5 |
| Regras de Fronteira | 5-5 |
| Procedimentos do Escopo da Contagem e da Fronteira da Aplicação | 5-5 |
| **Dicas para Ajudar a Identificar o Escopo da Contagem e Fronteira** | 5-6 |

## Escopo da Contagem e Fronteira

Esta seção define o escopo da contagem e a fronteira da(s) aplicação(ões) e explica como são influenciados pelo propósito da contagem.

### Propósito da Contagem

Uma medição de tamanho funcional é feita para fornecer uma resposta a um problema do negócio, e é o problema do negócio que determina o propósito.

O propósito:

- Determina o tipo de contagem de ponto de função e o escopo da contagem necessária para obter a resposta ao problema de negócios sob investigação
- Influencia o posicionamento da fronteira entre o software sob análise e o software vizinho; por exemplo, se o Módulo de Pessoal do Sistema de Recursos Humanos está para ser substituído por um pacote, o usuário deve decidir reposicionar a fronteira e considerar o Módulo de Pessoal como uma aplicação separada

Exemplos de propósito são:

- Fornecer o tamanho funcional de um projeto como uma entrada para o processo de estimativa a fim de determinar o esforço para desenvolver a primeira versão de uma aplicação
- Fornecer o tamanho funcional da base instalada das aplicações para determinar os custos de sustentação por ponto de função
- Fornecer o tamanho funcional de dois pacotes para permitir a comparação de funcionalidade oferecida por cada um

### Escopo da Contagem

O escopo da contagem define o conjunto de Requisitos Funcionais de Usuários para ser incluído na contagem de pontos de função. O escopo:

- Define o (sub)conjunto do software que está sendo medido
- É determinado pelo propósito para a realização da contagem de pontos de função
- Identifica quais funções serão incluídas na medida de tamanho funcional assim como fornecer respostas relevantes para o propósito da contagem
- Pode incluir mais de uma aplicação

O escopo de:

- Uma contagem de pontos de função de projeto de desenvolvimento inclui todas as funções impactadas (construídas ou customizadas) pelas atividades do projeto. Inclui ainda funções de conversão desenvolvidas como parte do projeto de desenvolvimento.
- Uma contagem de pontos de função de projeto de melhoria inclui todas as funções que estão sendo incluídas, alteradas e excluídas. Inclui ainda conversão de funções desenvolvidas como parte do projeto de melhoria. A fronteira da(s) aplicação(ões) impactadas permanecem as mesmas. A funcionalidade da(s) aplicação(ões) refletem o impacto das funções sendo adicionadas, modificadas ou excluídas.
- Uma contagem de pontos de função da aplicação pode incluir, dependendo do propósito (p.ex., fornecer um pacote como uma solução do software):
  - apenas as funções sendo usadas pelo usuário
  - todas as funções disponibilizadas

O escopo das duas contagens acima é diferente resultando em um tamanho funcional diferente medido para mesma aplicação. Entretanto, o posicionamento da fronteira das aplicações permanece a mesmo e não é influenciado pela decisão de modificar o escopo. O posicionamento da fronteira é independente do escopo.

### Fronteira

A fronteira é uma interface conceitual entre o software sob estudo e seus usuários.

A fronteira (também chamada de fronteira da aplicação):

- Define o que é externo à aplicação
- Indica a fronteira entre o software que está sendo medido e o usuário
- Atua como uma 'membrana' através da qual os dados processados pelas transações (EEs, SEs e CEs) passam para dentro e para fora da aplicação
- Envolve os dados lógicos mantidos pela aplicação (ALIs)
- Auxilia na identificação dos dados lógicos referenciados mas não mantidos pela aplicação (AIEs)
- Depende da visão externa do negócio do usuário da aplicação. É independente de considerações de técnicas e/ou implementação

O posicionamento da fronteira entre o software sob análise e outra aplicação do software pode ser subjetivo. É comum haver dificuldade para delinear onde uma aplicação termina e a outra se inicia. Tente colocar a fronteira de uma perspectiva de negócio ao invés de se basear em uma consideração técnica ou física. É importante que a fronteira seja colocada com cuidado, de forma que todos os cruzamentos de dados da fronteira possam ser potencialmente incluídos no escopo da contagem

Por exemplo, o diagrama a seguir mostra fronteiras entre a aplicação de Recursos Humanos e as aplicações externas, Sistema Monetário e Ativo Fixo. O exemplo mostra ainda a fronteira entre o usuário humano (Usuário 1) e a aplicação de Recursos Humanos.

![Diagrama de fronteiras: a Aplicação de Recursos Humanos e o Usuário 1 dentro de uma fronteira própria, com as aplicações externas Sistema Monetário e Ativo Fixo em fronteiras separadas, ligadas por fluxos de dados](images/p090-fronteira-recursos-humanos.png)

## Determine o Escopo da Contagem e Fronteira - Regras e Procedimentos

Esta seção define as regras e procedimentos que se aplicam quando se determina o escopo da contagem e da fronteira da(s) aplicação(ões).

O posicionamento da fronteira é importante porque impacta o resultado da medição de tamanho funcional. A fronteira auxilia na identificação de dados entrando na aplicação e que serão incluídos no escopo da contagem.

### Regras da Fronteira

As seguintes regras devem ser aplicadas para fronteiras:

- A fronteira é determinada com base na visão do usuário. O foco está no que o usuário pode entender e descrever.
- A fronteira entre aplicações relacionadas está baseada nas áreas funcionais separadas como pode ser visto pelo usuário, não em considerações técnicas.
- A fronteira inicial já estabelecida para a aplicação ou aplicações que estejam sendo modificadas não é influenciada pelo escopo da contagem.

**Nota:** Pode haver mais de uma aplicação incluída no escopo da contagem. Nesse caso, múltiplas fronteiras da aplicação deverão ser identificadas.

Quando a fronteira não está bem definida (como no início da análise), ela deverá ser posicionada da forma mais exata possível.

### Procedimentos do Escopo da Contagem e da Fronteira da Aplicação

Quando for executar uma medição de tamanho funcional, os passos abaixo devem ser seguidos:

| Passo | Ação |
|:---:|---|
| 1 | Estabelecer o propósito da contagem |
| 2 | Identificar o escopo da contagem |
| 3 | Identificar a fronteira da aplicação |
| 4 | Documentar os seguintes itens:<br>• O propósito da contagem<br>• O escopo da contagem<br>• A fronteira da aplicação<br>• Quaisquer suposições relacionadas aos itens acima |

## Dicas para Ajudar na Identificação do Escopo da Contagem e da Fronteira

**Escopo da Contagem**

As seguintes dicas podem ajudar a identificar o escopo da contagem:

- Revisar o propósito da contagem de pontos de função, para ajudar a determinar o escopo da contagem.
- Na identificação do escopo da contagem de pontos de função da base instalada (p. ex., a funcionalidade suportada pelo grupo de manutenção), incluir todas as funções atualmente em produção e utilizadas pelos usuários.

**Fronteira**

As seguintes dicas podem ajudar a identificar a fronteira da aplicação(ões):

- Utilize as especificações externas do sistema ou obtenha um fluxo do mesmo e desenhe a respectiva fronteira, destacando as partes internas e as externas à aplicação.
- Verifique como os grupos de dados estão sendo mantidos.
- Identifique as áreas funcionais, alocando certos tipos de objetos da análise (tais como entidades ou processos elementares) a uma área funcional.
- Observe dados de medição correlatos, tais como esforço, custo e defeitos. As fronteiras consideradas para os pontos de função e para os outros dados de medição devem ser as mesmas
- Entrevistar os especialistas no assunto para auxiliar na identificação da fronteira.
