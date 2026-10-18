# docx-export — Word (.docx) por Feature Set (N2)

Gera um documento Word com a especificação **negocial** de um Feature Set:

- **Visão geral do N2** (a partir do `README.md` do Feature Set) — descrição, features, fluxo principal, dependências, telas e permissões.
- **Para cada Feature (N3)**: o conteúdo negocial, na ordem do N3 — descrição, regras de negócio, cenários (Gherkin), campos, superfície, comportamento de tela, critérios de sucesso e origem. Ficam de fora o front-matter, os comentários HTML, os blocos `dev-only` (onde quer que estejam no N3; o N3 anterior à 6.4.16 ainda pode ter a `## Superfície` num deles) e o `## Changelog`.
- **Métricas de tamanho só quando contadas**: a seção sai enquanto nada foi contado — toda célula de Tipo, ALR, DER, Complexidade e PF vazia ou com `—`, e sem `### Memória de cálculo`. A linha de PF 0 (PE descartado) e a de PE reutilizado (`↪`) contam como preenchidas.
- **Protótipos**: embutidos como imagem, **apenas onde já existem**.
- **Capa**: o sistema da instância, `Sigla — Nome`, lido do `global/MASTER.md`; sem o MASTER preenchido, a linha não aparece.

A tabela `## Features` do N2 é lida nos dois formatos: o atual, `| [**Nome**](f-x.md) <small>ID</small> | … |`, e o legado, `| **Nome** <small>ID</small> | [f-x.md] |`.

Os `.docx` gerados vão para `exports/`.

## Fonte de verdade

Os Markdowns em `modules/<dominio>/<feature-set>/` — o gerador **lê**, não altera. Nada em `engine/` é tocado.

## Pré-requisitos

| Etapa | Depende de |
|---|---|
| Gerar o `.docx` (`gen_feature_set_docx.py`) | Python 3.9+, `pip install python-docx Pillow` |
| Renderizar protótipo (`render_prototype.mjs`) | Node 18+, `npm i playwright` + Chromium |
| Renderizar fluxo Mermaid (`render_mermaid.mjs`) | Node 18+, `npm i playwright mermaid@11` + Chromium |

> Neste ambiente o Chromium já está em `/opt/pw-browsers` (os scripts o detectam
> sozinhos). Em outra máquina, aponte `CHROMIUM_PATH` ou instale via
> `npx playwright install chromium`.

## Pipeline

Convenção de imagens no `--img-dir`:

- `overview.png` — diagrama do **Fluxo Principal** do N2 (substitui o `mermaid`);
- `proto-<ID>.png` — protótipo da feature `<ID>` (ex.: `proto-PAR-MAE-07.png`); vários arquivos `proto-<ID>-*.png` são aceitos por feature.

### 1. (Opcional) Renderizar as imagens

```bash
# fluxo principal do N2 — extraia o bloco ```mermaid``` do README para um .mmd
node scripts/docx-export/render_mermaid.mjs \
  --in fluxo.mmd --out exports/_assets/maquina-estado/overview.png \
  --mermaid-dir <dir-com-node_modules/mermaid>

# protótipo existente
node scripts/docx-export/render_prototype.mjs \
  --in prototypes/parametrizacao/maquina-estado/pesquisar-transicao/form.html \
  --out exports/_assets/maquina-estado/proto-PAR-MAE-07.png
```

### 2. Gerar o Word

```bash
python3 scripts/docx-export/gen_feature_set_docx.py \
  --fs-dir  modules/parametrizacao/maquina-estado \
  --img-dir exports/_assets/maquina-estado \
  --out     exports/PAR-MAE__Maquina-de-Estado.docx
```

As imagens ficam **embutidas** no `.docx` — ele é autocontido. Screenshots muito altos (protótipos de página inteira) são fatiados automaticamente em partes de altura de página.

## Conferência

`python3 scripts/eval/testa-docx-export.py` — monta uma instância mínima, gera o `.docx` e confere o contrato acima; o `run-evals.mjs` o chama.

## Estado atual (prova de conceito)

Gerado: **Máquina de Estado** (`PAR-MAE`), 10 features. Único protótipo existente: `PAR-MAE-07` (Pesquisar Transições). Os demais N2 seguem o mesmo comando, trocando `--fs-dir`, `--img-dir` e `--out`.
