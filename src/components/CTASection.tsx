import { useInView } from '@/hooks/useInView'

export default function CTASection() {
  const [ref, inView] = useInView(0.12)

  return (
    <section
      id="get-involved"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-space bg-fde-charcoal"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: headline */}
          <div>
            <h2
              className={`fade-up ${inView ? 'visible' : ''} font-800 text-white leading-[1.0] tracking-[-0.04em]`}
              style={{ fontSize: 'clamp(3rem, 5.5vw, 7rem)' }}
            >
              The future<br />is digital.
            </h2>
            <h2
              className={`fade-up delay-1 ${inView ? 'visible' : ''} font-800 text-fde-orange leading-[1.0] tracking-[-0.04em]`}
              style={{ fontSize: 'clamp(3rem, 5.5vw, 7rem)' }}
            >
              Let's make<br />it equal.
            </h2>
          </div>

          {/* Right: CTAs */}
          <div className={`fade-up delay-2 ${inView ? 'visible' : ''} flex flex-col gap-4 max-w-[400px]`}>
            <a
              href="#contact"
              className="flex items-center justify-between px-7 py-5 bg-fde-orange text-white text-[0.82rem] font-700 tracking-[0.08em] uppercase hover:bg-fde-orange-dark transition-colors group"
            >
              Partner With Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
                <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="flex items-center justify-between px-7 py-5 border border-white/20 text-white text-[0.82rem] font-700 tracking-[0.08em] uppercase hover:border-white/50 transition-colors group"
            >
              Support Our Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
                <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#our-impact"
              className="flex items-center justify-between px-7 py-5 border border-white/20 text-white/60 text-[0.82rem] font-700 tracking-[0.08em] uppercase hover:border-white/40 hover:text-white transition-colors group"
            >
              Explore Our Impact
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
                <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
