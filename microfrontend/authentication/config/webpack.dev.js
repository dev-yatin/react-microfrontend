const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJsonConfig = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "authentication",
      filename: "remoteEntry.js",
      exposes: {
        "./Authentication": "./src/bootstrap",
      },
      shared: packageJsonConfig.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
