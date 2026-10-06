# Parte 3 · Capítulo 1 — Dados de Código

> Parte 3 — Práticas de Contagem · CPM v4.3.1

**Introdução**

Este capítulo usa o conceito de requisitos funcionais e não-funcionais de usuário (descritos na Parte 1 e em “A Framework for Functional Sizing” [IFPUG, 2003]) para identificar dados de código e determinar como devem ser considerados.

Este capítulo aborda especificamente um número de exemplos relevantes para dados de código. É reconhecido que pode haver outros exemplos de dados de código e esses podem ser abordados em futuras versões do CPM.

**Conteúdo**

Este capítulo inclui as seguintes seções:

| Tópico | Veja Página |
|---|---|
| Tipos de Entidades de Dado | 1-4 |
| Metodologia | 1-9 |
| Identificando Dados de Código | 1-10 |
| Considerando Dados de Código e Transações de Dados de Código | 1-14 |
| Bibliografia | 1-15 |

## Tipos de Entidades de Dado

Uma revisão dos dados da aplicação e de seu propósito fornece um entendimento das várias categorias de entidade de dado. Em geral, os analistas devem distinguir entre três categorias de entidades de dado:

- Dados de Negócio
- Dados de Referência
- Dados de Código

As primeiras duas categorias de entidades usualmente são identificadas para satisfazer os Requisitos Funcionais do Usuário e dessa forma serão investigadas para contagem como arquivos lógicos (veja Parte 3, Capítulo 2).

A terceira categoria de dados, referenciada a seguir neste capítulo como “Dados de Códigos”, contudo, geralmente existe para satisfazer requisitos não-funcionais do usuário (para requisitos de qualidade, implementação física e/ou uma razão técnica) ao invés de um requisito funcional do usuário. As diferentes categorias de dados são delineadas abaixo para apoiar na identificação.

### Dados de Negócio

Dados de Negócio também podem ser chamados Dados Essenciais do Usuário (“Core User Data”) ou Objetos de Negócio. Este tipo de dado reflete a informação necessária a ser armazenada e recuperada pela área funcional abordada pela aplicação. Dados de Negócio geralmente representam um percentual significativo das entidades identificadas. Possuem a maioria das seguintes características:

**Lógicas**

Características lógicas incluem:

- Obrigatória para a operação da área funcional do usuário
- Identificável pelo usuário (geralmente por um usuário do negócio)
- Capaz de ser mantida pelo usuário (geralmente um usuário do negócio)
- Armazena os Dados Principais do Usuário para apoiar transações de negócio
- Muito dinâmica – as operações normais de negócio fazem com que sejam regularmente referenciados e rotineiramente incluídos, alterados ou excluídos
- Capaz de ser reportada

**Físicas**

Características físicas incluem:

- Possui campos-chave e geralmente vários atributos
- Pode ter de zero a uma infinidade de registros

**Exemplos**

Exemplos de Dados de Negócio incluem:

- Arquivo de Cliente, Arquivo de Fatura, Arquivo de Empregado, Arquivo de Função
- O Arquivo de Função, no Sistema de Gerência de Funções, incluiria itens como:
  - Número da Função,
  - Nome da Função,
  - Nome da Divisão,
  - Data de Ativação da Função, etc.

### Dados de Referência

Este tipo de dado é armazenado para apoiar as regras de negócio na manutenção de dados de negócio; por exemplo, em uma aplicação de folha de pagamento ele seria o dado armazenado sobre as alíquotas de impostos do governo para cada faixa salarial e a data em que a mesma iniciou a sua vigência. Os Dados de Referência geralmente representam um pequeno percentual das entidades identificadas. Possuem a maioria das seguintes características:

**Lógicas**

Características lógicas incluem:

- Obrigatório para a operação da área funcional do usuário
- Identificável pelo usuário (geralmente um usuário de negócio)
- Geralmente capaz de ser mantido pelo usuário (Geralmente por um usuário administrativo)
- Geralmente estabelecido quando a aplicação é instalada pela primeira vez e mantido intermitentemente
- Armazena os dados para apoiar as principais atividades do usuário
- Menos dinâmico – ocasionalmente muda em resposta às mudanças no ambiente da área funcional, processos funcionais externos e/ou regras de negócio
- Transações processando Dados de Negócio costumam precisar de acesso a Dados de Referência

**Fisicas**

Características físicas incluem:

- Possui campos-chave e poucos atributos
- Geralmente pelo menos um registro ou um número limitado de registros

**Exemplos**

Exemplos de Dados de Referência incluem:

- Faixas Salariais, Taxas de Desconto, Alíquotas de Impostos, Configuração de Limites
- Arquivo de Faixas Salariais – armazena informação sobre os valores pagos para cada tipo de função e a habilidade exigida para executar aquele tipo de função
  - Tipo de Função
  - Situação, Valor Cobrado, Inicio de Vigência (1:n)
  - Descrição das Habilidades da Função (1:n)

### Dados de Código

O usuário nem sempre especifica diretamente os Dados de Código, às vezes chamados Dados de Lista ou Dados de Tradução. Em outros casos são identificados pelo desenvolvedor em resposta a um ou mais requisitos não-funcionais do usuário. Os Dados de Código fornecem uma lista de valores válidos que um atributo descritivo pode ter. Normalmente os atributos de Dados de Código são Código, Descrição e/ou outros atributos ‘padrão’ descrevendo o código; por exemplo, abreviação padrão, data de início de vigência, data de expiração, dados de trilha de auditoria, etc.

Ao utilizar códigos em Dados de Negócio, é necessário ter meios de tradução para converter de código para algo mais reconhecível pelo usuário. De modo a satisfazer os requisitos não-funcionais do usuário, os desenvolvedores quase sempre criam uma ou mais tabelas contendo Dados de Código. Logicamente, o código e a sua descrição correspondente têm o mesmo significado. Sem uma descrição, o código nem sempre pode ser claramente entendido.

A diferença chave entre Dados de Código e Dados de Referência é:

- Com os Dados de Código, você pode substituir um pelo outro sem mudar o significado dos Dados de Negócio; por exemplo, Código do Aeroporto versus Nome do Aeroporto, Id da Cor versus Descrição da Cor.
- Com Dados de Referência, você não pode substituir (por exemplo, Código do Imposto pela Alíquota do Imposto).

Os Dados de Código possuem a maioria das seguintes características:

**Lógicas**

Características lógicas incluem:

- O dado é obrigatório para a área funcional, mas é opcionalmente armazenado como um arquivo de dados
- Não é geralmente identificado como parte dos requisites funcionais do usuário; é geralmente identificado como parte da solução para atender requisitos não-funcionais do usuário
- É algumas vezes mantido pelo usuário (geralmente por uma pessoa de suporte ao usuário)
- Armazena dados para padronizar e facilitar atividades e transações de negócio
- É essencialmente estático – apenas muda em resposta a mudanças na forma como o negócio funciona
- As transações de negócio referenciam os Dados de Código para melhorar a facilidade da entrada de dados, melhorar a consistência dos dados, garantir a integridade dos dados, etc.
- Se reconhecido pelo usuário:
  - Algumas vezes é considerado como um grupo do mesmo tipo de dados
  - Pode ser mantido usando a mesma lógica de processamento

**Físicas**

Características físicas incluem:

- Consiste de campo-chave e geralmente apenas um ou dois atributos
- Normalmente possui um número estável de registros
- Pode representar 50% de todas as entidades em 3ª Forma Normal
- É às vezes desnormalizado e colocado em uma tabela física com outros Dados de Código
- Pode ser implementado sob diferentes formas (por exemplo, via aplicação distinta, dicionário de dados ou hard-coded dentro do software)

**Exemplos**

Exemplos de Dados de Código incluem:

- Estado
  - Código do Estado
  - Nome do Estado
- Tipo de Pagamento
  - Código do Tipo de Pagamento
  - Descrição do Pagamento

### Origem dos Dados de Código

Historicamente, a motivação para os dados de código foi economizar espaço por meio do armazenamento de um código ao invés de uma longa descrição textual. Para facilidade de manutenção, esses códigos e descrições eram colocados em arquivos ou tabelas a fim de eliminar mudanças no software quando atualizações fossem necessárias.

Os Dados de Código são uma propriedade de um atributo descritivo chamado “Meta Dado”. Exemplos são valores válidos, descrições de códigos ou tabelas de tradução. Alguns Dados de Código são desenvolvidos para atender requisitos específicos do usuário e contém dados que estão dentro do domínio do usuário. Outros Dados de Código podem ser derivados a partir dos requisitos do usuário para restringir os valores permitidos. Os Dados de Código podem também ser criados em uma tentativa de reduzir requisitos de espaço em disco. Os requisitos podem também incluir a habilidade de manter Dados de Código. Todos esses são requisitos não-funcionais do usuário.

Os Dados de Código são uma implementação de requisitos não-funcionais do usuário. Como conseqüência, os Dados de Código podem influenciar o tamanho não-funcional do produto de software, mas *não* o tamanho *funcional* do mesmo [“A Framework for Functional Sizing”, IFPUG 2003”].

## Metodologia

O impacto dos dados de código pertencerem à dimensão não-funcional é que nem os Dados de Código, nem as transações que os mantém devem ser contados.

### Introdução

A seção “Identificando Dados de Código” abaixo fornece um processo passo-a-passo para a identificação do que é e do que não é dado de código. A seção é geralmente referenciada no passo “Identificando Arquivos Lógicos”, como definido na parte 3 – capítulo 2, onde os dados de código são desconsiderados. Conforme previamente declarado, os dados de código não são considerados parte do tamanho funcional. Isso tem várias consequências. Para sermos perfeitamente claros neste Guia de Implementação, resumimos as consequências abaixo.

### Consequências

| Nº | Consequência |
|---|---|
| 1 | **Não conte Dados de Código como um Arquivo Lógico**<br>Uma consequência de desconsiderar os Dados de Código é que os mesmos não podem ser considerados ALI ou AIE. |
| 2 | **Não conte Dados de Código como um DER ou RLR**<br>Uma consequência de desconsiderar os Dados de Código é que os mesmos não podem ser considerados um RLR ou DER em um ALI ou AIE. |
| 3 | **Não conte Dados de Código como um ALR**<br>Uma consequência de desconsiderar os Dados de Código é que os mesmos não podem ser considerados ALR ao avaliar a complexidade de uma função transacional (EE, SE, CE), porque não se trata de um arquivo lógico. |
| 4 | **Não conte Funções Transacionais de Dados de Código**<br>Uma consequência dos Dados de Código serem uma parte de outra dimensão (a dimensão não-funcional em contraste à dimensão funcional) é que a manutenção de Dados de Código ou funções de relatório não são consideradas ao se medir o tamanho funcional da aplicação. |

## Identificando Dados de Código

Os tipos de Dados de Código resumidos em “O Que São Dados de Código” e “O Que Não São Dados de Código” podem ser usados como uma ajuda prática para determinar se uma entidade é ou não Dados de Código. Alguns critérios podem se sobrepor em parte. Assim que o critério de uma das subseções tiver sido satisfeito, a entidade deverá ser considerada como Dados de Código e não contada.

Os exemplos fornecidos não são uma lista exaustiva e podem não cobrir todos os casos possíveis. Na dúvida, avalie os tipos de entidade dentro do contexto de “Tipos de Entidades de Dado”.

### O Que São Dados de Código

**Introdução**

Esses são vários tipos diferentes de Dados de Código, os quais se enquadram em três áreas gerais:

- Dados de Substituição fornecem um código e um nome explicativo ou descrição para um atributo de um objeto de negócio (Substituição é uma condição suficiente mas não necessária para ser considerado Dados de Código).
- Dados Constantes ou Estáticos que raramente mudam.
- Dados com Valores Válidos fornecem uma lista de valores disponíveis para um atributo de um ou mais tipos de objetos de negócio.

**Tipos de Dados de Código**

| Substituição | Estáticos ou Constantes | Valores Válidos |
|---|---|---|
| Código + Descrição | Uma Ocorrência | Valores Válidos |
|  | Dados Estáticos | Faixa de Valores Válidos |
|  | Valores Default |  |

Quaisquer desses tipos de Dados de Código podem também incluir outros atributos, como data de início e fim de vigência para definir o período de tempo no qual o valor está disponível. Também podem incluir atributos de tipo auditoria tais como data de criação, criado por (id do usuário), data da última atualização, última atualização por (id do usuário). Ainda, uma diversidade de variações é possível (por exemplo, código + descrição resumida / completa). A presença desses atributos adicionais não afeta o processo de categorização, mas os atributos são considerados parte dos Dados de Código.

### Substituição

**Código + Descrição**

Este tipo de Dado de Código contém um código e um nome explicativo ou descrição. Este tipo de Dado de Código pode servir como um meio para tornar mais ágil a entrada de dados para usuários experientes, o nome / descrição explicativo para usuários menos experientes ou para listagens como em relatórios. Este tipo de Dado de Código também pode ser implementado para economizar espaço de armazenamento ou ser um resultado de normalização. Se for dado de substituição, é Dado de Código e não é contado.

**Exemplos**

- Estados: Código do Estado, Nome do Estado
- Cores: Código da Cor, Descrição da Cor

**Variações**

- Código, Idioma, Descrição (Para descrições em múltiplos idiomas)
- Código, Descrição Resumida, Descrição Completa, Abreviatura

### Estáticos ou Constantes

**Uma Ocorrência**

Este tipo de Dado de Código contém uma e apenas uma ocorrência independentemente da quantidade de atributos. Os Dados de Código tem apenas um registro de dados e os atributos são relativamente constantes; podem mudar, mas muito raramente.

**Exemplos**

- Uma entidade com dados sobre uma organização em particular; por exemplo, nome e endereço.
- Software COTS com o nome da companhia aérea, customizado pela organização usuária

**Dados Estáticos**

Este tipo de Dado de Código contém dados que são basicamente estáticos. A quantidade de instâncias de dados estáticos pode mudar, mas muito raramente, e o conteúdo de uma instância raramente muda.

**Exemplos**

- Uma entidade elementos químicos: símbolo, número atômico, descrição
- As tabelas de pontos de função para valorar os tipos de função e os níveis de complexidade

**Valores Default (template)**

Este tipo de Dado de Código contém valores default para (alguns atributos em) novas instâncias de um objeto de negócio.

### Valores Válidos

**Valores Válidos**

Este tipo de Dado de Código fornece uma lista de valores válidos para um atributo de um ou mais tipos de objetos de negócio. Este tipo de Dado de Código é implementado para satisfazer requisites como reduzir erros e aumentar a facilidade de uso pelo usuário. Este tipo de Dado de Código é normalmente usado para listar valores disponíveis para seleção pelo usuário e/ou validar a entrada fornecida pelo mesmo. Este tipo de Dado de Código contém dados basicamente estáticos; se não forem, podem ser Dados de Referência ou Dados de Negócio.

**Exemplos**

- Nome do estado: Contém todos os valores válidos para o atributo nome do estado
- Código do estado: Contém todos os valores válidos para o atributo código do estado
- Cor: Contém todos os valores válidos para o atributo cor de um objeto de negócio

**Faixa de Valores Válidos**

Este tipo de Dado de Código contém dados basicamente estáticos; se não forem podem ser Dados de Referência.

**Exemplos**

- Faixa de Números de Telefone Permissíveis: menor número de telefone, maior número de telefone.
- Faixa de temperatura térmica.

### O Que Não São Dados de Código

Esta seção descreve dados que não são considerados Dados de Código porque são Dados de Negócio ou Dados de Referência. A Parte 1 e a Parte 2 do CPM – Capítulo 2 (Arquivos Lógicos) contém as regras para esses tipos de entidades. Algumas vezes tabelas são chamadas ‘tabelas de código’ mas são na realidade Dados de Referência ou mesmo Dados de Negócio.

**Exemplos**

Exemplos de Dados de Negócio ou Dados de Referência que não devem ser considerados Dados de Código:

- Tipos de entidade com montantes financeiros, taxas de câmbio, e alíquotas de impostos, se não forem constantes. Esses dados não restringem valores válidos; ao invés disso, adicionam significado para um valor dentro de uma faixa em particular.
- Dados de controle: dados mantidos pelo usuário que contém regras de negócio dizendo à aplicação o que fazer ou como se comportar.
- Tabela de Taxa de Câmbio: Taxa de Câmbio contém a taxa de câmbio da moeda corrente do país na conversão para dólar. Não é possível substituir o código pela taxa de câmbio do país, o dado é essencialmente não estático, e os dados apoiam as atividades de negócio; portanto, isto é um exemplo de Dados de Referência.
- Faixa de percentual de tributação para um Sistema de Percentuais Progressivos: um percentual de tributação diferente é aplicável para diferentes faixas de receita. Contém um valor mínimo e máximo para cada percentual de tributação. Entretanto, não se pode substituir o valor pela entidade, e os dados apoiam atividades do negócio. O percentual de tributação não restringe a receita. Portanto, este é um exemplo de Dados de Referência.

## Considerando Dados de Código e Transações de Dados de Código

Os Dados de Código como identificados em “O Que São Dados de Código” representam a implementação de requisitos não-funcionais do usuário ao invés da implementação de Requisitos Funcionais do Usuário. Consequentemente, os Dados de Código e as transações que os mantém não contam para o tamanho funcional da aplicação.

Contudo, os dados que são parte de requisitos não-funcionais podem ser medidos usando uma medida distinta para dimensionar o tamanho não-funcional.

Neste momento não existe um método específico para contar Dados de Código, bem como suas funções de manutenção e relatório, a fim de produzir um tamanho para a dimensão não-funcional.

.

## Bibliografia

As seguintes fontes foram consultadas ou citadas neste capítulo:

*Definitions and Counting Guidelines for the Application of Function Point Analysis: A Practical Manual, Version 2.2.* (NESMA, 2003).

ISBN: 90-76258-17-1.

Nota: Esse manual é também chamado Manual de Práticas de Contagem da NESMA. Descreve a metodologia padrão de APF e muitos aspectos relacionados à aplicação da mesma. Pode ser usado em conjunto com o manual do IFPUG. Para mais informações, visite o web site da NESMA www.nesma.org.

*IFPUG “A Framework for Functional Sizing”*, IFPUG, 2003.

*ISO/IEC 14143-1:2007 Information technology – Software measurement Functional size measurement – Part 1: definition of concepts*, ISO/IEC, 2007
