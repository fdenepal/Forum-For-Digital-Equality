import type React from "react"
import { Link } from "react-router-dom"

export const reports = [
  { type: "Research report", title: "State of AI & Digital Literacy", description: "A practical view of AI awareness, skills, and access across Nepal’s communities.", year: "2026" },
  { type: "Policy brief", title: "Inclusive Digital Policy Brief", description: "Actions for public institutions to build rights-centred, accessible digital services.", year: "2026" },
  { type: "Field report", title: "Rural Women Digital Safety Report", description: "Community evidence on online harm, safety practices, and support systems.", year: "2026" },
]

export default function ResearchSection(): React.JSX.Element {
  return <section className="section-space bg-white"><div className="container-wide"><div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><span className="text-xs font-bold uppercase tracking-[0.3em] text-fde-orange">Knowledge & research</span><h2 className="mt-5 text-4xl font-extrabold leading-none tracking-tight sm:text-6xl">Evidence for action.</h2></div><p className="max-w-lg leading-7 text-fde-charcoal/60">Research and policy tools that keep people—not technology—at the centre of Nepal’s digital future.</p></div><div className="grid gap-5 lg:grid-cols-3">{reports.map((report, index) => <article key={report.title} className="flex min-h-72 flex-col border border-black/10 p-7"><span className="text-xs font-bold uppercase tracking-[0.2em] text-fde-orange">{report.type} · {report.year}</span><span className="mt-8 text-5xl font-extrabold text-fde-charcoal/10">0{index + 1}</span><h3 className="mt-auto text-2xl font-bold leading-tight">{report.title}</h3><p className="mt-3 text-sm leading-6 text-fde-charcoal/60">{report.description}</p></article>)}</div><Link to="/research" className="mt-10 inline-block bg-fde-charcoal px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-fde-orange">Browse research</Link></div></section>
}
