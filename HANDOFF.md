# Handoff — multi-page restructure (in progress)

Paste this whole file into a new session along with the original task brief.

## Where things stand

Branch: `claude/youthful-maxwell-ta1b1j` — all work committed and pushed.
Build passes. Lint is at the **6-error baseline** (do not add to it).

**Step 1 of the brief (refactor) is ~70% done. Steps 2–7 are untouched.**

| Brief step | Status |
|---|---|
| 1. Refactor `App.jsx` into `sections/`, `data/`, `lib/` | **partly done** — see below |
| 2. Router, layout, 7 page shells, ScrollToTop, hash redirects, 404 | not started |
| 3. Header nav; delete `SideQuickNav` + `SectionTourButton` | not started |
| 4. Move sections onto pages | not started |
| 5. `PageHeader`, next-page bands, per-page design pass | not started |
| 6. WordPress 200-status fix + README | not started |
| 7. Mobile check at 375px | not started |

## What step 1 has actually done

Two commits, both pure moves with **no behaviour change**, each verified against
the rendered page (16 sections, 17 h2s, 21863px, no JS errors):

- `0d8ff74` — **data + constants extracted**
  - `src/data/content.js` — all 30 module-scope copy/data arrays
  - `src/lib/constants.js` — `REGISTER_URL`, `REGISTER_LABEL`, `SITE_VERSION`
- `ebc750a` — **ten inline sections became named components**
  - `HeroSection`, `UhiIndexSection`, `WhyDifferentSection`,
    `ChallengeOverviewSection`, `CategoriesSection`, `WhyEnterSection`,
    `PricingSection`, `FoundersSection`, `SignupSection`, `PreLaunchSection`
  - `HeroSection` now owns its own hooks (`heroRef`, `reducedMotion`, and the
    scroll-linked headline glow) so it is self-contained and page-portable.

`App.jsx` is down from 4826 to ~4290 lines and **every section is now a named,
self-contained component** — which was the real blocker for the page split.

## What step 1 still needs

The components are all still *inside* `App.jsx`. They need moving to
`src/sections/` (one file each), with sub-components co-located with their
parent, roughly:

```
HeroSection.jsx            + HeroPatternBackground
EventStructureSection.jsx  + FlowNode, FlowConnector, CapabilityAccordionItem, WorkingWeightsPanel
AICoachingSection.jsx      + HowItWorksCard, ImprovementAreasPanel, PersonalCapabilityCoach, MovementCoachPreview
YourJourneyHub.jsx         + JourneyModal, AthleteTypeQuiz, FullAssessmentPreview
SubscriptionSection.jsx    + TierCard
FoundersSection.jsx        + FounderCard
WhyDifferentSection.jsx    + WhyDifferentExplainer
WholeHumanScene.jsx        + WholeHumanContent
SplitFeatureScene.jsx      + CutoutImage, SplitFeatureContent
CapabilityPillarsSection.jsx, UhiIndexSection.jsx, ScoreSection.jsx,
ChallengeOverviewSection.jsx, CategoriesSection.jsx, WhyEnterSection.jsx,
PricingSection.jsx, SignupSection.jsx, PreLaunchSection.jsx
```

Shared helpers used across sections → `src/components/shared/`:
`SectionLabel`, `RegisterButton`, `RegisterButtonHeader`, `ImageBlock`,
`MarketingImage`.

**This last part is optional for the multi-page goal.** The sections are already
self-contained components, so routing and the page split can proceed with them
still in `App.jsx`. Splitting into files is tidiness — if context is tight,
prioritise steps 2–5 and do the file split last.

## Hard-won gotchas — please read

1. **Watch out for silent no-op string replacements.** I twice wrote Python that
   did `s.replace(old, new)` where `old` no longer matched, so it silently did
   nothing while reporting success. This left `SITE_VERSION` stuck at
   `v1.12.0.0` for eight commits. **Always `assert old in s` before replacing.**
2. **Python scripts that crash before `open(p,'w')` lose all earlier edits in
   that script** — I lost two changes that way. Write the file, or use several
   small scripts.
3. **Import-block pruning by regex is dangerous.** A greedy pattern ate five
   import lines and broke the build. Anchor on the exact end line
   (`} from "lucide-react";`) and walk backwards to `import {`.
4. **The dev server dies between Bash calls.** Start Vite and run Playwright in
   the *same* invocation, or expect `ERR_CONNECTION_REFUSED`. Ports get stuck —
   just increment.
5. **`&` in a commit message breaks the shell.** Use `git commit -F file`.
6. Verify visually with Playwright at
   `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node <script>`; scripts go in
   `/opt/node22/lib/node_modules/playwright/`.
7. **No password gate any more** — the site loads straight to the hero, so
   Playwright scripts no longer need to fill in a password.

## Decisions already made that the brief did not cover

- `SITE_VERSION` moved to `src/lib/constants.js` and set to **`v2.0.0.0`** for
  the restructure (it was stuck at v1.12.0.0 — see gotcha 1).
- Sub-components are co-located with their parent section rather than each
  getting a file, to keep the file count sane.

## Recent context the brief predates

Ken's latest round is already applied: hero lattice de-emphasised, Med Ball Toss
removed (event is now **9 capabilities**, not 10 — headline, counts, numbering
and the finisher label all updated), Hoop Shot time cap removed, all CTAs point
at `REGISTER_URL` (Google Form), on-site form and password gate archived under
`src/components/archived/`.

**Open with Ken:** the event is now 9 stations, so the "10 Capabilities" framing
is gone; the 10 Pillars of the Index are unaffected. Also his logo is
`#BAE202` while the site accent is `#A3E635` — he was going to re-export it.
