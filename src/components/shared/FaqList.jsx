import { Plus } from "lucide-react";

/* Short answers to the questions a page obviously provokes.

   Built on native <details>/<summary>, which gives keyboard support, screen
   reader semantics and open/closed state for free, and adds no motion — so
   there is nothing here for prefers-reduced-motion to switch off. */
export default function FaqList({ items, className = "" }) {
  return (
    <div className={`border-t border-line ${className}`}>
      {items.map(({ q, a }) => (
        <details key={q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="type-h3 text-ink transition-colors group-hover:text-ember-deep">{q}</span>
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-line text-ember transition-transform duration-300 group-open:rotate-45">
              <Plus className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </summary>
          <p className="type-body max-w-2xl pb-7 text-ink-70">{a}</p>
        </details>
      ))}
    </div>
  );
}
