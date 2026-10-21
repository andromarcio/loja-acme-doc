<!-- docqui: 7.0.0 | prompt: MIGRA_NIVEIS | atualizado: 2026-10-21 -->
---
tipo: sprint
sprint: [rótulo da sprint na organização — SP07, APIS_PUBLICAS_262-266]
entrega: [AAAA-MM-DD]
estado: rascunho          # rascunho → concluído (apurável fechado e conferido)
---

<!--
  AIMM DA SPRINT. Um arquivo por sprint, em `analise-impacto/AIMM-<sprint>.md`. Consolida
  as AIMMs dos tickets atendidos na sprint — as de front-matter `sprint:` igual a esta — e
  é a ÚNICA fonte do que foi entregue sem ticket na ferramenta de origem. É o documento
  que a equipe de métricas audita; a AIMM de cada ticket é o que o time consulta ao mexer
  naquele ticket. Escrita pela skill `analise-impacto`, depois da entrega.

  Cada função conta UMA vez na sprint, venha de quantos tickets vier: a unidade da
  contagem é o processo elementar (ou a função de dados), nunca o ticket. Dois tickets que
  alteram o mesmo PE somam uma vez; dois que tocam a mesma funcionalidade em PEs diferentes são
  duas funções alteradas.

  O `validate-impact` a confere com as AIMs dos tickets da pasta: os mesmos tickets, cada
  funcionalidade e cada função de dados uma vez, a visão final de cada ticket dentro dela, a
  natureza e o apurável pela soma. Em `concluído`, divergência reprova; em `rascunho`, avisa.
-->

# AIMM [sprint]

## Tickets da sprint

<!-- Um por linha, com o link da AIM do ticket. Funcionalidade entregue sem ticket entra na tabela seguinte, com `⚠️ sem ticket`. -->

| Ticket | AIM | Funcionalidades | Resumo |
|---|---|---|---|
| `[CHAVE]` | [AIM-[CHAVE]](AIM-[CHAVE].md) | `SIGLA-SAF-NN` **[Nome]** | [o que o ticket entregou, em uma frase] |

## Alterações em funcionalidades por Agrupamento Funcional

<!--
  Uma linha por funcionalidade, cada uma UMA vez. Coluna Ticket: a(s) chave(s) em crase —
  `⚠️ sem ticket` quando a entrega não tem item na ferramenta. Natureza: `incluída`
  (100% do PFB) ou `alterada` (50%). A planilha de entrega lê esta tabela.
-->

| Funcionalidade | Ticket | CA-n | Natureza | PFB | PFL |
|---|---|---|---|---|---|
| `SIGLA-SAF-NN` **[Nome da Funcionalidade]** | `[CHAVE]` | CA-1 | alterada | [PF] | [PF] |

## Funções de dados alteradas

| Função de dados | Natureza da função | PFB | PFL |
|---|---|---|---|
| [Entidade] | alterada | [PF] | [PF] |

## Apurável da sprint

| | PFB | PFL |
|---|---|---|
| Transações | [soma] | [soma] |
| Funções de dados | [soma] | [soma] |
| **Total** | **[soma]** | **[soma]** |

> O `validate-impact` confere a aritmética: o Total contra a soma das linhas de
> `## Alterações em funcionalidades por Agrupamento Funcional` e de `## Funções de dados alteradas`, e cada
> subtotal contra a sua. Rode-o a cada rodada de números novos.

## Decisões pendentes

- [o que ainda depende de decisão, e o que trava — ou "Nenhuma."]

## Changelog

| Data | Autor | Tipo | Descrição |
|---|---|---|---|
| 2026-10-20 | Docqui Caixa | Terminologia | Adoção de AIMM; histórico anterior preservado. |
| [AAAA-MM-DD] | [autor] | AIM da sprint | consolidação dos tickets da [sprint] |
| 2026-10-21 | Docqui Caixa | Terminologia | Níveis em português: Domínio, Agrupamento Funcional e Funcionalidade; histórico preservado. |
