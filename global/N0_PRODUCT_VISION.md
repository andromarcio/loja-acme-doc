<!-- docqui: 6.4.1 | prompt: PROMPT_N0_VISAO | atualizado: 2026-10-14 -->
# Visão de Produto: Loja ACME
> **Nível 0** - Visão de Produto - `LACME`

> O documento de referência mais alto do sistema: define **por que** o produto
> existe, para **quem** e **que valor** entrega. Os níveis N1–N3 são confrontados
> contra ele para garantir que não extrapolam o escopo nem contradizem os objetivos
> do produto. O N0 dá a direção; não detalha funcionalidades, telas ou campos.
>
> **Identidade**: o nome e a sigla vêm de `global/MASTER.md` → *Identificação do sistema*,
> a fonte única — aqui eles só se repetem (o `validate-doc` reprova sigla divergente).
>
> **Quem mantém**: PO / Liderança de Produto
> **Atualização**: revisado quando a estratégia do produto muda — não a cada feature.

---

## Propósito

O cliente da ACME compra por telefone e só descobre o custo da entrega quando o pedido já foi fechado. A Loja ACME existe para que ele compre sozinho, a qualquer hora, sabendo quanto vai pagar antes de confirmar. Este produto é fictício e serve exclusivamente à demonstração do método.

---

## Proposta de valor

Comprar em poucos passos, com o valor do frete à vista antes da confirmação. O prazo estimado será tratado na evolução do exemplo, conforme o backlog.

---

## Público-alvo e personas

| Persona | Quem é | Principal dor | O que espera do produto |
|---|---|---|---|
| Cliente | Pessoa que compra na loja | Só conhece o custo da entrega depois de fechar o pedido | Conhecer o frete antes de confirmar |
| Atendente | Pessoa que apoia a compra | Precisa cotar frete por telefone | Consultar o mesmo valor apresentado ao cliente |

---

## Objetivos do produto

> O **quê** o produto busca alcançar — em linguagem de negócio, sem soluções técnicas.

1. Levar 60% dos pedidos para o autoatendimento, como meta didática.
2. Eliminar a cotação de frete por telefone para CEPs atendidos.

---

## Métricas de sucesso (KPIs)

> Como saberemos que o produto está cumprindo seus objetivos.

| KPI | O que mede | Meta |
|---|---|---|
| Autoatendimento | Proporção de pedidos feitos diretamente pelo cliente | 60% na operação fictícia |
| Transparência do frete | Compras com valor da entrega conhecido antes de confirmar | 100% dos pedidos com CEP atendido |

---

## Escopo

### Está dentro

- Catálogo de produtos, carrinho e checkout com cálculo de frete.
- Evolução para prazo de entrega, resumo do pedido e cupom, conforme os tickets de exercício.

### Está fora (não-objetivos)

- Marketplace de outros vendedores.
- Cobrança, liquidação financeira e operação da transportadora.

---

## Major Feature Sets previstos (N1)

> Visão preliminar das grandes áreas que comporão o sistema. Cada uma será
> detalhada em seu próprio N1. Mantenha esta lista alinhada com `modules/INDEX.md`.

| Major Feature Set | SIGLA | O que cuida |
|---|---|---|
| Vendas | VND | Carrinho e checkout até a confirmação do pedido |
| Catálogo | CAT | Produtos disponíveis para compra; ainda planejado |

---

## Tom de voz e princípios de experiência

- **Tom**: direto e acolhedor.
- **Princípios**: mostrar o custo antes da confirmação; explicar quando a entrega não atende ao CEP; não apresentar uma cotação antiga como válida após mudar o destino.

---

## Restrições e premissas

- Todos os dados e tickets são fictícios; não usar dados pessoais ou credenciais reais.
- A tabela didática de frete tem uma única faixa atendida, declarada no modelo de entidades.
- Nenhuma aprovação humana, contagem revisada ou implementação é inferida da existência dos documentos.

---

## Changelog

<!-- Ordem decrescente por data: a entrada mais recente fica sempre no topo, logo abaixo do cabeçalho. -->

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-14 | Copilot | N0 criado | Visão didática baseada no roteiro do simulador, sem aprovação atribuída à PO fictícia. |

---

## Instrução para a LLM

Ao gerar ou alterar qualquer N1/N2/N3:
1. Confronte o artefato com este N0 — escopo, objetivos e público-alvo.
2. Sinalize com ⚠️ qualquer divergência (funcionalidade que extrapola a visão, contradição de objetivo, persona não prevista).
3. O N0 é documento de visão — **não o reestruture** para acomodar detalhes de implementação. Proponha ajustes e peça aprovação antes de alterá-lo.
