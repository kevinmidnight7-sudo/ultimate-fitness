import { Outlet } from "react-router-dom";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollToTop from "@/components/ScrollToTop";
import LegacyHashRedirect from "@/components/LegacyHashRedirect";

/* The shell every page renders into: header and footer mount once and stay put
   across navigations, so the menu never flickers and the sticky header keeps
   its scroll state. */
export default function Layout() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <ScrollToTop />
      <LegacyHashRedirect />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
