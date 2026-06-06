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
      {/* Page Header */}
      <section className="bg-cream py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-moss uppercase tracking-widest text-sm font-semibold">OUR WORK</p>
          <h1 className="font-display text-forest text-4xl md:text-5xl mt-3">
            Projects that speak for themselves.
          </h1>
          <p className="text-ink/70 max-w-xl mx-auto mt-4">
            Every lawn, every cleanup, every patio — photographed on the job.
          </p>

          {/* Category filter row */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`rounded-full px-5 py-2 text-sm cursor-pointer transition ${
                  active === cat.key
                    ? 'bg-forest text-cream'
                    : 'bg-stone text-ink hover:bg-stone/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div key={item.id}>
              <Placeholder label={item.label} ratio="aspect-[4/3]" />
              <p className="text-xs text-ink/60 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-forest py-12 text-center mt-16">
        <h2 className="font-display text-cream text-2xl">Like what you see?</h2>
        <p className="text-cream/80 mt-2">Let&apos;s talk about your property.</p>
        <Link
          href="/contact"
          className="bg-gold text-forest font-semibold px-8 py-3 rounded-full mt-6 inline-block"
        >
          Request a Free Quote
        </Link>
      </section>
    </main>
  );
}
