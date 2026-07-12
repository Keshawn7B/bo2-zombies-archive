(() => {
  const data = window.ARCHIVE_DATA;
  const items = data.items;
  const state = {
    category: 'All',
    query: '',
    chip: 'All',
    sort: 'featured',
    savedOnly: false,
    saved: new Set(JSON.parse(localStorage.getItem('bo2-archive-saved') || '[]'))
  };

  const els = {
    categoryNav: document.querySelector('#category-nav'),
    search: document.querySelector('#global-search'),
    cardGrid: document.querySelector('#card-grid'),
    cardTemplate: document.querySelector('#archive-card-template'),
    resultCount: document.querySelector('#result-count'),
    filterChips: document.querySelector('#filter-chips'),
    sort: document.querySelector('#sort-select'),
    empty: document.querySelector('#empty-state'),
    sectionTitle: document.querySelector('#section-title'),
    sectionEyebrow: document.querySelector('#section-eyebrow'),
    clear: document.querySelector('#clear-filters'),
    savedToggle: document.querySelector('#saved-toggle'),
    savedCount: document.querySelector('#saved-count'),
    quickGrid: document.querySelector('#quick-grid'),
    dialog: document.querySelector('#detail-dialog'),
    dialogContent: document.querySelector('#dialog-content'),
    menuToggle: document.querySelector('#menu-toggle'),
    sidebar: document.querySelector('#sidebar')
  };

  const symbols = {
    Maps: '⌖', Weapons: '⌁', Perks: '✚', Buildables: '⚒', Enemies: '☠',
    'Persistent Upgrades': '✦', Mechanics: '⚙', Strategies: '↝', FAQ: '?'
  };

  const searchable = item => [
    item.title, item.category, item.summary, item.map, item.mode, item.dlc,
    item.weaponClass, item.pap, item.source, ...(item.tags || []), ...(item.details || [])
  ].filter(Boolean).join(' ').toLowerCase();

  const categoryCount = category => items.filter(item => item.category === category).length;

  function initStats() {
    document.querySelector('#entry-count').textContent = items.length;
    document.querySelector('#count-all').textContent = items.length;
    document.querySelector('#hero-entries').textContent = items.length;
    document.querySelector('#hero-maps').textContent = categoryCount('Maps');
    document.querySelector('#hero-weapons').textContent = categoryCount('Weapons');
  }

  function initNavigation() {
    data.collections.forEach(collection => {
      const button = document.createElement('button');
      button.className = 'nav-item';
      button.dataset.category = collection.id;
      button.innerHTML = `<span class="nav-icon">${symbols[collection.id] || '•'}</span><span>${collection.label}</span><span class="nav-count">${categoryCount(collection.id)}</span>`;
      button.addEventListener('click', () => setCategory(collection.id));
      els.categoryNav.appendChild(button);
    });
    document.querySelector('[data-category="All"]').addEventListener('click', () => setCategory('All'));
  }

  function initQuickCards() {
    const quick = [
      ['Maps', '⌖', 'Map routes', 'Setup paths, unique systems, danger notes, and Pack-a-Punch access.'],
      ['Weapons', '⌁', 'Weapon index', 'Pack-a-Punch names, acquisition, roles, and high-round value.'],
      ['Persistent Upgrades', '✦', 'Hidden upgrades', 'Community-documented green-mist systems and limitations.'],
      ['Strategies', '↝', 'High-round plans', 'Training, camping, ammo control, co-op recovery, and setup pacing.']
    ];
    quick.forEach(([category, icon, title, copy]) => {
      const button = document.createElement('button');
      button.className = 'quick-card';
      button.innerHTML = `<span class="quick-icon">${icon}</span><strong>${title}</strong><p>${copy}</p><b>${categoryCount(category)} ENTRIES</b>`;
      button.addEventListener('click', () => setCategory(category));
      els.quickGrid.appendChild(button);
    });
  }

  function setCategory(category) {
    state.category = category;
    state.chip = 'All';
    state.savedOnly = false;
    els.savedToggle.setAttribute('aria-pressed', 'false');
    document.querySelectorAll('.nav-item').forEach(node => node.classList.toggle('active', node.dataset.category === category));
    els.sectionTitle.textContent = category === 'All' ? 'All entries' : category;
    els.sectionEyebrow.textContent = category === 'All' ? 'FULL DATABASE' : 'ARCHIVE SECTION';
    buildChips();
    render();
    document.querySelector('#library').scrollIntoView({ behavior: 'smooth', block: 'start' });
    els.sidebar.classList.remove('open');
  }

  function getAvailableChips() {
    const pool = state.category === 'All' ? items : items.filter(i => i.category === state.category);
    const candidates = new Map();
    pool.forEach(item => {
      [item.map, item.weaponClass, item.mode, item.dlc].filter(Boolean).forEach(value => candidates.set(value, (candidates.get(value) || 0) + 1));
    });
    return [...candidates.entries()].filter(([, count]) => count >= 2).sort((a, b) => b[1] - a[1]).slice(0, 8);
  }

  function buildChips() {
    els.filterChips.innerHTML = '';
    const chips = [['All', state.category === 'All' ? items.length : categoryCount(state.category)], ...getAvailableChips()];
    chips.forEach(([label, count]) => {
      const button = document.createElement('button');
      button.className = `filter-chip${state.chip === label ? ' active' : ''}`;
      button.textContent = `${label} · ${count}`;
      button.addEventListener('click', () => {
        state.chip = label;
        buildChips();
        render();
      });
      els.filterChips.appendChild(button);
    });
  }

  function filteredItems() {
    let result = items.filter(item => state.category === 'All' || item.category === state.category);
    if (state.savedOnly) result = result.filter(item => state.saved.has(item.id));
    if (state.query) result = result.filter(item => searchable(item).includes(state.query));
    if (state.chip !== 'All') result = result.filter(item => [item.map, item.weaponClass, item.mode, item.dlc].includes(state.chip));
    if (state.sort === 'az') result.sort((a, b) => a.title.localeCompare(b.title));
    if (state.sort === 'za') result.sort((a, b) => b.title.localeCompare(a.title));
    return result;
  }

  function render() {
    const result = filteredItems();
    els.cardGrid.innerHTML = '';
    result.forEach(item => els.cardGrid.appendChild(createCard(item)));
    els.resultCount.textContent = `${result.length} result${result.length === 1 ? '' : 's'}`;
    els.empty.hidden = result.length !== 0;
    els.clear.hidden = !(state.query || state.chip !== 'All' || state.savedOnly);
    els.savedCount.textContent = state.saved.size;
  }

  function createCard(item) {
    const fragment = els.cardTemplate.content.cloneNode(true);
    const card = fragment.querySelector('.archive-card');
    const save = fragment.querySelector('.save-entry');
    fragment.querySelector('.category-label').textContent = item.category;
    fragment.querySelector('.card-symbol').textContent = symbols[item.category] || '•';
    fragment.querySelector('h3').textContent = item.title;
    fragment.querySelector('.card-summary').textContent = item.summary;
    const tagList = fragment.querySelector('.tag-list');
    (item.tags || []).slice(0, 3).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagList.appendChild(span);
    });
    save.classList.toggle('saved', state.saved.has(item.id));
    save.textContent = state.saved.has(item.id) ? '★' : '☆';
    save.addEventListener('click', event => {
      event.stopPropagation();
      toggleSaved(item.id);
    });
    fragment.querySelector('.open-entry').addEventListener('click', () => openDetail(item));
    card.addEventListener('dblclick', () => openDetail(item));
    return fragment;
  }

  function toggleSaved(id) {
    state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
    localStorage.setItem('bo2-archive-saved', JSON.stringify([...state.saved]));
    render();
  }

  function factsFor(item) {
    return [
      ['Category', item.category],
      ['Map / mode', item.map || item.mode || item.dlc || 'Multiple'],
      ['Cost / source', item.cost ? `${item.cost.toLocaleString()} points` : item.source || item.pap || item.confidence || 'Reference entry']
    ];
  }

  function openDetail(item) {
    const facts = factsFor(item).map(([label, value]) => `<div class="fact"><span>${escapeHTML(label)}</span><strong>${escapeHTML(String(value))}</strong></div>`).join('');
    const details = (item.details || [item.summary]).map(detail => `<li>${escapeHTML(detail)}</li>`).join('');
    const tags = (item.tags || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('');
    els.dialogContent.innerHTML = `
      <div class="dialog-inner">
        <header class="dialog-head">
          <div><span class="dialog-kicker">${escapeHTML(item.category)}</span><h2>${escapeHTML(item.title)}</h2></div>
          <button class="dialog-close" aria-label="Close">×</button>
        </header>
        <p class="dialog-summary">${escapeHTML(item.summary)}</p>
        <div class="fact-grid">${facts}</div>
        <ul class="detail-list">${details}</ul>
        <div class="tag-list dialog-tags">${tags}</div>
      </div>`;
    els.dialogContent.querySelector('.dialog-close').addEventListener('click', () => els.dialog.close());
    els.dialog.showModal();
  }

  function escapeHTML(value) {
    return value.replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]);
  }

  els.search.addEventListener('input', event => {
    state.query = event.target.value.trim().toLowerCase();
    render();
  });
  els.sort.addEventListener('change', event => { state.sort = event.target.value; render(); });
  els.clear.addEventListener('click', () => {
    state.query = '';
    state.chip = 'All';
    state.savedOnly = false;
    els.search.value = '';
    els.savedToggle.setAttribute('aria-pressed', 'false');
    buildChips();
    render();
  });
  els.savedToggle.addEventListener('click', () => {
    state.savedOnly = !state.savedOnly;
    els.savedToggle.setAttribute('aria-pressed', String(state.savedOnly));
    render();
  });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && document.activeElement !== els.search) {
      event.preventDefault();
      els.search.focus();
    }
    if (event.key === 'Escape' && els.sidebar.classList.contains('open')) els.sidebar.classList.remove('open');
  });
  document.querySelectorAll('[data-jump]').forEach(button => button.addEventListener('click', () => setCategory(button.dataset.jump)));
  els.menuToggle.addEventListener('click', () => els.sidebar.classList.toggle('open'));
  els.dialog.addEventListener('click', event => {
    if (event.target === els.dialog) els.dialog.close();
  });

  initStats();
  initNavigation();
  initQuickCards();
  buildChips();
  render();
})();
