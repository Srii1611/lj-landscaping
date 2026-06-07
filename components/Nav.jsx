'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('[data-dropdown]')) {
        setServicesOpen(false)
        setContactOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const services = [
    { label: 'Lawn Maintenance', href: '/services/lawn-maintenance' },
    { label: 'Spring Cleanup', href: '/services/spring-cleanup' },
    { label: 'Fall Cleanup', href: '/services/fall-cleanup' },
    { label: 'Light Masonry & Patios', href: '/services/masonry' },
  ]

  const linkClass =
    'text-ink/80 hover:text-forest text-sm font-body tracking-wide transition'

  return (
    <header className="sticky top-0 z-50">
      {/* Single bar - bg-cream */}
      <div className="bg-cream border-b border-stone/30">

        {/* Contact + social strip — desktop only */}
        <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-1.5 border-b border-stone/20">
          <div className="flex items-center gap-3">
            <a
              href="tel:+15086650285"
              className="text-ink/60 hover:text-forest text-xs font-body transition flex items-center gap-1.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (508) 665-0285
            </a>
            <span className="w-px h-3 bg-stone" />
            <a
              href="mailto:landjlandscaping811@gmail.com"
              className="text-ink/60 hover:text-forest text-xs font-body transition flex items-center gap-1.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              landjlandscaping811@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/* TODO: add Luis's Facebook URL */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ink/50 hover:text-forest transition">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* TODO: add Luis's Instagram URL */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink/50 hover:text-forest transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main nav: left links | centered logo | right links */}
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-20 max-w-7xl mx-auto px-6">
          {/* LEFT */}
          <div className="flex items-center gap-8 flex-1">
            <Link href="/" className={linkClass}>Home</Link>
            <Link href="/about" className={linkClass}>About</Link>
            <div className="relative" data-dropdown>
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setContactOpen(false) }}
                className="flex items-center gap-1 text-ink/80 hover:text-forest text-sm font-body tracking-wide transition"
              >
                Services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="10" height="10">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 bg-white rounded-xl shadow-lg border border-stone min-w-[210px] z-50">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm font-body text-ink hover:bg-stone transition border-b border-stone/50 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/services/irrigation"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-between px-5 py-3 text-sm font-body text-ink/50 hover:bg-stone transition"
                  >
                    Irrigation
                    <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">Soon</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CENTER LOGO */}
          <Link href="/" className="flex-shrink-0 px-6">
            <Image
              src="/logo.png"
              width={140}
              height={80}
              alt="L&J Landscaping"
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-8 flex-1 justify-end">
            <Link href="/our-work" className={linkClass}>Portfolio</Link>
            <div className="relative" data-dropdown>
              <button
                onClick={() => { setContactOpen(!contactOpen); setServicesOpen(false) }}
                className="flex items-center gap-1 text-ink/80 hover:text-forest text-sm font-body tracking-wide transition"
              >
                Contact
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="10" height="10">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {contactOpen && (
                <div className="absolute top-full right-0 mt-3 bg-white rounded-xl shadow-lg border border-stone min-w-[180px] z-50">
                  <Link
                    href="/service-area"
                    onClick={() => setContactOpen(false)}
                    className="block px-5 py-3 text-sm font-body text-ink hover:bg-stone transition border-b border-stone/50"
                  >
                    Service Area
                  </Link>
                  <Link
                    href="/quote"
                    onClick={() => setContactOpen(false)}
                    className="block px-5 py-3 text-sm font-body text-forest font-semibold hover:bg-stone transition"
                  >
                    Request a Quote
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center px-4 py-3">
          <Link href="/">
            <Image src="/logo.png" width={100} height={56} alt="L&J Landscaping" className="h-12 w-auto object-contain" />
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-ink p-1" aria-label="Menu">
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-cream border-t border-stone/30 shadow-lg">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone">About</Link>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between items-center px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone"
            >
              Services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" className={mobileServicesOpen ? 'rotate-180' : ''}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="bg-stone/30">
                {services.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block px-10 py-3 text-sm text-ink/80 font-body border-b border-stone/40 hover:bg-stone">{item.label}</Link>
                ))}
                <Link href="/services/irrigation" onClick={() => setMobileOpen(false)} className="block px-10 py-3 text-sm text-ink/50 font-body border-b border-stone/40 hover:bg-stone">Irrigation (coming soon)</Link>
              </div>
            )}
            <Link href="/our-work" onClick={() => setMobileOpen(false)} className="block px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone">Portfolio</Link>
            <Link href="/service-area" onClick={() => setMobileOpen(false)} className="block px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone">Service Area</Link>
            <Link href="/quote" onClick={() => setMobileOpen(false)} className="block px-6 py-4 text-forest font-semibold font-body hover:bg-stone">Request a Quote</Link>
          </div>
        )}
      </div>
    </header>
  )
}
