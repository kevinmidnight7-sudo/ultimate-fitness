import { useState } from "react";
import { motion, useReducedMotion, useTransform } from "framer-motion";

import StickyScene from "@/components/motion/StickyScene";

function CutoutImage({ file }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="flex h-full w-[34vw] max-w-[460px] items-end justify-center"
        style={{ border: "1.5px dashed rgba(163,230,53,0.2)", background: "rgba(163,230,53,0.02)" }}
      >
        <span
          className="mb-8 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400/40"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Cut-out (transparent PNG)
          <br />
          {file}
        </span>
      </div>
    );
  }
  return (
    <img
      src={`/images/marketing/${file}`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-auto object-contain"
    />
  );
}

export default function SplitFeatureScene({ file, side = "right", eyebrow, title, body }) {
  return (
    <StickyScene heightVh={165} className="relative bg-[#050505]">
      {(progress) => (
        <SplitFeatureContent
          progress={progress}
          file={file}
          side={side}
          eyebrow={eyebrow}
          title={title}
          body={body}
        />
      )}
    </StickyScene>
  );
}

function SplitFeatureContent({ progress, file, side, eyebrow, title, body }) {
  const reduced = useReducedMotion();
  const figureRight = side === "right";

  const figureY = useTransform(progress, [0, 1], ["6%", "-6%"]);
  const figureScale = useTransform(progress, [0, 1], [1.03, 1.12]);
  // Starts part-visible so arriving on this scene shows the athlete rather
  // than an empty black frame; the headline is what animates in.
  const figureOpacity = useTransform(progress, [0, 0.14, 0.92, 1], [0.7, 1, 1, 0.85]);
  const textX = useTransform(progress, [0, 0.5], [figureRight ? -48 : 48, 0]);
  const textOpacity = useTransform(progress, [0.04, 0.2, 0.86, 1], [0, 1, 1, 0]);

  const align = figureRight ? "text-left" : "text-right";
  const Statement = (
    <>
      <p
        className="mb-4 text-[11px] font-bold uppercase tracking-[0.34em] text-lime-400"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {eyebrow}
      </p>
      <h2 className="text-metallic text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
        {title}
      </h2>
      <p className={`mt-6 max-w-md text-base leading-7 text-neutral-400 ${figureRight ? "" : "ml-auto"}`}>
        {body}
      </p>
      <div className={`mt-7 h-px w-16 bg-lime-400/70 ${figureRight ? "" : "ml-auto"}`} />
    </>
  );

  if (reduced) {
    return (
      <div className="relative flex h-full items-center overflow-hidden px-6">
        <div className={`relative z-10 mx-auto w-full max-w-7xl ${align}`}>
          <div className={`max-w-xl ${figureRight ? "" : "ml-auto"}`}>{Statement}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full items-center overflow-hidden"
      style={{
        background: figureRight
          ? "linear-gradient(100deg, #060708 0%, #090b0c 45%, #0d1408 100%)"
          : "linear-gradient(260deg, #060708 0%, #090b0c 45%, #0d1408 100%)",
      }}
    >
      {/* Spotlight behind the figure so it emerges from the dark, not pasted on it */}
      <div
        className={`pointer-events-none absolute top-0 h-full w-2/3 ${figureRight ? "right-0" : "left-0"}`}
        style={{
          background: `radial-gradient(ellipse 55% 70% at ${figureRight ? "72%" : "28%"} 45%, rgba(163,230,53,0.14) 0%, rgba(255,255,255,0.045) 35%, transparent 68%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: "linear-gradient(0deg, rgba(163,230,53,0.05) 0%, transparent 100%)" }}
      />

      {/* Big figure, cropped by the frame at the bottom so it's grounded, not floating */}
      <motion.div
        style={{ y: figureY, scale: figureScale, opacity: figureOpacity, willChange: "transform" }}
        className={`uh-img-glow pointer-events-auto absolute top-[2%] z-0 h-[126%] ${figureRight ? "right-[1vw]" : "left-[1vw]"}`}
      >
        <CutoutImage file={file} />
      </motion.div>

      {/* Scrim keeps the text crisp on the opposite side (desktop) */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background: figureRight
            ? "linear-gradient(90deg, rgba(6,7,8,0.92) 0%, rgba(6,7,8,0.6) 35%, transparent 62%)"
            : "linear-gradient(270deg, rgba(6,7,8,0.92) 0%, rgba(6,7,8,0.6) 35%, transparent 62%)",
        }}
      />
      {/* Mobile: figure and text share the column, so darken it more so text stays primary */}
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{ background: "linear-gradient(180deg, rgba(6,7,8,0.72) 0%, rgba(6,7,8,0.55) 45%, rgba(6,7,8,0.82) 100%)" }}
      />

      {/* Text stack on the opposite side to the figure */}
      <motion.div
        style={{ x: textX, opacity: textOpacity, willChange: "transform" }}
        className={`relative z-10 mx-auto w-full max-w-7xl px-6 ${align}`}
      >
        <div className={`max-w-xl ${figureRight ? "" : "ml-auto"}`}>{Statement}</div>
      </motion.div>
    </div>
  );
}
