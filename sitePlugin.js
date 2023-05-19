const webpack = require('webpack');

// eslint-disable-next-line
module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            fs: false,
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            url: require.resolve('url/'),
            path: require.resolve('path-browserify'),
            util: require.resolve('util/'),
            "assert": require.resolve("assert/"),
            "stream": require.resolve("stream-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "buffer": require.resolve("buffer/")
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: require.resolve('process/browser'),
          }),
        ],
      };
    },
  };
};
