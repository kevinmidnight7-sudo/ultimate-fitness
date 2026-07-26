import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/*
 * Reveal — fade + small translateY when the element scrolls into view.
 * Fires once, never reverses. Honours prefers-reduced-motion (renders static).
 *
 * Props:
 *   as       element/component to render (default "div")
 *   delay    seconds before the reveal starts (stagger siblings by ~0.08)
 *   y        translateY distance in px (default 24, keep <= 40)
 *   once     fire only the first time in view (default true)
 *   amount   how much must be visible to trigger (default 0.2)
 * Any other props (className, style, onClick…) pass through to the element.
 */
export default function Reveal({
  as = "div",
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  const reduced = useReducedMotion();

  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const StaticTag = as;
    return (
      <StaticTag ref={ref} {...rest}>
        {children}
      </StaticTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
