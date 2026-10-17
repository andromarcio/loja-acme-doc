<!-- docqui: 6.4.8 | prompt: ATUALIZACAO_VISUAL_PAGES | atualizado: 2026-10-17 -->
# Loja ACME — demonstração do Docqui Caixa

Instância de demonstração de uma **loja virtual fictícia**, no perfil **requisitos** e cadência **sprint**. O exemplo preenchido acompanha **VND-CHK-01 — Calcular Frete**, do ticket ao N3 e ao modelo de entidades. Os dados, tickets e valores são didáticos; não representam sistemas ou atendimentos reais da CAIXA.

**Comece pelo [roteiro da demonstração](mentoria/README.md)** ou abra o [simulador](mentoria/simulador.html). A estrutura do Pages vem do `simpf-doc`, mas os requisitos, mapas e índices são exclusivos da Loja ACME.

O Pages segue o modelo visual atual do SIMPF: marca Docqui no cabeçalho, busca no menu lateral, breadcrumb no topo, documentos em painel único e menu móvel. Os temas claro/escuro, **Inter** no texto e **JetBrains Mono** no código são definidos em `assets/css/docqui-theme.css`. A navegação da demonstração e o simulador são preservados. Os diagramas Mermaid usam o layout ELK, que vem no próprio `assets/vendor/mermaid.min.js` desde o Mermaid 12 (a loja usa a 12.1.0); o `index.html` fixa o estilo `classic` e a quebra de texto do fluxograma, que a 12 mudou, para manter o desenho de antes. As fontes têm alternativas locais caso o Google Fonts esteja indisponível.

O **Dashboard de gestão** (`#__dashboard__`) mostra artefatos N1–N3, próximos checkpoints, revisão de contagem, branches e apoio, com filtro por domínio. Seus dados são gerados a partir **desta instância** por `python scripts/gera-dashboard.py` (PyYAML), integrado ao pipeline do Pages e aos previews de entrega. O exemplo inicial tem um N1, um N2 e um N3 em rascunho: o painel não concede aprovação, não soma PF pendentes nem copia indicadores do SIMPF. Branches representam as refs do checkout, não uma consulta em tempo real ao GitHub.

Confira o visual com `python scripts/testa-visual-pages.py` (Playwright e Chromium/Edge, ou `SIM_BROWSER`): valida identidade, layout, temas, busca, menu móvel, diagramas, preservação do simulador e os destaques do preview de branch, com controles negativos.

| Artefato | O que demonstra |
|---|---|
| [Visão de Produto](global/N0_PRODUCT_VISION.md) | Propósito, personas, escopo e áreas previstas |
| [Vendas](modules/vendas/README.md) → [Checkout](modules/vendas/checkout/README.md) | N1 e N2, jornada e permissões |
| [Calcular Frete](modules/vendas/checkout/f-calcular-frete.md) | Campos, regras RN-NN, cenários e comportamento de tela |
| [Modelo de entidades](global/data-models/vendas.md) | Pedido e Tabela de Frete, sem camada física |
| [AIM STRY0013101](analise-impacto/AIM-STRY0013101.md) | Ticket fictício, critérios e elos recíprocos |
| [Índice geral](modules/INDEX.md) | Rastreabilidade e esteira dos checkpoints |
| [Backlog](mentoria/backlog.md) | Tickets do simulador para praticar a evolução |
| [Mapa de rastreabilidade](rastreabilidade/index.html) | Visão dos elos N0 → N1 → N2 → N3 → ticket |

## Estado da demonstração

O exemplo está **preenchido, mas em rascunho**: nenhum checkpoint foi aprovado, nenhuma implementação foi declarada e a contagem de Pontos de Função continua pendente. As personas Ana, Rui e Bruno do simulador não são aprovadores reais deste repositório. A cópia didática da `main` não é um registro de specs entregues; nas evoluções, use branches `sprint/<id>` e siga a esteira real.

## Executar e atualizar o Pages

Na raiz do repositório:

```powershell
python -m pip install pyyaml
python scripts\gates.py promote --write
node scripts\atualiza-pages.mjs --dry
node scripts\atualiza-pages.mjs --com-dicionarios
python -m http.server 8080 --bind 127.0.0.1
```

Abra `http://127.0.0.1:8080`. O pipeline canônico usa o comando `python3`; no Windows, disponibilize esse comando apontando para a instalação de Python com PyYAML antes de executar `atualiza-pages`.

No GitHub, configure **Settings → Pages → Source: GitHub Actions**. O workflow publica a `main` e os previews de branches de entrega; no ambiente `github-pages`, permita `main`, `sprint/*` e `historia/*`. No topo de cada versão do site, o seletor **Branch** troca entre a `main` e as branches abertas, mantendo o documento aberto; nos previews, **Ver alterações** lista o que a branch muda em relação à base do PR, e **Destacar alterações** marca, dentro de cada card, só o que mudou — o removido riscado, o incluído destacado. O repositório é [CAIXA-EFRS/loja-acme-doc](https://github.com/CAIXA-EFRS/loja-acme-doc).

Os arquivos de `engine/`, `scripts/` e `.claude/skills/` são sincronizados pelo `scripts/sync-instance.mjs` do engine, não por cópia manual. Depois de alterar Markdown, regenere os derivados; nunca copie `assets/tree.js`, `assets/mapa-data.js` ou `rastreabilidade/data.js` de outro sistema.

**Adaptações locais de publicação**: `atualiza-pages.mjs` usa o `build-trace-data.mjs` existente para preservar os caminhos dos N2. Preserve esse ajuste ao sincronizar enquanto não estiver incorporado ao engine. A interface do grafo abre os documentos no visualizador local, inclusive nos previews.

O gerador e o renderer do dashboard são extensões de publicação reaproveitadas do SIMPF. Preserve também a integração local do dashboard em `atualiza-pages.mjs` e `monta-site-preview.mjs` — que regenera os derivados e o dashboard em cada versão do site — ao sincronizar o engine. Os destaques nos cards são do `index.html` da loja (`comparaNosCards`): a base é desenhada pelos mesmos templates e o comparador do engine corre card a card. O contrato de contagem dos indicadores roda com `python -m unittest discover -s scripts -p test_dashboard.py`.
