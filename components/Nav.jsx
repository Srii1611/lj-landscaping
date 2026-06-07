'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('[data-dropdown]')) {
        setServicesOpen(false);
        setContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const serviceItems = [
    ['Lawn Maintenance', '/services/lawn-maintenance'],
    ['Spring Cleanup', '/services/spring-cleanup'],
    ['Fall Cleanup', '/services/fall-cleanup'],
    ['Light Masonry & Patios', '/services/masonry'],
  ];

  const navLinkClass =
    'text-ink/80 hover:text-forest text-sm font-body tracking-wide transition';

  return (
    <header className="sticky top-0 z-50">
      {/* ROW 1 — Utility bar */}
      <div className="bg-forest-700 py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LEFT: location, phone, email */}
          <div className="hidden md:flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="text-gold flex-shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-cream/70 text-xs font-body">Framingham, MA</span>
            <div className="w-px h-3 bg-cream/20" />
            <a href="tel:+15086650285"
               className="text-cream/70 hover:text-gold text-xs font-body transition flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              (508) 665-0285
            </a>
            <div className="w-px h-3 bg-cream/20" />
            <a href="mailto:landjlandscaping811@gmail.com"
               className="text-cream/70 hover:text-gold text-xs font-body transition flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              landjlandscaping811@gmail.com
            </a>
          </div>

          {/* RIGHT: social icons */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            {/* TODO: add Luis's Facebook URL */}
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="text-cream/60 hover:text-gold transition">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* TODO: add Luis's Instagram URL */}
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="text-cream/60 hover:text-gold transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ROW 2 — Centered split nav */}
      <div className="bg-cream border-t border-stone/30 overflow-visible relative">

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center relative">

            {/* LEFT links */}
            <div className="flex items-center gap-8 flex-1 justify-end pr-24">
              <Link href="/" className={navLinkClass}>Home</Link>
              <Link href="/about" className={navLinkClass}>About</Link>

              {/* Services dropdown */}
              <div className="relative" data-dropdown>
                <button
                  onClick={() => { setServicesOpen(!servicesOpen); setContactOpen(false); }}
                  className="flex items-center gap-1 text-ink/80 hover:text-forest text-sm font-body tracking-wide transition">
                  Services
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                       width="10" height="10">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-stone min-w-[210px] z-50">
                    {serviceItems.map(([label, href]) => (
                      <Link key={href} href={href} onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-sm font-body text-ink hover:bg-stone transition border-b border-stone/50 last:border-0">
                        {label}
                      </Link>
                    ))}
                    <Link href="/services/irrigation" onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-5 py-3 text-sm font-body text-ink/50 hover:bg-stone transition">
                      Irrigation
                      <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">Soon</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* CENTER logo — hangs below nav row */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20">
              <Link href="/">
                <div className="bg-cream border border-stone/30 border-t-0 rounded-b-2xl px-4 pb-2 shadow-md">
                  <Image src="/logo.png" width={80} height={80}
                         alt="L&J Landscaping" className="object-contain"/>
                </div>
              </Link>
            </div>

            {/* RIGHT links */}
            <div className="flex items-center gap-8 flex-1 justify-start pl-24">
              <Link href="/our-work" className={navLinkClass}>Portfolio</Link>

              {/* Contact dropdown */}
              <div className="relative" data-dropdown>
                <button
                  onClick={() => { setContactOpen(!contactOpen); setServicesOpen(false); }}
                  className="flex items-center gap-1 text-ink/80 hover:text-forest text-sm font-body tracking-wide transition">
                  Contact
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                       width="10" height="10">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {contactOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-stone min-w-[180px] z-50">
                    <Link href="/service-area" onClick={() => setContactOpen(false)}
                      className="block px-5 py-3 text-sm font-body text-ink hover:bg-stone transition border-b border-stone/50">
                      Service Area
                    </Link>
                    <Link href="/quote" onClick={() => setContactOpen(false)}
                      className="block px-5 py-3 text-sm font-body text-forest font-semibold hover:bg-stone transition">
                      Request a Quote
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div className="flex justify-between items-center px-4 py-3">
            <Link href="/">
              <Image src="/logo.png" width={110} height={40}
                     alt="L&J Landscaping" className="object-contain"/>
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-ink p-1">
              {mobileOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     width="24" height="24">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     width="24" height="24">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>

          {mobileOpen && (
            <div className="absolute top-full left-0 w-full bg-cream z-50 border-t border-stone shadow-lg">
              <Link href="/" onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone transition">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone transition">
                About
              </Link>

              {/* Services expandable */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between items-center w-full px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone transition">
                  Services
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                       width="16" height="16"
                       style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <>
                    {serviceItems.map(([label, href]) => (
                      <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                        className="block px-10 py-3 text-sm text-ink font-body border-b border-stone/50 bg-stone/30 hover:bg-stone transition">
                        {label}
                      </Link>
                    ))}
                    <Link href="/services/irrigation" onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-10 py-3 text-sm text-ink/50 font-body border-b border-stone/50 bg-stone/30 hover:bg-stone transition">
                      Irrigation
                      <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">Soon</span>
                    </Link>
                  </>
                )}
              </div>

              <Link href="/our-work" onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone transition">
                Portfolio
              </Link>
              <Link href="/service-area" onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-ink font-body border-b border-stone/50 hover:bg-stone transition">
                Service Area
              </Link>
              <Link href="/quote" onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-forest font-semibold font-body hover:bg-stone transition">
                Request a Quote
              </Link>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
