/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
    concurrentFeatures: true,
    serverComponents: true,
    styledComponents: true,
  },
};
