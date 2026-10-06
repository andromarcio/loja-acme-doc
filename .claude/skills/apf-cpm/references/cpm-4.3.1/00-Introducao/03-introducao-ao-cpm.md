# Introdução ao Manual de Práticas de Contagem

> Introdução ao CPM (páginas iniciais) · CPM v4.3.1

**Introdução**

Esta introdução define os objetivos do manual e o processo de revisão. Também descreve publicações que estão relacionadas a este manual.

**Conteúdo**

Este capítulo inclui as seguintes seções:

| Tópico | Página |
| --- | --- |
| Objetivos do Manual de Práticas de Contagem | vii |
| Documentos Utilizados na *Release* 4.3 | viii |
| Público-Alvo | vii |
| Organização do Manual de Práticas de Contagem | xi |
| Processo de Revisão Manual | xi |
| Freqüência das Mudanças | xii |
| Processo de Mudança | xii |
| Documentação Associada do IFPUG | xv |
| Requisitos de Treinamento | xvii |

## Objetivos do Manual de Práticas de Contagem

Os principais objetivos do *IFPUG Counting Practices Manual, Release 4.3*, são

- Manter conformidade com a norma ISO/IEC 14143-1:2007 *Information technology – Software measurement – Functional size measurement – Definition of concepts*
- Prover uma descrição clara e detalhada da contagem de pontos de função
- Garantir que as contagens sejam consistentes com as práticas de contagem dos *affiliates* do IFPUG
- Fornecer um guia para permitir a contagem de pontos de função a partir dos entregáveis das metodologias e técnicas mais conhecidas
- Prover um entendimento comum para permitir que os fornecedores de ferramentas forneçam suporte automatizado para a contagem de pontos de função

## Documentos Utilizados na *Release* 4.3

A seguinte documentação foi utilizada para desenvolver esta *release*:

- O método de APF do IFPUG está baseado no "*IBM CIS & A Guideline 313, AD/M Productivity Measurement and Estimate Validation*", datado de 1 de Novembro de 1984. A metodologia de contagem de pontos de função descrita em 313 é geralmente referenciada como Albrecht 1984.
- A versão atual deste manual, CPM 4.3, está baseada principalmente no *IFPUG Function Point Counting Practices Manual, Release 4.2.1*.
- O CPM 4.3 foi projetado para manter conformidade com a ISO/IEC 14143-1:2007 *Information technology – Software measurement – Functional size measurement – Definition of concepts*.
- "*Framework for Functional Sizing*"; este documento do IFPUG explica que o tamanho do produto possui três dimensões: tamanho funcional, tamanho técnico e tamanho de qualidade. O método de APF do IFPUG fornece uma medida para o tamanho funcional.
- As questões não suficientemente cobertas nas fontes listadas acima foram decididas pelo Comitê de Práticas de Contagem do IFPUG, com base nas variações das práticas de contagem existentes e validadas através de estudos de impacto.

A partir de sua publicação, este manual deve ser considerado o padrão do IFPUG para a contagem de pontos de função. É imperativo que cada membro do IFPUG assuma um papel ativo para garantir a consistência nas contagens. A aderência dos filiados do IFPUG a este padrão em muito contribuirá para a consistência das contagens.

## Público-Alvo

O padrão contido neste manual deve ser aplicado por qualquer pessoa que utilize a análise de pontos de função para medição do tamanho funcional. Este manual foi elaborado para ser utilizado tanto por iniciantes na contagem de pontos de função, assim como por aqueles com experiência intermediária ou avançada.

## Organização do Manual de Práticas de Contagem

Há cinco partes principais no Manual de Práticas de Contagem (CPM):

- Parte 1: FSM-O método de medição de tamanho funcional do IFPUG
- Parte 2: A Transição – Aplicando o Método de Medição de Tamanho Funcional do IFPUG
- Parte 3: Práticas de Contagem
- Parte 4: Exemplos
- Parte 5: Apêndices e Glossário

**Parte 1 – FSM**

A Parte 1 é o método de medição de tamanho funcional do IFPUG, contendo as respectivas regras. Não é suficiente aprender somente as palavras e a gramática para falar um idioma como um nativo. Tais elementos fornecem apenas uma estrutura de referência. É necessária experiência com o idioma para entender como o mesmo é falado na prática, como devem ser aplicadas as regras gramaticais, quais expressões idiomáticas são comuns e assim por diante. O mesmo raciocínio é verdadeiro para a APF. É necessário o conhecimento do processo e das regras, conforme exposto na Parte 1, mas tal conhecimento não constitui condição suficiente para a correta aplicação da APF. É por isso que o CPM contém as partes abaixo.

**Parte 2 – A Transição**

A Parte 2 provê orientação para o dimensionamento de software segundo o método de medição funcional do IFPUG (FSM), incluído como Parte 1 deste Manual de Práticas de Contagem do IFPUG.

**Parte 3 – Práticas de Contagem e Parte 4 - Exemplos**

As Partes 3 e 4 fornecem exemplos detalhados para explicar os conceitos e regras das práticas de contagem. Cada exemplo deve ser considerado separadamente e por seus próprios méritos. Como a intenção de cada exemplo é ilustrar um cenário específico, podem existir variações entre os exemplos. Embora os exemplos constantes do manual lidem com assuntos similares, os mesmos não pretendem representar um único conjunto de requisitos do usuário.

**Parte 5 – Apêndices e Glossário**

A Parte 5 contém valiosas informações adicionais, tais como *templates* de cálculo prontos para uso, a transição do CPM 4.2 (e CPM 4.2.1) para o CPM 4.3, as Características Gerais dos Sistemas e o glossário.

A princípio, cada parte é independente das demais.

## Processo de Revisão do Manual

Esta seção explica a frequência das mudanças no Manual de Práticas de Contagem e define o processo de mudança.

## Frequência das Mudanças

No mês de janeiro de cada ano uma nova versão do Manual de Práticas de Contagem *pode* entrar em vigor. A mesma incluirá definições, regras ou práticas de contagem, novas ou alteradas, que tenham sido concluídas pelo Comitê de Práticas de Contagem (CPC) desde a versão anterior.

## Processo de Mudança

As atividades seguintes esboçam o processo para a inclusão ou alteração de informações no Manual de Práticas de Contagem. Explicações sobre cada atividade seguem-se à tabela.

| Passo | Ação |
| --- | --- |
| 1 | A questão é submetida ao CPC. |
| 2 | A questão é designada para pesquisa. |
| 3 | O CPC revisa e discute a questão. |
| 4 | O CPC apresenta uma solução proposta aos filiados do IFPUG. |
| 5 | Um estudo de impacto é iniciado caso a mudança proposta tenha algum impacto sobre as contagens existentes. |
| 6 | É tomada a decisão final. |
| 7 | Os filiados ao IFPUG são informados da decisão. |
| 8 | As mudanças são incluídas e entram em vigor na *release* seguinte do Manual de Práticas de Contagem. |

**Questão Submetida**

O leitor submete idéias, mudanças, ou questões ao Comitê de Práticas de Contagem, enviando um e-mail para ifpug@ifpug.org ou cpc@ifpug.org

**Pesquisa Designada**

Um membro do CPC recebe a responsabilidade de identificar todas as alternativas, a *racional* e o impacto potencial de cada alternativa se implementada. Por ocasião do levantamento de alternativas é efetuado um exame completo de todos os padrões de contagem e artigos históricos existentes. Adicionalmente, é realizado um esforço para determinar o que se acredita ser a *prática comum*.

**Revisão do CPC**

O CPC revisa e discute a *racional* para cada alternativa e seu impacto potencial. A revisão e discussão pode resultar em uma proposta de mudança, ou as mesmas podem levar o comitê a rejeitar a solicitação de mudança.

**Solução Proposta**

Uma proposta de solução é submetida aos filiados ao IFPUG, sendo solicitados comentários por escrito.

Um cópia das mudanças propostas é enviada aos contatos junto ao IFPUG das organizações filiadas. A proposta também pode ser anunciada e distribuída durante uma conferência do IFPUG. Esta última alternativa depende da época da reunião do comitê e não da programação da conferência.

**Estudo de Impacto Iniciado**

O CPC tem adotado uma postura conservadora quanto ao início de estudos de impacto. Se for possível que uma *prática comum* tenha que ser modificada, ou que várias organizações ou tipos de aplicação sejam impactados pela mudança, um estudo de impacto é iniciado.

O sucesso do estudo de impacto é responsabilidade de cada filiado ao IFPUG. Se o CPC receber *feedback* escrito indicando que há pouco ou nenhum impacto, o estudo será descontinuado.

**Decisão Final Tomada**

O comitê toma uma decisão final utilizando resultados da pesquisa, comentários escritos dos filiados e o estudo de impacto.

O comitê pode efetuar mais de uma iteração dos Passos 2 a 5 (da pesquisa ao estudo de impacto) antes de tomar uma decisão final. A decisão final pode resultar em uma mudança, ou o comitê pode decidir que não há razão para mudança.

**Decisão Comunicada**

A decisão final é comunicada por escrito aos filiados ao IFPUG, através dos contatos junto ao IFPUG existentes nas diversas organizações.

Se algum resultado do estudo de impacto houver contribuído para a decisão, os resultados e uma recomendação sobre como minimizar o impacto da mudança também serão comunicados.

**Data de Vigência da Decisão**

O Manual de Práticas de Contagem será atualizado a fim de incluir as decisões. A data de vigência das decisões será a data da próxima *release* do manual no mês de janeiro subsequente.

## Documentação Relacionada do IFPUG

Este Manual de Práticas de Contagem é um módulo na documentação do IFPUG. Todos os documentos se complementam.

A tabela seguinte descreve as outras publicações

| Documento | Descrição |
| --- | --- |
| Folheto do IFPUG<br>(disponível) | Esta publicação é uma introdução ao *International Function Point Users Group*. Inclui um breve histórico da organização, introduz a análise de pontos de função e define o objetivo do IFPUG. O folheto também inclui uma solicitação de filiação.<br>Público-alvo: Esta publicação destina-se a qualquer pessoa que deseje ter uma visão geral do IFPUG, ou que deseje se associar. |
| IFPUG: Estrutura Organizacional e Serviços<br>(disponível) | Esta publicação descreve os serviços do IFPUG, lista o quadro de diretores, comitês e organizações filiadas ao redor do mundo.<br>Público-alvo: Esta publicação destina-se a qualquer pessoa que deseje informações sobre o IFPUG. |
| Guia para a Medição de Software<br>(Data de Publicação: agosto de 2004) | Este manual fornece uma visão geral das métricas de software para as organizações que estejam trabalhando na criação ou melhoria de programas de medição de software. O manual aborda o gerenciamento de sistemas e de clientes, fornece justificativas de alto nível para a medição de software e examina os componentes dos programas de medição eficazes.<br>Público-alvo: Este manual é direcionado a filiados ao IFPUG, Coordenadores de Pontos de Função, pessoas que preparam relatórios para a gerência e outros com conhecimento e que trabalham diretamente com pontos de função. |
| Guia Rápido de Referência de Contagem<br>(Data de Publicação: Janeiro de 2004) | Este guia rápido de referência é um resumo das regras e procedimentos da contagem de pontos de função.<br>Público-alvo: Este resumo é destinado a qualquer pessoa que esteja aplicando a análise de pontos de função. |
| Guia Rápido de Referência de Contagem – Tamanho Ajustado<br>(Data de Publicação: 2010) | Este guia rápido de contagem é um resumo das Características Gerais dos Sistemas.<br>Público-alvo: Este guia é destinado a qualquer pessoa que esteja utilizando as Características Gerais dos Sistemas, que são de uso opcional. |
| Estudos de Caso de Análise de Pontos de Função<br>(Datas das Publicações:<br>Estudo de Caso 1, Versão 3.0: Setembro de 2005 – CPM 4.2<br>Estudo de Caso 2, Versão 3.0: Março de 2006 – CPM 4.2<br>Estudo de Caso 3, Versão 2.0: Setembro de 2001 – CPM 4.1<br>Estudo de Caso 4, Versão 2.0: Setembro de 2005 – CPM 4.2) | Os estudos de caso ilustram as principais técnicas de contagem que constituem o Manual de Práticas de Contagem de Pontos de Função. Os casos ilustram contagens de pontos de função para uma aplicação exemplo. Incluem a contagem que ocorre ao final da fase de análise do desenvolvimento de software e depois da construção do sistema.<br>Público-alvo: Os estudos de caso destinam-se a pessoas iniciantes na análise de pontos de função, bem como àquelas com experiência intermediária e avançada. |
| Glossário do IFPUG<br>(Disponível com o CPM e com o Guia para a Medição de Software) | Este é um glossário completo, que define os termos usados pelas publicações do IFPUG.<br>Público-alvo: O glossário é recomendado para qualquer pessoa que receba algum outro documento do IFPUG, ou qualquer pessoa que precise das definições dos termos do IFPUG. |
| "A Framework for Functional Sizing", IFPUG, Setembro de 2003 | Este documento explica que o tamanho do produto contém três dimensões: tamanho funcional, tamanho técnico e tamanho de qualidade. O método de APF do IFPUG fornece uma medida para o tamanho funcional. |
| "IT Measurement: Practical Advice from the Experts", Addison-Wesley, Abril de 2002 | Este livro é uma excelente compilação de artigos escritos por especialistas no campo da Tecnologia da Informação. Foi compilado pelo IFPUG para incluir o pensamento recente quanto à aplicação de métricas de software na prática. |

## Requisitos de Treinamento

As avaliações de usabilidade desta publicação verificaram que apenas a leitura do Manual de Práticas de Contagem não constitui treinamento suficiente para a aplicação da contagem de pontos de função no nível ótimo. O treinamento é recomendado, especialmente para os iniciantes na contagem de pontos de função.

**Nota:** No treinamento em pontos de função, esteja certo de que você seja treinado utilizando materiais certificados pelo IFPUG. Ligue para o Escritório Executivo do IFPUG em 0XX 1 609-799-4900 para obter uma lista de instrutores com cursos certificados.

Além das informações específicas sobre pontos de função, este manual inclui a utilização de termos da análise e projeto estruturados, tais como sistemas de negócio e entidade. O glossário inclui definições desses termos, mas o Manual de Práticas de Contagem não inclui explicações detalhadas das técnicas de análise e projeto estruturados. Dessa forma, nem todo o material será aplicável ou útil se você não tiver sido treinado nas técnicas de análise e projeto estruturados.
