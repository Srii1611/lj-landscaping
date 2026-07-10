import OurWorkGallery from '@/components/sections/OurWorkGallery';
import BreadcrumbSchema from '@/components/Breadcrumb';

export const metadata = {
  title: 'Before & After Landscaping Projects, Metro West MA',
  description:
    'Real before-and-after landscaping projects — lawns, cleanups, and patios photographed on the job across Framingham, Natick, and Metro West towns.',
  alternates: { canonical: '/our-work' },
  openGraph: {
    title: 'Before & After Landscaping Projects, Metro West MA',
    description:
      'Real before-and-after landscaping projects — lawns, cleanups, and patios photographed on the job across Framingham, Natick, and Metro West towns.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'L&J Landscaping crew at work' }],
  },
};

export default function OurWorkPage() {
  return (
    <>
      <BreadcrumbSchema page="Our Work" path="/our-work" />
      <OurWorkGallery />
    </>
  );
}
