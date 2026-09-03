import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, X, Menu } from "lucide-react";

import { RegisterButtonHeader } from "@/components/shared/RegisterButton";
import SiteLogo from "@/components/shared/SiteLogo";
import { nav, routesByPath } from "@/lib/routes";

/* The site's only navigation, and the only way a visitor is expected to move
   around it.

   It used to be eight items in a flat row, plus a "next page" band at the foot
   of every page that walked people through those eight in a fixed order. Ken
   asked for the opposite after looking at Deadly Dozen, HYROX and Flat Out: a
   short top menu with submenus, and no sideways or sequential controls
   anywhere. The band is gone (archived) and this is what replaced it.

   Five top-level choices. Two of them open a submenu whose first entry is the
   group's own landing page, so nothing is reachable only by guessing that a
   group heading is also a link. */

/* A group in the desktop bar: a button that toggles its submenu.

   Deliberately a <button>, not a hover target. Hover opens it as a
   convenience, but the button is what makes it work with a keyboard and on
   touch — where there is no hover at all and a hover-only menu is simply a
   dead item. */
function NavGroup({ group, open, onOpen, onClose, isCurrent }) {
  const ref = useRef(null);

  /* Close when focus leaves the group entirely. relatedTarget is the element
     focus is moving TO, so this fires on Tab out but not on Tab between the
     button and its own items. */
  const handleBlur = (e) => {
    if (!ref.current?.contains(e.relatedTarget)) onClose();
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={handleBlur}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`nav-${group.label.replace(/\s+/g, "-").toLowerCase()}`}
        onClick={() => (open ? onClose() : onOpen())}
        className={`flex items-center gap-1.5 py-2 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors ${
          isCurrent ? "text-ember-deep" : "text-ink-70 hover:text-ink"
        }`}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {group.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`nav-${group.label.replace(/\s+/g, "-").toLowerCase()}`}
        hidden={!open}
        className="absolute left-0 top-full z-50 min-w-[15rem] border border-line bg-cream shadow-[0_16px_40px_rgba(22,19,15,0.10)]"
      >
        <ul className="m-0 list-none p-0">
          {group.items.map((path) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={onClose}
                className={({ isActive }) =>
                  `block border-b border-line px-5 py-3.5 text-[14px] font-bold uppercase tracking-[0.12em] no-underline transition-colors last:border-b-0 ${
                    isActive ? "text-ember-deep" : "text-ink hover:bg-ember-tint hover:text-ember-deep"
                  }`
                }
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {routesByPath[path].label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const { pathname } = useLocation();

  /* Both menus remember the page they were opened on rather than tracking a
     bare boolean, so they close themselves the moment the route changes — a
     tap on an item and a press of the browser Back button both land here, and
     neither needs an effect to sync anything. */
  const [panelOpenedAt, setPanelOpenedAt] = useState(null);
  const panelOpen = panelOpenedAt === pathname;
  /* Same trick for the submenu: it stores the page it was opened on, so a
     route change closes it without an effect that fights React. */
  const [openGroup, setOpenGroup] = useState(null);
  const activeGroup = openGroup?.path === pathname ? openGroup.label : null;

  /* Escape closes an open submenu wherever focus happens to be. */
  useEffect(() => {
    if (!activeGroup) return;
    const onKey = (e) => e.key === "Escape" && setOpenGroup(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeGroup]);

  const topLinkClass = ({ isActive }) =>
    `py-2 text-[13px] font-bold uppercase tracking-[0.14em] no-underline transition-colors ${
      isActive ? "text-ember-deep" : "text-ink-70 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ember focus:px-4 focus:py-2 focus:text-[13px] focus:font-bold focus:uppercase focus:tracking-[0.14em] focus:text-cream focus:no-underline"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link to="/" className="shrink-0 no-underline" aria-label="Ultimate Human Index — home">
          <SiteLogo tone="ink" className="h-8 sm:h-10" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.items ? (
              <NavGroup
                key={item.label}
                group={item}
                open={activeGroup === item.label}
                onOpen={() => setOpenGroup({ label: item.label, path: pathname })}
                onClose={() => setOpenGroup(null)}
                isCurrent={item.items.includes(pathname)}
              />
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={topLinkClass}
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <RegisterButtonHeader />
          </div>
          <button
            type="button"
            onClick={() => setPanelOpenedAt(panelOpen ? null : pathname)}
            aria-label={panelOpen ? "Close menu" : "Open menu"}
            aria-expanded={panelOpen}
            aria-controls="menu-panel"
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-ink transition-colors hover:border-ember hover:text-ember lg:hidden"
          >
            {panelOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Small-screen panel.

          Every page is listed, grouped under its heading, with nothing to
          expand. Nested accordions on a menu of eight links would be more
          taps to reach the same place, and on a phone a wrong guess costs a
          page load. */}
      <div
        id="menu-panel"
        hidden={!panelOpen}
        className="border-t border-line bg-bone lg:hidden"
      >
        <nav aria-label="All pages" className="px-5 py-6 sm:px-8">
          {nav.map((item) => (
            <div key={item.label} className="mb-6 last:mb-0">
              {item.items ? (
                <>
                  <p className="type-label mb-1 text-ink-50">{item.label}</p>
                  <ul className="m-0 list-none p-0">
                    {item.items.map((path) => (
                      <li key={path}>
                        <NavLink
                          to={path}
                          className={({ isActive }) =>
                            `block py-2.5 text-[19px] font-bold uppercase tracking-[0.12em] no-underline transition-colors ${
                              isActive ? "text-ember-deep" : "text-ink"
                            }`
                          }
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {routesByPath[path].label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `block py-2.5 text-[19px] font-bold uppercase tracking-[0.12em] no-underline transition-colors ${
                      isActive ? "text-ember-deep" : "text-ink"
                    }`
                  }
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}

          <div className="mt-8 sm:hidden">
            <RegisterButtonHeader />
          </div>
        </nav>
      </div>
    </header>
  );
}
