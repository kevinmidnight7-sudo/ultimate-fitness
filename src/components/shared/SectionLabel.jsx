/* The small ember eyebrow that opens most sections: a short rule, then a
   tracked-out label. `tone="ink"` lightens it for the dark contrast bands.

   No longer wrapped in <Reveal>. With at most three reveal moments per page,
   an eyebrow is never one of them — the section it introduces is. */
export default function SectionLabel({ children, tone = "light", className = "" }) {
  /* Two steps of the same ramp, on purpose: the rule is a graphic so it takes
     the brighter primary, the label is 12px text so it takes ember-deep, which
     is the step that clears AA on every light ground. Side by side they read
     as one accent with a highlight, not as two colours. */
  const colour = tone === "ink" ? "text-ember-light" : "text-ember-deep";
  const rule = tone === "ink" ? "bg-ember-light" : "bg-ember";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`h-px w-8 shrink-0 ${rule}`} />
      <p className={`type-label ${colour}`}>{children}</p>
    </div>
  );
}
