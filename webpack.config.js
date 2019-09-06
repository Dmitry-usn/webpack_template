const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'application.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'script.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/, use: 'raw-loader'
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: './img/[name].[ext]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'My App',
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css'
        })
    ],
    resolve: {
        extensions: [ '.js', '.jsx' ]
    },
};