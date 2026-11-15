/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Website-templates/vedic-luxury-web" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.output = {
      ...config.output,
      chunkLoadTimeout: 120000,
    };
    return config;
  },
};

export default nextConfig;
