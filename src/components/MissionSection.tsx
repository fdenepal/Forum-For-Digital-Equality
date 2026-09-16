import { useRef, useEffect } from 'react'
import { useInView } from '@/hooks/useInView'

export default function MissionSection() {
  const [sectionRef, inView] = useInView(0.15)
  const labelRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!inView) return
    const elements = [labelRef, headRef, bodyRef]
    elements.forEach((ref, i) => {
      setTimeout(() => ref.current?.classList.add('visible'), i * 130)
    })
  }, [inView])

  return (
    <section
      id="who-we-are"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-space bg-fde-off-white"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_2.4fr] gap-12 lg:gap-20 items-start">
          {/* Left: label + rule */}
          <div ref={labelRef} className="fade-up">
            <span className="block text-fde-orange text-[0.68rem] font-600 tracking-[0.35em] uppercase mb-4">
              Our Mission
            </span>
            <div className="rule-orange" />
            <a
              href="#who-we-are"
              className="link-underline text-[0.8rem] font-500 text-fde-charcoal/50 tracking-wide hover:text-fde-orange transition-colors"
            >
              Learn more about FDE →
            </a>
          </div>

          {/* Right: editorial headline + body */}
          <div>
            <div ref={headRef} className="fade-up delay-1">
              <h2
                className="font-800 text-fde-charcoal leading-[1.05] tracking-[-0.03em] mb-10"
                style={{ fontSize: 'clamp(2.6rem, 4.5vw, 6rem)' }}
              >
                Bridging Nepal's<br />digital gap.
              </h2>
            </div>
            <div ref={bodyRef} className="fade-up delay-2">
              <p
                className="text-fde-charcoal/70 font-300 leading-[1.8] max-w-[640px]"
                style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)' }}
              >
                Forum for Digital Equality works to build a more inclusive, accessible,
                safe and rights-based digital society in Nepal through awareness, capacity
                building, research, advocacy, policy intervention and community engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
