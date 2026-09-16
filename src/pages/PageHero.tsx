import type React from "react"

type PageHeroProps = { eyebrow: string; title: string; intro: string }

export default function PageHero({ eyebrow, title, intro }: PageHeroProps): React.JSX.Element {
  return <section className="bg-fde-charcoal px-6 pb-16 pt-40 text-white sm:px-10 sm:pb-24"><div className="mx-auto max-w-6xl"><span className="text-xs font-bold uppercase tracking-[0.3em] text-fde-orange">{eyebrow}</span><h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-none tracking-tight sm:text-7xl">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">{intro}</p></div></section>
}
