/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'imgcdn.zarina.ru',
			'ibb.co',
			'i.ibb.co',
			'localhost',
			'img5.goodfon.ru',
			'downloader.disk.yandex.ru',
			'assets.burberry.com'
		],
	},
}

module.exports = nextConfig
