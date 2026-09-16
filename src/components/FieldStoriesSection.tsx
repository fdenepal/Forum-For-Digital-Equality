import { useInView } from '@/hooks/useInView'

const stories = [
  {
    location: 'CHITWAN',
    title: 'Building digital literacy in communities',
    description:
      'Community workshops bringing practical digital skills to residents of Chitwan — equipping people to navigate public services, find information, and participate safely online.',
    photo: 'https://images.unsplash.com/photo-1511215579272-6192432f83bc?w=900&h=700&fit=crop&auto=format',
    alt: 'Aerial view of community on a mountain — representing rural development contexts in Nepal',
    tag: 'Community Program',
  },
  {
    location: 'ROSHI NAGARPALIKA',
    title: 'Bringing digital opportunity closer to communities',
    description:
      'A targeted initiative to expand digital access and skills in Roshi Municipality — connecting local residents to tools, services, and opportunities in the digital age.',
    photo: 'https://images.unsplash.com/photo-1731491435516-566d6d1e3141?w=900&h=700&fit=crop&auto=format',
    alt: 'A small village nestled on a mountain — representing the communities FDE reaches',
    tag: 'Local Engagement',
  },
  {
    location: 'SCHOOLS',
    title: 'Helping young people navigate the digital world',
    description:
      'School programs teaching children digital safety, critical thinking online, and practical digital skills — building the foundation for a generation of informed digital citizens.',
    photo: 'https://images.unsplash.com/photo-1759143103540-78298031a86a?w=900&h=700&fit=crop&auto=format',
    alt: 'Three young boys in a classroom setting',
    tag: 'Youth & Education',
  },
]

function StoryCard({ story, index }: { story: (typeof stories)[0]; index: number }) {
  const [ref, inView] = useInView(0.1)
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-up delay-${index + 1} ${inView ? 'visible' : ''} border-b lg:border-b-0 lg:border-r border-fde-light-gray last:border-0 group`}
      style={{ paddingBottom: 'clamp(2rem, 3vw, 3.5rem)' }}
    >
      <div className="img-zoom overflow-hidden mb-8" style={{ aspectRatio: '4/3' }}>
        <img src={story.photo} alt={story.alt} className="w-full h-full object-cover" />
      </div>
      <div style={{ paddingLeft: index > 0 ? 'clamp(1.5rem, 2.5vw, 3rem)' : '0', paddingRight: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-fde-orange text-[0.65rem] font-600 tracking-[0.3em] uppercase">
            {story.location}
          </span>
          <span className="w-3 h-px bg-fde-light-gray" />
          <span className="text-fde-charcoal/40 text-[0.65rem] font-400 tracking-[0.2em] uppercase">
            {story.tag}
          </span>
        </div>
        <h3
          className="font-700 text-fde-charcoal leading-[1.2] mb-4 group-hover:text-fde-orange transition-colors"
          style={{ fontSize: 'clamp(1.2rem, 1.6vw, 1.7rem)' }}
        >
          {story.title}
        </h3>
        <p className="text-fde-charcoal/55 font-300 text-[0.9rem] leading-[1.75] mb-6">
          {story.description}
        </p>
        <a href="#stories" className="link-underline text-[0.78rem] font-600 text-fde-charcoal hover:text-fde-orange transition-colors">
          Read more →
        </a>
      </div>
    </article>
  )
}

export default function FieldStoriesSection() {
  const [headRef, headInView] = useInView(0.15)

  return (
    <section className="section-space bg-fde-off-white">
      <div className="container-wide">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="mb-14 lg:mb-20">
          <span className={`fade-up ${headInView ? 'visible' : ''} block text-fde-orange text-[0.68rem] font-600 tracking-[0.35em] uppercase mb-6`}>
            From Ideas to Action
          </span>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 items-end">
            <h2
              className={`fade-up delay-1 ${headInView ? 'visible' : ''} font-800 text-fde-charcoal leading-[1.05] tracking-[-0.03em]`}
              style={{ fontSize: 'clamp(2.4rem, 4vw, 5.5rem)' }}
            >
              From ideas to action
            </h2>
            <p
              className={`fade-up delay-2 ${headInView ? 'visible' : ''} text-fde-charcoal/55 font-300 leading-[1.8] max-w-[500px] self-end`}
              style={{ fontSize: 'clamp(1rem, 1.1vw, 1.15rem)' }}
            >
              Digital equality becomes meaningful when it reaches people and communities.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border-t border-fde-light-gray">
          {stories.map((story, i) => (
            <StoryCard key={story.location} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
