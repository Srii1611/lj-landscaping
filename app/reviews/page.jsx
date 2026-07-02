import Link from 'next/link';
import { reviews } from '@/data/reviews';
import BreadcrumbSchema from '@/components/Breadcrumb';

export const metadata = {
  title: 'Customer Reviews | L&J Landscaping — Framingham & Metro West',
  description:
    'See what homeowners in Framingham, Natick, and Metro West say about L&J Landscaping. Reliable, punctual, family-owned lawn care since 2022.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <main>
      <BreadcrumbSchema page="Reviews" path="/reviews" />
      {/* Hero */}
      <section className="bg-cream py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-moss uppercase tracking-widest text-sm font-semibold">
            WHAT OUR CLIENTS SAY
          </p>
          <h1 className="font-display text-forest text-4xl md:text-5xl mt-3">
            Reliability you can hear about.
          </h1>
          <p className="text-ink/70 mt-4 max-w-xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what our neighbors across Metro West are saying.
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-stone py-10 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto px-4 gap-6">
          {[
            { value: '5.0 ★', label: 'Average Rating' },
            { value: '100%', label: 'Would Recommend' },
            { value: '27 yrs', label: 'Combined Experience' },
            { value: 'Family', label: 'Owned & Operated' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-forest text-3xl">{stat.value}</p>
              <p className="text-sm text-ink/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Review Cards Grid */}
      <section className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-stone"
          >
            <div className="text-gold text-lg">{'★'.repeat(review.rating)}</div>
            <p className="text-ink/80 mt-3 leading-relaxed italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="font-semibold text-ink mt-4">{review.name}</p>
            <p className="text-sm text-ink/50">{review.location}</p>
          </div>
        ))}
      </section>

      {/* Google Review CTA */}
      <section className="bg-forest py-12 text-center">
        <h2 className="font-display text-cream text-2xl">Happy with our work?</h2>
        <p className="text-cream/70 mt-2">
          Leave us a review and help your neighbors find us.
        </p>
        {/* TODO: Replace href with Google Business Profile review link once Luis verifies GBP listing */}
        <a
          href="#"
          className="bg-gold text-forest font-semibold px-8 py-3 rounded-full mt-6 inline-block"
        >
          Leave a Google Review
        </a>
      </section>

      {/* Second CTA */}
      <section className="bg-cream text-center py-10">
        <p className="font-display text-forest text-2xl">Ready to experience it for yourself?</p>
        <Link
          href="/#quote"
          className="bg-forest text-cream font-semibold px-8 py-3 rounded-full mt-6 inline-block"
        >
          Get a Free Quote
        </Link>
      </section>
    </main>
  );
}
