/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@react-pdf/renderer', 'react-pdf'],
  webpack: (config) => {
    // Handle ESM modules
    config.resolve.alias = {
      ...config.resolve.alias,
      // Force react-pdf to use CJS path
      'react-pdf$': 'react-pdf/dist/cjs/index.js',
    };
    return config;
  },
};

module.exports = nextConfig; 