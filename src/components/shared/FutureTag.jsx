/* Marks something that is being built rather than something that exists.

   The brief is explicit that wearables, AI validation, video assessment and
   gym partnerships must not read as operational, and prose alone ("is being
   designed to") is easy to skim past. This makes the distinction visible at a
   glance wherever a list mixes the two. */
export default function FutureTag({ tone = "light", children = "In development" }) {
  const colours =
    tone === "ink"
      ? "border-ember-light/45 text-ember-light"
      : "border-ember/40 text-ember-deep";

  return (
    <span
      className={`inline-flex shrink-0 items-center border px-2.5 py-1 text-[10.5px] font-bold uppercase leading-none tracking-[0.16em] ${colours}`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {children}
    </span>
  );
}
