// Catalog filters: combinable chips (OR within a group, AND across groups).
// State lives in the query string (?subject=math,physics&age=6-9) so a
// filtered view can be shared or reloaded.
(() => {
  const root = document.querySelector('[data-filters]');
  const grid = document.querySelector('[data-card-grid]');
  if (!root || !grid) return;

  const chips = [...root.querySelectorAll('.u-chip[data-group]')];
  const cards = [...grid.querySelectorAll('.u-card')];
  const empty = document.querySelector('[data-empty]');
  const count = root.querySelector('[data-count]');
  const clear = root.querySelector('[data-clear]');
  const template = root.dataset.countTemplate || '%d';
  const groups = [...new Set(chips.map((c) => c.dataset.group))];

  const readURL = () => {
    const params = new URLSearchParams(location.search);
    const state = {};
    for (const g of groups) {
      const v = params.get(g);
      state[g] = new Set(v ? v.split(',').filter(Boolean) : []);
    }
    return state;
  };

  const writeURL = (state) => {
    const params = new URLSearchParams(location.search);
    for (const g of groups) {
      if (state[g].size) params.set(g, [...state[g]].join(','));
      else params.delete(g);
    }
    const qs = params.toString().replace(/%2C/g, ',');
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
  };

  const apply = (state) => {
    let shown = 0;
    for (const card of cards) {
      const match = groups.every((g) => {
        if (!state[g].size) return true;
        const values = (card.dataset[g] || '').split(' ');
        return values.some((v) => state[g].has(v));
      });
      card.hidden = !match;
      if (match) shown++;
    }
    for (const chip of chips) {
      chip.setAttribute('aria-pressed', String(state[chip.dataset.group].has(chip.dataset.value)));
    }
    const active = groups.some((g) => state[g].size);
    clear.hidden = !active;
    count.textContent = template.replace('%d', shown);
    if (empty) empty.hidden = shown > 0;
  };

  const state = readURL();

  root.addEventListener('click', (e) => {
    const chip = e.target.closest('.u-chip[data-group]');
    if (chip) {
      const set = state[chip.dataset.group];
      const v = chip.dataset.value;
      set.has(v) ? set.delete(v) : set.add(v);
    } else if (e.target.closest('[data-clear]')) {
      for (const g of groups) state[g].clear();
    } else {
      return;
    }
    writeURL(state);
    apply(state);
  });

  apply(state);
})();
