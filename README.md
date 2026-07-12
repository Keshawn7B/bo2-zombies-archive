# 115 Archive

A fast, searchable, mobile-friendly **Black Ops II Zombies knowledge archive** designed for GitHub Pages.

## Included

- 138 indexed entries at launch
- Maps and modes
- Weapons and Pack-a-Punch names
- Perks and prices
- Buildables
- Special enemies
- Persistent upgrades
- Core mechanics
- High-round strategies
- Match-time FAQ
- Full-text search
- Category and context filters
- Saved entries stored in the browser
- Responsive mobile navigation
- Zero-build GitHub Pages deployment

## Run locally

No install step is required.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy with GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this project to the repository root.
3. Open **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push to `main`. The included workflow deploys the site.

## Add or edit knowledge

All archive content is stored in `data.js` under `window.ARCHIVE_DATA.items`.

Each entry supports fields such as:

```js
{
  id: "unique-slug",
  title: "Entry name",
  category: "Maps",
  summary: "Short searchable description.",
  details: ["Detailed field note one.", "Detailed field note two."],
  tags: ["tag one", "tag two"]
}
```

Optional fields such as `map`, `mode`, `dlc`, `weaponClass`, `pap`, `source`, `cost`, and `confidence` automatically appear in filters or detail cards.

## Accuracy policy

Most BO2 game content is stable. Hidden systems—especially persistent-upgrade triggers and the Zombies rank formula—were not fully documented by Treyarch. Those entries are explicitly labeled as community-documented and should be updated when stronger sourced testing is available.

## Legal

This is an unofficial fan reference. Call of Duty, Black Ops II, Zombies, and related names and marks belong to Activision and Treyarch. No game assets are included.
