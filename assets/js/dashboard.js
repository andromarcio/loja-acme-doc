(() => {
  const states = {
    rascunho: 'Aguardando requisitos',
    'requisitos-aprovados': 'Requisitos aprovados',
    'modelo-validado': 'Modelo validado',
    especificado: 'Especificado',
    'em-desenvolvimento': 'Em desenvolvimento',
    implementado: 'Implementado',
    'revisao-necessaria': 'Revisão necessária',
    deprecado: 'Deprecado',
    'sem-governanca': 'Sem gates registrados',
    'governanca-invalida': 'Governança inconsistente',
  };
  const gates = { requisitos: 'Requisitos (PO)', 'modelo-dados': 'Modelo de dados', testes: 'Testes', codigo: 'Código' };
  const tones = {
    n2: 'cyan', n3: 'navy', branches: 'sky', delivery: 'orange',
    specified: 'cyan', waiting: 'orange', inconsistent: 'orange', ungoverned: 'navy', missing: 'orange',
    countPending: 'orange', countReviewed: 'cyan', countUnknown: 'navy', prototypes: 'sky',
  };
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const link = (path, label) => `<a href="#${esc(path)}">${esc(label)}</a>`;
  const card = (key, label, value, note) => `<div class="dashboard-stat" data-metric="${key}" data-tone="${tones[key] || 'blue'}">
    <span>${label}</span><strong>${value}</strong><small>${note}</small></div>`;
  const table = (columns, rows, empty) => rows.length
    ? `<div class="table-container"><table class="custom-table"><thead><tr>${columns.map(column => `<th>${column}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
    : `<p class="dashboard-empty">${esc(empty)}</p>`;
  const section = (title, body) => `<section class="dashboard-panel"><h2>${title}</h2>${body}</section>`;

  function render(data, selectedDomain) {
    const container = document.getElementById('documentContainer');
    const domains = data.artifacts.filter(item => item.level === 1);
    const artifacts = data.artifacts.filter(item => !selectedDomain || item.domain === selectedDomain);
    const features = artifacts.filter(item => item.level === 3);
    const active = features.filter(item => item.state !== 'deprecado');
    const specified = active.filter(item => ['especificado', 'em-desenvolvimento', 'implementado'].includes(item.state));
    const approved = active.filter(item => item.approved);
    const waiting = active.filter(item => item.nextGate);
    const missing = data.missingFeatures.filter(item => !selectedDomain || item.domain === selectedDomain);
    const inconsistent = features.filter(item => item.state === 'governanca-invalida');
    const ungoverned = features.filter(item => item.state === 'sem-governanca');
    const countPending = active.filter(item => item.countPending === true);
    const noCountStatus = active.filter(item => item.countPending === null);
    const branches = data.repository.branches;
    const local = branches.filter(item => item.local).length;
    const remote = branches.filter(item => item.remotes.length).length;
    const delivery = branches.filter(item => /^(sprint|historia)\//.test(item.name)).length;
    const queued = [...waiting, ...inconsistent, ...ungoverned];
    const featureLink = item => link(item.path, `${item.id} — ${item.title}`);
    const pendingReason = item => item.issues.length ? item.issues.join(' ')
      : item.nextGate ? `Aguardando ${gates[item.nextGate]}.` : 'Sem registro formal de gates; aprovação não inferida.';
    const byDomain = domains.filter(item => !selectedDomain || item.domain === selectedDomain).map(domain => {
      const children = artifacts.filter(item => item.domain === domain.domain);
      const n3 = children.filter(item => item.level === 3);
      return [link(domain.path, `${domain.id} — ${domain.title}`),
        children.filter(item => item.level === 2).length, n3.length,
        n3.filter(item => item.approved && item.state !== 'deprecado').length,
        n3.filter(item => specified.includes(item)).length,
        missing.filter(item => item.domain === domain.domain).length];
    });
    const definitions = `
      <p><strong>Artefatos:</strong> arquivos N1/N2/N3 efetivamente existentes, identificados pelo subtítulo. Templates, relatórios, exemplos e índices não entram nesse total.</p>
      <p><strong>Aprovação:</strong> formal somente para N3, pelos gates da fonte. “Requisitos aprovados” é CP1; não significa modelo aprovado nem especificação pronta. “Especificado” inclui etapas posteriores e exige os gates de especificação do perfil. Deprecados não entram nesses indicadores.</p>
      <p><strong>Pendentes:</strong> N3 com próximo checkpoint definido. Sem gates e registros inconsistentes são mostrados separadamente, nunca tratados como aprovados. As contagens de pendências de aprovação e revisão de contagem podem se sobrepor. “N3 sem arquivo” mede os caminhos declarados nas tabelas de Features dos N2; um caminho desatualizado também aparece e deve ser inspecionado antes de concluir que falta especificar.</p>
      <p><strong>Branches:</strong> nomes únicos das refs locais e remotas disponíveis no checkout; uma branch local rastreada no remoto conta uma vez no total. Não é consulta em tempo real ao GitHub; execute fetch antes de regenerar localmente. Branches de entrega existentes não significam necessariamente previews abertos.</p>
      <p><strong>Recorte:</strong> os documentos e seu perfil correspondem ao checkout usado na geração. O filtro por domínio não muda os indicadores de branches, protótipos e modelos de dados, que são do repositório inteiro.</p>`;
    container.classList.add('dashboard-view');
    container.innerHTML = `
      <div class="dashboard-toolbar">
        <label>Domínio<select id="dashboardDomain"><option value="">Todos os domínios</option>
          ${domains.map(item => `<option value="${esc(item.domain)}" ${selectedDomain === item.domain ? 'selected' : ''}>${esc(item.id)} — ${esc(item.title)}</option>`).join('')}
        </select></label></div>
      <div class="dashboard-stats">
        ${card('n1', 'Domínios (N1)', artifacts.filter(item => item.level === 1).length, 'Documentos presentes')}
        ${card('n2', 'Feature Sets (N2)', artifacts.filter(item => item.level === 2).length, 'Documentos presentes')}
        ${card('n3', 'Features (N3)', features.length, 'Inclui deprecados, quando existentes')}
        ${card('artifacts', 'Artefatos de especificação', artifacts.length, 'Soma de N1 + N2 + N3')}
        ${card('branches', 'Branches conhecidas', branches.length, `${local} locais · ${remote} com referência remota`)}
        ${card('delivery', 'Branches de entrega', delivery, 'sprint/ e historia/ — recorte do Git')}
      </div>
      ${section('Aprovações e prontidão dos N3', `<div class="dashboard-stats">
        ${card('approved', 'Requisitos aprovados', approved.length, 'CP1 registrado, sem inconsistências')}
        ${card('specified', 'Especificados', specified.length, 'Prontos ou em etapas posteriores')}
        ${card('waiting', 'Pendentes de aprovação', waiting.length, 'Aguardam o próximo checkpoint')}
        ${card('inconsistent', 'Governança inconsistente', inconsistent.length, 'Gates ou estado precisam de revisão')}
        ${card('ungoverned', 'Sem gates', ungoverned.length, 'Sem aprovação formal mensurável')}
        ${card('missing', 'N3 previstos sem arquivo', missing.length, 'Caminhos declarados no N2 ausentes no retrato')}
      </div><div class="dashboard-state-list">${Object.entries(states).map(([state, label]) => {
        const count = features.filter(item => item.state === state).length;
        return `<div><span>${label}</span><strong>${count}</strong><progress value="${count}" max="${features.length || 1}" aria-label="${label}: ${count}"></progress></div>`;
      }).join('')}</div>`)}
      ${section('Cobertura por domínio', table(['Domínio', 'N2', 'N3', 'CP1 aprovado', 'Especificados', 'N3 sem arquivo'], byDomain, 'Nenhum domínio neste recorte.'))}
      ${section('Fila de aprovação e governança', `<p>Abra a especificação para revisar o próximo checkpoint. Este painel não concede aprovações.</p>
        ${table(['Feature', 'Estado', 'Próxima ação'], queued.map(item => [featureLink(item), esc(states[item.state] || item.state), esc(pendingReason(item))]), 'Nenhuma pendência de aprovação registrada neste recorte.')}`)}
      ${section('Pendências de especificação', table(['Feature prevista', 'Feature Set'], missing.map(item =>
        [esc(item.title), link(item.path, item.featureSet)]), 'Todos os N3 declarados nas tabelas de Features dos N2 possuem arquivo.'))}
      ${section('Revisão de contagem', `<div class="dashboard-stats">
        ${card('countPending', 'Revisões pendentes', countPending.length, 'contagem.pendente = true')}
        ${card('countReviewed', 'Revisões registradas', active.filter(item => item.countPending === false).length, 'contagem.pendente = false')}
        ${card('countUnknown', 'Sem status de contagem', noCountStatus.length, 'Ausência não significa contagem revisada')}
      </div><p>Não soma PF nem transforma os valores históricos em medição aprovada.</p>
        ${table(['Feature', 'Situação'], countPending.map(item => [featureLink(item), 'Revisão de contagem pendente']), 'Nenhuma revisão de contagem pendente registrada neste recorte.')}`)}
      ${section('Branches do repositório', `<p>${branches.length} nomes únicos. Referências locais/remotas podem coexistir; não são somadas em duplicidade.</p>
        ${table(['Branch', 'Local', 'Remotos', 'Último commit'], branches.map(item =>
          [esc(item.name), item.local ? 'Sim' : 'Não', esc(item.remotes.join(', ') || '—'), `<code>${esc(item.commit)}</code><br>${esc(item.updated)}`]), 'Nenhuma branch encontrada no checkout.')}`)}
      ${section('Artefatos de apoio', `<div class="dashboard-stats">
        ${card('prototypes', 'Protótipos HTML', data.prototypes, 'Exclui a biblioteca de componentes')}
        ${card('dataModels', 'Fragmentos de dados', data.dataModels, 'global/data-models — sem o índice')}
      </div><p>${link('analise-impacto/INDEX.md', 'AIMs dos tickets')} · ${link('global/CONTAGEM-PF.md', 'Consolidado de contagem')} · ${link('modules/INDEX.md', 'Índice dos módulos')}</p>`)}
      ${section('Como interpretar o painel', definitions)}`;
    document.getElementById('dashboardDomain').addEventListener('change', event => render(data, event.target.value));
  }

  window.renderDashboard = () => {
    const container = document.getElementById('documentContainer');
    const data = window.DASHBOARD_DATA;
    if (!data || data.schema !== 1 || !Array.isArray(data.artifacts) ||
        !Array.isArray(data.missingFeatures) || !Array.isArray(data.repository?.branches) ||
        !data.generatedAt || !data.profile) {
      container.classList.add('dashboard-view');
      container.innerHTML = `<h1>Dashboard indisponível</h1><p role="alert">O retrato de gestão não foi gerado ou está inválido.
        Execute <code>python scripts/gera-dashboard.py</code> com PyYAML instalado e atualize o site.</p>`;
      console.error('Dashboard: dados ausentes ou inválidos.');
      return;
    }
    render(data, '');
  };
})();
