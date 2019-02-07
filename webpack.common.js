const path = require('path');
const webpack = require('webpack');

module.exports = {
	/**
	 * This is the entry point for our application src/App.ts everything including an import to our scss goes through here
	 */
	entry: {
		app: './variations/felt/ts/App.ts'
	},
	externals: {
		jquery: 'jQuery',
		imagesloaded: 'imagesLoaded',
		'masonry-layout': 'Masonry',
		'jquery-hoverintent': 'jQuery',
		gsap: '_gsScope',
		select2: 'jQuery',
		'slick-carousel': 'jQuery',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /node_modules/,
					chunks: "initial",
					name: "commons",
					filename: "commons.js",
					priority: 10,
					enforce: true
				}
			}
		}
	},
	/**
	 * This is where our bundled stuff is saved and the public path is what we link to in our script tags
	 */
	output: {
		path: path.resolve(__dirname, './assets/js'),
		filename: '[name].bundle.js',
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
						presets: ['babel-preset-env']
					}
				}, {
					loader: "ts-loader"
				}]
			},
		]
	},
};
