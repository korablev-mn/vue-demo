const path = required("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
// const { resolveComponent } = require('vue');

const config = {
    entry: {
        main: ".src/main.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolveComponent(__dirname, "app")
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./index.html"
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        compress: true,
        open: true,
        port: 8000
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
            test: /\.sass$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
              "vue-style-loader",
            ],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
              loader: "url-loader",
            }],
        },
      ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.json', '.wasm', '.vue'],
        modules: ['node_modules'],
        modulesDirectories: [
            'node_modules'
          ] 
    }
}
