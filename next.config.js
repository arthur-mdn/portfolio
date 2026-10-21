/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: "/projet/seamless-reseau-mistral-toulon",
        destination: "/projet/reseau-mistral",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
