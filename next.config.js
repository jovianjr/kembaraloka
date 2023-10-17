const nextConfig = {
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
	trailingSlash: true,
	exportPathMap: async function () {
		return {
			'/': { page: '/' }
		};
	},
	presets: ['@babel/preset-env'],
	images: {
		loader: 'akamai',
		path: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:5050'
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.mp3$/,
			use: {
				loader: 'file-loader'
			}
		});
		return config;
	}
};

module.exports = nextConfig;
