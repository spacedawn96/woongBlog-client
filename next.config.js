/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    reactRoot: true,
    concurrentFeatures: true,
    serverComponents: true,
  },
};
