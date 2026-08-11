import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";

import { RegisterButtonHeader } from "@/components/shared/RegisterButton";
import HeroSection from "@/sections/HeroSection";
import UhiIndexSection from "@/sections/UhiIndexSection";
import YourJourneyHub from "@/sections/YourJourneyHub";
import CapabilityPillarsSection from "@/sections/CapabilityPillarsSection";
import WhyDifferentSection from "@/sections/WhyDifferentSection";
import ChallengeOverviewSection from "@/sections/ChallengeOverviewSection";
import EventStructureSection from "@/sections/EventStructureSection";
import WholeHumanScene from "@/sections/WholeHumanScene";
import ScoreSection from "@/sections/ScoreSection";
import AICoachingSection from "@/sections/AICoachingSection";
import SplitFeatureScene from "@/sections/SplitFeatureScene";
import CategoriesSection from "@/sections/CategoriesSection";
import WhyEnterSection from "@/sections/WhyEnterSection";
import SubscriptionSection from "@/sections/SubscriptionSection";
import PricingSection from "@/sections/PricingSection";
import FoundersSection from "@/sections/FoundersSection";
import SignupSection from "@/sections/SignupSection";
import PreLaunchSection from "@/sections/PreLaunchSection";
import { SITE_VERSION } from "@/lib/constants";

function SectionTourButton() {
  const reducedMotion = useReducedMotion();
  const [atEnd, setAtEnd] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [busy, setBusy] = useState(false);
  const [overForm, setOverForm] = useState(false);
  const animRef = useRef(0);

  /* Hide the button while the visitor is scrolling manually, and flag the end
     of the page so the arrow can flip to "back to top". */
  useEffect(() => {
    let idle;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setAtEnd(y > max - 120);
      // Only auto-hide on genuine user scrolling, not our own animation
      if (!animRef.current) {
        setHidden(true);
        clearTimeout(idle);
        idle = setTimeout(() => setHidden(false), 700);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(idle);
    };
  }, []);

  /* Step aside when the sign-up form is on screen — the button sits bottom
     centre and would otherwise cover the submit button. */
  /* Step aside when a primary CTA or the sign-up form would sit under the
     button. A direct geometric test rather than IntersectionObserver: the
     button lives in the bottom-centre band, which rootMargin can't express. */
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const targets = document.querySelectorAll("#signup, [data-tour-avoid]");
      const bandTop = window.innerHeight - 110; // button zone height
      const bandLeft = window.innerWidth / 2 - 130;
      const bandRight = window.innerWidth / 2 + 130;
      let clash = false;
      targets.forEach((t) => {
        const r = t.getBoundingClientRect();
        if (r.bottom > bandTop && r.top < window.innerHeight && r.right > bandLeft && r.left < bandRight) {
          clash = true;
        }
      });
      setOverForm(clash);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* Eased scroll — deliberate enough to feel cinematic, but it starts moving
     immediately. easeInOutQuad is used rather than cubic: cubic's very flat
     start read as a ~700ms "nothing happening" delay on long jumps. Duration
     is capped so long jumps travel faster instead of taking longer. */
  const glideTo = (targetY) => {
    if (reducedMotion) {
      window.scrollTo({ top: targetY, behavior: "instant" });
      return;
    }
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (!distance) return;
    const duration = Math.min(1250, Math.max(750, Math.abs(distance) * 0.5));
    const startedAt = performance.now();
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    setBusy(true);
    const step = (now) => {
      const t = Math.min(1, (now - startedAt) / duration);
      // "instant" is essential: the global `scroll-behavior: smooth` would
      // otherwise re-animate every frame of our own easing and lag it badly.
      window.scrollTo({ top: startY + distance * ease(t), behavior: "instant" });
      if (t < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        animRef.current = 0;
        // Settle before re-enabling so a trailing scroll event can't hide the
        // button or let a stray press interrupt the landing.
        setTimeout(() => setBusy(false), 120);
      }
    };
    cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(step);
  };

  /* Build the beat list for the tour.
     A single stop per section isn't enough: sections taller than the viewport
     would get skipped past, and a pinned scene would land on its opening
     (blank) frame and then jump over its whole timeline. So:
       · pinned scenes get an extra beat where their animation has played in
       · tall sections are paged through so nothing is missed */
  const buildStops = () => {
    const vh = window.innerHeight;
    const maxY = document.body.scrollHeight - vh;
    const stops = [];

    for (const el of document.querySelectorAll("main section, main [data-tour-stop]")) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      const height = el.offsetHeight;
      stops.push(top);

      if (el.hasAttribute("data-tour-stop")) {
        // Pinned scene: scrollYProgress runs 0→1 across (height - vh).
        // Add the beat where the headline has flown in and is held.
        const travel = height - vh;
        if (travel > 80) stops.push(top + travel * 0.58);
      } else if (height > vh * 1.5) {
        // Tall section: prefer landing on real sub-headings so each beat shows
        // something meaningful; fall back to paging a screen at a time.
        const lastUsable = top + height - vh * 0.55;
        const anchors = [...el.querySelectorAll("h3, h4, [data-tour-beat]")]
          .map((h) => h.getBoundingClientRect().top + window.scrollY - 110)
          .filter((y) => y > top + vh * 0.6 && y < lastUsable)
          .sort((a, b) => a - b)
          .filter((y, i, arr) => i === 0 || y - arr[i - 1] > vh * 0.6);

        if (anchors.length) {
          stops.push(...anchors);
        } else {
          const stride = vh * 0.85;
          for (let y = top + stride; y < lastUsable; y += stride) stops.push(y);
        }
      }
    }

    // Sort, clamp, and drop beats that sit almost on top of each other.
    const sorted = stops
      .map(Math.round)
      .filter((y) => y >= 0 && y <= maxY)
      .sort((a, b) => a - b);
    return sorted.filter((y, i) => i === 0 || y - sorted[i - 1] > 140);
  };

  const advance = () => {
    if (busy) return; // locked while a glide is running
    const max = document.body.scrollHeight - window.innerHeight;
    if (atEnd) {
      glideTo(0);
      return;
    }
    // Ignore beats within 120px of where we already are, so the first press
    // from the very top doesn't just nudge past the sticky header.
    const next = buildStops().find((y) => y > window.scrollY + 120);
    glideTo(Math.min(next ?? max, max));
  };

  return (
    <motion.button
      type="button"
      onClick={advance}
      disabled={busy}
      aria-label={atEnd ? "Back to top" : "Go to next section"}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: hidden && !overForm ? 0.35 : 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.94 }}
      style={{ boxShadow: "0 0 22px rgba(163,230,53,0.18)" }}
      /* Steps aside to the right over the sign-up form so it never covers the
         submit button, instead of disappearing and stranding the tour. */
      className={`group fixed bottom-7 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-lime-400/40 bg-[#0a0a0a]/80 text-lime-400 backdrop-blur-md transition-all duration-500 hover:border-lime-400 hover:bg-lime-400/10 ${overForm ? "right-6 left-auto translate-x-0" : "left-1/2 -translate-x-1/2"}`}
    >
      {/* Pulsing halo */}
      {!reducedMotion && !hidden && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full border border-lime-400/50"
          animate={{ scale: [1, 1.45], opacity: [0.55, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <motion.span
        animate={reducedMotion ? {} : { y: atEnd ? [0, -3, 0] : [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        <ChevronDown className={`h-5 w-5 transition-transform ${atEnd ? "rotate-180" : ""}`} strokeWidth={2} />
      </motion.span>
    </motion.button>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SIDE QUICK NAV — hover the right edge to reveal a poppy jump menu
───────────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "Journey", href: "#journey" },
  { label: "Event", href: "#format" },
  { label: "Score", href: "#score" },
  { label: "AI Coach", href: "#coaching" },
  { label: "Membership", href: "#membership" },
  { label: "Sign Up", href: "#signup" },
];

const quickNavLinks = [
  { label: "Top", target: "top" },
  { label: "Journey", target: "journey" },
  { label: "Challenge", target: "challenge" },
  { label: "Event", target: "format" },
  { label: "Score", target: "score" },
  { label: "AI Coach", target: "coaching" },
  { label: "Compete", target: "categories" },
  { label: "Membership", target: "membership" },
  { label: "Sign Up", target: "signup" },
];

function SideQuickNav() {
  const [open, setOpen] = useState(false);

  const go = (target) => {
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.035 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 520, damping: 26 },
    },
  };

  return (
    <div
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 md:flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Collapsed hover target — stacked tick marks */}
      <div className="flex flex-col items-end justify-center gap-2.5 py-4 pl-10 pr-5">
        {!open &&
          quickNavLinks.map((l) => (
            <span
              key={l.target}
              className="block h-px w-5 bg-white/25 transition-colors"
            />
          ))}
      </div>

      {/* Expanded menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col items-end gap-1 border-r-2 border-lime-400/60 bg-gradient-to-l from-[#080808]/95 to-[#080808]/70 py-4 pl-16 pr-6 backdrop-blur-md"
          >
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="flex list-none flex-col items-end gap-1"
            >
              {quickNavLinks.map((l) => (
                <motion.li key={l.target} variants={itemVariants} className="origin-right">
                  <motion.button
                    type="button"
                    onClick={() => go(l.target)}
                    whileHover={{ scale: 1.18, x: -6, color: "#a3e635" }}
                    whileTap={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    className="block origin-right cursor-pointer whitespace-nowrap py-1 text-right text-[16px] font-bold uppercase tracking-[0.16em] text-neutral-300"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {l.label}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────────── */

export default function App() {
  const { scrollY: navScrollY } = useScroll();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    return navScrollY.on("change", (v) => setNavScrolled(v > 60));
  }, [navScrollY]);


  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <SideQuickNav />
      <SectionTourButton />

      {/* ── HEADER ── */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${navScrolled ? "border-white/[0.06] bg-[#050505]/95" : "border-transparent bg-[#050505]/40"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          {/* Logo + separator */}
          <div className="flex items-center gap-6 shrink-0">
            <a href="#" className="shrink-0 no-underline">
              <img
                src="/images/coloured.png"
                alt="Ultimate Human Index"
                className="h-11 w-auto object-contain md:h-14"
                style={{
                  maxWidth: "200px",
                  filter: "drop-shadow(0 1px 10px rgba(255,255,255,0.08))",
                }}
              />
            </a>
            <div className="hidden md:block h-6 w-px shrink-0 bg-white/[0.09]" />
          </div>

          <nav aria-label="Primary" className="hidden gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[11.5px] font-bold uppercase tracking-[0.22em] text-neutral-400 no-underline transition-colors hover:text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <RegisterButtonHeader />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center border border-white/[0.12] text-white transition-colors hover:border-white/30 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden uh-divide bg-[#050505]/98 md:hidden"
            >
              <div className="flex flex-col px-6 py-2">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-white/[0.05] py-4 text-[16px] font-bold uppercase tracking-[0.22em] text-neutral-300 no-underline transition-colors hover:text-lime-400"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>

        <HeroSection />

        <UhiIndexSection />

        <YourJourneyHub />

        <CapabilityPillarsSection />

        <WhyDifferentSection />

        <ChallengeOverviewSection />

        <EventStructureSection />

        <WholeHumanScene />

        <ScoreSection />

        <AICoachingSection />

        <SplitFeatureScene
          file="converge-right.png"
          side="right"
          eyebrow="Runners · Lifters · Fighters"
          title={<>The Complete<br />Athlete Wins.</>}
          body="Every discipline gets exposed somewhere. The most complete human — not the most specialised — takes the win."
        />

        <CategoriesSection />

        <SplitFeatureScene
          file="converge-left.png"
          side="left"
          eyebrow="Every Level of Athlete"
          title={<>Built for<br />Every Body.</>}
          body="This is built to test complete capability — not just how long you can suffer on a run."
        />

        <WhyEnterSection />

        <SubscriptionSection />

        <PricingSection />

        <FoundersSection />

        <SignupSection />

        <PreLaunchSection />
      </main>

      {/* ── FOOTER ── */}
      <footer className="uh-divide bg-[#050505] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <img
            src="/images/coloured.png"
            alt="Ultimate Human Index"
            className="h-10 w-auto object-contain"
            style={{ maxWidth: "180px", opacity: 0.32 }}
          />
          <p
            className="text-[11px] font-bold uppercase tracking-[0.42em] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Measure. Train. Compete. Evolve.
          </p>
          <p
            className="text-[14px] text-neutral-500"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            © 2026 Ultimate Human Index · theultimatehuman.fitness
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-7xl text-center">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-800"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {SITE_VERSION}
          </span>
        </div>
      </footer>
    </div>
  );
}
