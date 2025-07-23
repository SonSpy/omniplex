/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ Required for static export if you're using next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
