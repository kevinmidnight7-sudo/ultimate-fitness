import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion, useScroll } from "framer-motion";
import { X, Menu } from "lucide-react";

import { RegisterButtonHeader } from "@/components/shared/RegisterButton";
import SiteLogo from "@/components/shared/SiteLogo";
import { routes } from "@/lib/routes";

/* The site's only navigation.

   Eight pages is one more than the bar used to carry, and the rebrand asks for
   larger, more open typography — so the full row appears at xl and everything
   below that gets the panel. That trade is deliberate: a cramped eight-item
   row at 1024px would undo the whitespace the rest of the design is built on. */
export default function SiteHeader() {
  const { scrollY: navScrollY } = useScroll();
  const [navScrolled, setNavScrolled] = useState(false);
  const { pathname } = useLocation();
  const reduced = useReducedMotion();

  /* The panel remembers which page it was opened on rather than tracking a
     bare boolean, so it closes itself the moment the route changes — a tap on
     a menu item and a press of the browser Back button both land here, and
     neither needs an effect to sync anything. */
  const [openedAt, setOpenedAt] = useState(null);
  const mobileMenuOpen = openedAt === pathname;

  useEffect(() => {
    return navScrollY.on("change", (v) => setNavScrolled(v > 40));
  }, [navScrollY]);

  const linkClass = ({ isActive }) =>
    `text-[12px] font-bold uppercase tracking-[0.16em] no-underline transition-colors ${
      isActive ? "text-ember" : "text-ink-70 hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        navScrolled ? "border-line bg-bone/95 backdrop-blur-md" : "border-transparent bg-bone"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 sm:px-8">
        <Link to="/" className="shrink-0 no-underline">
          <SiteLogo tone="ink" className="h-8 sm:h-10" />
        </Link>

        <nav aria-label="Primary" className="hidden gap-7 xl:flex">
          {routes.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={linkClass}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <RegisterButtonHeader />
          </div>
          <button
            type="button"
            onClick={() => setOpenedAt(mobileMenuOpen ? null : pathname)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-ink transition-colors hover:border-ember hover:text-ember xl:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Primary"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-bone xl:hidden"
          >
            <div className="flex flex-col px-5 py-1 sm:px-8">
              {routes.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `border-b border-line py-4 text-[17px] font-bold uppercase tracking-[0.16em] no-underline transition-colors last:border-b-0 ${
                      isActive ? "text-ember" : "text-ink hover:text-ember"
                    }`
                  }
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {label}
                </NavLink>
              ))}
              <div className="py-5 sm:hidden">
                <RegisterButtonHeader />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
