const path = require('path');

module.exports = {
    mode: 'development',
    entry: './root.ts',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
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