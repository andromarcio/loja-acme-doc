<!-- docqui: 6.4.1 | prompt: PROMPT_PROTOTYPE_FLOW_FULL | atualizado: 2026-10-17 -->
# Demonstração — Loja ACME

Esta instância é um exemplo preenchido do perfil **requisitos**, pronto para apresentar o método e praticar os checkpoints. O [simulador](simulador.html) mostra o processo completo; selecione **requisitos** no topo.

## O que já está preenchido

Vendas (`VND`) contém Checkout (`VND-CHK`) e **VND-CHK-01 — Calcular Frete**. Carrinho (`VND-CAR`) e Catálogo (`CAT`) estão planejados, sem especificação própria. O CEP já tem entrada canônica; Pedido e TabelaFrete têm modelo negocial. O ticket fictício STRY0013101 está ligado ao N3, à AIM e ao INDEX.

Nenhum gate foi aprovado. A existência do material não equivale a aprovação da PO ou do DBA. Ana, Rui e Bruno são personagens do simulador, não usuários que deram aprovação neste repositório.

## Roteiro de apresentação

1. Abra o N0 e mostre a fronteira entre Vendas e Catálogo.
2. Navegue pelo N1 Vendas e pelo N2 Checkout; mostre que permissões ficam apenas no N2.
3. Abra a AIM STRY0013101 e siga o link para **VND-CHK-01 — Calcular Frete**.
4. Compare CA-1, CA-2 e CA-3 com RN-01, RN-02, RN-03 e seus cenários marcados.
5. Abra o modelo de entidades e a entrada CEP no FIELD-DICTIONARY; nenhum schema de banco é necessário.
6. Mostre os mapas de features e rastreabilidade e o INDEX com a esteira ainda em rascunho.
7. No simulador, percorra CP1 e CP2. No repositório real, esses passos exigem responsáveis reais, um checkpoint por PR e regeneração do espelho.

## Praticar sem alterar o ponto de partida

Crie uma branch `sprint/SP07-<nome>` da `main`; faça os PRs de checkpoint para essa branch. Não reescreva o exemplo inicial, não use `git reset --hard` para simular e não copie os nomes dos personagens para os campos de aprovação.

Antes de usar a CI como trilha de aprovação, substitua os times de exemplo de `.github/CODEOWNERS` por responsáveis reais e configure proteção de branch. No perfil requisitos, CP1 aprova o negócio e CP2 aprova o modelo negocial; CP3 e CP4 não se aplicam.

## Evoluir o exemplo

O [backlog](backlog.md) preserva os tickets fictícios do simulador. STRY0013120 introduz prazo de entrega e resumo; STRY0013135 introduz cupom. Use AIM → 4A/3A, atualize o N2 e feche os elos nos três lugares. A contagem de PF é uma atividade separada: execute CT a partir do N3, sem copiar os totais da apresentação.

## Limites do material

As mensagens de carrinho vazio e os estados de tela são complementos didáticos ao ticket inicial, não requisitos aprovados. O protótipo de fluxo do Checkout ([`prototypes/vendas/checkout/flow.html`](../prototypes/vendas/checkout/flow.html)) está em rascunho, sem aprovação; não há implementação, testes de código ou dados reais. Os arquivos em branco herdados do bootstrap são referências para exercícios futuros, não funcionalidades implementadas.
