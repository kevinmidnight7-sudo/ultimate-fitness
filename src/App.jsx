import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import IndexPage from "@/pages/IndexPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import ImprovePage from "@/pages/ImprovePage";
import MembershipPage from "@/pages/MembershipPage";
import ForGymsPage from "@/pages/ForGymsPage";
import ChallengesPage from "@/pages/ChallengesPage";
import AboutPage from "@/pages/AboutPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { legacyPathRedirects } from "@/lib/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="the-index" element={<IndexPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="improve" element={<ImprovePage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="for-gyms" element={<ForGymsPage />} />
          <Route path="challenges" element={<ChallengesPage />} />
          <Route path="about" element={<AboutPage />} />

          {/* The pre-rebrand URLs, which are indexed and shared. `replace`
              keeps the dead path out of the visitor's history, so Back returns
              to wherever they came from rather than bouncing them forward
              again. WordPress serves each of these with a 200 — see
              `uhi_app_routes()` — otherwise the redirect never runs. */}
          {Object.entries(legacyPathRedirects).map(([from, to]) => (
            <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
