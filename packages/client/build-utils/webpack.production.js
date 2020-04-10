const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function() {
  return {
    devtool: 'source-map',
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin([{ from: 'public', ignore: ['index.html'] }]),
    ],
  };
};
