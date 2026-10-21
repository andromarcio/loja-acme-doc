<!-- docqui: 7.0.0 | prompt: MIGRA_NIVEIS | atualizado: 2026-10-21 -->
---
id: CAT-CTG-03
agrupamento_funcional: CAT-CTG
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

# Editar Categoria
> **Nível 3** - Agrupamento Funcional: Categorias — Domínio: Catálogo - `CAT-CTG-03`

## Descrição

Permite que o gestor de catálogo altere a descrição e a situação de uma categoria, mantendo o nome; ao inativá-la, os produtos dela saem da vitrine sem sair do catálogo.

Na Pesquisa de Categorias, o gestor aciona o ícone de editar da linha; no modal, o nome aparece só para leitura, e ele altera a descrição ou a situação e aciona **Salvar**. Se inativar uma categoria que tem produtos, confirma antes de salvar.

## Regras de negócio

- **RN-01** — O nome da categoria não muda depois do cadastro.
- **RN-02** — Uma categoria inativa mantém os seus produtos. → ver N1 Catálogo: Regras transversais de negócio: 2

## Cenários

```gherkin
Feature: Editar Categoria

  Background:
    Given que o gestor de catálogo abriu a edição de uma categoria a partir da Pesquisa de Categorias
    And que a categoria "Cozinha" está ativa e tem 2 produtos
    And que a categoria "Decoração" está inativa e tem 1 produto

  # Caminho feliz
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Descrição alterada
    Given que a categoria em edição é "Papelaria"
    When o gestor altera a Descrição para "Blocos, cadernos, canetas e agendas"
    And aciona "Salvar"
    Then o sistema exibe "Registro salvo com sucesso."
    And a Pesquisa de Categorias mostra "Papelaria" com a nova descrição

  @RN-02
  # ← MESSAGE-DICTIONARY: CAT_INATIVAR_COM_PRODUTOS
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Categoria com produtos inativada após confirmação
    Given que a categoria em edição é "Cozinha"
    When o gestor altera a Situação para "Inativa"
    And aciona "Salvar"
    Then o sistema pergunta "Os produtos desta categoria deixarão de aparecer na vitrine. Deseja continuar?"
    When o gestor confirma
    Then o sistema exibe "Registro salvo com sucesso."
    And a categoria "Cozinha" aparece como "Inativa" com os mesmos 2 produtos
    And os produtos de "Cozinha" deixam de aparecer na vitrine

  # ← MESSAGE-DICTIONARY: CAT_INATIVAR_COM_PRODUTOS
  Scenario: Gestor desiste de inativar
    Given que a categoria em edição é "Cozinha"
    When o gestor altera a Situação para "Inativa"
    And aciona "Salvar"
    And desiste na pergunta "Os produtos desta categoria deixarão de aparecer na vitrine. Deseja continuar?"
    Then a categoria "Cozinha" continua "Ativa"
    And o modal continua aberto com a alteração não salva

  @RN-02
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Categoria inativa reativada
    Given que a categoria em edição é "Decoração"
    When o gestor altera a Situação para "Ativa"
    And aciona "Salvar"
    Then o sistema exibe "Registro salvo com sucesso."
    And a categoria "Decoração" aparece como "Ativa" com o mesmo produto

  # Erros de validação
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Descrição com mais de 200 caracteres
    When o gestor informa uma descrição com 201 caracteres
    And aciona "Salvar"
    Then o sistema exibe abaixo do campo "Máximo de 200 caracteres."
    And não salva a alteração

  # Conflitos com dados existentes
  @RN-01
  Scenario: Nome da categoria não editável
    Given que a categoria em edição é "Cozinha"
    When o modal de edição abre
    Then o Nome da categoria "Cozinha" aparece somente para leitura
    And não há campo para alterá-lo

  # Restrições de acesso
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Tentativa sem acesso à funcionalidade
    Given que a pessoa não tem acesso à funcionalidade
    When tenta editar uma categoria
    Then o sistema exibe "Você não tem permissão para esta ação."
    And não salva a alteração

  # Estados especiais
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Categoria excluída enquanto era editada
    Given que outra pessoa excluiu a categoria em edição
    When o gestor aciona "Salvar"
    Then o sistema exibe "Registro não encontrado."

  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Falha inesperada ao salvar
    When a alteração não pode ser concluída por falha inesperada
    Then o sistema exibe "Ocorreu um erro. Tente novamente."
    And mantém no modal os dados informados
```

## Campos

| Label PO | Entidade | Preenchimento | Edição | Tipo | Obrigatório | Validação |
|---|---|---|---|---|---|---|
| Nome da categoria | Categoria | exibido do cadastro | imutável | texto | — | Não muda depois do cadastro |
| Descrição | Categoria | entrada do usuário | editável | texto | não | Até 200 caracteres |
| Situação | Categoria | entrada do usuário | editável | lista (Ativa, Inativa) | sim | Inativar uma categoria com produtos pede confirmação |

## Campos automáticos

| Label PO | Valor | Quando |
|---|---|---|
| — | Nenhum campo é preenchido automaticamente nesta funcionalidade | — |

## Dados lidos e gravados

| Entidade | Papel | Por que a funcionalidade a toca |
|---|---|---|
| Produto | lê | Saber se a categoria tem produtos, para pedir a confirmação ao inativá-la (RN-02) |

## Superfície

**Modal** — origem: Pesquisar Categorias (Pesquisa de Categorias, `/catalogo/categorias`).

**Fidelidade ao protótipo**: referência · `prototypes/catalogo/categorias/flow.html` · [abrir o protótipo ↗](../../../prototypes/catalogo/categorias/flow.html)

## Comportamento de tela

### Onde fica

A edição abre em modal sobre a Pesquisa de Categorias, pelo ícone de editar da linha. O modal mostra o Nome da categoria como rótulo e valor, sem campo de entrada, e os campos Descrição e Situação já preenchidos, com os botões **Cancelar** e **Salvar**. A confirmação de inativação é uma caixa de diálogo sobre o modal.

### Estados da tela

| Estado | Comportamento |
|---|---|
| Inicial | Modal com Descrição e Situação preenchidas com os dados atuais e o nome só para leitura |
| Loading | Mostrar "Carregando…" no botão **Salvar** e evitar novo acionamento enquanto salva |
| Erro de validação | Mostrar a mensagem literal abaixo do campo; o modal continua aberto |
| Erro de servidor | Mostrar "Ocorreu um erro. Tente novamente." no modal, mantendo os dados informados |
| Sucesso | Fechar o modal, mostrar o aviso "Registro salvo com sucesso." e atualizar a lista |
| Confirmação de inativação | Ao inativar categoria com produtos, perguntar "Os produtos desta categoria deixarão de aparecer na vitrine. Deseja continuar?" antes de salvar |
| Registro inexistente | Mostrar "Registro não encontrado." e voltar à pesquisa |

## Critérios de sucesso

| # | Critério mensurável | Origem |
|---|---|---|
| SC-01 | Nenhuma edição altera o nome de uma categoria | CA-3 e RN-01 |
| SC-02 | A categoria inativada mantém o mesmo número de produtos que tinha antes | CA-3 e RN-02 |
| SC-03 | Toda inativação de categoria com produtos passa pela confirmação antes de ser salva | CA-3 |

## Métricas de tamanho

| Função de Transação | Papel | Tipo | ALR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|
| Editar Categoria | principal | — | — | — | — | — | — |

A contagem está pendente e deve nascer da análise desta funcionalidade via CT, com memória de cálculo.

## Origem

| Ticket (AIMM) | Tipo | Critérios cobertos |
|---|---|---|
| [`STRY0013170`](../../../analise-impacto/AIMM-STRY0013170.md) | Criação | `CA-3` — alteração da descrição e da situação, sem mudar o nome; categoria inativa fora da vitrine |
| [`STRY0013205`](../../../analise-impacto/AIMM-STRY0013205.md) | Alteração | `CA-2` — trocar ou retirar a categoria superior (AIMM em análise, sem aval da PO) |

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-18 | Claude | N3 criado | Edição de categoria em modal, derivada do cadastro, a partir do ticket fictício STRY0013170: nome imutável e confirmação ao inativar categoria com produtos; gates sem aprovação e contagem pendente. |
| 2026-10-18 | Claude | Ajuste | Seções reordenadas: a Superfície vai para antes da seção Comportamento de tela e a Origem vai para antes da seção Changelog. Nenhuma regra, cenário ou campo muda. |
| 2026-10-20 | Docqui Caixa | Terminologia | Adoção de AIMM; histórico e chave preservados. |
| 2026-10-21 | Claude | Origem | Ticket `STRY0013205` registrado na Origem: a AIMM está em análise e ainda não muda campos, regras ou cenários. |
| 2026-10-21 | Docqui Caixa | Terminologia | Níveis em português: Domínio, Agrupamento Funcional e Funcionalidade; histórico preservado. |
