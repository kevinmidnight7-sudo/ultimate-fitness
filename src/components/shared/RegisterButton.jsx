import { ArrowRight } from "lucide-react";

import { REGISTER_URL, REGISTER_LABEL } from "@/lib/constants";

/* The site's primary call to action. Opens the Google Form in a new tab.
   size="lg" for hero/signup, "sm" for the header and tier cards. */
export function RegisterButton({ size = "lg", className = "", label = REGISTER_LABEL, shortLabel }) {
  const sizing =
    size === "sm"
      ? "px-4 py-2.5 text-[11px] tracking-[0.12em] sm:px-5 sm:text-[12px]"
      : "px-7 py-4 text-[13px] tracking-[0.14em] sm:px-9 sm:py-5 sm:text-[15px]";
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`uh-cta inline-flex max-w-full items-center justify-center gap-2 bg-lime-400 text-center font-black uppercase leading-tight text-black no-underline hover:bg-lime-300 ${sizing} ${className}`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <span className="relative z-10">
        {shortLabel ? (
          <>
            <span className="sm:hidden">{shortLabel}</span>
            <span className="hidden sm:inline">{label}</span>
          </>
        ) : (
          label
        )}
      </span>
      <ArrowRight className="relative z-10 h-4 w-4 shrink-0" />
    </a>
  );
}

/* Header variant: reads "Register Interest", and on hover drops open to
   reveal "& Provide Feedback". Absolutely-positioned drop, so expanding never
   changes the header's height. */
export function RegisterButtonHeader() {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={REGISTER_LABEL}
      className="uh-cta-header group relative block shrink-0 bg-lime-400 text-black no-underline hover:bg-lime-300"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <span className="uh-cta-sheen-wrap" aria-hidden="true" />
      <span className="relative z-10 flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-black uppercase leading-none tracking-[0.14em] sm:px-5 sm:text-[12px] sm:tracking-[0.16em]">
        Register Interest
        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
      <span className="uh-cta-drop z-10 block bg-lime-400 shadow-[0_10px_22px_rgba(0,0,0,0.35)] group-hover:bg-lime-300" aria-hidden="true">
        <span className="block border-t border-black/15 px-4 pb-2.5 pt-2 text-center text-[10.5px] font-black uppercase leading-none tracking-[0.14em] sm:px-5 sm:text-[11px]">
          &amp; Provide Feedback
        </span>
      </span>
    </a>
  );
}
