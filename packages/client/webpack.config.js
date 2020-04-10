const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/load-presets');

const SRC_FOLDER = path.resolve(__dirname, 'src');

function modeConfig(env) {
  return require(`./build-utils/webpack.${env}`)(env);
}

module.exports = function (
  { mode, presets } = { mode: 'production', presets: [] },
) {
  return webpackMerge(
    {
      mode,
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]-[contenthash].bundle.js',
        chunkFilename: '[name]-[contenthash].bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.ts(x?)$/,
            include: SRC_FOLDER,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  experimentalWatchApi: true,
                },
              },
            ],
          },
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
      ],
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  )
}
