const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	/**
	 * This is the entry point for our application src/App.ts everything including an import to our scss goes through here
	 */
	entry: {
		scripts: './variations/felt/ts/App.ts',
		"scripts.min": './variations/felt/ts/App.ts'
	},
	externals: {
		jquery: 'jQuery',
		imagesloaded: 'imagesLoaded',
		'masonry-layout': 'Masonry',
		'jquery-hoverintent': 'jQuery',
		gsap: '_gsScope',
		select2: 'jQuery',
		'slick-carousel': 'jQuery',
		animejs: 'anime',
		'js-cookie': 'Cookies',
		circletype: 'CircleType',
	},
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				include: /\.min\.js$/,
			})
		],
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: '@codingStandardsIgnoreFile\nphpcs:ignoreFile',
			include: ['scripts.js', 'scripts.min.js']
		}),
	],
	/**
	 * This is where our bundled stuff is saved and the public path is what we link to in our script tags
	 */
	output: {
		path: path.resolve(__dirname, './assets/js'),
		filename: '[name].js',
		// Set this to whatever the relative asset path will be on your server
		publicPath: '/'
	},
	/**
	 * Resolver helps webpack find module code that needs to be included for every bundle
	 */
	resolve: {
		/**
		 * Specify which extensions we want to look at for module bundling
		 */
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		/**
		 * Include our typescript and sass loaders
		 */
		rules: [
			/**
			 * Loader for TSHint
			 */
			{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					rules: {
						configuration: require('./tslint.json')
					}
				}
			},
			/**
			 * Typescript loader, excludes node_modules in case any dependencies use ts
			 */
			{
				test: /\.ts$/,
				exclude: [/node_modules/],
				use: [{
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}, {
					loader: "ts-loader"
				}]
			},
		]
	},
};
