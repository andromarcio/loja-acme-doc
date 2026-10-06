---
name: analise-impacto
description: >-
  Fecha a AIM (Análise de Impacto) de um ticket JÁ ENTREGUE e escreve a AIM da sprint:
  descobre quais features mudaram de comportamento, quais precisaram ser criadas, o que a
  entrega fez no data-model e nos dicionários, aplica o delta nos N3, reescreve a AIM com o
  que foi alterado e dimensiona tudo em Pontos de Função (PFB/PFL) para auditoria de métrica.
  Acione sempre que o usuário falar de: análise de impacto, AIM, AIM da sprint, impacto de
  sprint ou de release, o que a sprint mudou na spec, delta da sprint, features impactadas,
  novas vs alteradas, conciliar entrega com documentação, dimensionar uma evolução, contar
  PF de uma sprint, PFB, PFL, função incluída, função alterada, CHGA, ou entregar um
  documento de impacto para a equipe de métricas, para o PO ou para a chefia. Acione também
  quando apontarem um ticket entregue, changelog de sprint, relatório de entrega ou lista de
  migrações pedindo "veja o que isso impacta". Antes da entrega, quem abre a AIM e a leva ao
  aval do PO é o PROMPT_AIM, não esta skill.
---

# Análise de Impacto de uma entrega

Uma sprint foi entregue. O código está em produção, as migrações rodaram, e existe uma especificação — escrita antes, ou por engenharia reversa — que agora está desalinhada. Esta skill conduz o trabalho de descobrir **o que exatamente mudou**, registrar isso de forma auditável na AIM de cada ticket e **dimensionar** a evolução na AIM da sprint.

## Uma AIM por ticket, versionada — esta skill a fecha

**AIM** e **Análise de Impacto** são nomes do mesmo artefato *(convenção do PO, 2026-09-27)*: um arquivo por ticket, `analise-impacto/AIM-<CHAVE>.md`, versionado à medida que o ticket avança *(decisão do PO, 2026-09-28)*. No início é a visão do que **será** alterado; no fim, do que **foi** alterado. Duas mãos escrevem nele, em momentos diferentes, e confundi-las faz você escrever a visão errada:

| | `engine/prompts/PROMPT_AIM.md` | Esta skill |
|---|---|---|
| Momento | **Antes** da spec mudar (passos 1–6) | **Depois** da entrega (passo 7) |
| Estado da AIM | `rascunho` → `em-análise` → `escopo-aprovado` | `concluído` |
| Insumo | O ticket na ferramenta de origem | A AIM avalizada + o que foi entregue: changelog, código, modelo físico |
| Pergunta | Que artefatos o ticket *vai* alterar? | O que o ticket *alterou* na spec publicada? |
| Entrega | Changeset para o aval do PO | As seções de impacto reescritas com o que mudou, PFB/PFL e a Reconciliação; a AIM da sprint |
| Governa | O escopo antes do trabalho | A auditoria e o faturamento depois dele |

Se o ticket ainda não virou código, é o PROMPT_AIM. Se a sprint entregou, é esta skill. Ticket entregue **sem** AIM ganha a sua agora, a partir do `analise-impacto/_TEMPLATE_AIM.md`, com `aberta-na-entrega: true`: não houve escopo prévio a reconciliar, e a `## Reconciliação` diz isso. *Analisar o impacto* é a atividade — qualquer análise de impacto, inclusive a que gera o artefato —, e o contexto diz qual. Se o cliente chama o artefato por outro nome, o sinônimo vai para o `CLAUDE.md` da instância, não para o engine.

---

## Toda feature aparece com código **e** nome

`TEM-ASO-03` não diz nada a quem lê. *Exportar Atendimento Social* diz. Quem recebe a análise — PO, métrica, chefia — não tem a árvore de IDs na cabeça, e uma tabela de códigos obriga a abrir os N3 um a um só para saber do que se está falando.

A regra: **onde a feature é um item enumerado, o código vem acompanhado do nome** — linha de tabela, item de lista, célula de resumo, bloco de decisão. Em prosa corrida, o par aparece na **primeira menção de cada seção**; as repetições seguintes podem ficar só com o código, que a essa altura já foi apresentado.

| ❌ | ✅ |
|---|---|
| Trava o fechamento de `TEM-ASO-02` e de `TEM-ASO-03` | Trava o fechamento de `TEM-ASO-02` *Consultar Atendimento Social* e de `TEM-ASO-03` *Exportar Atendimento Social* |
| \| `MON-API-03` \| página pública \| | \| `MON-API-03` **Consultar Status das APIs** \| página pública \| |
| 4 features novas `MON-API-01..04` | 4 features novas: verificar disponibilidade, notificar indisponibilidade, consultar status e configurar monitoramento (`MON-API-01..04`) |

Vale também para o **intervalo** de códigos: `MON-API-01..04` economiza espaço e esconde o conteúdo. Se são quatro, nomeie as quatro — é o mesmo princípio de não deixar contagem sem lastro (FD-9).

O nome canônico é o **título do N3** (a linha `# …` do arquivo), não uma paráfrase. Feature ainda sem N3 usa o nome proposto, marcado como proposta.

---

## Antes de qualquer coisa: fixe a linha do tempo

Esta é a decisão que contamina todo o resto, e errar aqui inverte conclusões inteiras. Descubra e escreva **três datas** antes de analisar uma linha sequer:

1. **Quando o baseline APF foi contado?** (a planilha de contagem tem data)
2. **Quando a spec foi escrita, e a partir de quê?**
3. **Quando a sprint entregou?**

O que essas datas decidem:

- **Se o baseline é anterior à sprint**, então a planilha é o "antes" e o modelo físico atual é o "depois". O que falta na planilha **não é lacuna de contagem** — são funções que não existiam quando se contou, e que entram como **incluídas** na contagem da própria sprint. Tratá-las como lacuna gera perguntas erradas à equipe de métricas.
- **Se a spec foi escrita por engenharia reversa do código atual**, ela já descreve comportamento *pós-sprint* em vários pontos. Então o "antes" de cada delta **não é o código anterior** (que você provavelmente não tem) — é o **N3 como publicado**. Extraia o "antes" do texto do N3, ou do diff do artefato, nunca do sistema em produção.

Quando faltar o estado anterior — SQL antigo, arquivos de migração —, **diga isso na AIM como premissa**, não invente. A lista de alterações passa a ser a *declarada* pelo ticket, não a *verificada no script*, e essa diferença importa para quem audita.

---

## A reclassificação que ninguém espera

Tickets costumam marcar itens como **NOVA** quando o que querem dizer é *"primeiro envio à área negocial"*. Uma funcionalidade pode existir em produção há meses e ainda ser "nova" para o negócio.

Na spec, o critério é outro: **existe um N3 para isso?** Se existe, é **alteração**, por mais nova que o ticket diga que é. E cuidado com a sobreposição parcial: uma entrega marcada como nova pode ter metade já especificada em outra feature. Busque no índice de rastreabilidade por verbo e por entidade antes de concluir que algo não existe.

Sempre confronte item a item e registre a reclassificação explicitamente — é um dos achados mais valiosos da AIM, porque muda quem faz o trabalho e quanto se conta.

---

## A contagem por sprint rastreia ticket e critério

Toda sprint fecha com uma contagem das features impactadas, e **cada feature carrega de onde veio**: a chave do ticket na ferramenta de origem e, quando a fonte numera os critérios de aceite, o número do critério que aquela feature realiza. É requisito de cliente, não enfeite — é o que permite conferir a contagem lado a lado com a ferramenta, critério por critério.

O elo já existe nos artefatos: a coluna `Critérios cobertos` do `## Origem` de cada N3 abre com as referências `CA-n`, e a `## Features` da AIM do ticket as espelha. A coluna `CA-n` da `## Alterações na spec, por Feature Set` as repete, para quem lê a contagem não precisar abrir os N3 um a um.

Duas regras mantêm isso honesto:

- **Número só existe se a fonte numerar.** Muito ticket lista os critérios como bullets, prosa ou sub-seções. Aí a coluna sai `—` e a rastreabilidade é só pela chave do ticket. Numerar por conta própria produz um número que não existe na ferramenta do cliente — e um número errado é pior que nenhum, porque parece conferível.
- **A união dos critérios das features é o conjunto de critérios do ticket.** Ao fechar a AIM, confira: nenhum `CA-n` repetido entre features, nenhum faltando. Critério sobrando é feature que falta; critério repetido é fronteira mal traçada entre duas features.

---

## Onde a AIM mora e como se chama

As duas naturezas de AIM se leem de formas diferentes: a da sprint é o que a métrica audita, a do ticket é o que o time consulta ao mexer naquele ticket.

| Natureza | Arquivo | Título (`#`) | Front-matter |
|---|---|---|---|
| AIM do ticket — um item da ferramenta de origem | `analise-impacto/AIM-<CHAVE>.md` | `# AIM <CHAVE>` | `tipo: ticket` |
| AIM da sprint — consolida os tickets entregues | `analise-impacto/AIM-<sprint>.md` | `# AIM <sprint>` | `tipo: sprint` |

`<CHAVE>` é a chave da ferramenta de origem, como ela é lá — `PDTIC25093-49`, `STRY0012345`. `<sprint>` é como a organização chama o lote: `SP05`, `APIS_PUBLICAS_262-266`. Quem separa as duas para os scripts — a planilha de entrega, o HTML, a rastreabilidade — é o `tipo:` do front-matter, não o nome do arquivo: `SP07-08` tem cara de chave e é uma sprint.

**O título é só a chave — sem a descrição do ticket.** `AIM PDTIC25093-49`, não `Análise de Impacto — PDTIC25093-49 Fechamento da Etapa de Avaliação`. A descrição envelhece: o ticket é renomeado no Jira, a entrega muda de escopo, e o título passa a divergir da fonte sem que nada acuse. A chave não envelhece, e é por ela que se procura o documento — na lista de arquivos, no menu e na conferência com a ferramenta de origem. O título curto fica no front-matter (`titulo:`) e o que o ticket pede na `## Descrição do ticket`, onde podem ser corrigidos sem renomear nada.

**A chave nunca aparece em caixa de título.** É identificador, não palavra: ninguém procura nem reconhece "Pdtic25093-49". No corpo do documento, escreva-a como a ferramenta escreve.

---

## A estrutura que o gerador espera

- **Front-matter** — a fonte única dos metadados: `ticket`, `ferramenta`, `link`, `titulo`, `sprint`, `estado` (na AIM da sprint, `sprint` e `entrega`). O HTML o mostra como ficha, um campo por linha. Não repita esses campos no corpo: dois lugares para o mesmo dado divergem.
- **Entre o `# AIM …` e o primeiro `##`, nada.** Um lede em prosa resumindo a AIM não sai no HTML — o gerador o descarta, porque o título já entrega e a primeira seção repete.
- **Os comentários `<!-- … -->` do template** são instrução: não aparecem no HTML e podem ficar.

Dentro das seções vale o mesmo princípio: **nada de preâmbulo**. Uma seção abre direto no seu primeiro conteúdo — a tabela, o primeiro Feature Set. Parágrafo anunciando o que a seção registra, ou blockquote explicando as colunas da tabela logo abaixo, é peso morto: quem chegou na seção de alterações já sabe que ela lista alterações, e a legenda de PFB/PFL pertence ao `global/SIZING.md`, não a cada AIM.

Se uma convenção de leitura é mesmo indispensável — uma premissa que muda como o número se interpreta —, ela é conteúdo, não preâmbulo: dê a ela um lugar próprio no documento.

---

## O fechamento da AIM do ticket, seção por seção

Trabalhe nesta ordem. As seções de impacto da AIM chegam aqui com a visão do que **seria** alterado; o fechamento as reescreve com o que **foi**. O Changelog registra a versão, e o git guarda a anterior — não mantenha as duas visões lado a lado.

**1. `## Features`.** A ponte entre o vocabulário do ticket e o da spec. Confira a tabela contra o que foi entregue: feature que a entrega tocou e não está lá entra agora — e o ticket entra na `## Origem` do N3, porque o elo é recíproco (o `audit-trace-links` confere). A reclassificação NOVA × alteração se decide aqui, feature a feature.

**2. `## Alterações na spec, por Feature Set`.** Depois de aplicar o delta nos N3, registre o que **efetivamente entrou**. Agrupe por Feature Set e traga uma linha por feature — **incluindo as features novas**, senão quem lê vê só metade do trabalho. Cada linha: ID **e nome** da feature, os critérios cobertos (`CA-n`, ou `—` quando a fonte não numera), a natureza (`incluída`/`alterada`), o que mudou em relação ao comportamento anterior, a contagem de regras e cenários acrescentados, PFB e PFL. Para uma feature nova, proponha o ID pela numeração livre do Feature Set — rode o preflight da instância para não colidir — e reconcilie duplicatas: duas análises paralelas costumam propor features diferentes para a mesma entrega.

**3. `## Funções de dados alteradas`.** Agrupe as alterações físicas pela função de dados (ALI/AIE) a que cada tabela pertence, ligando **migração → tabela/coluna → ALI/AIE**, com o tamanho antes e depois no título da função (`### ALI: <Entidade> — RLR a → b · DER c → d`), que é o formato que a planilha de entrega lê. Ver `references/dimensionamento-apf.md` para as regras de contagem.

**4. `## Impacto em dicionários`.** Mensagens, regras e campos canônicos novos ou alterados.

**5. `## Decisões de produto pendentes`.** Onde o ticket contradiz o publicado, ou falta uma escolha antes de reescrever. Cada decisão precisa dizer **o que trava** se não for tomada.

**6. `## Reconciliação`.** O declarado no changeset × o efetivamente tocado: `node scripts/validate-impact.mjs analise-impacto/AIM-<CHAVE>.md --git-base <base>`. Declarado e não tocado é escopo não cumprido; tocado e não declarado é desvio — os dois precisam de justificativa escrita. Na AIM aberta na entrega, diga que não houve escopo prévio.

**7. Estado das features.** Cada feature da `## Features` precisa estar no **estado final da esteira** da instância — `implementado` no perfil `completo`, `especificado` no `requisitos` (MASTER → `**Perfil**`) — ou `deprecado`. A feature alterada pelo ticket ficou em `revisao-necessaria` desde o `PROMPT_4B` (a spec à frente do código): a entrega é o que a devolve — volte o `estado` ao derivado dos gates, rode `python3 scripts/gates.py promote --write` e atualize o Status na `## Features` (o `audit-trace-links` compara o Status com o `estado` do N3). Feature que ficou por especificar não fecha com o ticket: ou sai da `## Features` (vai para outro ticket) ou a AIM não está concluída.

**8. Front-matter e Changelog.** `estado: concluído`, a `sprint` da entrega e o `avalizado-por` — na AIM aberta na entrega, o PO que conferiu a visão final —, e uma linha no topo do Changelog registrando a versão final.

O `validate-impact` é o contrato do estado `concluído`: sem a `sprint`, sem uma linha real (com ID de feature) nas alterações, com a Reconciliação vazia ou com feature fora do estado final da esteira, a AIM não fecha.

**Na branch da entrega** (MASTER → `**Cadência**`). A `main` só recebe o que foi entregue; o fechamento acontece na branch da unidade de entrega, e o merge dela é a entrega. Na cadência `história`, a branch é `historia/<CHAVE>` e leva só este ticket. Na cadência `sprint`, a branch é `sprint/<id>`: antes de fechar a AIM da sprint, tire da branch cada ticket que **não** foi entregue — `node scripts/reverte-ticket.mjs <CHAVE>` (simulação) e, conferido, `--write` —, que reverte os commits que citam a chave dele e diz como reaplicá-lo na próxima sprint. O PR para a `main` passa no `node scripts/valida-entrega.mjs`: AIM da unidade concluída, nenhuma AIM de ticket aberta na branch e a branch alterando só o que os tickets entregues declaram.

## A AIM da sprint

Fechadas as AIMs dos tickets da sprint, escreva `analise-impacto/AIM-<sprint>.md` a partir do `analise-impacto/_TEMPLATE_AIM_SPRINT.md`. Ela não repete as AIMs dos tickets — consolida:

- **`## Tickets da sprint`** — um ticket por linha, com o link da sua AIM e o que ele entregou, em uma frase. Os tickets são os de front-matter `sprint:` igual a esta.
- **`## Alterações na spec, por Feature Set`** — uma linha por feature, **uma vez só**, com a(s) chave(s) do ticket na coluna Ticket. Feature entregue sem ticket na ferramenta entra aqui com `⚠️ sem ticket`: a AIM da sprint é a única fonte dela.
- **`## Funções de dados alteradas`** e **`## Apurável da sprint`** — cada função uma vez, e o total de transações e de funções de dados, em PFB e PFL.

O `validate-impact` confere a AIM da sprint com as AIMs dos tickets da pasta: os mesmos tickets (cada listado com a sua AIM, de `sprint:` igual, e toda AIM com esse `sprint:` na lista), cada feature e cada função de dados uma vez, a visão final de cada ticket concluído dentro dela (a feature que ele alterou, na linha que cita a chave dele; cada `### ALI|AIE:` dele, em `## Funções de dados alteradas`), a natureza — `incluída` se algum ticket da sprint incluiu a feature, ainda que outro a tenha alterado depois — e o apurável como a soma das linhas. Em `concluído`, divergência reprova; em `rascunho`, avisa. Por isso a AIM da sprint se escreve **depois** de fechadas as dos tickets: é a consolidação delas, não uma segunda fonte.

A planilha de entrega (`scripts/gera-planilha-contagem.py`) lê as duas naturezas: a AIM do ticket dá a rastreabilidade ticket › critério › feature; a da sprint, o que não tem ticket.

---

## Como escrever a coluna Mudança

Este é o erro que mais se repete, e o que mais irrita quem lê: descrever **o estado atual** em vez da **mudança**. Quem lê a AIM já pode ler a spec — o que ela não tem em lugar nenhum é o contraste.

Toda linha de delta abre com o **verbo da mudança** — Inclusão, Alteração, Restrição, Remoção, Correção — e depois traz o contraste explícito: *Antes* … *Agora* …

**Ruim**, porque descreve o que a feature faz:

> Seleção de estado (UF) com escopo de perfil e andamento da consolidação por estado.

**Bom**, porque diz o que mudou e de quê:

> **Inclusão** do recorte por estado e do andamento da consolidação. *Antes* o painel mostrava a árvore de toda a premiação, com indicadores e busca — **não havia nenhum filtro por UF**, e o Regional via exatamente o mesmo que o Nacional. *Agora* há seleção de estado com escopo de perfil e uma visão de quais estados concluíram a consolidação.

O mesmo vale para o modelo. Não descreva a coluna, diga o que aconteceu com ela: "**Inclusão da coluna** `NR_CLASSIFICADOS` (int, não nulo, padrão 1) — quantos avançam por grupo. *Antes* a etapa não guardava corte nenhum."

Para extrair o "antes" com fidelidade, leia as **linhas removidas** do diff do N3, não o arquivo atual:

```bash
git diff -U0 <commit-antes-do-delta> HEAD -- <arquivo-do-N3> | grep '^-' | grep -v '^---'
```

---

## O número nasce no N3

**A contagem se faz no N3 e só depois é consolidada.** O número de cada processo elementar é apurado e gravado na seção `## Métricas de tamanho` da própria feature, com a `### Memória de cálculo` que o sustenta; só então ele é espelhado em `global/CONTAGEM-PF.md` e o total propagado para `modules/INDEX.md`. Vale para contagem de sprint como para qualquer outra: a tabela da AIM **espelha** o N3, nunca o antecede.

Escrever o número direto no consolidado — ou só na AIM — cria um valor sem memória e sem fonte: na recontagem seguinte ninguém sabe se o ALR esqueceu um arquivo lógico ou se o DER contou o mesmo campo duas vezes, e o consolidado passa a divergir da spec sem que nada acuse. Se um PE precisa de número e o N3 não sustenta, a lacuna é do N3 — registre-a com ⚠️ e feche-a lá, não na AIM.

## As armadilhas de contagem

Cada uma destas custou uma correção nesta linhagem de trabalho. Não são óbvias e nenhum validador pega.

**Confira qual coluna da planilha é a fonte antes de citar qualquer número.** Planilhas de contagem costumam ter várias colunas de PF — bruto, líquido, por tipo de função, com deduções. Some cada candidata e confronte com o total declarado antes de escolher. Um número certo lido da coluna errada contamina todo o documento e é caro de desfazer.

**Uma função conta uma vez na sprint, venha de onde vier.** Se o mesmo processo elementar é alterado por dois tickets, ou reaparece em dois blocos da AIM — mudou pelo ticket e de novo por outra revisão —, ele soma uma vez só; marque a segunda ocorrência como já contabilizada. Cuidado com a granularidade: a chave é o **PE**, não a feature — dois tickets que mexem na mesma feature em PEs diferentes são duas funções alteradas, e deduplicar por feature subconta. Ver `references/dimensionamento-apf.md` → *A função conta uma vez por sprint*.

**Uma entrega que já vive dentro de outra feature conta zero.** Se a exportação foi especificada como ação de uma feature existente, criar uma feature separada para ela não acrescenta função — apenas reorganiza. Registre o zero *com o motivo*.

**Separe o que veio do ticket do que veio de outras revisões.** Alterações aplicadas na mesma passagem mas originadas de conferência contra o sistema não são delta da sprint. Bloco à parte, sem somar, ou a auditoria conta a mais.

**Marque estimativa com `(E)` e mantenha-a local.** Um PF arbitrado entra na AIM, nunca nos artefatos que são fonte de medição (o índice de rastreabilidade, o SIZING). Lá o valor segue `—`, porque a fonte é a planilha, não este documento. Diga isso no próprio documento.

**Confira a aritmética com script, não no olho.** Some as colunas, compare com os totais declarados, e faça isso de novo depois de cada rodada de números novos. Já houve erro de soma sobrevivendo a três revisões visuais.

---

## Formatos de saída

Entregue **os dois**, sempre, com o mesmo conteúdo.

**Markdown** em `analise-impacto/`, no repositório de documentação. Respeite as regras de escrita da instância — no docqui, prosa em linha única, conferida por `node scripts/verifica-texto-corrido.mjs <arquivo>` —, e rode o `validate-impact` em cada AIM.

**HTML** ao lado, **gerado** por `node scripts/atualiza-pages.mjs` (que chama o `gera-html-impacto.mjs` e os demais derivados do site na ordem certa) — nunca escrito à mão. Ver `references/relatorio-html.md` — inclui as checagens de renderização e a construção da versão standalone para enviar por celular.

Mantenha os dois em sincronia a cada alteração. Divergência entre eles é a falha mais comum e a mais constrangedora, porque o HTML é o que circula.

---

## Quando as respostas chegarem

Uma análise de impacto quase sempre abre perguntas — à equipe de métricas, ao produto. Quando a resposta vier, **não apague a pergunta**: marque como respondida, anexe a resposta e mantenha o registro do que foi considerado e descartado. Quem audita precisa ver o raciocínio, não só a conclusão.

E propague a resposta: se ela derruba um risco que você anotou em âmbar num bloco distante, esse aviso precisa sair também. Uma ressalva órfã sobre um risco já resolvido faz o leitor desconfiar do documento inteiro.

---

## Referências

- `references/dimensionamento-apf.md` — PFB e PFL, a regra de 100%/50%, os três níveis de "novo", como ler a planilha de baseline e como fechar o apurável.
- `references/relatorio-html.md` — o HTML da AIM: design system, checagens de renderização no navegador e a versão standalone.

## Scripts

- `scripts/checa-render.mjs` — abre o HTML no Chromium e verifica alinhamento de colunas, estouro horizontal (inclusive em largura de celular), blocos grudados, coluna de chave ou de PF com o valor partido em duas linhas, e recursos externos que não carregam. Rode antes de dar o documento por pronto.
- `scripts/build-standalone.mjs` — gera a versão autocontida, com as fontes embutidas, para o usuário baixar e encaminhar.
