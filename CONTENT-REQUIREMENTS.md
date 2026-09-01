# Outstanding content and decisions

Things the website needs from Ken before it can say more than it currently
does. Each entry says what the site does *today* in the absence of an answer,
so nothing here is blocking a launch — but each one is a place where the site
is deliberately quieter than it could be.

## 1. The exercise-to-area mapping — the biggest gap

The Capability Framework is described on the site as mapping each recognised
activity against the eight areas of fitness. **We do not have that mapping.**

The source document holds the exercise library as twenty single-row tables, and
in every one of them the four area columns are empty. Only four
activity-to-area relationships are stated anywhere in the prose, and those four
are the only ones the site claims:

| Activity | Areas | Where it appears |
| --- | --- | --- |
| A 5K run | Endurance, Speed | How It Works |
| A deadlift | Strength | How It Works |
| A farmers carry | Strength, Endurance, Coordination | How It Works |
| A balance test | Balance | How It Works |

Until the rest arrives, the exercise library is presented as a grouped,
readable list and **no exercise on the site claims which areas it feeds**. The
groupings below are editorial — ours, for readability — not a claim about
scoring.

Please complete this. A tick in each column that the exercise genuinely
informs is enough; weightings are not needed for the website.

| Exercise | Endurance | Strength | Power | Speed | Agility | Balance | Coordination | Mobility |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Running | | | | | | | | |
| SkiErg | | | | | | | | |
| RowErg | | | | | | | | |
| BikeErg | | | | | | | | |
| Sled Push | | | | | | | | |
| Sled Pull | | | | | | | | |
| Farmers Carry | ✓ | ✓ | | | | | ✓ | |
| Front Carry | | | | | | | | |
| Overhead Carry | | | | | | | | |
| Deadlift | | ✓ | | | | | | |
| Goblet Squat | | | | | | | | |
| Push Press | | | | | | | | |
| Clean & Press | | | | | | | | |
| Dumbbell Snatch | | | | | | | | |
| Ground-to-Overhead | | | | | | | | |
| Lunges | | | | | | | | |
| Burpee Broad Jump | | | | | | | | |
| Wall Balls | | | | | | | | |
| Bear Crawl | | | | | | | | |
| Devil Press | | | | | | | | |

Two related gaps:

- The document's prose mentions **balance and mobility tests** as part of the
  framework, but no such test appears in the exercise list. If they exist, they
  should be named.
- Nothing describes **how a result becomes a score**. The site says performance
  is converted "taking account of factors that make comparisons meaningful"
  and stops there, because going further would mean inventing a formula. If
  there is anything publishable about age, sex or bodyweight adjustment, it
  would strengthen the Index page considerably.

## 2. Brand colours

The palette is provisional. It is defined once, as design tokens, in the
`@theme` block of `src/index.css`, so replacing it is a change to one block and
nothing else. Every text pairing currently clears WCAG AA and the measured
ratios are recorded in that file — worth re-checking after any change.

Needed: the real hex values for the bone/cream ground, the burnt orange accent
and the near-black. Also, if there is one, a logo that works on a light ground.
The current mark is a white lockup being masked and repainted, which works but
is a workaround.

## 3. Prices

No price appears anywhere on the site, and the membership cards have no price
slot at all — an empty one, or a "TBC", reads worse than not raising it. A line
under the heading and an FAQ answer both say pricing has not been set.

Needed eventually: pricing for UHI Start, UHI Improve and UHI Pro.

## 4. Whether event entry pricing ever returns

The archived founding-athlete entry prices (£79 individual, £129 doubles, £189
relay, from £599 corporate) are **not** on the site. They belonged to a
founding-athlete waitlist that the repositioning removed, so republishing them
would state a commitment nobody has made.

Decision needed: do events get their own pricing again, and if so, does it live
on Challenges or somewhere else? The old figures are recoverable from
`src/data/archived/eventContent.js`.

## 5. Launch timing for the unbuilt features

Five things are described on the site in future tense and carry a visible
"In development" tag:

- Wearable data integration
- AI-powered coaching and personalised guidance
- Video and movement analysis against the UHI Movement Standard
- UHI Verified, and the assessment partners who would deliver it
- The partner gym programme

If any of these has a date, or has quietly become real, the wording should
change — the tag is doing real work and should come off the moment it stops
being true. Conversely, if one of them is further away than it reads, tell us
and we will soften it further.

## 6. Hosting

See `DEPLOYMENT.md`. In short: confirm the Vercel production branch, decide
whether Vercel or WordPress is authoritative, and fix one canonical hostname.
