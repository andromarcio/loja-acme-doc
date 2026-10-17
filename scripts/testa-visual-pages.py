"""Regressao visual: python scripts/testa-visual-pages.py (Playwright + Edge/Chromium)."""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os
from pathlib import Path
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

    def assert_visual(self, theme, n3=False):
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
        # No N3, cada seção é um card e o contêiner não é; nas demais páginas, o contrário.
        self.assertEqual(actual["panel"], "0px" if n3 else "30px")
        self.assertEqual(actual["section"], "1px" if n3 else "0px")

    def test_shell_and_theme(self):
        self.assertEqual(self.page.locator("#brandName").inner_text(), "Loja ACME")
        self.assertEqual(self.page.locator(".sidebar__search #searchInput").count(), 1)
        self.assertEqual(self.page.locator(".app-header #breadcrumbBar").count(), 1)
        self.assertEqual(self.page.locator(".header-center").count(), 0)
        self.assertTrue(self.page.locator(".brand__docqui").evaluate("el => el.complete && el.naturalWidth > 0"))
        self.assertIn("CAIXA-EFRS/loja-acme-doc", self.page.locator(".workspace").inner_text())
        self.assertEqual(self.page.locator('a[href="#mentoria/README.md"]').count(), 1)
        self.assertEqual(self.page.locator('a[href="mentoria/simulador.html"]').count(), 1)
        self.assertEqual(self.page.locator('a[href="#__dashboard__"]').count(), 1)
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
                self.assert_visual(theme, n3=True)
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


if __name__ == "__main__":
    unittest.main()
