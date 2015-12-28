require('dotenv').load();
const http = require('http');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();


(function () {
    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
        // Step 1: Create & configure a webpack compiler
        var webpack = require('webpack');
        var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
        var compiler = webpack(webpackConfig);

        // Step 2: Attach the dev middleware to the compiler & the server
        app.use(require("webpack-dev-middleware")(compiler, {
            noInfo: false, publicPath: webpackConfig.output.publicPath
        }));

        // Step 3: Attach the hot middleware to the compiler & the server
        app.use(require("webpack-hot-middleware")(compiler, {
            log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
        }));
    }
})();

//------------------set up middleware------------------------------------
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//------------------set up api routes------------------------------------
var apiFileNames = fs.readdirSync(path.join(__dirname, '/server/api'));
if(apiFileNames){
    apiFileNames.forEach((fileName) => {
        const tempApiPath = path.join(path.join(__dirname, '/server/api/' + fileName));
        var tempApi = require(tempApiPath);
        app.use('/api', tempApi);
    });
}


//------------------set up page routes------------------------------------


app.get('*',  (request, response) => {
    console.log('zadnja stanica');
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});



//------------------set up error handler------------------------------------
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});


if (require.main === module) {
    var server = http.createServer(app);
    server.listen(process.env.PORT || 1616, () => {
        console.log("Listening on %j", server.address());
    });
}

module.exports = app;