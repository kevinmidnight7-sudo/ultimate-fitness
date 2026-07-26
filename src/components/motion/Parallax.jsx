import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/*
 * Parallax — drifts its child on the Y axis as it scrolls through the viewport.
 * Scroll-linked (not triggered): the offset is bound to scroll position, so it
 * moves continuously. Animates transform only. No-op under prefers-reduced-motion.
 *
 * Props:
 *   speed     0–1. 0 = no movement, 1 = strong drift (~±80px). Default 0.3.
 *   distance  max drift in px at speed 1 (default 80).
 *   className / style pass through to the wrapper.
 *
 * The child moves opposite to scroll for a "slower background" feel. Give the
 * wrapper overflow-hidden and slightly oversize the media so edges never show.
 */
export default function Parallax({
  speed = 0.3,
  distance = 80,
  className,
  style,
  children,
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const shift = Math.max(0, Math.min(1, speed)) * distance;
  const y = useTransform(scrollYProgress, [0, 1], [shift, -shift]);

  if (reduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={style}>
      <motion.div style={{ y, willChange: "transform" }}>{children}</motion.div>
    </div>
  );
}
