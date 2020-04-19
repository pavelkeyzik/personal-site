const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/load-presets');

const SRC_FOLDER = path.resolve(__dirname, 'src');

function modeConfig(env) {
  return require(`./build-utils/webpack.${env}`)(env);
}

module.exports = function (
  { mode, presets } = { mode: 'production', presets: [] }
) {
  return webpackMerge(
    {
      mode,
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]-[contenthash].bundle.js',
        chunkFilename: '[name]-[contenthash].bundle.js',
        publicPath: '/',
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
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
      ],
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          hooks: path.resolve(__dirname, 'src/hooks'),
          components: path.resolve(__dirname, 'src/components'),
          utils: path.resolve(__dirname, 'src/utils'),
          routes: path.resolve(__dirname, 'src/routes.ts'),
          types: path.resolve(__dirname, 'src/types.ts'),
        },
      },
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
