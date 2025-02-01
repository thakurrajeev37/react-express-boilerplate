import path from 'path';
import webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoader = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        ['@babel/preset-react', {'runtime': 'automatic'}]
                    ]
                }
            }
        }
    ]
}
const resolve = {
    extensions: ['.js', '.jsx']
}