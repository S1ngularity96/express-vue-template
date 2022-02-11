const express = require('express')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var apiResponse = require('./src/helpers/apiResponse');
var bodyParser = require('body-parser');
const Ports = require('./settings').Ports

var backend = express();
//don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    backend.use(logger('dev'));
}

//Router
var apiRouter = require('./src/routes/api');

//Für Cross-Origin Requests
backend.use(cors());
backend.use(bodyParser.json());
backend.use(express.json());
backend.use(express.urlencoded({ extended: true }));
backend.use(cookieParser());
//Routen
backend.use('/api', apiRouter);
// Falsche API Endpoints
backend.all('/api/*', function (req, res) {
    apiResponse.BadRequestResponse(res, `Api with Method ${req.method} and origin ${req.originalUrl} does not exist`);
});

module.exports = {
    backend,
    backendport: process.env.NODE_ENV === "development" ? Ports.Backend.Dev : Ports.Backend.Prod
}