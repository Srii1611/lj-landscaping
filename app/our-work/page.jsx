import OurWorkGallery from '@/components/sections/OurWorkGallery';
import BreadcrumbSchema from '@/components/Breadcrumb';

export const metadata = {
  title: 'Our Work — Landscaping Projects in Metro West | L&J Landscaping',
  description:
    'See real before-and-after landscaping work by L&J Landscaping across Framingham, Natick, Wayland, and surrounding Metro West towns.',
  alternates: { canonical: '/our-work' },
};

export default function OurWorkPage() {
  return (
    <>
      <BreadcrumbSchema page="Our Work" path="/our-work" />
      <OurWorkGallery />
    </>
  );
}
