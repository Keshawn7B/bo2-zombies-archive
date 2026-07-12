(() => {
  const archive = window.ARCHIVE_DATA;
  const guide = window.MAP_GUIDES;
  const items = archive.items;

  const state = {
    view: 'Maps',
    category: 'Persistent Upgrades',
    activeMap: guide.maps[0].id,
    activeSection: 'weapons',
    query: '',
    chip: 'All',
    sort: 'featured',
    savedOnly: false,
    saved: new Set(JSON.parse(localStorage.getItem('bo2-archive-saved') || '[]'))
  };

  const els = {
    sidebar: document.querySelector('#sidebar'),
    menuToggle: document.querySelector('#menu-toggle'),
    generalNav: document.querySelector('#general-nav'),
    search: document.querySelector('#global-search'),
    mapsView: document.querySelector('#maps-view'),
    archiveView: document.querySelector('#archive-view'),
    mapList: document.querySelector('#map-list'),
    mapMeta: document.querySelector('#map-meta'),
    mapTitle: document.querySelector('#map-title'),
    mapSummary: document.querySelector('#map-summary'),
    mapDifficulty: document.querySelector('#map-difficulty'),
    sectionTabs: document.querySelector('#section-tabs'),
    mapSection: document.querySelector('#map-section'),
    archiveTitle: document.querySelector('#archive-title'),
    archiveKicker: document.querySelector('#archive-kicker'),
    archiveGrid: document.querySelector('#archive-grid'),
    cardTemplate: document.querySelector('#archive-card-template'),
    resultCount: document.querySelector('#result-count'),
    filterChips: document.querySelector('#filter-chips'),
    sort: document.querySelector('#sort-select'),
    clear: document.querySelector('#clear-filters'),
    empty: document.querySelector('#empty-state'),
    savedToggle: document.querySelector('#saved-toggle'),
    savedCount: document.querySelector('#saved-count'),
    dialog: document.querySelector('#detail-dialog'),
    dialogContent: document.querySelector('#dialog-content')
  };

  const generalCategories = [
    ['Persistent Upgrades', 'Perma Perks'],
    ['Weapons', 'Weapons'],
    ['Perks', 'Perks'],
    ['Buildables', 'Buildables'],
    ['Enemies', 'Enemies'],
    ['Mechanics', 'Mechanics'],
    ['Strategies', 'Strategies'],
    ['FAQ', 'FAQ']
  ];

  const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);

  const flattenMap = map => JSON.stringify(map).toLowerCase();
  const searchableItem = item => [
    item.title, item.category, item.summary, item.map, item.mode, item.dlc,
    item.weaponClass, item.pap, item.source, ...(item.tags || []), ...(item.details || [])
  ].filter(Boolean).join(' ').toLowerCase();

  function initNavigation() {
    generalCategories.forEach(([category, label], index) => {
      const button = document.createElement('button');
      button.className = 'nav-button';
      button.dataset.view = category;
      button.innerHTML = `<span class="nav-code">${String(index + 2).padStart(2, '0')}</span><span>${escapeHTML(label)}</span>`;
      button.addEventListener('click', () => setView(category));
      els.generalNav.appendChild(button);
    });

    document.querySelectorAll('[data-view="Maps"]').forEach(node => {
      node.addEventListener('click', event => {
        event.preventDefault();
        setView('Maps');
      });
    });
  }

  function setView(view) {
    state.view = view;
    state.savedOnly = false;
    els.savedToggle.setAttribute('aria-pressed', 'false');
    document.querySelectorAll('.nav-button').forEach(button => {
      button.classList.toggle('active', button.dataset.view === view);
    });
    els.mapsView.classList.toggle('active', view === 'Maps');
    els.archiveView.classList.toggle('active', view !== 'Maps');

    if (view === 'Maps') {
      els.search.placeholder = 'Map, staff, quest, buildable…';
      renderMapList();
      renderMap();
    } else {
      state.category = view;
      state.chip = 'All';
      els.search.placeholder = `Search ${displayCategory(view).toLowerCase()}…`;
      els.archiveTitle.textContent = displayCategory(view);
      els.archiveKicker.textContent = view === 'Persistent Upgrades' ? 'HIDDEN SYSTEMS' : 'GENERAL ARCHIVE';
      buildChips();
      renderArchive();
    }

    els.sidebar.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function displayCategory(category) {
    return category === 'Persistent Upgrades' ? 'Perma Perks' : category;
  }

  function filteredMaps() {
    if (!state.query) return guide.maps;
    return guide.maps.filter(map => flattenMap(map).includes(state.query));
  }

  function renderMapList() {
    const maps = filteredMaps();
    els.mapList.innerHTML = '';

    if (maps.length && !maps.some(map => map.id === state.activeMap)) {
      state.activeMap = maps[0].id;
    }

    maps.forEach((map, index) => {
      const button = document.createElement('button');
      button.className = `map-button${state.activeMap === map.id ? ' active' : ''}`;
      button.innerHTML = `<span class="index">${String(index + 1).padStart(2, '0')}</span><span class="name">${escapeHTML(map.name)}</span><span class="dlc">${escapeHTML(shortDlc(map.dlc))}</span>`;
      button.addEventListener('click', () => {
        state.activeMap = map.id;
        state.activeSection = 'weapons';
        renderMapList();
        renderMap();
      });
      els.mapList.appendChild(button);
    });

    if (!maps.length) {
      els.mapList.innerHTML = '<div class="notice">No map guide matches that search.</div>';
      els.mapSection.innerHTML = '<div class="empty-state"><strong>No matching map</strong><p>Try a weapon, perk, enemy, or map name.</p></div>';
    }
  }

  function shortDlc(dlc) {
    return dlc.replace('Base game', 'BASE').replace('Bonus map', 'BONUS').toUpperCase();
  }

  function activeMap() {
    return guide.maps.find(map => map.id === state.activeMap) || filteredMaps()[0] || guide.maps[0];
  }

  function renderMap() {
    const map = activeMap();
    if (!map) return;

    els.mapTitle.textContent = map.name;
    els.mapSummary.textContent = map.summary;
    els.mapDifficulty.textContent = map.difficulty;
    els.mapMeta.innerHTML = [map.code, map.dlc, map.mode]
      .map(value => `<span class="meta-pill">${escapeHTML(value)}</span>`).join('');

    els.sectionTabs.innerHTML = '';
    guide.sections.forEach(section => {
      const button = document.createElement('button');
      button.className = `section-tab${state.activeSection === section.id ? ' active' : ''}`;
      button.textContent = section.label;
      button.addEventListener('click', () => {
        state.activeSection = section.id;
        renderSectionTabs();
        renderMapSection();
      });
      els.sectionTabs.appendChild(button);
    });
    renderMapSection();
  }

  function renderSectionTabs() {
    els.sectionTabs.querySelectorAll('.section-tab').forEach((button, index) => {
      button.classList.toggle('active', guide.sections[index].id === state.activeSection);
    });
  }

  function renderMapSection() {
    const map = activeMap();
    const section = guide.sections.find(item => item.id === state.activeSection);
    if (!map || !section) return;

    let content = `<div class="section-intro"><h3>${escapeHTML(section.title)}</h3><p>${escapeHTML(section.description)}</p></div>`;

    if (section.id === 'weapons') content += renderRankings(map.weapons);
    if (section.id === 'wonder') content += renderIntel(map.wonder) + renderStaffGuides(map.staffGuides);
    if (section.id === 'quest') content += `${map.questNote ? `<div class="notice">${escapeHTML(map.questNote)}</div>` : ''}${renderSteps(map.quest)}`;
    if (section.id === 'highround') content += renderSteps(map.highround);
    if (section.id === 'buildables') content += renderLocations(map.buildables);
    if (section.id === 'enemies') content += renderEnemies(map.enemies);
    if (section.id === 'perks') content += renderPerks(map.perks);

    els.mapSection.innerHTML = content;
  }

  function renderRankings(rows = []) {
    return `<div class="rank-list">${rows.map((row, index) => `
      <div class="rank-row">
        <span class="rank-number">#${index + 1}</span>
        <span class="rank-name">${escapeHTML(row[0])}</span>
        <span class="tier">${escapeHTML(row[1])}</span>
        <span class="rank-note">${escapeHTML(row[2])}</span>
      </div>`).join('')}</div>`;
  }

  function renderIntel(rows = []) {
    return `<div class="intel-list">${rows.map(row => `
      <article class="intel-card"><h4>${escapeHTML(row[0])}</h4><p>${escapeHTML(row[1])}</p></article>`).join('')}</div>`;
  }

  function renderStaffGuides(guides) {
    if (!guides?.length) return '';
    return `<div class="subguide"><h4>Origins staff upgrade checklists</h4>${guides.map(guideItem => `
      <article class="location-card"><h4>${escapeHTML(guideItem[0])}</h4><ol>${guideItem[1].map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ol></article>`).join('')}</div>`;
  }

  function renderSteps(rows = []) {
    return `<div class="step-list">${rows.map(row => `
      <article class="step-row"><div><strong>${escapeHTML(row[0])}</strong><p>${escapeHTML(row[1])}</p></div></article>`).join('')}</div>`;
  }

  function renderLocations(rows = []) {
    return `<div class="location-list">${rows.map(row => `
      <article class="location-card"><h4>${escapeHTML(row[0])}</h4><ul>${row[1].map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></article>`).join('')}</div>`;
  }

  function renderEnemies(rows = []) {
    return `<div class="intel-list">${rows.map(row => `
      <article class="intel-card"><h4>${escapeHTML(row[0])}</h4><p>${escapeHTML(row[1])}</p><span class="weakness">COUNTER: ${escapeHTML(row[2])}</span></article>`).join('')}</div>`;
  }

  function renderPerks(rows = []) {
    return `<div class="location-list">${rows.map(row => `
      <article class="location-card"><h4>${escapeHTML(row[0])}</h4><p><strong>${escapeHTML(row[1])}</strong> — ${escapeHTML(row[2])}</p></article>`).join('')}</div>`;
  }

  function archivePool() {
    let result = items.filter(item => state.category === 'All' || item.category === state.category);
    if (state.savedOnly) result = result.filter(item => state.saved.has(item.id));
    if (state.query) result = result.filter(item => searchableItem(item).includes(state.query));
    if (state.chip !== 'All') result = result.filter(item => [item.map, item.weaponClass, item.mode, item.dlc].includes(state.chip));
    if (state.sort === 'az') result.sort((a, b) => a.title.localeCompare(b.title));
    if (state.sort === 'za') result.sort((a, b) => b.title.localeCompare(a.title));
    return result;
  }

  function availableChips() {
    const pool = items.filter(item => state.category === 'All' || item.category === state.category);
    const values = new Map();
    pool.forEach(item => {
      [item.map, item.weaponClass, item.mode, item.dlc].filter(Boolean).forEach(value => values.set(value, (values.get(value) || 0) + 1));
    });
    return [...values.entries()].filter(([, count]) => count >= 2).sort((a, b) => b[1] - a[1]).slice(0, 8);
  }

  function buildChips() {
    const categoryCount = items.filter(item => state.category === 'All' || item.category === state.category).length;
    const chips = [['All', categoryCount], ...availableChips()];
    els.filterChips.innerHTML = '';
    chips.forEach(([label, count]) => {
      const button = document.createElement('button');
      button.className = `filter-chip${state.chip === label ? ' active' : ''}`;
      button.textContent = `${label} · ${count}`;
      button.addEventListener('click', () => {
        state.chip = label;
        buildChips();
        renderArchive();
      });
      els.filterChips.appendChild(button);
    });
  }

  function renderArchive() {
    const result = archivePool();
    els.archiveGrid.innerHTML = '';
    result.forEach(item => els.archiveGrid.appendChild(createArchiveCard(item)));
    els.resultCount.textContent = `${result.length} entr${result.length === 1 ? 'y' : 'ies'}`;
    els.empty.hidden = result.length > 0;
    els.clear.hidden = !(state.query || state.chip !== 'All' || state.savedOnly);
    els.savedCount.textContent = state.saved.size;
  }

  function createArchiveCard(item) {
    const fragment = els.cardTemplate.content.cloneNode(true);
    const save = fragment.querySelector('.save-entry');
    fragment.querySelector('.category-label').textContent = displayCategory(item.category);
    fragment.querySelector('h3').textContent = item.title;
    fragment.querySelector('.card-summary').textContent = item.summary;
    const tags = fragment.querySelector('.tag-list');
    (item.tags || []).slice(0, 3).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tags.appendChild(span);
    });
    save.classList.toggle('saved', state.saved.has(item.id));
    save.textContent = state.saved.has(item.id) ? '★' : '☆';
    save.addEventListener('click', event => {
      event.stopPropagation();
      toggleSaved(item.id);
    });
    fragment.querySelector('.open-entry').addEventListener('click', () => openDetail(item));
    return fragment;
  }

  function toggleSaved(id) {
    state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
    localStorage.setItem('bo2-archive-saved', JSON.stringify([...state.saved]));
    renderArchive();
  }

  function openDetail(item) {
    const facts = [
      ['Category', displayCategory(item.category)],
      ['Map / mode', item.map || item.mode || item.dlc || 'Multiple'],
      ['Cost / source', item.cost ? `${Number(item.cost).toLocaleString()} points` : item.source || item.pap || item.confidence || 'Reference entry']
    ].map(([label, value]) => `<div class="fact"><span>${escapeHTML(label)}</span><strong>${escapeHTML(value)}</strong></div>`).join('');
    const details = (item.details || [item.summary]).map(detail => `<li>${escapeHTML(detail)}</li>`).join('');
    const tags = (item.tags || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('');

    els.dialogContent.innerHTML = `
      <div class="dialog-inner">
        <header class="dialog-head"><div><span class="dialog-kicker">${escapeHTML(displayCategory(item.category))}</span><h2>${escapeHTML(item.title)}</h2></div><button class="dialog-close" aria-label="Close">×</button></header>
        <p class="dialog-summary">${escapeHTML(item.summary)}</p>
        <div class="fact-grid">${facts}</div>
        <ul class="detail-list">${details}</ul>
        <div class="tag-list">${tags}</div>
      </div>`;
    els.dialogContent.querySelector('.dialog-close').addEventListener('click', () => els.dialog.close());
    els.dialog.showModal();
  }

  els.search.addEventListener('input', event => {
    state.query = event.target.value.trim().toLowerCase();
    if (state.view === 'Maps') {
      renderMapList();
      if (filteredMaps().length) renderMap();
    } else {
      renderArchive();
    }
  });

  els.sort.addEventListener('change', event => {
    state.sort = event.target.value;
    renderArchive();
  });

  els.clear.addEventListener('click', () => {
    state.query = '';
    state.chip = 'All';
    state.savedOnly = false;
    els.search.value = '';
    els.savedToggle.setAttribute('aria-pressed', 'false');
    buildChips();
    renderArchive();
  });

  els.savedToggle.addEventListener('click', () => {
    if (state.view === 'Maps') {
      state.view = 'Persistent Upgrades';
      state.category = 'All';
      els.mapsView.classList.remove('active');
      els.archiveView.classList.add('active');
      document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
      els.archiveTitle.textContent = 'Saved entries';
      els.archiveKicker.textContent = 'PERSONAL FIELD NOTES';
      buildChips();
    }
    state.savedOnly = !state.savedOnly;
    els.savedToggle.setAttribute('aria-pressed', String(state.savedOnly));
    renderArchive();
  });

  els.menuToggle.addEventListener('click', () => els.sidebar.classList.toggle('open'));
  els.dialog.addEventListener('click', event => { if (event.target === els.dialog) els.dialog.close(); });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && document.activeElement !== els.search) {
      event.preventDefault();
      els.search.focus();
    }
    if (event.key === 'Escape') els.sidebar.classList.remove('open');
  });

  initNavigation();
  els.savedCount.textContent = state.saved.size;
  renderMapList();
  renderMap();
})();
