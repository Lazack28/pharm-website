/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Remove static export for Vercel deployment
  // output: 'export',
  
  images: {
    domains: ['placeholder.com'],
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
