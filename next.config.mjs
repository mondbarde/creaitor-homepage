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
  // output: 'export', // Vercel에서는 이 설정이 필요 없음
  // distDir: 'dist', // Vercel 기본 설정 사용
  trailingSlash: false,
}

export default nextConfig
