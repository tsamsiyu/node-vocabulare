var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    index: "./applications/index/entry.js"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
              'transform-decorators-legacy'
          ]
        }
      },
      {
        test: /\.json/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include: /node_modules/,
        loader: 'file?name=[1].[ext]&regExp=node_modules/(.*)'
      },
      {
        test: /\.(css|scss)(\?v=\d+\.\d+\.\d+)?$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!autoprefixer?browsers=last 2 versions'),
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        NODE_ENV:   JSON.stringify(process.env.NODE_ENV || 'development'),
        DEBUG:      debug
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      React: 'react'
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.NoErrorsPlugin(),
    // new BowerWebpackPlugin({
    //   modulesDirectories: ['bower_components'],
    //   manifestFiles: ['bower.json', '.bower.json'],
    //   includes: /.*/,
    //   excludes: /.*\.less$/
    // }),
  ]
};

if (!debug) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    );
}