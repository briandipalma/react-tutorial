var webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer:
  entry: './src/main',

//  entry: [
//    'webpack-dev-server/client?http://localhost.caplin.com:8080',
//    'webpack/hot/dev-server',
//    './src/main'
//  ],

  output: {
    // Where to put build results when doing production builds:
    // (Server doesn't write to the disk, but this is required.)
    path: __dirname,

    // JS filename you're going to use in HTML
    filename: 'bundle.js',

    // Path you're going to use in HTML
    publicPath: '/scripts/'
  },

//  plugins: [
//    new webpack.HotModuleReplacementPlugin()
//  ],

  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      // Pass *.jsx files through jsx-loader transform
      { test: /\.jsx$/, loaders: ['jsx'] },
//      { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
    ]
  }
};
