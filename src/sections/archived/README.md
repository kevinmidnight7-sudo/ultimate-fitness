# Archived sections

The sections the site ran on before the September 2026 rebrand, when UHI was
positioned as a fitness race rather than as an ongoing measurement and
improvement platform.

Nothing here is imported by the live app. It is kept — rather than deleted — so
the event-first material can be restored quickly if that decision is revisited.

| File | What it was |
| --- | --- |
| `HeroSection.jsx` | The black-and-lime home hero, founding-athlete waitlist badge. |
| `WhyDifferentSection.jsx` | The HYROX / Spartan / CrossFit comparison table. |
| `UhiIndexSection.jsx` | The original Index explainer, ten capabilities. |
| `CapabilityPillarsSection.jsx` | The ten-capability selector, including Resilience and Mental Fortitude. |
| `WholeHumanScene.jsx` | Pinned "measure the whole human" scene. |
| `ScoreSection.jsx` | Tabbed score dashboard for the ten-capability model. |
| `YourJourneyHub.jsx` | Athlete-type quiz and assessment preview modals. |
| `AICoachingSection.jsx` | The full AI movement-coaching walkthrough. |
| `ChallengeOverviewSection.jsx` | What a UHI event day is. |
| `EventStructureSection.jsx` | Divisions, stations, reps and working weights. |
| `CategoriesSection.jsx` | Individual / doubles / relay / corporate divisions. |
| `SignupSection.jsx` | Founding-athlete registration band. |
| `SubscriptionSection.jsx` | Explorer / Adventurer / Ultimate tiers, with prices. |
| `PricingSection.jsx` | Founding-athlete event entry pricing. |
| `WhyEnterSection.jsx` | "The complete athlete wins" reasons to enter. |
| `PreLaunchSection.jsx` | The original pre-launch caveats. |
| `SplitFeatureScene.jsx` | Pinned cut-out figure + statement scene. |

Their copy and data live in `src/data/archived/eventContent.js`, and the four
dark gradient recipes they use are in `legacyGradients.js` here.

To bring one back: move the file into `src/sections/`, repoint its imports at
`@/data/content` and `@/lib/gradients`, and restyle it against the tokens in
`src/index.css` — the archived files are all built for the old dark palette.
