const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/app.js',
  target: 'node',
  devtool: 'inline-source-map',
  plugins: [
    // For cleaning up the /dist folder before each build
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
    ],
  },
  externals: [nodeExternals()],
  mode: 'development',
};
