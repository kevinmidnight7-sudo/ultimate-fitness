# The Ultimate Human — project notes

Seven-page marketing site. Vite + React 19, react-router-dom v7, Tailwind CSS v4,
framer-motion v12, lucide-react, recharts.

## Layout of the code

- `src/App.jsx` — routes only.
- `src/components/Layout.jsx` — header, `<Outlet />`, footer. Mounts once.
- `src/pages/` — one file per route. A page composes sections; it does not
  contain markup of its own beyond page-level framing.
- `src/sections/` — one file per section, sub-components co-located with their parent.
- `src/components/shared/` — helpers used across sections (`SectionLabel`,
  `RegisterButton`, `MarketingImage`).
- `src/data/content.js` — every copy/data array. `src/lib/` — constants, routes, gradients.

`src/lib/routes.js` is the single source of truth for the seven pages: the header
nav, the Overview hub grid, the next-page bands and each page's title and meta
description all read from it. Add a route there — and to `uhi_app_routes()` in
`wordpress-theme/functions.php`, or the page will be served with a 404 header.

## Rules

- Password gate removed (Aug 2026) — the site is public. The old component is kept at
  `src/components/archived/PasswordGate.jsx`; it was only ever client-side, so use
  hosting-level auth if real restriction is ever needed.
- Primary CTA: every button points at `REGISTER_URL` (Google Form). The on-site
  `WaitlistForm` is archived alongside the gate, working and ready to switch back on.
- `SITE_VERSION` in `src/lib/constants.js` drives the footer version marker — bump it
  on EVERY update/push (last segment per change), ideally in the same commit.
- Design system: near-black backgrounds, `lime-400` accent only, `Oswald` display /
  `Barlow Condensed` UI. Keep lime for CTAs/active states; dim it elsewhere.
- Lint baseline is 3 pre-existing errors; don't introduce new ones. Build must pass.
- Sections carry a default gradient and accept a `gradient` prop so a page can rotate
  between the recipes in `src/lib/gradients.js`. No two consecutive sections on a page
  should share one. Don't invent new gradients.

## Motion system

Apple-style feel = three distinct effects. Don't blur them together.
1. **Reveal on enter** — fade + small translate, fires once, never reverses.
2. **Scroll-linked scrub** — a property bound to scroll position (parallax, drift).
3. **Pinned scene** — a section sticks while scroll drives a timeline.

Rules (follow these exactly so motion stays coherent across files):

- **Library:** use `framer-motion` (already a dependency). `useScroll` + `useTransform`
  for scrub/parallax; `useInView({ once: true })` for reveals. Never scroll event listeners.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` for entrances; `linear` for scroll-scrubbed values.
- **Durations:** 600ms reveals, 300ms hovers. Never above 900ms.
- **Reveal distance:** 24px translateY. Never more than 40px.
- **Stagger:** 80ms between siblings, max 5 items.
- **Every reveal fires once** (`useInView` with `{ once: true }`).
- **Animate only `transform` and `opacity`.** Never animate height, top, margin, or filter on scroll.
- **Always honour `prefers-reduced-motion`** — every motion primitive must no-op to a
  static render (`useReducedMotion()`).
- **Restraint:** long stretches with nothing moving are what make the motion land.
  **At most three reveal moments per page** — in practice the page header on mount, one
  in the body, and the next-page band. Everything else renders static. Reserve image
  aspect ratios so reveals don't fade in empty boxes.
- **Use the `Reveal` primitive, not raw `whileInView`.** framer-motion does not consult
  `prefers-reduced-motion` for you; `Reveal` does. A bare `whileInView` leaves its
  content at opacity 0 for anyone who has asked for no motion.
- Bar-fill and count-up animations draw a value rather than announce a block arriving.
  They are not reveals and don't count against the budget.
- **Mobile:** pinned/tall scenes use `dvh`, not `vh`. Consider dropping pinning below `md`
  in favour of plain reveals.

## Motion primitives (`src/components/motion/`)

- `<Reveal delay={0} y={24} once>` — fade + translateY in when scrolled into view.
- `<Parallax speed={0.3}>` — drifts its child on Y as it scrolls through the viewport (speed 0–1).
- `<StickyScene heightVh={300}>{(progress) => …}</StickyScene>` — tall wrapper + sticky
  child; render prop receives a `scrollYProgress` MotionValue (0→1 across the scene).

All three render a static child when `prefers-reduced-motion` is set.
