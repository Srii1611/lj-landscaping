/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/projects', destination: '/our-work', permanent: true },
      { source: '/quote',    destination: '/contact',  permanent: true },
    ];
  },
};

export default nextConfig;
