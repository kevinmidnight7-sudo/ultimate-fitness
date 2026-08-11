import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import OverviewPage from "@/pages/OverviewPage";
import ChallengePage from "@/pages/ChallengePage";
import PersonalIndexPage from "@/pages/PersonalIndexPage";
import PersonalCoachPage from "@/pages/PersonalCoachPage";
import CompetePage from "@/pages/CompetePage";
import SubscribePage from "@/pages/SubscribePage";
import AboutPage from "@/pages/AboutPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<OverviewPage />} />
          <Route path="challenge" element={<ChallengePage />} />
          <Route path="personal-index" element={<PersonalIndexPage />} />
          <Route path="personal-coach" element={<PersonalCoachPage />} />
          <Route path="compete" element={<CompetePage />} />
          <Route path="subscribe" element={<SubscribePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
