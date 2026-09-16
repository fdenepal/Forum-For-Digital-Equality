import React from 'react'

export default function HeroSection(): React.JSX.Element {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/fde-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for top nav readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />
    </div>
  )
}