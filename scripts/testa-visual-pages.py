"""Regressao visual: python scripts/testa-visual-pages.py (Playwright + Edge/Chromium)."""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
from threading import Thread
import unittest

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
FEATURE = "modules/vendas/checkout/f-calcular-frete.md"


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


class VisualPagesTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = ThreadingHTTPServer(
            ("127.0.0.1", 0), partial(Handler, directory=str(ROOT))
        )
        cls.thread = Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f"http://127.0.0.1:{cls.server.server_port}"
        cls.pw = sync_playwright().start()
        executable = os.environ.get("SIM_BROWSER")
        edge = Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
        if executable is None and edge.exists():
            executable = str(edge)
        cls.browser = cls.pw.chromium.launch(
            headless=True, **({"executable_path": executable} if executable else {})
        )

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.pw.stop()
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()

    def setUp(self):
        self.context = self.browser.new_context()
        self.context.route("https://**", lambda route: route.abort())
        self.page = self.context.new_page()
        self.errors = []
        self.page.on("pageerror", lambda error: self.errors.append(str(error)))
        self.page.goto(self.base + "/index.html#global/N0_PRODUCT_VISION.md")
        self.page.locator("#documentContainer h1").wait_for()

    def tearDown(self):
        self.context.close()
        self.assertEqual(self.errors, [])

    def assert_visual(self, theme):
        actual = self.page.evaluate("""() => {
          const css = getComputedStyle(document.documentElement);
          const heading = getComputedStyle(document.querySelector('#documentContainer h1'));
          return {
            bg: css.getPropertyValue('--bg').trim(),
            primary: css.getPropertyValue('--primary').trim(),
            font: getComputedStyle(document.body).fontFamily,
            mono: css.getPropertyValue('--font-mono'),
            header: getComputedStyle(document.querySelector('.app-header')).height,
            border: heading.borderBottomWidth,
            highlight: heading.borderBottomColor,
            panel: getComputedStyle(document.querySelector('#documentContainer')).paddingTop,
            section: getComputedStyle(document.querySelector('#documentContainer .doc-section')).borderWidth
          };
        }""")
        self.assertEqual(actual["bg"], "#f7fbfd" if theme == "light" else "#062b4b")
        self.assertEqual(actual["primary"], "#005ca9" if theme == "light" else "#3bb9eb")
        self.assertIn("Inter", actual["font"])
        self.assertIn("JetBrains Mono", actual["mono"])
        self.assertEqual(actual["header"], "68px")
        self.assertEqual(actual["border"], "4px")
        self.assertEqual(actual["highlight"], "rgb(243, 146, 0)")
        # Em todo documento, cada seção é um card e o contêiner não é.
        self.assertEqual(actual["panel"], "0px")
        self.assertEqual(actual["section"], "1px")

    def test_shell_and_theme(self):
        self.assertEqual(self.page.locator("#brandName").inner_text(), "Loja ACME")
        self.assertEqual(self.page.locator(".sidebar__search #searchInput").count(), 1)
        self.assertEqual(self.page.locator(".app-header #breadcrumbBar").count(), 1)
        self.assertEqual(self.page.locator(".header-center").count(), 0)
        self.assertTrue(self.page.locator(".brand__docqui").evaluate("el => el.complete && el.naturalWidth > 0"))
        github = self.page.locator(".app-header .header-right .btn-github")
        self.assertEqual(github.get_attribute("href"), "https://github.com/CAIXA-EFRS/loja-acme-doc")
        self.assertEqual(self.page.locator('#sidebar a[href*="github.com"]').count(), 0)
        self.assertEqual(self.page.locator('a[href="#mentoria/README.md"]').count(), 1)
        self.assertEqual(self.page.locator('a[href="mentoria/simulador.html"]').count(), 1)
        self.assertEqual(self.page.locator('#sidebar a[href="#__dashboard__"]').count(), 1)
        ids = self.page.evaluate("() => [...document.querySelectorAll('[id]')].map(el => el.id)")
        self.assertEqual(len(ids), len(set(ids)))
        for theme in ["light", "dark"]:
            self.page.evaluate("(theme) => document.documentElement.dataset.theme = theme", theme)
            self.assert_visual(theme)
        style = self.page.add_style_tag(content="#documentContainer h1 { border-bottom: 0 !important; }")
        with self.assertRaises(AssertionError):
            self.assert_visual("dark")
        style.evaluate("el => el.remove()")

    def test_search_mobile_and_diagrams(self):
        for width in [1440, 390, 320]:
            self.page.set_viewport_size({"width": width, "height": 900})
            self.page.keyboard.press("Control+k")
            self.page.locator("#searchInput").fill("Calcular Frete")
            self.page.locator(f'.search-result-item[href="#{FEATURE}"]').click()
            self.page.locator("#documentContainer .doc-title").wait_for()
            self.assertLessEqual(self.page.evaluate("document.documentElement.scrollWidth"), width)
            for theme in ["light", "dark"]:
                self.page.evaluate("(theme) => document.documentElement.dataset.theme = theme", theme)
                self.assert_visual(theme)
            self.page.keyboard.press("Control+k")
            self.page.locator("#searchInput").fill("termo-inexistente-xyz")
            self.assertEqual(self.page.locator(".search-result-item").count(), 0)
            self.page.keyboard.press("Escape")
            if width < 820:
                self.assertFalse(self.page.locator("#sidebar").is_visible())
                self.page.locator("#toggleSidebarBtn").click()
                self.assertTrue(self.page.locator("#searchInput").is_visible())
                self.page.locator("#sidebarBackdrop").click(position={"x": width - 5, "y": 5})
                self.assertFalse(self.page.locator("#sidebar").is_visible())
        self.page.evaluate("navigateTo('modules/vendas/checkout/README.md')")
        self.page.locator(".mermaid .node rect.label-container").first.wait_for()
        self.page.evaluate("navigateTo('__mapa__')")
        self.page.locator(".mm-product-name").wait_for()
        self.assertIn("Loja ACME", self.page.locator(".mm-product-name").inner_text())

    def test_initial_load_and_menu(self):
        # Sem rota, o site abre no dashboard, com o menu recolhido.
        self.page.goto(self.base + "/index.html")
        self.page.locator("#dashboardDomain").wait_for()
        self.assertEqual(self.page.locator("#toggleSidebarBtn").get_attribute("aria-expanded"), "false")
        self.assertFalse(self.page.locator("#searchInput").is_visible())
        menu = self.page.evaluate("""() => ({
          fixos: [...document.querySelector('#sidebar .sidebar-section .nav-list').children].map(li => li.textContent.trim()),
          pastas: [...document.querySelectorAll('#sidebar .sidebar-navigation > .sidebar-section > details.nav-folder')].map(d => d.id),
          outros: [...document.querySelectorAll('#outrosFolder a')].map(a => a.textContent.trim()),
          texto: document.getElementById('sidebar').textContent,
        })""")
        self.assertEqual(menu["fixos"], ["Dashboard de gestão", "Visão do Produto (N0)", "Mapa de Features (Árvore)"])
        self.assertEqual(menu["pastas"], ["fddFolder", "globalFolder", "prototypesFolder", "outrosFolder"])
        self.assertEqual(menu["outros"], ["AIMs dos tickets", "Insumos de levantamento", "Roteiro da demonstração",
                                          "Simulador Docqui Caixa ↗", "Grafo de Rastreabilidade ↗"])
        self.assertNotIn("Início / Visão Geral", menu["texto"])
        self.assertNotIn("Artefatos de Suporte", menu["texto"])
        # Abrir um item de Outros expande a pasta; o Ctrl+K abre o menu e a busca.
        self.page.evaluate("navigateTo('analise-impacto/INDEX.md')")
        self.assertTrue(self.page.locator("#outrosFolder").evaluate("d => d.open"))
        self.page.keyboard.press("Control+k")
        self.assertTrue(self.page.locator("#searchInput").is_visible())
        # Com rota, abre a página pedida.
        self.page.goto(self.base + "/index.html#" + FEATURE)
        self.page.locator("#documentContainer .doc-title").wait_for()
        self.assertEqual(self.page.locator("#documentContainer .doc-title").inner_text(), "Calcular Frete")

    def test_menu_orders_features_by_id(self):
        # No menu, os N3 de um Feature Set seguem o ID, não o nome do arquivo; o N3 sem ID
        # vai para o fim. Os N3 extras só existem na página: pelo caminho, a ordem seria outra.
        def order():
            return self.page.evaluate("""() => [...document.querySelectorAll('#fs-vendas-checkout .feature-item')]
              .map(a => a.dataset.path.split('/').pop())""")
        self.assertEqual(order(), ["f-calcular-frete.md"])
        self.page.evaluate("""() => {
          const n3 = (id, nome) => `---\\nid: ${id}\\n---\\n\\n# ${nome}\\n`;
          Object.entries({
            'modules/vendas/checkout/f-aplicar-cupom.md': n3('VND-CHK-10', 'Aplicar Cupom'),
            'modules/vendas/checkout/f-exibir-prazo.md': n3('VND-CHK-02', 'Exibir Prazo'),
            'modules/vendas/checkout/f-a-sem-id.md': '# Sem ID\\n',
          }).forEach(([path, text]) => { repoFiles.push(path); repoFilesContent[path] = text; });
          repoFiles.sort();
          buildFDDTree();
        }""")
        self.assertEqual(order(), ["f-calcular-frete.md", "f-exibir-prazo.md", "f-aplicar-cupom.md", "f-a-sem-id.md"])

    def test_n3_scenarios_tags_and_background(self):
        # O esperado vem do .md: as tags e os comentários "# ←" logo acima de cada Scenario,
        # e os passos do Background.
        gherkin = (ROOT / FEATURE).read_text(encoding="utf-8").split("```gherkin")[1].split("```")[0]
        esperado, acima, fundo, no_fundo = [], [], [], False
        for linha in (l.strip() for l in gherkin.splitlines()):
            if linha.startswith("Background:"):
                no_fundo = True
            elif linha.startswith("Scenario:"):
                no_fundo = False
                esperado.append({
                    "titulo": linha.split(":", 1)[1].strip(),
                    "rn": [t for l in acima if l.startswith("@") for t in l.split()],
                    "dic": [l.split("←", 1)[1].strip() for l in acima if l.startswith("# ←")],
                })
                acima = []
            elif linha.startswith(("#", "@")):
                acima.append(linha)
            elif linha and no_fundo:
                fundo.append(linha.split(" ", 1)[1])
            elif linha:
                acima = []
        self.assertEqual(len(esperado), 7)
        self.assertIn(["@RN-03"], [e["rn"] for e in esperado])
        self.assertIn(["FIELD-DICTIONARY: CEP"], [e["dic"] for e in esperado])
        self.assertEqual(len(fundo), 2)

        self.page.goto(self.base + "/index.html#" + FEATURE)
        self.page.locator("#documentContainer .scenario-card").first.wait_for()
        cards = self.page.evaluate("""() => [...document.querySelectorAll('#documentContainer .scenario-card')].map(c => ({
          fundo: c.classList.contains('scenario-background'),
          titulo: c.querySelector('.scenario-title') ? c.querySelector('.scenario-title').textContent.replace(/^Cenário:\\s*/, '').trim() : null,
          rn: [...c.querySelectorAll('.scenario-header .rn-num')].map(b => '@' + b.textContent.trim()),
          dic: [...c.querySelectorAll('.scenario-header .rn-tag')].map(b => b.title),
          corpo: c.querySelector('.scenario-body').textContent,
        }))""")
        self.assertTrue(cards and cards[0]["fundo"], "o Background abre a seção de cenários")
        for passo in fundo:
            self.assertIn(passo, cards[0]["corpo"])
        self.assertEqual([{k: c[k] for k in ("titulo", "rn", "dic")} for c in cards[1:]], esperado)

    def test_sections_as_cards(self):
        # Todo documento põe cada seção num card, como o N3. Nos genéricos, um card com título
        # por rubrica `## ` do .md (fora de cerca de código), com o título e a apresentação no
        # primeiro; N1 e N2 já montam hero e seções. Dashboard e mapa ficam como eram.
        def rubricas(rel):
            cerca, titulos = False, []
            for linha in (ROOT / rel).read_text(encoding="utf-8").splitlines():
                if linha.lstrip().startswith(("```", "~~~")):
                    cerca = not cerca
                elif not cerca and linha.startswith("## "):
                    titulos.append(linha[3:].strip())
            return titulos
        genericos = ["global/N0_PRODUCT_VISION.md", "global/DATA-MODEL.md", "global/NFR.md",
                     "analise-impacto/AIM-STRY0013101.md", "mentoria/README.md"]
        espacos = []
        for rel in genericos + ["modules/vendas/README.md", "modules/vendas/checkout/README.md", FEATURE]:
            self.page.evaluate("(rel) => navigateTo(rel)", rel)
            self.page.wait_for_function("document.getElementById('documentContainer').classList.contains('doc-cards')")
            info = self.page.evaluate("""() => {
              const c = document.getElementById('documentContainer');
              const blocos = [...c.querySelectorAll('.doc-section, .doc-hero-card')];
              return {
                painel: getComputedStyle(c).borderTopWidth,
                semCard: blocos.filter((e) => getComputedStyle(e).borderTopWidth !== '1px').length,
                titulos: [...c.querySelectorAll('.doc-section > .section-header .section-title')].map((t) => t.textContent.trim()),
              };
            }""")
            self.assertEqual(info["painel"], "0px", rel)
            self.assertEqual(info["semCard"], 0, rel)
            if rel in genericos:
                self.assertEqual(info["titulos"], rubricas(rel), rel)
            else:
                # No hero do N1, do N2 e do N3, a Descrição tem o título das demais seções e a
                # mesma distância até a linha.
                espacos.append(self.page.evaluate("""() => {
                  const b = document.querySelector('.hero-description-block');
                  const t = b && b.querySelector(':scope > .section-header .section-title');
                  return t ? Math.round(t.getBoundingClientRect().top - b.getBoundingClientRect().top) : null;
                }"""))
        self.assertEqual(len(set(espacos)), 1, espacos)
        self.assertIsNotNone(espacos[0])
        self.assertGreater(len(rubricas("global/N0_PRODUCT_VISION.md")), 5)
        for rota in ["__dashboard__", "__mapa__"]:
            self.page.evaluate("(r) => navigateTo(r)", rota)
            self.page.wait_for_timeout(300)
            self.assertFalse(self.page.evaluate("document.getElementById('documentContainer').classList.contains('doc-cards')"), rota)

    def test_graph_and_simulator_preserved(self):
        self.page.goto(self.base + "/rastreabilidade/index.html")
        self.page.wait_for_function("window.TRACE_DATA && document.querySelector('#graph').children.length")
        for theme, bg in [("light", "#f7fbfd"), ("dark", "#062b4b")]:
            self.page.evaluate("(theme) => document.documentElement.dataset.theme = theme", theme)
            self.assertEqual(self.page.evaluate("getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()"), bg)
        data = self.page.evaluate("window.TRACE_DATA")
        self.assertEqual(len(data["nodes"]), 6)
        self.assertEqual(len(data["edges"]), 5)
        self.assertTrue(any(n["id"] == "VND-CHK-01" for n in data["nodes"]))
        # O visualizador legado nao reconhece o no aim; erro confirmado no HEAD anterior.
        self.assertEqual(self.errors, ["Cannot read properties of undefined (reading 'r')"])
        self.errors.clear()
        self.page.goto(self.base + "/mentoria/simulador.html")
        self.page.locator("#prog-t").wait_for()
        self.page.locator("#p-requisitos").click()
        self.assertEqual(self.page.locator("#p-requisitos").get_attribute("aria-pressed"), "true")

    def test_dashboard_indicators_filter_and_navigation(self):
        self.page.evaluate("navigateTo('__dashboard__')")
        self.page.locator("#dashboardDomain").wait_for()

        def metric(name):
            return int(self.page.locator(f'[data-metric="{name}"] > strong').inner_text())

        expected = {"n1": 1, "n2": 1, "n3": 1, "artifacts": 3, "approved": 0,
                    "specified": 0, "waiting": 1, "inconsistent": 0, "ungoverned": 0,
                    "missing": 0, "countPending": 1, "countReviewed": 0, "dataModels": 1,
                    "prototypes": 0}
        for name, value in expected.items():
            self.assertEqual(metric(name), value, name)
        branches = metric("branches")
        self.assertGreaterEqual(branches, 1)
        self.page.locator("#dashboardDomain").select_option("VND")
        self.assertEqual(metric("n3"), 1)
        self.assertEqual(metric("branches"), branches)
        for width in [1440, 390, 320]:
            self.page.set_viewport_size({"width": width, "height": 900})
            for theme in ["light", "dark"]:
                self.page.evaluate("(theme) => document.documentElement.dataset.theme = theme", theme)
                self.page.wait_for_function("document.documentElement.scrollWidth <= innerWidth")
                self.assertLessEqual(self.page.evaluate("document.documentElement.scrollWidth"), width)
        self.page.locator(f'.dashboard-view a[href="#{FEATURE}"]').first.click()
        self.page.locator("#documentContainer .doc-title").wait_for()
        self.assertFalse(self.page.locator("#documentContainer").evaluate("el => el.classList.contains('dashboard-view')"))

    def test_dashboard_missing_data_and_untrusted_label(self):
        self.page.evaluate("navigateTo('__dashboard__')")
        self.page.locator("#dashboardDomain").wait_for()
        self.page.evaluate("window.savedDashboard = DASHBOARD_DATA; delete window.DASHBOARD_DATA; renderDashboard()")
        self.assertTrue(self.page.locator('[role="alert"]').is_visible())
        self.assertEqual(self.page.locator('[data-metric="n3"]').count(), 0)
        self.page.evaluate("""() => {
          window.DASHBOARD_DATA = structuredClone(savedDashboard);
          DASHBOARD_DATA.artifacts[0].title = '<img src=x onerror="window.injected=true">';
          renderDashboard();
        }""")
        self.assertEqual(self.page.locator('.dashboard-view img[src="x"]').count(), 0)
        self.assertFalse(self.page.evaluate("Boolean(window.injected)"))
        self.page.evaluate("window.DASHBOARD_DATA = savedDashboard; renderDashboard()")

    def test_branch_preview_highlights_inside_cards(self):
        # O site montado como no CI (monta-site-preview.mjs), com uma sprint que altera o N3:
        # "Destacar alterações" marca só o que mudou, dentro do card de cada mudança.
        with tempfile.TemporaryDirectory() as tmp:
            repo = Path(tmp, "repo")
            listed = subprocess.run(["git", "ls-files", "-co", "--exclude-standard", "-z"],
                                    cwd=ROOT, capture_output=True, check=True).stdout.decode("utf-8")
            for rel in filter(None, listed.split("\0")):
                if (ROOT / rel).is_file():
                    (repo / rel).parent.mkdir(parents=True, exist_ok=True)
                    shutil.copy2(ROOT / rel, repo / rel)

            def git(*args):
                return subprocess.run(["git", "-c", "user.name=teste", "-c", "user.email=teste@exemplo.invalid", *args],
                                      cwd=repo, capture_output=True, check=True, text=True).stdout.strip()

            git("init", "-q", "-b", "main")
            git("add", "-A")
            git("commit", "-qm", "main")
            git("checkout", "-qb", "sprint/demo")
            text = (repo / FEATURE).read_text(encoding="utf-8")
            for old, new in [("oito dígitos numéricos.", "oito algarismos, sem traço."),
                             ("| entrada do usuário |", "| entrada do cliente |")]:
                self.assertIn(old, text)
                text = text.replace(old, new, 1)
            (repo / FEATURE).write_text(text, encoding="utf-8")
            git("commit", "-qam", "STRY0013120: CEP sem traço")
            prs = Path(tmp, "prs.json")
            prs.write_text(json.dumps([{"branch": "sprint/demo", "head": git("rev-parse", "HEAD"), "base": "main",
                                        "number": 1, "url": "https://github.com/exemplo/loja/pull/1",
                                        "state": "open", "draft": False, "merged": False}]))
            git("update-ref", "refs/remotes/origin/sprint/demo", "HEAD")
            git("checkout", "-q", "main")
            git("update-ref", "refs/remotes/origin/main", "main")
            subprocess.run(["node", "scripts/monta-site-preview.mjs", "--out", "_site", "--pull-requests", str(prs)],
                           cwd=repo, capture_output=True, check=True)

            server = ThreadingHTTPServer(("127.0.0.1", 0), partial(Handler, directory=str(repo / "_site")))
            Thread(target=server.serve_forever, daemon=True).start()
            preview = f"http://127.0.0.1:{server.server_port}/sprint/demo/index.html"
            status = "() => (document.querySelector('[data-docqui-inline-status]') || {}).textContent || ''"

            def marks():
                return self.page.evaluate("""() => Object.fromEntries([...document.querySelectorAll('#documentContainer > .doc-section')]
                  .map(card => [card.querySelector('.section-title').textContent.trim(),
                    [...card.querySelectorAll('del.docqui-inline-word-removed, ins.docqui-inline-word-added')].map(n => n.textContent)])
                  .filter(([, found]) => found.length))""")

            def open_feature():
                self.page.goto(preview + "#" + FEATURE)
                self.page.wait_for_function(f"() => /com diferenças/.test(({status})())")
                self.assertEqual(marks(), {"Regras de Negócio": ["dígitos numéricos", "algarismos, sem traço"],
                                           "Campos": ["usuário", "cliente"]})

            try:
                open_feature()
                self.assertTrue(self.page.evaluate(status).startswith("1 célula(s) · 1 bloco(s) com diferenças"))
                self.assertEqual(self.page.locator("#documentContainer .doc-hero-card").count(), 1)
                highlighted = self.page.locator("#documentContainer").inner_html()
                self.page.locator("[data-docqui-inline-toggle]").uncheck()
                self.assertEqual(self.page.locator('#documentContainer [class*="docqui-inline"]').count(), 0)
                self.page.locator("[data-docqui-inline-toggle]").check()
                self.assertEqual(self.page.locator("#documentContainer").inner_html(), highlighted)
                self.page.evaluate("navigateTo('global/N0_PRODUCT_VISION.md')")
                self.page.wait_for_function(f"() => /não foi alterado/.test(({status})())")
                # Controle negativo: sem a comparação card a card, o Markdown corrido da base não
                # alinha com os cards e as marcas saem do lugar.
                def without_cards(route):
                    response = route.fetch()
                    route.fulfill(response=response, body=response.text().replace(
                        "comparaNosCards(window.DOCQUI_INLINE_DIFF.apply)", "window.DOCQUI_INLINE_DIFF.apply"))
                self.context.route("**/sprint/demo/index.html", without_cards)
                self.page.goto("about:blank")  # só o hash mudaria, e a página não seria recarregada
                with self.assertRaises(AssertionError):
                    open_feature()
            finally:
                server.shutdown()
                server.server_close()


if __name__ == "__main__":
    unittest.main()
