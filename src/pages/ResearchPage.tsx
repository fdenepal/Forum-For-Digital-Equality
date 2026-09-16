import type React from "react"
import { useMemo, useState } from "react"
import { reports } from "@/components/ResearchSection"
import PageHero from "@/pages/PageHero"

export default function ResearchPage(): React.JSX.Element {
  const [query, setQuery] = useState("")
  const visibleReports = useMemo(() => reports.filter((report) => `${report.type} ${report.title} ${report.description}`.toLowerCase().includes(query.toLowerCase())), [query])
  return <><PageHero eyebrow="Research" title="Useful knowledge, open to scrutiny." intro="Policy reports and field briefs for people working toward a more inclusive, secure, and accountable digital Nepal." /><section className="section-space bg-white"><div className="container-wide"><label htmlFor="research-search" className="sr-only">Search research</label><input id="research-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search reports and briefs" className="w-full border-b-2 border-fde-charcoal bg-transparent px-0 py-4 text-xl outline-none placeholder:text-fde-charcoal/35 focus:border-fde-orange" /><div className="mt-12 grid gap-5 lg:grid-cols-3">{visibleReports.map((report) => <article key={report.title} className="border border-black/10 p-7"><span className="text-xs font-bold uppercase tracking-[0.2em] text-fde-orange">{report.type} · {report.year}</span><h2 className="mt-12 text-2xl font-bold leading-tight">{report.title}</h2><p className="mt-4 leading-7 text-fde-charcoal/60">{report.description}</p><a href={`/${report.title.toLowerCase().replaceAll(" ", "-")}.pdf`} download className="mt-8 inline-block bg-fde-charcoal px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-fde-orange">Download PDF</a></article>)}</div>{visibleReports.length === 0 && <p className="mt-10 text-fde-charcoal/60">No reports match that search.</p>}</div></section></>
}
