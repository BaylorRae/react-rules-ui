// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',

  target: "node",

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "commonjs2"
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      }
    ]
  },

  plugins: [
    new CheckerPlugin()
  ],

  externals: [nodeExternals()]
};
