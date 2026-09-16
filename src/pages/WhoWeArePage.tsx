import type React from "react"
import MissionSection from "@/components/MissionSection"
import VisionSection from "@/components/VisionSection"
import PageHero from "@/pages/PageHero"

const team = ["Community-led practice", "Research and policy", "Technology for public good"]

export default function WhoWeArePage(): React.JSX.Element {
  return <><PageHero eyebrow="Who we are" title="Digital equality is a shared public project." intro="Forum for Digital Equality is a Nepal-based collective working so that technology expands people’s choices, rights, and opportunities." /><MissionSection /><section className="section-space bg-white"><div className="container-wide"><span className="text-xs font-bold uppercase tracking-[0.3em] text-fde-orange">How we work</span><div className="mt-8 grid gap-5 md:grid-cols-3">{team.map((area, index) => <article key={area} className="border-t-2 border-fde-orange bg-fde-off-white p-7"><span className="text-sm font-bold text-fde-orange">0{index + 1}</span><h2 className="mt-12 text-2xl font-bold">{area}</h2><p className="mt-3 leading-7 text-fde-charcoal/60">Our multidisciplinary team listens first, shares power with communities, and translates insight into practical change.</p></article>)}</div></div></section><VisionSection /></>
}
