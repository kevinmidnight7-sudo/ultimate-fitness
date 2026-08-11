import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { legacyHashTargets } from "@/lib/routes";

/* The site used to be one page, so everything shared before the split points at
   an anchor on "/" — `theultimatehuman.fitness/#score` and friends. Those links
   are out in the wild and cannot be recalled, so on first load we translate a
   known legacy hash into the page that content now lives on.

   Only runs once, and only at the root: a hash arriving on any other route is a
   real in-page anchor and is left alone. `replace` keeps the dead hash out of
   the visitor's history, so Back returns to wherever they came from. */
export default function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") return;
    const target = legacyHashTargets[window.location.hash];
    if (target) navigate(target, { replace: true });
    /* First load only — deliberately not re-run on later navigations. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
