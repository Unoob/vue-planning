const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const bundleOutputDir = './wwwroot/dist';

module.exports = {
    mode: 'development',
    entry: { main: ["@babel/polyfill", './ClientApp/boot.js'] },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\??\#?v=[.0-9])?$/,
                loader: 'file-loader?name=/fonts/[name].[ext]',
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.s[a|c]ss$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name].js',
        //chunkFilename: '[name].bundle.js',
        publicPath: 'dist/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        // make sure to include the plugin for the magic
        new CleanWebpackPlugin(bundleOutputDir),
        new VueLoaderPlugin()
    ]
};
