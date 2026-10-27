# SCAR Robotics website

Site for SCAR, the Rutgers IEEE VEX U team. React 19, React Router 7, Tailwind CSS 3, built with Vite.

## Develop

```bash
npm install
npm start          # dev server on http://localhost:3000
npm run build      # production build in dist/
npm run preview    # serve the production build
npm run lint
```

## Structure

- `src/pages/` — one component per route (`/`, `/about`, `/volunteering`, `/sponsors`, `/contact`, 404).
- `src/components/` — homepage sections, `Navbar`, `Footer`, `PageLayout` (shell for non-home pages), `SponsorForm`.
- `src/site.js` — shared links and copy: nav items, Discord, social links, sponsors, alumni companies, Formspree endpoint.
- `src/index.css` — Tailwind layers plus the hero opening animation.

## Hero

The homepage hero plays an intro once per browser session (`sessionStorage` key `scar-intro-played`); repeat visits and
`prefers-reduced-motion` start at the end state. Behind the four black corner panels, a static poster (`hero1`) sits under a
three-photo slideshow. To use a looping video instead, import the file in `src/components/Hero.jsx` and set `HERO_VIDEO`.

The fixed `Navbar` stays hidden on the homepage until the hero scrolls away; the hero's top corner panels act as the navbar
until then.

## Team history (About page)

Every season — years, game, team, captains, leads, awards and its photos/videos — lives in
`src/data/seasons.js`, newest first. The comment at the top of that file explains each field. To add photos, put the
originals in `assets-src/history/`, run `npm run images`, and reference them by file name in the season's `media` list.

## Images

Source photos live in `assets-src/`. After adding or replacing one, run `npm run images` to regenerate the web-sized WebP
files in `src/assets/` (hero photos capped at 2400px wide, everything else at 1400px).

## Deploying

This is a single-page app: the host must serve `index.html` for every route (e.g. a rewrite rule on Vercel/Netlify, or a
`404.html` copy on GitHub Pages).
