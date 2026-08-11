/* The site's seven pages, in the order the menu shows them and in the order the
   "next page" band walks a visitor through them.

   Everything page-level reads from here: the header nav, the Overview hub grid,
   the closing next-page bands, each page's <PageHeader> and each page's
   document title and meta description. Adding or reordering a page is a change
   to this file alone. */

export const routes = [
  {
    path: "/",
    label: "Overview",
    /* One-liner, used on the Overview hub cards and the next-page bands. */
    blurb: "What the Ultimate Human Index is, and why it exists.",
    title: "Ultimate Human Index — The Fitness Challenge That Measures the Complete Athlete",
    description:
      "The Ultimate Human Index (UHI) is a fitness challenge that measures your complete capability across ten areas and gives you one personal score — with AI coaching to show you exactly where to improve.",
  },
  {
    path: "/challenge",
    label: "The Challenge",
    blurb: "The event itself — how a day of competition actually runs.",
    eyebrow: "The Event",
    heading: "The Challenge",
    lead: "Nine capabilities, a run between every one of them, and a final circuit to finish. Here is how the day actually runs.",
    title: "The Challenge — Ultimate Human Index",
    description:
      "How a day at the Ultimate Human Index runs: nine capabilities, a run between each, and a final circuit. Every discipline gets exposed somewhere.",
  },
  {
    path: "/personal-index",
    label: "Personal Index",
    blurb: "The ten pillars, and the single score they produce.",
    eyebrow: "Your Score",
    heading: "Personal Index",
    lead: "Ten pillars, measured the same way for everyone, resolved into one number you can actually train against.",
    title: "Personal Index — Ultimate Human Index",
    description:
      "Ten pillars of human capability, measured the same way for everyone and resolved into a single Ultimate Human Index score you can train against.",
  },
  {
    path: "/personal-coach",
    label: "Personal Coach",
    blurb: "Where to start, and the AI coaching that reads your movement.",
    eyebrow: "Your Path",
    heading: "Personal Coach",
    lead: "Find your starting point, then let the coaching show you exactly what to work on next.",
    title: "Personal Coach — Ultimate Human Index",
    description:
      "Start where you are: find your athlete type, preview a full assessment, and see how AI movement coaching turns your score into a training plan.",
  },
  {
    path: "/compete",
    label: "Compete",
    blurb: "Divisions, entry pricing and how to secure your place.",
    eyebrow: "Take Part",
    heading: "Compete",
    lead: "Pick the way you want to be tested, then claim a place in the first wave of events.",
    title: "Compete — Ultimate Human Index",
    description:
      "Ways to compete at the Ultimate Human Index, event entry pricing, founding athlete benefits, and how to secure your place.",
  },
  {
    path: "/subscribe",
    label: "Subscribe",
    blurb: "Platform membership — the training side, all year round.",
    eyebrow: "Membership",
    heading: "Subscribe",
    lead: "The platform side of the Index: your score, your coaching and your progress between events.",
    title: "Subscribe — Ultimate Human Index",
    description:
      "Platform membership for the Ultimate Human Index: track your score, train with AI coaching and follow your progress between events.",
  },
  {
    path: "/about",
    label: "About Us",
    blurb: "Who is building this, and what is still being finalised.",
    eyebrow: "The Team",
    heading: "About Us",
    lead: "The people building the Index, why it exists, and what is still being finalised.",
    title: "About Us — Ultimate Human Index",
    description:
      "The founders behind the Ultimate Human Index, why capability is the measure that matters, and what is still being finalised before launch.",
  },
];

export const routesByPath = Object.fromEntries(routes.map((r) => [r.path, r]));

/* The page that follows `path` in the running order, or null at the end of it. */
export function nextRoute(path) {
  const i = routes.findIndex((r) => r.path === path);
  return i >= 0 && i < routes.length - 1 ? routes[i + 1] : null;
}

/* Old single-page anchors kept working, so links already shared into the wild
   still land somewhere sensible. Read once on first load. */
export const legacyHashTargets = {
  "#journey": "/personal-coach",
  "#format": "/challenge",
  "#score": "/personal-index",
  "#coaching": "/personal-coach",
  "#membership": "/subscribe",
  "#signup": "/compete#signup",
  "#challenge": "/challenge",
  "#uhci": "/personal-index",
  "#categories": "/compete",
};
