import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

/* Every route change starts at the top of the new page.

   The jump has to be explicit: the browser only restores scroll on real
   navigations, and a client-side route change leaves the old scroll offset in
   place, so a visitor clicking "Compete" from halfway down "The Challenge"
   would land halfway down Compete.

   Going to the top is always instant. `html { scroll-behavior: smooth }` is set
   globally for in-page anchors, and inherited here it would animate the whole
   old page past the viewport before settling — a long, disorienting flight on
   pages this tall. Anchored links (`/compete#signup`) do glide, because there
   the movement is the point, and that is the one place `prefers-reduced-motion`
   changes what happens. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (hash) {
      /* Let the page paint before measuring the target's position. */
      const id = window.requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({
            behavior: reducedMotion ? "instant" : "smooth",
            block: "start",
          });
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      });
      return () => window.cancelAnimationFrame(id);
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, reducedMotion]);

  return null;
}
