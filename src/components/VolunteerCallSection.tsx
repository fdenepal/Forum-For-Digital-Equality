import React from 'react'

const APRIGF_NEPAL_PHOTO =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&h=1100&fit=crop&auto=format"

export default function VolunteerCallSection(): React.JSX.Element {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 overflow-hidden bg-[#FBF9F6] lg:grid-cols-2">
      
      {/* LEFT COLUMN: Content */}
      <div className="flex flex-col justify-center px-8 py-20 sm:px-12 lg:px-20 xl:px-24">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#C85227]">
          Open Call — Kathmandu
        </span>

        <h2 className="mb-6 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
          Apply to volunteer <br />
          at APrIGF.
        </h2>

        <p className="mb-10 max-w-md text-base leading-relaxed text-[#555555] sm:text-lg">
          Be part of the conversations shaping an inclusive, open and secure
          digital future for the Asia Pacific region.
        </p>

        <div className="mb-10 flex items-center gap-6 text-sm font-medium text-[#222222]">
          <div>
            <span className="font-bold">04–07 October</span>
          </div>
          <div>
            <span className="text-[#666666]">Kathmandu, Nepal</span>
          </div>
        </div>

        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSchCFLv8DSSPFEcb9u9bvvLqIBP9hLpY6l2uOpIguD9C1MQ1w/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[#D95328] px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#b8421c] hover:shadow-md"
          >
            Apply to volunteer
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: Landscape Photo */}
      <div className="relative min-h-[400px] w-full lg:min-h-screen">
        <img
          src={APRIGF_NEPAL_PHOTO}
          alt="APrIGF Kathmandu Nepal Landscape"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        
        <div className="absolute bottom-8 left-8 z-10 text-[0.65rem] font-semibold tracking-widest uppercase text-white/90 drop-shadow-md">
          Asia Pacific Internet Governance Forum
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>

    </div>
  )
}