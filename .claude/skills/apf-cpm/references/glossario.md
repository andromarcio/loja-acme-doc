# Glossário — termos oficiais do CPM 4.3.1 (Parte 1, §3)

> **Fonte normativa**: [`cpm-4.3.1/Parte-5-Apendices-e-Glossario/04-glossario.md`](./cpm-4.3.1/Parte-5-Apendices-e-Glossario/04-glossario.md). Este arquivo é a destilação; em divergência ou dúvida de regra, o manual decide.

Definições conforme o manual (ISO/IEC 20926). Use para citar com precisão.

## Componentes funcionais básicos (CFB)
- **Componente Funcional Básico (CFB)** — unidade elementar dos Requisitos Funcionais do Usuário usada por um método FSM para medir. Os cinco tipos de função: EE, SE, CE, ALI, AIE.
- **Arquivo Lógico Interno (ALI)** — função de dados mantida pela aplicação medida.
- **Arquivo de Interface Externa (AIE)** — função de dados referenciada, mas não mantida, pela aplicação medida, e que é ALI em outra(s) aplicação(ões).
- **Entrada Externa (EE)** — processo elementar que processa dados ou informações de controle enviados de fora da fronteira.
- **Saída Externa (SE)** — processo elementar que envia dados/controle para fora da fronteira e inclui lógica de processamento **adicional** além da de uma Consulta Externa.
- **Consulta Externa (CE)** — processo elementar que envia dados ou informações de controle para fora da fronteira (sem o processamento adicional de uma SE).

## Estruturas contadas
- **Dado Elementar Referenciado (DER)** — atributo único, reconhecido pelo usuário e não repetido.
- **Registro Lógico Referenciado (RLR)** — subgrupo de DERs, reconhecido pelo usuário, contido em uma função de **dados**.
- **Arquivo Lógico Referenciado (ALR)** — função de dados (ALI ou AIE) lida e/ou gravada por uma função de **transação**. *(Sigla EN: FTR.)*

## Conceitos de processo
- **Processo elementar** — menor unidade de atividade significativa para o usuário.
- **Estado consistente** — ponto em que o processamento foi totalmente executado; o Requisito Funcional do Usuário foi satisfeito e nada mais há a fazer. *(Ex.: imprimir o cheque E marcar a conta como paga — fazer só um deixa a aplicação inconsistente.)*
- **Lógica de processamento** — requisitos solicitados pelo usuário para executar o PE (validações, algoritmos, cálculos, leitura/manutenção de função de dados).
- **Intenção primária** — a intenção que é a primeira em importância.
- **Manter** — capacidade de incluir, alterar ou excluir dados por meio de um processo elementar.
- **Dados derivados** — dados criados por processamento que vai além da recuperação direta e validação (passos adicionais).
- **Informações de controle** — dados que influenciam um PE especificando o quê, quando ou como os dados devem ser processados.
- **Significativo** — reconhecido pelo usuário e que satisfaz um Requisito Funcional do Usuário.
- **Reconhecido pelo usuário** — requisitos de processos/dados acordados e entendidos por usuário(s) e desenvolvedor(es).

## Escopo, fronteira e usuário
- **Fronteira** — interface conceitual entre o software em estudo e seus usuários.
- **Escopo da contagem** — conjunto de Requisitos Funcionais do Usuário a incluir na contagem.
- **Propósito da contagem** — razão para executar a contagem (determina o escopo).
- **Usuário** — qualquer pessoa ou coisa que se comunique/interaja com o software (inclui outras aplicações, sensores, hardware).
- **Visão do usuário** — Requisitos Funcionais do Usuário conforme percebidos pelo usuário.
- **Requisitos Funcionais do Usuário** — o que o software deve fazer em termos de tarefas/serviços (transferência, transformação, armazenamento e recuperação de dados). Excluem restrições de qualidade, organizacionais, ambientais e de implementação.

## Entidades (modelagem)
- **Entidade dependente** — não é significativa sozinha; uma ocorrência de X deve estar ligada a uma de Y, e excluir Y exclui as ocorrências relacionadas de X.
- **Entidade independente** — significativa por si só.
- **Tipo de entidade associativo** — contém atributos que descrevem um relacionamento muitos-para-muitos entre dois outros tipos de entidade.
- **Tipo de entidade atributivo** — descreve um ou mais atributos de outro tipo de entidade.

## Tamanho e contagens
- **Ponto de Função (PF)** — unidade de medida de tamanho funcional.
- **Tamanho funcional** — tamanho derivado pela quantificação dos Requisitos Funcionais do Usuário.
- **Complexidade funcional** — grau de complexidade (Baixa/Média/Alta) atribuído a uma função pelas regras do padrão.
- **Funcionalidade de conversão** — funções de dados/transação fornecidas para converter dados; existem só durante o desenvolvimento ou a melhoria.
- **Projeto de desenvolvimento** — projeto para derivar a primeira release de uma aplicação.
- **Projeto de melhoria** — projeto para entregar manutenção adaptativa (corretiva/perfectiva não contam para o tamanho).

## Tipos de contagem
- **Contagem de projeto de desenvolvimento** — mede o tamanho funcional da primeira release (inclui conversão).
- **Contagem de aplicação** — mede a funcionalidade existente num momento (baseline).
- **Contagem de projeto de melhoria** — mede funcionalidade incluída, alterada e excluída (pode incluir conversão).
