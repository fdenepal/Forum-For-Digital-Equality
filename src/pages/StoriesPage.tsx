import type React from "react"
import PageHero from "@/pages/PageHero"

const stories = [
  ["Rural learning", "A community learning circle turns first-time internet access into confidence using services, information, and AI tools."],
  ["Safer spaces", "Young women map online harm and co-design safer reporting and support practices with their peers."],
  ["Public interest technology", "Local advocates use open data to ask better questions of the systems shaping their communities."],
]

export default function StoriesPage(): React.JSX.Element {
  return <><PageHero eyebrow="Stories" title="People are the experts in their own digital lives." intro="Field stories from communities building the skills, safety, and voice to participate on their terms." /><section className="section-space bg-fde-off-white"><div className="container-wide grid gap-6 lg:grid-cols-3">{stories.map(([theme, story], index) => <article key={theme} className="bg-white p-8 shadow-sm"><span className="text-xs font-bold uppercase tracking-[0.25em] text-fde-orange">Field note 0{index + 1}</span><h2 className="mt-14 text-3xl font-bold">{theme}</h2><p className="mt-5 leading-8 text-fde-charcoal/60">{story}</p><button type="button" className="mt-8 text-xs font-bold uppercase tracking-widest text-fde-orange">Read story →</button></article>)}</div></section></>
}
