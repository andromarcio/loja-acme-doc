# docqui — guia da marca

Identidade visual do framework **docqui** (doc + aqui). Conceito: **preto no
branco, com grifo** — a spec é tinta sobre papel; o marca-texto amarelo destaca
o que importa. Aprovada em 2026-07-10; a apresentação completa da proposta está
arquivada em [`proposta-v1.html`](proposta-v1.html) (autocontida — claro por
padrão, modo Planta no botão do canto).

## Nome

- Grafia oficial: **docqui**, sempre em caixa baixa (`Docqui` apenas em início
  de frase). Nunca "Doqui", "Doki" ou "DocQui".
- Tagline: **especificação tintim por tintim** (por extenso, minúscula, nunca
  abreviada).
- Bordão: *"Tá no Docqui."*

## Símbolo — o doc-pin

Um documento que afunila em ponta de pin. Três leituras: **documento** (o
artefato), **pin de mapa** (o "aqui") e **balão de conversa** (os prompts
guiados). Dentro, quatro barras em escada = níveis **N0→N3**; a última barra é
sempre **grifada** (o nível fino, onde o dev trabalha).

| Arquivo | Uso |
|---|---|
| `simbolo.svg` | versão positiva (fundos claros) |
| `simbolo-negativo.svg` | fundos escuros (Tinta/Planta) |
| `simbolo-16.svg` | ≤ 24 px: só duas barras (favicon) |

## Logotipo

`logotipo.svg` — "docqui" monolinear em geometria própria (círculos e hastes,
sem fonte licenciada). Assinatura escondida: **o rabo do "q" é uma agulha de
pin**. `logotipo-grifo.svg` é a versão com marca-texto sobre o "qui" (capas,
hero, social — não usar em tamanhos pequenos). `lockup.svg` combina símbolo +
logotipo.

- Área de respiro: a altura do "o" em todo o perímetro.
- Mínimo do logotipo: 96 px de largura; abaixo disso, use só o símbolo.

## Cores

| Nome | Hex | Papel |
|---|---|---|
| **Tinta** | `#1B2B4B` | primária: texto, símbolo, traço |
| **Papel** | `#FBF8F0` | fundo do modo claro (padrão) |
| **Grifo** | `#FFD94A` | acento único — **só fundo de destaque, nunca cor de texto**; texto por cima sempre Tinta (`#14213D` em peças escuras) |
| **Planta** | `#0F1B33` | fundo do modo escuro (alternável), com grade heliográfica discreta |
| **Validado** | `#1E7F5C` (escuro `#4CC495`) | semântica de gate aprovado |
| **Pendência** | `#BE4B33` (escuro `#E8836B`) | semântica de lacuna/⚠️ |

O **modo claro (Papel) é o padrão** em todas as superfícies; o modo escuro
(Planta) fica disponível por alternância explícita.

## Tipografia

| Papel | Fonte | Fallback |
|---|---|---|
| Display | **Sora** 700–800 | `ui-rounded, "SF Pro Rounded", "Segoe UI", system-ui` |
| Texto | **Inter** 400–600 | `system-ui, "Segoe UI", Roboto` |
| Técnica (IDs, carimbos, Gherkin) | **JetBrains Mono** | `ui-monospace, Consolas` |

## Elementos de sistema

- **Carimbo**: o carimbo de versão dos artefatos vira selo visível — borda
  tracejada, mono, caixa alta, rotação de −2°. Ex.: `DOCQUI · V2.0.0 · PROMPT_3A`.
- **Barras N0→N3**: quatro barras em escada; a última sempre em Grifo.
- **Badges**: `badge-versao.svg` (docqui + versão) e `badge-specado.svg`
  (estado da especificação), para READMEs de instâncias.
- **Social card**: `social-card.svg` (1200×630, fundo Planta).

## Uso correto

- ✅ Um grifo por tela, no máximo — como num texto bem marcado.
- ✅ Texto sobre Grifo sempre em Tinta; sobre Planta, sempre em Papel.
- ✅ Símbolo sozinho quando o logotipo ficaria menor que 96 px.
- ❌ Nada de referências visuais ao personagem de Hergé (topete, cachorro,
  *ligne claire*) — a tagline usa a expressão idiomática, e só.
- ❌ Não imitar o pin do Google Maps (gota com furo); o nosso pin é o documento.
- ❌ Grifo em texto corrido, ícones pequenos ou como cor de fonte.
- ❌ Recolorir as barras N0→N3 fora do sistema (a grifada é sempre a última).
