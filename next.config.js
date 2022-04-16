module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    reactRoot: true, // react 18
    // runtime: 'edge',
    concurrentFeatures: true, // react 18 needed
    // serverComponents: true, // react 18 needed
  },
};
