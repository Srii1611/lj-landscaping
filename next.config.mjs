/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return [
      { source: '/projects', destination: '/our-work', permanent: true },
      { source: '/quote',    destination: '/#quote',   permanent: false },
    ];
  },
};

export default nextConfig;
