const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const config = {
  mode: 'production'
};
module.exports = merge(common, config);
