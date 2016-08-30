var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./scripts/entry.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
              // 'react-html-attrs',
              // 'transform-class-properties',
              // 'transform-decorators-legacy',
              'transform-runtime'
          ]
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "entry.min.js"
  },
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.EnvironmentPlugin('NODE_ENV'),
    new webpack.DefinePlugin({
        NODE_ENV:   JSON.stringify(process.env.NODE_ENV || 'development'),
        DEBUG:      debug
    })
  ]
};

if (!debug) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    );
}