<!-- docqui: 6.4.10 | prompt: PROMPT_CRUD | atualizado: 2026-10-18 -->
---
id: VIT-DST-05
feature_set: VIT-DST
dominio: VIT
entidade: Destaque
data_model_ref: data-models/vitrine.md#destaque
endpoints: []
error_codes: []
depende_de: []
origem:
  tipo: servicenow
  chave: STRY0013180
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

# Visualizar Destaque
> **Nível 3** - Feature Set: Destaques — Major Feature Set: Vitrine - `VIT-DST-05`

## Descrição

Permite que o gestor de catálogo consulte todos os dados de um destaque — produto, chamada, ordem, vigência, situação e data de cadastro — sem risco de alterá-los.

Na pesquisa de destaques, o gestor aciona visualizar na linha do destaque; a ficha abre só para leitura, com o botão **Voltar**.

## Origem

| Ticket (AIM) | Tipo | Critérios cobertos |
|---|---|---|
| [`STRY0013180`](../../../analise-impacto/AIM-STRY0013180.md) | Criação | `CA-5` — consulta de todos os dados de um destaque |

## Superfície

**Tela própria** — rota: Visualizar Destaque (`/vitrine/destaques/:id`), acessada da Pesquisa de Destaques.

**Fidelidade ao protótipo**: referência · `prototypes/vitrine/destaques/flow.html` · [abrir o protótipo ↗](../../../prototypes/vitrine/destaques/flow.html)

## Regras de negócio

- **RN-01** — A situação mostrada é derivada da vigência e da data de hoje. → ver RULES-DICTIONARY: RC-03 — Período de vigência (parâmetro: Início da vigência e Fim da vigência, inclusive)
- **RN-02** — A ficha do destaque não altera nenhum dado.

## Cenários

```gherkin
Feature: Visualizar Destaque

  Background:
    Given que o gestor de catálogo está na pesquisa de destaques
    And que hoje é 18/10/2026

  # Caminho feliz
  @RN-01
  Scenario: Ficha de destaque vigente
    When o gestor visualiza o destaque da "Garrafa térmica ACME 500 ml"
    Then o sistema mostra o produto "Garrafa térmica ACME 500 ml", a chamada "Café quente o dia todo", a ordem de exibição 1 e a vigência de 01/10/2026 a 31/10/2026
    And a situação "Vigente" e a data de cadastro

  @RN-01
  Scenario: Ficha de destaque encerrado
    When o gestor visualiza o destaque da "Caneca de cerâmica ACME 300 ml"
    Then o sistema mostra a situação "Encerrado"

  @RN-02
  Scenario: Ficha somente para leitura
    When o gestor visualiza qualquer destaque
    Then nenhum dado aparece em campo editável
    And a única ação da ficha é "Voltar"

  # Restrições de acesso
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Tentativa sem acesso à funcionalidade
    Given que a pessoa não tem acesso à funcionalidade
    When tenta visualizar um destaque
    Then o sistema exibe "Você não tem permissão para esta ação."
    And não mostra a ficha

  # Estados especiais
  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Destaque excluído
    Given que outra pessoa excluiu o destaque
    When o gestor tenta visualizá-lo
    Then o sistema exibe "Registro não encontrado."

  # ← MESSAGE-DICTIONARY: BASELINE
  Scenario: Falha ao carregar a ficha
    When a ficha não pode ser carregada por falha inesperada
    Then o sistema exibe "Não foi possível carregar os dados."
```

## Campos

| Label PO | Entidade | Preenchimento | Edição | Tipo | Obrigatório | Validação |
|---|---|---|---|---|---|---|
| Produto | Produto | exibido do cadastro | somente leitura | seleção → Produto | não | — |
| Chamada | Destaque | exibido do cadastro | somente leitura | texto | não | — |
| Ordem de exibição | Destaque | exibido do cadastro | somente leitura | número | não | — |
| Início da vigência | Destaque | exibido do cadastro | somente leitura | data | não | — |
| Fim da vigência | Destaque | exibido do cadastro | somente leitura | data | não | — |
| Situação | derivado ↓ | calculado | somente leitura | lista (Programado, Vigente, Encerrado) | não | — |
| Data de cadastro | Destaque | exibido do cadastro | somente leitura | data | não | — |

## Derivações

| Campo derivado | Fórmula (Label PO) | Campos-fonte (Entidade) |
|---|---|---|
| Situação | Programado quando hoje é anterior ao Início da vigência; Vigente quando hoje está entre o Início e o Fim da vigência, inclusive; Encerrado quando hoje é posterior ao Fim da vigência | Início da vigência (Destaque), Fim da vigência (Destaque) |

## Campos automáticos

| Label PO | Valor | Quando |
|---|---|---|
| — | Nenhum campo é preenchido automaticamente nesta feature | — |

## Comportamento de tela

### Onde fica

Página própria Visualizar Destaque (`/vitrine/destaques/:id`), aberta pela ação visualizar na linha da Pesquisa de Destaques. A ficha mostra os dados em pares rótulo e valor, com a situação em etiqueta; a única ação é **Voltar**, que retorna à pesquisa.

### Estados da tela

| Estado | Comportamento |
|---|---|
| Inicial | Ficha com os sete dados do destaque, só para leitura |
| Loading | Mostrar "Carregando…" no lugar da ficha |
| Erro de servidor | Mostrar "Não foi possível carregar os dados." |
| Sucesso | Ficha completa, com a situação em etiqueta |
| Registro não encontrado | Mostrar "Registro não encontrado." e o botão **Voltar** |
| Sem acesso | Mostrar "Você não tem permissão para esta ação." sem a ficha |

## Critérios de sucesso

| # | Critério mensurável | Origem |
|---|---|---|
| SC-01 | A ficha mostra os sete dados do destaque: produto, chamada, ordem de exibição, início e fim da vigência, situação e data de cadastro | CA-5 |
| SC-02 | A situação da ficha é sempre a mesma que a pesquisa mostra para a data de hoje | CA-5 e RN-01 |

## Métricas de tamanho

| Função de Transação | Papel | Tipo | ALR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|
| Visualizar Destaque | principal | — | — | — | — | — | — |

A contagem está pendente e deve nascer da análise desta feature via CT, com memória de cálculo.

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-18 | Claude | N3 criado | Ficha do destaque do ticket fictício STRY0013180, derivada do cadastro, somente leitura, com a situação derivada da vigência (RC-03); gates sem aprovação e contagem pendente. |
