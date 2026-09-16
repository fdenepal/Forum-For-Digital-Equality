import { useInView } from '@/hooks/useInView'

const stories = [
  {
    category: 'FIELD STORY',
    title: 'A classroom beyond connectivity',
    excerpt:
      "For students in Nepal's rural hill districts, getting online is only the first step. What happens when a school gets internet access but teachers and students lack the skills to use it?",
    photo: 'https://images.unsplash.com/photo-1763735134834-d309278c97c9?w=900&h=600&fit=crop&auto=format',
    alt: 'Children with colourful powder walking along a dirt road in Nepal',
    isHero: true,
  },
  {
    category: 'DIGITAL SAFETY',
    title: 'Learning to be safe online',
    excerpt:
      "Young people in Nepal are increasingly active online — but many lack the knowledge to navigate digital risks. FDE's school programs are changing that.",
    photo: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=700&h=480&fit=crop&auto=format',
    alt: 'Person using a laptop computer',
    isHero: false,
  },
  {
    category: 'DIGITAL LITERACY',
    title: 'From connectivity to capability',
    excerpt:
      'Access to technology is only meaningful if people know how to use it. In Chitwan, FDE is helping communities make the leap from access to genuine participation.',
    photo: 'https://images.unsplash.com/photo-1763735135959-1860b46ac667?w=700&h=480&fit=crop&auto=format',
    alt: 'Children walking on a rocky, wooded hillside in Nepal',
    isHero: false,
  },
  {
    category: 'RESEARCH',
    title: 'Digital literacy in rural Nepal',
    excerpt:
      "A new FDE report examines the state of digital literacy in Nepal's rural districts — and what it will take to build a genuinely inclusive digital society.",
    photo: 'https://images.unsplash.com/photo-1545309451-2369945f85a1?w=700&h=480&fit=crop&auto=format',
    alt: 'Nepal landscape — representing the context of FDE research',
    isHero: false,
  },
]

function HeroStory({ story }: { story: (typeof stories)[0] }) {
  const [ref, inView] = useInView(0.08)
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-up ${inView ? 'visible' : ''} lg:border-r border-fde-light-gray group cursor-pointer`}
      style={{ paddingRight: 'clamp(0rem, 3vw, 3rem)', paddingBottom: 'clamp(2rem, 4vw, 4rem)', paddingTop: 'clamp(2rem, 3vw, 3rem)' }}
    >
      <div className="img-zoom overflow-hidden mb-7" style={{ aspectRatio: '3/2' }}>
        <img src={story.photo} alt={story.alt} className="w-full h-full object-cover" />
      </div>
      <span className="block text-fde-orange text-[0.65rem] font-600 tracking-[0.3em] uppercase mb-4">
        {story.category}
      </span>
      <h3
        className="font-800 text-fde-charcoal leading-[1.1] tracking-[-0.02em] mb-5 group-hover:text-fde-orange transition-colors"
        style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.5rem)' }}
      >
        {story.title}
      </h3>
      <p className="text-fde-charcoal/55 font-300 leading-[1.8] text-base mb-6 max-w-[480px]">
        {story.excerpt}
      </p>
      <a href="#stories" className="link-underline text-[0.8rem] font-600 text-fde-charcoal hover:text-fde-orange transition-colors">
        Read story →
      </a>
    </article>
  )
}

function SideStory({ story, index }: { story: (typeof stories)[0]; index: number }) {
  const [ref, inView] = useInView(0.1)
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-up delay-${index + 1} ${inView ? 'visible' : ''} flex gap-5 border-b border-fde-light-gray last:border-0 group cursor-pointer`}
      style={{ padding: 'clamp(1.5rem, 2.5vw, 2.5rem) 0 clamp(1.5rem, 2.5vw, 2.5rem) clamp(1rem, 2.5vw, 2.5rem)' }}
    >
      <div className="img-zoom shrink-0 w-24 h-24 lg:w-28 lg:h-28 overflow-hidden bg-fde-light-gray">
        <img src={story.photo} alt={story.alt} className="w-full h-full object-cover" />
      </div>
      <div>
        <span className="block text-fde-orange text-[0.62rem] font-600 tracking-[0.25em] uppercase mb-2">
          {story.category}
        </span>
        <h3 className="font-700 text-fde-charcoal leading-[1.25] mb-2 group-hover:text-fde-orange transition-colors text-[0.95rem]">
          {story.title}
        </h3>
        <a href="#stories" className="text-[0.75rem] font-400 text-fde-charcoal/40 hover:text-fde-orange transition-colors">
          Read →
        </a>
      </div>
    </article>
  )
}

export default function StoriesSection() {
  const [headRef, headInView] = useInView(0.15)

  const heroStories = stories.filter((s) => s.isHero)
  const sideStories = stories.filter((s) => !s.isHero)

  return (
    <section id="stories" className="section-space bg-fde-off-white">
      <div className="container-wide">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="mb-12 lg:mb-16 flex items-end justify-between flex-wrap gap-5">
          <div>
            <span className={`fade-up ${headInView ? 'visible' : ''} block text-fde-orange text-[0.68rem] font-600 tracking-[0.35em] uppercase mb-5`}>
              Stories
            </span>
            <h2
              className={`fade-up delay-1 ${headInView ? 'visible' : ''} font-800 text-fde-charcoal leading-[1.0] tracking-[-0.03em]`}
              style={{ fontSize: 'clamp(2.4rem, 4vw, 5.5rem)' }}
            >
              Stories from digital Nepal
            </h2>
          </div>
          <a
            className={`fade-up delay-2 ${headInView ? 'visible' : ''} link-underline text-[0.8rem] font-600 text-fde-charcoal hover:text-fde-orange transition-colors self-end`}
            href="#stories"
          >
            All stories →
          </a>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-0 border-t border-fde-light-gray">
          {heroStories.map((story) => (
            <HeroStory key={story.title} story={story} />
          ))}
          <div>
            {sideStories.map((story, i) => (
              <SideStory key={story.title} story={story} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
