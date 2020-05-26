const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const TerserWebpackPlugin = require('terser-webpack-plugin')

const config = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    stats: { children: false, warnings: false },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        warnings: false,
                        drop_console: false,
                        dead_code: true,
                        drop_debugger: true,
                    },
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: {
                        comments: false,
                        beautify: false,
                    },
                },
                parallel: true,
                sourceMap: false,
            }),
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 3,
                    enforce: true,
                },
            },
        },
    },
})

module.exports = config