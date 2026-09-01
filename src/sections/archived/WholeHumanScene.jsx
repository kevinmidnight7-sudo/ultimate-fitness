import { motion, useReducedMotion, useTransform } from "framer-motion";

import StickyScene from "@/components/motion/StickyScene";

export default function WholeHumanScene() {
  return (
    <StickyScene heightVh={165} className="relative bg-[#050505]">
      {(progress) => <WholeHumanContent progress={progress} />}
    </StickyScene>
  );
}

function WholeHumanContent({ progress }) {
  const reduced = useReducedMotion();

  // Scrubbed timeline — all transform/opacity, compositor-friendly.
  const bgScale = useTransform(progress, [0, 1], [1.06, 1.22]);
  const bgOpacity = useTransform(progress, [0, 0.3, 0.8, 1], [0.1, 0.26, 0.26, 0.1]);
  const titleScale = useTransform(progress, [0, 0.5], [0.8, 1]);
  const titleY = useTransform(progress, [0, 0.5], [40, 0]);
  const titleOpacity = useTransform(progress, [0, 0.14, 0.86, 1], [0, 1, 1, 0]);
  const subOpacity = useTransform(progress, [0.14, 0.32, 0.86, 1], [0, 1, 1, 0]);
  const subY = useTransform(progress, [0.22, 0.52], [22, 0]);
  // AirPods-style side rules that converge on the text as it forms.
  const leftX = useTransform(progress, [0.1, 0.5], [-120, 0]);
  const rightX = useTransform(progress, [0.1, 0.5], [120, 0]);
  const ruleOpacity = useTransform(progress, [0.1, 0.4, 0.75, 0.96], [0, 1, 1, 0]);

  const Title = (
    <>
      Measure the
      <br />
      Whole Human.
    </>
  );

  if (reduced) {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden px-6">
        <div className="relative z-10 text-center">
          <h2 className="text-5xl uppercase tracking-tight text-white md:text-7xl">{Title}</h2>
          <p
            className="mt-5 text-base font-bold uppercase tracking-[0.3em] text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ten capabilities. One score.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full items-center justify-center overflow-hidden px-6"
      style={{ background: "linear-gradient(165deg, #0d130a 0%, #060708 50%, #0a0c10 100%)" }}
    >
      {/* Backdrop that slowly zooms across the scene */}
      <motion.img
        src="/images/uh-hero-arena-floor-no-text-2400x1400.jpg"
        alt=""
        aria-hidden="true"
        style={{ scale: bgScale, opacity: bgOpacity, willChange: "transform" }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, rgba(5,5,5,0.65) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h2
          style={{ scale: titleScale, y: titleY, opacity: titleOpacity, willChange: "transform" }}
          className="text-metallic text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          {Title}
        </motion.h2>

        {/* Converging lime rules + sub-line */}
        <motion.div style={{ opacity: subOpacity, y: subY }} className="mt-7 flex items-center gap-4">
          <motion.div style={{ x: leftX, opacity: ruleOpacity }} className="h-px w-10 bg-lime-400/70" />
          <p
            className="text-[16px] font-bold uppercase tracking-[0.34em] text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ten Capabilities. One Score.
          </p>
          <motion.div style={{ x: rightX, opacity: ruleOpacity }} className="h-px w-10 bg-lime-400/70" />
        </motion.div>
      </div>
    </div>
  );
}
