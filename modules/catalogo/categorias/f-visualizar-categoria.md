<!-- docqui: 7.0.0 | prompt: MIGRA_NIVEIS | atualizado: 2026-10-21 -->
---
id: CAT-CTG-05
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

# Visualizar Categoria
> **Nível 3** - Agrupamento Funcional: Categorias — Domínio: Catálogo - `CAT-CTG-05`

## Descrição

Permite que o gestor de catálogo visualize todos os dados de uma categoria e quantos produtos ela tem, sem alterar nada.

Na Pesquisa de Categorias, o gestor aciona o ícone de visualizar da linha; a ficha abre em modal, só para leitura, e fecha pelo botão **Fechar**.

## Regras de negócio

- **RN-01** — A quantidade de produtos é o número de produtos vinculados à categoria, esgotados inclusive.

## Cenários

```gherkin
Feature: Visualizar Categoria

  Background:
    Given que o gestor de catálogo está na Pesquisa de Categorias

  # Caminho feliz
  @RN-01
  Scenario: Ficha de uma categoria com produtos
    When o gestor aciona visualizar na linha "Vestuário"
    Then o sistema mostra o Nome da categoria "Vestuário", a Descrição "Camisetas e bonés", a Situação "Ativa" e a Data de cadastro
    And mostra 2 em Quantidade de produtos, contando o "Boné ACME aba curva", que está esgotado

  @RN-01
  Scenario: Ficha de uma categoria sem produtos
    When o gestor aciona visualizar na linha "Brinquedos"
    Then o sistema mostra 0 em Quantidade de produtos

  Scenario: Categoria sem descrição
    Given que a categoria "Jardinagem" foi cadastrada sem descrição
    When o gestor aciona visualizar na linha "Jardinagem"
    Then o sistema mostra "—" em Descrição

  # Restrições de acesso
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Tentativa sem acesso à funcionalidade
    Given que a pessoa não tem acesso à funcionalidade
    When tenta visualizar uma categoria
    Then o sistema exibe "Você não tem permissão para esta ação."
    And não mostra os dados da categoria

  # Estados especiais
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Categoria excluída antes de abrir a ficha
    Given que outra pessoa excluiu a categoria "Brinquedos"
    When o gestor aciona visualizar na linha "Brinquedos"
    Then o sistema exibe "Registro não encontrado."
```

## Campos

| Label PO | Entidade | Preenchimento | Edição | Tipo | Obrigatório | Validação |
|---|---|---|---|---|---|---|
| Nome da categoria | Categoria | exibido do cadastro | somente leitura | texto | — | — |
| Descrição | Categoria | exibido do cadastro | somente leitura | texto | — | Vazia aparece como "—" |
| Situação | Categoria | exibido do cadastro | somente leitura | lista (Ativa, Inativa) | — | — |
| Data de cadastro | Categoria | exibido do cadastro | somente leitura | data | — | — |
| Quantidade de produtos | derivado ↓ | calculado | somente leitura | número | — | Inteiro maior ou igual a zero |

## Derivações

| Campo derivado | Fórmula (Label PO) | Campos-fonte (Entidade) |
|---|---|---|
| Quantidade de produtos | Contagem dos produtos cuja Categoria é a categoria visualizada | Categoria (Produto) |

## Campos automáticos

| Label PO | Valor | Quando |
|---|---|---|
| — | Nenhum campo é preenchido automaticamente nesta funcionalidade | — |

## Superfície

**Modal** — origem: Pesquisar Categorias (Pesquisa de Categorias, `/catalogo/categorias`).

**Fidelidade ao protótipo**: referência · `prototypes/catalogo/categorias/flow.html` · [abrir o protótipo ↗](../../../prototypes/catalogo/categorias/flow.html)

## Comportamento de tela

### Onde fica

A ficha abre em modal sobre a Pesquisa de Categorias, pelo ícone de visualizar da linha, com cada dado em rótulo e valor. A única ação é **Fechar**; a edição é feita por CAT-CTG-03 — Editar Categoria, a partir da linha da pesquisa.

### Estados da tela

| Estado | Comportamento |
|---|---|
| Inicial | Modal com os dados da categoria, só para leitura |
| Loading | Mostrar "Carregando…" no lugar dos dados enquanto carrega |
| Erro de servidor | Mostrar "Não foi possível carregar os dados." no modal |
| Sucesso | Mostrar todos os campos e a quantidade de produtos |
| Registro inexistente | Mostrar "Registro não encontrado." e voltar à pesquisa |

## Critérios de sucesso

| # | Critério mensurável | Origem |
|---|---|---|
| SC-01 | A quantidade de produtos da ficha confere com os produtos vinculados à categoria, esgotados inclusive | CA-5 e RN-01 |
| SC-02 | Nenhum dado da categoria pode ser alterado a partir da ficha | CA-5 |

## Métricas de tamanho

| Função de Transação | Papel | Tipo | ALR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|
| Visualizar Categoria | principal | — | — | — | — | — | — |

A contagem está pendente e deve nascer da análise desta funcionalidade via CT, com memória de cálculo.

## Origem

| Ticket (AIMM) | Tipo | Critérios cobertos |
|---|---|---|
| [`STRY0013170`](../../../analise-impacto/AIMM-STRY0013170.md) | Criação | `CA-5` — consulta aos dados da categoria e à quantidade de produtos |

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-18 | Claude | N3 criado | Ficha da categoria em modal, somente leitura, derivada do cadastro, a partir do ticket fictício STRY0013170; gates sem aprovação e contagem pendente. |
| 2026-10-18 | Claude | Ajuste | Seções reordenadas: a Superfície vai para antes da seção Comportamento de tela e a Origem vai para antes da seção Changelog. Nenhuma regra, cenário ou campo muda. |
| 2026-10-20 | Docqui Caixa | Terminologia | Adoção de AIMM; histórico e chave preservados. |
| 2026-10-21 | Docqui Caixa | Terminologia | Níveis em português: Domínio, Agrupamento Funcional e Funcionalidade; histórico preservado. |
