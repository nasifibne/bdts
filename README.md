# BDTS 2027 — Bangladesh Tourism Summit website

React + Vite rebuild of the static site, with animations from [React Bits](https://reactbits.dev).

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built site
```

## Where things are

| What | File |
| --- | --- |
| Sessions, stats, partners, passes, photos, FAQ, contacts | `src/data.js` |
| Home page sections | `src/pages/Home.jsx` |
| Delegates / Objectives / FAQ / 404 pages | `src/pages/*.jsx` |
| Header, footer, scroll reveal | `src/components/Layout.jsx` |
| Registration form | `src/components/RegisterForm.jsx` |
| Page titles and meta descriptions | `index.html`, `delegates.html`, … (project root) |
| Styles | `src/styles.css` (original design) + `src/extra.css` (React Bits tweaks) |
| Images | `public/img/` |

## React Bits components used

All copied into `src/components/reactbits/` (JS + CSS flavour):

- **SplitText** — hero title rises in word by word (`Summit` keeps its italic accent via the `.w3` class).
- **ShinyText** — gold shine across the “2nd Edition · National Summit” eyebrow.
- **CountUp** — the 300–400 / 2 / 6 / 3 stats count up when scrolled into view.
- **Threads** — faint gold WebGL threads behind the countdown band (lazy-loaded; hidden for reduced-motion users).

Every effect respects `prefers-reduced-motion`.

## Registration backend

Set `FORM_ENDPOINT` in `src/data.js` (e.g. a Google Apps Script web-app URL or Formspree endpoint).
The form POSTs the fields as JSON. Left empty, it opens the visitor’s email app addressed to
bdtourismsummit@gmail.com, as before.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
In the repo: **Settings → Pages → Source: GitHub Actions**. Paths are relative (`base: './'`),
so it works at `username.github.io/bdts/` or on a custom domain without changes.
