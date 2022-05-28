/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  webpack5:true,
  images: {
    domains: ['api-trinitio-lemj9.ondigitalocean.app'],
  },
}
