const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputFileName = "dist"

module.exports = {
    entry: "./src/index.tsx",

    output: {
        path: path.resolve(__dirname, outputFileName),
        filename: "main.js"
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, outputFileName)
        },
        port: 8000,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },

    resolve: {
        extensions: [
            '.ts', '.tsx', '.js', 'jsx', 'css'
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
