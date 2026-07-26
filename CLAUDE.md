# The Ultimate Human — project notes

Single-page marketing site. Vite + React 19, Tailwind CSS v4, framer-motion v12,
lucide-react, recharts. Almost the entire UI lives in `src/App.jsx` as named
section components. Shared pieces live in `src/components/`.

- Password gate is client-side (`SITE_PASSWORD` in `App.jsx`) — don't change its behaviour.
- `SITE_VERSION` in `App.jsx` drives the footer version marker — bump it on notable changes.
- Design system: near-black backgrounds, `lime-400` accent only, `Oswald` display /
  `Barlow Condensed` UI. Keep lime for CTAs/active states; dim it elsewhere.
- Lint baseline is 6 pre-existing errors; don't introduce new ones. Build must pass.

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
  Don't reveal every section. Reserve image aspect ratios so reveals don't fade in empty boxes.
- **Mobile:** pinned/tall scenes use `dvh`, not `vh`. Consider dropping pinning below `md`
  in favour of plain reveals.

## Motion primitives (`src/components/motion/`)

- `<Reveal delay={0} y={24} once>` — fade + translateY in when scrolled into view.
- `<Parallax speed={0.3}>` — drifts its child on Y as it scrolls through the viewport (speed 0–1).
- `<StickyScene heightVh={300}>{(progress) => …}</StickyScene>` — tall wrapper + sticky
  child; render prop receives a `scrollYProgress` MotionValue (0→1 across the scene).

All three render a static child when `prefers-reduced-motion` is set.
