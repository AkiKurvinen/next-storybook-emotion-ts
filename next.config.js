/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/dist',
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './src/imageLoader.ts',
  },
 // images: { unoptimized: true}
 webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  });

  return config;
}
}

module.exports = nextConfig