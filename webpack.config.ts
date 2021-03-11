import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";

const isDevelopment = process.env.NODE_ENV !== 'production'
const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    devtool: isDevelopment ? 'eval-source-map' : "source-map",
    mode: isDevelopment ? 'development' : "production",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    plugins: [new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
            files: "./src/**/*",
        },
    }), new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    })],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 4000,
    },
};

export default config;