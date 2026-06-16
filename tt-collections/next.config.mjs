/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // Next.js 16 uses Turbopack by default. 
  // We removed the old webpack config and added this to silence the warning.
  turbopack: {}, 
};

export default nextConfig;