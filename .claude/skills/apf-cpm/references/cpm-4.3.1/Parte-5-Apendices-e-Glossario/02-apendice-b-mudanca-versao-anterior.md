# Apêndice B — A Mudança em Relação à Versão Anterior

> Parte 5 — Apêndices e Glossário · CPM v4.3.1

**Introdução**

Este apêndice inclui informações sobre as mudanças e melhorias incluídas no CPM 4.3, o processo de tomada de decisão e recomendações para os usuários do novo manual.

**Conteúdo**

Este capítulo inclui o seguinte:

| Tópico | Página |
|---|---|
| Introdução | B-2 |
| Áreas das principais mudanças de estrutura do CPM 4.3 | B-3 |
| Controle de Versão | B-3 |
| Visão geral das mudanças | B-4 |
| Background | B-12 |
| Estudo de Impacto | B-12 |
| Conversão do CPM 4.2 para o 4.3 | B-12 |
| Impacto nos Usuários do 4.2.1 mudando para o 4.3 | B-14 |
| Recomendações | B-14 |

## Introdução

Desde a versão do Manual de Práticas de Contagem do IFPUG (CPM) 4.2 em 2004, o Comitê de Práticas de Contagem (CPC) criou a nova versão da Parte 1 (regras) para substituir o padrão ISO (ISO 20926:2004); isto é, o IFPUG CPM 4.1 não ajustado. A criação do novo padrão ISO exigiu mudanças no texto das demais partes (o guia de implementação) para manter a consistência.

O processo do CPC de revisão do CPM é o seguinte:

1. A edição é submetida ao CPC pelos membros.
2. A edição é designada aos membros CPC para pesquisa.
3. O CPC revisa e discute a edição.
4. O CPC apresenta a solução proposta para os membros.
5. Um estudo de impacto é iniciado.
6. A decisão final é tomada.
7. Os membros do IFPUG são informados da decisão por meio da publicação MetricViews e apresentações nas conferências do IFPUG.
8. As mudanças tornam-se efetivas em um novo CPM.
9. Os estudos de casos são revisados para refletir o novo CPM.

## Áreas das principais mudanças de estrutura do CPM 4.3

As áreas das principais mudanças de estrutura do CPM 4.3 são:

- Substituir a Parte 1 existente pela Parte 1 com o novo padrão ISO (ISO/IEC 20926:2010)
- Criar a Ponte – Aplicando Método de Tamanho Funcional do IFPUG (agora Parte 2) que provê um guia na aplicação do processo e regras, tal como definido no Padrão ISO (agora Parte 1)
- Aperfeiçoar as partes restantes a fim de ficarem consistentes com a Parte 1 revisada
  - Práticas de Contagem (Parte 3)
  - Exemplos (Parte 4)
  - Apêndices e Glossário (Parte 5)

![Diagrama comparando a estrutura do CPM 4.2 (Parte 1: Processos e Regras; Parte 2: Práticas de Contagem; Parte 3: Exemplos; Parte 4: Apêndices e Glossário) com a estrutura do CPM 4.3 (Parte 1: Processos, Regras e Definições (FSM do IFPUG); Parte 2: Aplicando o FSM do IFPUG; Parte 3: Práticas de Contagem; Parte 4: Exemplos; Parte 5: Apêndices e Glossário), com as Partes 2 a 5 do 4.3 agrupadas como Guia de Implementação](images/p506-estrutura-cpm42-cpm43.png)

## Controle de Versão

O CPC escolheu dar o nome IFPUG CPM 4.3 a esta versão, ao invés de 4.2.2 ou 5.0 por duas razões:

- Uma versão com nome de 4.2.2 poderia sugerir que apenas a grafia foi corrigida; versão 4.3 chama mais atenção para a Parte 1 reescrita.
- Uma versão com nome de 5.0 poderia sugerir uma mudança das regras principais. O CPM 4.3 ainda é uma evolução da metodologia de Albrecht que forma a base de todas as versões anteriores do CPM do IFPUG. Esta versão provê esclarecimento adicional das versões anteriores.

## Visão geral das mudanças

Além de substituir a Parte 1 existente com o padrão ISO, outros pequenos esclarecimentos foram incluídos no CPM 4.3. Para facilitar usuários que desejam alinhar seu CPM atual escrito em uma língua estrangeira, todas as mudanças foram listadas abaixo.

### Parte 1: Processo e Regras

A fim de manter o guia de implementação do método FSM do IFPUG com o Padrão ISO revisado (ISO/IEC 14143-1:2007), parte da terminologia teve que ser revisada. As regras e diretrizes permanecem essencialmente inalteradas; contudo, a seqüência de ações e a redação foi ligeiramente alterada. Não se deve supor que o tamanho funcional seja alterado. Todos os capítulos na Parte 1 (agora Parte 2) incluem alterações de redação, exemplos adicionais e orientação a fim de ser consistente e adequado ao Padrão ISO de FSM atualizado, que foi lançado em 2007 e é agora a Parte 1. As CGSs e o Fator de Ajuste foram retirados desta parte e estão incluídos nos apêndices a fim de se adequar ao Padrão ISO de FSM, que não os reconhece como parte do FSM. Detalhes adicionais são indicados abaixo, por capítulo.

#### Parte 1, Capítulo 1: Introdução

O título deste capítulo foi alterado para “A Ponte – Aplicando o Método de Medição de Tamanho Funcional do IFPUG”. O capítulo 1 contem apenas uma Introdução; as mudanças que refletem o conteúdo dos demais capítulos estão na nova Parte 2.

#### Parte 1, Capítulo 2: Visão Geral da Análise de Pontos de Função

O título deste capítulo foi alterado para “Visão Geral do Método FSM do IFPUG”. Houve uma alteração extensiva da redação a fim de ser consistente e em conformidade com o Padrão ISO de FSM atualizado. As seguintes definições e regras foram ligeiramente reescritas:

O diagrama de processo e diretrizes neste capítulo foram alterados para refletir que o primeiro passo no processo de contagem de pontos de função é obter a documentação disponível, de acordo com o Padrão ISO de FSM.

O tamanho funcional agora representa o tamanho do software obtido pela quantificação dos requisitos funcionais do usuário, substituindo o termo “pontos de função não ajustados”. Qualquer discussão sobre “não-ajustado” ou “ajustado” está agora incluída no apêndice a fim de se adequar ao padrão ISO de FSM, que não reconhece as CGSs ou o VAF como parte do FSM.

#### Parte 1, Capítulo 3: Visão do Usuário

O título deste capítulo foi alterado para “Obter a documentação disponível”. Este capítulo apresenta o conceito de papel do usuário e a abordagem de medição durante o ciclo de vida de uma aplicação; contudo, virtualmente todo o capítulo permanece inalterado exceto pelo título.

#### Parte 1, Capítulo 4: Determinar o Tipo de Contagem

O título deste capítulo foi alterado para “Determinar o Tipo de Contagem”. Foi revisada a redação para as definições de contagem de pontos de função de projeto de desenvolvimento, contagem de pontos de função de projeto de melhoria e contagem de pontos de função de aplicação, para ser consistente e adequado ao Padrão ISO de FSM atualizado.

#### Parte 1, Capítulo 5: Identificar o Escopo da Contagem e Fronteira da Aplicação

O título deste capítulo foi alterado para “Determinar o Escopo da Contagem e a Fronteira e Identificar os Requisitos Funcionais do Usuário”. Há algumas pequenas alterações de redação a fim de ser consistente e adequado ao Padrão ISO de FSM atualizado, mas a grande maioria do capítulo permanece inalterada.

#### Parte 1, Capítulo 6: Contar Funções de Dados

O título deste capítulo foi alterado para “Medir Funções de Dados” para refletir que as regras estão realmente contidas na nova Parte 1 e para refletir que este capítulo provê orientações de implementação para medir Funções de Dados. As regras contidas são repetidas da Parte 1 para facilitar a utilização, e evitar a necessidade de folhear as partes adiante e anteriores.

#### Parte 1, Capítulo 7: Contar Funções de Transação

O título deste capítulo foi alterado para “Medir Funções de Transação” para refletir que as regras estão realmente contidas na nova Parte 1, e para refletir que este capítulo provê orientações de implementação para medir Funções de Transação. Tal como no Capítulo 6, as regras contidas são repetidas da Parte 1 para facilitar a utilização, e evitar a necessidade de folhear as partes adiante e anteriores. Itens específicos incluem:

- Orientação adicional e esclarecimento sobre as regras do FSM para processos elementares
- Regras simplificadas para DER e ALR

#### Parte 1, Capítulo 8: Determinar o Fator de Ajuste

O conteúdo completo deste capítulo foi movido para o Apêndice C a fim de alinhar o Guia de Implementação com o FSM do IFPUG que não inclui as CGSs e o VAF.

#### Parte 1, Capítulo 9: Calcular a Contagem de Pontos de Função Ajustada

As fórmulas previamente contidas neste capítulo foram movidas para o Apêndice C e Parte 3 Capítulo 4 Melhoria e Atividade de Manutenção, a fim de alinhar o Guia de Implementação com o FSM do IFPUG, que não inclui as CGSs e o VAF.

### Parte 2: Práticas de Contagem

Todos os capítulos na Parte 2 (agora Parte 3) incluem pequenas alterações de redação a fim de manter a consistência com a reorganização da Parte 1 e /ou manter a conformidade com o Padrão ISO de FSM atualizado. Um novo capítulo (Capítulo 5) foi acrescentado para prover compreensão clara da atividade de contagem de Conversão de Dados. Detalhes adicionais estão indicados por capítulo abaixo.

#### Parte 2, Capítulo 1: Dados de Código

A APF do IFPUG está em conformidade com o Padrão ISO FSM. A decisão de não contar Dados de Código e de e criar o capítulo Dados de Código na Parte 2 do CPM 4.2 teve origem nos requisitos do Padrão ISO de FSM (ISO/IEC 14143-1:1998) de não contar requisitos técnicos e de qualidade.

Em 2007, a ISO publicou uma nova versão da FSM Padrão (ISO/IEC 14143-1:2007). Conseqüentemente, o capítulo Dados de Código precisou ser atualizado para refletir as alterações de redação no Padrão ISO de FSM.

Não há alterações nas regras nem nas orientações deste capítulo, mas há pequenas alterações de redação para manter a conformidade com o Padrão ISO de FSM atualizado.

- Incluída a definição ISO de Tamanho Funcional
- Atualizada a definição Requisitos Funcionais do Usuário
- Substituídos os termos Requisitos de Qualidade e Requisitos Técnicos pelo termo ISO Requisitos Não-Funcionais do Usuário e incluída a definição ISO para este conceito
- A seção Metodologia foi ligeiramente reescrita para refletir as mudanças no passo “Identificar Arquivos Lógicos” no Capítulo 2: Arquivos Lógicos abaixo.

#### Parte 2, Capítulo 2: Arquivos Lógicos

Este capítulo foi criado no CPM 4.2 para prover práticas de contagem e orientação adicional na identificação e avaliação de Arquivos Lógicos.

No CPM 4.3, a Parte 1 foi substituída pelo padrão ISO de APF do IFPUG

Algumas alterações para o padrão ISO de FSM têm conseqüência (pequena) no capítulo Arquivos Lógicos:

- No processo de identificação de Arquivos Lógicos, o passo1 anterior (“Remoção de Dados de Código antes da avaliação dos Arquivos Lógicos”) tornou-se agora parte do passo1 “Identificar Arquivos Lógicos”, que é o local mais adequado.
- Além disto, o passo 2 anterior (“Identificar Arquivos Lógicos e Classificar”) foi decomposto em dois passos “1. Identificar Arquivos Lógicos” e “2. Classificar Arquivos Lógicos”
- Passos 3 e 4 (identificando RLRs e DERs) foram inter-cambiados
- Os subpassos do passo1 tornaram-se melhor visualizados, através da denominação efetiva dos mesmos como sub-passos.

Estas alterações na estrutura têm algumas conseqüências (pequenas) na estrutura do capítulo Arquivos Lógicos.

Isto é particularmente verdade para o intercambio dos passos Identificando DERs e Identificando RLRs, e tornou necessário o intercambio das páginas relacionadas a estes passos. Isto também foi necessário para combinar as tabelas “Considerando Registros Lógicos Referenciados em conjunto com Arquivos Lógicos via (In-) Dependência de Entidade” (CPM 4.2, página 2-34) e “Considerando Dados Elementares Referenciados em conjunto com Arquivos Lógicos via (In-) Dependência de Entidade” (CPM 4.2, página 2-46) em uma nova tabela “Considerando Registros Lógicos Referenciados e Dados Elementares Referenciados em conjunto com Arquivos Lógicos via (In-) Dependência de Entidade”

Há ligeiras alterações de redação para adequação ao padrão ISO de FSM atualizado (ISO/IEC 14143-1:2007) tal como explicado em mais detalhes na seção acima, dedicada a Parte 2, Capítulo 1 Dados de Código.

Requisitos de Qualidade e Requisitos Técnicos foram substituídos pelo novo termo ISO Requisitos Nâo-Funcionais do Usuário.

Não se deve supor que, nenhuma destas alterações na estrutura e redação tenha qualquer influência no resultado de qualquer contagem.

#### Parte 2, Capítulo 3: Dados Compartilhados

Este capítulo foi criado no CPM 4.2 para prover práticas de contagem e orientação adicional na identificação e avaliação de dados compartilhados entre aplicações.

As únicas alterações neste capítulo foram duas referências a outras partes do CPM, que agora são diferentes.

#### Parte 2, Capítulo 4: Projetos de Melhoria e Atividades de Manutenção

Este capítulo foi criado no CPM 4.2 para prover práticas de contagem e orientação adicional na aplicação da Análise de Pontos de Função para atividades pós desenvolvimento. A contagem de projetos de melhoria, apresentada antes, na Parte 1, Capítulo 9 do CPM 4.1, é agora inteiramente contemplada (incluindo fórmulas aplicáveis) neste capítulo.

Alem das atualizações de referências a outras partes do CPM, as definições e exemplos primários para cada uma das formas de lógica de processamento foram ajustados para serem consistentes com os da nova Parte 2. Termos foram ajustados para consistência com as Partes 1 e 2, como por exemplo, alteração de “campo” para “atributo”.

Alterações específicas na seção Lógica de Processamento neste capítulo incluem o seguinte:

3. Valores Equivalentes: Exemplo alterado em resposta aos comentários do Bulletin Board do IFPUG.
4. Dados são Filtrados: Exemplo existente modificado para excluir a contagem de uma mudança envolvendo apenas a substituição ou adição de valores, e acrescentados três novos exemplos em resposta aos comentários do Bulletin Board do IFPUG.

11. Preparar e apresentar informações para fora da fronteira: Acrescentados três novos exemplos para refletir as respostas do CPC aos comentários do Bulletin Board do IFPUG.
12. Aceitar informações que entram pela fronteira: Acrescentados dois novos exemplos para refletir as respostas do CPC aos comentários do Bulletin Board do IFPUG.
13. Classificação (Dados são re-classificados ou re-arranjados): Acrescentados dois novos exemplos para refletir as respostas do CPC aos comentários do Bulletin Board do IFPUG.

Em Considerações e Dicas, foi incluída discussão relativa a Funções excluídas, e as dicas sobre CGSs foram movidas para o Apêndice C, onde as CGSs e VAF opcionais são contemplados.

Na seção Melhoria versus Manutenção, qualquer referência as CGSs foi precedida com “opcional”.

#### Parte 2, Capítulo 5: Atividade de Conversão de Dados (novo capítulo)

Este novo capítulo contempla a funcionalidade a ser avaliada quando existem requisitos para migrar ou converter dados em conjunto com o novo desenvolvimento ou projeto melhoria, ou para migrar uma aplicação para uma plataforma diferente. A Parte 4 do CPM provê outros exemplos de Funções de Dados e de Funções de Transação para conversão de dados.

### Parte 3: Exemplos

Em todos os capítulos na Parte 3 (agora Parte 4) foram feitas revisões nos quadros de regras nesta seção para estar consistente com as alterações de redação nas regras de funções de dados, processo elementar e função de transação. Detalhes adicionais são indicados por capítulo abaixo.

#### Parte 3, Capítulo 1: Exemplos de Contagem de Funções de Dados

- Exemplo de ALI: Dados de Auditoria para consulta e Relatórios – Removidas referências a Manutenção de Segurança do Funcionário do Diagrama de Fluxo de Dados, pois estava confuso e não explicado adequadamente
- Exemplo de ALI: Definição de relatório – Adicionada explicação esclarecendo porque a Definição de relatório não é uma instância de dados de código
- Exemplo de ALI: Dados Compartilhados por aplicações– Exemplo esclarecido para garantir entendimento que a segurança descrita neste exemplo não é aplicação de segurança (ou seja, determinando o que o usuário pode acessar na aplicação)
- Exemplo de AIE: Fornecendo Dados para outras Aplicações – Adicionada explicação esclarecendo porque a Conversão de moeda corrente não é uma instância de dados de código
- Exemplo de AIE: Aplicação de Help – Adicionada explicação, esclarecendo porque o Help não é uma instância de dados de código; e também explicando porque a Janela de Help e o Help de campo são Funções de Dados separadas

#### Parte 3, Capítulo 2: Exemplos de Contagem de Funções de Transação

- Exemplo de PE: Funcionário Novo / Dados do Dependente – Adicionada explicação, esclarecendo porque o envio do arquivo ao Sistema de Benefícios é um processo elementar separado
- Exemplo de PE: Alimentar Dados de Funcionário via Batch – Este novo exemplo ilustra que a produção de relatórios de erro via batch e relatórios estatísticos não são processos elementares separados
- Exemplo de PE: Designar funcionário a Função - Este novo exemplo ilustra a avaliação de processos elementares similares para determinar se são únicos
- Exemplo de PE: Designar funcionário a Função - Este novo exemplo ilustra dois Processos Elementares similares que são contados como transações únicas
- Exemplo de EE: EE com atributos recuperados de um AIE– Este novo exemplo ilustra uma EE com atributos recuperados de um AIE que não cruzam a fronteira
- Exemplo de EE: EE de Exclusão – Este novo exemplo ilustra a contagem de DERs para transações de exclusão
- Exemplo de EE: Janela de Inclusão de Segurança – Este novo exemplo ilustra a contagem de funcionalidade para manter uma aplicação de segurança
- Exemplo de SE: SE disparada automaticamente sem dados atravessando a fronteira – Exemplo renomeado para eliminar confusão
- Exemplo de CE: CE disparada automaticamente sem dados atravessando a fronteira – Exemplo renomeado para eliminar confusão
- Exemplo de CE: Funcionalidade Adicional de Help – Este novo exemplo ilustra a contagem de funcionalidade adicional de Help
- Exemplo de CE: Segurança para Acesso pelo Usuário – Este novo exemplo ilustra o tratamento de uma aplicação de segurança
- Exemplo de CE: Logon de Aplicação – Este novo exemplo ilustra a contagem de função de logon

### Parte 4: Apêndices e Glossário

Todos os capítulos na Parte 4 (agora Parte 5) incluíram revisões. Detalhes são indicados por capítulo abaixo.

#### Parte 4, Apêndice A: Tabelas de Cálculo

Pequenas alterações de redação para eliminar o uso do termo não-ajustado.

#### Parte 4, Apêndice B: A mudança da versão anterior

Este novo capítulo inclui o seguinte:

- A principais áreas de mudança funcional no CPM 4.3
- Informação de controle de versão
- Visão Geral das mudanças por capítulo
- O background do processo de mudança
- O processo de estudo de impacto
- O impacto das mudanças nos usuários do 4.3
- Conversão do CPM 4.2.1 para o 4.3
- Recomendações para usuários mudando do 4.2.1 para o 4.3

#### Parte 4, Apêndice C: Formulário de Solicitação do Leitor

O Formulário de Solicitação do Leitor foi eliminado. Leitores podem sugerir alterações enviando um email ao CPC (cpc@ifpug.org). O título do Apêndice C foi alterado para Tamanho Funcional Ajustado e agora contem orientação para a aplicação das Características Gerais do Sistema e para o Fator de Ajuste. Ele contem todas as fórmulas que utilizam as CGSs e o VAF.

#### Parte 4, Glossário

Os seguintes novos termos foram acrescentados ao glossário:

- Tamanho funcional ajustado da aplicação (aAFP)
- Tamanho funcional ajustado da aplicação depois de projetos de melhoria. (aAFPA)
- Tamanho funcional ajustado de projeto de desenvolvimento (aDFP)
- Tamanho funcional ajustado de projeto de melhoria (aEFP)
- Tamanho funcional da aplicação
- Arranjo
- Componente Funcional Básico
- Fronteira
- Fronteira da aplicação
- Estado consistente
- Tamanho funcional de projeto de desenvolvimento
- Tamanho funcional de projeto de melhoria
- Tamanho funcional
- Significativo
- Intenção primaria
- Auto-contido
- Classificação
- Tamanho funcional não ajustado

Os seguintes termos foram revisados no glossário:

- Manutenção adaptativa
- Contagem de Pontos de Função Ajustados (AFP) \*
- Aplicação
- Fronteira da Aplicação
- Contagem de Pontos de Função da Aplicação
- Contribuição
- Informação de Controle
- Funcionalidade de Conversão
- Manutenção Corretiva
- Escopo da Contagem
- Dados Derivados
- Desenvolvimento \*
- Contagem de pontos de função de projeto de desenvolvimento (DFP)
- Melhoria \*
- Contagem de Pontos de Função de projeto de Melhoria (EFP)
- Entidade Dependente
- Entidade Independente
- Sistema de Arquivo
- Tipo de Arquivo Referenciado (FTR)
- Complexidade Funcional
- Requisitos Funcionais do usuário
- Ponto de Função (PF)
- Análise de Pontos de Função
- Contagem de Pontos de Função
- Tipo de Função
- Mantido \*
- Manutenção
- Múltiplos locais CGS
- Manutenção Perfectiva
- Propósito da Contagem
- Tipo de Registro Elementar (RET)
- Atributo Técnico
- Funções de Transação
- Contagem de Pontos de Função Não-ajustado (UFP)
- Usuário
- Reconhecido pelo Usuário
- Visão do Usuário

\* Significa locais onde o nome do termo foi alterado (Ex.: Contagem de Pontos de Função Ajustados (AFP) tornou-se Tamanho Funcional Ajustado).

## Background

O processo de tomada de decisão interna do CPC é governado por um conjunto de características do CPM (meta regras) selecionadas e votadas pela diretoria do IFPUG e o CPC. Essas diretrizes principais em <u>ordem de importância</u> são:

1. Deve ser possível modelar a correlação do tamanho do software (derivado usando o CPM) com outros atributos (ex.: esforço, defeitos, custo, etc.).
2. O CPM contém um conjunto de regras consistente.
3. Os resultados da Análise de Pontos de Função são consistentes entre diferentes contadores usando o CPM.
4. O CPM fornece regras em como medir o tamanho de necessidade funcional que esteja definida e acordada pelos usuários e TI.
5. Os resultados da Análise de Pontos de Função usando o CPM podem ser um fator de contribuição na estimativa.
6. O CPM é um método baseado na proposta de Allan Albrecht.
7. Análise de Pontos de Função usando o CPM é fácil.
8. Análise de Pontos de Função usando o CPM é rápida.

## Estudo de Impacto

O processo e as Regras da Análise de Pontos de Função (APF) do IFPUG são concisos e fáceis de utilizar. Para refletir isto e tornar o Manual de Práticas de contagem (CPM) cada vez mais atrativo como uma manual de referência, o Comitê de Práticas de contagem (CPC) reestruturou o CPM 4.3 para se adequar ao Padrão ISO de formatação. Além disto, a versão 4.3 contem pequenas modificações e provê novos exemplos, esclarecimentos e interpretações aperfeiçoadas para as regras existentes que irão aumentar a consistência entre contadores.

Para medir a efetividade desta nova versão, um estudo de impacto foi realizado por 44 Especialistas Certificados em Pontos de Função que não tinham ligação direta com o Comitê de Práticas de Contagem. Foi solicitado a estes voluntários contar um estudo de caso, utilizando tanto o CPM 4.2.1 como o CPM 4.3. Os resultados foram idênticos em ambas as versões. Estes participantes contaram projetos que tinham sido executados sob as regras do CPM 4.2.1 usando o novo CPM 4.3. No total mais de 100 contagens incluindo desenvolvimento, aplicação, melhoria e conversão foram consideradas. O fator resultante da conversão foi 1.0; ou seja nenhuma diferença.

## Conversão do CPM 4.2 para o 4.3

Considerando que as práticas existentes variam, cada organização deve analisar suas próprias práticas para determinar qual o impacto. Algumas organizações devem encontrar um fator de conversão que seja aplicável em seu portfólio. Outras devem encontrar um fator de conversão que varie através dos diferentes tipos de sistemas, e, em alguns casos, sistemas precisarão ser recontados.

## Impacto nos Usuários do 4.2.1 mudando para o 4.3

Embora certificação adicional não seja requerida para contadores para o CPM 4.3, os testes de certificação serão atualizados para conformidade ao 4.3.

## Recomendações

O CPC recomenda as seguintes ações para usuários trocando do CPM 4.2 para o 4.3:

- Atualize todo o material de treinamento desenvolvido internamente para obter conformidade.
- Garanta que todos os contadores em sua organização foram adequadamente treinados nas diferenças entre o 4.2 e o 4.3.
- Verifique todos os materiais oferecidos pelo fornecedor para versão de certificação.
- Notifique qualquer um em sua organização que esteja envolvido com medições de tamanho funcional da mudança, e faça com que o novo manual esteja disponível a estas pessoas.
- Revise todas as ferramentas de contagem de seus usuários, tanto as automáticas como as manuais, para a versão 4.3 de certificação do IFPUG, e, se aplicável, efetue modificações para adequar-se as regras de contagem do 4.3.
- Se estiver provendo serviços baseados em Pontos de Função, garanta que a redação do contrato seja revisada para determinar qual versão do manual CPM será usada; retifique se necessário.
- Especifique na documentação de medição de tamanho funcional executada, e nos resultados, qual versão do CPM foi utilizada.
- Explicite que versão do CPM do IFPUG foi usada para contagem quando submeter dados para benchmarking, mesmo para seu próprio banco de dados benchmark, para o comitê de Benchmarking do IFPUG, ou para o ISBSG.
- Atualize todas as diretrizes internas e outros documentos locais relacionados ao 4.2 para a versão 4.3.
