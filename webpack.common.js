const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require('path');
const PUBLIC = 'public';
const DIST_DIR = path.resolve(__dirname, PUBLIC);

const OUTPUT = {
  JS: `js/moorslow.bundle`
};

const CONFIG = {
  entry: glob.sync('./src/**/index.js').reduce(
    (acc, pathname) => {
      acc[OUTPUT.JS].push(pathname);
      return acc;
    },
    {
      [OUTPUT.JS]: ['@babel/polyfill']
    }
  ),
  output: {
    filename: '[name].js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.join(__dirname),
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        include: path.join(__dirname),
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: `index.html`
    }),
    new webpack.ProgressPlugin()
  ]
};

module.exports = CONFIG;
