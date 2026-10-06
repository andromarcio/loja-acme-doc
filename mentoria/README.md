# Mentoria docqui — Loja Acme

Este repositório é uma instância real do framework **docqui**, montada para formar analistas no método. Ele roda a mesma engine das instâncias de produção (siesa-engine 6.0.0), com o perfil `requisitos` e a cadência `sprint`, e começa só com a identidade do sistema preenchida: a Loja Acme, sigla `LACME`. Todo o resto você escreve, do N0 à entrega da sprint, com os prompts conduzindo e os validadores conferindo.

| Arquivo | Para quê |
|---|---|
| `mentoria/README.md` | este guia: preparação, branches, regras, roteiro e o que o mentor confere |
| `mentoria/backlog.md` | os tickets do ServiceNow fictício da Acme, de onde saem as AIMs |
| `mentoria/simulador.html` | o simulador do método: a mesma sprint, passo a passo, com as saídas reais dos validadores |

## Antes de começar

1. **Percorra o simulador.** Baixe `mentoria/simulador.html` (ou clone o repositório) e abra no navegador. No topo, escolha o perfil **requisitos**: são 32 passos, do repositório vazio ao merge. O GitHub mostra o código do arquivo, não a página; ele precisa ser aberto localmente.
2. **Prepare o ambiente.** Claude Code (terminal, VS Code ou web) aberto na raiz deste repositório, Node 20 ou mais novo e Python 3 com PyYAML (`pip install pyyaml`), que o `scripts/gates.py` usa.
3. **Abra a sessão na raiz.** O Claude Code lê o `CLAUDE.md`, que carrega o MASTER, o N0 e o INDEX, e o hook `spec-guard` (registrado em `.claude/settings.json`) passa a rodar os validadores a cada arquivo gravado. Se a skill `analista-requisitos` não aparecer ao digitar `/`, peça "use a skill analista-requisitos".

## As branches

```text
main                           ponto de partida comum: só a identidade. Ninguém mescla aqui.
 └─ n0/<nome>                  exercício 1: a sua visão de produto (PR rascunho → main)
     └─ sprint/SP07-<nome>     exercícios 2 a 7: a sua sprint (PR rascunho → n0/<nome>)
         └─ cp/<nome>/<ID>-<gate>   cada checkpoint, num PR curto → sprint/SP07-<nome>
```

- **`n0/<nome>`** guarda o seu N0. Ele fica fora da sprint porque, na cadência `sprint`, todo arquivo que a branch de entrega altera precisa ter sido declarado por um ticket, e a visão de produto não é de ticket nenhum.
- **`sprint/SP07-<nome>`** é a sua branch de entrega: o id da sprint é `SP07-<nome>`, e a AIM da sprint é `analise-impacto/AIM-SP07-<nome>.md`. As AIMs, os N1, N2 e N3, o modelo de dados, a contagem e os planos de teste entram nela por commits diretos, um ticket por commit.
- **`cp/<nome>/<ID>-<gate>`** leva um checkpoint só (por exemplo, `cp/joana/VND-CHK-01-requisitos`): o gate no front-matter do N3, o artefato da etapa e o espelho do INDEX. O PR vai para a sua branch de sprint; o CODEOWNERS chama o mentor, que aprova e mescla.

```bash
git checkout -b n0/joana origin/main
# … exercício 1 …
git push -u origin n0/joana                  # abra o PR rascunho n0/joana → main

git checkout -b sprint/SP07-joana n0/joana
git push -u origin sprint/SP07-joana         # abra o PR rascunho sprint/SP07-joana → n0/joana
```

Abra o PR da sprint como rascunho logo no planejamento: a CI (`spec-guard`) roda a cada push, e o portão da entrega (`valida-entrega`) mostra o tempo todo o que ainda separa a sprint do merge. Ele só fica verde no fechamento.

## As regras que os validadores cobram

- **Um commit, um ticket.** O assunto do commit que toca a spec cita uma chave só: `docs(VND-CHK-01): Calcular Frete — 3A (ServiceNow STRY0013101)`. Nos commits da AIM da sprint, a chave é `SP07-<nome>`. Commit só com artefato regenerado por script (espelho da esteira, índice dos dicionários) vai marcado `[gerado]`, sem chave. Quem confere: `valida-commits-ticket`.
- **A AIM antes da spec.** Nenhum N1, N2 ou N3 muda antes do aval do mentor no changeset (`avalizado-por` no front-matter da AIM). Quem confere: `validate-impact`.
- **Um gate por PR**, com o artefato da etapa e o espelho do INDEX regenerado (`python3 scripts/gates.py promote --write`) no mesmo PR. Quem confere: o check *Esteira de gates — check*.
- **O elo nos três lugares.** O par ticket ↔ feature aparece na `## Origem` do N3, na `## Features` da AIM e no INDEX, com o mesmo Status. Quem confere: `audit-trace-links`, a cada gravação.
- **A contagem nasce no N3.** A `## Métricas de tamanho` e a memória de cálculo (o bloco JSON) vêm primeiro; o `global/CONTAGEM-PF.md` só espelha. Quem confere: `valida-enumeracao-contagem` e `valida-contagem-consolidada`.
- **Parágrafo numa linha só.** Rode `node scripts/verifica-texto-corrido.mjs <seus arquivos>`. Veja a linha de base abaixo antes de rodar na pasta inteira.

## O roteiro

Os IDs e nomes esperados são os do simulador. Os passos citados são os do simulador no perfil **requisitos**; a âncora entre parênteses leva direto a eles (`simulador.html#t1-n3`, por exemplo).

| # | Exercício | Opções e comandos | O que deve sair | Simulador |
|---|---|---|---|---|
| 1 | A visão de produto, na `n0/<nome>` | **N0** | `global/N0_PRODUCT_VISION.md` preenchido, com os Major Feature Sets previstos (Vendas `VND`, Catálogo `CAT`), passando no `validate-doc` | passo 4 (`n0`) |
| 2 | Planejar a SP07 | branch da sprint; copie `analise-impacto/_TEMPLATE_AIM_SPRINT.md` | `AIM-SP07-<nome>.md` em `rascunho`, com os três tickets do backlog | passo 5 (`sprint`) |
| 3 | STRY0013101, da triagem ao N3 | **TR**, **AIM** (passos 1 a 6), **1A**, **2A**, **DM**, **3A** | a AIM avalizada; N1 Vendas, N2 Checkout, o modelo negocial de Vendas e o N3 de `VND-CHK-01` — Calcular Frete | passos 6 a 13 (`t1-triagem` … `t1-n3`) |
| 4 | Os checkpoints e a contagem de `VND-CHK-01` — Calcular Frete | PRs `cp/…` para CP1 e CP2; **CT**; plano de testes em `qa/` | a feature em 📋 `especificado`; a contagem no N3 e no consolidado | passos 14 a 17 (`t1-cp1` … `t1-qa`) |
| 5 | STRY0013120: alterar e criar | **TR**, **AIM** com o `generate-impact-draft`, **4A**, **3A**, **DM**, PRs `cp/…`, **CT** | `VND-CHK-01` — Calcular Frete com o prazo; `VND-CHK-02` — Consultar Resumo do Pedido em 📋 `especificado` | passos 18 a 22 (`t2-triagem` … `t2-esteira`) |
| 6 | STRY0013135: o cupom | **AIM**, **3A** | a AIM e o N3 de `VND-CHK-03` — Aplicar Cupom, em commits com a chave do ticket | passo 23 (`t3`) |
| 7 | O fechamento da sprint | `reverte-ticket STRY0013135`; skill **analise-impacto** (as AIMs dos tickets e a da sprint); `gera-planilha-contagem.py --jira`; `valida-entrega` | as AIMs em `concluído`, a AIM da sprint conferida com as dos tickets, o portão verde | passos 25 a 31 (`relatorio` … `merge`) |

Depois da SP07, pratique com os dois tickets da segunda parte do `backlog.md`, sem o roteiro.

## O que muda em relação ao simulador

- A branch da sprint é `sprint/SP07-<nome>`, não `sprint/SP07`, e o PR dela vai para a sua `n0/<nome>`, não para a `main`. Ao rodar os scripts de entrega à mão, use essa base: `node scripts/valida-commits-ticket.mjs --base origin/n0/<nome>` e `node scripts/valida-entrega.mjs --base origin/n0/<nome>`.
- Os checkpoints são PRs `cp/…` para a sua branch de sprint. No simulador eles aparecem só como o `gate-check` com `--base origin/sprint/SP07`.
- O mentor faz o papel de todo aprovador: a PO no aval da AIM e no CP1, o DBA no CP2. No front-matter do N3, o `por:` de cada gate é `andromarcio`.
- Não há merge na `main` no fim: o portão verde no PR da sprint é a entrega.

## A linha de base: o que já vem do engine

Confira estes números antes de concluir que um problema é seu.

- **`verifica-texto-corrido` sem argumentos acusa 72 quebras em 11 arquivos de `global/`.** Elas vêm dos modelos do engine, não de você. `modules/` começa limpo. Rode o verificador nos arquivos que você escreveu.
- **O modelo da AIM** (`analise-impacto/_TEMPLATE_AIM.md`) traz o parágrafo de `## Contexto` quebrado em duas linhas. Ao trocar pelo seu texto, escreva numa linha só, ou a sua AIM herda a quebra.
- **O `validate-impact` avisa `Tipo desconhecido "N1"` e `"N2"`** quando a AIM declara o N1 ou o N2 no changeset. Declare assim mesmo: na entrega, a branch só pode alterar o que algum ticket declarou. O aviso não reprova.
- **O plano de testes no perfil `requisitos`.** O `validate-impact` exige uma linha de QA para toda mudança funcional (invariante C2), mas o perfil `requisitos` não tem a opção 5B nem o checkpoint de testes. Escreva o plano a partir dos cenários do N3, como no simulador (passo 17, `t1-qa`), e peça a revisão do mentor no PR.
- **O *Esteira de gates — check* no PR da sprint** não confere as transições de gate: comparada com a base, a sprint acumula vários gates por feature, e o check reprovaria sempre. Por isso as transições valem nos PRs `cp/…`. O espelho do INDEX continua conferido no PR da sprint. Esta é uma adaptação desta instância (`.github/workflows/gate-check.yml`).

## Para o mentor

**Configuração no GitHub, uma vez:**

- Dê aos analistas acesso de escrita ao repositório (Settings → Collaborators).
- Em Settings → Branches, proteja a `main`: *Require a pull request before merging* e *Require review from Code Owners*. Nada é mesclado na `main` durante a mentoria; a regra só impede um push acidental no ponto de partida de todos.
- O `CODEOWNERS` já aponta `@andromarcio` para todos os checkpoints: você é chamado como revisor em todo PR que toca `modules/`, `global/data-models/`, `global/DATA-MODEL.md`, `qa/` ou `repos/`.

**No dia a dia:**

- O aval da AIM é seu: revise o changeset no PR da sprint e peça ao analista que registre `avalizado-por` no front-matter, com o seu nome e a data.
- Aprovar um checkpoint é aprovar e mesclar o PR `cp/…` na branch de sprint do analista.
- No fechamento, diga quais tickets foram entregues. O STRY0013135 não é: o analista o tira com o `reverte-ticket`.
- Ao fim da turma, apague as branches `n0/`, `sprint/` e `cp/` dos analistas. A `main` continua pronta para a próxima.
- Para atualizar a engine desta instância, rode, a partir de um checkout atualizado do siesa-engine, `node scripts/sync-instance.mjs ../loja-acme-doc` (relatório) e depois com `--write`. O engine sobe primeiro: só sincronize depois que a mudança estiver na `main` dele.

**O que conferir em cada etapa:**

| Etapa | Confira |
|---|---|
| N0 | o escopo tem o que está fora; os Major Feature Sets previstos têm sigla de 3 letras; a sigla do subtítulo é a do MASTER |
| AIM | a descrição está transcrita, não reescrita; `CA-n` só existe se a fonte numera; o changeset passa no C1 a C3; as linhas candidatas que não mudam foram podadas; N1 e N2 estão declarados quando o ticket os cria |
| N1, N2, N3 | houve "Contexto verificado" antes de especificar; o N1 diz o que o domínio não faz; as permissões estão só no N2; a regra é invariante e a reação está no cenário; as mensagens saem do catálogo, com o marcador na linha antes do `Scenario:`; o verbo do nome da feature bate com o tipo dela (Consultar pede colunas do resultado) |
| Checkpoints | um gate por PR; o `estado` é o derivado (no perfil `requisitos`, o CP2 leva a `especificado`); o espelho do INDEX e o Status na AIM e no INDEX acompanham |
| Contagem | o número nasce no N3, com a memória de cálculo em bloco JSON de nomes; o consolidado espelha; a alteração que não muda o PF ainda fecha a pendência |
| Fechamento | a coluna Mudança diz o que mudou e de quê (*Antes* … *Agora* …); a reconciliação justifica cada divergência; na AIM da sprint, cada função entra uma vez e a natureza é a da sprint (incluída vence) |
