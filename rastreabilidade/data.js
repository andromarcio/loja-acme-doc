/* GERADO por scripts/build-trace-data.mjs — não editar à mão.
   Fonte: artefatos .md da instância (6 nós, 5 arestas). */
window.TRACE_DATA = {
  "meta": {
    "system": "Loja ACME",
    "subtitle": "índice de rastreabilidade gerado por scripts/build-trace-data.mjs",
    "generatedAt": "2026-10-16",
    "engineVersion": "6.4.1",
    "repo": "https://github.com/CAIXA-EFRS/loja-acme-doc.git"
  },
  "nodes": [
    {
      "id": "N0",
      "type": "produto",
      "label": "Loja ACME",
      "sub": "Visão de Produto",
      "desc": "O cliente da ACME compra por telefone e só descobre o custo da entrega quando o pedido já foi fechado. A Loja ACME existe para que ele compre sozinho, a qual…",
      "path": "global/N0_PRODUCT_VISION.md"
    },
    {
      "id": "VND",
      "type": "dominio",
      "label": "Vendas",
      "sub": "Major Feature Set · VND",
      "desc": "Vendas reúne a escolha dos itens e o checkout da Loja ACME. O cliente conhece o valor da entrega antes de confirmar o pedido; o atendente pode apoiar essa co…",
      "path": "modules/vendas/README.md"
    },
    {
      "id": "VND-CHK",
      "type": "featureset",
      "label": "Checkout",
      "sub": "Feature Set · VND-CHK",
      "domain": "VND",
      "desc": "Checkout é a etapa em que o cliente informa onde quer receber e consulta o valor da entrega antes de confirmar o pedido. O exemplo inicial cobre o cálculo do…",
      "path": "modules/vendas/checkout/README.md"
    },
    {
      "id": "VND-CAR",
      "type": "featureset",
      "label": "Carrinho",
      "sub": "Feature Set · VND-CAR",
      "domain": "VND",
      "desc": "Itens escolhidos antes da compra",
      "path": "modules/vendas/README.md"
    },
    {
      "id": "VND-CHK-01",
      "type": "feature",
      "label": "Calcular Frete",
      "status": "spec",
      "pf": null,
      "sub": "Feature · VND-CHK-01",
      "domain": "VND",
      "desc": "Permite que o cliente calcule o frete do pedido pelo CEP de entrega, conhecendo o valor antes de confirmar a compra.",
      "path": "modules/vendas/checkout/f-calcular-frete.md"
    },
    {
      "id": "STRY0013101",
      "type": "aim",
      "label": "Calcular frete no checkout",
      "sub": "AIM · STRY0013101",
      "desc": "Como cliente, quero informar o CEP no checkout e ver o valor do frete, para saber quanto vou pagar pela entrega antes de fechar o pedido.",
      "path": "analise-impacto/AIM-STRY0013101.md"
    }
  ],
  "edges": [
    {
      "from": "N0",
      "to": "VND",
      "kind": "contem"
    },
    {
      "from": "VND",
      "to": "VND-CHK",
      "kind": "contem"
    },
    {
      "from": "VND",
      "to": "VND-CAR",
      "kind": "contem"
    },
    {
      "from": "VND-CHK",
      "to": "VND-CHK-01",
      "kind": "contem"
    },
    {
      "from": "STRY0013101",
      "to": "VND-CHK-01",
      "kind": "origina",
      "note": "`CA-1, CA-2, CA-3` — valor do frete pelo CEP, CEP inválido e CEP fora da área"
    }
  ]
};
