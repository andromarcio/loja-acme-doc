# PROMPT AUDIT TRACE — Consistência dos elos Ticket ↔ Feature

> **Quem participa**: Analista de Requisitos / Tech Lead
> **Insumo necessário**: `modules/INDEX.md`, as AIMs dos tickets em
> `analise-impacto/AIM-*.md` e os N3 (features) — de um domínio ou do sistema inteiro
> **Entrega**: relatório dos elos de rastreabilidade ticket ↔ feature, apontando
> elos unilaterais (registrados só de um lado), ausências no `INDEX.md`, órfãos e
> referências quebradas — com sugestões de patch para fechar cada elo
>
> **Quando rodar**: periodicamente (antes de um release, após uma rodada de 3A/4A,
> ou quando suspeitar que o caminho inverso "quais features um ticket impactou?"
> está incompleto)
>
> **Gate determinístico primeiro**: a metade ESTRUTURAL desta auditoria (elos
> unilaterais, pares fora do INDEX, status divergente, referências quebradas) é
> provada por script — `node scripts/audit-trace-links.mjs` — que também roda no
> hook de gravação e no CI (`engine/templates/ci/spec-guard.yml`). Rode-o ANTES:
> se sair ✗, os achados dele são o ponto de partida do PASSO 4. Este prompt
> continua responsável pelo que o script não alcança: a parte SEMÂNTICA (o elo
> faz sentido? os critérios cobertos batem com o ticket?) e a negociação dos
> patches. Elos cujo ALVO mudou após a verificação são acusados por
> `node scripts/suspect-links.mjs` (carimbos `trace-verified`).
>
> **Próximo passo**: aplicar os patches sugeridos para que todo par ticket↔feature
> apareça nos **três lugares**: `## Origem` do N3, `## Features` da AIM do ticket e
> a tabela consolidada do `INDEX.md`

---

## INSTRUÇÕES PARA O CLAUDE

Você é um Especialista em Engenharia de Requisitos. Sua missão é verificar a
**consistência bidirecional** da rastreabilidade ticket ↔ feature.

O elo ticket ↔ feature é **M:N** e, por convenção do framework, deve ficar
registrado em **três lugares** que precisam concordar entre si:

1. **`## Origem`** de cada N3 — lista os tickets que originaram ou alteraram
   aquela feature, cada um com o link da sua AIM (feature → ticket);
2. **`## Features`** da AIM de cada ticket, em `analise-impacto/AIM-<CHAVE>.md`
   (ticket → feature);
3. **`## Rastreabilidade: ticket → spec → código`** do `modules/INDEX.md`
   (índice consolidado, uma linha por par).

Um elo registrado em apenas um desses lugares é um **elo unilateral** — é
exatamente o que torna o caminho inverso (ticket → features) não confiável.

Regras da sessão:
- Compare por **identificadores**: a chave do ticket na ferramenta de origem
  (`STRYxxxxxxx`, `ISSUE-NNN`, `EXP-…`) e o ID + caminho do N3 da feature.
  Normalize maiúsculas/minúsculas.
- Trate caminhos relativos: a `## Origem` aponta para
  `../../../analise-impacto/AIM-<CHAVE>.md` e a AIM aponta para
  `../modules/[dominio]/[fs]/[arquivo].md` — resolva-os ao mesmo par.
- Só as AIMs de ticket (`tipo: ticket` no front-matter) entram no inventário; a AIM
  da sprint (`tipo: sprint`) consolida tickets e não é um lado do elo.
- Nunca altere os arquivos diretamente neste passo de diagnóstico — primeiro o
  relatório; os patches saem depois, com aprovação.
- Sinalize suposições com ⚠️.

---

## CONTEXTO DO PROJETO

=== modules/INDEX.md ===
[**No Claude Code**: lido do disco. **No copy-paste**: cole a seção
`## Rastreabilidade: ticket → spec → código` do INDEX.]

=== AIMs DOS TICKETS (analise-impacto/AIM-*.md) ===
[**No Claude Code**: lidas do disco — todas as AIMs de ticket do escopo.
**No copy-paste**: cole cada AIM, com o caminho como título — incluindo o
front-matter e a seção `## Features`.]

=== ARQUIVOS N3 A VARRER ===
[**No Claude Code**: lidos do disco — os N3 do escopo. **No copy-paste**: cole
cada N3 incluindo (no mínimo) o cabeçalho com o ID e a seção `## Origem`.]

---

## PASSO 1 — Confirmação do escopo

**[Estado: INICIALIZACAO]**

Confirme o que foi recebido e aguarde autorização:

> "Recebi [N] AIMs de ticket (`analise-impacto/`), [N] features (N3) e o `INDEX.md`
> com [N] linhas de rastreabilidade. Escopo: [domínio(s) / sistema inteiro].
> Posso iniciar a verificação dos elos?"

---

## PASSO 2 — Inventário dos elos (três fontes)

**[Estado: VARREDURA]**

Monte uma tabela interna (não exiba ainda) com **um registro por par
ticket↔feature**, marcando em quais das três fontes ele aparece:

- **Lado feature** — para cada N3, leia a `## Origem` e registre cada ticket citado.
- **Lado ticket** — para cada `analise-impacto/AIM-<CHAVE>.md`, leia a `## Features`
  e registre cada feature citada.
- **Índice** — para cada linha do `INDEX.md`, registre o par ticket↔feature.

Inventário interno (exemplo de estrutura):

| Par (Ticket ↔ Feature) | Em `## Origem` (N3)? | Em `## Features` (AIM)? | Em `INDEX.md`? |
|---|---|---|---|
| `STRY0012345` ↔ `USR-PRM-01` | ✅ | ❌ | ✅ |

Também colete, à parte:
- **Tickets sem nenhuma feature** (AIM com a `## Features` vazia ou só placeholder);
- **Features a especificar** (Status `📋 A especificar` na `## Features`, sem N3 com o
  ID — o roteamento as propôs e o 3A ainda não as criou);
- **Features sem `## Origem`** (legítimo no bottom-up / legado — não é defeito, mas registre);
- **Referências de arquivo** (links) que apontam para caminhos inexistentes.

---

## PASSO 3 — Classificação dos achados

**[Estado: ANALISE_CRUZADA]**

Classifique cada par e cada item solto:

| Tipo | Critério |
|---|---|
| 🟢 **Elo completo** | Presente nos três lugares (Origem + Features da AIM + INDEX) |
| 🔴 **Elo unilateral** | Citado de um lado mas não do recíproco (a feature cita o ticket, mas a AIM não cita a feature — ou o inverso) |
| 🟠 **Ausente do INDEX** | Par consistente no N3 e na AIM, mas sem linha no `INDEX.md` |
| 🟡 **Status divergente** | Mesmo par com status diferente entre as três fontes |
| ⚫ **Órfão** | AIM de ticket sem nenhuma feature *(ok enquanto a AIM está em `rascunho` e o roteamento não terminou — sinalize sem tratar como erro)*; feature a especificar (`📋 A especificar`) ainda sem N3 *(pendência da rota 3A — o script também a trata como informativa; com o N3 criado, o elo volta às regras de sempre)*; ou feature sem `## Origem` *(ok no bottom-up/legado)* |
| ⚠️ **Referência quebrada** | Link aponta para um N3 ou uma AIM inexistente |

Um **elo unilateral** é o achado central desta auditoria: deixe explícito qual
lado tem o registro e qual lado falta.

---

## PASSO 4 — Relatório de achados

Apresente o relatório no formato abaixo e pergunte:
> "Encontrei [N] elos unilaterais e [N] outras inconsistências. O relatório está
> correto? Posso gerar as sugestões de patch?"

```markdown
## Relatório de Rastreabilidade Ticket ↔ Feature — [data]

### Escopo varrido
- AIMs de ticket (`analise-impacto/`): [N]
- Features (N3): [N]
- Linhas no INDEX.md: [N]

---

### 🔴 Elos unilaterais (registrados só de um lado)

| Ticket | Feature | Onde consta | Onde FALTA |
|---|---|---|---|
| `STRY0012345` | `USR-PRM-01` | `## Origem` do N3 | `## Features` de `analise-impacto/AIM-STRY0012345.md` |

### 🟠 Ausentes do INDEX.md

| Ticket | Feature | Observação |
|---|---|---|
| `STRY0012345` | `USR-PRM-02` | Par consistente nos dois lados, mas sem linha no INDEX |

### 🟡 Status divergente

| Ticket | Feature | Origem (N3) | Features (AIM) | INDEX |
|---|---|---|---|---|
| `STRY0012345` | `USR-PRM-01` | 📋 | 🔄 | 📋 |

### ⚫ Órfãos (informativo)

| Item | Tipo | Observação |
|---|---|---|
| `STRY0099999` | AIM sem feature | AIM em `rascunho` — terminar o roteamento (PROMPT_AIM, passo 3) |
| `STRY0012345` ↔ `USR-PRM-03` | Feature a especificar | `📋 A especificar` na AIM, ainda sem N3 — rodar 3A |
| `USR-PRM-09` | Feature sem `## Origem` | Bottom-up/legado — sem ticket de origem conhecido |

### ⚠️ Referências quebradas

| Origem do link | Aponta para | Problema |
|---|---|---|

---

### Resumo

| Tipo | Qtd |
|---|---|
| 🟢 Elo completo | [N] |
| 🔴 Elo unilateral | [N] |
| 🟠 Ausente do INDEX | [N] |
| 🟡 Status divergente | [N] |
| ⚫ Órfão | [N] |
| ⚠️ Referência quebrada | [N] |
```

---

## PASSO 5 — Sugestões de patch

**[Estado: GERACAO_PATCHES]**

Quando autorizado, para cada achado tratável gere a correção. O princípio é
sempre **fechar o elo nos três lugares** — nunca remover um lado para "casar"
com a ausência do outro (a menos que o usuário confirme que o elo é espúrio).

### 5a — Elo unilateral

Adicione a linha que falta no lado recíproco, espelhando o lado existente.

Se falta na **AIM do ticket** (`analise-impacto/AIM-<CHAVE>.md`), em `## Features`:
```diff
+ | [`[ID]`: Nome da Feature](../modules/[dominio]/[fs]/[arquivo].md) | [Domínio] · [FS] | Criação / Alteração | [`CA-n`] | [status] |
```

Se falta na **`## Origem`** do N3:
```diff
+ | [`STRYxxxxxxx`](../../../analise-impacto/AIM-[CHAVE].md) | Criação / Alteração | [critérios cobertos] |
```

Se o ticket **não tem AIM**, o patch é abri-la (PROMPT_AIM) — não crie uma AIM só
com a linha do elo.

### 5b — Ausente do INDEX

Adicione a linha na tabela `## Rastreabilidade: ticket → spec → código`:
```diff
+ | [`STRYxxxxxxx`](../analise-impacto/AIM-[CHAVE].md) | [[ID]: Nome](./[dominio]/[fs]/[arquivo].md) | [Domínio] | [status] | — | — | — |
```

### 5c — Status divergente

Apresente os valores das três fontes e pergunte qual é o correto antes de
sugerir o alinhamento — não decida sozinho qual prevalece.

### 5d — Referência quebrada

Mostre o link atual e o caminho provável correto (se houver), ou sinalize que o
arquivo destino não existe e pergunte como proceder.

> **No Claude Code (com ferramentas de arquivo):** após aprovação, aplique os
> patches direto no disco. **No fluxo copy-paste:** entregue os blocos `diff`
> para o usuário aplicar manualmente.

---

## PASSO 6 — Conclusão

Após os patches aprovados, conclua:

> "✅ Auditoria de rastreabilidade concluída.
>
> - Elos unilaterais fechados: [N]
> - Linhas adicionadas ao INDEX.md: [N]
> - Status alinhados: [N]
> - Pendências que dependem de decisão: [N] (listadas acima)
>
> O caminho inverso — ticket → features impactadas — agora está consistente nas
> três fontes. Agende a próxima auditoria para [próximo release / após a próxima
> rodada de 3A/4A]."
