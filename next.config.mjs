/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable static exports for improved performance on Vercel
  output: 'export',
  
  // Disable image optimization since we're using placeholder images
  // and static exports don't support the Image Optimization API
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes for better SEO
  trailingSlash: true,
  
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
