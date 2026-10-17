<!-- docqui: 6.4.1 | prompt: DEMONSTRACAO_SIMULADOR | atualizado: 2026-10-14 -->
# Índice geral de módulos — Loja ACME
> Exemplo preenchido de requisitos, ainda sem aprovação humana ou contagem revisada.

## Domínios

| Domínio | SIGLA | Pasta | Responsabilidade | Feature Sets | Status |
|---|---|---|---|---|---|
| [Vendas](vendas/README.md) | VND | `modules/vendas/` | Carrinho e checkout | 1 especificado; Carrinho planejado | Rascunho didático |
| Catálogo | CAT | Ainda não criada | Produtos disponíveis para compra | 0 | Planejado no N0 |

## Rastreabilidade: ticket → spec → código

| Ticket (AIM) | Feature | Domínio | Status | Contagem | PF | CFP | Repositórios |
|---|---|---|---|---|---|---|---|
| [`STRY0013101`](../analise-impacto/AIM-STRY0013101.md) | [VND-CHK-01: Calcular Frete](vendas/checkout/f-calcular-frete.md) | Vendas | ✏️ Rascunho | 📋 | — | — | — |

**Total vigente: ainda não dimensionado.** A revisão CT preencherá os valores a partir da fonte.

Veja o [mapa de rastreabilidade](../rastreabilidade/index.html).

<!-- GATES:INICIO -->
## Esteira de checkpoints (gates)

> ⚙️ **Seção gerada por `scripts/gates.py` — não editar à mão.** Espelha o estado de cada feature na esteira (CP1 requisitos (PO/Negócio) → CP2 modelo-dados (DBA/Arquiteto)). Reflete o estado em **2026-10-14**.

| Feature | Origem | Estado | Situação |
|---|---|---|---|
| `VND-CHK-01` ([spec](./vendas/checkout/f-calcular-frete.md)) | STRY0013101 | ✏️ rascunho | aguardando **requisitos** (PO/Negócio) |

**0** de **1** feature(s) prontas para desenvolvimento.
<!-- GATES:FIM -->

## Pendências de especificação

| Item | Nível | Origem | Rota |
|---|---|---|---|
| Carrinho — VND-CAR | N2 | N1 Vendas | 2A |
| Catálogo — CAT | N1 | N0 e ticket fictício STRY0013150 | 1A |
| Prazo e resumo do pedido | N3 | Backlog STRY0013120 | AIM → 4A / 3A |
| Cupom de desconto | N3 | Backlog STRY0013135 | AIM → 3A |

## Entidades consolidadas

| Entidade | Domínio | N1 de origem |
|---|---|---|
| Pedido | Vendas | [Vendas](vendas/README.md) |
| TabelaFrete | Vendas | [Vendas](vendas/README.md) |

## Eventos do sistema

Nenhum evento técnico especificado no perfil requisitos.

## Mapa de integrações entre domínios

Nenhuma integração especificada no exemplo inicial.

## Legenda de status

| Ícone | Estado | Descrição |
|---|---|---|
| ✏️ | rascunho | Exemplo preenchido, sem checkpoints aprovados |
| 📝 | requisitos-aprovados | CP1 aprovado pelo responsável real |
| 📋 | especificado | CP1 e CP2 aprovados; estado final do perfil requisitos |

A AIM e esta tabela espelham o estado do N3. O bloco da esteira é regenerado por `scripts/gates.py`, nunca preenchido manualmente.
