import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { RegisterButton } from "@/components/shared/RegisterButton";

function HeroPatternBackground({ heroRef, reducedMotion }) {
  const gridRef = useRef(null);
  const measureRef = useRef(null);
  const hatchRef = useRef(null);
  const glowRef = useRef(null);

  /* Cursor-reactive parallax — layers shift by different amounts for depth.
     Written straight to the DOM (rAF-throttled) so there are zero re-renders. */
  useEffect(() => {
    if (reducedMotion) return;
    let frame = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      frame = 0;
      if (gridRef.current) gridRef.current.style.transform = `translate3d(${tx * 8}px, ${ty * 8}px, 0)`;
      if (measureRef.current) measureRef.current.style.transform = `translate3d(${tx * 20}px, ${ty * 20}px, 0)`;
      if (hatchRef.current) hatchRef.current.style.transform = `translate3d(${tx * 36}px, ${ty * 36}px, 0)`;
      if (glowRef.current) {
        glowRef.current.style.background =
          `radial-gradient(ellipse 60% 55% at ${78 + tx * 12}% ${18 + ty * 12}%, rgba(163,230,53,0.30) 0%, transparent 64%),` +
          `radial-gradient(ellipse 50% 45% at ${20 + tx * 8}% ${90 + ty * 8}%, rgba(163,230,53,0.16) 0%, transparent 66%)`;
      }
    };
    const onMove = (e) => {
      // -0.5 … 0.5 relative to the viewport
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  /* Scroll-linked drift — the pattern glides as you scroll through the hero. */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const measureY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const hatchY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const patternFade = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <div
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Base tone */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(165deg, #16240d 0%, #0b1010 45%, #0d1420 100%)" }}
      />

      {/* Fine technical grid */}
      <motion.div className="absolute inset-0" style={{ y: reducedMotion ? 0 : gridY, opacity: patternFade }}>
        <div
          ref={gridRef}
          className="absolute inset-[-10%] will-change-transform"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0 1px, transparent 1px 48px)," +
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0 1px, transparent 1px 48px)",
          }}
        />
      </motion.div>

      {/* Heavier lime measure-lines every 240px */}
      <motion.div className="absolute inset-0" style={{ y: reducedMotion ? 0 : measureY, opacity: patternFade }}>
        <div
          ref={measureRef}
          className="absolute inset-[-10%] will-change-transform"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(163,230,53,0.05) 0 1px, transparent 1px 240px)," +
              "repeating-linear-gradient(90deg, rgba(163,230,53,0.05) 0 1px, transparent 1px 240px)",
          }}
        />
      </motion.div>

      {/* Drifting diagonal hatch */}
      <motion.div className="absolute inset-0" style={{ y: reducedMotion ? 0 : hatchY, opacity: patternFade }}>
        <div
          ref={hatchRef}
          className="uh-pattern-hatch absolute inset-[-40%] will-change-transform"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(163,230,53,0.018) 0 2px, transparent 2px 16px)",
          }}
        />
      </motion.div>

      {/* Lime glow bloom — follows the cursor */}
      <div
        ref={glowRef}
        className="absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 78% 18%, rgba(163,230,53,0.30) 0%, transparent 64%)," +
            "radial-gradient(ellipse 50% 45% at 20% 90%, rgba(163,230,53,0.16) 0%, transparent 66%)",
        }}
      />

      {/* Corner measure ticks — technical framing */}
      {[
        "left-8 top-24 border-l border-t",
        "right-8 top-24 border-r border-t",
        "left-8 bottom-10 border-b border-l",
        "right-8 bottom-10 border-b border-r",
      ].map((pos) => (
        <div key={pos} className={`absolute hidden h-10 w-10 border-lime-400/10 md:block ${pos}`} />
      ))}

      {/* UH watermark — floor right */}
      <div
        className="absolute"
        style={{
          bottom: "6%",
          right: "4%",
          width: "clamp(200px, 26vw, 380px)",
          opacity: 0.06,
          filter: "grayscale(1) brightness(4) blur(0.5px)",
        }}
      >
        <img src="/images/logo.png" alt="" className="w-full" />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();

  /* Headline glow — grey-to-white metallic gradient brightens as the user scrolls */
  const { scrollY } = useScroll();
  const headlineGlow = useTransform(scrollY, [0, 320], [0, 1]);
  const headlineBackground = useTransform(
    headlineGlow,
    [0, 1],
    [
      "linear-gradient(170deg, #ffffff 0%, #e0e0e0 30%, #a0a0a0 65%, #707070 100%)",
      "linear-gradient(170deg, #ffffff 0%, #ffffff 30%, #ffffff 65%, #ffffff 100%)",
    ]
  );
  const headlineFilter = useTransform(
    headlineGlow,
    [0, 1],
    [
      "drop-shadow(0 0 0px rgba(255,255,255,0)) drop-shadow(0 0 0px rgba(163,230,53,0))",
      "drop-shadow(0 0 10px rgba(255,255,255,0.65)) drop-shadow(0 0 26px rgba(163,230,53,0.4))",
    ]
  );

  return (
    <section
      ref={heroRef}
      className="uh-hero-overlay relative flex min-h-[92vh] items-center overflow-hidden bg-[#050505]"
    >
      {/* Hero athlete photo removed at Ken's request (27 Jul) — replaced with a
          branded theme pattern (technical measurement grid + lime accents).
          The asset is still at /images/marketing/hero-athlete-primary.jpg if we
          want to reinstate it. */}
      <HeroPatternBackground heroRef={heroRef} reducedMotion={reducedMotion} />

      <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 pb-28 pt-10 md:pb-32 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-3 border border-lime-400/25 bg-lime-400/[0.06] px-4 py-2.5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
            <span
              className="text-[11.5px] font-bold uppercase tracking-[0.26em] text-lime-400"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Founding Athlete Waitlist Now Open
            </span>
          </div>

          {/* Headline — centred, with a lime rule instead of the old left bar */}
          <div className="relative w-full">
            <div className="mx-auto mb-7 h-px w-24 bg-gradient-to-r from-transparent via-lime-400/70 to-transparent" />
            {/* No hard break: at this length a fixed one leaves a ragged edge at
                most widths, so the line count is left to `text-wrap: balance`. */}
            <motion.h1
              className="mx-auto max-w-5xl text-metallic uppercase leading-none tracking-tight"
              style={{
                fontSize: "clamp(1.7rem, 3.2vw, 3.4rem)",
                lineHeight: 1.08,
                textWrap: "balance",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                backgroundImage: reducedMotion ? undefined : headlineBackground,
                filter: reducedMotion ? undefined : headlineFilter,
              }}
            >
              Ultimate Human Index is a complete fitness challenge for every body,
              every age and every starting point.
            </motion.h1>

            {/* Positioning copy — Ken, 1 Aug */}
            <p className="mx-auto mt-7 max-w-2xl text-[18px] leading-8 text-neutral-300">
              You don't have to be an elite athlete to take part. You simply need to be
              ready to challenge yourself.
            </p>

            {/* Slogan — indented to sit flush with headline text */}
            <p
              className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400/75"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Measure. Train. Compete. Evolve.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <RegisterButton />
            <Link
              to="/challenge"
              className="inline-flex items-center justify-center border border-white/22 bg-black/35 px-7 py-4 text-[15px] font-bold uppercase tracking-[0.15em] text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/[0.07] hover:border-white/38"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Explore the Challenge
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
