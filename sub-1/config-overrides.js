const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // config.plugins = [
  //   new ModuleFederationPlugin({
  //     name: 'sub1',
  //     filename: 'remoteEntry.js',
  //     exposes: {
  //       './App': './src/App',
  //     },
  //     shared: {react: {singleton: true}, 'react-dom': {singleton: true}}
  //   }),
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
        name: 'sub1',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
        },
        shared: {react: {singleton: true}, 'react-dom': {singleton: true}}
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ]
  };
}