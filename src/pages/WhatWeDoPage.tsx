import type React from "react"
import WhatWeDoSection from "@/components/WhatWeDoSection"
import PageHero from "@/pages/PageHero"

export default function WhatWeDoPage(): React.JSX.Element {
  return <><PageHero eyebrow="What we do" title="Digital systems should work for everyone." intro="Our four connected pillars build the conditions for meaningful participation in an increasingly AI-powered world." /><WhatWeDoSection /></>
}
