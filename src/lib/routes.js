/* The site's eight pages, in the order the menu shows them and in the order the
   "next page" band walks a visitor through them.

   Everything page-level reads from here: the header nav, the closing next-page
   bands, each page's <PageHeader>, the 404 page's index, and each page's
   document title and meta description. Adding or reordering a page is a change
   to this file alone — plus `uhi_app_routes()` in
   wordpress-theme/functions.php, or the page is served with a 404 header.

   The running order is the argument the site makes, in sequence: what the
   Index is, what feeds it, how you improve it, how you get it, where you can
   get it validated, what else the ecosystem offers, and who is building it. */

export const routes = [
  {
    path: "/",
    label: "Home",
    /* One-liner, used on the next-page bands and the 404 index. */
    blurb: "One score out of 1,000 for your all-round fitness.",
    title: "Ultimate Human Index — How Fit Are You, Really?",
    description:
      "The Ultimate Human Index measures your all-round physical fitness as one score out of 1,000, built from the exercise, training and events you already do.",
  },
  {
    path: "/the-index",
    label: "The Index",
    blurb: "The eight areas of fitness, and the score they add up to.",
    eyebrow: "Your Score",
    /* Heading is deliberately not the nav label: the page speaks to the reader,
       the menu stays short. */
    heading: "Your Ultimate Human Index",
    lead: "One score out of 1,000, and the eight-part profile underneath it that tells you where it comes from.",
    title: "The Index — Eight Areas of Fitness, One Score | Ultimate Human Index",
    description:
      "How the Ultimate Human Index works: eight areas of fitness, one score out of 1,000, a personal profile of strengths and opportunities, and the difference between UHI Estimated and UHI Verified.",
  },
  {
    path: "/how-it-works",
    label: "How It Works",
    blurb: "The Capability Framework, the exercise library and the movement standards.",
    eyebrow: "Capability Framework",
    heading: "However You Train, It Counts",
    lead: "The recognised exercises, tests and events that build your Index — and the movement standards that keep them comparable.",
    title: "How It Works — The UHI Capability Framework | Ultimate Human Index",
    description:
      "The UHI Capability Framework maps recognised exercises, tests and fitness events to eight areas of fitness, each with a consistent UHI Movement Standard.",
  },
  {
    path: "/improve",
    label: "Improve",
    blurb: "Turning the score into a plan for what to do next.",
    eyebrow: "Coaching",
    heading: "Your Index Becomes Your Coach",
    lead: "Knowing your score is interesting. Knowing how to improve it is what changes your training.",
    title: "Improve — Personalised Coaching and Insight | Ultimate Human Index",
    description:
      "Read your fitness profile, find your biggest improvement opportunities and get personalised guidance on what to work on next, with movement and technique analysis in development.",
  },
  {
    path: "/membership",
    label: "Membership",
    blurb: "UHI Start, UHI Improve and UHI Pro — and the two ways in.",
    eyebrow: "Membership",
    heading: "Build Your Index. Then Keep Improving It.",
    lead: "Subscribe directly, or access UHI through a participating gym. Three levels, so you choose how far you want to take it.",
    title: "Membership — UHI Start, Improve and Pro | Ultimate Human Index",
    description:
      "Three membership levels — UHI Start, UHI Improve and UHI Pro — plus the two ways to access the Ultimate Human Index: subscribe directly, or join through a participating gym.",
  },
  {
    path: "/for-gyms",
    label: "For Gyms",
    blurb: "Supported assessments, validated results and coaching, in your gym.",
    eyebrow: "Partner Gyms",
    heading: "UHI in Your Gym",
    lead: "A shared measure of fitness your members can build, understand and improve — with your coaches alongside them.",
    title: "For Gyms — Become a UHI Partner Gym | Ultimate Human Index",
    description:
      "How the Ultimate Human Index is being designed to work in partner gyms: supported assessments, validated results, shared movement standards and coaching built around each member's profile.",
  },
  {
    path: "/challenges",
    label: "Challenges",
    blurb: "Events and challenges — one way to test your Index, not the only way.",
    eyebrow: "Challenges & Events",
    heading: "Challenges and Events",
    lead: "A way to test yourself, add evidence to your Index and compete if you want to. Never a requirement.",
    title: "Challenges and Events — Test Your Index | Ultimate Human Index",
    description:
      "UHI Challenges and fitness events are one way to test yourself and add verified results to your Ultimate Human Index. You never have to enter one to have an Index.",
  },
  {
    path: "/about",
    label: "About",
    blurb: "Who is building this, and what is still being developed.",
    eyebrow: "The Team",
    heading: "About Ultimate Human",
    lead: "The people building the Index, why it exists, and what is still in development.",
    title: "About — The People Building UHI | Ultimate Human Index",
    description:
      "The team behind the Ultimate Human Index, why one measure of all-round fitness matters, and an honest account of what is still being developed.",
  },
];

export const routesByPath = Object.fromEntries(routes.map((r) => [r.path, r]));

/* The top menu.

   Eight items in one flat row was too many to read at a glance, and it also
   implied that all eight are equally important. This groups them into five
   choices, each group opening a short submenu that includes its own landing
   page — the structure Ken asked for after comparing UHI with Deadly Dozen,
   HYROX and Flat Out.

   `paths` on a group is the set of routes that should light the group up as
   current. A group's own page is the first entry in `items`, so a visitor can
   always reach it from the menu rather than having to guess that the group
   heading is itself a link. */
export const nav = [
  { label: "Home", path: "/" },
  {
    label: "The Index",
    path: "/the-index",
    items: ["/the-index", "/how-it-works", "/improve"],
  },
  {
    label: "Membership",
    path: "/membership",
    items: ["/membership", "/for-gyms"],
  },
  { label: "Challenges", path: "/challenges" },
  { label: "About", path: "/about" },
];

/* The pre-rebrand URLs, every one of which is out in the wild — shared, linked
   and indexed. Each maps to the page that now carries its subject, and App.jsx
   turns each into a permanent client-side redirect.

   The event-first pages (/challenge, /compete) both land on /challenges, which
   is where that material now lives. Keep these entries and their counterparts
   in `uhi_app_routes()` for as long as the old links are worth catching. */
export const legacyPathRedirects = {
  "/personal-index": "/the-index",
  "/personal-coach": "/improve",
  "/subscribe": "/membership",
  "/challenge": "/challenges",
  "/compete": "/challenges",
};

/* Older still: anchors from the days when the whole site was one document.
   Read once, on first load at the root. */
export const legacyHashTargets = {
  "#journey": "/improve",
  "#format": "/how-it-works",
  "#score": "/the-index",
  "#coaching": "/improve",
  "#membership": "/membership",
  "#signup": "/membership",
  "#challenge": "/challenges",
  "#uhci": "/the-index",
  "#categories": "/challenges",
};
