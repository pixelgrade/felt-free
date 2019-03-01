const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ShakePlugin = require('webpack-common-shake').Plugin;

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new ShakePlugin()
	]
});
