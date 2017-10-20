var path = require('path');
let htmlWebPackPlugin = require('html-webpack-plugin');

let paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js')
};


module.exports = {
    'entry': path.join(paths.JS, 'app.js'),
    'output': {
        'path': paths.DIST,
        'filename': 'app.bundle.js'
    },
    'plugins': [
        new htmlWebPackPlugin({
            'template': path.join(paths.SRC, 'index.html')
        })
    ],
    'module': {
        "rules": [
            {
                'test': /\.(js|jsx)$/,
                'exclude': /node_module/,
                "use": ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
    /*'devServer': {
        "contentBase": paths.SRC
    }*/

};