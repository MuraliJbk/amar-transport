const path = require('path');
const globEntry = require('webpack-glob-entry');

module.exports = {
    mode: 'development',
    entry: globEntry('./js/**/*.js'),
    output: {
    filename: 'core.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080, // Choose a port number
  },
  watchOptions: { // Add this section for watch options
    ignored: /node_modules/, // Specify directories/files to be ignored during watch
  }


};
