# Exemplos resolvidos de contagem — CPM 4.3.1, Parte 4

> **Fonte normativa**: [`cpm-4.3.1/Parte-4-Exemplos/01-cap1-funcoes-de-dados.md`](./cpm-4.3.1/Parte-4-Exemplos/01-cap1-funcoes-de-dados.md) · [`cpm-4.3.1/Parte-4-Exemplos/02-cap2-funcoes-de-transacao.md`](./cpm-4.3.1/Parte-4-Exemplos/02-cap2-funcoes-de-transacao.md). Este arquivo é a destilação; em divergência ou dúvida de regra, o manual decide.

Casos completos destilados do manual (cenário de RH do IFPUG). Cada exemplo segue os 7 passos e fecha a conta: identificação → classificação → contagem de DER/RLR (dados) ou ALR/DER (transação) → complexidade → tamanho em PF. Use como referência ao conduzir contagens reais.

> Lembrete das tabelas: dados (RLR×DER → Tab.1; PF → Tab.2) e transação (ALR×DER → Tab.6 EE / Tab.7 SE,CE; PF → Tab.8). Estão no `SKILL.md`.

---

## ALI — "Segurança de Tela" (com auditoria) → 7 PF

**Cenário:** aplicação de RH controla o acesso de cada usuário a cada tela e **registra auditoria** de toda inclusão/alteração de segurança (quem alterou, tela, imagem antes/depois, data e hora).

1. **Identificar função de dados:** existem *Segurança de Tela* e *Auditoria de Segurança de Tela*. A auditoria é **entidade dependente** da segurança → as duas são **agrupadas numa única função de dados**.
2/3. **Classificar:** é **mantida** pela aplicação medida → **ALI**.
4. **DER (8):** Id usuário, Nº SS, Id tela, Permissão de acesso, Data da alteração, Hora da alteração, **Imagem Antes** (agrupa id usuário/id tela/permissão "antes" em 1 DER), **Imagem Depois** (idem).
5. **RLR (2):** 1 RLR para *Segurança de Tela* (default) + 1 RLR para *Auditoria de Segurança de Tela* (entidade atributiva num relacionamento 1-M opcional).
6/7. **Complexidade:** 2 RLR × 8 DER → **Baixa** → **ALI Baixa = 7 PF**.

**Lições:** entidade dependente entra na mesma função de dados (não é função separada); grupos "antes/depois" de atributos que sempre andam juntos contam como **1 DER cada**; uma entidade atributiva em relacionamento não-1-1-obrigatório gera **+1 RLR**.

---

## AIE — "Localização" referenciada do sistema de Ativo Fixo → 5 PF

**Cenário:** o RH inclui/consulta/lista *Funcionário* (que mantém) e, para relatórios, **referencia** dados de *Localização* (edifícios) que são **mantidos pela aplicação de Ativo Fixo**.

1. **Identificar:** *Funcionário* e *Localização* (entidades independentes → grupos distintos).
2. **Classificar:** *Funcionário* é mantida pelo RH → ALI (não é AIE). *Localização* é **referenciada mas não mantida** pelo RH, **e** é ALI no Ativo Fixo → **AIE** para o RH.
3. **DER (6):** Código do Edifício, Nome do Edifício, **Descrição do Edifício** (3 linhas repetidas = 1 DER), Cidade, Estado, País.
4/5/6. **RLR (1):** default. **Complexidade:** 1 RLR × 6 DER → **Baixa** → **AIE Baixa = 5 PF**.

**Lições:** AIE/ALI é sempre relativo à **aplicação medida** — o mesmo arquivo é ALI numa app e AIE em outra; conte **só os DER que a app medida usa**; linhas repetidas de um mesmo atributo = 1 DER.

---

## EE — "Estabelecer Controles do Relatório" → 3 PF

**Cenário:** usuário define como/onde imprimir um relatório (classificação, porta da impressora, tipo de saída) e **salva** esses controles; o sistema confirma com uma mensagem.

1/2. **PE único:** sim.
3. **Classificar:** recebe dados que **entram pela fronteira** **e** a intenção primária é **manter o ALI** de Controle de Relatório → **EE**.
4. **ALR (1):** ALI *Controle de Relatório* (lido e mantido — conta uma vez).
5. **DER (5):** Classificação (Sort), Porta da Impressora, Tipo de Saída, **Mensagem ao usuário** (1 DER p/ resposta), **Botão OK** (1 DER p/ iniciar ação).
6/7. **Complexidade:** 1 ALR × 5 DER → **Baixa** → **EE Baixa = 3 PF**.

**Lições:** o que define EE é *receber dados* + intenção de *manter ALI* ou *alterar comportamento*; mensagem de resposta = **1 DER** (mesmo com várias mensagens); capacidade de iniciar ação = **1 DER**.

---

## SE — "Relatório de Funções com Funcionários" → 5 PF

**Cenário:** relatório que lista funções e seus funcionários e exibe o **total de funções** (calculado).

1/2. **PE único:** sim.
3. **Classificar:** intenção primária = apresentar informação **E** cria **dado derivado/calculado** (total de funções) → **SE** (não CE!).
4. **ALR (4):** ALIs *Funcionário*, *Função*, *Funções Assinaladas*, *Controle de Relatório*.
5. **DER (5):** Código da Função, Nome da Função, Id do Funcionário, Nome do Funcionário, Total de Funções. (Não conta: títulos, cabeçalhos, data e nº de página.)
6/7. **Complexidade:** 4 ALR × 5 DER → **Média** → **SE Média = 5 PF**.

**Lições:** a presença de **cálculo/dado derivado** é o que separa **SE de CE**; literais, carimbos de data/hora, número de página e navegação **não** são DER.

---

## CE — "Lista de Funcionários" → 3 PF

**Cenário:** usuário visualiza uma lista de funcionários (sobrenome, nome, inicial, id, tipo de salário), ordenada por nome. **Sem** cálculos ou derivação.

1/2. **PE único:** sim.
3. **Classificar:** intenção primária = apresentar informação, **recupera** do ALI Funcionário e **não** atinge critério de SE (sem cálculo/derivação/atualização) → **CE**.
4. **ALR (1):** ALI *Funcionário* (lido). *Uma CE tem no mínimo 1 ALR.*
5. **DER (6):** Sobrenome, Primeiro Nome, Inicial do Meio, Id, Tipo de Salário, + **1 DER** para a ação Revisar/Enter.
6/7. **Complexidade:** 1 ALR × 6 DER → **Baixa** → **CE Baixa = 3 PF**.

**Lições:** recuperação "pura" + apresentação = CE; ordenar a lista (forma 13) **não** afeta o tipo nem cria DER; nome quebrado em partes usadas independentemente = **vários DER**.

---

## Itens que NÃO são processo elementar (não contam como transação)

- **Menus e navegação** ("Novo/Revisar/Editar", barra de rolagem, "próximo/anterior"): existem para
  satisfazer requisitos **navegacionais**, não funcionais → não são PE.
- **2ª ocorrência** de uma mesma janela de Ajuda de campo: o PE já foi contado na 1ª ocorrência.
- **Mensagens de erro/confirmação** isoladas: não são SE/CE próprias; entram como **1 DER** na transação que as dispara.
- **Contadores/resumo na tela de pesquisa** (caso real): uma tela "Pesquisar demandas" abre já exibindo
  **contadores** ("aguardando você", total por situação) que se **atualizam com o mesmo filtro** da busca. Tentaram contar "Consultar resumo do painel" como uma **CE** à parte (+4 PF). **Errado**: os contadores não são autocontidos nem deixam estado consistente sozinhos (entregar só os contadores, sem a pesquisa, quebra a tela). São **DERs** da própria "Pesquisar demandas" e, por serem **dado calculado** (forma 9), confirmam a classificação dela como **SE**. Resultado: **um** PE (a pesquisa SE), não dois — o "resumo" não soma PF. *(Viraria PE próprio só com rota/filtro/tela dedicados, independentes da listagem.)*

## Resumo dos resultados

| Tipo | Exemplo | Estruturas | Complexidade | PF |
|---|---|---|---|---|
| ALI | Segurança de Tela | 2 RLR, 8 DER | Baixa | 7 |
| AIE | Localização | 1 RLR, 6 DER | Baixa | 5 |
| EE | Estabelecer Controles | 1 ALR, 5 DER | Baixa | 3 |
| SE | Relatório Funções×Func. | 4 ALR, 5 DER | Média | 5 |
| CE | Lista de Funcionários | 1 ALR, 6 DER | Baixa | 3 |
