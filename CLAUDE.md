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
  `SectionLabel`, `RegisterButton`, `IndexProfile`, `Photograph`, `FaqList`,
  `CtaBand`, `FutureTag`, `SiteLogo`).
- `src/data/content.js` — every copy/data array. `src/lib/` — constants, routes, surfaces.

`src/lib/routes.js` is the single source of truth for the eight pages: the header
menu (via the `nav` tree), the footer's full page list, the 404 index and each
page's title and meta description all read from it. Add a route there — and to
`uhi_app_routes()` in `wordpress-theme/functions.php`, and to `vercel.json` if a
legacy URL points at it.

`legacyPathRedirects` in the same file maps every pre-rebrand URL to its new home
for the WordPress path. On Vercel the same five URLs are real 308s in
`vercel.json`, which fires first. Both are needed; see `DEPLOYMENT.md`.

## Navigation — Ken's rules, not preferences

The top menu does the navigating. Five choices, two with submenus:

    Home | The Index ▾ | Membership ▾ | Challenges | About | Discover Your Index

Do **not** reintroduce any of these, all removed on Ken's instruction after he
compared UHI with Deadly Dozen, HYROX and Flat Out:

- Next/previous page controls, or a "next page" band at the foot of a page.
- Anything that walks a visitor through the eight pages in a fixed order.
- Sideways-scrolling page controls.
- A closing CTA that is really page navigation. A page may end with a genuine
  action — "Discover Your Index", "Talk to us" — but "continue to the next
  section" is navigation and belongs in the menu.

In-page anchors are fine. Contextual cross-links are fine where they answer the
question the section just raised; they are not fine as a disguised running order.

Submenus must work by keyboard and by touch. Hover may open them, but hover must
never be the only way in — the trigger is a real `<button>` with `aria-expanded`.

The footer carries all eight pages as a flat list. That is the only place a
complete index is needed.

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
- Home page copy stays short. Ken wants it understood in ten seconds: big type,
  few words, depth on the pages the menu leads to. If a section is growing into
  an explanation, it belongs on a page, not on the home page.
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
and mental fortitude capabilities, "human operating system", and event entry
pricing in the membership journey. Resilience and mental fortitude must not
appear even to be corrected — an FAQ explaining that they are no longer areas
was removed for putting both terms back on the page.

`CONTENT-REQUIREMENTS.md` records what is still needed from Ken, including the
exercise-to-area mapping, with a fillable table.

Use British English.

## Design system

Provisional palette — Ken's brand hexes have not been supplied. Defined **once**
as design tokens in the `@theme` block of `src/index.css` and nowhere else; the
surface recipes in `src/lib/gradients.js` read them through `var(--color-…)`.
Reskinning the site is a change to that one block.

- `bone` is the dominant background, `cream` for lifted panels, `sand` for
  heavier bands, `ember` (burnt orange) is the single accent, `ink` is text and
  the one or two contrast sections per page.
- **`ember` is a graphic colour, not a text colour.** Since it was brightened
  (Sep 2026) it sits at 3.6:1 on bone: fine for rules, bar fills, icons,
  borders, focus rings and button grounds, below AA for body-size text. Small
  text on a light ground uses `ember-deep`; on `ink` grounds use `ember-light`
  and the `bone-*` tokens. Wrap ink sections in `on-ink` so focus rings switch
  to the light variant.
- The primary button is `bg-ember text-ink`, flipping to `bg-ember-deep
  text-cream` on hover. Cream on the brightened ember is only 3.9:1 — do not
  put white text back on it.
- Every text pairing clears WCAG AA. The measured ratios are in `src/index.css`
  — check them before changing a hex.
- **Measure contrast against the darkest stop of the surface, not the body.**
  Most sections sit on a bone→sand gradient, and resolving the background by
  walking up for a background-*color* skips the gradient entirely and lands on
  bone. That is how seven eyebrows sat below AA unnoticed for a release.
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

## Photography

Use `<Photograph>` — it handles the reserved box, lazy loading, the crop anchor,
the format ladder and the warm grade in one place, and it requires `alt`.

- **Five images today, all from the campaign set, chosen to carry an
  argument.** A sandbag carry outdoors on the home page (answers "is this for
  people like me?"), a farmers carry beside the exercise library (a movement
  that is actually in the list), a single-leg balance reach on Improve (one of
  the four worked examples), a group of three on For Gyms, a solo morning run
  on Challenges (a run, not a start line — the page's point is that events are
  optional). Not one per page, and not decoration. The Index, Membership and
  About have none, deliberately.
- **They alternate.** Home right, How It Works right, Improve left, For Gyms
  and Challenges full-width bands. Three identical splits in a row read as a
  template.
- **Measure the subject before choosing a ratio; do not eyeball it.** The
  Challenges runner occupies 88% of her frame's height, so the widest band she
  survives is 1.70:1 — 16:9 takes the top of her head. Crop a ruled strip of
  the original (`scratchpad/shots/headscan.png` shows the method) and read the
  percentages off it. Two wrong guesses shipped a clipped crown.
- **No live image uses the warm grade any more** — `grade="none"` on all five.
  They are shot warm, and warming an already-warm image twice makes it muddy.
  The grade exists for the cool blue-grey stock from the event-first site,
  which is now only referenced from `archived/`.
- **Nothing shot in the old dark key stays on a live page.** The Challenges
  break used to be `challenge-fatigue-moment.jpg`, a near-black gym photograph;
  next to the campaign set it read as a different brand, and Ken said so.
- **Sized renditions, not one file.** The campaign images ship as
  `<base>-<width>.{avif,webp,jpg}` and are called with `set` + `widths`, which
  renders a `<picture>`. `sizes` describes the **box**, not the rendered image —
  under `object-fit: cover` a hard sideways crop scales the file well past the
  box width, and a srcset resolved against the box then picks a rendition the
  browser upscales. Where the crop is heavy (How It Works, 2.33:1 into 1.6:1),
  ship one honest width instead.
- **What is left to place** is in `IMAGE-GENERATION-BRIEF.md` §0. One of the
  six specified frames (02, The Index) is deferred, not missing. Four of the
  nine frames Ken supplied are unplaced and stay in git history rather than in
  `public/` — **one of them shows an amputee athlete**, and until it is placed
  no adaptive athlete appears anywhere on the site. That is a placement
  decision for Ken, not a missing asset. Do not add archive photography to fill
  it, and do not build empty slots for images that have not arrived.
- `priority` sets both `loading="eager"` and `fetchpriority="high"`. Nothing
  above the fold uses an image today.
- **`movement-analysis-still.jpg` is deliberately unused.** It is saturated
  with the old lime, and it is a picture of joint tracking — the exact feature
  that is still in development. Retinting would fix the first problem and not
  the second.
- `hero-athlete-primary.jpg`, `why-enter-lifestyle.jpg` and
  `challenge-fatigue-moment.jpg` are off every live page but stay in the
  repository: `src/sections/archived/` still points at all three, and the
  archive is meant to stay restorable.
- `converge-left.png` / `converge-right.png` are cut-outs built for the
  archived pinned scene. Leave them there.
- Neither OG card is page content.
- Photographs live in `public/images/marketing/` and must be real JPEGs at a
  sensible width. Three of them arrived as 1.5MB PNGs with a .jpg extension;
  check the format before adding another.
- Wide images need a taller `ratio` on small screens — a 21:9 banner is 160px
  tall on a phone, which crops a person to a torso.
- Never set text over the busy part of a photograph.

## Page-introduction pattern

`<IndexPattern>` draws the branded background for page introductions: one
instrument — a score dial with a calibrated scale, centred just off the right
edge — rendered in seven arrangements that vary only rotation, which rings are
drawn, marker positions and where the short ember segment falls. Variants are
named per page in `routes.js` and passed through `<PageHeader pattern=…>`.

Rules that are load-bearing, not preferences:

- **It sheds layers as the space disappears.** The ember marks are the only
  saturated thing in it, so they are `lg` and up only; the tick scale is `sm`
  and up. With every layer on at 320px the ember segment put a **2.0:1**
  background behind an eyebrow. Verify with the pixel test
  (`scratchpad/hdrcontrast.mjs`) — it hides the text, screenshots the real
  render and samples the darkest pixel actually behind each text box. The
  gradient-aware DOM checker cannot see an absolutely-positioned SVG sibling.
- No numerals, labels, legends, rounded progress caps or rectangles. Each of
  those pushes it from "capability framework" toward "software dashboard".
- Absolutely positioned, `aria-hidden`, `pointer-events-none`, no animation at
  all (so there is nothing for `prefers-reduced-motion` to switch off), no
  external reference, tokens only.
- Vertical placement belongs to the caller, not the component — a page
  introduction fills edge to edge, a taller section must not.
- **Not used on the home hero.** It was built and tested there; at that height
  even the most restrained arrangement resolved to two thin curves crossing the
  rule above the eight areas. The `hero` variant is kept for a future shorter
  hero.

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
