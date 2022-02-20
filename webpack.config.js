const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    //개발용 또는 상용(production )
    // mode:  'development',
    //debugging시 source level로 
    //devtool: 'eval-source-map',
    devtool: 'source-map',
    // 시작정
    entry: './source/index.js',
    //key value 형태로 설정할 수도 있음
    //entry : {
    //    main: './source/index.js'
    //}
    //최종 형태
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
        //entry에 key 값을 사용할 수도 있음
        //filename:'[name].js' 
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'common.css'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }]
            }
        ]
    }
}