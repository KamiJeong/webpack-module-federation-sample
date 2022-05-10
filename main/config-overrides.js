const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // config.plugins = [
  //   new ModuleFederationPlugin({
  //     name: 'main',
  //     remotes: {
  //       sub1: 'sub1@[sub1Url]/remoteEntry.js',
  //       sub2: 'sub2@[sub2Url]/remoteEntry.js',
  //     },
  //     shared: {react: {singleton: true}, 'react-dom': {singleton: true}}
  //   }),
  //   new ExternalTemplateRemotesPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: './public/index.html',
  //   }),
  // ];
  return {
    ...config,
    output: {
      ...config.output,
      publicPath: 'auto',
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'main',
        remotes: {
          sub1: 'sub1@[sub1Url]/remoteEntry.js',
          sub2: 'sub2@[sub2Url]/remoteEntry.js',
        },
        shared: {react: {singleton: true}, 'react-dom': {singleton: true}}
      }),
      new ExternalTemplateRemotesPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ]
  };
}