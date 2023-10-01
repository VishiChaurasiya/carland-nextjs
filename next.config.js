/** @type {import('next').NextConfig} */
const nextConfig = {
  fastRefresh: true,
  productionBrowserSourceMaps: true, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  minify: false, // Disable minification
};

module.exports = nextConfig;
