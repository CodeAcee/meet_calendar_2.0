const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: '(none)',
  entry: './src/app.js',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'app.js',
  },
  watch: false,
  devServer: {
    contentBase: `${__dirname}/dist/`,
    watchContentBase: true,
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        }
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '/')],
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
};