<!-- docqui: 6.4.27 | prompt: PROMPT_AIMM | atualizado: 2026-10-21 -->
---
id: CAT-CTG-02
feature_set: CAT-CTG
dominio: CAT
entidade: Categoria
data_model_ref: data-models/catalogo.md#categoria
endpoints: []
error_codes: []
depende_de: []
origem:
  tipo: servicenow
  chave: STRY0013170
estado: rascunho
gates:
  requisitos: { aprovado: false, por: "", em: "", pr: "" }
  modelo-dados: { aprovado: false, por: "", em: "", pr: "" }
  testes: { aprovado: false, por: "", em: "", pr: "" }
  codigo: { aprovado: false, por: "", em: "", pr: "" }
contagem:
  pendente: true
  revisada_em: ""
  revisada_ate: ""
---

# Cadastrar Categoria
> **Nível 3** - Feature Set: Categorias — Major Feature Set: Catálogo - `CAT-CTG-02`

## Descrição

Permite que o gestor de catálogo cadastre uma nova categoria de produtos, com nome único e uma descrição opcional, que passa a existir como ativa no catálogo.

Na Pesquisa de Categorias, o gestor aciona **Cadastrar categoria**; no modal, informa o nome e, se quiser, a descrição, e aciona **Salvar**. A categoria cadastrada aparece na pesquisa.

## Regras de negócio

- **RN-01** — O nome da categoria é único entre as categorias, ativas ou inativas, sem diferenciar maiúsculas, minúsculas e acentos.
- **RN-02** — Toda categoria nasce ativa.

## Cenários

```gherkin
Feature: Cadastrar Categoria

  Background:
    Given que o gestor de catálogo abriu o cadastro de categoria a partir da Pesquisa de Categorias
    And que existem as categorias Cozinha, Vestuário, Papelaria, Acessórios, Decoração e Brinquedos

  # Caminho feliz
  @RN-02
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Categoria cadastrada com nome e descrição
    When o gestor informa "Jardinagem" em Nome da categoria
    And informa "Vasos, regadores e sementes" em Descrição
    And aciona "Salvar"
    Then o sistema exibe "Registro salvo com sucesso."
    And a categoria "Jardinagem" aparece na Pesquisa de Categorias com a situação "Ativa"

  Scenario: Categoria cadastrada sem descrição
    When o gestor informa "Jardinagem" em Nome da categoria
    And deixa a Descrição vazia
    And aciona "Salvar"
    Then o sistema exibe "Registro salvo com sucesso."

  # Erros de validação
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Nome da categoria vazio
    When o gestor deixa o Nome da categoria vazio
    And aciona "Salvar"
    Then o sistema exibe abaixo do campo "Campo obrigatório."
    And não cadastra a categoria

  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Nome da categoria com mais de 40 caracteres
    When o gestor informa um nome com 41 caracteres
    And aciona "Salvar"
    Then o sistema exibe abaixo do campo "Máximo de 40 caracteres."

  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Descrição com mais de 200 caracteres
    When o gestor informa uma descrição com 201 caracteres
    And aciona "Salvar"
    Then o sistema exibe abaixo do campo "Máximo de 200 caracteres."

  # Conflitos com dados existentes
  @RN-01
  # ← MESSAGE-DICTIONARY: CAT_CATEGORIA_DUPLICADA
  Scenario: Nome igual ao de outra categoria
    When o gestor informa "cozinha" em Nome da categoria
    And aciona "Salvar"
    Then o sistema exibe abaixo do campo "Já existe uma categoria com este nome."
    And não cadastra a categoria

  @RN-01
  # ← MESSAGE-DICTIONARY: CAT_CATEGORIA_DUPLICADA
  Scenario: Nome igual ao de uma categoria inativa, sem acento
    When o gestor informa "Decoracao" em Nome da categoria
    And aciona "Salvar"
    Then o sistema exibe abaixo do campo "Já existe uma categoria com este nome."

  # Restrições de acesso
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Tentativa sem acesso à funcionalidade
    Given que a pessoa não tem acesso à funcionalidade
    When tenta cadastrar uma categoria
    Then o sistema exibe "Você não tem permissão para esta ação."
    And não cadastra a categoria

  # Estados especiais
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Falha inesperada ao salvar
    When o cadastro não pode ser concluído por falha inesperada
    Then o sistema exibe "Ocorreu um erro. Tente novamente."
    And mantém no modal os dados informados
```

## Campos

| Label PO | Entidade | Preenchimento | Edição | Tipo | Obrigatório | Validação |
|---|---|---|---|---|---|---|
| Nome da categoria | Categoria | entrada do usuário | editável | texto | sim | Até 40 caracteres; único entre as categorias, sem diferenciar maiúsculas, minúsculas e acentos |
| Descrição | Categoria | entrada do usuário | editável | texto | não | Até 200 caracteres |

## Campos automáticos

| Label PO | Valor | Quando |
|---|---|---|
| Situação | Ativa | Ao salvar o cadastro |
| Data de cadastro | Data do dia | Ao salvar o cadastro |

## Superfície

**Modal** — origem: Pesquisar Categorias (Pesquisa de Categorias, `/catalogo/categorias`).

**Fidelidade ao protótipo**: referência · `prototypes/catalogo/categorias/flow.html` · [abrir o protótipo ↗](../../../prototypes/catalogo/categorias/flow.html)

## Comportamento de tela

### Onde fica

O cadastro abre em modal sobre a Pesquisa de Categorias, pelo botão **Cadastrar categoria** no topo da lista, com os campos Nome da categoria e Descrição e os botões **Cancelar** e **Salvar**. Ao salvar, o modal fecha e a lista é atualizada.

### Estados da tela

| Estado | Comportamento |
|---|---|
| Inicial | Modal com os dois campos vazios e sem mensagens de erro |
| Loading | Mostrar "Carregando…" no botão **Salvar** e evitar novo acionamento enquanto salva |
| Erro de validação | Mostrar a mensagem literal abaixo do campo; o modal continua aberto |
| Erro de servidor | Mostrar "Ocorreu um erro. Tente novamente." no modal, mantendo os dados informados |
| Sucesso | Fechar o modal, mostrar o aviso "Registro salvo com sucesso." e atualizar a lista |
| Cancelado | Fechar o modal sem cadastrar nada |

## Critérios de sucesso

| # | Critério mensurável | Origem |
|---|---|---|
| SC-01 | Toda categoria cadastrada aparece na pesquisa com a situação Ativa | CA-2 e RN-02 |
| SC-02 | Nenhum cadastro com nome já existente, com qualquer combinação de maiúsculas e acentos, é aceito | CA-2 e RN-01 |

## Métricas de tamanho

| Função de Transação | Papel | Tipo | ALR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|
| Cadastrar Categoria | principal | — | — | — | — | — | — |

A contagem está pendente e deve nascer da análise desta feature via CT, com memória de cálculo.

## Origem

| Ticket (AIMM) | Tipo | Critérios cobertos |
|---|---|---|
| [`STRY0013170`](../../../analise-impacto/AIMM-STRY0013170.md) | Criação | `CA-2` — cadastro com nome e descrição opcional, sem nomes repetidos |
| [`STRY0013205`](../../../analise-impacto/AIMM-STRY0013205.md) | Alteração | `CA-1, CA-3` — categoria superior no cadastro e nome único entre as categorias com a mesma categoria superior (AIMM em análise, sem aval da PO) |

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-18 | Claude | N3 criado | Cadastro de categoria em modal, fonte canônica do CRUD, a partir do ticket fictício STRY0013170; gates sem aprovação e contagem pendente. |
| 2026-10-18 | Claude | Ajuste | Seções reordenadas: a Superfície vai para antes da seção Comportamento de tela e a Origem vai para antes da seção Changelog. Nenhuma regra, cenário ou campo muda. |
| 2026-10-20 | Docqui Caixa | Terminologia | Adoção de AIMM; histórico e chave preservados. |
| 2026-10-21 | Claude | Origem | Ticket `STRY0013205` registrado na Origem: a AIMM está em análise e ainda não muda campos, regras ou cenários. |
