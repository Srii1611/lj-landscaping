'use client'

import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

/* ---- line icons ---- */
const svgProps = {
  viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round',
}
const Icon = {
  lawn: <svg {...svgProps}><path d="M3 20c1-3 1.5-5 1.5-8M8.5 20c1-4 1.2-6 1.2-11M14 20c1-3 1.3-5 1.5-8M19 20c.8-2.5 1-4 1-7" /></svg>,
  fall: <svg {...svgProps}><path d="M5 19c8 0 14-5 14-14C10 5 5 10 5 19Z" /><path d="M5 19C9 14 12 11 16 9" /></svg>,
  aeration: <svg {...svgProps}><path d="M3 16h18" /><path d="M7 16v3M12 16v3M17 16v3" /><circle cx="7" cy="11" r="1" /><circle cx="12" cy="9" r="1" /><circle cx="17" cy="11" r="1" /></svg>,
  spring: <svg {...svgProps}><path d="M12 20v-9" /><path d="M12 11c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5Z" /><path d="M12 13c0-2.5-2-4.5-5-4.5 0 3 2 4.5 5 4.5Z" /></svg>,
  tree: <svg {...svgProps}><circle cx="12" cy="8" r="5" /><path d="M12 13v8M9 18h6" /></svg>,
  fence: <svg {...svgProps}><path d="M5 7v13M12 7v13M19 7v13" /><path d="M3 11h18M3 15h18" /></svg>,
  irrigation: <svg {...svgProps}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" /></svg>,
  masonry: <svg {...svgProps}><rect x="3" y="6" width="18" height="12" rx="1" /><path d="M3 12h18M10 6v6M15 12v6" /></svg>,
  mulch: <svg {...svgProps}><path d="M3 17l9-5 9 5" /><path d="M3 13l9-5 9 5" /></svg>,
  pin: <svg {...svgProps}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>,
  chat: <svg {...svgProps}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></svg>,
}

const serviceGroups = [
  {
    heading: 'Lawn Care',
    items: [
      { label: 'Lawn Maintenance', href: '/services', icon: Icon.lawn },
      { label: 'Fall Cleanup', href: '/services', icon: Icon.fall },
      { label: 'Aeration', href: '/services', icon: Icon.aeration },
      { label: 'Spring Cleanup', href: '/services', icon: Icon.spring },
    ],
  },
  {
    heading: 'Hardscaping & Maintenance',
    items: [
      { label: 'Tree Work & Pruning', href: '/services', icon: Icon.tree },
      { label: 'Fencing', href: '/services', icon: Icon.fence },
      { label: 'Irrigation', href: '/services', icon: Icon.irrigation },
      { label: 'Light Masonry & Patios', href: '/services', icon: Icon.masonry },
      { label: 'Mulching & Edging', href: '/services', icon: Icon.mulch },
    ],
  },
]

const contactItems = [
  { label: 'Service Area', href: '/service-area', icon: Icon.pin },
  { label: 'Request Quote', href: '/#quote', icon: Icon.chat },
]

function Chevron({ open }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform .3s', transform: open ? 'rotate(180deg)' : 'none' }}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function useClickOutside(setOpen) {
  const ref = useRef(null)
  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [setOpen])
  return ref
}

function ServicesMenu({ pathname }) {
  const [open, setOpen] = useState(false)
  const ref = useClickOutside(setOpen)
  return (
    <div ref={ref} className="relative">
      <button className={`megnav-link ${pathname.startsWith('/services') ? 'active' : ''}`} onClick={() => setOpen(!open)}>
        Services <Chevron open={open} />
      </button>
      {open && (
        <div className="mega-panel" style={{ left: '50%', transform: 'translateX(-50%)', width: '600px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 30px' }}>
            {serviceGroups.map((g) => (
              <div key={g.heading}>
                <div className="mega-head">{g.heading}</div>
                {g.items.map((it) => (
                  <Link key={it.label} href={it.href} onClick={() => setOpen(false)} className="mega-item">
                    {it.icon}<span>{it.label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ContactMenu({ pathname }) {
  const [open, setOpen] = useState(false)
  const ref = useClickOutside(setOpen)
  const active = pathname === '/service-area' || pathname === '/contact'
  return (
    <div ref={ref} className="relative">
      <button className={`megnav-link ${active ? 'active' : ''}`} onClick={() => setOpen(!open)}>
        Contact <Chevron open={open} />
      </button>
      {open && (
        <div className="mega-panel" style={{ right: 0, width: '235px' }}>
          {contactItems.map((it) => (
            <Link key={it.href} href={it.href} onClick={() => setOpen(false)} className="mega-item">
              {it.icon}<span>{it.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobileContact, setMobileContact] = useState(false)
  const pathname = usePathname()

  const mLink = 'block px-7 py-3.5 font-display text-[14px] tracking-[0.1em] uppercase border-b border-white/5 transition-all duration-200'

  return (
    <header className="sticky top-0 z-50" style={{ background: 'transparent', padding: '12px 14px 0' }}>
      <div className="megnav-bar max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 px-6 lg:px-10" style={{ height: '88px' }}>

          {/* Left — Logo (equal-width spacer keeps the nav truly centered) */}
          <div className="flex-1 flex items-center min-w-0">
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="L&J Landscaping" style={{ height: '72px', width: 'auto', display: 'block' }} />
            </Link>
          </div>

          {/* Center — Navigation, evenly spaced */}
          <nav className="hidden lg:flex items-center gap-7 whitespace-nowrap">
            <Link href="/" className={`megnav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`megnav-link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            <ServicesMenu pathname={pathname} />
            <Link href="/our-work" className={`megnav-link ${pathname === '/our-work' ? 'active' : ''}`}>Portfolio</Link>
            <ContactMenu pathname={pathname} />
          </nav>

          {/* Right — Action cluster: quote pill + social icons (equal-width spacer) */}
          <div className="flex-1 hidden lg:flex items-center justify-end gap-5">
            <Link href="/#quote" className="req-quote">Request Quote</Link>
            <div className="flex items-center gap-3">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity duration-300" aria-label="Instagram — coming soon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="25%" stopColor="#fa7e1e" />
                      <stop offset="50%" stopColor="#d62976" />
                      <stop offset="75%" stopColor="#962fbf" />
                      <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-[#1877F2] opacity-90 hover:opacity-100 transition-opacity duration-300" aria-label="Facebook — coming soon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#c9a24b] p-1" aria-label="Menu">
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden" style={{ borderTop: '1px solid rgba(201,162,75,0.14)', paddingBottom: '12px', overflow: 'hidden', borderRadius: '0 0 22px 22px' }}>
            <Link href="/" onClick={() => setMobileOpen(false)} className={mLink} style={{ color: '#e7d7a8' }}>Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className={mLink} style={{ color: '#e7d7a8' }}>About Us</Link>

            <div className="border-b border-white/5">
              <button onClick={() => setMobileServices(!mobileServices)} className={`${mLink} w-full flex items-center justify-between`} style={{ color: '#e7d7a8', borderBottom: 'none' }}>
                Services <Chevron open={mobileServices} />
              </button>
              {mobileServices && (
                <div className="pb-3">
                  {serviceGroups.map((g) => (
                    <div key={g.heading}>
                      <div className="mega-head" style={{ fontSize: '14px', margin: '8px 0 4px 28px' }}>{g.heading}</div>
                      {g.items.map((it) => (
                        <Link key={it.label} href={it.href} onClick={() => setMobileOpen(false)} className="mega-item" style={{ margin: '0 16px' }}>
                          {it.icon}<span>{it.label}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/our-work" onClick={() => setMobileOpen(false)} className={mLink} style={{ color: '#e7d7a8' }}>Portfolio</Link>

            <div className="border-b border-white/5">
              <button onClick={() => setMobileContact(!mobileContact)} className={`${mLink} w-full flex items-center justify-between`} style={{ color: '#e7d7a8', borderBottom: 'none' }}>
                Contact <Chevron open={mobileContact} />
              </button>
              {mobileContact && (
                <div className="pb-3">
                  {contactItems.map((it) => (
                    <Link key={it.href} href={it.href} onClick={() => setMobileOpen(false)} className="mega-item" style={{ margin: '0 16px' }}>
                      {it.icon}<span>{it.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-7 py-5 flex items-center gap-5">
              <Link href="/#quote" onClick={() => setMobileOpen(false)} className="req-quote">Request Quote</Link>
              <a href="#" aria-label="Instagram — coming soon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient-m)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="ig-gradient-m" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#feda75" /><stop offset="25%" stopColor="#fa7e1e" /><stop offset="50%" stopColor="#d62976" /><stop offset="75%" stopColor="#962fbf" /><stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-[#1877F2]" aria-label="Facebook — coming soon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
