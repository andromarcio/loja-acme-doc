<!-- docqui: 6.4.1 | prompt: PROMPT_DATA_MODEL_negocio | atualizado: 2026-10-14 -->
# DATA-MODEL.md
> Índice dos modelos de entidades da Loja ACME. O perfil é `requisitos`: os fragmentos descrevem atributos em Label PO e relacionamentos de negócio, sem definir banco ou API.

## Convenção de nomenclatura

Entidades usam nomes em português, como `Pedido` e `TabelaFrete`. Os atributos usam rótulos de negócio; a validação de campos canônicos é referenciada no FIELD-DICTIONARY.

## Modelos por domínio

| Domínio | Arquivo | Tipo | Entidades/Artefatos |
|---|---|---|---|
| Vendas | [data-models/vendas.md](data-models/vendas.md) | entidades | Pedido, TabelaFrete |

## Relacionamentos

Uma faixa da TabelaFrete pode atender vários pedidos. O detalhe está no fragmento de [Vendas](data-models/vendas.md#relacionamentos).

## Arquivos Lógicos (APF)

As funções de dados ainda não foram dimensionadas. Nenhum ALI/AIE recebe PF por existir como entidade; a identificação e a contagem serão realizadas via CT, com memória de cálculo.

### ALIs — Arquivos Lógicos Internos

| ALI | Domínio | Entidades constituintes | RLR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|

### AIEs — Arquivos de Interface Externa

| AIE | Sistema externo | Entidades / estruturas usadas | RLR | DER | Complexidade | PF | Data |
|---|---|---|---|---|---|---|---|

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-14 | Copilot | Modelo negocial | Índice de Vendas preenchido para demonstração, sem modelagem física ou contagem. |
