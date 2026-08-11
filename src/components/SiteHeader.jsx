import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { X, Menu } from "lucide-react";

import { RegisterButtonHeader } from "@/components/shared/RegisterButton";
import { routes } from "@/lib/routes";

/* The site's only navigation.

   It used to be one of three: this bar, a hover-out rail of tick marks on the
   right edge, and a floating arrow that walked the page section by section.
   All three existed because a single 21,000px document is hard to move around
   in. Seven short pages are not, so the other two are gone and this is it. */
export default function SiteHeader() {
  const { scrollY: navScrollY } = useScroll();
  const [navScrolled, setNavScrolled] = useState(false);
  const { pathname } = useLocation();

  /* The panel remembers which page it was opened on rather than tracking a
     bare boolean, so it closes itself the moment the route changes — a tap on
     a menu item and a press of the browser Back button both land here, and
     neither needs an effect to sync anything. */
  const [openedAt, setOpenedAt] = useState(null);
  const mobileMenuOpen = openedAt === pathname;

  useEffect(() => {
    return navScrollY.on("change", (v) => setNavScrolled(v > 60));
  }, [navScrollY]);

  const linkClass = ({ isActive }) =>
    `text-[11.5px] font-bold uppercase tracking-[0.22em] no-underline transition-colors ${
      isActive ? "text-lime-400" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        navScrolled ? "border-white/[0.06] bg-[#050505]/95" : "border-transparent bg-[#050505]/40"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6">
        {/* Logo + separator */}
        <div className="flex min-w-0 shrink items-center gap-6">
          <Link to="/" className="shrink-0 no-underline">
            <img
              src="/images/coloured.png"
              alt="Ultimate Human Index"
              className="h-9 w-auto object-contain sm:h-11 md:h-14"
              style={{
                maxWidth: "200px",
                filter: "drop-shadow(0 1px 10px rgba(255,255,255,0.08))",
              }}
            />
          </Link>
          <div className="hidden h-6 w-px shrink-0 bg-white/[0.09] lg:block" />
        </div>

        <nav aria-label="Primary" className="hidden gap-6 lg:flex xl:gap-8">
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
          <RegisterButtonHeader />
          <button
            type="button"
            onClick={() => setOpenedAt(mobileMenuOpen ? null : pathname)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.12] text-white transition-colors hover:border-white/30 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Primary"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="uh-divide overflow-hidden bg-[#050505]/98 lg:hidden"
          >
            <div className="flex flex-col px-6 py-2">
              {routes.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `border-b border-white/[0.05] py-4 text-[16px] font-bold uppercase tracking-[0.22em] no-underline transition-colors ${
                      isActive ? "text-lime-400" : "text-neutral-300 hover:text-lime-400"
                    }`
                  }
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
