import { ArrowRight } from "lucide-react";

import { REGISTER_URL, REGISTER_LABEL } from "@/lib/constants";

/* The site's primary call to action. Opens the Google Form in a new tab.

   Solid ember with cream text (4.9:1). The old lime version breathed, glowed
   and swept a sheen across itself on a loop; the rebrand asks for a calmer,
   more premium feel, so this lifts on hover and does nothing otherwise.

   size="lg" for hero and closing bands, "sm" for the header and tier cards.
   tone="ink" flips it to a light button for use on the dark contrast bands. */
export function RegisterButton({
  size = "lg",
  tone = "light",
  label = REGISTER_LABEL,
  className = "",
}) {
  const sizing =
    size === "sm"
      ? "px-5 py-3 text-[12px] tracking-[0.14em]"
      : "px-7 py-4 text-[14px] tracking-[0.14em] sm:px-9 sm:py-5 sm:text-[16px]";

  const colours =
    tone === "ink"
      ? "bg-bone text-ink hover:bg-cream"
      : "bg-ember text-cream hover:bg-ember-deep";

  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`uh-cta inline-flex max-w-full items-center justify-center gap-2.5 text-center font-bold uppercase leading-tight no-underline ${sizing} ${colours} ${className}`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {label}
      <ArrowRight className="h-4 w-4 shrink-0" />
    </a>
  );
}

/* Header variant. Deliberately plain: the header is present on every page and
   an animated button there was the loudest thing on the old site. */
export function RegisterButtonHeader() {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="uh-cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap bg-ember px-4 py-2.5 text-[11.5px] font-bold uppercase leading-none tracking-[0.12em] text-cream no-underline hover:bg-ember-deep sm:px-5 sm:text-[12.5px] sm:tracking-[0.14em]"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {REGISTER_LABEL}
      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
    </a>
  );
}
