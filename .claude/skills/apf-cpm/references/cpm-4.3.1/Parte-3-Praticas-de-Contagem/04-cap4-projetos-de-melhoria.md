# Parte 3 · Capítulo 4 — Projetos de Melhoria e Atividades de Manutenção

> Parte 3 — Práticas de Contagem · CPM v4.3.1

**Introdução**

Este capítulo fornece diretrizes adicionais na identificação e medição das mudanças funcionais em aplicações instaladas. Não é abordado o relacionamento entre o tamanho funcional da melhoria e o esforço necessário para implementar a melhoria. Para uma visão adicional para esse tópico, o leitor pode consultar a publicação da NESMA, *"Function Point Analysis for Software Enhancement"* [NESMA, 2001], que pode ser obtida através do site www.nesma.org.

Este capítulo também discute as diversas atividades de manutenção e suporte que podem ocorrer durante a vida útil de uma aplicação e qual medida de tamanho funcional fornece uma base útil para estimativas e reconciliação de custo.

**Conteúdo**

Este capítulo inclui as seguintes seções:

| Tópico | Página |
| --- | --- |
| Medindo Projetos de Melhoria | 4-2 |
| Considerações e Dicas | 4-11 |
| Informações para Medição de Projetos de Melhoria | 4-14 |
| Procedimentos | 4-15 |
| Exemplo de Projetos de Melhoria | 4-16 |
| Considerações sobre Melhorias e Manutenções | 4-22 |
| Resumo | 4-26 |

## Medindo Projetos de Melhoria

O Tamanho Funcional do Projeto de Melhoria mede as modificações do projeto na aplicação instalada existente que adicionam, modificam ou excluem funções do usuário. Mudanças nas funcionalidades podem ocorrer a partir de novos requisitos, revisão de requisitos do usuário, mudanças legais/regulamentares ou novos usuários.

### Escopo e Fronteira de um Projeto de Melhoria

O Tamanho Funcional do Projeto de Melhoria inclui todas as funções que estão sendo adicionadas, alteradas e excluídas. A(s) fronteira(s) da(s) aplicação(ões) impactada(s) permanece(m) a(s) mesma(s). As funcionalidades da(s) aplicação(ões) refletem o impacto das funções sendo adicionadas, alteradas ou excluídas.

Pode existir mais de uma aplicação incluída no escopo da contagem. Dessa forma diversas fronteiras deverão ser identificadas, resultando em um tamanho funcional do projeto de melhoria separado para cada aplicação afetada.

Se o tamanho total do projeto de melhoria é requerido, ele é calculado pela soma total das contagens de melhoria para todas as aplicações incluídas no escopo da contagem.

### Medindo Funções de Dados em Projetos de Melhoria

A inclusão de novos arquivos lógicos internos ou arquivos de interface externa em um projeto de melhoria normalmente são facilmente identificados e medidos de acordo com as regras definidas na Parte 1. Capítulo 6 da Parte 2 (Medindo Funções de Dados) e Capítulo 2 da Parte 3 (Arquivos Lógicos) contem orientação adicional para medição de funções de dados bem como definições dos termos relacionados.

Porém, considerações podem ser levantadas, como a seguir:

- Se a mudança envolve apenas a inclusão de novos registros no arquivo lógico ou novos valores em um atributo existente dentro do arquivo lógico, não existe justificativa para contar a função de dado como sendo alterada.
- Se uma função de dado é alterada porque um atributo está sendo incluído e este atributo não é utilizado pela aplicação que está sendo medida, então não existe mudança naquela aplicação.
- Para que uma função de dado seja contada como uma função alterada, é obrigatório que a função seja estruturalmente alterada (ex.: inclusão ou remoção de atributos ou alteração de características de um atributo).

  **Nota:** Um novo texto de ajuda é frequentemente adicionado à função de dados "Ajuda" que auxilia a nova transação. Uma vez que não há mudança na estrutura da função de dados "Ajuda", não será contada como alterada.

- Se uma aplicação está solicitando o uso (para referenciar ou manter) um atributo existente que não era utilizado antes, então a função de dado relacionada é considerada alterada para aquela aplicação. Isto pode ocorrer sem que ocorra nenhuma mudança física no arquivo.
- Se novos atributos são incluídos em um ALI, procure por funções de transação novas ou modificadas que mantém o atributo neste ALI para confirmar que a mudança ocorreu.
- Se um atributo é incluído em um ALI que é mantido por duas aplicações e se uma das aplicações mantém o novo atributo, mas a outra apenas referencia este atributo, então ambas as aplicações consideram o ALI alterado. Entretanto, a segunda aplicação não terá nenhuma função de transação nova ou alterada que mantenha este campo naquele ALI.
- Se uma aplicação não mantém nem referencia um atributo novo ou alterado, então esta aplicação não pode considerar esta função de dados como alterada.
- Se um arquivo físico é incluído por um projeto de melhoria, ele não resulta necessariamente em um novo arquivo lógico. Primeiramente precisamos determinar se o novo arquivo físico é uma mudança de um arquivo lógico existente com DERs adicionais e possivelmente um novo RLR, ou um novo arquivo lógico. Orientações adicionais em relação à medição de arquivos lógicos podem ser obtidas no Capítulo 6 da Parte 2 e no Capítulo 2 da Parte 3.

### Medindo Funções de Transação em Projetos de Melhoria

A inclusão de novas funções de transação geralmente são facilmente identificadas e medidas de acordo com as regras definidas na Parte 1. Orientações adicionais em relação à medição de funções de transação bem como definições de termos relacionados podem ser obtidas no Capítulo 7 da Parte 2 (Medindo Funções de Transação).

A identificação das funções de transação que foram alteradas pela inclusão ou exclusão de elementos de dados (DERs) é óbvia. Entretanto, não é óbvio quando os requisitos do usuário são para mudanças na lógica de processamento, como descrito na Parte 1. Quando a lógica de processamento sofreu alteração dentro da aplicação para satisfazer requisitos de negócio, o processo elementar que incorpora aquela lógica deve ser identificado e contado como sendo alterado.

Uma simples mudança na lógica de processamento nem sempre afeta todas as transações relacionadas.

Por exemplo, quando uma alteração de edição ou validação é feita na lógica de processamento de entrada de dados e as transações existentes são de Inclusão, Alteração, Exclusão e Consulta Implícita, então apenas as transações de Inclusão e Alteração são contadas para a melhoria. A menos que exista uma alteração específica na lógica de exclusão (ex.: edição de integridade referencial) ou alteração na lógica de consulta (ex.: seleção ou recuperação), as transações de Exclusão e Consulta Implícita não serão alteradas.

![Diagrama de transações cruzando a fronteira da aplicação](images/p227-transacoes-fronteira.png)

No diagrama acima:

1. A transação 1 é modificada porque um DER adicional foi incluído e está cruzando a fronteira.
2. Igualmente, a transação 2 onde um DER adicional está cruzando a fronteira será contada como alterada.
3. Para a transação 3, uma rotina interna de validação da aplicação sofreu mudança. Uma vez que esta é uma mudança na lógica de processamento em um processo elementar, a transação 3 associada é contada como sendo alterada.
4. Para a transação 4 onde um critério de seleção ou um filtro sofreu mudança, a transação é contada como uma funcionalidade modificada.

Em alguns casos, uma mudança específica pode afetar como várias funções de transação são processadas. Sem considerar se as mudanças na lógica foram feitas fisicamente em uma rotina comum utilizada por várias transações, as funções alteradas devem ser identificadas baseadas nos processos elementares que incorporam aquela lógica. Se vários processos elementares são afetados, então conte diversas funções de transação. Se apenas um único processo elementar foi afetado, conte uma função de transação como sendo alterada. Em todos os casos, os requisitos do usuário e a visão do negócio devem ser fatores determinantes.

Por exemplo, o requisito é para modificar a edição em "Novos Pedidos" para incluir uma validação para o saldo devedor do cliente. Se existirem diversas transações de "Pedido" diferentes (individual, comercial, administrativo, etc.), mas a edição alterada é apenas na transação de "Pedido Comercial", então apenas esta transação deve ser contada como alterada. Mas se o requisito é para modificar todos os tipos de pedido, então cada transação separadamente deve ser contada como alterada.

Outra indicação de que uma função de transação deve ser contada seria a cobertura de casos de testes. Um único grupo de casos de testes indicaria que um único processo elementar foi alterado.

Freqüentemente a natureza de uma mudança é relatada pelo desenvolvedor, declarando que o único módulo que está sendo alterado é usado na produção de um grande número de relatórios ou extrações, ou no processamento de muitas transações de entrada. Todas as funções podem usar a rotina em comum, mas apenas um grupo dessas funções usa a edição que está sendo alterada nessa rotina em comum. Apenas as funções que incorporam a lógica de processamento alterada devem ser contadas como alteradas. O desafio reside na avaliação adequada do nível apropriado da mudança funcional. A ênfase deve ser nos requisitos de negócio, com o tamanho funcional do projeto de melhoria refletindo a intenção dos requisitos do usuário.

### Lógica de Processamento

*Lógica de processamento* é definida como qualquer um dos requisitos especificamente solicitados pelo usuário para completar um processo elementar como validações, algoritmos ou cálculos e leitura ou manutenção de uma função de dados. Estes requisitos podem incluir as seguintes ações:

1. Validações são efetuadas

   Por exemplo, na inclusão de um novo funcionário em uma organização, o processo de funcionário valida o DER empregado.

   - Se um requisito existe para executar uma validação diferente ou alterar a validação em uma função de transação existente, a transação, com o tamanho funcional alterado seria contada no projeto de melhoria.

2. Formulas matemáticas e cálculos são executados

   Por exemplo, quando relacionar todos os funcionários de uma organização, o processo inclui o cálculo do número total de funcionários assalariados, funcionários horistas e de todos os funcionários.

   - Se um requisito de negócio existe para modificar um cálculo existente (ex.: antes a fórmula era A + B = C e agora será C = A * B), a função que inclui esse cálculo seria contada com o tamanho funcional alterado no projeto de melhoria.
   - Atualmente existe uma lista de funcionários que é contada como uma CE. O requisito do projeto de melhoria determina mostrar um resumo da contagem de todos os funcionários. A transação deve ser identificada como alterada e o tipo de função deve ser alterado de uma CE para uma SE no projeto de melhoria.

3. Valores equivalentes são convertidos

   Por exemplo, a idade do empregado é convertido para uma faixa etária usando uma tabela.

   - Se um requisito de negócio existe para alterar uma funcionalidade para incluir a habilidade de converter o salário do empregado em uma faixa salarial, a função seria contada com o tamanho funcional alterado no projeto de melhoria.

4. Dados são filtrados e selecionados pela utilização dos critérios especificados para comparar vários grupos de dados

   Por exemplo, para gerar uma lista de funcionários por sua função, um processo elementar compara o número da função ao de uma função atribuída para o funcionário, para selecionar e relacionar os funcionários assinalados a estas funções.

   - Se um requisito existe para modificar o critério de seleção ou incluir um critério de seleção adicional, excluindo alterando ou incluindo valores, para uma transação existente (uma lista de funcionários agora precisa mostrar uma lista de funcionários que tenham sido nomeados para um cargo em menos de um ano), a transação, com o tamanho funcional alterado seria contada no projeto de melhoria.
   - Se um requisito existe apenas para alterar o(s) valor(es) de um critério existente, como selecionar um departamento diferente ou adicionar mais um departamento na lista de departamentos, então não tem contagem para a transação.
   - Se o requisito é para alterar o critério de seleção de um único departamento para uma lista de departamentos, isso seria contato com uma mudança.
   - Se um requisito existe para alterar a tela de pesquisa de funcionários para adicionar um filtro no local, esse filtro adicional não cria um novo processo elementar. Essa função é contada com o tamanho funcional alterado no projeto de melhoria.

5. Condições são analisadas para determinar quais são aplicáveis

   Por exemplo, a lógica de processamento é empregada por um processo elementar quando um funcionário é incluído dependerá se um funcionário é pago baseado em seu salário ou nas horas trabalhadas. A entrada dos DERs (e o resultado do processamento lógico) baseado em uma escolha diferente (salário ou horas trabalhadas) nesse exemplo é parte de um processo elementar.

   - Se um requisito existe para modificar a condição ou incluir condições adicionais em uma transação existente, a transação, com o tamanho funcional alterado seria contada no projeto de melhoria.

6. Um ou mais ALIs são atualizados

   Por exemplo, quando incluir um funcionário, o processo elementar atualiza o ALI funcionário para manter os dados do funcionário.

   - Se um requisito de negócio resulta na atualização de um ALI adicional ou diferentes DERs pela transação existente, a transação, com o tamanho funcional alterado seria contada no projeto de melhoria.

7. Um ou mais ALIs ou AIEs são referenciados

   Por exemplo, ao incluir um funcionário, o AIE "moeda" é referenciado para determinar o valor da hora do funcionário com a correta taxa de conversão para dólar.

   - Se um requisito de negócio referencia novos ALIs, AIEs ou DERs em uma transação existente, a transação afetada seria contada com o tamanho funcional alterado no projeto de melhoria.

8. Dados ou informações de controle são recuperados

   Por exemplo, para visualizar uma lista de empregados, as informações do empregado são recuperadas de uma função de dados.

   - Se um requisito de negócio estabelece a recuperação de informações adicionais em uma transação existente, a transação afetada seria contada com o tamanho funcional alterado no projeto de melhoria.

9. Dados derivados são criados pela transformação de dados existentes para criação de dados adicionais

   Por exemplo, para determinar (derivar) um número de registro do paciente (ex. SILJO01), o seguinte dado é concatenado:

   - as primeiras 3 letras do último nome do paciente (ex., SIL para Silva)
   - as primeiras 2 letras do primeiro nome do paciente (ex., JO para João)
   - um número seqüencial de dois dígitos (começando de 01)

   - Se o requisito de negócio resulta na mudança em como a transação deriva os dados, a transação afetada seria contada com o tamanho funcional alterado no projeto de melhoria.

10. O comportamento da aplicação é alterado

    Por exemplo, o comportamento do processo elementar de pagamento de funcionários é alterado quando uma mudança é feita para pagamentos toda a sexta-feira ao invés de pagamentos realizados no 15o. dia e no último dia do mês; resultando em 26 períodos de pagamento por ano ao invés de 24.

    - Se o requisito de negócio resulta na alteração do comportamento do sistema (ex.: no exemplo acima, a transação é alterada para que o parâmetro data de pagamento afete apenas os funcionários horistas e não a todos os funcionários), a transação afetada seria contada com o tamanho funcional alterado no projeto de melhoria.

11. Preparar e apresentar informações para fora da fronteira

    Por exemplo, uma lista de funcionários é formatada e exibida para o usuário.

    - Quando o requisito de negócio resulta na apresentação de DERs adicionais para fora da fronteira, a transação afetada seria contada com o tamanho funcional alterado no projeto de melhoria.
    - Mudanças em literais, formatos, cores e outros elementos da apresentação física não são considerados mudanças na lógica de processamento e portanto não fazem parte do tamanho funcional do projeto de melhoria.
    - Quando o requisito de negócio é enviar um arquivo de saída existente para uma aplicação diferente ou uma nova aplicação sem alterar de nenhuma forma o processamento lógico (ex.: critério de seleção, cálculos), não afeta o tamanho funcional do projeto de melhoria.
    - Rearranjar dados na tela, relatório ou arquivo exibindo elementos de dados existentes em uma nova posição não é considerado alteração na lógica de processamento e não é contada como uma melhoria.
    - Alterações nas características (ex.: tamanho, tipo, precisão, etc.) de um atributo cruzando a fronteira que deve ter uma mudança para outra forma de lógica de processamento (ex.: validações, cálculos) a ser contada.
    - Quando uma tela nova ou alterada requer uma ajuda adicional ou altera uma ajuda existente, a mudança na função Help não é contada porque é apenas inclusão ou atualização de texto ou valores.

12. Existe a capacidade de receber dados ou informações de controle que entram pela fronteira da aplicação

    Por exemplo, um usuário entra com informações para adicionar um pedido do cliente para a aplicação.

    - Quando o requisito de negócio resulta em diferentes DERs que entram pela fronteira, a transação afetada seria contada com o tamanho funcional alterado no projeto de melhoria.
    - Quando o requisito de negócio é para aceitar a entrada de um arquivo existente de uma aplicação adicional ou diferente sem mudanças em nenhuma lógica de processamento (ex.: validações, cálculos), não há impacto no tamanho funcional do projeto de melhoria.
    - Mudanças nas características (ex.: tamanho, tipo, precisão, etc.) de um atributo cruzando a fronteira deve ter mudanças para outra forma de lógica de processamento (ex.: validações, cálculos) para ser contado.

13. Classificando ou organizando um grupo de dados. Essa forma de lógica de processamento não impacta a identificação do tipo ou contribuição da singularidade do processo elementar; ou seja, a organização dos dados não constitui uma singularidade.

    Por exemplo, lista de empregados é classificada tanto por ordem alfabética quanto por ordem de local.

    Por exemplo, em uma tela de entrada de pedido, o cabeçalho com informações do pedido é exibido na parte de cima da tela, e os detalhes do pedido são exibidos abaixo.

    **Nota:** Alterações na seqüência de classificação normalmente são contadas. Alterações na organização por si só não são normalmente contadas.

    - Quando o requisito de negócio resulta na mudança da seqüência de reclassificação existente (ex.: o usuário solicita a lista de funcionários acima referenciada em ordem de localização, ao invés de em ordem alfabética), a transação afetada seria contada com o tamanho funcional alterado no projeto de melhoria.
    - Em uma tela de entrada de pedidos, o usuário solicita que as informações do cabeçalho do pedido sejam colocadas à esquerda das informações do detalhe do pedido ao invés de acima. Não há contagem para essa mudança.
    - O usuário solicita que o atributo Sobrenome na tela de Contratação de Empregado seja exibido a esquerda da inicial do nome do meio e do primeiro nome. Não há contagem para esse reposicionamento. Se o requisito é também para preencher os dados conforme o ultimo sobrenome digitado, então há uma mudança na lógica de processamento e a função de Contratação de Usuário é contada.
    - O usuário solicita um relatório adicional com os mesmos dados (lista de funcionários) classificados pela localização. Uma nova transação não deve ser contada, mas uma mudança na função existente seria incluída no tamanho funcional do projeto de melhoria.

Um processo elementar pode incluir diversas alternativas ou ocorrências das ações acima. Por exemplo: validações, filtros, reclassificações, etc.

## Considerações e Dicas

Muitos projetos de melhoria envolvem mudanças apenas na lógica de processamento sem mudanças físicas de entradas, saídas ou arquivos (ex.: atributos incluídos ou excluídos). A seguir estão itens ou questões que podem ser discutidas com os desenvolvedores durante a medição de melhoria para aplicações instaladas:

### Questões a Considerar num Projeto de Melhoria

As questões listadas abaixo podem ser usadas durante as entrevistas com os desenvolvedores ou especialistas de negócio durante as sessões de medição do tamanho funcional. Respostas positivas nas questões listadas abaixo indicam a possibilidade de mudanças na funcionalidade do usuário. Investigação adicional é necessária para determinar se e como elas afetariam o tamanho funcional.

**Quais funcionalidades NOVAS foram criadas aos usuários na aplicação?**

- Existe algum novo arquivo permanente do usuário, base de dados, tabelas, entidades ou objetos que foram desenvolvidos/criados neste projeto?
- A aplicação agora está recebendo e processando novas transações de entrada ou arquivos de entrada que não estavam antes em produção?
- Existe alguma nova tela sendo construída para o usuário?
- Existem novas interações (interfaces) com outras aplicações?
- A aplicação está gerando novas saídas, relatórios ou arquivos para outros sistemas?
- Existe algum tipo de registro novo que está sendo incluído em um arquivo de transação existente?
- Existe algum novo processo de consulta estabelecido pelo usuário?
- Existe algum processo batch sendo incluído?

**Quais funcionalidades do usuário foram ALTERADAS/MODIFICADAS para atender aos requisitos do usuário?**

- Existe algum arquivo permanente, base de dados ou tabelas existentes que tenham atributos ou colunas incluídas ou excluídas? Existem características de qualquer atributos ou coluna existente sendo modificados? Não deve ser contada a inclusão de novos valores ou novas linhas em atributos existentes de tabelas existentes.
- Existe alguma lógica de processamento sendo modificada, existente em telas de entradas ou em entradas recebidas via arquivos enviados pelos usuários ou por outras aplicações?
- Foi efetuada alguma alteração nas atuais telas de entrada ou em arquivos de transação vindos de outra aplicação (ex.: novos atributos, mudanças nos atributos dos atributos existentes)?
- Existe algum relatório do usuário, arquivos de saída ou telas existentes sendo modificadas pela inclusão ou exclusão de atributos?
- Existe algum relatório do usuário, arquivos de saída ou telas existentes sendo modificadas pela inclusão ou exclusão de campos?
- Para as saídas existentes, existe alguma alteração na lógica de processamento da geração destes arquivos, relatórios ou telas?
- Existe alguma tela de consulta sendo modificada?
- Foi feita alguma alteração na edição, nos critérios de seleção ou nos filtros associados às telas de consulta?
- Existe algum processo batch sendo alterado?

**Quais funcionalidades do usuário foram DELETADAS/EXCLUÍDAS devido a requisitos do usuário?**

- Quais funcionalidades do usuário foram excluídas da produção?
- Existe algum arquivo permanente que não é mais necessário?
- A aplicação parou de aceitar algum arquivo de entrada de outro sistema ou excluiu alguma tela antes acessada pelo usuário?
- Existe algum relatório sendo removido porque o usuário não precisa mais dele?
- Existe algum arquivo de saída para outro sistema sendo eliminado?
- Existe alguma consulta do usuário sendo excluída?
- Existe algum processo batch sendo excluído?

**Quais Funcionalidades de Conversão estão sendo fornecidas?**

- Existe algum processamento de dados executado uma única vez a ser criado para limpar dados, organizar ou popular novos atributos como resultado de modificações na estrutura em arquivos permanentes?
- Existe algum requisito para popular algum novo arquivo permanente?
- Existe alguma solicitação do usuário para conversão de relatórios?

**Quais outras mudanças estão sendo feitas na aplicação para este projeto?**

- Esta pergunta pode incentivar o especialista de negócios ou o pessoal de desenvolvimento através do fornecimento de dicas adicionais para as mudanças que podem ser contadas.

### Resumo das Considerações e Dicas

Estas diretrizes auxiliam na determinação das funcionalidades entregues pelo projeto e seu impacto no baseline da aplicação que está sendo medida. A combinação de novas funcionalidades incluídas, o efeito das mudanças feitas nas funcionalidades existentes e as funcionalidades excluídas devem ser utilizadas para medir o tamanho do Projeto de Melhoria, assim como para atualizar o baseline de Pontos de Função da aplicação.

## Informações para Medição de Projetos de Melhoria

Além da documentação identificada na Parte 2 Capítulo 3 Coletar Documentação Disponível, os seguintes itens também devem ser fornecidos para um projeto de melhoria:

- Documentação da Medição do Tamanho Funcional da Aplicação existente
- Requisitos do usuário de qualquer alteração/modificação da aplicação existente
- Layout das telas, relatórios e/ou diagrama de fluxo de dados das funções batch existentes para todas as funções afetadas, mostrando como elas eram ANTES do projeto de melhoria
- Layouts revisados das telas, relatórios e/ou diagrama do fluxo de dados das funções batch de todas as funções afetadas, mostrando como elas ficarão APÓS o projeto de melhoria
- Documentação de todas novas funcionalidades (novos relatórios, saídas, entradas de dados ou entidades) que serão incluídas na aplicação como parte do projeto de melhoria
- Layouts das telas, relatórios e/ou diagrama do fluxo de dados das funções batch que serão EXCLUÍDAS da aplicação como resultado do projeto de melhoria.

É reconhecido que, em muitos casos, a documentação listada acima pode não estar disponível ou não ser aplicável. A fonte de informação mais importante é o conhecimento do especialista da aplicação e a documentação dos requisitos.

Se o baseline de uma aplicação não existe, um cuidado deve ser tomado no estabelecimento da fronteira e na identificação das funções de dados e de transação.

## Procedimentos

Os passos a seguir são sugeridos para medir o tamanho funcional de um projeto de melhoria; no entanto, eles podem ser executados em qualquer ordem.

| Passo | Ação |
| --- | --- |
| 1 | Reúna e revise a documentação disponível. |
| 2 | Converse com o especialista de negócios para discutir as mudanças planejadas/executadas. |
| 3 | Identifique e avalie as funcionalidades incluídas. |
| 4 | Identifique e avalie as funcionalidades alteradas:<br>- Determine as complexidades das funções antes da alteração (a partir da documentação da última medição do tamanho funcional, ou meça como existiam antes da mudança).<br>- Determine as complexidades das funções depois da alteração. |
| 5 | Identifique e avalie as funcionalidades excluídas. |
| 6 | Identifique e avalie qualquer funcionalidade de conversão ou de execução uma única vez, solicitada para implementação desta melhoria. |

## Exemplo de Projetos de Melhoria

**Exemplo**

Esta seção mostra um exemplo de um projeto de melhoria. Os requisitos para o projeto de melhoria incluem as seguintes mudanças:

- O usuário precisa receber um relatório adicional sobre as funções que incluem totais.
- DERs adicionais são requeridos durante a inclusão de funções no modo batch e na correção de transações suspensas. Uma referência na segurança também é incluída na transação para inclusão de função.
- A função de Atribuição de Função deve verificar que tipo de função atribuída a um funcionário se iguala com a classificação do funcionário, que é mantido no sistema de Relações do Funcionário.
- O relatório de Funcionários por tempo na função deve ser alterado. Ao invés de exibir uma contagem de funcionários acima de 12 e 24 meses, o relatório deve agora mostrar apenas os funcionários assalariados.
- O usuário não precisa mais incluir uma função on-line; portanto esta funcionalidade deve ser ou foi excluída.

**Funcionalidade da Aplicação**

Os seguintes parágrafos explicam as funcionalidades da aplicação medidas para o exemplo de projeto de melhoria. As funcionalidades são descritas como incluídas, alteradas ou excluídas.

**Funcionalidades Incluídas**

A seguinte tabela mostra a complexidade funcional para as funcionalidades incluídas medidas quando o projeto foi entregue.

**Nota 1:** O fornecimento de um novo relatório é uma saída externa adicional.

**Nota 2:** Os dados do Sistema de Relações do Funcionário (RF) referenciado pela aplicação de RH é identificado como um AIE.

| Funções de Dados | RLRs | DERs | Complexidade |
| --- | --- | --- | --- |
| **Arquivo de Interface Externa** |  |  |  |
| Dados do Sistema RF | 1 | 2 | Baixa |

| Funções de Transação | ALRs | DERs | Complexidade |
| --- | --- | --- | --- |
| **Saída Externa** |  |  |  |
| Relatório da Função | 1 | 15 | Baixa |

**Funcionalidades Alteradas**

A seguinte tabela mostra a complexidade funcional para as funcionalidades alteradas e as funções ficarão depois que o projeto de melhoria estiver pronto.

**Nota 1:** A complexidade para a inclusão de uma função foi aumentada porque um novo tipo de arquivo é referenciado. A complexidade para a correção de transações suspensas permanece baixa.

**Nota 2:** Mesmo que um Tipo de Arquivo Referenciado adicional seja contado, não existe mudança na complexidade para a inclusão da atribuição da função pois ela já é Complexa.

**Nota 3:** Embora exista uma mudança no critério de seleção e na lógica de soma, não existe mudança na complexidade do relatório.

| Funções de Transação | ALRs | DERs | Complexidade |
| --- | --- | --- | --- |
| **Entrada Externa** |  |  |  |
| Inclusão das informações sobre funções (batch) | 3 | 8 | Alta |
| Correção de Transação Suspensa | 1 | 8 | Baixa |
| Inclusão da Atribuição da Função | 4 | 7 | Alta |
| **Saída Externa** |  |  |  |
| Tempo dos Funcionários na Atribuição | 3 | 7 | Média |

**Funcionalidades Excluídas**

A seguinte tabela mostra a complexidade funcional para as funcionalidades excluídas identificadas no final do projeto.

| Funções de Transação | ALRs | DERs | Complexidade |
| --- | --- | --- | --- |
| **Saída Externa** |  |  |  |
| Inclusão das informações sobre funções (tela) | 1 | 7 | Baixa |

## Contribuição da Aplicação ao Tamanho Funcional

Os parágrafos a seguir explicam a contribuição da funcionalidade de aplicação para o tamanho funcional total.

### Funcionalidades Adicionadas

A tabela a seguir mostra a contribuição para o tamanho funcional para as funcionalidades adicionadas identificadas no final do projeto.

| Tipo da Função |  | Complexidade Funcional |  | Totais por Complexidade | Totais por Tipo de Função |
| --- | --- | --- | --- | --- | --- |
| AIE | 1 | Baixa | X 5 = | 5 |  |
|  |  | Média | X 7 = |  |  |
|  |  | Alta | X 10 = |  |  |
|  |  |  |  |  | 5 |
| SE | 1 | Baixa | X 4 = | 4 |  |
|  |  | Média | X 5 = |  |  |
|  |  | Alta | X 7 = |  |  |
|  |  |  |  |  | 4 |

### Funcionalidades Alteradas

A tabela a seguir mostra a contribuição para o tamanho funcional das funcionalidades alteradas como passarão a existir após o projeto de melhoria ser concluído.

| Tipo da Função |  | Complexidade Funcional |  | Totais por Complexidade | Totais por Tipo de Função |
| --- | --- | --- | --- | --- | --- |
| EE | 1 | Baixa | X 3 = | 3 |  |
|  |  | Média | X 4 = |  |  |
|  | 2 | Alta | X 6 = | 12 |  |
|  |  |  |  |  | 15 |
| SE |  | Baixa | X 4 = |  |  |
|  | 1 | Média | X 5 = | 5 |  |
|  |  | Alta | X 7 = |  |  |
|  |  |  |  |  | 5 |

### Funcionalidades Excluídas

A tabela a seguir mostra a contribuição para o tamanho funcional das funcionalidades excluídas.

| Tipo da Função |  | Complexidade Funcional |  | Totais por Complexidade | Totais por Tipo de Função |
| --- | --- | --- | --- | --- | --- |
| EE | 1 | Baixa | X 3 = | 3 |  |
|  |  | Média | X 4 = |  |  |
|  |  | Alta | X 6 = |  |  |
|  |  |  |  |  | 3 |

## Cálculo Final

Usando a complexidade e contribuições desse exemplo, o tamanho funcional do projeto de melhoria é exibido abaixo.

```
EFP = ADD + CHGA + CFP + DEL
```

Onde

- EFP é a contagem de pontos de função do projeto de melhoria
- ADD é o tamanho das funções que estão sendo adicionadas pelo projeto de melhoria
- CHGA é o tamanho das funções sendo alteradas pelo projeto de melhoria – como elas são / serão após a implementação
- CFP é o tamanho das funcionalidades de conversão
- DEL é o tamanho das funções sendo excluídas pelo projeto de melhoria

```
EFP = 9 + 20 + 0 + 3
EFP = 32
```

## Tamanho Funcional Inicial da Aplicação

O tamanho funcional inicial da aplicação é exibido abaixo.

```
AFP = ADD
```

Onde

- AFP é a contagem de pontos de função da aplicação
- ADD é o tamanho das funções que serão entregues para o usuário pelo projeto de desenvolvimento (excluindo o tamanho de qualquer funcionalidade de conversão) ou a funcionalidade que sempre existiu quando a aplicação foi medida

```
AFP = 115
```

**Nota:** Apenas o tamanho das funcionalidades da aplicação instaladas para o usuário são incluídas no tamanho funcional inicial da aplicação.

## Tamanho Funcional da Aplicação Após a Melhoria

A medição do tamanho funcional da aplicação para refletir as melhorias é exibida abaixo.

```
AFPA = (AFPB + ADD + CHGA) - (CHGB + DEL)
```

onde

- AFPA é a contagem de pontos de função após o projeto de melhoria
- AFPB é a contagem de pontos de função antes o projeto de melhoria
- ADD é o tamanho das funções sendo adicionadas pelo projeto de melhoria
- CHGA é o tamanho das funções sendo alteradas pelo projeto de melhoria – como elas são / serão após a implementação
- CHGB é o tamanho das funções sendo alteradas pelo projeto de melhoria – como elas são / eram antes da implementação
- DEL é o tamanho das funções sendo excluídas pelo projeto de melhoria

```
AFPA = (115 + 9 + 20) - (18 + 3)
AFPA = 123
```

Algumas pessoas podem utilizar um valor de fator de ajuste (VAF), que considera as 14 características gerais do sistema (GSCs). Para orientações para utilizar do VAF e dos GSCs, consulte o Apêndice C.

## Considerações sobre Melhorias e Manutenções

Uma vez que uma aplicação foi desenvolvida e instalada, ela deve ser mantida (modificada) a fim de continuar satisfazendo às constantes necessidades de mudanças do negócio e do ambiente técnico. Esta manutenção inclui um grupo de atividades que são executadas durante esta fase do ciclo de vida da aplicação, algumas delas envolvem mudanças funcionais que se aplicam a APF.

### Categorias de Manutenção

O IEEE (Institute of Electrical and Electronics Engineers Inc.) define três categorias de manutenção:

**Manutenção Adaptativa:** Manutenção para fazer com que o software continue sendo utilizável em um ambiente alterado.

**Manutenção Corretiva:** Manutenção para corrigir falhas no hardware ou software.

**Manutenção Perfectiva:** Manutenção para melhorar a performance, facilidade de manutenção ou outros atributos do software instalado.

Enquanto este capítulo fornece dicas e diretrizes para contagem de Pontos de Função para melhorias em aplicações existentes, não existem padrões na indústria para classificação consistente de atividades que se enquadram nas categorias acima. Esta seção fornece uma estrutura de trabalho baseada na experiência comum da indústria através da qual se pode avaliar a aplicabilidade de APF no suporte a aplicações instaladas.

A ISO (International Organization for Standardization) e IEC (International Electrotechnical Commission) definem três categorias de manutenção:

**Manutenção Adaptativa**

A modificação de um sistema, realizada após a entrega, para manter um software utilizável em um ambiente alterado ou em alteração. Manutenção adaptativa fornece as melhorias necessárias para adaptar as modificações no ambiente em que o software deve funcionar. Essas mudanças são aquelas que devem ser realizadas para regular com o ambiente em alteração. Por exemplo, o sistema operacional deve ser atualizado e algumas alterações podem ser feitas para adaptar o novo sistema operacional. (ISO/IEC 14764:2006)

**Manutenção Corretiva**

A modificação reativa de um software realizada depois da entrega para corrigir problemas descobertos. A modificação corrige o software para satisfazer requisitos. (ISO/IEC 14764:2006)

**Manutenção Perfectiva**

Manutenção de um software após a entrega para detectar e corrigir falhas ocultas no software antes que elas se manifestem como falhas. Manutenção perfectiva fornece melhorias para o usuário, melhoria da documentação do programa, e recodificação para melhorar a performance, manutenção ou outros atributos do software. Contraste com: manutenção adaptativa; manutenção corretiva. (ISO/IEC 14764:2006)

Medição do tamanho funcional quantifica o tamanho dos requisitos de negócio. Em um ambiente de melhoria, mede os efeitos dessas mudanças nos requisitos de negócio. Portanto, medição do tamanho funcional é aplicável a um subconjunto de manutenções adaptativas. Isso inclui as funcionalidades do software adicionadas, alteradas ou excluídas bem como as funcionalidades do software fornecidas para converter dados e atender outros requisitos de conversão (ex.: relatórios de conversão).

É impraticável fornecer uma lista completa e abrangente de atividades de suporte e desenvolvimento. De certo modo, as seguintes áreas são identificadas como sugestões em relação à aplicabilidade da APF. É fortemente recomendado que cada organização desenvolva seu próprio guia com atividades, definições e terminologias específicas para a organização.

### Manutenção da Aplicação e Atividades de Suporte

Uma vez que as atividades de suporte e manutenção são assuntos para relatórios de inconsistência, diretrizes desenvolvidas localmente devem abordar estas áreas. A seguir estão algumas atividades mais comuns encontradas com sugestões de tratamento relativas à APF.

**Solicitações de Manutenção**

Independente da duração ou nível do esforço do trabalho solicitado, este é o tipo de atividade que determina como o trabalho é classificado. A APF não deve ser utilizada para medir trabalho de manutenção perfectiva ou corretiva. A manutenção corretiva deve ser contabilizada no projeto de desenvolvimento ou melhoria que introduziu o defeito. A manutenção perfectiva não deve ser contabilizada a nenhum projeto de desenvolvimento ou de melhoria.

Pode haver uma tendência em monitorar algumas funcionalidades de melhoria como trabalho de manutenção, mas este trabalho deve ser monitorado e reportado separadamente. A justificativa mais comum para inclusão é tanto para imediatismo ou para conveniência. Organizações freqüentemente fornecem uma forma mais rápida para pequenas solicitações de melhoria, normalmente 40 horas ou menos, a fim de reduzir o esforço de gerenciamento do projeto. Quando os requisitos de negócio são afetados, a APF deve ser aplicada para a medição dos resultados.

Se uma versão contém um misto de requisitos de manutenção adaptativa, corretiva e/ou perfectiva, deve ser tomado cuidado na separação do esforço de trabalho, uma vez que as últimas duas categorias não contribuem com Pontos de Função para o negócio. Embora a separação do esforço do trabalho possa ser relativamente fácil durante a fase de construção, dependendo do nível de detalhamento no controle do esforço, é normalmente mais difícil durante a maioria das fases finais de teste. Uma possível abordagem seria um rateio da versão inteira baseada no conteúdo proporcional.

Um projeto envolvendo apenas atualização de plataforma, linguagem, ou ambiente técnico, sem alteração nas funcionalidades do usuário, não deve ser submetido a uma medição do tamanho funcional da melhoria.

| Atividade | Dentro do escopo da contagem de melhoria |
| --- | --- |
| Correção de erros em Produção (Break/Fix) | Não |
| Manutenção perfectiva ou preventiva | Não |
| Atualização de plataforma, nova release do software do sistema | Não |
| Projeto tanto com melhorias e manutenções corretivas | Parcialmente |

**Solicitações Eventuais (Ad Hoc)**

Funcionalidades que são fornecidas ao usuário final na forma de relatórios de execução única ou eventual e extração de dados, são certamente contáveis. A decisão para contar deve ser feita baseada em se as funções serão mantidas e a necessidade de negócio que o tamanho funcional vai atender. Deve ser observado que esta discussão é limitada a relatórios ou extrações produzidas pela Área de Desenvolvimento e não cobre a geração de relatórios eventuais ou extrações criadas pelo Usuário. Deve ser observado que a metodologia utilizada para produzir um relatório eventual não é normalmente tão rigorosa quanto um projeto de melhoria. Portanto, um cuidado deve ser tomado ao comparar o custo relativo de um trabalho com aquele da atividade geral de melhoria.

| Atividade | Dentro do escopo da contagem de melhoria |
| --- | --- |
| Relatórios executados uma vez | Convenção local |
| Atualização de tabelas | Não |
| Configuração de tarefa (Job) | Não |
| Correção de Dados | Não |
| Mudanças em massa de dados | Sim - como conversão se associado ao projeto. |

**Suporte ao Usuário Final**

Qualquer esforço de trabalho extra-projeto relacionado a atividades classificadas como "não contáveis" devem ser contabilizados a uma classificação de trabalho que não seja de Novo Desenvolvimento ou de Melhoria. Para a Estimativa Preliminar ou Estudo de Viabilidade, o problema é que os requisitos do usuário ainda não estão bem definidos. Da mesma forma, um projeto neste estágio normalmente ainda não tem verba (e pode nunca ter). Na melhor das hipóteses, uma estimativa preliminar do tamanho em Pontos de Função pode ser determinada, mas nenhuma medida quantitativa deve ser aplicada neste ponto. Qualquer resultado obtido é apenas para propósito de orçamento e planejamento.

Geralmente atividades de suporte ao usuário extra-projeto, como uma resposta à pergunta "E se...?" e ajuda a usuários, não devem ser assuntos para APF.

| Atividade | Dentro do escopo da contagem de melhoria |
| --- | --- |
| Estimativa Preliminar e Estudo de Viabilidade | Na melhor das hipóteses, uma estimativa de ordem de grandeza |
| Respondendo "E se...?" | Não |
| Suporte Geral ao Cliente Extra-Projeto | Não |
| Suporte Help-desk | Parcialmente |

**Conclusão**

Este capítulo pretende apenas para fornecer diretrizes e não é para ser interpretado como um conjunto de regras absolutas. Exceções a estes cenários podem sempre ser encontradas. Cada caso deve ser avaliado baseado nos requisitos do usuário e situação do negócio. Adicionalmente, cada organização de TI tem suas atividades exclusivas e seus processos de desenvolvimento. Estes podem ser abordados em um Guia de Pontos de Função local, com direcionamento de todos os aspectos da APF, incluindo premissas da contagem e qualquer interpretação diferenciada das regras do CPM.

## Resumo

Enquanto a maioria dos recursos de Desenvolvimento de Aplicações de TI estão habitualmente dedicados ao suporte ou melhoria das aplicações existentes, a maioria dos exemplos da Parte 3 estão direcionados a novos desenvolvimento. Este capítulo fornece diretrizes para o que contar e compreensão do processo de identificação em um ambiente de melhoria.

O primeiro passo é identificar corretamente as Funções de Dados e de Transação que devem ser incluídas, alteradas ou excluídas baseadas nos requisitos do usuário. Para modificações, a mais freqüente área observada são mudanças envolvendo apenas lógica de processamento interna. A Parte 1 inclui definições de lógica de processamento que são úteis na identificação de modificações nas funções de transação que devem ser contadas. Por último, cada Função de Dados e de Transação deve ser contada de acordo com as regras da Parte 1.

Também é importante separar as diferentes manutenções e atividades de suporte e seus esforços associados conforme discutido na Seção de Considerações sobre Manutenção e Melhoria.
