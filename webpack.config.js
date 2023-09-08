const path = require('path');
const globEntry = require('webpack-glob-entry');

// Generate entry points with distinct filenames
const entries = globEntry('./js/index.js');
const entryPoints = {};
for (const entryName in entries) {
  entryPoints[entryName] = entries[entryName];
}

module.exports = {
    mode: 'development',
    entry: entries,
    output: {
    filename: 'core.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
    rules:[
      {
          test:/\.css$/,
          exclude: /node_modules/,
          use:['style-loader','css-loader']
      }
 ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
  },
  watchOptions: {
    ignored: /node_modules/,
  }


};
