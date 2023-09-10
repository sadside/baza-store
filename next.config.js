/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
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
  }),
};

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    reactStrictMode: false,
  },
};

module.exports = nextConfig;
