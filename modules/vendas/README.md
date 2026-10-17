<!-- docqui: 6.4.1 | prompt: PROMPT_1A_N1_negocio | atualizado: 2026-10-14 -->
# Major Feature Set: Vendas
> **Nível 1** - Visão estratégica do domínio - `VND`

## Descrição

Vendas reúne a escolha dos itens e o checkout da Loja ACME. O cliente conhece o valor da entrega antes de confirmar o pedido; o atendente pode apoiar essa consulta. A demonstração inicial detalha apenas o cálculo do frete.

### O que este domínio NÃO faz

| Descrição | Pertence a |
|---|---|
| Manter o catálogo de produtos | Catálogo, previsto no N0 |
| Executar pagamento ou entrega | Serviços fora do escopo do produto |

## Feature Sets

| Feature Set | Descrição | Features |
|---|---|---|
| **Carrinho** <small>VND-CAR</small> — planejado, sem N2 | Itens escolhidos antes da compra | 0 |
| [**Checkout**](checkout/README.md) <small>VND-CHK</small> | Valor da entrega antes da confirmação | 1 |

## Regras transversais de negócio

1. Todo pedido confirmado tem um CEP de entrega atendido.

## Integrações com outros domínios

### Leitura — domínios que consomem dados deste domínio

Nenhuma integração consumidora especificada no exemplo inicial.

### Escrita — domínios que criam ou alteram dados deste domínio

Nenhuma integração de escrita especificada no exemplo inicial. O vínculo dos itens com Catálogo será detalhado no exercício do Carrinho.

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-14 | Copilot | N1 criado | Vendas com Checkout preenchido e Carrinho planejado; exemplo em rascunho. |

*Links: [Checkout](checkout/README.md) · [INDEX geral](../INDEX.md)*
