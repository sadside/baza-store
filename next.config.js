/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  images: {
    domains: [
      "imgcdn.zarina.ru",
      "ibb.co",
      "i.ibb.co",
      "localhost",
      "img5.goodfon.ru",
      "downloader.disk.yandex.ru",
      "assets.burberry.com",
      "iizhukov.site",
      "thebaza.ru",
      "127.0.0.1",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    reactStrictMode: false,
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
