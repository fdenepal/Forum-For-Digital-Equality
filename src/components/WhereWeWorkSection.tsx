import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const locations = [
  {
    id: 'kathmandu',
    name: 'Kathmandu',
    x: 52,
    y: 43,
    project: 'Digital Rights & Policy Advocacy',
    description: 'Research, policy intervention, and awareness programs based in Nepal\'s capital.',
    photo: 'https://images.unsplash.com/photo-1782875899199-e9c4a9cfbbd2?w=400&h=280&fit=crop&auto=format',
    alt: 'Busy Kathmandu street with people walking',
  },
  {
    id: 'chitwan',
    name: 'Chitwan',
    x: 44,
    y: 68,
    project: 'Community Digital Literacy',
    description: 'Digital literacy workshops reaching residents of Chitwan with practical skills and knowledge.',
    photo: 'https://images.unsplash.com/photo-1511215579272-6192432f83bc?w=400&h=280&fit=crop&auto=format',
    alt: 'Aerial view of a community on a mountainside',
  },
  {
    id: 'roshi',
    name: 'Roshi Nagarpalika',
    x: 61,
    y: 50,
    project: 'Digital Access Initiative',
    description: 'Targeted program to bring digital tools and training closer to Roshi Municipality communities.',
    photo: 'https://images.unsplash.com/photo-1731491435516-566d6d1e3141?w=400&h=280&fit=crop&auto=format',
    alt: 'A small village on a mountain slope',
  },
]

export default function WhereWeWorkSection() {
  const [active, setActive] = useState<string | null>(null)
  const [ref, inView] = useInView(0.1)

  const activeLocation = locations.find((l) => l.id === active)

  return (
    <section className="section-space bg-white">
      <div className="container-wide">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="mb-12 lg:mb-16">
          <span className={`fade-up ${inView ? 'visible' : ''} block text-fde-orange text-[0.68rem] font-600 tracking-[0.35em] uppercase mb-6`}>
            Geographic Reach
          </span>
          <h2
            className={`fade-up delay-1 ${inView ? 'visible' : ''} font-800 text-fde-charcoal leading-[1.0] tracking-[-0.03em] mb-4`}
            style={{ fontSize: 'clamp(2.4rem, 4vw, 5.5rem)' }}
          >
            Where we work
          </h2>
          <p className={`fade-up delay-2 ${inView ? 'visible' : ''} text-fde-charcoal/55 font-300 text-base leading-[1.75] max-w-[480px]`}>
            Select a location to learn more about FDE's work in that area.
          </p>
        </div>

        <div className={`fade-up delay-3 ${inView ? 'visible' : ''} grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start`}>
          {/* Stylized Nepal map */}
          <div className="relative bg-fde-off-white border border-fde-light-gray" style={{ aspectRatio: '5/2.2' }}>
            <svg
              viewBox="0 0 800 350"
              className="w-full h-full"
              aria-label="Simplified map of Nepal with work locations"
            >
              {/* Nepal outline — simplified polygon */}
              <path
                d="M 60,280 L 90,180 L 110,120 L 150,80 L 200,60 L 280,50 L 380,45 L 460,48 L 540,55 L 620,65 L 700,80 L 750,100 L 760,140 L 740,180 L 700,240 L 620,270 L 540,285 L 460,290 L 380,288 L 300,285 L 200,282 L 130,283 Z"
                fill="#F0EDE8"
                stroke="#D4CFC9"
                strokeWidth="1.5"
              />
              {/* Mountain suggestion — northern area */}
              <path
                d="M 150,80 L 200,60 L 250,50 L 300,48 L 350,45 L 400,46 L 450,48 L 500,52 L 550,58 L 620,65 L 680,75 L 750,100"
                fill="none"
                stroke="#C8C2BA"
                strokeWidth="0.8"
                opacity="0.6"
              />
              {/* Terai — southern flat area subtle shade */}
              <path
                d="M 90,260 L 200,265 L 350,268 L 500,268 L 650,260 L 700,240 L 620,270 L 540,285 L 380,288 L 200,282 L 130,283 L 60,280 L 80,260 Z"
                fill="#E8E3DC"
                opacity="0.5"
              />
              {/* River suggestions */}
              <path d="M 500,52 L 490,120 L 470,200 L 450,268" fill="none" stroke="#B0AAFF" strokeWidth="0.6" opacity="0.3"/>
              <path d="M 300,48 L 310,130 L 320,200 L 330,268" fill="none" stroke="#B0AAFF" strokeWidth="0.6" opacity="0.3"/>

              {/* Location markers */}
              {locations.map((loc) => (
                <g
                  key={loc.id}
                  transform={`translate(${(loc.x / 100) * 800}, ${(loc.y / 100) * 350})`}
                  className="cursor-pointer"
                  onClick={() => setActive(active === loc.id ? null : loc.id)}
                  role="button"
                  aria-label={`${loc.name} — click for details`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActive(active === loc.id ? null : loc.id)}
                >
                  {/* Pulse ring */}
                  {active === loc.id && (
                    <circle r="16" fill="none" stroke="#E8621A" strokeWidth="1" opacity="0.4">
                      <animate attributeName="r" values="10;22;10" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  )}
                  <circle
                    r={active === loc.id ? 8 : 6}
                    fill={active === loc.id ? '#E8621A' : '#B9470E'}
                    stroke="white"
                    strokeWidth="1.5"
                    style={{ transition: 'r 0.2s ease' }}
                  />
                  <text
                    y="20"
                    textAnchor="middle"
                    fill="#111111"
                    fontSize="9"
                    fontFamily="Manrope, sans-serif"
                    fontWeight="600"
                    opacity="0.7"
                  >
                    {loc.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Location detail panel */}
          <div className="min-h-[180px]">
            {activeLocation ? (
              <div className="fade-up visible">
                <div className="img-zoom overflow-hidden mb-5" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={activeLocation.photo}
                    alt={activeLocation.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="block text-fde-orange text-[0.65rem] font-600 tracking-[0.3em] uppercase mb-3">
                  {activeLocation.name}
                </span>
                <h3 className="font-700 text-fde-charcoal text-lg leading-tight mb-3">
                  {activeLocation.project}
                </h3>
                <p className="text-fde-charcoal/55 font-300 text-sm leading-[1.75]">
                  {activeLocation.description}
                </p>
              </div>
            ) : (
              <div className="flex flex-col justify-center h-full border border-dashed border-fde-light-gray p-8 text-center">
                <div className="w-3 h-3 bg-fde-orange rounded-full mx-auto mb-4 opacity-60" />
                <p className="text-fde-charcoal/40 font-300 text-sm">
                  Select a location on the map to explore FDE's work there.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
