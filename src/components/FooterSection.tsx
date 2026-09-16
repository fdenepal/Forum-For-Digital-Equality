import fdeLogo from '@/imports/FDE_Logo_White.png'

const columns = [
  {
    heading: 'WHO WE ARE',
    links: ['About FDE', 'Our Team', 'Our Approach', 'Partners'],
  },
  {
    heading: 'WHAT WE DO',
    links: ['Digital Access', 'Digital Literacy', 'Digital Freedom', 'Digital Safety'],
  },
  {
    heading: 'KNOWLEDGE',
    links: ['Research', 'Reports', 'Publications', 'Stories'],
  },
  {
    heading: 'GET INVOLVED',
    links: ['Partner With Us', 'Support Our Work', 'Volunteer', 'Contact'],
  },
]

const social = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'X / Twitter', href: '#' },
]

export default function FooterSection() {
  return (
    <footer className="bg-fde-charcoal border-t border-white/8" id="contact">
      {/* Main footer grid */}
      <div
        className="container-wide"
        style={{ paddingTop: 'clamp(4rem, 6vw, 8rem)', paddingBottom: 'clamp(3rem, 4vw, 5rem)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={fdeLogo}
                alt="FDE logo"
                className="h-11 w-11 object-contain opacity-90"
              />
            </div>
            <p className="text-white font-700 text-[0.9rem] mb-2 tracking-[-0.01em]">
              Forum for Digital Equality
            </p>
            <p className="text-white/40 font-300 text-[0.82rem] leading-[1.75] mb-8 max-w-[260px]">
              Building an inclusive, safe and rights-based digital Nepal.
            </p>
            {/* Social */}
            <div className="flex flex-col gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-white/30 font-400 text-[0.78rem] hover:text-white transition-colors w-fit"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white/25 text-[0.62rem] font-700 tracking-[0.3em] uppercase mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/55 font-400 text-[0.82rem] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-wide py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/30 font-300 text-[0.75rem]">
            © {new Date().getFullYear()} Forum for Digital Equality. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 text-[0.72rem] font-400 hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
