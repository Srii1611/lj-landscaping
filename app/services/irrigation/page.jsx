import Link from 'next/link';
import Placeholder from '@/components/Placeholder';

export default function IrrigationPage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <span className="bg-gold/20 text-gold text-sm px-4 py-1 rounded-full uppercase tracking-widest inline-block">
          Coming Soon
        </span>
        <h1 className="font-display text-forest text-4xl mt-6">Irrigation Systems</h1>
        <p className="text-ink/70 mt-4 leading-relaxed">
          We are expanding our services to include professional irrigation system installation
          and maintenance for residential properties. Serving Framingham, Natick, Wayland,
          Sudbury, and surrounding Metro West communities. Get in touch to be notified when
          this service launches.
        </p>
        <Placeholder label="Irrigation" ratio="aspect-video" className="mt-10 rounded-2xl" />
        <Link
          href="/contact"
          className="bg-forest text-cream font-semibold px-8 py-3 rounded-full mt-8 inline-block"
        >
          Get Notified
        </Link>
      </div>
    </main>
  );
}
