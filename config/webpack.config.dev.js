const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const config = webpackMerge(baseWebpackConfig, {
    devtool: 'eval-source-map',
    mode: 'development',
    stats: { children: false },
})

module.exports = config