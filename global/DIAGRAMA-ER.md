<!-- gerado por scripts/gera-diagrama-er.mjs a partir de global/data-models/*.md — não editar à mão -->
# Diagrama ER
> Um diagrama por domínio, derivado dos fragmentos de `global/data-models/`. A fonte é o fragmento: mude lá e rode `node scripts/gera-diagrama-er.mjs`. Os campos globais implícitos ficam de fora, como no fragmento; entidade de outro domínio aparece como caixa vazia.

## Vendas

Fonte: [`data-models/vendas.md`](./data-models/vendas.md)

```mermaid
erDiagram
  Pedido {
    número Número_do_pedido
    texto CEP_de_entrega
    valor Valor_do_frete
    seleção Faixa_de_frete FK
    texto Situação
  }
  TabelaFrete {
    texto CEP_inicial
    texto CEP_final
    valor Valor_do_frete
  }
  TabelaFrete |o--o{ Pedido : "Faixa_de_frete"
```
