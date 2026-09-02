# UHI image generation brief

For ChatGPT Work. Six photographs to replace and extend the site's current
imagery.

**Nothing here has been generated.** No AI images have been produced in this
repository, and the three photographs currently on the site are untouched and
stay in place until these arrive.

---

## 1. Why this brief exists

Ken's note: *the photography needs to feel more egalitarian.*

The three images on the site today are good photographs but they are the same
photograph three times over: lean, able-bodied, mid-effort, alone, in cool
blue-grey light. They say "this is for people who already train hard". The
site's actual argument is the opposite — one score out of 1,000 that anyone can
start building at any age, ability or starting point — and the pictures are
currently working against the words.

They are also cool-toned stock being warmed by a CSS filter to survive on a
bone ground. This set should be warm at source and need no filter.

---

## 2. Visual direction for the whole set

The six must read as one campaign shot by one photographer on the same job.

**Do:**
- Photorealistic. Premium documentary / editorial, not advertising.
- Natural and candid. Caught mid-action or mid-thought, not posed to camera.
- Light and warm, so it sits on a bone (#f6f1e9) and cream (#fcfaf6) page.
- Natural daylight, or a softly lit neutral interior. Big soft sources.
- Palette: warm cream, sand, pale concrete, warm grey, timber, with subtle
  orange only where it occurs naturally (kit, clothing, low sun).
- Real people with real bodies, not fitness models.
- Realistic effort. Working, concentrating, breathing hard — not collapsing.
- Personal progress, not winning.
- Skin, hair and clothing rendered honestly, without gloss retouching.

**Do not:**
- Dark, intimidating, black-walled gyms.
- Neon, and specifically no lime or green lighting anywhere in the set. Lime
  was the previous brand colour and is a competitor's; it must not appear.
- Podiums, medals, finish tape, trophies, winner imagery.
- Competition-first storytelling.
- Six young lean athletes.
- Before-and-after framing, or any implied weight-loss narrative.
- Unrealistic or unsafe movement technique.
- Live joint-tracking overlays, skeleton graphics, HUDs, data overlays.
- AI coaching interfaces, app screens or dashboards — none of that exists yet.
- Visible third-party brands, logos or sponsor boards.
- Any text, numerals, signage or invented logos inside the frame.
- Overly glossy, over-retouched advertising photography.

**On representation.** The set as a whole must span ages, physiques, fitness
levels, gender presentations, ethnic backgrounds and physical abilities. The
per-image specifications below distribute that deliberately. Two rules govern
all of it:

1. **No tokenism.** The older subject, the larger-bodied subject and the
   disabled subject each get a *hero* frame — same dignity, same competence,
   same scale and centrality as anybody else. None of them is a background
   extra in somebody else's picture.
2. **No stereotyping by assignment.** The strength image is deliberately a
   woman with a powerful, larger build. The mobility image is deliberately an
   older man. Do not reassign these to the obvious pairing.

---

## 3. The set at a glance

| # | Working title | Page | Coverage goal |
| --- | --- | --- | --- |
| 01 | Kitchen-table start | Home | Beginning or returning |
| 02 | The long way round | The Index | Endurance / cardiovascular |
| 03 | The carry | How It Works | Strength and carrying |
| 04 | Finding the range | Improve | Mobility, coordination, balance + adaptive |
| 05 | The Saturday group | For Gyms | Varied small group, partner gym |
| 06 | Somewhere in the middle | Challenges | Events as optional |

Two pages deliberately get **no** photograph:

- **Membership** — its visual weight is the three tier cards. A photograph
  above them competes with the only thing that page needs to communicate.
- **About** — already carries five founder portraits. A sixth face would
  dilute them.

---

## 4. Component facts the specifications are built on

Every dimension below was measured from the live site at 100% browser zoom,
not estimated.

Images render through `src/components/shared/Photograph.jsx`:

```jsx
<Photograph
  file="…jpg"  alt="…"
  ratio="aspect-[3/2] sm:aspect-[2/1] lg:aspect-[21/9]"
  position="62% 50%"        /* the crop anchor */
  width={2400} height={1350} /* intrinsic, reserves the box, prevents CLS */
  grade="none"               /* these images are already warm — see below */
/>
```

`object-fit: cover` crops to fill the box, anchored by `position`. So a 16:9
source in a 21:9 box loses the **top and bottom**; the same source in a 3:2 box
loses the **sides**. That is why every specification below states what must
survive both.

**Deliver `grade="none"`.** The current three photographs are cool stock warmed
by a CSS filter. These are warm at source, and warming them again would make
them muddy.

### Measured render sizes

| Slot | 1440px | 1280px | 1024px | 768px | 375px | 320px |
| --- | --- | --- | --- | --- | --- | --- |
| **A** portrait beside copy | 570×713 | 540×674 | 418×523 | 704×880 | 327×409 | 272×340 |
| **B** banner in column | 1280×549 | 1216×521 | 960×411 | 704×352 | 327×218 | 272×181 |
| **C** full-bleed banner | 1440×558 | 1280×549 | 1024×439 | 768×432 | 375×281 | 320×240 |

Note slot A is **widest at 768px** (704px), not at 1440px, because the layout
stacks there and the image goes full width.

### Two shapes only

**Portrait slot (A)** — `aspect-[4/5]` at every breakpoint.
- Native source aspect: between **3:4 (0.75)** and **4:5 (0.8)**.
- Minimum source: **1600 × 2000 px**. Preferred 1800 × 2250.
- A 3:4 source in a 4:5 box keeps 94% of its height. Very little is lost.

**Banner slots (B, C)** — `aspect-[3/2] sm:aspect-[2/1] lg:aspect-[21/9]`.
- Native source aspect: **16:9 (1.778)**, which sits between the 3:2 mobile
  crop and the 21:9 desktop crop so both have material to work with.
- Minimum source: **2400 × 1350 px** for B, **2800 × 1575 px** for C (C runs
  edge to edge, so it has to cover wide desktops).
- At 21:9 the box keeps the **middle 76% of the height**.
- At 3:2 the box keeps the **middle 84% of the width**.
- Therefore: **the subject must sit inside the central 84% horizontally and
  the central 76% vertically**, measured from the crop anchor. Anything
  outside that band will be gone at one breakpoint or another.

---

## 5. The six images

---

### 01 — "Kitchen-table start"

| Field | Specification |
| --- | --- |
| **Filename** | `uhi-01-starting-out.jpg` |
| **Page** | Home (`/`) |
| **Section** | `TrainYourWaySection` — "You don't need to change how you train" |
| **Replaces** | `why-enter-lifestyle.jpg` |
| **Slot** | A — portrait, right-hand column beside the copy |

**Why an image is needed here.** This section carries the single most important
inclusion message on the site. The copy says you don't have to change anything
to get an Index; the picture has to answer the unspoken question, *is this for
someone like me?* If it shows an athlete, the copy is contradicted before it is
read.

**Message it supports.** Start where you are. No gym required, no event
required, no particular body required.

| | |
| --- | --- |
| **Age** | 55–65 |
| **Physique** | Larger-bodied, soft-bodied, not conventionally athletic. Visibly a normal person who has decided to move. This is the image where a bigger body gets the hero frame. |
| **Gender presentation** | Woman |
| **Ethnicity** | White British |
| **Visible ability** | No visible impairment |
| **Activity** | Walking briskly uphill on a gravel or grass path, mid-stride, one hand adjusting a jacket zip. Everyday clothing that happens to work for exercise — not a matched kit. |
| **Technique** | Upright posture, relaxed shoulders, natural arm swing. Nothing that looks coached or corrected. |
| **Environment** | Outdoors, early morning, open parkland or a coast path. Pale sky, warm low sun, dry ground. |
| **Lighting** | Natural, low golden sun from behind-left, soft fill on the face. No hard shadow across the eyes. |
| **Camera** | Eye level, slightly below to give her stature. ~50mm feel. Shallow but not creamy depth of field. |
| **Subject in frame** | Centred horizontally, head at roughly 22% from the top. Full head, shoulders and torso to mid-thigh. |
| **Negative space** | Sky or open path to her left, clean and uncluttered. |
| **Desktop crop** | 4:5, 570×713 at 1440px |
| **Mobile crop** | 4:5, 327×409 at 375px — same shape, so no crop change |
| **Crop anchor** | `position="50% 26%"` |
| **Aspect ratio** | Native 3:4, displayed 4:5 |
| **Minimum source** | 1600 × 2000 px |
| **Must remain visible at every breakpoint** | Her face and expression, and enough torso to read her build honestly. Do not crop her body out of the frame — her size is the point, not something to hide. |
| **Alt-text meaning** | A woman in her late fifties walking briskly uphill on a coast path in early morning light. (Final wording written when the file exists.) |
| **Must not contain** | Gym equipment, a race number, a finish line, other people, branded clothing, any sense of struggle or distress. She is capable and unremarkable, which is the point. |

---

### 02 — "The long way round"

| Field | Specification |
| --- | --- |
| **Filename** | `uhi-02-endurance.jpg` |
| **Page** | The Index (`/the-index`) |
| **Section** | `EvidenceSection` — "The more we know, the richer it gets", between the heading and the five evidence cards |
| **Replaces** | Nothing — new placement |
| **Slot** | B — banner within the content column |

**Why an image is needed here.** The Index is the longest page on the site and
the only one carrying no photograph. This section is about the many kinds of
result that can feed a score, and it is where a reader is most likely to drift.
A picture of ordinary endurance, done alone, breaks the page and restates the
point.

**Message it supports.** Your Index is built from what you already do. A run on
a Tuesday counts.

| | |
| --- | --- |
| **Age** | 30–40 |
| **Physique** | Lean and strong through the upper body, as a daily wheelchair athlete genuinely is. Not a marathon-elite build. |
| **Gender presentation** | Man |
| **Ethnicity** | Black British |
| **Visible ability** | **Wheelchair user, in a day chair rather than a racing chair.** Pushing on a path as ordinary training, not as a competition. This is a hero frame: he is the subject, centred, capable, and the composition treats him exactly as it treats every other subject in the set. |
| **Activity** | Pushing along a tree-lined tarmac path at pace, both hands on the handrims mid-stroke, looking ahead down the path. |
| **Technique** | Correct push mechanics — hands contacting the rim around the top of the stroke, elbows tracking naturally, trunk stable and upright. Get this right; a wrong push looks wrong to anyone who uses a chair. |
| **Environment** | A park path or riverside route, autumn, warm dry leaves at the edges, pale concrete or tarmac. |
| **Lighting** | Overcast-bright or dappled sun through trees. Even, warm, no harsh contrast. |
| **Camera** | Slightly ahead and to the side, at his eye level — **not** looking down at him. ~35mm feel, a touch of motion in the wheels. |
| **Subject in frame** | Right of centre, facing into the open path on the left. Head at ~35% from the top so it survives the 21:9 crop. |
| **Negative space** | Open path to the left, roughly the left third clear. |
| **Desktop crop** | 21:9, 1280×549 at 1440px |
| **Mobile crop** | 3:2, 327×218 at 375px |
| **Crop anchor** | `position="62% 42%"` |
| **Aspect ratio** | Native 16:9, displayed 3:2 → 2:1 → 21:9 |
| **Minimum source** | 2400 × 1350 px |
| **Must remain visible at every breakpoint** | His head, shoulders and both hands on the handrims. The chair must read clearly as a chair at 320px wide. |
| **Alt-text meaning** | A man pushing his wheelchair at pace along a tree-lined park path. (Final wording written when the file exists.) |
| **Must not contain** | A racing chair or track, a race number, a medical or clinical setting, anyone pushing him, a helper, a pitying or inspirational framing, sponsor boards. |

---

### 03 — "The carry"

| Field | Specification |
| --- | --- |
| **Filename** | `uhi-03-strength-carry.jpg` |
| **Page** | How It Works (`/how-it-works`) |
| **Section** | `ExerciseLibrarySection` — between the heading and the four-column exercise library |
| **Replaces** | `hero-athlete-primary.jpg` |
| **Slot** | B — banner within the content column |

**Why an image is needed here.** The library lists twenty named movements. The
image directly above it should be one of them, so the list reads as a real
catalogue of real things rather than an abstraction. A **farmers carry** is the
right choice: it is in the library, and it is one of only four movements whose
area mapping the site is allowed to state.

**Message it supports.** These are recognised movements, performed to a
standard, and they are the raw material of your Index.

| | |
| --- | --- |
| **Age** | 45–55 |
| **Physique** | Powerfully built and genuinely large — broad shoulders, strong legs, a body that carries weight well. Explicitly counter-stereotypical casting: the strength image is a big woman, and she is unmistakably the strongest person in this set. |
| **Gender presentation** | Woman |
| **Ethnicity** | South Asian British |
| **Visible ability** | No visible impairment |
| **Activity** | A farmers carry. Walking a loaded carry across an open floor, one heavy dumbbell or kettlebell in each hand, mid-stride, jaw set, eyes up. |
| **Technique** | This must be correct: tall spine, ribs down, shoulders packed back and slightly depressed, arms hanging straight, weights not resting on the thighs, gaze level and forward. No shrugging, no side-bend, no rounded upper back. |
| **Environment** | A bright, plain training space. Pale concrete or warm timber floor, white or cream walls, daylight through large industrial windows. Minimal equipment in shot. |
| **Lighting** | Large soft daylight from the left. Warm, clean, no moody pools of darkness. |
| **Camera** | Eye level, three-quarter front, ~50mm feel. She is walking slightly toward camera. |
| **Subject in frame** | Left of centre, walking into the open space on the right. Head at ~30% from the top. |
| **Negative space** | Clean floor and wall to the right. |
| **Desktop crop** | 21:9, 1280×549 at 1440px |
| **Mobile crop** | 3:2, 327×218 at 375px |
| **Crop anchor** | `position="42% 46%"` |
| **Aspect ratio** | Native 16:9, displayed 3:2 → 2:1 → 21:9 |
| **Minimum source** | 2400 × 1350 px |
| **Must remain visible at every breakpoint** | Her head and both loaded hands. The load must be legible as a load. |
| **Must not contain** | A dark gym, chalk clouds, a barbell platform with an audience, gritted-teeth agony, visible brand marks on the weights, any lifting belt worn for show. |
| **Alt-text meaning** | A woman carrying a heavy dumbbell in each hand across a bright training floor. (Final wording written when the file exists.) |

---

### 04 — "Finding the range"

| Field | Specification |
| --- | --- |
| **Filename** | `uhi-04-mobility-coaching.jpg` |
| **Page** | Improve (`/improve`) |
| **Section** | `CoachingSection` — portrait beside "Knowing how to improve is the valuable part" |
| **Replaces** | Nothing — new placement |
| **Slot** | A — portrait beside copy |

**Why an image is needed here.** Improve is the page most at risk of feeling
abstract: five cards, four of them tagged "in development". A photograph of a
real coaching moment grounds it, and it is the natural home for the mobility,
coordination and balance side of the eight areas, which no other image covers.

**Message it supports.** Understand your profile, then work on the thing that
will actually move it. Coaching is a person, not an interface.

| | |
| --- | --- |
| **Age** | Subject 65–75; coach 30–40 |
| **Physique** | Subject: slim, wiry, slightly stooped with age but moving well. Coach: average, unremarkable. |
| **Gender presentation** | Subject: man. Coach: woman. |
| **Ethnicity** | Subject: East Asian British. Coach: mixed heritage. |
| **Visible ability** | Subject has limited shoulder range — the reason for the session. Nothing dramatic; the kind of restriction most people over 65 have. |
| **Activity** | A shoulder mobility assessment. He is reaching one arm overhead against a wall; she is beside him, one hand lightly indicating where the movement stops, both of them looking at the arm rather than at each other. A genuine working moment. |
| **Technique** | Correct: back flat to the wall, ribs down, arm rising in the scapular plane. The restriction should be visible and honest — the arm stops short, and that is fine. |
| **Environment** | A bright, calm studio corner. Cream wall, pale timber floor, daylight from a window out of frame. |
| **Lighting** | Soft, even daylight. Warm neutral. No spotlight. |
| **Camera** | Eye level, ~50mm feel, observational — as if the photographer is not part of the session. |
| **Subject in frame** | He is centred; she enters from the right edge, partially framed. Heads in the upper third. |
| **Negative space** | Plain wall above and to the left. |
| **Desktop crop** | 4:5, 570×713 at 1440px |
| **Mobile crop** | 4:5, 327×409 at 375px |
| **Crop anchor** | `position="46% 30%"` |
| **Aspect ratio** | Native 3:4, displayed 4:5 |
| **Minimum source** | 1600 × 2000 px |
| **Must remain visible at every breakpoint** | His face, his raised arm and its end range, and her hand. The interaction is the picture. |
| **Alt-text meaning** | A coach assessing an older man's overhead shoulder range against a studio wall. (Final wording written when the file exists.) |
| **Must not contain** | A clipboard, a tablet, an app screen, any on-screen data, a clinical or physiotherapy setting, a wall chart, joint-tracking graphics of any kind. Video analysis is not a shipped feature and must not be implied. |

---

### 05 — "The Saturday group"

| Field | Specification |
| --- | --- |
| **Filename** | `uhi-05-partner-gym-group.jpg` |
| **Page** | For Gyms (`/for-gyms`) |
| **Section** | `GymBenefitsSection` — between "What members would be able to do" and the seven benefit cards |
| **Replaces** | Nothing — new placement |
| **Slot** | B — banner within the content column |

**Why an image is needed here.** For Gyms is the only page arguing for a
setting rather than an idea, and it currently has no photograph at all. It also
carries the whole partner-gym proposition. One picture of a real mixed group in
a real gym does more than the two prose columns above it.

**Message it supports.** A partner gym is where an estimate becomes a verified
score — supervised, supported, and open to whoever walks in.

| | |
| --- | --- |
| **Age** | Genuinely mixed, 20s through 70s, in one frame |
| **Physique** | Deliberately varied: at least one visibly larger body, one very slight, one muscular, one average. No two people the same shape. |
| **Gender presentation** | Mixed, roughly balanced, including at least one androgynous presentation |
| **Ethnicity** | Genuinely mixed — Black, South Asian, East Asian, White, Middle Eastern. Not one token face at the edge of a white group. |
| **Visible ability** | One member is a below-knee amputee using a running blade or everyday prosthesis, **participating in the same activity as everyone else, positioned centrally, not at the edge of the frame**. |
| **Activity** | Five or six members mid-session in a group assessment — some resetting between efforts, one mid-movement, a coach crouched beside someone talking them through a rep. Loose, real, slightly untidy. |
| **Technique** | Whatever movement is shown must be performed correctly. Prefer something simple and unambiguous — a step-up, a goblet squat, a carry. |
| **Environment** | A bright independent gym. Pale concrete floor, cream or warm-grey walls, big windows, timber and matt black equipment. Not a chain gym, not a dark performance box. |
| **Lighting** | Daylight-dominant, warm, even across the group. |
| **Camera** | Eye level, ~35mm feel, wide enough to hold the group without distortion at the edges. |
| **Subject in frame** | Group spread across the middle two-thirds. The amputee member near the centre. No single hero — this is the one image where the group is the subject. |
| **Negative space** | Floor in the lower third, wall and window light above. |
| **Desktop crop** | 21:9, 1280×549 at 1440px |
| **Mobile crop** | 3:2, 327×218 at 375px |
| **Crop anchor** | `position="50% 48%"` |
| **Aspect ratio** | Native 16:9, displayed 3:2 → 2:1 → 21:9 |
| **Minimum source** | 2400 × 1350 px |
| **Must remain visible at every breakpoint** | At least four people including the amputee member. At 320px the frame keeps the central 84% of the width — do not place anyone essential near the edges. |
| **Alt-text meaning** | A mixed group of gym members of different ages and body types working through an assessment with a coach. (Final wording written when the file exists.) |
| **Must not contain** | Branded gym signage, a leaderboard screen, numbered bibs, anyone excluded or watching from the sidelines, the amputee member positioned as the subject *of* the group rather than a member of it. |

---

### 06 — "Somewhere in the middle"

| Field | Specification |
| --- | --- |
| **Filename** | `uhi-06-challenge-optional.jpg` |
| **Page** | Challenges (`/challenges`) |
| **Section** | `ChallengeBreakSection` — full-bleed break between the positioning and the format |
| **Replaces** | `challenge-fatigue-moment.jpg` |
| **Slot** | C — full-bleed banner |

**Why an image is needed here.** The two sections either side are both
explanation and run together without a break. More importantly, this page has
to make events feel optional while still making them look worth doing — which
is a job for a picture, not a sentence.

**Message it supports.** An event is one way to test yourself. It is not what
UHI is, and it is not a competition you have to win.

| | |
| --- | --- |
| **Age** | 25–35 foreground, others visibly older and younger around her |
| **Physique** | Average, everyday. Someone who trains a bit. |
| **Gender presentation** | Woman |
| **Ethnicity** | Middle Eastern / North African |
| **Visible ability** | No visible impairment in the foreground subject; the surrounding participants should include visible variety |
| **Activity** | Mid-event, mid-pack. Working through a station or a stretch of running, other participants around her at different paces, nobody sprinting for a line. Half-smiling, or focused — enjoying it. |
| **Technique** | Sound and unremarkable. Whatever movement is visible, it is done properly. |
| **Environment** | An outdoor or daylit indoor event space. Warm neutral surfaces, plain barriers, no branding, no crowd stands. |
| **Lighting** | Natural daylight, bright, warm. Deliberately the opposite of the dark, smoky image it replaces. |
| **Camera** | Eye level, ~35mm feel, in among the participants rather than shooting from the side of a course. |
| **Subject in frame** | Right of centre. Head at ~34% from the top. Other participants readable but soft behind her. |
| **Negative space** | Open ground and light to the left. |
| **Desktop crop** | 21:9, 1440×558 at 1440px — full viewport width, so wider on large monitors |
| **Mobile crop** | 4:3, 375×281 at 375px |
| **Crop anchor** | `position="60% 42%"` |
| **Aspect ratio** | Native 16:9, displayed 4:3 → 16:9 → 21:9 |
| **Minimum source** | 2800 × 1575 px (runs edge to edge, so it must cover wide monitors) |
| **Must remain visible at every breakpoint** | Her face and upper body, and enough of the people around her to read this as an event rather than a solo session. |
| **Alt-text meaning** | A participant working through a fitness event among others at a range of paces. (Final wording written when the file exists.) |
| **Must not contain** | A podium, a medal, a finish tape, a winner, a leaderboard, a race clock, a numbered bib with legible digits, spectator stands, sponsor branding, exhaustion or collapse. |

---

## 6. Coverage check

| Coverage goal | Covered by |
| --- | --- |
| Someone beginning or returning | 01 |
| Strength or carrying | 03 |
| Endurance or cardiovascular | 02 |
| Mobility, coordination or balance | 04 |
| Adaptive fitness | 02 (hero frame) and 05 (within the group) |
| Varied small group, partner gym | 05 |
| Challenge presented as optional | 06 |

| Dimension | Spread across the set |
| --- | --- |
| Age | 20s (05), 25–35 (06), 30–40 (02, 04 coach), 45–55 (03), 55–65 (01), 65–75 (04), 70s (05) |
| Physique | Larger (01, 05), powerful and large (03), lean upper-body (02), slight and older (04), deliberately varied (05) |
| Gender presentation | Women 01, 03, 06; men 02, 04; mixed and androgynous 05 |
| Ethnicity | White (01), Black (02), South Asian (03), East Asian (04), mixed heritage (04), Middle Eastern / North African (06), genuinely mixed group (05) |
| Physical ability | Wheelchair user (02), age-related restriction (04), amputee (05), no visible impairment (01, 03, 06) |
| Setting | Outdoors (01, 02, 06), studio (04), gym (03, 05) |
| Alone vs together | Alone (01, 02, 03), pair (04), group (05, 06) |

Adaptive athletes appear in two of six images, one of them a hero frame — enough
that disability reads as ordinary in this set rather than as a single gesture.

---

## 7. Delivery

- **Format:** JPEG, quality ~85, sRGB, no embedded colour profile beyond sRGB.
- **Naming:** exactly the filenames above.
- **Sizes:** at least the minimum stated per image. Larger is fine; the files
  are re-encoded to the shipped size on the way in.
- **No text, watermarks, logos or signatures anywhere in the frame.**
- Do not pre-apply a warm filter. These are shot warm; the site's own grade
  will be switched off for them (`grade="none"`).

### What happens on this side when they arrive

1. Files re-encoded to the shipped width and dropped into
   `public/images/marketing/`.
2. `<Photograph>` calls updated with the anchors and intrinsic dimensions
   above, plus `grade="none"`.
3. Real alt text written against the actual frames — the descriptions above are
   *meanings* to aim at, not final copy, and alt text for an image nobody has
   seen would be a guess.
4. Three new sections built for placements 02, 04 and 05 (The Index, Improve,
   For Gyms), which have no image slot today. **No layout has been changed in
   advance** — building a slot for an image that does not exist would leave
   empty boxes on a live site.
5. Crops re-measured at 1440, 1280, 1024, 768, 375 and 320px, and the anchors
   corrected against the real frames.

## 8. Still open

- **`hero-athlete-primary.jpg` and `why-enter-lifestyle.jpg`** are replaced by
  03 and 01. They stay in the repository until the replacements land.
- **`movement-analysis-still.jpg`** stays unused. It is lime-saturated and it
  depicts live joint tracking, which is not a shipped feature. Nothing in this
  brief replaces it, because nothing should.
- **`converge-left.png` / `converge-right.png`** remain with the archived
  pinned scene.
- Whether the set should eventually extend to a seventh image for Membership is
  Ken's call. This brief says no, on the grounds that the tier cards are the
  page.
