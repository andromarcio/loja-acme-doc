# Backlog da mentoria — ServiceNow da Acme (fictício)

Os tickets abaixo fazem o papel do ServiceNow: é daqui que você copia a descrição e os critérios de aceite para a AIM de cada ticket, **como estão escritos** — transcrição, não formulação. O mentor faz o papel da PO: é com ele que você elicita o que o ticket não diz e é ele quem avaliza o escopo.

Os três primeiros formam a sprint SP07 e são os mesmos do simulador (`mentoria/simulador.html`). Os dois últimos são para praticar sem o roteiro do simulador.

## Sprint SP07

### STRY0013101 — Calcular frete no checkout

> Como cliente, quero informar o CEP no checkout e ver o valor do frete, para saber quanto vou pagar pela entrega antes de fechar o pedido.

| Critério | Descrição |
|---|---|
| CA-1 | Dado que o carrinho tem itens, quando o cliente informa um CEP atendido, o sistema mostra o valor do frete. |
| CA-2 | Quando o cliente informa um CEP com menos de 8 dígitos, o sistema avisa que o CEP é inválido. |
| CA-3 | Quando o cliente informa um CEP não atendido, o sistema avisa que não entrega nesse CEP. |

### STRY0013120 — Prazo de entrega estimado

> Como cliente, quero ver o prazo de entrega estimado junto com o valor do frete, para decidir a compra sabendo quando o pedido chega.

| Critério | Descrição |
|---|---|
| CA-1 | Quando o cliente calcula o frete de um CEP atendido, o sistema mostra o valor e o prazo em dias úteis. |
| CA-2 | Quando a faixa do CEP não tem prazo cadastrado, o sistema mostra o valor e avisa que o prazo será informado por e-mail. |
| CA-3 | Quando o cliente abre o resumo antes de confirmar, o resumo mostra o prazo prometido. |

### STRY0013135 — Cupom de desconto

> Como cliente, quero aplicar um cupom de desconto no checkout, para pagar menos pelo pedido.

| Critério | Descrição |
|---|---|
| CA-1 | Quando o cliente aplica um cupom válido, o total mostra o desconto. |

Este ticket **não será entregue** na SP07: no fechamento, o mentor avisa, e você o tira da branch com o `reverte-ticket`.

## Para praticar depois da SP07

### STRY0013150 — Cadastro de produtos

> A equipe de vendas precisa manter o catálogo de produtos no próprio site: cadastrar, consultar, editar e retirar de venda os produtos, com nome, preço e quantidade em estoque.

| Critério | Descrição |
|---|---|
| CA-1 | O produto é cadastrado com nome, preço e quantidade em estoque; os três são obrigatórios. |
| CA-2 | Não pode haver dois produtos com o mesmo nome. |
| CA-3 | O produto retirado de venda não aparece mais na loja, mas continua nos pedidos antigos. |

O que este ticket exercita: o primeiro N1 de outro Major Feature Set (Catálogo, previsto no N0), a opção **CR** (CRUD padrão) e a fronteira entre "retirar de venda" e "excluir".

### STRY0013165 — Frete grátis

Descrição no ServiceNow:

> Pedidos acima de R$ 200,00 não pagam frete. A regra vale para todos os CEPs atendidos. O cliente precisa ver que ganhou o frete grátis.

Critérios de aceite (como estão no ticket, sem numeração):

- frete zerado quando o total dos itens passa de R$ 200,00
- mensagem avisando que o frete é grátis
- CEP não atendido continua não atendido, mesmo acima de R$ 200,00

O que este ticket exercita: alteração de uma feature que já existe (4A), regra de negócio que é invariante e reação que vira cenário, mensagem nova no MESSAGE-DICTIONARY e, sobretudo, a **numeração**: a fonte não numera os critérios, então a AIM declara isso e a coluna `CA-n` sai `—`. Número inventado não vale.
