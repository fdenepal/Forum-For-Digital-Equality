import type React from "react"
import { Link } from "react-router-dom"

export const pillars = [
  { number: "01", title: "Digital Access & Infrastructure", text: "Affordable, reliable access designed with rural, remote, and historically excluded communities." },
  { number: "02", title: "AI & Tech Literacy", text: "Practical AI tools, community bootcamps, and digital workforce readiness for a changing economy." },
  { number: "03", title: "Open Data & Digital Freedom", text: "Privacy, open data, and digital rights that let people participate with agency and dignity." },
  { number: "04", title: "Digital Safety & Trust", text: "Anti-harassment support, online protection, and safer digital spaces for every community." },
]

export default function WhatWeDoSection(): React.JSX.Element {
  return <section className="section-space bg-white"><div className="container-wide"><div className="mb-14 grid gap-7 lg:grid-cols-2 lg:items-end"><div><span className="text-xs font-bold uppercase tracking-[0.3em] text-fde-orange">Our work</span><h2 className="mt-5 text-4xl font-extrabold leading-none tracking-tight text-fde-charcoal sm:text-6xl">Four pillars. One equitable future.</h2></div><p className="max-w-xl text-base leading-8 text-fde-charcoal/60">FDE brings access, capability, rights, and safety together—because no single intervention can close the digital divide alone.</p></div><div className="grid gap-px bg-black/10 md:grid-cols-2">{pillars.map((pillar) => <article key={pillar.number} className="bg-fde-off-white p-8 sm:p-10"><span className="text-4xl font-extrabold text-fde-orange/75">{pillar.number}</span><h3 className="mt-10 text-2xl font-bold leading-tight text-fde-charcoal">{pillar.title}</h3><p className="mt-4 max-w-md leading-7 text-fde-charcoal/60">{pillar.text}</p></article>)}</div><Link to="/what-we-do" className="mt-10 inline-block border-b border-fde-orange pb-1 text-xs font-bold uppercase tracking-widest text-fde-charcoal hover:text-fde-orange">Explore our approach →</Link></div></section>
}
