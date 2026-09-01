import { useInView, animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/*
 * CountUp — animates a number from `from` to `to` the first time it scrolls
 * into view. Respects prefers-reduced-motion (shows the final value at once).
 *
 * Props:
 *   to        target number (required)
 *   from      start number (default 0)
 *   duration  seconds (default 1.4)
 *   decimals  fixed decimal places (default 0)
 *   prefix    string before the number (e.g. "£")
 *   suffix    string after the number (e.g. "km", "/100")
 *   className passes to the span
 */
export default function CountUp({
  to,
  from = 0,
  duration = 1.4,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  const [display, setDisplay] = useState(from);

  /* Under prefers-reduced-motion the final value IS the value: it is read
     straight off `to` rather than counted up to. Waiting for the element to
     scroll into view would otherwise leave the number sitting at its starting
     figure — reading "0" where the score should be, including for anything
     walking the page linearly rather than scrolling it. */
  const value = reduced ? to : display;

  useEffect(() => {
    if (reduced || !inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduced, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
