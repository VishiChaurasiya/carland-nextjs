/** @type {import('next').NextConfig} */
const nextConfig = {
  fastRefresh: true,
  productionBrowserSourceMaps: true, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  minify: false, // Disable minification

  // comment the below code and also add '/' in all images src when running the app in local mode
  output: "export",
  basePath: "/carland-nextjs",
};

module.exports = nextConfig;
