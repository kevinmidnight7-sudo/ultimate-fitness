import { Link } from "react-router-dom";

import { SITE_VERSION, CONTACT_EMAIL } from "@/lib/constants";
import { routes } from "@/lib/routes";
import SiteLogo from "@/components/shared/SiteLogo";

/* Ink ground — the one piece of chrome that stays dark, so every page has a
   definite bottom edge against the bone above it. */
export default function SiteFooter() {
  return (
    <footer className="on-ink bg-ink px-6 py-16 text-bone sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SiteLogo tone="bone" className="h-11" />
            <p className="type-lead mt-7 max-w-sm text-bone-70">
              Measure your fitness. Understand it. Improve it.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-7 inline-block break-all text-[16px] font-bold text-ember-light no-underline underline-offset-4 hover:underline"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-bone-50">
              Explore
            </p>
            <ul className="mt-5 grid list-none grid-cols-2 gap-x-6 gap-y-3 p-0">
              {routes.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-[16px] text-bone-70 no-underline transition-colors hover:text-ember-light"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-bone/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-bone-50" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            © 2026 Ultimate Human Index · theultimatehuman.fitness
          </p>
          {/* Quiet, but not invisible: at bone-50/60 this sat at 1.13:1 on the
              ink ground, which is below AA and effectively unreadable. */}
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-bone-50">
            {SITE_VERSION}
          </span>
        </div>
      </div>
    </footer>
  );
}
