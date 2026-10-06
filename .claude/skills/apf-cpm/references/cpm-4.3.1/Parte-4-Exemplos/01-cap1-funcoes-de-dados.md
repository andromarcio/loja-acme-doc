# Parte 4 · Capítulo 1 — Exemplos de Contagem de Funções de Dados

> Parte 4 — Exemplos · CPM v4.3.1

**Introdução**

Esta seção utiliza vários exemplos a fim de ilustrar procedimentos para a medição de funções de dados, cada um independentemente, válido por si só.

**Nota:** Cada exemplo mostra somente o requisito específico para a situação ilustrada, embora na prática devêssemos avaliar todos os requisitos e seu impacto funcional.

Esta seção utiliza uma aplicação de Recursos Humanos (RH) com uma aplicação de Segurança e outra aplicação de Distribuição de Correspondência para ilustrar procedimentos para identificar e medir funções de dados. Além desta seção, os exemplos estão nos Estudos de Caso, que são parte da documentação suplementar do IFPUG.

**Nota:** Os exemplos desta seção e no decorrer deste manual têm dois propósitos:

1. Ilustrar como as regras de contagem de pontos de função são aplicadas para um conjunto específico de requisitos do usuário.
2. Permitir a você praticar utilizando os procedimentos de contagem.

Cada contador deve:

- Analisar os requisitos específicos do usuário que são aplicados em cada projeto ou aplicação sendo medida, e
- Contar baseado naqueles requisitos.

**Conteúdo**

Esta seção explica a organização dos exemplos e inclui exemplos detalhados para contagem de ALIs e AIEs.

| Tópico | Página |
|---|---|
| Exemplos de Contagem de Funções de Dados | 1-3 |
| Exemplos de Contagem de ALI | 1-7 |
| Exemplos de Contagem de AIE | 1-39 |

## Organização dos Exemplos de Contagem

Esta seção explica como os exemplos são apresentados.

### Sumário da Organização

A seguinte lista sumariza a sequência da informação em exemplos detalhados. Para cada exemplo:

1. As funções de dados são identificadas.
2. As funções de dados são classificadas como ALIs ou AIEs.
3. Os RLRs e DERs que contribuem para a complexidade funcional são identificados e contados.

### Diagrama da Organização

O seguinte diagrama ilustra a organização dos exemplos.

![Diagrama da organização dos exemplos: um Exemplo (Identifique ALIs, Conte RLRs/DERs) seguido de outro Exemplo (Identifique AIEs, Conte RLRs/DERs)](images/p263-diagrama-organizacao.png)

### Conte para Cada Exemplo

Cada exemplo inclui os seguintes componentes:

1. Base para a medição
2. Tabela aplicando as regras de contagem

### Diagrama dos Componentes

O diagrama abaixo ilustra os componentes para cada exemplo e o fluxo de informação.

![Diagrama dos componentes de cada exemplo e o fluxo de informação: a Base para a Medição (requisitos do usuário, modelo de dados e de processo, janelas/telas/relatórios) alimenta a Tabela de Regras de Contagem para identificar ALI ou AIE e, para cada ALI ou AIE identificado, contar RLRs e DERs](images/p264-diagrama-componentes.png)

**Base para a Medição**

A base para a medição inicia cada exemplo. Como mostrado no diagrama de componentes, a medição pode ser baseada nos seguintes componentes:

- Requisitos do usuário
- Modelo de dados e de processo
- Janelas, telas ou relatórios.

**Nota:** Nem todos os componentes no diagrama estão incluídos em todos os exemplos. Em alguns exemplos, apenas os requisitos são base para a medição. Outros exemplos incluem um modelo de dados ou processo, janelas, telas, e relatórios.

**Tabela de Regras de Contagem**

A análise para identificar funções é apresentada em uma tabela que lista as regras de contagem para o tipo de função. As regras são aplicadas aos componentes que formam a base para a medição. A análise é explicada na tabela na coluna "A Regra se Aplica?"

**Nota:** Se todas as regras se aplicam, o exemplo é contado como um ALI ou AIE.

A próxima tabela mostra as regras e a explicação para a complexidade para cada tipo de função identificado.

## Exemplos de Contagem de ALI

**Introdução**

Esta seção usa a aplicação de Recursos Humanos (RH) para ilustrar os procedimentos para identificar e medir funções de dados. Além desta seção, outros exemplos estão nos Estudos de Caso que são parte da documentação complementar do IFPUG.

**Conteúdo**

Esta seção inclui os seguintes exemplos:

| Tópico | Página |
|---|---|
| Resumo das Descrições dos Exemplos de Contagem de ALIs | 1-8 |
| Exemplo: Dados de Auditoria para Consultas e Relatórios | 1-9 |
| Exemplo: Definição de Relatório | 1-15 |
| Exemplo: Índice Alternativo | 1-20 |
| Exemplo: Dados Compartilhados por Aplicações | 1-21 |
| Exemplo: Diferentes Usuários/Diferentes Visões dos Dados | 1-30 |

### Resumo das Descrições dos Exemplos de Contagem de ALIs

Os exemplos para ALIs são descritos na seguinte tabela:

| Exemplo | Descrição Resumida | Página |
|---|---|---|
| Dados de Auditoria | Este exemplo mostra a análise e medição de dados que são mantidos para fins de auditoria. | 1-9 |
| Definição de Relatório | Este exemplo mostra a contagem de definições de relatórios definidos pelo usuário, mantidas dentro de uma aplicação. | 1-15 |
| Índice Alternativo | Este exemplo ilustra a análise dos requisitos do usuário para o exemplo de definição de relatório com foco nos requisitos para implementação física. | 1-20 |
| Dados Compartilhados por Aplicações | Este exemplo mostra a contagem de dados que são mantidos por mais de uma aplicação. | 1-21 |
| Diferentes Usuários/Diferentes Visões dos Dados | Este exemplo mostra que duas aplicações podem contar o mesmo arquivo com diferentes DERs. | 1-30 |

### Exemplo: Dados de Auditoria para Consultas e Relatórios

**Requisitos do Usuário**

Uma análise dos seguintes requisitos de segurança do usuário mostra uma necessidade para dados de auditoria:

1. Permitir ou recusar o acesso do usuário para cada tela da aplicação.
2. Alterar o acesso do usuário para cada tela.
3. Informar qualquer inclusão ou alteração de segurança de tela, utilizando os seguintes dados:
   - Identificação do usuário que está incluindo ou alterando a informação de segurança
   - O usuário da tela em que a segurança foi incluída ou alterada
   - O usuário e a imagem antes e depois de uma alteração feita na segurança da tela
   - A data e a hora que ocorreu a inclusão ou a alteração.
4. Capturar dados de auditoria para monitorar e informar diariamente atividades da segurança. Este requisito foi determinado quando um projeto foi implementado para satisfazer os requisitos do usuário de segurança de telas.

**MER**

![MER do exemplo Dados de Auditoria: dentro da Aplicação RH, a entidade tipo Segurança de Tela e a entidade atributiva Auditoria de Segurança em um relacionamento opcional um-para-muitos. Legenda: Entidade Tipo (retângulo), Entidade Atributiva (retângulo com triângulo), Relacionamento Opcional Um-Para-Muitos](images/p268-mer-seguranca-tela.png)

**Diagrama de Fluxo de Dados**

![Diagrama de Fluxo de Dados do exemplo Dados de Auditoria: o Usuário aciona os processos Incluir Segurança de Tela (1.1) e Alterar Segurança de Tela (1.2), que gravam no depósito Segurança de Tela; a Auditoria de Segurança de Tela registra data, hora, id.usuário, antes e depois na Relação das Alterações da Segurança (1.3), que retorna Informações do Relatório ao Usuário. Legenda: Usuário ou Aplicação, Depósito de Dados, Processo, Fluxo de Dados](images/p269-dfd-seguranca-tela.png)

**Passo 1 — Identificar as Funções de Dados**

Use as regras de Identificação de Funções de Dados para determinar se Auditoria de Segurança de Tela é uma função de dados. A tabela a seguir mostra a análise dos dados para Auditoria de Segurança de Tela

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Segurança de Tela e Auditoria de Segurança de Tela. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Segurança de Tela e Auditoria de Segurança de Tela são relacionadas. Auditoria de Segurança de Tela é dependente de Segurança de Tela. Elas são agrupadas numa única função de dados. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

A Auditoria de Segurança de Tela não é contada como uma função de dados porque ela é dependente de Segurança de Tela. Auditoria de Segurança de Tela é parte da função de dados Segurança de Tela.

**Passo 2 — Classificar as Funções de Dados**

A tabela a seguir mostra a análise para determinar se a informação de Segurança de Tela é classificada como um ALI.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A função de dados Segurança de Tela é mantida dentro da aplicação. |
| 2. Classificar como um AIE, se: | Classificada como um ALI; consequentemente, nenhum AIE é identificado. |
| - É referenciado, mas não mantido, pela aplicação sendo medida e |  |
| - É identificado em um ALI em uma ou mais outras aplicações |  |

Baseado na análise, a informação de Segurança de Tela é classificada como um ALI.

**Passo 3 — Contar os DERs**

**Para os DERs**, observe cada atributo associado com o ALI Segurança de Tela e determine se as regras de contagem de DER se aplicam.

O ALI Segurança de Tela inclui:

- Id.usuário
- SS#
- Id.Janela
- Permissão de Acesso
- Data da Alteração
- Hora da Alteração
- Imagem antes
  - Id.usuário antes
  - Id.janela antes
  - Permissão de acesso antes
- Imagem depois
  - Id.usuário depois
  - Id.janela depois
  - Permissão de acesso depois

A análise dos DERs para o ALI Segurança de Tela é mostrada abaixo:

| Regras de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Id usuário, SS#, Id janela, Permissão de acesso, Data da Alteração e Hora da Alteração. |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Não existem atributos deste tipo. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Id usuário antes, Id janela antes e Permissão de acesso antes são agrupados e contados como Imagem Antes. O mesmo também é feito para os atributos Imagem Depois. |

**Passo 4 — Contar os RLRs**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o ALI Segurança de Tela. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER: |  |
| - Entidade associativa com atributos não-chave | Não existem entidades deste tipo. |
| - Subtipo (subtipo diferente do primeiro subtipo) e | Não existem entidades deste tipo. |
| - Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Auditoria de Segurança de Tela é uma entidade atributiva num relacionamento 1-M opcional. Conte um RLR adicional para Auditoria de Segurança de Tela. |

**O total de RLR e DER** para Segurança de Tela é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| - Segurança de Tela<br>- Auditoria de Segurança de Tela | - Id usuário<br>- Nr. SS<br>- Id tela<br>- Permissão de Acesso<br>- Data da Alteração<br>- Hora da Alteração<br>- Imagem Antes<br>- Imagem Depois |
| **Total: 2 RLRs** | **Total: 8 DERs** |

**Passo 5 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 2 RLRs e 8 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 ALI Baixo | 7 PF |

### Exemplo: Definição de Relatório

**Requisitos do Usuário**

O usuário requer a habilidade de executar as seguintes atividades:

1. Adicionar uma definição de relatório que inclui
   - Um identificador único do relatório
   - Um nome do relatório
   - Atributos utilizados no relatório
   - Cálculos para gerar o relatório.
2. Reutilizar a definição do relatório a qualquer momento, modificando a definição se necessário.
3. Visualizar e imprimir um relatório utilizando as definições do relatório.
4. Consultar as definições de um relatório existente pelo nome do relatório ou pelo identificador do relatório.

**Passo 1 — Identificar as Funções de Dados**

A partir dos requisitos do usuário, identificador do relatório, nome do relatório, atributos utilizados no relatório e cálculos, juntos, formam um agrupamento lógico de dados para uma definição de relatório porque eles são mantidos como um grupo.

A tabela a seguir mostra a análise para determinar se as informações de definição de relatório é uma função de dados. Veja os Estudos de Caso para saber como o restante dos requisitos podem ser contados.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Definição de relatório. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Informação de Definição de Relatório não é uma instância de dados de código. A entidade é usada para referência na geração de relatórios, consiste de mais do que código e descrição e é alterada sempre que necessário pelo usuário. |
| 5. Excluir entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados**

A tabela a seguir mostra a análise para determinar se a informação de Definição de Relatório é classificada como um ALI. Veja os Estudos de Caso para saber como o restante dos requisitos podem ser contados.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A função de dados Definição de Relatório é mantida dentro da aplicação |
| 2. Classificar como um AIE, se: | Classificada como um ALI; consequentemente, nenhum AIE é identificado. |
| - É referenciado, mas não mantido, pela aplicação sendo medida e |  |
| - É identificado em um ALI em uma ou mais outras aplicações |  |

Baseado na análise, a informação de Definição de Relatório é classificada como um ALI.

**Passo 3 — Contar os DERs**

**Para os DERs**, observe cada atributo associado com o ALI Definição de Relatório e determine se as regras de contagem de DER se aplicam.

O ALI Definição de Relatório inclui:

- Identificador do Relatório
- Nome do Relatório
- Atributos
- Cálculos

A análise dos DERs para o ALI Definição de Relatório é mostrada abaixo:

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Identificador do Relatório, Nome do Relatório, Atributos, Cálculos. Embora existam múltiplas ocorrências de ambos os Atributos e Cálculos, eles são contados cada um como somente um DER. |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Não existem atributos deste tipo. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. |

**Passo 4 — Contar os RLRs**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 3. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o ALI Definição de Relatório. |
| 4. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER: |  |
| - Entidade associativa com atributos não-chave | Não existem entidades deste tipo. |
| - Subtipo (subtipo diferente do primeiro subtipo) e | Não existem entidades deste tipo. |
| - Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo. |

O total de RLR e DER para Definição de Relatório é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| - Grupo Definição de Relatório | - Identificador do Relatório<br>- Nome do Relatório<br>- Atributos<br>- Cálculos |
| **Total: 1 RLR** | **Total: 4 DERs** |

**Passo 5 — Determinar a Complexidade Funcional**

|  |  |
| --- | --- |
| 1 RLRs e 4 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 ALI Baixo | 7 PF |

### Exemplo: Índice Alternativo

**Requisitos do Usuário**

O usuário precisa consultar as definições de relatório utilizando o nome do relatório como chave para localizar a definição desejada. Para satisfazer o requisito do usuário, um índice alternativo é criado utilizando o nome do relatório como chave.

**Passo 1 — Identificar as Funções de Dados**

A tabela a seguir mostra a análise resumida para determinar se o Índice Alternativo é um ALI.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Não. A partir da perspectiva do usuário, esta função de filtro supre o usuário com atributos específicos das definições de relatórios criados que referenciam o ALI Definição de Relatório. Este filtro técnico, necessário para criar a lista de consulta, não se constitui em uma função de negócio. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não se aplica. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não se aplica. |
| 4. Exclua as entidades referidas como Dados de Código. | Não se aplica. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não se aplica. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não se aplica. |

Baseado na análise da tabela, o índice alternativo não é um grupo lógico, portanto, não é contado como um ALI.

### Exemplo: Dados Compartilhados por Aplicações

**Requisitos do Usuário**

O usuário de RH deseja a habilidade de manter informações de cada novo funcionário.

As informações que devem ser mantidas pelo usuário de RH incluem:

- Código do Funcionário
- Nome do Funcionário
- Endereço para correspondência do Funcionário
- Faixa Salarial do Funcionário
- Nome do Cargo do Funcionário

\* Como resultado da criação de um novo registro de funcionário, a data elegível para aposentadoria do funcionário deve ser automaticamente calculada e salva com as outras informações do Funcionário.

O usuário da Segurança requer que um nivel de segurança seja atribuído a cada novo funcionário. O departamento de Segurança faz uma discreta investigação logo que cada funcionário é contratado e atribui o apropriado nível de autorização de segurança organizacional.

Isto **não** é a aplicação de segurança que determina o acesso individual dos usuários dentro da aplicação.

As informações que devem ser mantidas pelo usuário de Segurança incluem:

- Código do Empregado
- Nivel de Autorização de Segurança Organizacional

O usuário de Segurança também requer um relatório listando as seguintes informações:

- Contagem dos Códigos do Funcionário
- Nome do Funcionário
- Código do Funcionário
- Nivel de Autorização de Segurança Organizacional

**Diagrama de Fluxo de Dados**

![Diagrama de Fluxo de Dados do exemplo Dados Compartilhados por Aplicações: na Aplicação RH o Usuário aciona Criar Funcionário, que grava no depósito Funcionário (Cod.Func., Nome Func., Endereço, Faixa Salarial, Nome Cargo, Dt.Aposentadoria, Nível Segurança); na Aplicação Segurança o Usuário aciona Atribuir Nível de Segurança e Listar Funcionários, produzindo um documento com Cod.Func., Nome Func., Nível Segurança e Total. Legenda: Usuário ou Aplicação, Processo, Documento, Depósito de Dados, Fluxo de Dados](images/p281-dfd-dados-compartilhados.png)

**Passo 1 — Identificar as Funções de Dados (para a aplicação de RH)**

Determine se as informações de Funcionário são uma função de dados para a aplicação de RH. A tabela a seguir mostra o resumo da análise.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Funcionário. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos reconhecidos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados (para a aplicação de RH)**

Determine se informações de Funcionário é classificada como um ALI para a aplicação de RH.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A função de dados Funcionário é mantida dentro da aplicação de RH. |
| 2. Classificar como um AIE, se: | Classificado como um ALI; consequentemente, nenhum AIEs são identificados. |
| - É referenciado, mas não mantido, pela aplicação sendo medida e |  |
| - É identificado em um ALI em uma ou mais outras aplicações |  |

A análise mostra que as informações do Funcionário são um ALI para a aplicação de RH.

**Passo 3 — Contar os DERs (para a aplicação de RH)**

**Para os DERs**, observe cada atributo associado com o ALI Funcionário na aplicação de RH e determine se as regras de contagem de DER se aplicam.

A lista a seguir inclui os atributos para as informações do Funcionário:

- Código do Funcionário
- Nome do Funcionário
- Endereço de correspondência do Funcionário
- Faixa Salarial do Funcionário
- Cargo do Funcionário
- Data elegível para Aposentadoria
- Nível de Autorização de Segurança Organizacional

A análise dos DERs para o ALI Funcionário na aplicação de RH é mostrada abaixo:

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Os seguintes atributos satisfazem esta regra:<br>- Código do Funcionário<br>- Nome do Funcionário<br>- Endereço de Correspondência do Funcionário<br>- Faixa Salarial do Funcionário<br>- Cargo do Funcionário<br>- Data elegivel para aposentadoria |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Todos os atributos são usados dentro da aplicação de RH exceto o Nivel de Autorização de Segurança Organizacional. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. |

**Passo 4 — Contar os RLRs (para a aplicação de RH)**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o ALI Funcionário. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER: |  |
| - Entidade associativa com atributos não-chave | Não existem entidades deste tipo. |
| - Subtipo (subtipo diferente do primeiro subtipo) e | Não existem entidades deste tipo. |
| - Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo. |

O total de RLR e DER para o ALI Funcionário na aplicação de RH é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| - Grupo de informações de Funcionário | - Código do Funcionário<br>- Nome do Funcionário<br>- Endereço de Correspondência do Funcionário<br>- Faixa Salarial do Funcionário<br>- Cargo do Funcionário<br>- Data elegivel para aposentadoria |
| **Total: 1 RLR** | **Total: 6 DERs** |

**Passo 5 — Determinar a Complexidade Funcional (para a aplicação de RH)**

|  |  |
| --- | --- |
| 1 RLR e 6 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional (para a aplicação de RH)**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 ALI Baixo | 7 PF |

**Passo 1 — Identificar as Funções de Dados (para a aplicação Segurança)**

Determine se as informações de Funcionário são uma função de dados para a aplicação Segurança. A tabela a seguir mostra o resumo da análise.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Funcionário. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados (para a aplicação Segurança)**

Determine se informações de Funcionário é classificada como um ALI para a aplicação Segurança.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A função de dados Funcionário é mantida dentro da aplicação Segurança. |
| 2. Classificar como um AIE, se: | Classificado como um ALI; consequentemente, nenhum AIEs são identificados. |
| - É referenciado, mas não mantido, pela aplicação sendo medida e |  |
| - É identificado em um ALI em uma ou mais outras aplicações |  |

A análise mostra que as informações do Funcionário também são classificadas como um ALI para a aplicação Segurança.

**Passo 3 — Contar os DERs (para a aplicação Segurança)**

**Para os DERs**, observe cada atributo associado com o ALI Funcionário na aplicação Segurança e determine se as regras de contagem de DER se aplicam.

O ALI Funcionário inclui:

- Código do Funcionário
- Nome do Funcionário
- Endereço de correspondência do Funcionário
- Faixa Salarial do Funcionário
- Cargo do Funcionário
- Data elegível para Aposentadoria
- Nível de Autorização de Segurança Organizacional

A análise dos DERs para o ALI Funcionário na aplicação Segurança é mostrada abaixo:

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Os seguintes atributos satisfazem esta regra:<br>- Código do Funcionário<br>- Nome do Funcionário<br>- Nivel de Autorização de Segurança Organizacional |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Somente o Código do Funcionário, Nome do Funcionário e Nivel de Autorização de Segurança Organizacional são usados pela aplicação Segurança. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. |

**Passo 4 — Contar os RLRs (para a aplicação Segurança)**

**Para RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o ALI Funcionário. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER: |  |
| - Entidade associativa com atributos não-chave | Não existem entidades deste tipo. |
| - Subtipo (subtipo diferente do primeiro subtipo) e | Não existem entidades deste tipo. |
| - Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo. |

O total de RLR e DER para o ALI Funcionário na aplicação Segurança é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| - Grupo de informações de Funcionário | - Código do Funcionário<br>- Nome do Funcionário<br>- Nivel de Autorização de Segurança Organizacional |
| **Total: 1 RLR** | **Total: 3 DERs** |

**Passo 5 — Determinar a Complexidade Funcional (para a aplicação Segurança)**

|  |  |
| --- | --- |
| 1 RLR e 3 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional (para a aplicação Segurança)**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 ALI Baixo | 7 PF |

### Exemplo: Diferentes Usuários/Diferentes Visões dos Dados

**Requisitos do Usuário**

As informações que devem ser mantidas pelo usuário do RH incluem:

- Código do Funcionário
- Nome do Funcionário
- Endereço de Correspondência do Funcionário

O Endereço de Correspondência do Funcionário mantido no depósito de dados Funcionário consiste de Andar, Código do Edifício, Rua, Cidade, Estado e CEP; entretanto, a aplicação de RH usa Endereço de Correspondência como um único atributo.

- Faixa Salarial do Funcionário
- Cargo do Funcionário
- Data elegível para aposentadoria *

\* Como resultado da criação de um novo registro de funcionário, a previsão da Data da Aposentadoria do funcionário deve ser automaticamente calculada e salva com as outras informações do Funcionário.

O usuário de RH requer a habilidade de produzir etiquetas de endereço para cada funcionário.

O usuário da Distribuição de Correspondência requer a habilidade de manter o código do edifício para cada funcionário para refletir as mudanças nos códigos identificados.

O usuário da Distribuição de Correspondência também requer a habilidade de avaliar a população em cada local para determinar qual o processo mais eficiente para entrega de correspondências internas. Um relatório é produzido com indicação do número de funcionários localizados em cada andar de cada edifício.

As informações que devem ser mantidas ou referenciadas pelo usuário da Distribuição de Correspondência incluem:

- Código do Funcionário
- Andar
- Código do Edifício

Outros atributos (por exemplo, Nivel de Autorização de Segurança Organizacional) existem dentro da entidade Funcionário, mas eles não são referenciados ou mantidos pela aplicação de RH nem pela aplicação de Distribuição de Correspondência.

**Diagrama de Fluxo de Dados**

![Diagrama de Fluxo de Dados do exemplo Diferentes Usuários/Diferentes Visões dos Dados: na Aplicação RH o Usuário aciona Criar Funcionário e Imprimir Etiquetas usando o depósito Funcionário (com Endereço de Correspondência detalhado em Rua, Cidade, Estado, CEP, Andar, Código do Edifício); na Aplicação Distribuição de Correspondência o Usuário aciona Manter Código de Edifício e Imprimir Relatório da População (Total de Func., Andar, Código do Edifício). Legenda: Usuário ou Aplicação, Processo, Documento, Depósito de Dados, Fluxo de Dados](images/p290-dfd-diferentes-visoes.png)

**Passo 1 — Identificar as Funções de Dados (para a aplicação de RH)**

Determine se as informações de Funcionário são uma função de dados para a aplicação RH. A tabela a seguir mostra o resumo da análise.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Funcionário. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados (para a aplicação de RH)**

Determine se informações de Funcionário é classificada como um ALI para a aplicação de RH.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A função de dados Funcionário é mantida dentro da aplicação de RH. |
| 2. Classificar como um AIE, se: | Classificado como um ALI; consequentemente, nenhum AIEs são identificados. |
| - É referenciado, mas não mantido, pela aplicação sendo medida e |  |
| - É identificado em um ALI em uma ou mais outras aplicações |  |

A análise mostra que as informações do Funcionário são um ALI para a aplicação de RH.

**Passo 3 — Contar os DERs (para a aplicação de RH)**

**Para os DERs**, observe cada atributo associado com o ALI Funcionário na aplicação de RH e determine se as regras de contagem de DER se aplicam.

Informações do Funcionário incluem:

- Código do Funcionário
- Nome do Funcionário
- Endereço de correspondência do Funcionário (Andar, Código do Edifício, Rua, Cidade, Estado e CEP)
- Faixa Salarial do Funcionário
- Cargo do Funcionário
- Data elegível para Aposentadoria
- Nível de Autorização de Segurança Organizacional

A análise dos DERs para o ALI Funcionário na aplicação de RH é mostrada abaixo:

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Os seguintes atributos satisfazem esta regra:<br>- Código do Funcionário<br>- Nome do Funcionário<br>- Endereço de Correspondência do Funcionário<br>- Faixa Salarial do Funcionário<br>- Cargo do Funcionário<br>- Data elegivel para aposentadoria<br>- Nível de Segurança Organizacional |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Somente o Código do Funcionário, Nome do Funcionário, Endereço de Correspondência do Funcionário, Faixa Salarial do Funcionário, Cargo do Funcionário, e Data elegível para aposentadoria são usados pela aplicação de RH. O atributo Nivel de Segurança Organizacional não é contado como DER, porque ele não é usado pela aplicação de RH. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Endereço de correspondência do empregado é contado como um único DER. |

**Passo 4 — Contar os RLRs (para a aplicação de RH)**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o ALI Funcionário. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER: |  |
| - Entidade associativa com atributos não-chave | Não existem entidades deste tipo. |
| - Subtipo (subtipo diferente do primeiro subtipo) e | Não existem entidades deste tipo. |
| - Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo. |

O total de RLR e DER para o ALI Funcionário na aplicação de RH é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| - Grupo de informações de Funcionário | - Código do Funcionário<br>- Nome do Funcionário<br>- Endereço de Correspondência do Funcionário<br>- Faixa Salarial do Funcionário<br>- Cargo do Funcionário<br>- Data elegivel para aposentadoria |
| **Total: 1 RLR** | **Total: 6 DERs** |

**Passo 5 — Determinar a Complexidade Funcional (para a aplicação de RH)**

|  |  |
| --- | --- |
| 1 RLR e 6 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional (para a aplicação de RH)**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 ALI Baixo | 7 PF |

**Passo 1 — Identificar as Funções de Dados (para a aplicação de Distribuição de Correspondência)**

Determine se as informações de Funcionário são uma função de dados para a aplicação Distribuição de Correspondência. A tabela a seguir mostra o resumo da análise.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Funcionário. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados (para a aplicação Distribuição de Correspondência)**

Determine se informações de Funcionário é classificada como um ALI para a aplicação Distribuição de Correspondência.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A função de dados Funcionário é mantida dentro da aplicação Distribuição de Correspondência. |
| 2. Classificar como um AIE, se: | Classificado como um ALI; consequentemente, não existem AIEs identificados. |
| - É referenciado, mas não mantido, pela aplicação sendo medida e |  |
| - É identificado em um ALI em uma ou mais outras aplicações |  |

A análise mostra que as informações do Funcionário são um ALI para a aplicação Distribuição de Correspondência.

**Passo 3 — Contar os DERs (para a aplicação Distribuição de Correspondência)**

**Para os DERs**, observe cada atributo associado com o ALI Funcionário na aplicação Distribuição de Correspondência e determine se as regras de contagem de DER se aplicam.

Informações do Funcionário incluem:

- Código do Funcionário
- Nome do Funcionário
- Endereço de correspondência do Funcionário (Andar, Código do Edifício, Rua, Cidade, Estado e CEP; na aplicação de Distribuição de Correspondência os atributos Andar e Código do Edifício são usados separadamente.)
- Faixa Salarial do Funcionário
- Cargo do Funcionário
- Data elegível para Aposentadoria
- Nível de Autorização de Segurança Organizacional

A análise dos DERs para as informações do Funcionário para a aplicação Distribuição de Correspondência é mostrada abaixo:

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Os seguintes atributos satisfazem esta regra:<br>- Código do Funcionário<br>- Andar<br>- Código do Edifício |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Somente o Código do Funcionário, Andar, e Código do Edifício são usados pela aplicação Distribuição de Correspondência. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. Embora o Endereço de Correspondência do Funcionário tenha sido considerado um único atributo na aplicação de RH, são contados dois atributos separados (Andar e Código do Edifício) na aplicação de Distribuição de Correspondência. |

**Passo 4 — Contar os RLRs (para a aplicação Distribuição de Correspondência)**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o ALI Funcionário. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER: |  |
| - Entidade associativa com atributos não-chave | Não existem entidades deste tipo. |
| - Subtipo (subtipo diferente do primeiro subtipo) e | Não existem entidades deste tipo. |
| - Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo. |

O total de RLR e DER para o ALI Funcionário na aplicação de Distribuição de Correspondência é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| - Grupo de informações do Funcionário | - Código do Funcionário<br>- Andar<br>- Código do Edifício |
| **Total: 1 RLR** | **Total: 3 DERs** |

**Passo 5 — Determinar a Complexidade Funcional (para a aplicação Distribuição de Correspondência)**

|  |  |
| --- | --- |
| 1 RLRs e 3 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional (para a aplicação Distribuição de Correspondência)**

|  |  |
| --- | --- |
| Tamanho Funcional de 1 ALI Baixo | 7 PF |

## Exemplos de Contagem de AIE

**Introdução**

Esta seção utiliza a aplicação de Recursos Humanos (RH) juntamente com a aplicação de Segurança e uma aplicação de Pensão para ilustrar procedimentos utilizados para medir funções de dados. Além desta seção, outros exemplos estão nos Estudos de Caso que são parte da documentação complementar do IFPUG.

**Conteúdo**

Esta seção inclui os seguintes exemplos:

| Tópico | Page |
|---|---|
| Resumo das Descrições dos Exemplos de Contagem de AIEs | 1-40 |
| Exemplo: Referenciando dados de Outras Aplicações | 1-41 |
| Exemplo: Referenciando dados de Uma Outra Aplicação | 1-45 |
| Exemplo: Fornecendo Dados para Outras Aplicações | 1-51 |
| Exemplo: Aplicação de Help | 1-53 |
| Exemplo: Conversão de Dados | 1-62 |
| Exemplo: Arquivo de Entrada de Transação | 1-64 |
| Exemplo: Diferentes Usuários/Diferentes Visões do Usuário | 1-66 |
| Exemplo: Múltipla utilização de Dados | 1-71 |

### Resumo da Descrição dos Exemplos de AIEs

Os exemplos para AIEs são descritos na seguinte tabela:

| Exemplo | Descrição Resumida | Página |
|---|---|---|
| Referenciando Dados de Outras Aplicações para gerar saída | Este exemplo identifica AIEs para uma aplicação que referencia dados mantidos por outra aplicação. Os dados são utilizados para gerar uma saída externa. | 1-41 |
| Referenciando Dados de Outra Aplicação para utilizar como parte de um processo de entrada | Este exemplo também mostra dados referenciados a partir de outra aplicação. Identifica AIEs para uma aplicação que referencia dados mantidos por outra aplicação para utilização em uma entrada externa.. | 1-45 |
| Fornecendo Dados para Outras Aplicações | Este é outro exemplo de contagem de dados referenciados a partir de uma aplicação diferente. | 1-51 |
| Aplicação de Help | Este é um exemplo de contagem de uma facilidade de Help dentro da aplicação de RH. | 1-53 |
| Conversão de Dados | Este é um exemplo de contagem na conversão de uma nova aplicação. | 1-62 |
| Arquivo de Entrada de Transação | Este exemplo aplica as regras de contagem de AIE para um arquivo de entrada de transação processado para incluir cargos para a aplicação de Recursos Humanos. | 1-64 |
| Diferentes Usuários / Diferentes Visões do Usuário | Este exemplo mostra que a visão difere quando um AIE é utilizado por diversas aplicações. | 1-66 |
| Uso Múltiplo de Dados | Este exemplo ilustra várias utilizações para o mesmo dado. | 1-71 |

### Exemplo: Referenciando Dados de Outras Aplicações

**Requisitos do Usuário**

O usuário deseja que o sistema de Recursos Humanos forneça a habilidade para:

1. Incluir, consultar e listar informações do Funcionário
2. Interface com o sistema de Ativo Fixo para recuperar informações de localização de cada edifício. A informação de localização inclui as informações de nome e descrição.

**Passo 1 — Identificar as Funções de Dados**

A partir dos requisitos do usuário, existem dois grupos de informações:

- Informações do Funcionário
- Informações de Localização

A tabela a seguir mostra o resumo da análise para determinar se Informações do Funcionário é uma função de dados.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Funcionário e Localização. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. Funcionário e Localização são entidades independentes uma da outra. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

Baseado na análise, Funcionário e Localização são identificadas como função de dados.

**Passo 2 — Classificar as Funções de Dados (para informações do Funcionário)**

Determinar se informações do Funcionário é classificada como um AIE para a aplicação RH.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A função de dados Funcionário é mantida dentro da aplicação. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | Classificada como um ALI; consequentemente, nenhum AIE é identificado. |

Baseado na análise, as informações de Funcionário não são externas à aplicação de RH. Elas são mantidas internamente; portanto, não é um AIE.

**Passo 2 — Classificar as Funções de Dados (para informações de Localização)**

Determinar se as informações de Localização são classificadas como um AIE para a aplicação de RH.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | As informações de Localização não são mantidas na aplicação de RH. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | A função de dados Localização é referenciada, mas não mantida, pela aplicação de RH para uso no relatório de funcionários.<br><br>Inicialmente, não está claro se as informações de Localização são mantidas em outra aplicação. Depois de perguntar aos usuários, fomos informados que eles incluem a informação na aplicação de Ativo Fixo utilizando uma tela. Portanto, as informações de Localização são um ALI para a aplicação Ativo Fixo e um AIE para a aplicação de RH. |

Baseado na análise, as informações de Localização são classificadas como um AIE para a aplicação de RH.

**Passo 3 — Contar os DERs (para Localização)**

**Para os DERs**, observe cada atributo associado com o AIE Localização e determine se as regras de contagem de DER se aplicam.

Os atributos a seguir são referenciados a partir do AIE Localização:

- Código do Edifício
- Nome do Edifício
- Descrição do Edifício
  - Linha 1
  - Linha 2
  - Linha 3
- Cidade
- Estado
- País

A tabela a seguir mostra a análise resumida da contagem de DER.

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Código do Edifício, Nome do Edifício, Descrição do Edifício, Cidade, Estado e País. As linhas repetidas de Descrição do Edifício são contadas como um único DER. |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Não existem atributos deste tipo. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. |

**Passo 4 — Contar os RLRs (para Localização)**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o AIE Localização. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER:<br>• Entidade associativa com atributos não-chave<br>• Subtipo (subtipo diferente do primeiro subtipo) e<br>• Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo.<br>Não existem entidades deste tipo.<br>Não existem entidades deste tipo. |

**O total de RLR e DER** para o AIE Localização é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| • dados de Localização | • Código do Edifício<br>• Nome do Edifício<br>• Descrição do Edifício (linhas repetidas)<br>• Cidade<br>• Estado<br>• País |
| **Total** — 1 RLR | **Total** — 6 DERs |

**Passo 5 — Determinar a Complexidade Funcional (para Localização)**

|  |  |
|---|---|
| 1 RLR e 6 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional (para Localização)**

|  |  |
|---|---|
| Tamanho Funcional de 1 AIE Baixo | 5 PF |

### Exemplo: Referenciando Dados de uma Outra Aplicação

**Requisitos do Usuário**

O usuário requer que a aplicação de Recursos Humanos forneça as seguintes habilidades:

- Todos os funcionários horistas devem ser pagos em dólares dos Estados Unidos.
- Quando o usuário incluir ou alterar informações do funcionário, a aplicação de Recursos Humanos deve acessar a o sistema Monetário para recuperar a taxa de conversão. Depois de recuperar a taxa de conversão, a aplicação de RH converte a taxa-hora padrão da localização do funcionário para a taxa-hora dos EUA utilizando o seguinte cálculo:

*TaxaHoraPadrão / TaxaConversão = TaxaHoraDolarEUA*

**Modelo de Dados**

O diagrama a seguir mostra os relacionamentos para este exemplo.

![Modelo de dados (MER) mostrando o relacionamento entre a entidade TAXA DE CONVERSÃO do Sistema Monetário e a entidade FUNCIONÁRIO (subtipos FUNC_ASSALARIADO e FUNC_HORISTA) com a entidade atributiva Dependente na Aplicação de RH](images/p304-mer-sistema-monetario-rh.png)

Legenda:

- Entidade Tipo
- Entidade Atributiva
- Entidade Subtipo
- Relacionamento Obrigatório de Um-para-muitos
- Relacionamento Opcional de Um-para-muitos

As informações de conversão de moeda incluem:

- MOEDA
  - Taxa_Base_Para_Conversão_Moeda
  - País

**Passo 1 — Identificar as Funções de Dados**

Para os requisitos, existem dois grupos de informações:

- Informações de Conversão de Moeda
- Informações de Funcionário

A tabela a seguir mostra o resumo da análise para determinar se Informações de Conversão de Moeda é uma função de dados.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Conversão de Moeda, Funcionário e Dependente. |
| 2. Excluir entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | A entidade Moeda de Conversão é independente das outras entidades. Dependente é uma entidade dependente da entidade Funcionário. |
| 4. Exclua as entidades referidas como Dados de Código. | Embora Conversão de Moeda possa parecer uma instância de dados de código, Código do País e Taxa de Conversão não são substituíveis (isto é, não podem ser substituído um pelo outro). Informações de Conversão de Moeda também mudam regularmente, de modo que não satisfazem os critérios de serem essencialmente estáticos. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

Baseado na análise, Conversão de Moeda e Funcionário são identificadas como função de dados. Dependente não é uma função de dados própria, mas é parte da função de dados Funcionário.

**Passo 2 — Classificar as Funções de Dados (para Funcionário)**

A tabela a seguir mostra a análise para determinar se informações do Funcionário é classificada como um AIE.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | Informações do Funcionário são mantidas pela aplicação de RH. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | Classificado como um ALI; consequentemente, nenhum AIEs são identificados. |

Baseado na análise, as informações de Funcionário não são externas à aplicação de RH. Elas são mantidas internamente; portanto, não são um AIE.

**Passo 2 — Classificar as Funções de Dados (para Conversão de Moeda)**

A tabela a seguir mostra a análise para determinar se informações de Conversão de Moeda são classificadas como AIE.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | Conversão de Moeda não é mantida pela aplicação de RH. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | A função de dados Conversão de Moeda é referenciada pela aplicação de RH para uso no cálculo da remuneração do empregado.<br><br>Embora Conversão de Moeda possa parecer uma instância de dados de código, Código do País e Taxa de Conversão não são substituíveis (isto é, não podem ser substituído um pelo outro). Informações de Conversão de Moeda também mudam regularmente, de modo que não satisfazem os critérios de serem essencialmente estáticos. |

Como a aplicação Sistema Monetário fornece a taxa de conversão para a aplicação de RH, o grupo de dados de conversão de moeda é um AIE para a aplicação de RH.

**Passo 3 — Contar os DERs (para Conversão de Moeda)**

**Para os DERs**, observe cada atributo associado com o AIE Conversão de Moeda e determine se as regras de contagem de DER se aplicam. A tabela a seguir mostra o resumo da análise da contagem de DER.

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Taxa de Conversão, Moeda. |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Todos os atributos são referenciados pela aplicação de RH. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. |

**Passo 4 — Contar os RLRs (para Conversão de Moeda)**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o AIE Conversão de Moeda. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER:<br>• Entidade associativa com atributos não-chave<br>• Subtipo (subtipo diferente do primeiro subtipo) e<br>• Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo.<br>Não existem entidades deste tipo.<br>Não existem entidades deste tipo. |

**O total de RLR e DER** para o AIE informações de Conversão de Moeda é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| • Informações de Conversão | • Taxa de Conversão<br>• Moeda |
| **Total** — 1 RLR | **Total** — 2 DERs |

**Passo 5 — Determinar a Complexidade Funcional (para Conversão de Moeda)**

|  |  |
|---|---|
| 1 RLR e 2 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional (para Conversão de Moeda)**

|  |  |
|---|---|
| Tamanho Funcional de 1 AIE Baixo | 5 PF |

### Exemplo: Fornecendo Dados para Outras Aplicações

**Requisitos do Usuário**

O usuário tem os seguintes requisitos para o sistema Monetário:

- Manter taxa de conversão de outras moedas para o dólar americano.
- Fornecer uma interface para habilitar outras aplicações, como Recursos Humanos, a recuperar informação de conversão.

**Passo 1 — Identificar as Funções de Dados**

Para este exemplo, determinar se informações de Conversão de Moeda é uma função de dados para a aplicação Sistema Monetário. A tabela a seguir mostra o resumo da análise.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Conversão de Moeda. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Embora Conversão de Moeda possa parecer uma instância de dados de código, Código do País e Taxa de Conversão não são substituíveis (isto é, não podem ser substituído um pelo outro). Informações de Conversão de Moeda também mudam regularmente, de modo que não satisfazem os critérios de serem essencialmente estáticos. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados (para Conversão de Moeda)**

A tabela a seguir mostra a análise para determinar se informações de Conversão de Moeda é classificada como um AIE.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A aplicação Sistema Monetário mantém os dados de Conversão de Moeda através de transações a partir de um serviço online. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | Classificado como um ALI; consequentemente, nenhum AIEs são identificados. |

As informações de Conversão de Moeda não são externas à aplicação Sistema Monetário; portanto, ela é contada como um ALI ao invés de um AIE para a aplicação Sistema Monetário. Veja o exemplo anterior neste capítulo para rever como a referência a Conversão de Moeda pode ser contada como um AIE.

### Exemplo: Aplicação de Help

**Requisitos do Usuário**

O usuário requer ao sistema de Help fornecer:

1. A habilidade de descrever a forma como cada tela é utilizada para realizar cada função de negócios disponível na mesma.
2. A habilidade de alterar o Help de tela.
3. A habilidade para estabelecer uma definição, valores default, e valores válidos para cada atributo na aplicação de Recursos Humanos.
4. A habilidade de alterar o Help de campo.
5. A habilidade para a aplicação de Recursos Humanos recuperar o Help de tela e de campo para apresentação.

O Help de tela e Help de campo são mantidos independentemente. Pode existir uma entrada em um tipo de help sem existir em outro.

**Diagrama de Fluxo de Dados**

O diagrama a seguir ilustra o fluxo de dados para este exemplo.

![Diagrama de fluxo de dados da aplicação de Help: o Usuário aciona os processos Incluir Help de Tela (2.1) e Alterar Help de Tela (2.2) sobre o depósito HELP DE TELA, e Incluir Help de campo (2.3) e Alterar Help de campo (2.4) sobre o depósito HELP DE CAMPO; a Aplicação de Recursos Humanos recupera os dados de ambos os depósitos](images/p312-dfd-help.png)

![Legenda do diagrama de fluxo de dados: símbolos de Usuário ou Aplicação, Depósito de Dados, Processo e Fluxo de Dados](images/p313-dfd-legenda.png)

Legenda:

- Usuário ou Aplicação
- Depósito de Dados
- Processo
- Fluxo de Dados

**Passo 1 — Identificar as Funções de Dados**

A partir dos requisitos para a aplicação de Recursos Humanos (RH), existem dois grupos de dados:

- Help de tela
- Help de campo

A tabela a seguir mostra o resumo da análise para determinar se Help de tela e Help de campo são funções de dados para a aplicação de RH.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Help de tela, Help de campo. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Não existem entidades deste tipo. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Help de tela e Help de campo são independentes uma da outra. Pode existir uma entrada numa entidade sem existir na outra. |
| 4. Exclua as entidades referidas como Dados de Código. | Help de tela e Help de campo consiste de mais do que apenas atributos de código e descrição, não são usados para substituição e armazenam dados para suportar atividades essenciais do usuário; consequentemente, elas não são consideradas dados de código. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados (para Help de tela)**

A tabela a seguir mostra a análise para determinar se informações de Help de tela é classificada como um AIE.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | Help de tela não é mantido pela aplicação de RH. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | A aplicação de RH referencia, mas não mantém Help de tela.<br><br>A aplicação Help identificou Help de tela como um ALI. |

As informações de Help de tela são um AIE na aplicação de RH porque as informações são referenciadas pela aplicação de RH. Help de tela é mantida na fronteira da aplicação Help, onde ela é contada como um ALI.

**Passo 3 — Contar os DERs (para Help de tela)**

**Para os DERs**, observe cada atributo associado com o help de tela e use as regras de contagem de DER para contá-los. Os atributos para help de tela incluem:

- Identificador da Tela
- Descrição da Função de Negócio.

A tabela a seguir mostra a análise de DER para Help de tela.

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Identificador de tela, Descrição da Função de Negócio. |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Todos os atributos são referenciados pela aplicação de RH. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. |

**Passo 4 — Contar os RLRs (para Help de tela)**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para Help de tela. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER:<br>• Entidade associativa com atributos não-chave<br>• Subtipo (subtipo diferente do primeiro subtipo) e<br>• Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo para qualquer função de dados.<br>Não existem entidades deste tipo para qualquer função de dados.<br>Não existem entidades deste tipo para qualquer função de dados. |

**O total de RLR e DER** para o AIE Help de tela é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| • informações de Help de tela | • Identificador de tela<br>• Descrição da função de negócio |
| **Total** — 1 RLR | **Total** — 2 DERs |

**Passo 5 — Determinar a Complexidade Funcional (para Help de tela)**

|  |  |
|---|---|
| 1 RLR e 2 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional (para Help de tela)**

|  |  |
|---|---|
| Tamanho Funcional de 1 AIE Baixo | 5 PF |

**Passo 2 — Classificar as Funções de Dados (para Help de Campo)**

A tabela a seguir mostra o resumo dos resultados da análise para determinar se Help de campo é classificado como um AIE.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | Help de campo não é mantido pela aplicação de RH. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | A aplicação de RH referencia, mas não mantém Help de campo.<br><br>A aplicação Help identificou Help de campo como um ALI. |

Informações de Help de campo é um AIE na aplicação de RH porque as informações são recuperadas pela aplicação de RH. As informações de Help de campo são mantidas na aplicação Help onde ele é contado como um ALI.

**Passo 3 — Contar os DERs (para Help de Campo)**

**Para os DERs**, observe cada atributo associado com o Help de campo e utilize as regras de contagem de DER para contá-los. A lista a seguir mostra os atributos para Help de campo:

- Código da tela
- Código do campo
- Descrição do campo
- Valores default
- Valores Válidos

A tabela a seguir mostra a análise de DER para o Help de campo.

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | Código da tela, código do campo, Descrição do Campo, Valores Default, Valores Válidos. |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Todos os atributos são referenciados pela aplicação de RH. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. |

**Passo 4 — Contar os RLRs (para Help de Campo)**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o Help de Campo. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER:<br>• Entidade associativa com atributos não-chave<br>• Subtipo (subtipo diferente do primeiro subtipo) e<br>• Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo para qualquer função de dados.<br>Não existem entidades deste tipo para qualquer função de dados.<br>Não existem entidades deste tipo para qualquer função de dados. |

**O total de RLR e DER** para o AIE Help de campo é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| • Informações de Help de Campo | • Código da tela<br>• Código do Campo<br>• Descrição do Campo<br>• Valores Default<br>• Valores Válidos |
| **Total** — 1 RLR | **Total** — 5 DERs |

**Passo 5 — Determinar a Complexidade Funcional (para Help de Campo)**

|  |  |
|---|---|
| 1 RLR e 5 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional (para Help de Campo)**

|  |  |
|---|---|
| Tamanho Funcional de 1 AIE Baixo | 5 PF |

### Exemplo: Conversão de Dados

**Requisitos do Usuário**

Uma organização adquiriu um novo pacote da aplicação de RH. A organização está requerendo converter seu arquivo de funcionários do sistema de RH existente para o sistema comprado.

O sistema antigo não fornecia a capacidade de manter informações do dependente do funcionário. A informação do dependente é inicializada quando os funcionários existentes são migrados para a nova aplicação

**Modelo de Dados**

O diagrama a seguir mostra os dados para as duas aplicações.

![Modelo de dados (MER) comparando a Aplicação de RH Antiga (apenas a entidade FUNCIONÁRIO com subtipos FUNC_ASSALARIADO e FUNC_HORISTA) com a Aplicação de RH Nova (entidade FUNCIONÁRIO com os mesmos subtipos e a entidade atributiva Dependente)](images/p321-mer-rh-antiga-nova.png)

Legenda:

- Entidade Tipo
- Entidade Atributiva
- Entidade Subtipo
- Relacionamento Obrigatório de Um-para-muitos
- Relacionamento Opcional de Um-para-muitos

O arquivo Funcionário da aplicação de RH antiga é utilizado para incluir funcionários na nova aplicação de RH. O arquivo Funcionário da aplicação de RH antiga tem a intenção primária de manter (isto é, popular) o arquivo Funcionário na nova aplicação. O arquivo Funcionário da aplicação de RH antiga não satisfaz a intenção primária de um AIE que é armazenar dados referenciados através de um ou mais processos elementares.

**Passo 1 — Identificar as Funções de Dados**

A partir dos requisitos do usuário, determinar se o antigo arquivo Funcionário é uma função de dados. A tabela a seguir mostra o resumo da análise.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | O antigo arquivo Funcionário não é um grupo lógico de dados na perspectiva do usuário. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | O antigo arquivo Funcionário é uma saída (isto é, extração) da aplicação anterior ao invés de um arquivo lógico que é mantido. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

O arquivo de informações de funcionários é um arquivo de transação da informação do funcionário que é migrado para o novo sistema. O processo de conversão utiliza o arquivo de transação para manter informação de funcionário após a entrada da nova aplicação de RH.

O antigo arquivo Funcionário não é um grupo lógico de dados na perspectiva do usuário da aplicação de RH nova. A intenção primária do antigo arquivo Funcionário é servir como uma entrada para a nova aplicação de RH, não armazenar dados utilizados como referência por um ou mais processos elementares da nova aplicação de RH, portanto ele não é um AIE. Consulte os exemplos de contagem de EE/SE/CE para ver como o antigo arquivo Funcionário pode ser contado como uma Entrada Externa.

### Exemplo: Arquivo de Entrada de Transação

**Requisitos do usuário**

O usuário solicita a habilidade para:

1. incluir, alterar, excluir, consultar e imprimir a informação da função online.
2. incluir e alterar informação da função no modo batch.

**Layout do Registro**

O diagrama a seguir mostra o layout dos registros para este exemplo para inclusão e alteração de informação de função no modo batch.

![Layout dos registros de entrada em modo batch, mostrando os registros de inclusão (ADD) e alteração (CHG) com uma régua de posições de coluna e os campos SRENG/STENG, descrição e faixa salarial delimitados por posição](images/p323-layout-registro.png)

**Descrição dos Registros**

A tabela a seguir inclui descrições para cada tipo de registro

| Registro | Posição | Descrição |
|---|---|---|
| 01 | 1-3 | Tipo de Transação |
|  | 4-5 | Tipo de Registro |
|  | 6-10 | Número da Função |
|  | 11-45 | Nome da Função |
|  | 46-47 | Faixa Salarial da Função |
| 02 | 1-3 | Tipo de Transação |
|  | 4-5 | Tipo de Registro |
|  | 6-10 | Número da Função |
|  | 11-12 | Número da Linha da Descrição da Função |
|  | 13-41 | Linhas de Descrição da Função |

**Passo 1 — Identificar as Funções de Dados**

A partir dos requisitos do usuário, determinar se o arquivo de transação é uma função de dados. A tabela a seguir mostra o resumo da análise.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Sim. Dados são agrupados no arquivo de transações que entram pela fronteira da aplicação para manter o ALI Função. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | O arquivo de transação é excluído. As transações que entram pela fronteira da aplicação para manter o ALI Função compõem o processo elementar. Não existe processo elementar para atualizar o arquivo de transação. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

Não existem AIEs para este exemplo. Consulte os exemplos de contagem para EE/SE/CE para ver a explanação de como um arquivo de transação de entrada pode ser contado como uma Entrada Externa.

### Exemplo: Diferentes Usuários/Diferentes Visões do Usuário

**Requisitos do Usuário**

O usuário de RH deseja a habilidade para manter informação de cada novo funcionário.

A informação que deve ser mantida pelo usuário de RH inclui:

- ID do funcionário
- Nome do funcionário
- Endereço de correspondência do funcionário
- Faixa salarial do funcionário
- Título da função do funcionário
- Data elegível para aposentadoria *

\* Como resultado da criação de um novo registro de funcionário, a data elegível para aposentadoria do funcionário deve ser automaticamente calculada e salva com as outras informações do Funcionário.

O usuário de Pensão solicita a habilidade para gerar uma lista de funcionários com sua data prevista de elegível para aposentadoria.

Outros atributos (por exemplo, Nivel de Segurança Organizacional) existem na entidade Funcionário, mas eles não são referenciados ou mantidos pela aplicação de RH ou aplicação de Distribuição de Correspondência.

**Diagrama de Fluxo de Dados**

O diagrama a seguir mostra o fluxo de dados para este exemplo.

![Diagrama de fluxo de dados com a Aplicação de RH e a Aplicação de Pensão: na Aplicação de RH o processo Incluir Funcionário grava a entidade Funcionário com todos os atributos; na Aplicação de Pensão o processo Imprimir Listagem de Funcionários lê apenas Data_Eleg_Aposentadoria e Nome_Func](images/p325-dfd-diferentes-usuarios.png)

**Passo 1 — Identificar as Funções de Dados (para a aplicação Pensão)**

A tabela a seguir mostra o resumo da análise se a informação do funcionário é uma função de dados para a aplicação Pensão.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Funcionário. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | Informação de Funcionário é mantida pela aplicação de RH. Ela não é excluída. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados (para a aplicação Pensão)**

A tabela a seguir mostra o resumo do resultado da análise para determinar se Funcionário é classificado como uma AIE para a aplicação Pensão.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida | A aplicação Pensão não mantém informação de Funcionário. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | A aplicação Pensão referencia, mas não mantém os dados de Funcionário.<br><br>A aplicação de RH identificou Funcionário como um ALI. |

As informações de Funcionário preenche todos os requisitos para um AIE para a aplicação Pensão.

**Passo 3 — Contar os DERs (para a aplicação Pensão)**

**Para os DERs**, observe cada atributo associado com o AIE Funcionário para a aplicação Pensão. Para contar os DERs utilize as regras de contagem de DER.

Os atributos para informações de funcionário incluem:

- Código do Funcionário
- Nome do Funcionário
- Endereço de correspondência do Funcionário
- Faixa Salarial do Funcionário
- Cargo do Funcionário
- Data elegível para Aposentadoria

A tabela a seguir mostra a análise de DER para o AIE Funcionário para a aplicação Pensão.

| Regra de Contagem de DER para Função de Dados | A regra se aplica? |
|---|---|
| 1. Conte um DER para cada atributo único reconhecido pelo usuário, não repetido mantido em ou recuperado de uma função de dados através da execução de todos os processos elementares dentro do escopo da contagem. | As informações de Funcionário incluem os seguintes atributos:<br>• Código do Funcionário<br>• Nome do Funcionário<br>• Endereço de correspondência do Funcionário<br>• Faixa Salarial do Funcionário<br>• Cargo do Funcionário<br>• Data elegível para Aposentadoria<br>• Nivel de Segurança Organizacional |
| 2. Conte somente aqueles DERs sendo usado pela aplicação sendo medida quando duas ou mais aplicações mantém e/ou referenciam a mesma função de dados. | Somente o Nome do Funcionário e Data elegível para Aposentadoria são reconhecidos pelo usuário de Pensão. Todos os outros atributos não são contados como DERs para a aplicação Pensão. |
| 3. Conte um DER para cada atributo requerido pelo usuário para estabelecer um relacionamento com outra função de dados. | Não existem atributos deste tipo. |
| 4. Revise os atributos relacionados para determinar se eles são agrupados e contados como um único DER ou se eles são contados como múltiplos DERs; o agrupamento dependerá de como os processos elementares usam os atributos dentro da aplicação. | Não existem atributos deste tipo. |

**Passo 4 — Contar os RLRs (para a aplicação Pensão)**

**Para os RLRs**, identifique os subgrupos baseado nas regras de contagem de RLR.

| Regras de Contagem de RLR | A regra se aplica? |
|---|---|
| 1. Conte um RLR para cada função de dados (isto é, por default, cada função de dados tem um subgrupo de DERs para ser contado como um RLR). | Conte um RLR para o AIE Funcionário. |
| 2. Conte um RLR adicional para cada subgrupo lógico de DERs a seguir (dentro da função de dados) que contém mais do que um DER:<br>• Entidade associativa com atributos não-chave<br>• Subtipo (subtipo diferente do primeiro subtipo) e<br>• Entidade atributiva, em um relacionamento diferente de 1-1 mandatório. | Não existem entidades deste tipo.<br>Não existem entidades deste tipo.<br>Não existem entidades deste tipo. |

**O total de RLR e DER** para o AIE Funcionário na aplicação Pensão é mostrado na tabela a seguir.

| RLRs | DERs |
|---|---|
| • informações do Funcionário | • Nome do Funcionário<br>• Data elegível para Aposentadoria |
| **Total** — 1 RLR | **Total** — 2 DERs |

**Passo 5 — Determinar a Complexidade Funcional**

|  |  |
|---|---|
| 1 RLR e 2 DERs | Complexidade é Baixa |

**Passo 6 — Determinar o Tamanho Funcional**

|  |  |
|---|---|
| Tamanho Funcional de 1 AIE Baixo | 5 PF |

### Exemplo: Uso Múltiplo de Dados

**Requisitos do Usuário**

As informações de Funcionário são mantidas pela aplicação de RH.

O usuário de RH requer a habilidade para gerar uma listagem de todos os funcionários.

As informações que devem ser apresentadas para cada funcionário incluem:

- Código do Funcionário
- Nome do Funcionário

**Diagrama de Fluxo de Dados**

O diagrama a seguir mostra o fluxo de dados para este exemplo.

![Diagrama de fluxo de dados da Aplicação de RH: o Usuário fornece Informações do Funcionário ao processo Incluir Funcionário, que grava a entidade Funcionário com todos os atributos; o processo Imprimir Listagem de Funcionários lê apenas Cod_Func e Nome_Func](images/p330-dfd-uso-multiplo.png)

**Passo 1 — Identificar as Funções de Dados**

A tabela a seguir mostra o resumo da análise para determinar se as informações de funcionários são uma função de dados para a aplicação de RH.

| Regras de Identificação de Função de Dados | A regra se aplica? |
|---|---|
| 1. Identifique todos os dados ou informações de controle logicamente relacionados e reconhecidos pelo usuário dentro do escopo da contagem. | Funcionário. |
| 2. Exclua entidades que não são mantidas por qualquer aplicação. | As informações de Funcionário são mantidas pela aplicação de RH. Ela não é excluída. |
| 3. Agrupe entidades relacionadas que são entidades dependentes. | Não existem entidades deste tipo. |
| 4. Exclua as entidades referidas como Dados de Código. | Não existem entidades deste tipo. |
| 5. Exclua entidades que não possuem atributos requeridos pelo usuário. | Não existem entidades deste tipo. |
| 6. Remova as entidades associativas que contém atributos adicionais não requeridos pelo usuário e entidades associativas que contém somente chaves estrangeiras; agrupe os atributos chave estrangeira com as entidades primárias. | Não existem entidades deste tipo. |

**Passo 2 — Classificar as Funções de Dados**

A tabela a seguir mostra o resumo da análise para determinar se as informações de funcionários que são utilizadas para criar a listagem de funcionários são também classificadas como um AIE para a aplicação de RH.

| Regras para Classificação da Função de Dados | A regra se aplica? |
|---|---|
| 1. Classificar como um ALI se os dados são mantidos pela aplicação sendo medida. | As informações de Funcionário são mantidas pela aplicação de RH. Classifique-a como um ALI. |
| 2. Classificar como um AIE, se:<br>• É referenciado, mas não mantido, pela aplicação sendo medida e<br>• É identificado em um ALI em uma ou mais outras aplicações | Funcionário foi classificado como um ALI; consequentemente, não existem AIEs identificados.<br><br>Não se aplica. |

As informações de Funcionário usadas para criar a Listagem de Funcionários não é um AIE para a aplicação de RH.
