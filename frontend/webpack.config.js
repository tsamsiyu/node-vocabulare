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
              'transform-runtime'
          ]
        }
      },
    ]
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "entry.min.js"
  },
  plugins: [
    new webpack.DefinePlugin({
        NODE_ENV:   JSON.stringify(process.env.NODE_ENV || 'development'),
        DEBUG:      debug
    }),
    new webpack.NoErrorsPlugin(),
  ]
};

if (!debug) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    );
}