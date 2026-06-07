'use client';
import { useState } from 'react';
import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import { galleryItems, categories } from '@/data/gallery';

export default function OurWorkPage() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all' ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <main>
      {/* Page Hero */}
      <section className="bg-cream py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold uppercase tracking-widest text-xs font-semibold">
              OUR PORTFOLIO
            </p>
            <h1 className="font-display text-forest text-4xl md:text-5xl mt-3">
              Projects that speak for themselves.
            </h1>
            <p className="text-ink/70 mt-4">
              Every lawn, every cleanup, every patio — photographed on the job.
            </p>
          </div>
        </div>
      </section>

      {/* Filter pills */}
      <div className="bg-cream py-6 border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-body cursor-pointer transition font-medium ${
                active === cat.key
                  ? 'bg-forest text-cream shadow-sm'
                  : 'bg-stone text-ink hover:bg-stone/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-stone/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <Placeholder label={item.label} ratio="aspect-[4/3]"
                  className="rounded-none group-hover:scale-105 transition-transform duration-500"/>
                <div className="bg-white px-4 py-3 border-t border-stone/30">
                  <p className="text-xs font-body text-ink/60 uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-forest py-16 text-center mt-8">
        <h3 className="font-display text-cream text-2xl">Like what you see?</h3>
        <p className="text-cream/70 mt-2">Let&apos;s talk about your property.</p>
        <Link href="/contact"
          className="inline-block bg-gold text-forest font-semibold px-10 py-4 rounded-full mt-6 hover:bg-gold/90 transition text-sm tracking-wide">
          Request a Free Quote
        </Link>
      </section>
    </main>
  );
}
