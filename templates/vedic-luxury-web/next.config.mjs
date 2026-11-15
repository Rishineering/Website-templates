/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.output = {
      ...config.output,
      chunkLoadTimeout: 120000,
    };
    return config;
  },
};

export default nextConfig;
