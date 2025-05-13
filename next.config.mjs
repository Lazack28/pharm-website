/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Make sure we're not using static export for Vercel
  // output: 'export', // Remove this line for Vercel deployment
  
  // Configure images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Configure redirects
  async redirects() {
    return [
      {
        source: '/auth/login',
        destination: '/',
        permanent: false,
      },
      {
        source: '/auth/register',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
