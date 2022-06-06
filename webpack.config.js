const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, "bundle"),
        filename: "main.js"
    }
};