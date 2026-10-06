# Parte 2 · Capítulo 1 — Introdução

> Parte 2 — A Transição (Aplicando o Método FSM do IFPUG) · CPM v4.3.1

**Introdução**

A Parte 1 fornece o processo de análise de ponto de função para medir funcionalidade de software de acordo com o método do IFPUG bem como regras detalhadas para identificar e medir as funções de dados e de transações.

A Parte 2 fornece uma visão geral do método do IFPUG, conjuntamente com orientações para aplicar as regras de determinação do tipo da contagem, estabelecimento da fronteira da aplicação e medição de funções de dados e de transações.

**Conteúdo**

A Parte 2 inclui os seguintes capítulos:

| Tópico | Página |
|---|---|
| Relação entre IFPUG e ISO | 1-2 |
| Visão Geral do Método FSM do IFPUG | 2-1 |
| Obter Documentação Disponível | 3-1 |
| Determinar Tipo da Contagem | 4-1 |
| Determinar Escopo da Contagem e Fronteira da Aplicação | 5-1 |
| Medir Funções de Dados | 6-1 |
| Medir Funções Transação | 7-1 |
| Índice | i-1 |

## Relação entre IFPUG e ISO

**Diretriz Estratégica do IFPUG**

O método análise de pontos de função do IFPUG é um padrão ISO e deve ser aderente à ISO/IEC 14143-1:2007. O método pode medir apenas "tamanho funcional" e não "tamanho não-funcional". Isto não significa que o tamanho não funcional não possa ou não deva ser medido, apenas deve ser tratado como uma medida separada ("A Framework for Functional Sizing" [IFPUG, 2003]).

### "A Framework for Functional Sizing"

"A Framework for Functional Sizing" fornece a base para o entendimento do tamanho funcional e como ele se relaciona com os requisitos. O artigo explora diferentes tipos de requisitos; estes conceitos fornecem a base para a medição de software de acordo com a ISO/IEC 14143-1 e o CPM do IFPUG.

A essência de "A Framework for Functional Sizing" é que pode haver vários métodos de medição para diferentes propósitos. O tamanho funcional pode ser medido usando o método de medição funcional do IFPUG de análise de pontos de função, baseado nos requisitos funcionais do usuário. Outras medidas de tamanho podem ser usadas para medir, por exemplo, requisitos não funcionais.

Ambos resultam em medidas distintas de tamanho, representando diferentes dimensões do tamanho do software: IFPUG-PF para tamanho funcional e alguma outra para tamanho não funcional. Embora estes tamanhos não possam ser adicionados, pois representam dimensões distintas (como volume e temperatura de uma sala), ambos podem ser usados na estimativa de esforço para desenvolvimento de uma aplicação ou sistema.

"A Framework for Functional Sizing" fornece orientações para distinguir tamanho funcional de tamanho não funcional.

### ISO/IEC 14143-1 - Definição de Requisitos do Usuário

Em 1998 o primeiro padrão de Medição de Tamanho Funcional ISO/IEC foi publicado (ISO/IEC 14143-1:1998). Este padrão define Tamanho Funcional como "um tamanho do software obtido através da quantificação dos Requisitos Funcionais do Usuário". Ele foi atualizado em 2007 e publicado como ISO/IEC 14143-1:2007.

A ISO/IEC 14143-1 define os conceitos fundamentais de Medição de Tamanho Funcional (FSM) e descreve os princípios gerais para a aplicação do método FSM. Ele NÃO fornece regras detalhadas sobre como:

- Selecionar um método específico
- Medir Tamanho Funcional de software usando um método específico
- Usar os resultados obtidos de método específico

A definição de FSM na ISO/IEC 14143-1 é aplicada para se determinar se um método de medição de software é um Método de Medição Funcional. Ele não impede o desenvolvimento de vários métodos, em vez disso, oferece o embasamento para a avaliação se um método específico é aderente ao FSM.

A ISO/IEC 14143-1 classifica os requisitos do usuário em dois subconjuntos:

- Requisitos Funcionais do Usuário
- Requisitos Não-Funcionais do Usuário

As definições da ISO/IEC 14143-1 estão listadas a seguir:

### ISO/IEC 14143-1 - Definições

**Tamanho Funcional**

Um tamanho de software obtido através da quantificação dos Requisitos Funcionais do Usuário.

**Requisito Funcional do Usuário**

Um subconjunto dos requisitos do usuário que descrevem o que o software deve fazer, em termos de tarefas e serviços.

Nota: Requisitos funcionais do usuário incluem, mas não estão limitados a:

- Transferência de dados (por exemplo: entrada de dados de cliente, envio de sinais de controle)
- Transformação de dados (por exemplo: calcular taxa de juros bancária, calcular temperatura média)
- Armazenamento de dados (por exemplo: armazenar dados de cliente, registrar a mudança de temperatura ao longo do tempo)
- Recuperação de dados (por exemplo: listar os empregados atuais, recuperar posição da aeronave)

**Requisito Não-Funcional do Usuário**

A ISO não oferece definição para Requisito Não-Funcional do Usuário, mas apresenta alguns exemplos em uma nota.

Exemplos de requisitos do usuário que são Requisitos Não-Funcionais do Usuário incluem, mas não estão limitados aos seguintes:

- Restrições de qualidade (por exemplo, usabilidade, confiabilidade, eficiência e portabilidade)
- Restrições Organizacionais (por exemplo, locais de operação, hardware alvo e aderência a padrões)
- Restrições Ambientais (por exemplo, interoperabilidade, segurança, privacidade e sigilo)
- Restrições de Implementação (por exemplo, linguagem de desenvolvimento, cronograma de entrega)
