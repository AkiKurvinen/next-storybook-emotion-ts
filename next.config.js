/** @type {import('next').NextConfig} */

const nextConfig = {
  // basePath: '/test',
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig