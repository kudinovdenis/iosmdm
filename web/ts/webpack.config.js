const path = require('path');

module.exports = {
    devtool: "source-map",
    mode: 'development',
    entry: './root.ts',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['ts-loader', 'source-map-loader'],
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'root.js',
        path: path.resolve(__dirname, '../wwwroot/js'),
        clean: true,
    },
};