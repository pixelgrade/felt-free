const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
	mode: 'development',
	/**
	 * Tell Webpack we want sourcemaps in our developer tools
	 * Note this ternary is a hack, because there prod will not build with sourcemaps
	 * https://github.com/webpack-contrib/sass-loader/issues/351
	 */
	devtool: "source-map",
	plugins: [
		new BundleAnalyzerPlugin()
	]
});
