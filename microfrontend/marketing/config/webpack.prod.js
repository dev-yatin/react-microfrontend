const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJsonConfig = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
    mode:'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: "/marketing/latest/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                "./Marketing": "./src/bootstrap"
            },
            shared: packageJsonConfig.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);