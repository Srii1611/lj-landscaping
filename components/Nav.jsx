'use client'

import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const services = [
  { label: 'Lawn Maintenance', href: '/services' },
  { label: 'Spring Cleanup', href: '/services' },
  { label: 'Fall Cleanup', href: '/services' },
  { label: 'Light Masonry & Patios', href: '/services' },
  { label: 'Fencing', href: '/services' },
  { label: 'Irrigation', href: '/services' },
  { label: 'Tree Work & Pruning', href: '/services' },
  { label: 'Mulching & Edging', href: '/services' },
  { label: 'Aeration', href: '/services' },
]

const contactItems = [
  { label: 'Service Area', href: '/service-area' },
  { label: 'Request Quote', href: '/#quote' },
]

const navLink = (active) =>
  `font-display text-[17px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 whitespace-nowrap text-[#c9a24b] ${
    active ? 'drop-shadow-[0_0_8px_rgba(201,162,75,0.4)]' : 'hover:drop-shadow-[0_0_8px_rgba(201,162,75,0.3)]'
  }`

function Dropdown({ label, items, isActive, pathname }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`${navLink(isActive)} flex items-center gap-1.5 cursor-pointer`}
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[240px] rounded-xl overflow-hidden z-50"
          style={{
            backgroundColor: '#1a3425',
            border: '1px solid rgba(201,162,75,0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
          }}
        >
          {items.map(({ label: itemLabel, href }, i) => (
            <Link
              key={`${href}-${i}`}
              href={href}
              onClick={() => setOpen(false)}
              style={{ color: '#f0e6ce' }}
              className={`block px-6 py-3.5 font-display text-[14px] font-semibold tracking-[0.06em] transition-all duration-200 border-b border-white/5 last:border-0 ${
                pathname === href
                  ? 'bg-white/5'
                  : 'hover:bg-white/[0.03] hover:pl-7'
              }`}
            >
              {itemLabel}
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

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: '#1f3d2b',
        borderBottom: '1px solid rgba(201,162,75,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex items-center justify-between" style={{ height: '110px' }}>

        <Link href="/" className="flex-shrink-0 py-2">
          <img
            src="/logo.png"
            alt="L&J Landscaping"
            style={{ height: '140px', width: 'auto', background: 'none', display: 'block' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className={navLink(pathname === '/')}>
            Home
          </Link>

          <Link href="/about" className={navLink(pathname === '/about')}>
            About Us
          </Link>

          <Dropdown
            label="Services"
            items={services}
            isActive={pathname.startsWith('/services')}
            pathname={pathname}
          />

          <Link href="/our-work" className={navLink(pathname === '/our-work')}>
            Portfolio
          </Link>

          <Dropdown
            label="Contact"
            items={contactItems}
            isActive={pathname === '/service-area' || pathname === '/contact'}
            pathname={pathname}
          />
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/#quote"
            className="inline-flex items-center px-8 py-3 bg-[#c9a24b] text-[#1f3d2b] font-display text-[14px] font-bold tracking-[0.1em] uppercase rounded-full hover:bg-[#d6b260] hover:shadow-[0_8px_24px_rgba(201,162,75,0.4)] transition-all duration-300 whitespace-nowrap"
          >
            Request Quote
          </Link>

          <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="text-[#f7f4ec]/60 hover:text-[#c9a24b] transition-colors duration-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer" className="text-[#f7f4ec]/60 hover:text-[#c9a24b] transition-colors duration-300" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#c9a24b] p-1" aria-label="Menu">
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
        <div className="md:hidden" style={{ backgroundColor: '#1a3425', borderTop: '1px solid rgba(201,162,75,0.1)' }}>
          <Link href="/" onClick={() => setMobileOpen(false)} className={`block px-8 py-4 font-display text-[14px] tracking-[0.1em] uppercase text-[#c9a24b] border-b border-white/5 transition-all duration-200 ${pathname === '/' ? 'brightness-125' : ''}`}>
            Home
          </Link>

          <Link href="/about" onClick={() => setMobileOpen(false)} className={`block px-8 py-4 font-display text-[14px] tracking-[0.1em] uppercase text-[#c9a24b] border-b border-white/5 transition-all duration-200 ${pathname === '/about' ? 'brightness-125' : ''}`}>
            About Us
          </Link>

          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileServices(!mobileServices)}
              className={`w-full flex items-center justify-between px-8 py-4 font-display text-[14px] tracking-[0.1em] uppercase text-[#c9a24b] transition-all duration-200 ${pathname.startsWith('/services') ? 'brightness-125' : ''}`}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-300 ${mobileServices ? 'rotate-180' : ''}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobileServices && (
              <div className="pb-3 pl-4">
                {services.map(({ label, href }, i) => (
                  <Link key={`${href}-${i}`} href={href} onClick={() => setMobileOpen(false)} className="block px-8 py-2.5 font-display text-[13px] tracking-[0.06em] text-[#c9a24b] opacity-80 hover:opacity-100 transition-all duration-200">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/our-work" onClick={() => setMobileOpen(false)} className={`block px-8 py-4 font-display text-[14px] tracking-[0.1em] uppercase text-[#c9a24b] border-b border-white/5 transition-all duration-200 ${pathname === '/our-work' ? 'brightness-125' : ''}`}>
            Portfolio
          </Link>

          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileContact(!mobileContact)}
              className={`w-full flex items-center justify-between px-8 py-4 font-display text-[14px] tracking-[0.1em] uppercase text-[#c9a24b] transition-all duration-200 ${pathname === '/service-area' || pathname === '/contact' ? 'brightness-125' : ''}`}
            >
              Contact
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-300 ${mobileContact ? 'rotate-180' : ''}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobileContact && (
              <div className="pb-3 pl-4">
                {contactItems.map(({ label, href }) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="block px-8 py-2.5 font-display text-[13px] tracking-[0.06em] text-[#c9a24b] opacity-80 hover:opacity-100 transition-all duration-200">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="px-8 py-6 flex items-center gap-5">
            <Link href="/#quote" onClick={() => setMobileOpen(false)} className="inline-flex items-center px-7 py-3 bg-[#c9a24b] text-[#1f3d2b] font-display text-[13px] tracking-[0.1em] uppercase rounded-full hover:bg-[#d6b260] transition-all duration-300">
              Request Quote
            </Link>
            <a href="https://instagram.com/YOUR_USERNAME" target="_blank" className="text-[#f7f4ec]/50 hover:text-[#c9a24b] transition-colors">IG</a>
            <a href="https://facebook.com/YOUR_PAGE" target="_blank" className="text-[#f7f4ec]/50 hover:text-[#c9a24b] transition-colors">FB</a>
          </div>
        </div>
      )}
    </header>
  )
}
