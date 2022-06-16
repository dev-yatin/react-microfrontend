const { merge } = require("html-webpack-plugin");
const packageJsonConfig = require("../package.json");
const commonConfig = require("./webpack.common");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJsonConfig.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);