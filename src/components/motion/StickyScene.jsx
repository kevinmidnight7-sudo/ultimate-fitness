import { useScroll, useReducedMotion, useMotionValue } from "framer-motion";
import { useRef } from "react";

/*
 * StickyScene — a tall wrapper with a pinned (sticky) child. The extra scroll
 * distance drives a 0→1 progress MotionValue, exposed via a render prop so the
 * caller can bind scale / opacity / position to it with useTransform.
 *
 * Props:
 *   heightVh   total scene height as a multiple of viewport (default 300 = 3 screens).
 *   className  passes to the tall wrapper.
 *   children   render prop: (scrollYProgress: MotionValue) => JSX inside the sticky child.
 *
 * Uses dvh so mobile browser chrome doesn't cause jank. Under prefers-reduced-motion
 * the scene collapses to a single static screen with progress frozen at 0.
 */
export default function StickyScene({ heightVh = 300, className, children }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Stable frozen progress for reduced-motion (hooks must run unconditionally).
  const frozen = useMotionValue(0);

  if (reduced) {
    return (
      <div className={className}>
        <div className="h-[100dvh] overflow-hidden">{children(frozen)}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={{ height: `${heightVh}dvh` }}>
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {children(scrollYProgress)}
      </div>
    </div>
  );
}
