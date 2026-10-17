<!-- docqui: 6.4.1 | prompt: PROMPT_DATA_MODEL_negocio | atualizado: 2026-10-14 -->
# Data Model: Vendas
> **Modelo de entidades (negocial)** — entidades, atributos e relacionamentos de negócio, sem camada física.

## Pedido

> Compra que o cliente prepara no checkout.

| Atributo (Label PO) | Tipo | Obrigatório | Notas |
|---|---|---|---|
| Número do pedido | número | automático | Identifica a compra fictícia |
| CEP de entrega | texto | sim | → ver FIELD-DICTIONARY: CEP |
| Valor do frete | valor | não | Recebe o valor da faixa atendida ao calcular |
| Faixa de frete | seleção → TabelaFrete | não | Referência atribuída automaticamente ao concluir a cotação |
| Situação | texto | sim | Aberto ou confirmado; confirmação fora da feature inicial |

## TabelaFrete

> Faixas de CEP atendidas e seus respectivos valores de entrega.

| Atributo (Label PO) | Tipo | Obrigatório | Notas |
|---|---|---|---|
| CEP inicial | texto | sim | Limite inicial inclusivo; → ver FIELD-DICTIONARY: CEP |
| CEP final | texto | sim | Limite final inclusivo; → ver FIELD-DICTIONARY: CEP |
| Valor do frete | valor | sim | → ver FIELD-DICTIONARY: Valor monetário |

## Relacionamentos

- **TabelaFrete** [1 — N] **Pedido** — uma faixa pode atender vários pedidos; um pedido com cotação válida usa uma faixa.

### Dados da demonstração

| CEP inicial | CEP final | Valor do frete |
|---|---|---|
| 01310000 | 01310999 | R$ 18,90 |

Essa é a única faixa da massa fictícia inicial. O CEP `01310100` é atendido; `69900000` não é atendido. Não há faixas sobrepostas neste exemplo; novas faixas e seus critérios de manutenção requerem refinamento próprio.
