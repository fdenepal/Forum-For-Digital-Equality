import type React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterSection from "@/components/FooterSection"
import NavHeader from "@/components/NavHeader"
import GetInvolvedPage from "@/pages/GetInvolvedPage"
import HomePage from "@/pages/HomePage"
import ImpactPage from "@/pages/ImpactPage"
import ResearchPage from "@/pages/ResearchPage"
import StoriesPage from "@/pages/StoriesPage"
import WhatWeDoPage from "@/pages/WhatWeDoPage"
import WhoWeArePage from "@/pages/WhoWeArePage"

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <div className="min-h-full bg-fde-off-white text-fde-charcoal">
        <NavHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/our-impact" element={<ImpactPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <FooterSection />
      </div>
    </BrowserRouter>
  )
}
