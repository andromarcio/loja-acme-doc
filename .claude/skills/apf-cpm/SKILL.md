---
name: apf-cpm
description: >-
  Análise de Pontos de Função (APF/FPA) segundo o IFPUG CPM 4.3.1 (ISO/IEC 20926).
  Use para CONTAR pontos de função de um sistema/projeto e para TIRAR DÚVIDAS de regra
  citando o manual. Cobre: tipo de contagem, escopo e fronteira, funções de dados
  (ALI/AIE), funções de transação (EE/SE/CE), processo elementar, DER, RLR/ALR,
  intenção primária, lógica de processamento, complexidade funcional, tamanho funcional
  (PF não ajustado) e fórmulas (DFP/AFP/EFP/AFPA). Acione quando o usuário falar de
  APF, FPA, pontos de função, contagem de PF, dimensionamento/tamanho funcional,
  IFPUG, ou citar as siglas ALI, AIE, EE, SE, CE, DER, RLR, ALR, processo elementar.
---

# APF — Análise de Pontos de Função (IFPUG CPM 4.3.1)

Esta skill aplica as regras do **Manual de Práticas de Contagem (CPM) 4.3.1 do IFPUG**, alinhado à norma **ISO/IEC 20926**. Trabalha com **tamanho funcional não ajustado** (PF), que é o padrão atual — o Fator de Ajuste (VAF/14 GSC) foi removido do padrão ISO e **não** é coberto aqui.

Use esta skill de dois modos:
- **Assistente de contagem** — conduzir uma contagem de ponta a ponta (siga *O processo de contagem* abaixo).
- **Referência de consulta** — responder dúvidas de regra com precisão, citando o CPM e abrindo os arquivos de `references/` quando precisar do detalhe.

> Sempre que houver dúvida sobre uma regra fina, **abra o arquivo de referência** correspondente e cite-o, em vez de responder de memória.

## Vocabulário essencial (siglas PT / EN)

| PT | EN | O que é |
|----|----|---------| 
| **ALI** | ILF | Arquivo Lógico Interno — grupo lógico de dados **mantido** pela aplicação |
| **AIE** | EIF | Arquivo de Interface Externa — grupo lógico **referenciado mas não mantido** (é ALI em outra app) |
| **EE** | EI | Entrada Externa — processa dados que entram; mantém ALI ou altera comportamento |
| **SE** | EO | Saída Externa — apresenta dados **com** processamento extra (cálculo, dado derivado, atualiza ALI, altera comportamento) |
| **CE** | EQ | Consulta Externa — apresenta dados **sem** o processamento extra de uma SE |
| **DER** | DET | Dado Elementar Referenciado — atributo único, reconhecido pelo usuário, não repetido |
| **RLR** | RET | Registro Lógico Referenciado — subgrupo de DERs dentro de uma função de **dados** |
| **ALR** | FTR | Arquivo Lógico Referenciado — função de dados lida/gravada por uma **transação** |
| **Processo elementar (PE)** | EP | Menor unidade de atividade significativa para o usuário |

`ALI`/`AIE` = **funções de dados**. `EE`/`SE`/`CE` = **funções de transação**. Os cinco são os Componentes Funcionais Básicos (CFB).

---

## O processo de contagem (7 passos — CPM 5.1)

1. **Reunir a documentação** disponível (requisitos, modelo de dados, telas, relatórios, casos de uso).
2. **Determinar propósito, tipo de contagem, escopo e fronteira** (ver abaixo).
3. **Medir as funções de dados** → identificar e agrupar dados lógicos, classificar ALI/AIE, contar DER e RLR, achar complexidade e tamanho (Tabelas 1 e 2).
4. **Medir as funções de transação** → identificar processos elementares únicos, classificar EE/SE/CE, contar ALR e DER, achar complexidade e tamanho (Tabelas 6/7/8).
5. **Calcular o tamanho funcional** com a fórmula do tipo de contagem (ver *Fórmulas*).
6. **Documentar** a contagem (propósito, tipo, escopo, fronteira, data, lista de funções com tipo/complexidade/PF, suposições).
7. **Reportar** o resultado.

> **Contando dentro do docqui (escopo já especificado em N3/DATA-MODEL)?**
> Esta skill é a **fonte das regras do CPM**; o **roteiro de procedimento** vive em
> `content/prompts/PROMPT_CONTAGEM.md` — ele conta numa única passada a partir do que
> está documentado, grava na fonte (N3 + DATA-MODEL) e espelha em `global/CONTAGEM-PF.md`
> após confirmação. Leia o prompt e siga-o; aplique aqui as regras de classificação,
> DER/ALR/RLR e complexidade. Os **ajustes da organização** (CAIXA) estão em
> `global/SIZING.md` e **prevalecem** sobre as faixas/tabelas genéricas desta skill em
> caso de conflito.

### Passo 2 — Tipo de contagem, escopo e fronteira

- **Tipo de contagem** (decorre do propósito):
  - *Projeto de desenvolvimento* — primeira release de uma aplicação.
  - *Aplicação* — funcionalidade existente num dado momento (baseline).
  - *Projeto de melhoria* — funcionalidade incluída, alterada e/ou excluída + conversão.
- **Escopo** = conjunto de Requisitos Funcionais do Usuário a incluir; decorre do propósito.
- **Fronteira** = interface conceitual entre o software e seus usuários. Defina pela **visão do usuário** (áreas funcionais de negócio), **nunca** por critérios técnicos. A fronteira determina o que é "interno" (ALI) vs "externo" (AIE) e o que atravessa para contar DER de transação.
- Inclua só **Requisitos Funcionais do Usuário**; exclua requisitos não-funcionais (usabilidade, performance, segurança, plataforma, prazo…).

---

## Passo 3 — Funções de dados (ALI / AIE) — CPM §5.4

### 3.1 Identificar e agrupar dados lógicos

Um modelo lógico de dados facilita, mas não é obrigatório. Para cada grupo candidato:

1. **Identifique** dados/informações de controle **logicamente relacionados e reconhecidos pelo usuário**, dentro do escopo.
2. **Exclua entidades não mantidas por nenhuma aplicação** (dados efêmeros, temporários de sessão).
3. **Agrupe entidades dependentes** — entidade dependente = só existe ligada a outra; excluir a "mãe" exclui as ocorrências filhas. Entidades **independentes** são grupos lógicos distintos.
4. **Exclua dados de código** (ver seção dedicada abaixo).
5. **Exclua entidades sem atributos requeridos** pelo usuário.
6. **Remova entidades associativas** que só tenham chaves estrangeiras (ou atributos não requeridos); agrupe as chaves estrangeiras com as entidades primárias.

> Chaves estrangeiras requeridas pelo usuário para estabelecer relacionamento **contam como DER** na entidade primária — desde que apontem para **outro** arquivo lógico. FK interna ao AL (ligando entidades que o subpasso 3 já agrupou) **não** conta de novo.

### 3.2 Dados de código — exclusão (CPM 5.4.2d)

Entidades que servem para padronizar/validar/traduzir **não** são funções de dados. São dados de código quando se enquadram em pelo menos uma das seguintes categorias:

| # | Categoria | Exemplo típico |
|---|-----------|----------------|
| 1 | **Substituição** — contém código + nome/descrição explicativa | Tabela de UF (SP → "São Paulo") |
| 2 | **Ocorrência única** com atributos que raramente/nunca mudam | Parâmetros fixos do sistema (1 linha) |
| 3 | **Dados basicamente estáticos** | Tabela de moedas ISO |
| 4 | **Valores default** | Configurações padrão de relatório |
| 5 | **Valores válidos** para seleção ou validação | Lista de tipos de telefone (Residencial, Comercial, Celular) |
| 6 | **Faixa de dados** para validação | Faixas de CEP por região |

**Atenção:** atributos extras (auditoria, datas de vigência, flags) **não** mudam a natureza de dado de código. Se a entidade se enquadra numa dessas categorias, continua sendo dado de código mesmo com campos adicionais.

### 3.3 Classificar ALI vs AIE

A classificação depende sempre da **aplicação medida** e sua fronteira:

- **ALI** — grupo lógico **mantido** (incluir/alterar/excluir dados por PE) pela aplicação medida. O mesmo arquivo pode ser ALI numa contagem e AIE em outra.
- **AIE** — grupo lógico **referenciado, mas não mantido** pela aplicação medida, **e** que é um ALI em uma ou mais outras aplicações. Se nenhuma aplicação o mantém, **não conta** como AIE.

> Um usuário pode ser outra aplicação (batch, serviço, sensor). Se a outra aplicação envia dados e *esta* aplicação os grava em ALI, é **EE** + **ALI** nesta app, não AIE.

### 3.4 Contar DER (função de dados)

- **1 DER por atributo único, reconhecido pelo usuário e não repetido**, mantido ou recuperado, considerando **todos os PEs** do escopo que usam essa função.
  - *Ex.:* 12 campos de "orçamento mensal" repetidos = **1 DER** (+ 1 DER para identificar o mês).
- Quando duas+ aplicações usam a mesma função, conte **só os DER usados pela aplicação medida**.
- **1 DER para cada relacionamento** (chave estrangeira) requerido pelo usuário.
- **O identificador conta 1 DER — uma única vez por arquivo lógico**, não por tabela: se o AL agrupa mais de uma entidade (1:N com a filha dependente), o identificador da mãe **não** conta de novo como chave estrangeira na filha; é o mesmo atributo reconhecido pelo usuário, já contado. A FK só é DER adicional quando aponta para **outro** arquivo lógico.
- Atributos relacionados podem ser **1 DER ou vários**, conforme os PEs os usem:
  - *Ex.:* (primeiro nome, nome do meio, sobrenome) = **1 DER** se sempre usados juntos; **2 ou 3 DER** se usados independentemente em PEs distintos.

### 3.5 Contar RLR (função de dados)

RLR = subgrupo lógico de DERs dentro da função de dados.

- Todo ALI/AIE tem **ao menos 1 RLR** (default).
- Conte **+1 RLR** para cada subgrupo lógico de DERs (com mais de 1 DER) que seja:
  1. **Entidade associativa com atributos não-chave**;
  2. **Subtipo** (exceto o primeiro subtipo);
  3. **Entidade atributiva** num relacionamento que **não** seja 1-1 obrigatório.
- Sem modelo de dados: procure **grupos de dados repetidos** para identificar RLR.

**Exemplos práticos:**
- Fatura com **cabeçalho** + **itens** (repetidos): cabeçalho = 1 RLR, itens = +1 RLR → **2 RLR**.
- Um único atributo repetido (vários nº de conta do mesmo cliente): **1 DER**, não RLR.
- Grupo repetido {ano, mês, valor orçado}: conta como **3 DER**, não RLR.

---

## Passo 4 — Funções de transação (EE / SE / CE) — CPM §5.5

### 4.1 Identificar processos elementares (PE)

Um PE é a **menor unidade de atividade** que satisfaz **todos** os critérios:
1. É **significativa para o usuário** (satisfaz um Requisito Funcional do Usuário);
2. Constitui uma **transação completa** (não é uma parte de algo maior);
3. É **autocontida** (não depende de outro PE para completar seu processamento);
4. Deixa o negócio em **estado consistente** (processamento totalmente executado; nada mais a fazer).

> *Ex.:* "Manter Informações de Empregado" decompõe em PEs: Incluir, Alterar, Consultar Empregado.
> Mesmo que existam várias abas (endereço, salário, dependentes), o menor PE significativo é "Incluir Empregado"
> — preencher abas são **passos** do processo, não PEs distintos.

**O que NÃO é processo elementar:**
- **Menus e navegação** (barras de rolagem, "próximo/anterior", "Novo/Revisar/Editar") — são requisitos navegacionais, não funcionais.
- **2ª ocorrência** de uma mesma janela de Ajuda de campo — o PE já foi contado na 1ª ocorrência.
- **Mensagens de erro/confirmação** isoladas — não são SE/CE próprias; entram como **1 DER** na transação que as dispara.
- **Contadores, totalizadores, badges e resumos exibidos JUNTO de uma pesquisa/listagem** e recalculados pelo **mesmo filtro** — não são PE separado. Falham nos critérios **3 (autocontido)** e **4 (estado consistente)**: a tela já os mostra ao abrir e eles se refiltram com a pesquisa; entregar só os contadores, sem a pesquisa, deixa o sistema inconsistente. Contam como **DERs** do PE de pesquisa (dado calculado → se contribuem, empurram a pesquisa para **SE**, não criam uma CE à parte). *Só* viram PE próprio quando têm **acionamento e consistência próprios**, independentes da listagem (ex.: um painel consultado por rota/filtro próprio, sem a lista).
- **Consulta *implícita* que não traz dado novo** — a leitura que abre o formulário de edição preenchido a partir de uma linha da pesquisa. É PE quando o formulário traz campo que a lista não mostrava; **não é** quando a lista já exibia tudo o que o formulário edita, porque então nada atravessa a fronteira de novo. O marcador *(implícita)* no nome sinaliza conferência, não decide o resultado. Conta-se **sempre na feature Editar** — mesmo quando o Editar é *Ação em tela* —, nunca na Cadastrar nem na Pesquisar/Visualizar que só a hospeda; sem Editar no Feature Set, fica na feature dona da tela *(decisão do PO, 2026-09-23)*.

**O que É processo elementar mesmo parecendo apoio de interface — Regra da lista consultada:** sempre que um componente apresenta ao usuário uma lista de valores **lida de um ALI ou AIE**, essa recuperação é PE — tem início (o disparo), meio (a consulta ao arquivo lógico) e fim (a lista apresentada), e entrega valor ao usuário. O componente não importa: combo, dropdown, autocomplete, um **carrossel** que recupera e exibe uma lista, **botões de categoria** que ao clicar filtram outra lista, chips, árvore, menu carregado de dados — a combo é só o exemplo mais comum, não a regra. O que decide é a **origem dos valores** (uma consulta a ALI/AIE), não a forma de exibi-los. CE sem lógica, SE com filtro ou transformação; conte **uma vez na aplicação** — a mesma lista em duas telas tem os mesmos DER, os mesmos ALR e a mesma lógica, então é um PE só (§4.2) *(decisão do PO, 2026-09-27)*. Conta na feature **dona da tela** onde foi contada primeiro (Superfície *Tela própria* ou *Modal*), nunca na feature de *Ação em tela* que só usa a lista no seu formulário. Nas outras telas, a linha **referencia** o PE contado: o nome dele, `↪ [ID](caminho do N3)` na coluna Tipo — o ID com link para o N3 onde ele conta — e `—` no resto, sem memória; e a alteração do PE, venha de qualquer das features, é feita onde ele conta. Mesmo rótulo com filtro diferente é outro PE: conta, e a memória declara `> Distinto de <ID> · <PE>: <o que difere>`. `scripts/valida-acessorio-tela.mjs` confere — e, com `--pe "<nome>"`, diz se o PE já é contado e onde. Lista de valores fixos, enum ou valores já em tela **não** é PE; o clique que só filtra em memória o que já está em tela também não. Nome: `Consultar <rótulo do campo> (<componente>)` — o rótulo que a tela mostra para a lista, não a entidade consultada, que fica no ALR da memória de cálculo; duas listas sobre a mesma entidade com filtros diferentes ganham nomes diferentes, e nome igual passa a dizer a mesma lista *(decisão do PO, 2026-09-23)*. Detalhe e convenção de nome no `SIZING.md` da instância. *(definição do PO, 2026-09-03)*

### 4.2 Processos elementares únicos (unicidade) — CPM 5.5.2.2

Dois candidatos são **o mesmo PE** quando exigem **todos** os três:
1. O **mesmo conjunto de DER** (mesmos atributos que cruzam a fronteira);
2. O **mesmo conjunto de ALR** (mesmas funções de dados acessadas);
3. A **mesma lógica de processamento** (mesmas formas de lógica das 13 listadas abaixo).

**Regras de aplicação:**
- Variações pequenas (empregado com/sem dependentes; mensalista/horista) **não** dividem o PE — se a lógica e os conjuntos são essencialmente os mesmos, é o mesmo PE.
- **Não** dividir um PE com múltiplas formas de lógica em vários PEs. Ex.: receber + validar dados, ler + filtrar de ALI, classificar e apresentar = **um** PE.
- A forma 13 (classificar/ordenar) **nunca** afeta unicidade — ordenar por nome vs por data não cria PE distinto.

### 4.3 As 13 formas de lógica de processamento (Tabela 3 — CPM 5.5.2.3)

As formas de lógica definem **o que o PE faz**. Elas são usadas para: (a) determinar se um PE é único; (b) diferenciar EE/SE/CE; (c) verificar se o PE atende aos critérios de classificação.

| # | Forma de lógica | Descrição detalhada | Impacto na classificação |
|---|-----------------|---------------------|--------------------------|
| 1 | **Validações são executadas** | O PE verifica dados de entrada contra regras de negócio, formatos, intervalos válidos, obrigatoriedade, consistência entre campos. Inclui: verificar campo obrigatório, formato de CPF/CNPJ, data válida, valor dentro de faixa, unicidade de chave. | Presente em praticamente toda **EE**; pode estar em SE/CE (validação de parâmetros de filtro). |
| 2 | **Fórmulas/cálculos matemáticos são executados** | O PE executa operações aritméticas/matemáticas: soma, média, percentual, juros compostos, cálculo de impostos, subtotais, totais. A presença de cálculo é um dos critérios que separa **SE de CE**. | Se apresenta resultado calculado → **SE** (não CE). Em EE, cálculo pode ocorrer antes de gravar (ex.: calcular saldo antes de salvar). |
| 3 | **Valores equivalentes são convertidos** | Transforma um dado em outro por tabela de correspondência ou regra de conversão. *Ex.:* idade → faixa etária; código de moeda → símbolo; UF → região; nota → conceito (A/B/C). | Diferente de cálculo (forma 2): aqui é **mapeamento**, não aritmética. |
| 4 | **Dados são filtrados/selecionados por critérios para comparar conjuntos** | O PE aplica critérios de seleção para reduzir um conjunto de dados e/ou compara dois conjuntos. *Ex.:* listar funcionários com salário > R$10.000; comparar estoque atual vs pedidos pendentes; filtrar por período + departamento. | Filtrar/selecionar é normal em SE e CE. Comparação de conjuntos com resultado derivado tende a **SE**. |
| 5 | **Condições são analisadas para determinar quais se aplicam** | O PE avalia condições/regras de negócio para decidir um curso de ação. *Ex.:* if/else de regra de negócio — se cargo é gerente, aplica desconto X; se idade > 60, aplica isenção; workflow com aprovação condicional. | Diferente de validação (forma 1): aqui não é "válido/inválido", é **decisão de negócio** que altera o fluxo. |
| 6 | **Um ou mais ALIs são atualizados** | O PE grava (inclui, altera ou exclui) dados em pelo menos um ALI. Esta é a lógica central de toda **EE** com intenção de manter ALI. Em **SE**, atualizar ALI é um dos critérios diferenciadores de CE. | Presente → pode ser **EE** (intenção de manter) ou **SE** (atualiza ALI como efeito colateral de apresentar). **Nunca** numa CE. |
| 7 | **Um ou mais ALIs ou AIEs são referenciados** | O PE lê/consulta dados de funções de dados (ALI e/ou AIE) como parte do processamento. Toda transação que acessa dados armazenados usa esta forma. | Presente em todos os tipos (EE, SE, CE). |
| 8 | **Dados ou informações de controle são recuperados** | O PE busca dados existentes ou informações de controle (parâmetros, configurações, regras armazenadas) para uso no processamento. | Normal em todos os tipos. |
| 9 | **Dados derivados são criados** | O PE cria dados novos a partir de **transformação** de dados existentes — vai além da simples recuperação e validação. *Ex.:* gerar ranking a partir de notas; calcular idade a partir da data de nascimento; criar resumo estatístico; gerar código de barras a partir de dados cadastrais. | Se apresenta dado derivado → **SE** (não CE). Dado derivado = **processamento adicional** que vai além da recuperação direta. |
| 10 | **O comportamento da aplicação é alterado** | O PE muda a forma como a aplicação opera, sem necessariamente gravar dados de negócio. *Ex.:* alterar parâmetros de configuração que controlam processamento; ativar/desativar funcionalidade; alterar perfil de acesso; mudar modo de operação (online↔batch). | Se intenção primária é alterar comportamento → **EE**. Em SE, pode ocorrer como efeito secundário. **Nunca** intenção primária de CE. |
| 11 | **Informações são preparadas e apresentadas fora da fronteira** | O PE formata e envia dados para fora da fronteira da aplicação: exibir em tela, gerar relatório, enviar arquivo, transmitir para outra aplicação. | Presente em toda **SE** e **CE** (apresentar é a intenção primária). Em EE, pode haver mensagem de confirmação (mas a intenção primária não é apresentar). |
| 12 | **Há capacidade de receber dados/controle que entram pela fronteira** | O PE aceita dados ou informações de controle vindos de fora da fronteira: campos digitados pelo usuário, dados recebidos de outra aplicação, upload de arquivo, sinais de sensores. | **Obrigatório** em toda EE. **Possível** em SE/CE (ex.: receber parâmetros de filtro). Não define tipo sozinha, mas é critério necessário para EE. |
| 13 | **Classificar/ordenar um conjunto de dados** | O PE aplica ordenação (sort) a um conjunto de dados. *Ex.:* ordenar lista por nome, por data, por valor. | **Nunca** afeta tipo nem unicidade. Ordenar por nome vs por data **não** cria PE distinto. Não conta como processamento adicional para fins SE↔CE. |

### 4.4 Como as formas de lógica diferenciam EE / SE / CE (Tabela 5)

| Forma | EE | SE | CE |
|-------|----|----|-----|
| 1. Validações | ✅ Obrigatória/típica | ⚪ Possível (parâmetros) | ⚪ Possível (parâmetros) |
| 2. Cálculos | ⚪ Possível | ✅ **Diferenciadora** (→ não é CE) | ❌ Ausente |
| 3. Conversão de valores | ⚪ Possível | ⚪ Possível | ⚪ Possível |
| 4. Filtrar/comparar | ⚪ Possível | ⚪ Possível | ⚪ Possível |
| 5. Analisar condições | ⚪ Possível | ⚪ Possível | ⚪ Possível |
| 6. **Atualizar ALI** | ✅ Típica (manter) | ✅ **Diferenciadora** (→ não é CE) | ❌ **Nunca** |
| 7. Referenciar ALI/AIE | ⚪ Possível | ✅ Presente | ✅ Presente |
| 8. Recuperar dados | ⚪ Possível | ✅ Presente | ✅ Presente |
| 9. **Dado derivado** | ⚪ Possível | ✅ **Diferenciadora** (→ não é CE) | ❌ Ausente |
| 10. **Alterar comportamento** | ✅ Pode ser IP | ✅ **Diferenciadora** (→ não é CE) | ❌ **Nunca** |
| 11. Apresentar fora da fronteira | ⚪ Possível (msg) | ✅ Obrigatória (IP) | ✅ Obrigatória (IP) |
| 12. **Receber de fora da fronteira** | ✅ **Obrigatória** | ⚪ Possível (parâm.) | ⚪ Possível (parâm.) |
| 13. Classificar/ordenar | ⚪ Possível | ⚪ Possível | ⚪ Possível |

**Legenda:** ✅ = presente/obrigatória · ⚪ = possível mas não define · ❌ = ausente/impossível · **IP** = intenção primária · **Diferenciadora** = sua presença muda a classificação SE↔CE.

### 4.5 Classificar como EE, SE ou CE — CPM 5.5.3

**Passo 1 — Determinar a intenção primária** (a primeira em importância), uma de:
- **Manter um ou mais ALIs** (incluir/alterar/excluir dados);
- **Alterar o comportamento da aplicação** (mudar parâmetros, perfis, modos);
- **Apresentar informações ao usuário** (exibir, listar, gerar relatório).

**Passo 2 — Aplicar os critérios de classificação:**

- **EE** (Entrada Externa), se:
  - Inclui lógica para **receber dados/controle de fora da fronteira** (forma 12), **E**
  - Sua intenção primária é **manter ALI** (forma 6) ou **alterar comportamento** (forma 10).
  - *Exemplos:* incluir/alterar/excluir cadastro, salvar configuração, fazer upload de dados.

- **SE** (Saída Externa), se:
  - Intenção primária é **apresentar informações** (forma 11), **E**
  - Inclui ≥1 de: **(1)** cálculo matemático (forma 2); **(2)** atualiza ALI (forma 6); **(3)** cria dado derivado (forma 9); **(4)** altera comportamento (forma 10).
  - *Exemplos:* relatório com totalizadores, dashboard com médias, extrato com saldo calculado, relatório que marca "impresso" no ALI.

- **CE** (Consulta Externa), se:
  - Intenção primária é **apresentar informações** (forma 11),
  - **Referencia** função de dados para recuperar (formas 7/8),
  - **Não** satisfaz os critérios de SE (sem cálculo/derivação/atualização de ALI/alteração de comportamento), **E**
  - Tem **no mínimo 1 ALR**.
  - *Exemplos:* tela de consulta de cadastro, lista simples de registros, visualização de detalhes, help on-line recuperado de ALI.

#### Tabela de Intenção Primária × Tipo (Tabela 4)

| Intenção primária | EE | SE | CE |
|---|---|---|---|
| Alterar o comportamento da aplicação | **IP** | possível | N/A |
| Manter um ou mais ALIs | **IP** | possível | N/A |
| Apresentar informações ao usuário | possível | **IP** | **IP** |

(IP = é a intenção primária do tipo; possível = pode ocorrer mas não é a IP; N/A = impossível.)

> **Heurística SE↔CE:** tem **cálculo, dado derivado, atualização de ALI ou alteração de comportamento**? → **SE**. Recuperação "pura" e apresentação → **CE**.

### 4.6 Contar ALR (função de transação)

- **1 ALR por função de dados única** (ALI ou AIE) **acessada** (lida e/ou gravada) pela transação.
- Se o PE lê E grava o mesmo ALI, conta **1 ALR** (não 2).
- Uma **CE tem no mínimo 1 ALR** — se não referencia nenhuma função de dados, não é CE.

### 4.7 Contar DER (função de transação)

Revise tudo que **atravessa a fronteira** (entra e/ou sai) durante o PE:

- **(a) 1 DER por atributo único, reconhecido pelo usuário e não repetido** que atravesse a fronteira. Inclui:
  - Campos digitados em tela ou formulário;
  - Campos exibidos em tela/relatório;
  - Atributos que especificam *quando/o quê/como* recuperar ou gerar;
  - Atributos em arquivo eletrônico que entram/saem.

- **(b) 1 DER para mensagem de resposta** — mesmo com várias mensagens de erro/confirmação, conta **1 DER** pela capacidade de enviar mensagem.

- **(c) 1 DER para iniciar ação** — mesmo com vários meios (botão OK, tecla Enter, ícone Salvar, tecla de função…), conta **1 DER** pela capacidade de disparar o PE.

#### NÃO contar como DER de transação:
- Constantes literais: títulos de relatório/tela, cabeçalhos de coluna, rótulos de campo;
- Rótulos gerados pela aplicação (data/hora do sistema impressa em cabeçalho);
- Variáveis de paginação, números de página, "Linhas 37 a 54 de 211";
- Auxílios de navegação ("anterior", "próximo", "primeiro", "último");
- Atributos gerados dentro da fronteira e salvos em ALI **sem sair** pela fronteira;
- Atributos recuperados de ALI/AIE que **participam do processamento sem sair** pela fronteira (ex.: valor lido para validação interna, mas não exibido).

---

> **Ao arbitrar, cite o manual.** Quando a decisão de contagem não for óbvia — o que agrupar num arquivo lógico, se algo é dado de código, se uma alteração conta —, abra a parte correspondente em `references/cpm-4.3.1/` e **registre na memória de cálculo em que regra você se apoiou**. Contagem que cita a fonte é conferível; contagem que cita a si mesma não é.

## Memória de cálculo — obrigatória em toda contagem

Todo número contado sai acompanhado da **quantidade e da descrição** dos seus ALR e DER. Não é formalidade: sem a enumeração, quem revisa não consegue distinguir um ALR que esqueceu um arquivo lógico de um que está certo, nem um DER que contou o mesmo campo duas vezes — e, numa recontagem, ninguém sabe o que de fato mudou entre as duas versões do número.

O que a memória registra, por processo elementar:

> **Onde o número é gravado.** A contagem se faz **no N3** — seção `## Métricas de tamanho`, com a `### Memória de cálculo` ao lado — e no `DATA-MODEL.md` para as funções de dados. Só depois é espelhada em `global/CONTAGEM-PF.md` e propagada para `modules/INDEX.md`. O consolidado **nunca** recebe número que não exista na fonte, e nenhum relatório (impacto, sprint, apresentação) antecede o N3.

- **ALR** — cada arquivo lógico **nomeado**, com o motivo da leitura ou da manutenção. São **quatro fontes**: a coluna `Entidade` da tabela `## Campos` do N3 (entidades distintas), as entidades-fonte de `## Derivações`, a seção `## Dados lidos e gravados` e uma **varredura das `## Regras de negócio` e dos `## Campos automáticos`**. As três primeiras são ancoradas em campo — descrevem *a tela*, não *a transação* —, então a entidade que a feature lê ou grava sem exibir campo algum (o registro de execução que recebe o status, o cronograma que define a janela) só aparece na varredura. Achou uma lá? Declare-a em `## Dados lidos e gravados` antes de contar; a memória torna essa leitura explícita.
- **DER** — cada campo **nomeado**, mais o `+1` da capacidade de mensagens e o `+1` da ação que dispara o processo.

> **A enumeração é dado, não prosa.** No N3, a lista de ALR e a de DER de cada processo elementar ficam num bloco ```json logo abaixo do cabeçalho dele na `### Memória de cálculo` — `{"pe": "<nome da linha da tabela>", "alr": [...], "der": [..., "Mensagem", "Ação"]}`, mais `nao_contados` quando houver e, na linha de 0 PF, só `motivo`. O item é o **nome** do campo ou do arquivo lógico, nada mais: a planilha de entrega copia cada item para uma célula, e parêntese de anotação, explicação ou "(mesmos campos)" viram dado errado na mão da equipe de métricas. O motivo de cada leitura e o artigo do CPM ficam em prosa, fora do bloco. As listas têm o tamanho do ALR e do DER da tabela; o gate F8 (`valida-enumeracao-contagem.mjs`) confere ao gravar.
- **O que ficou de fora, e por quê** — campo de controle, `dado de código`, campo repetido já contado, atributo que não cruza a fronteira. É a parte que mais evita rediscussão.

Para funções de dados, a mesma coisa: cada **RLR** nomeado (e, no caso de entidade dependente, por que ela entra como subgrupo e não como arquivo próprio) e cada **DER** nomeado por entidade, mais o `+1` do identificador.

Os totais da memória **têm de bater** com a linha da tabela de contagem. Divergência entre os dois é erro de contagem, não de redação.

---

## Tabelas de complexidade e tamanho (CPM 5.4.6/5.4.7, 5.5.6/5.5.7)

**Tabela 1 — Complexidade da função de DADOS (ALI/AIE)** — por RLR × DER:

| RLR \ DER | 1–19 | 20–50 | > 50 |
|---|---|---|---|
| **1** | Baixa | Baixa | Média |
| **2–5** | Baixa | Média | Alta |
| **> 5** | Média | Alta | Alta |

**Tabela 6 — Complexidade de EE** — por ALR × DER:

| ALR \ DER | 1–4 | 5–15 | > 15 |
|---|---|---|---|
| **0–1** | Baixa | Baixa | Média |
| **2** | Baixa | Média | Alta |
| **> 2** | Média | Alta | Alta |

**Tabela 7 — Complexidade de SE e CE** — por ALR × DER:

| ALR \ DER | 1–5 | 6–19 | > 19 |
|---|---|---|---|
| **0–1** | Baixa | Baixa | Média |
| **2–3** | Baixa | Média | Alta |
| **> 3** | Média | Alta | Alta |

**Tamanho em PF (Tabelas 2 e 8):**

| Complexidade | ALI | AIE | EE | SE | CE |
|---|---|---|---|---|---|
| **Baixa** | 7 | 5 | 3 | 4 | 3 |
| **Média** | 10 | 7 | 4 | 5 | 4 |
| **Alta** | 15 | 10 | 6 | 7 | 6 |

---

## Fórmulas de tamanho funcional (CPM 5.8)

- **Projeto de desenvolvimento:** `DFP = ADD + CFP`
- **Aplicação (baseline):** `AFP = ADD`
- **Projeto de melhoria:** `EFP = ADD + CHGA + CFP + DEL`
- **Aplicação após melhoria:** `AFPA = (AFPB + ADD + CHGA) − (CHGB + DEL)`

Onde: **ADD** = funções incluídas; **CHGA** = funções alteradas (como ficarão depois); **CHGB** = funções alteradas (como eram antes); **DEL** = funções excluídas; **CFP** = funcionalidade de conversão; **AFPB** = PF da aplicação antes da melhoria.

---

## Árvore de decisão rápida (fluxograma mental)

```
É dado armazenado/referenciado?
├─ SIM → Função de DADOS
│   ├─ Mantido pela app medida? → ALI
│   └─ Só referenciado (e é ALI em outra)? → AIE
│   └─ Não é mantido por nenhuma app? → NÃO CONTA
│   └─ É dado de código? → NÃO CONTA
└─ NÃO → É processamento (PE)?
    ├─ É significativo, completo, autocontido, consistente? → SIM → continuar
    │   ├─ IP = manter ALI ou alterar comportamento + recebe de fora? → EE
    │   └─ IP = apresentar informação?
    │       ├─ Tem cálculo/dado derivado/atualiza ALI/altera comportamento? → SE
    │       └─ Recuperação pura, sem processamento adicional? → CE
    └─ NÃO atende os 4 critérios → NÃO É PE (navegação, parte de PE maior, etc.)
```

---

## Arquivos de referência

Abra sob demanda para regras detalhadas e exemplos do CPM:

- `references/cpm-4.3.1/` — **o manual do IFPUG na íntegra, em português** (33 arquivos). É a
  **fonte normativa**: os demais arquivos de `references/` são a destilação operacional, e o
  manual decide quando os dois divergirem ou quando a dúvida for de regra. Abra pelo
  `references/cpm-4.3.1/00-indice.md`, que diz o que há em cada parte e quando recorrer a ela —
  em resumo: **Parte 2** para o procedimento e as matrizes, **Parte 3** para os casos difíceis
  (dados de código, agrupamento de arquivos lógicos, projeto de melhoria), **Parte 4** para
  calibrar contra exemplo resolvido, **Parte 5** para o glossário.
- `references/funcoes-dados.md` — identificar/agrupar dados, exclusão de **dados de código**, classificar ALI/AIE, contar DER e RLR (com exemplos).
- `references/funcoes-transacao.md` — identificar processos elementares e unicidade, as **13 formas de lógica de processamento**, classificar EE/SE/CE (tabelas de intenção primária e de lógica), contar ALR e DER (inclusive o que **não** é DER).
- `references/glossario.md` — definições oficiais dos termos (processo elementar, estado consistente, dado derivado, fronteira, etc.).
- `references/exemplos.md` — **casos resolvidos** da Parte 4 do CPM, um de cada tipo (ALI, AIE, EE, SE, CE) com a conta fechada e as lições; consulte ao conduzir uma contagem ou em dúvida de classificação.

---

## Ao conduzir uma contagem, sempre

- Registre **suposições** e dúvidas resolvidas — uma contagem é rastreável.
- Apresente o resultado como **lista de funções** (nome, tipo, complexidade, PF) + **total**, e indique o **tipo de contagem** e a **fórmula** usada.
- Em caso de ambiguidade EE/SE/CE ou ALI/AIE, **mostre o raciocínio** (intenção primária + quais formas de lógica estão presentes) antes de cravar o tipo.
- Ao classificar uma transação, **liste explicitamente as formas de lógica** (1–13) que o PE executa para justificar a classificação.
