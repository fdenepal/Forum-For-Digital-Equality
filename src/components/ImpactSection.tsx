import { useEffect } from 'react'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'

const impacts = [
  { value: 5000, suffix: '+', label: 'People Trained', note: 'Through digital literacy programs' },
  { value: 50, suffix: '+', label: 'Schools & Institutions', note: 'Reached through FDE programs' },
  { value: 12, suffix: '', label: 'Digital Literacy Programs', note: 'Designed and delivered' },
  { value: 25, suffix: '+', label: 'Communities Engaged', note: 'Across Nepal' },
  { value: 15, suffix: '+', label: 'Research & Policy', note: 'Reports and interventions' },
]

function ImpactStat({ item, started }: { item: (typeof impacts)[0]; started: boolean }) {
  const count = useCountUp(item.value, 2600, started)
  return (
    <div className="text-center py-10 lg:py-12 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0">
      <div className="flex items-end justify-center gap-0.5 mb-3">
        <span
          className="font-800 text-white leading-none tracking-[-0.04em]"
          style={{ fontSize: 'clamp(2.8rem, 4.5vw, 5.5rem)' }}
        >
          {count.toLocaleString()}
        </span>
        <span
          className="font-800 text-fde-orange leading-none mb-1"
          style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3rem)' }}
        >
          {item.suffix}
        </span>
      </div>
      <p className="text-white/90 font-700 text-[0.72rem] tracking-[0.2em] uppercase mb-1">
        {item.label}
      </p>
      <p className="text-white/35 font-300 text-[0.78rem]">
        {item.note}
      </p>
    </div>
  )
}

export default function ImpactSection() {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      id="our-impact"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-space-sm bg-fde-charcoal"
    >
      <div className="container-wide">
        <div className="mb-14 lg:mb-16">
          <span className={`fade-up ${inView ? 'visible' : ''} block text-fde-orange text-[0.68rem] font-600 tracking-[0.35em] uppercase mb-6`}>
            Our Impact
          </span>
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 items-end">
            <h2
              className={`fade-up delay-1 ${inView ? 'visible' : ''} font-800 text-white leading-[1.0] tracking-[-0.03em]`}
              style={{ fontSize: 'clamp(2.4rem, 4vw, 5.5rem)' }}
            >
              Our impact
            </h2>
            <p
              className={`fade-up delay-2 ${inView ? 'visible' : ''} text-white/45 font-300 leading-[1.8] max-w-[520px] self-end`}
              style={{ fontSize: 'clamp(1rem, 1.1vw, 1.15rem)' }}
            >
              From training programs to policy advocacy, FDE's work is reaching
              communities and changing how Nepal approaches digital equality.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`fade-up delay-3 ${inView ? 'visible' : ''} border border-white/8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5`}
        >
          {impacts.map((item, i) => (
            <ImpactStat key={item.label} item={item} started={inView} />
          ))}
        </div>

        <p className={`fade-up delay-4 ${inView ? 'visible' : ''} mt-6 text-white/25 font-300 text-[0.72rem]`}>
          * Figures are indicative. FDE continues to update impact data as programs are evaluated.
        </p>
      </div>
    </section>
  )
}
