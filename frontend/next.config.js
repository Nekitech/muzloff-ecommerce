/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },

  env: {
    NEXT_PUBLIC_API_SERVER_URL: process.env.NEXT_PUBLIC_API_SERVER_URL,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },

  publicRuntimeConfig: {
    NEXT_PUBLIC_API_SERVER_URL: process.env.NEXT_PUBLIC_API_SERVER_URL,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4002',
        pathname: '/uploads/**',
      },
    ],
    formats: [
        "image/avif", "image/webp"
    ]
  },


  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
