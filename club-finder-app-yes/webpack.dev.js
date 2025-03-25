const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FavIconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        watchFiles: ['index.html', 'src/**/*'],
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new FavIconsWebpackPlugin('./src/public/favicon.png'),
    ],
});
