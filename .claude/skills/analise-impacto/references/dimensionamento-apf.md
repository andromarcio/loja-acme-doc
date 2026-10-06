# Dimensionamento da evolução — PFB e PFL

Como transformar o delta de uma sprint em número auditável. Pressupõe familiaridade com APF/IFPUG; para as regras do CPM em si, use a skill `apf-cpm`.

## As duas colunas

**PFB — Ponto de Função Bruto.** O tamanho funcional medido, sem desconto. Para features que já existem, vem do baseline APF da instância, atribuído por feature. Para o que não está no baseline, é contagem nova ou estimativa.

**PFL — Ponto de Função Líquido.** O que a evolução vale pela regra de projeto de melhoria:

| Natureza da função | PFL |
|---|---|
| **Incluída** (não existia) | **100% do PFB** |
| **Alterada** (existia e mudou) | **50% do PFB** |

A regra se aplica à **função**, não ao artefato físico, e cada função entra uma única vez no apurável da sprint. É onde mais se erra — ver *A função conta uma vez por sprint* e *Os três níveis de "novo"* abaixo.

## A função conta uma vez por sprint

A unidade da contagem é a **função** — um processo elementar (EE/SE/CE) ou uma função de dados (ALI/AIE) —, nunca o ticket. Se dois tickets da mesma sprint alteram o mesmo processo elementar, ele entra **uma vez** no apurável: não há soma dos dois deltas, nem escolha entre eles.

Não é convenção local. O CPM define o escopo do projeto de melhoria como o **conjunto** das funções adicionadas, alteradas e excluídas, e dimensiona o CHGA pelas funções alteradas "como elas são / serão após a implementação" — existe um único estado *depois* por função, então contar duas vezes é impossível por construção. O procedimento do manual diz o mesmo em forma operacional: uma complexidade antes e uma depois, por função (CPM 4.3.1, Parte 3, cap. 4 — *Projetos de Melhoria*).

Isso inverte a ordem do trabalho: **os tickets dizem quais funções entram e por quê; a contagem vem depois, sobre os artefatos já consolidados.** A AIM de cada ticket guarda os fatos — que função foi tocada, o que mudou nela, que DER/RLR se mexeram —, e o PFB/PFL que ela mostra espelha o N3; o apurável é o da AIM da sprint, onde cada função entra uma vez. Nunca some as AIMs dos tickets: a função tocada por dois tickets aparece nas duas, e a soma a conta duas vezes.

**A chave de deduplicação é o processo elementar, não a feature.** Uma feature costuma absorver mais de um PE — a conciliação Feature ↔ PE do `SIZING.md` marca isso como `(+N)`. Dois itens que tocam a mesma feature em PEs diferentes são **duas** funções alteradas; deduplicar por feature subconta. O manual trata o caso simétrico — uma mudança em rotina comum que atinge vários PEs conta vários — e a leitura inversa vale igual: "as funções alteradas devem ser identificadas baseadas nos processos elementares que incorporam aquela lógica".

Entre sprints a regra não se aplica: a mesma função alterada de novo na sprint seguinte conta de novo, porque é outro projeto de melhoria. O colapso é **dentro** de um projeto. Isso pressupõe que a instância trate cada sprint como um projeto de melhoria — decisão da instância, não regra do CPM; registre-a no `SIZING.md` se ainda não estiver lá.

## Lendo a planilha de baseline

Antes de citar qualquer número, descubra qual coluna é a fonte. Planilhas de contagem costumam trazer várias, e escolher a errada contamina o documento inteiro.

Método: some cada coluna candidata, separando funções de dados (ALI/AIE) de transações, e confronte com os totais declarados no resumo da planilha. A coluna cuja soma bate é a fonte.

```python
import openpyxl, collections
wb = openpyxl.load_workbook(CAMINHO, data_only=True)
ws = wb[ABA]
por_tipo = collections.Counter()
for r in range(PRIMEIRA_LINHA, ws.max_row + 1):
    tipo = ws.cell(r, COL_TIPO).value
    nome = ws.cell(r, COL_NOME).value
    if not nome:
        continue
    por_tipo[tipo] += ws.cell(r, COL_CANDIDATA).value or 0
print(por_tipo, sum(por_tipo.values()))
```

Desconfie de uma coluna com zeros ou metades espalhados: pode ser dedução contratual — ou falha de preenchimento. Pergunte à equipe de métricas antes de adotar. Um sinal de que é erro, e não critério: a dedução aparece **inconsistente dentro do mesmo agrupamento** (algumas linhas do mesmo insumo a 50%, outras a 100%, e a função de dados tratada de forma oposta às transações do mesmo grupo).

## Os três níveis de "novo"

A distinção que decide se o PFL é 50% ou 100%. Registre os três explicitamente no documento, porque quem lê "tabela nova" tende a aplicar 100%:

| Nível | Pergunta | Efeito na contagem |
|---|---|---|
| **Coluna** | Foi incluída? Teve tipo/tamanho/semântica alterados? | Nenhum direto — muda o DER |
| **Tabela** | Foi criada ou só ganhou coluna? | Nenhum direto — pode mudar o RLR |
| **Função de dados** | O ALI/AIE é novo, ou existente que mudou? | **Decide 100% vs 50%** |

Uma tabela nova **não é** função de dados nova quando é **entidade dependente** — só existe vinculada a um pai, e some com ele. Pelo agrupamento do CPM ela entra como mais um registro lógico (RLR) dentro de um ALI existente. A função continua **alterada**, a 50%.

Tratar uma dependente como ALI próprio costuma somar 7 a 10 PF indevidos. Confirme com a métrica antes de fechar, e registre a confirmação.

## Funções de dados alteradas

Para cada ALI tocado, monte o antes e o depois:

- **RLR/DER antes** — do baseline
- **RLR/DER depois** — recontados sobre o modelo físico atual
- **Complexidade** — Tabela 1 do CPM, antes e depois
- **Conta como** — CHGA quando a função existia; ADD quando é nova

Os DER contam cada atributo **uma vez por ALI**. Ao acrescentar uma entidade dependente ao grupo, só os atributos que ainda não existiam no ALI somam DER — chaves e campos repetidos de outras tabelas do mesmo grupo já estavam contados.

O CHGA é dimensionado pelo tamanho da função **depois** da alteração. Se nenhuma muda de faixa de complexidade, o PFB da evolução é igual ao que aquelas funções já valiam: a evolução muda o conteúdo, não o tamanho. Vale dizer isso no documento — evita a pergunta.

Registre também a **margem até a próxima faixa**. É o que permite prever se a próxima sprint muda o número.

## Alteração funcional × alteração técnica

Regras de medição costumam excluir alteração **puramente técnica**. Uma coluna acrescentada por razão de infraestrutura, sem capacidade nova para o usuário, pode não ser medida.

Não decida sozinho: levante a pergunta com o argumento de negócio explícito ("a coluna habilitou o download por link individual, capacidade que antes não existia") e diga qual é o efeito de cada resposta no total. Enquanto não vier, mantenha o número maior e sinalize o menor como risco — nunca o contrário.

## Fechando o apurável

O apurável é a `## Apurável da sprint` da AIM da sprint: Transações, Funções de dados e Total, em PFB e PFL. Quando a métrica precisa ver a natureza de cada origem, quebre as transações em linhas antes do subtotal:

| | Natureza | PFB | PFL |
|---|---|---|---|
| Features alteradas com contagem no baseline | alteradas · 50% | … | … |
| Features sem contagem no baseline | incluídas · 100% | … (E) | … (E) |
| Features novas | incluídas · 100% | … (E) | … (E) |
| Transações | — | … | … |
| Funções de dados | alteradas · 50% | … | … |
| **Total** | — | … | … |

Regras que mantêm essa tabela honesta:

- **`(E)` em toda estimativa**, e no total que a contém. Diga quantos dos N pontos são estimados; é a primeira coisa que a métrica vai querer saber.
- **Nada de "a contar" sem dizer o que falta.** Ou tem número, ou tem o motivo de não ter.
- **Zero é um número válido** e precisa de justificativa. "Conta zero porque a entrega já está dentro de outra feature" é uma linha legítima; um zero mudo volta como pergunta.
- **Confira a soma com script** depois de cada rodada de números. Contas de cabeça sobrevivem a revisões visuais. O `validate-impact` faz a conta da AIM da sprint — o Total contra as linhas de `## Alterações na spec, por Feature Set` e de `## Funções de dados alteradas`, e cada subtotal contra a sua —; a quebra por origem é sua: as linhas dela somam o subtotal de Transações.

## Onde a estimativa pode viver

Só no relatório de impacto. Os artefatos que servem de fonte de medição — o índice de rastreabilidade, o documento de convenções de contagem — continuam registrando `—` para features sem contagem oficial.

Escreva essa fronteira dentro do próprio relatório. Sem ela, alguém vai copiar a estimativa para o índice e ela vira "medição" na próxima leitura.
