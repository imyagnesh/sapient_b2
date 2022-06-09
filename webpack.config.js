const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = ["index", "login", "register", "products"];

module.exports = {
    entry: pages.reduce((p, c) => {
        p[c] = `./src/${c}.js`;
        return p;
    }, {}),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [].concat(pages.map(page => new HtmlWebpackPlugin({
        template: `./public/${page}.html`,
        filename: `${page}.html`,
        chunks: [page]
    }))),
    devServer: {
        static: {
            directory: path.join(__dirname, "static"),
            publicPath: "/static"
        }
    }

};