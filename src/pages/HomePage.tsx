import type React from "react"
import CTASection from "@/components/CTASection"
import DigitalDivideSection from "@/components/DigitalDivideSection"
import HeroSection from "@/components/HeroSection"
import ImpactSection from "@/components/ImpactSection"
import MissionSection from "@/components/MissionSection"
import ResearchSection from "@/components/ResearchSection"
import StoriesSection from "@/components/StoriesSection"
import VisionSection from "@/components/VisionSection"
import VolunteerCallSection from "@/components/VolunteerCallSection"
import WhatWeDoSection from "@/components/WhatWeDoSection"

export default function HomePage(): React.JSX.Element {
  return <><section className="relative h-screen"><HeroSection /></section><section className="min-h-screen bg-fde-off-white"><VolunteerCallSection /></section><MissionSection /><DigitalDivideSection /><WhatWeDoSection /><ImpactSection /><ResearchSection /><StoriesSection /><VisionSection /><CTASection /></>
}
