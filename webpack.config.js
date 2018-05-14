let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      {
        test:/\.(s*)css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            // modules: true,
            // localIdentName: '[name]'
            // localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }, {
          loader: 'sass-loader'
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BITBOX',
      template: 'src/index.html',
      filename: 'index.html'
    }),
      new UglifyJsPlugin()
  ]
};
