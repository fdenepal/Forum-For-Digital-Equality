import type React from "react"
import { Link } from "react-router-dom"

export default function VisionSection(): React.JSX.Element {
  return <section className="section-space bg-fde-orange text-white"><div className="container-wide grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><span className="text-xs font-bold uppercase tracking-[0.3em] text-white/65">Our vision</span><h2 className="mt-6 max-w-3xl text-4xl font-extrabold leading-none tracking-tight sm:text-6xl">A Nepal where everyone can participate in the digital future.</h2></div><div><p className="text-lg leading-8 text-white/80">We turn this vision into opportunity through community learning, public-interest research, and partnerships that are accountable to people.</p><Link to="/get-involved" className="mt-8 inline-block border-b border-white pb-1 text-xs font-bold uppercase tracking-widest">Build it with us →</Link></div></div></section>
}
