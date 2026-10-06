# PROMPT 4B — N3 Update Técnico
## Atualização de Feature Existente · Parte técnica

> **Modelo de estrutura**: `engine/templates/modules/_template-dominio/_template-feature-set/_template-feature.md` *(referência humana — o prompt já embute o esqueleto)*
> **Quem participa**: dev
> **Insumo necessário**: N3 negocial atualizado (PROMPT_4A aprovado) +
> data-models/[dominio].md + N3 original completo
> **Entrega**: .md completo atualizado + data-models/[dominio].md atualizado
>
> **Pré-requisito**: PROMPT_4A concluído e aprovado pelo PO
>
> ⚠️ **Use este prompt para manutenção (Brownfield).**
> Para features novas do zero, use PROMPT_3B.

---

## INSTRUÇÕES PARA O CLAUDE

> **Protocolo obrigatório desta sessão (F1 preflight · F2 autovalidação):**
> 1. **Antes de gerar** — rode `node scripts/preflight-spec.mjs [dominio] [feature-set]` (ou, sem disco, leia o N0 + `modules/INDEX.md` + o N1/N2 pertinentes) e apresente um bloco **"Contexto verificado"**: o que já existe, IDs tomados, próximo NN livre, regras/campos já canônicos a **referenciar** (não reescrever). Não duplique ID/pasta/regra/campo existente.
> 2. **Depois de gravar** — rode `node scripts/validate-doc.mjs <arquivo>` (estrutura) **e** `node scripts/validate-feature-semantics.mjs <arquivo>` (é mesmo uma feature? — critérios FD de `engine/FEATURE-DEFINITION.md`); se algum reprovar, **apresente os desvios, corrija e repita até `✓`**. Nunca conclua com um validador reprovando.
> *(No Claude Code os hooks em `.claude/settings.json` já enforçam isso automaticamente.)*

Você vai complementar a atualização do N3 negocial com as definições técnicas.
O conteúdo negocial da atualização já foi validado pelo PO e não deve ser alterado.

Para evitar quebra de fluxo, você agirá como uma **Máquina de Estados**:

```
[INICIALIZACAO] → [LOCALIZACAO_FEATURE] → [ANALISE_BREAKING_CHANGES]
                → [ATUALIZACAO_DATA_MODEL] → [GERACAO_TECNICA] → [ARQUIVO_FINAL]
```

Regras da sessão:
- **Localize a feature antes de editar.** Confirme com o usuário qual N3 original e
  qual `data-models/[dominio].md` serão a base, buscando-os no repositório quando
  possível — não assuma o alvo
- Foque apenas nas partes técnicas afetadas pela mudança
- Campos novos vão para `global/data-models/[dominio].md` — NUNCA no N3
- Se a mudança introduz (ou revela) um campo/regra reutilizável ainda não
  dicionarizado, sinalize ⚠️ para promoção ao FIELD-DICTIONARY / RULES-DICTIONARY
  (a decisão é negocial — 4A); se altera um já canônico, avise que o dicionário
  pode precisar de ajuste
- **Avise explicitamente** se a mudança introduz breaking changes
- Siga rigorosamente o API-PATTERNS.md e o ERROR-DICTIONARY.md
- Sinalize suposições com ⚠️

---

## CONTEXTO DO PROJETO

=== MASTER.md ===
[cole aqui o conteúdo do MASTER.md]

=== DATA-MODEL do domínio (fragmentado) ===
[cole aqui o conteúdo de global/data-models/[dominio].md]

=== API-PATTERNS.md ===
[cole aqui o conteúdo do API-PATTERNS.md]

=== SIZING.md ===
[cole aqui o conteúdo do global/SIZING.md — critérios de contagem APF]

=== ALI-AIE-MAP.md ===
[cole aqui o conteúdo do global/ALI-AIE-MAP.md — todo ALR da contagem existe nele]

=== ERROR-DICTIONARY.md ===
[cole aqui o conteúdo do ERROR-DICTIONARY.md]

=== N3 COMPLETO ORIGINAL ===
[**No Claude Code**: deixe em branco — o engine localiza a feature no passo
LOCALIZACAO_FEATURE. **No fluxo copy-paste**: cole aqui o .md completo original.]

=== N3 NEGOCIAL ATUALIZADO (gerado pelo PROMPT_4A) ===
[cole aqui o .md negocial atualizado e aprovado]

---

## PASSO 1 — Inicialização

**[Estado: INICIALIZACAO]**

Confirme o que foi recebido e aguarde:
> "Vamos complementar a parte técnica de uma atualização de feature. Posso iniciar
> localizando a feature?"

---

## PASSO 2 — Localização da feature

**[Estado: LOCALIZACAO_FEATURE]**

Antes de analisar breaking changes, confirme qual feature será atualizada e quais
artefatos servem de base — não assuma o alvo.

**1. Identifique a feature** (pelo nome/ID informado ou pela atualização negocial do
PROMPT_4A que motivou esta sessão).

**2. Localize os insumos:**
- **No Claude Code (com ferramentas de arquivo):** leia do disco o N3 original
  completo em `modules/[dom]/[fs]/[feat].md` e o `global/data-models/[dominio].md`
  correspondente. Não peça para colar.
- **No fluxo copy-paste:** use o conteúdo colado na seção CONTEXTO; se faltar, peça.

**3. Apresente e confirme** antes de avançar:
> "Vou atualizar a parte técnica de:
> - **Feature:** [nome] (`[ID]`) — `modules/[dom]/[fs]/[feat].md`
> - **Data-model:** `global/data-models/[dominio].md`
>
> Confirma estes arquivos como base? Posso iniciar a análise de breaking changes?"

Só transite para `ANALISE_BREAKING_CHANGES` após a confirmação.

---

## PASSO 3 — Análise de breaking changes

**[Estado: ANALISE_BREAKING_CHANGES]**

Leia as diferenças entre o N3 original e o atualizado e avalie:

- Esta mudança exige novas migrations de banco?
- Altera o schema de Request ou Response da API de forma incompatível?
- Adiciona campos novos que precisam ir para o data-models/[dominio].md?
- Afeta algum evento publicado ou consumido?
- Afeta workers ou jobs assíncronos?

Gere um alerta obrigatório e aguarde confirmação antes de continuar:

```
⚠️ Análise de Breaking Changes:

Migrations necessárias: [Sim/Não — justificativa]
APIs com schema alterado: [lista ou "Nenhuma"]
Eventos afetados: [lista ou "Nenhum"]
Workers afetados: [lista ou "Nenhum"]
Campos novos para data-models/[dominio].md:
  - Label PO: [x] | Label Dev: [y] | Campo banco: [z] | Tipo: [t]
```

> "Confirma estas mudanças? Posso prosseguir com a atualização técnica?"

---

## PASSO 4 — Atualização do data-model

**[Estado: ATUALIZACAO_DATA_MODEL]**

Se houver campos novos aprovados, liste-os para adição ao fragmento do domínio:

> "⚠️ Os seguintes campos devem ser adicionados ao
> `global/data-models/[dominio].md` antes de implementar:
> [tabela com Label PO | Label Dev | campo banco | tipo SQL | notas]"

---

## PASSO 5 — Geração da atualização técnica

**[Estado: GERACAO_TECNICA]**

Atualize apenas as seções técnicas (`dev-only`) afetadas:
- Mapeamento de campos: atualizar **apenas a referência** ao data-models se a
  entidade mudou (`→ ver DATA-MODEL.md: Entidade [Nome]`). Tipo SQL, campo banco,
  FK e índices são alterados **no DATA-MODEL**, nunca reescritos no N3 — mantenha-os
  sincronizados lá.
- Cenários técnicos adicionais: adicionar/remover conforme mudanças
- Mapeamento de erros: verificar no ERROR-DICTIONARY.md; propor novos com ⚠️
- API: atualizar endpoints afetados (body, response, erros)
- Eventos: atualizar se payload mudou
- AuditLog: atualizar metadata se campos mudaram
- Arquivos: listar o que precisa ser criado ou alterado
- **Métricas de tamanho (APF)**: se a mudança criou/removeu uma transação que conta,
  ou alterou DER/ALR/complexidade de uma existente, **reconte pelo PASSO 6 do
  `PROMPT_3B`** — as mesmas fontes de ALR e DER, a `### Memória de cálculo` canônica em
  cada linha recontada e a linha de PF 0 quando um PE deixa de contar — e atualize a
  tabela, a memória e o **Total** da seção `## Métricas de tamanho`. A **Data** muda só
  nas linhas recontadas. Mudança **puramente técnica** que não altera a lógica de
  processamento (ótica do usuário) **não** gera nova contagem — registre que a contagem
  permanece inalterada.
  **Linha `↪ [ID](…)` (PE reutilizado):** o PE conta na feature `ID` e é lá que ele é alterado e
  recontado — a linha contada, a memória, a Data, a `## Origem` e o Changelog daquela
  feature, com a contagem dela pendente —; aqui a linha `↪` não muda. Se a mudança separa
  as listas (vale só para esta tela), esta feature passa a contar o seu PE e declara
  `> Distinto de <ID> · <PE>: <o que difere>` na memória.
  O cabeçalho `## Métricas de tamanho` deve ficar **seguido diretamente pela tabela**:
  não insira texto explicativo entre eles e, se encontrar notas legadas nessa posição
  (ex.: "Registra apenas Funções de Transação…" ou aviso de contagem provisória),
  **remova-as** — ressalvas vão no Changelog (nova linha no topo, ordem decrescente por data) ou na memória de cálculo.
  **Não** atualize `global/CONTAGEM-PF.md` nem `modules/INDEX.md` aqui, e não toque o
  bloco `contagem` do front-matter: o 4A deixou a contagem pendente, e quem a revisa e
  espelha no consolidado é a opção **CT** (PASSO 6, item 4).

Apresente apenas as seções técnicas alteradas. Pergunte:
> "As seções técnicas atualizadas estão corretas?
> Posso gerar o arquivo final mesclado?"

---

## PASSO 6 — Arquivo final e ações pós-sessão

**[Estado: ARQUIVO_FINAL]**

Gere o arquivo .md completo com negocial + técnico mesclados.
Ao mesclar, acrescentar nova entrada no `## Changelog` do arquivo registrando a atualização técnica.
A nova linha entra **no topo da tabela** (logo abaixo do cabeçalho), mantendo o changelog em **ordem decrescente por data** — a entrada mais recente sempre primeiro.

Ao finalizar, informe obrigatoriamente:

> "✅ Atualização do N3 de [feature] concluída.
>
> **Ações obrigatórias antes de implementar:**
>
> 1. Atualizar `global/data-models/[dominio].md` com os campos novos aprovados
>    e o índice `global/DATA-MODEL.md` (`## Campos adicionados recentemente`; e
>    `## Arquivos Lógicos (APF)` se a contagem do ALI mudou)
> 2. Conferir a entrada técnica no topo do `## Changelog` do N3 e, se a mudança veio
>    de um ticket, o Changelog da AIM `analise-impacto/AIM-<CHAVE>.md` (PROMPT_4A, PASSO 7)
> 3. Se a feature já estava ✅ `implementado`, a spec agora está à frente do código:
>    declare o estado manual `estado: revisao-necessaria` no front-matter, rode
>    `python3 scripts/gates.py promote --write` (o espelho da esteira mostra ⚠️) e leve
>    o ⚠️ à coluna Status da linha da feature no `modules/INDEX.md` e na
>    `## Features` da AIM do ticket. Quem devolve o `estado` ao derivado dos gates
>    (`implementado`) é a entrega: o fechamento da AIM (skill `analise-impacto`, passo
>    7) — o `validate-impact` não deixa a AIM ir a `concluído` com a feature em
>    `revisao-necessaria`. Com a Cadência declarada no MASTER, isso acontece na branch da
>    unidade de entrega, antes do merge (`valida-entrega.mjs`). Feature ainda não
>    implementada não muda de estado: a esteira segue de onde estava.
> 4. Rodar a revisão da contagem: opção **CT** (`PROMPT_CONTAGEM`) com escopo = [ID],
>    **mesmo que o número não tenha mudado** — o 4A deixou `contagem.pendente: true`, e a
>    revisão com Δ PF = 0 também a fecha. É o CT que atualiza o `global/CONTAGEM-PF.md`
>    (linha do PE, subtotais, Total, Pendências e Histórico) e o total no `modules/INDEX.md`
> 5. Se houver breaking change na API, comunicar os consumidores"
