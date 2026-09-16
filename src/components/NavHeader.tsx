import type React from "react"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import fdeLogo from "@/imports/FDE_Logo.svg.png"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/who-we-are" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Our Impact", to: "/our-impact" },
  { label: "Stories", to: "/stories" },
  { label: "Research", to: "/research" },
]

export default function NavHeader(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return (): void => window.removeEventListener("scroll", onScroll)
  }, [])

  const desktopText = scrolled ? "text-fde-charcoal" : "text-white"

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-black/5 bg-fde-off-white/95 py-3 shadow-sm backdrop-blur" : "bg-transparent py-5"}`}>
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Forum for Digital Equality home">
          <img src={fdeLogo} alt="Forum for Digital Equality" className="h-10 w-10 rounded-full object-contain" />
          <span className={`hidden text-[0.68rem] font-bold uppercase leading-tight tracking-[0.15em] sm:block ${desktopText}`}>Forum for Digital<br />Equality</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-xs font-semibold tracking-wide transition-colors hover:text-fde-orange ${isActive ? "text-fde-orange" : desktopText}`}>{link.label}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <span className={`text-xs ${desktopText}`}>EN / नेपाली</span>
          <Link to="/get-involved" className="bg-fde-orange px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-fde-orange-dark">Get involved</Link>
        </div>
        <button type="button" className="flex flex-col gap-1.5 p-2 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {[1, 2, 3].map((line) => <span key={line} className={`h-0.5 w-6 ${scrolled || menuOpen ? "bg-fde-charcoal" : "bg-white"}`} />)}
        </button>
      </div>
      {menuOpen && <nav className="mt-3 border-t border-black/5 bg-fde-off-white px-6 py-4 lg:hidden" aria-label="Mobile navigation">
        {navLinks.map((link) => <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="block border-b border-black/5 py-3 text-sm font-semibold text-fde-charcoal hover:text-fde-orange">{link.label}</NavLink>)}
        <Link to="/get-involved" onClick={() => setMenuOpen(false)} className="mt-4 block bg-fde-orange px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white">Get involved</Link>
      </nav>}
    </header>
  )
}
