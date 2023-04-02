const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJsonConfig = require("../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./Marketing": "./src/bootstrap",
      },
      shared: packageJsonConfig.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
