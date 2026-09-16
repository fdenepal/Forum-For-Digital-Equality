import type React from "react"
import DigitalDivideSection from "@/components/DigitalDivideSection"
import PageHero from "@/pages/PageHero"

const metrics = [["7", "provinces in our learning and research horizon"], ["4", "connected pillars for durable digital equality"], ["100%", "rights-centred approach to every programme"]]

export default function ImpactPage(): React.JSX.Element {
  return <><PageHero eyebrow="Our impact" title="Progress is measured in power people can use." intro="We track reach alongside the skills, safety, and agency that make digital inclusion meaningful." /><section className="section-space bg-white"><div className="container-wide grid gap-5 md:grid-cols-3">{metrics.map(([value, label]) => <article key={value} className="border-l-2 border-fde-orange px-6 py-5"><p className="text-6xl font-extrabold tracking-tight">{value}</p><p className="mt-4 max-w-xs leading-7 text-fde-charcoal/60">{label}</p></article>)}</div></section><DigitalDivideSection /></>
}
