<!-- docqui: 7.0.0 | prompt: MIGRA_NIVEIS | atualizado: 2026-10-21 -->
---
id: VIT-NAV-02
agrupamento_funcional: VIT-NAV
dominio: VIT
entidade: Produto
data_model_ref: data-models/catalogo.md#produto
endpoints: []
error_codes: []
depende_de: []
origem:
  tipo: servicenow
  chave: STRY0013175
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

# Pesquisar Produtos na Vitrine
> **Nível 3** - Agrupamento Funcional: Navegação — Domínio: Vitrine - `VIT-NAV-02`

## Descrição

Permite que a pessoa que visita a loja pesquise os produtos à venda por parte do nome e por categoria, vendo o nome, a categoria, o preço e a disponibilidade de cada um.

A pessoa digita o termo no campo de busca da página inicial ou da própria tela de resultados, pode escolher uma categoria e a ordenação — Nome A–Z, Menor preço ou Maior preço — e escolhe um produto para abrir a página dele, em VIT-NAV-03 — Visualizar Produto na Vitrine.

## Regras de negócio

- **RN-01** — A busca encontra os produtos cujo nome contém o termo informado, sem diferenciar maiúsculas, minúsculas e acentos.
- **RN-02** — Quando informado, o termo de busca tem ao menos 2 caracteres.
- **RN-03** — Só aparecem produtos de categorias ativas. → ver N1 Vitrine: Regras transversais de negócio: 1
- **RN-04** — Produto com quantidade em estoque zero aparece com o selo de esgotado. → ver N1 Vitrine: Regras transversais de negócio: 2
- **RN-05** — Sem termo e sem categoria, o resultado traz todos os produtos de categorias ativas.

## Cenários

```gherkin
Feature: Pesquisar Produtos na Vitrine

  Background:
    Given que os produtos e as categorias da demonstração estão cadastrados
    And que a categoria "Decoração" está inativa

  # Caminho feliz
  @RN-01 @RN-03
  Scenario: Busca por parte do nome
    When a pessoa pesquisa "acme"
    Then o sistema mostra, nesta ordem, "Bloco de notas ACME A5", "Boné ACME aba curva", "Camiseta ACME algodão — tamanho M", "Caneca de cerâmica ACME 300 ml", "Caneta esferográfica ACME azul", "Chaveiro ACME de metal", "Ecobag ACME de lona" e "Garrafa térmica ACME 500 ml"
    And não mostra "Almofada ACME estampada"

  @RN-01
  Scenario: Busca sem acento encontra nome acentuado
    When a pessoa pesquisa "ceramica"
    Then o sistema mostra "Caneca de cerâmica ACME 300 ml"

  Scenario: Filtro só por categoria, sem termo
    When a pessoa escolhe a categoria "Cozinha" sem informar termo
    Then o sistema mostra "Caneca de cerâmica ACME 300 ml" e "Garrafa térmica ACME 500 ml"

  @RN-05
  Scenario: Todos os produtos à venda
    When a pessoa abre o resultado da busca sem informar termo nem categoria
    Then o sistema mostra os 8 produtos das categorias ativas, em ordem alfabética

  Scenario: Ordenação pelo menor preço
    When a pessoa pesquisa "acme"
    And escolhe a ordenação "Menor preço"
    Then o primeiro produto é "Caneta esferográfica ACME azul", por "R$ 6,90"
    And o último é "Garrafa térmica ACME 500 ml", por "R$ 89,90"

  # Erros de validação
  @RN-02
  # ← MESSAGE-DICTIONARY: MIN_LENGTH
  Scenario: Termo com menos de 2 caracteres
    When a pessoa pesquisa "a"
    Then o sistema exibe junto ao campo de busca "Mínimo de 2 caracteres."
    And não altera o resultado mostrado

  # Conflitos com dados existentes
  @RN-03
  # ← MESSAGE-DICTIONARY: EMPTY_SEARCH
  Scenario: Produto de categoria inativa não é encontrado
    When a pessoa pesquisa "almofada"
    Then o sistema exibe "Nenhum resultado para a busca."

  Scenario: Categoria inativa fora do filtro
    When a pessoa abre o filtro de categoria
    Then o sistema oferece "Acessórios", "Brinquedos", "Cozinha", "Papelaria" e "Vestuário"
    And não oferece "Decoração"

  # Estados especiais
  # ← MESSAGE-DICTIONARY: EMPTY_SEARCH
  Scenario: Nenhum produto com o termo
    When a pessoa pesquisa "relógio"
    Then o sistema exibe "Nenhum resultado para a busca."

  @RN-04
  # ← MESSAGE-DICTIONARY: VIT_SELO_ESGOTADO
  Scenario: Produto sem estoque no resultado
    Given que o "Boné ACME aba curva" tem quantidade em estoque zero
    When a pessoa pesquisa "boné"
    Then o card do "Boné ACME aba curva" mostra o selo "Esgotado"

  # ← MESSAGE-DICTIONARY: ERROR_STATE
  Scenario: Falha ao pesquisar
    When a pesquisa não pode ser concluída por falha inesperada
    Then o sistema exibe "Não foi possível carregar os dados."
```

## Campos

| Label PO | Entidade | Preenchimento | Edição | Tipo | Obrigatório | Validação |
|---|---|---|---|---|---|---|
| Busca (filtro) | Produto | entrada do usuário | editável | texto | não | Parte do nome do produto; ao menos 2 caracteres quando informado |
| Categoria (filtro) | Categoria | entrada do usuário | editável | seleção → Categoria | não | carga: lista completa; apenas categorias ativas |
| Ordenar por (filtro) | dado de código | entrada do usuário | editável | lista (Nome A–Z, Menor preço, Maior preço) | não | Padrão: Nome A–Z |
| Nome do produto (resultado) | Produto | exibido do cadastro | somente leitura | texto | não | Como cadastrado no Catálogo |
| Categoria (resultado) | Categoria | exibido do cadastro | somente leitura | texto | não | Nome da categoria do produto |
| Preço (resultado) | Produto | exibido do cadastro | somente leitura | valor | não | → ver FIELD-DICTIONARY: Valor monetário |
| Disponibilidade (resultado) | derivado ↓ | calculado | somente leitura | texto | não | Selo "Esgotado" quando o produto não tem estoque |

## Derivações

| Campo derivado | Fórmula (Label PO) | Campos-fonte (Entidade) |
|---|---|---|
| Disponibilidade | Selo "Esgotado" quando a Quantidade em estoque é zero; sem selo nos demais casos | Quantidade em estoque (Produto) |

## Colunas do resultado

| Coluna (Label PO) | Origem | Ordenação |
|---|---|---|
| Nome do produto | cadastro | padrão ↑ |
| Categoria | entidade relacionada (Categoria) | — |
| Preço | cadastro | ordenável |
| Disponibilidade | derivado | — |

## Campos automáticos

| Label PO | Valor | Quando |
|---|---|---|
| — | Nenhum campo é preenchido automaticamente nesta funcionalidade | — |

## Superfície

**Tela própria** — rota: Resultado da busca (`/produtos`), alcançada pelo campo de busca da página inicial.

**Fidelidade ao protótipo**: referência · `prototypes/vitrine/navegacao/flow.html` · [abrir o protótipo ↗](../../../prototypes/vitrine/navegacao/flow.html)

## Comportamento de tela

### Onde fica

A tela de resultado da busca (`/produtos`) tem no topo o mesmo campo de busca da página inicial, com o filtro de categoria e a ordenação ao lado; abaixo, os produtos em cards com o nome, a categoria, o preço e, quando for o caso, o selo de esgotado. Escolher um card abre a página do produto, em VIT-NAV-03 — Visualizar Produto na Vitrine.

### Estados da tela

| Estado | Comportamento |
|---|---|
| Inicial | Chegando da página inicial, o termo digitado já vem preenchido e o resultado aparece; sem termo nem categoria, aparecem todos os produtos de categorias ativas, em ordem alfabética do nome |
| Loading | Mostrar "Carregando…" e os cards em esqueleto, sem permitir nova busca até concluir |
| Erro de validação | Mostrar "Mínimo de 2 caracteres." junto ao campo de busca e manter o resultado anterior |
| Erro de servidor | Mostrar "Não foi possível carregar os dados." no lugar dos cards |
| Sucesso | Mostrar os cards na ordenação escolhida — Nome A–Z quando não se escolhe outra —, com o total de produtos encontrados |
| Empty state | Mostrar "Nenhum resultado para a busca." quando nada atende ao termo e à categoria |
| Produto esgotado | O card do produto sem estoque mostra o selo "Esgotado" e continua levando à página do produto |

## Critérios de sucesso

| # | Critério mensurável | Origem |
|---|---|---|
| SC-01 | A busca "acme" retorna os 8 produtos de categorias ativas e nenhum produto de categoria inativa | CA-2, RN-01 e RN-03 |
| SC-02 | O filtro "Cozinha" retorna só os 2 produtos dessa categoria | CA-2 |
| SC-03 | Nenhuma busca é feita com termo de 1 caractere | RN-02 |

## Métricas de tamanho

| Função de Transação | Papel | Tipo | ALR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|
| Pesquisar Produtos na Vitrine | principal | — | — | — | — | — | — |

A contagem está pendente e deve nascer da análise desta funcionalidade via CT, com memória de cálculo.

## Origem

| Ticket (AIMM) | Tipo | Critérios cobertos |
|---|---|---|
| [`STRY0013175`](../../../analise-impacto/AIMM-STRY0013175.md) | Criação | `CA-2` — busca por parte do nome, filtro por categoria e produtos de categoria inativa fora do resultado |

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-18 | Claude | N3 criado | Busca de produtos da vitrine do ticket fictício STRY0013175, com filtros, colunas, regras e cenários; gates sem aprovação e contagem pendente. |
| 2026-10-18 | Claude | Ajuste | Seções reordenadas: a Superfície vai para antes da seção Comportamento de tela e a Origem vai para antes da seção Changelog. Nenhuma regra, cenário ou campo muda. |
| 2026-10-20 | Docqui Caixa | Terminologia | Adoção de AIMM; histórico e chave preservados. |
| 2026-10-21 | Docqui Caixa | Terminologia | Níveis em português: Domínio, Agrupamento Funcional e Funcionalidade; histórico preservado. |
