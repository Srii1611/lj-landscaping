import Link from 'next/link';
import Placeholder from '@/components/Placeholder';

export default function AboutPage() {
  return (
    <main>
      {/* SECTION 1 — Hero */}
      <section className="bg-forest text-center py-20 px-6">
        <p className="text-gold text-xs uppercase tracking-widest">OUR STORY</p>
        <h1 className="font-display text-cream text-4xl md:text-6xl mt-3">
          Two generations.
        </h1>
        <p className="font-display text-gold italic text-4xl md:text-6xl">
          One standard.
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-cream/80 leading-relaxed">
          For nearly three decades, this family has been keeping Metro West properties
          clean, green, and cared for. Same hands. New name.
        </p>
      </section>

      {/* SECTION 2 — Story */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <Placeholder label="Jose & Luis — On the job"
            ratio="aspect-[3/4]" className="rounded-2xl"/>

          {/* Text */}
          <div className="flex flex-col justify-center mt-10 md:mt-0">
            <p className="text-moss text-xs uppercase tracking-widest">THE FAMILY</p>
            <h2 className="font-display text-forest text-3xl mt-2">
              Built by hand, season after season.
            </h2>
            <div className="text-ink/80 leading-relaxed mt-4 space-y-4">
              <p>
                Jose has been in the landscaping trade for over 27 years, building a
                reputation across Metro West one property at a time — entirely by word of
                mouth. No website, no ads. Just quality work and clients who kept calling back.
              </p>
              <p>
                Luis joined the crew in 2021, learning the trade from the ground up alongside
                his father. In 2022 they launched L&amp;J Landscaping together — a fresh name
                carrying forward everything Jose built: the reliability, the attention to detail,
                and the belief that every property deserves to be treated like their own.
              </p>
              <p>
                Jose still works on the crew today. When you hire L&amp;J, you get two
                generations of experience showing up at your property every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Values */}
      <section className="bg-stone py-16 px-6">
        <h3 className="font-display text-forest text-2xl text-center mb-10">
          What we stand for.
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Card 1 */}
          <div>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                 stroke="currentColor" strokeWidth="2"
                 className="mx-auto text-gold mb-3">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <p className="font-display text-forest text-lg">We show up</p>
            <p className="text-ink/70 text-sm mt-2 leading-relaxed">
              On time, every visit. No last-minute cancellations.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                 stroke="currentColor" strokeWidth="2"
                 className="mx-auto text-gold mb-3">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <p className="font-display text-forest text-lg">We treat it like ours</p>
            <p className="text-ink/70 text-sm mt-2 leading-relaxed">
              Your property gets the same care we&apos;d give our own.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                 stroke="currentColor" strokeWidth="2"
                 className="mx-auto text-gold mb-3">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <p className="font-display text-forest text-lg">Personally accountable</p>
            <p className="text-ink/70 text-sm mt-2 leading-relaxed">
              When you call, you reach the owner. Not a call center.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4 — Crew photo */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-display text-forest text-2xl mb-8">
            The crew behind the work.
          </h3>
          <Placeholder label="Full crew photo — Luis, Jose & team"
            ratio="aspect-[16/6]" className="rounded-2xl"/>
        </div>
      </section>

      {/* SECTION 5 — CTA strip */}
      <section className="bg-forest py-14 text-center px-6">
        <h3 className="font-display text-cream text-2xl">Ready to work with us?</h3>
        <p className="text-cream/70 mt-3">
          Tell us about your property and we&apos;ll be in touch.
        </p>
        <Link href="/quote"
          className="inline-block bg-gold text-forest font-semibold px-10 py-4 rounded-full mt-6 hover:bg-gold/90 transition text-sm tracking-wide">
          Request a Free Quote
        </Link>
      </section>
    </main>
  );
}
