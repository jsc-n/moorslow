const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const PUBLIC = 'public';
const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: '127.0.0.1',
    contentBase: __dirname,
    publicPath: `/${PUBLIC}/`,
    hot: true,
    open: true,
    port: 8083,
    openPage: `http://127.0.0.1:8083/${PUBLIC}/`
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
module.exports = merge(common, config);
