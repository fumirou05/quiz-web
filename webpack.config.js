const { resolve } = require('path');
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",

    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "main.js"
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, "docs")
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
    }
}
