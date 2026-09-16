import { useInView } from '@/hooks/useInView'

export default function PartnersSection() {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-space-sm bg-fde-off-white border-t border-fde-light-gray"
    >
      <div className="container-wide">
        <div className="max-w-[820px] mb-12">
          <span className={`fade-up ${inView ? 'visible' : ''} block text-fde-orange text-[0.68rem] font-600 tracking-[0.35em] uppercase mb-5`}>
            Partners
          </span>
          <h2
            className={`fade-up delay-1 ${inView ? 'visible' : ''} font-800 text-fde-charcoal leading-[1.05] tracking-[-0.03em] mb-6`}
            style={{ fontSize: 'clamp(2rem, 3.2vw, 4rem)' }}
          >
            Working together for digital equality
          </h2>
          <p
            className={`fade-up delay-2 ${inView ? 'visible' : ''} text-fde-charcoal/60 font-300 leading-[1.8]`}
            style={{ fontSize: 'clamp(1rem, 1.1vw, 1.15rem)' }}
          >
            Digital transformation cannot happen alone. We work with communities, schools, government,
            civil society, academia, development partners and technology stakeholders.
          </p>
        </div>

        {/* Partner logo placeholders — clean monochrome grid */}
        <div className={`fade-up delay-3 ${inView ? 'visible' : ''} grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-0 border border-fde-light-gray`}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/2] flex items-center justify-center border-b border-r border-fde-light-gray last:border-r-0 hover:bg-white transition-colors group"
            >
              <div className="flex flex-col items-center gap-1 opacity-25 group-hover:opacity-60 transition-opacity">
                <div className="w-10 h-2 bg-fde-charcoal rounded" />
                <div className="w-6 h-1 bg-fde-charcoal/60 rounded" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[0.72rem] font-400 text-fde-charcoal/35">
          * Partner logos will be displayed once partnership agreements are confirmed. Only verified FDE partners will appear.
        </p>
      </div>
    </section>
  )
}
