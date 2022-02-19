const path = require('path');
module.exports = {
    mode: 'production',
    entry: './source/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
}