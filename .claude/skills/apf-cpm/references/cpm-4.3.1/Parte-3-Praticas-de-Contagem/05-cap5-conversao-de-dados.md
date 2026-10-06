# Parte 3 · Capítulo 5 — Atividade de Conversão de Dados

> Parte 3 — Práticas de Contagem · CPM v4.3.1

**Introdução**

Esta seção aborda a funcionalidade que será avaliada quando existem requisitos para migrar ou converter os dados em conjunto com um novo desenvolvimento ou projeto de melhoria ou para trocar uma aplicação para uma plataforma diferente. Parte 4 do CPM fornece outros exemplos de funções de dados e funções transacionais para conversão de dados.

**Conteúdo**

Este capítulo irá discutir o seguinte como ilustrações de diferentes cenários de conversão:

| Tópico | Página |
|---|---|
| Funcionalidade de Conversão | 5-2 |
| Cenário 1: Conversão de Dados em Projetos de Melhoria | 5-3 |
| Cenário 2: Conversão de Dados com AIEs Referenciados | 5-3 |
| Cenário 3: Atribuição de Valores Padrão | 5-3 |
| O Que Não É Funcionalidade de Conversão | 5-4 |
| Resumo | 5-4 |

## Funcionalidade de Conversão

Conversão de dados da aplicação é baseada na visão do usuário dos dados. Os usuários identificam os requisitos de dados com base em necessidades distintas, tais como Emprego, Contabilidade, Clientes ou Dados de Inventário. A visão do usuário destes dados abrange todos os atributos associados com o grupo de dados, tal como definido na aplicação. Este grupo de dados reconhecível pelo usuário e os dados associados atributos tornam-se a base para um grupo lógico de dados que cumpre uma exigência específica do usuário. Este é um arquivo lógico que exige que todos os seus atributos de dados devem ser mantidos como parte do todo (ligados e não independentes).

Atributos adicionais podem ser necessários por causa de exigências de negócios novas ou alteradas. Como parte da melhoria, pode ser necessário para converter e popular os atributos de dados adicionados como parte do projeto de melhoria. A visão do processo de conversão baseia-se na aplicação original, os arquivos lógicos que estão sendo convertidos e os requisitos de dados da nova aplicação.

O processo de conversão é executado contra todos os dados como visto pelo usuário para criar um arquivo lógico atualizado que cumpre os requisitos específicos do usuário para os novos / convertido dados da aplicação.

Aplicar as regras de identificação de PE padrão para identificar a funcionalidade de conversão. O processo elementar inclui todos os relatórios de exceção, os relatórios de erros, relatórios de conversão ou relatórios de controle necessários para garantir a integridade dos dados que estão sendo convertidos. Os ALIs da aplicação nova ou alterada, são populados com os dados convertidos e os requisitos de usuário determinam o que é exigido a partir da aplicação antiga para cumprir os requisitos funcionais do usuário do projeto.

### Cenário 1: Conversão de Dados em Projetos de Melhoria

O projeto envolve a integrar em uma aplicação corporativa a função Habilidade em RH que uma divisão da empresa já tinha implementado como uma aplicação stand-alone. Há um requisito para capturar uma única vez todos os dados existentes de habilidade e preencher os dados existentes atributos em um ALI em um aplicativo de RH existente. Os dados de habilidades existentes a serem importados serão contados como uma EE. Há um relatório de controle e um relatório de erro que são gerados para garantir a integridade da migração. Este processo será executado como parte da implantação da nova funcionalidade. Há um processo elementar para a carga inicial dos novos atributos de dados em um ALI do sistema de RH, incluindo os relatórios de controle e de erro. O processo de conversão será contado como uma EE, que será incluído no Tamanho Funcional do Projeto de Melhoria, mas não será adicionado ao Tamanho Funcional da Aplicação porque o processo é executado uma única vez.

### Cenário 2: Conversão de Dados com AIEs Referenciados

O usuário solicitou que um ALI (ou parte de um ALI) seja populado de um ALI de outra aplicação. Nesse exemplo, foi solicitado validar os dados com um outro ALI de uma terceira aplicação. Isso é especificado como um processo que será executado uma única vez e os dados referenciados na terceira aplicação não serão utilizados no futuro.

Os atributos a serem carregados servem como uma transação de entrada para popular o ALI que está recebendo e será contada como uma EE. Os dados referenciados na terceira aplicação para validação serão contados como um AIE e um ALR adicional. O ALI que está recebendo também será considerado como um ALR. Tanto a EE quanto o AIE devem ser incluídas na medição do projeto mas não devem ser adicionados ao tamanho funcional da aplicação.

### Cenário 3: Atribuição de Valores Padrão

Um projeto de melhoria solicita a inclusão de um DER em um ALI existente. O novo DER será populado com um valor padrão específico. Embora o ALI e qualquer transação modificada forem contadas como alteradas, não é contada uma funcionalidade de conversão. Nenhum dado atravessa a fronteira para estabelecer o valor padrão.

### O Que Não É Funcionalidade de Conversão

Esta seção descreve vários casos que não são considerados Conversões..

- Não conte atualizações de software devido à instalação de uma versão revista de pacotes de fornecedores como funcionalidade de conversão.
- Não conte a migração de uma aplicação para uma nova plataforma como uma funcionalidade de conversão.
- Não conte a conversão de dados realizada através de um utilitário de carga existente. Nenhuma funcionalidade foi desenvolvida para realizar a conversão.
- Mesmo que um AIE para a aplicação que está sendo medida é alterado, não pode haver qualquer funcionalidade de conversão. Apenas a aplicação que tem contada a função de dados como um ALI pode contar com a funcionalidade de conversão.

## Resumo

Quando um ALI é adicionado ou modificado, existe a possibilidade que um processo de conversão possa ser solicitado para popular o novo ALI ou DER(s) em um ALI existente. Parte da análise é identificar o que está atravessando a fronteira da aplicação. No caso de novos desenvolvimentos, o(s) depósito(s) de dado(s) existente(s) ou ALI(s) do(s) sistema(s) sendo substituídos é considerado como cruzando a fronteira da aplicação. Quando uma melhoria envolve alterações em ALI e uma lógica de processamento é solicitada para popular o novo atributo (ex.: validações, comparações lógicas, etc.), o ALI existente pode ser considerado como cruzando a fronteira da aplicação com uma EE. Se um novo atributo em um ALI é populado somente com um valor padrão ou nulo, a conversão não deve ser contata porque nada atravessa a fronteira da aplicação.
