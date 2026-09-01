# The Ultimate Human — project notes

Eight-page marketing site. Vite + React 19, react-router-dom v7, Tailwind CSS v4,
framer-motion v12, lucide-react.

UHI is an ongoing fitness measurement and improvement platform: one score out of
1,000 across eight areas of fitness, built from the exercise, training and events
a person already does. It is **not** an event. Events exist, as one secondary way
to test and validate an Index.

## Layout of the code

- `src/App.jsx` — routes, and the legacy-path redirects.
- `src/components/Layout.jsx` — header, `<Outlet />`, footer. Mounts once.
- `src/pages/` — one file per route. A page composes sections; it does not
  contain markup of its own beyond page-level framing.
- `src/sections/` — one file per section, sub-components co-located with their parent.
- `src/components/shared/` — helpers used across sections (`SectionHeading`,
  `SectionLabel`, `RegisterButton`, `IndexProfile`, `FaqList`, `CtaBand`,
  `FutureTag`, `SiteLogo`).
- `src/data/content.js` — every copy/data array. `src/lib/` — constants, routes, surfaces.

`src/lib/routes.js` is the single source of truth for the eight pages: the header
nav, the footer nav, the next-page bands, the 404 index and each page's title and
meta description all read from it. Add a route there — and to `uhi_app_routes()`
in `wordpress-theme/functions.php`, or the page is served with a 404 header.

`legacyPathRedirects` in the same file maps every pre-rebrand URL to its new home.
Those paths must stay on the WordPress allowlist too: the app can only redirect a
URL WordPress agrees to serve with a 200.

## Archived, not deleted

The event-first site (to Sep 2026) is intact:

- `src/sections/archived/` — the event sections, with a README mapping each file
  to what it was, plus `legacyGradients.js` (the four old dark recipes).
- `src/data/archived/eventContent.js` — its copy and data.
- `src/components/archived/` — the password gate and the on-site waitlist form.

Nothing outside `archived/` should import from it. Restoring a piece is a move
plus a restyle against the current tokens.

## Rules

- Password gate removed (Aug 2026) — the site is public. It was only ever
  client-side, so use hosting-level auth if real restriction is ever needed.
- Primary CTA: every button points at `REGISTER_URL` (Google Form). The on-site
  `WaitlistForm` is archived, working and ready to switch back on.
- `SITE_VERSION` in `src/lib/constants.js` drives the footer version marker — bump it
  on EVERY update/push (last segment per change), ideally in the same commit.
- Lint baseline is 3 pre-existing errors; don't introduce new ones. Build must pass.
- Sections carry a default surface and accept a `surface` prop so a page can rotate
  between the recipes in `src/lib/gradients.js`. No two consecutive sections on a
  page should share one — the ink recipe especially, since `CtaBand` is always ink.
  Don't invent new recipes.

## What must not appear on the site

Not because they are secret, but because they have not been decided. Do not add:

- Subscription prices, or an empty price slot, or a visible "TBC".
- A scoring formula, or a claim about how areas are weighted.
- Named gym partners, confirmed integrations, or launch dates.
- An exercise-to-fitness-area mapping. The source table Ken supplied has empty
  area columns; only the four worked examples stated in his prose (5K run,
  deadlift, farmers carry, balance test) appear on the site.
- Wearables, AI coaching, video assessment, UHI Verified or the partner gym
  programme described as operational. They stay in future tense **and** carry a
  `<FutureTag>`, because prose alone is too easy to skim past.

Removed from the positioning and not to be reintroduced without Ken: UHI as a
race, "the complete athlete wins", the founding athlete waitlist, the resilience
and mental fortitude capabilities, and event entry pricing in the membership
journey.

Use British English.

## Design system

Provisional palette — Ken's brand hexes have not been supplied. Defined **once**
as design tokens in the `@theme` block of `src/index.css` and nowhere else; the
surface recipes in `src/lib/gradients.js` read them through `var(--color-…)`.
Reskinning the site is a change to that one block.

- `bone` is the dominant background, `cream` for lifted panels, `sand` for
  heavier bands, `ember` (burnt orange) is the single accent, `ink` is text and
  the one or two contrast sections per page.
- On light grounds use `ember` / `ember-deep`; on `ink` grounds use `ember-light`
  and the `bone-*` text tokens. Wrap ink sections in `on-ink` so focus rings
  switch to the light variant.
- Every text pairing clears WCAG AA. The measured ratios are in `src/index.css`
  — check them before changing a hex.
- No lime anywhere: it reads as a competitor's colour. `SiteLogo` masks the
  existing white lockup and paints it with a token colour, so the real artwork
  works on bone until new brand assets arrive.
- Type: `Oswald` display / `Barlow Condensed` UI, with the scale in
  `src/index.css` (`type-hero`, `type-h2`, `type-h3`, `type-lead`, `type-body`,
  `type-label`, `type-score`). Use those rather than a fresh `clamp()` per section.
- Grids: the `gap-px` over a coloured container pattern only works when the item
  count divides evenly into the columns at **every** breakpoint — otherwise the
  empty cell renders as a stray tile. For odd counts use separately bordered
  cards with a real gap.

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
- `<CountUp to={684}>` — counts a number up the first time it is in view.
- `<Parallax speed={0.3}>` — drifts its child on Y as it scrolls through the viewport (speed 0–1).
- `<StickyScene heightVh={300}>{(progress) => …}</StickyScene>` — tall wrapper + sticky
  child; render prop receives a `scrollYProgress` MotionValue (0→1 across the scene).

All four render a static child when `prefers-reduced-motion` is set. `Parallax` and
`StickyScene` are currently unused: the rebrand did content and layout first, as
instructed, and motion beyond the reveal budget comes after.
