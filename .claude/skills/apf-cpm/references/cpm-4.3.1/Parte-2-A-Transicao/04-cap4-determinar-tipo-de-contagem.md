# Parte 2 · Capítulo 4 — Determinar Tipo de Contagem

> Parte 2 — A Transição (Aplicando o Método FSM do IFPUG) · CPM v4.3.1

**Introdução**

Este capítulo inclui uma explicação detalhada dos tipos de contagem: projeto de desenvolvimento, projeto de melhoria, e aplicação.

**Conteúdo**

O Capítulo inclui as seguintes seções:

| Tópico | Página |
|---|---|
| **Definições: Tipos de Contagem de Pontos de Função** | 4-2 |
| Projeto de Desenvolvimento | 4-2 |
| Projeto de Melhoria | 4-2 |
| Aplicação | 4-3 |
| **Diagrama dos Tipos de Contagem** | 4-4 |
| Medidas Estimadas e Finais de Tamanho Funcional | 4-4 |

## Definições: Tipos de Contagem de Pontos de Função

O tamanho funcional pode ser medido tanto para projetos quanto aplicações. O tipo de contagem de ponto de função é determinado com base no propósito, conforme os itens a seguir:

- Contagem de pontos de função de projeto de desenvolvimento
- Contagem de pontos de função de projeto de melhoria
- Contagem de pontos de função de aplicação

O parágrafo seguinte define cada tipo de contagem de ponto de função.

**Nota:** Para aqueles indivíduos que aplicam um Fator de Ajuste (VAF), consulte no Apêndice C as fórmulas para calcular o VAF e a contagem de pontos de função ajustada.

### Projeto de Desenvolvimento

Um projeto de desenvolvimento é um projeto para desenvolver e fornecer a primeira versão de um software.

O tamanho funcional do projeto de desenvolvimento é uma medida de funcionalidade oferecida aos usuários com a primeira instalação do software, conforme medido pela contagem de pontos de função do projeto de desenvolvimento pela atividade de aplicação, o método de medição funcional (FSM) IFPUG.

### Projeto de Melhoria

Um projeto de melhoria é um projeto para desenvolver e entregar manutenção adaptativa. O tamanho funcional do projeto de melhoria é uma medida das funcionalidades adicionadas, alteradas e excluídas na conclusão de um projeto de melhoria, conforme medido pela contagem dos pontos de função do projeto de melhoria pela atividade de aplicação do método de Medição de Tamanho Funcional (FSM) do IFPUG.

Orientações adicionais estão incluídas na Parte 3.

### Aplicação

Uma aplicação é uma coleção coesa de procedimentos automatizados e dados apoiando um objetivo de negócio; isto consiste em um ou mais componentes, módulos, ou subsistemas.

Um tamanho funcional de uma aplicação é uma medida de funcionalidade que uma aplicação oferece ao usuário, determinado pela contagem de pontos de função da aplicação pela atividade de aplicação do método de Medição de Tamanho Funcional (FSM) do IFPUG.

Ela também e chamado de *baseline* ou tamanho funcional instalado. Este tamanho fornece uma medida de funções atuais que o aplicativo fornece ao usuário. O número é inicializado quando o projeto de desenvolvimento da contagem de ponto de função é finalizado. É atualizado toda vez que um projeto de melhoria finalizado alterar funções da aplicação.

## Diagrama dos Tipos de Contagem

O diagrama a seguir ilustra os tipos de contagem de pontos de função e seus relacionamentos. (O Projeto A é completado primeiro, seguido do Projeto B.)

![Diagrama dos Tipos de Contagem: a Contagem Estimada e a Contagem Final do Projeto de Desenvolvimento (Projeto A) e do Projeto de Melhoria (Projeto B); ao concluir cada projeto, a Contagem Final Inicializa e Atualiza a Contagem da Aplicação](images/p086-diagrama-tipos-contagem.png)

### Medidas Estimadas e Finais de Tamanho Funcional

É importante entender que as medidas de tamanho funcional são estimativas das funcionalidades entregues. Além disso, à medida que o escopo é esclarecido e as funções desenvolvidas, é bastante comum identificar funcionalidades adicionais que não foram especificadas nos requisitos originais. Este fenômeno é, algumas vezes, denominado como *scope creep*.

É essencial atualizar o tamanho funcional da aplicação na conclusão do projeto. Se a funcionalidade se alterar durante o desenvolvimento, o tamanho funcional ao final do ciclo de vida reflete precisamente toda funcionalidade entregue ao usuário.
