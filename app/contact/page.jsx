'use client';
// TODO: Wire up form submission once Luis's company Gmail is confirmed.
// Route handler goes in app/api/contact/route.js — leave as stub for now.

export default function ContactPage() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const times = [
    { value: 'morning',   label: 'Morning (7am–11am)' },
    { value: 'afternoon', label: 'Afternoon (11am–3pm)' },
    { value: 'evening',   label: 'Evening (3pm–6pm)' },
  ];

  const inputClass =
    'w-full rounded-xl border border-stone bg-white px-4 py-3 font-body text-ink focus:outline-none focus:ring-2 focus:ring-forest/30';

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT COLUMN — Contact Info */}
        <div>
          <h2 className="font-display text-forest text-3xl">
            Let&apos;s talk about your yard.
          </h2>
          <p className="text-ink/70 mt-4 leading-relaxed">
            Tell us what you need and we&apos;ll be in touch within 24 hours to discuss your
            property and confirm availability.
          </p>

          {/* Phone block */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-moss font-semibold">
              CALL OR TEXT
            </p>
            {/* TODO: Luis to confirm phone number before launch */}
            <a
              href="tel:XXXXXXXXXX"
              className="text-3xl font-display text-gold hover:text-gold/80 transition block mt-1"
            >
              (XXX) XXX-XXXX
            </a>
          </div>

          {/* Trust signals */}
          <ul className="mt-8 space-y-3">
            {[
              'Family-owned and operated since 2022',
              '27 years of combined experience',
              'Serving Framingham, Natick, Wayland, Sudbury & Metro West',
              'We show up when we say we will — guaranteed',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#5a7d52"
                  strokeWidth="2"
                  width="18"
                  height="18"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-ink/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN — Quote Form */}
        <div>
          <h3 className="font-display text-forest text-2xl mb-6">Request a Free Quote</h3>
          <form>
            {/* First Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-ink mb-1">
                First Name <span className="text-moss">*</span>
              </label>
              <input
                type="text"
                placeholder="First name"
                className={inputClass}
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-ink mb-1">
                Phone Number <span className="text-moss">*</span>
              </label>
              <input
                type="tel"
                placeholder="(XXX) XXX-XXXX"
                className={inputClass}
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-ink mb-1">
                Email Address <span className="text-moss">*</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>

            {/* Property Address */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-ink mb-1">
                Property Address <span className="text-moss">*</span>
              </label>
              <input
                type="text"
                placeholder="123 Main St, Framingham, MA"
                className={inputClass}
              />
              <p className="text-xs text-ink/50 mt-1">
                We use this to look up your property before we call.
              </p>
            </div>

            {/* Services Needed */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-ink mb-1">
                Services Needed
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Weekly lawn care, spring cleanup, patio quote..."
                className={inputClass}
              />
            </div>

            {/* Preferred Day(s) */}
            <div className="mb-4">
              <p className="block text-sm font-semibold text-ink mb-2">Preferred Day(s)</p>
              <div className="flex flex-wrap gap-3">
                {days.map((day) => (
                  <label key={day} className="inline-flex items-center gap-1.5 text-sm cursor-pointer">
                    <input type="checkbox" className="accent-forest" />
                    {day}
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred Time */}
            <div className="mb-6">
              <p className="block text-sm font-semibold text-ink mb-2">Preferred Time</p>
              <div className="flex flex-wrap gap-4">
                {times.map((t) => (
                  <label key={t.value} className="inline-flex items-center gap-1.5 text-sm cursor-pointer">
                    <input type="radio" name="preferred-time" value={t.value} className="accent-forest" />
                    {t.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-forest text-cream font-semibold py-4 rounded-xl mt-6 hover:bg-forest-700 transition"
            >
              Request My Free Quote
            </button>
            <p className="text-xs text-ink/50 text-center mt-3">
              No commitment. We&apos;ll reach out to confirm availability.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
