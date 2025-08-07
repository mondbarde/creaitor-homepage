/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/app-ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=UTF-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
      {
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=UTF-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ]
  },
}

export default nextConfig
