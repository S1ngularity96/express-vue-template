var express = require('express');
var path = require('path');
//Utils
var history = require('connect-history-api-fallback')
//Index route
const settings = require('./settings');
const Ports = require('./settings').Ports
var indexRouter = require('./src/routes/index');
var frontend = express();
frontend.use(history())
frontend.use(express.static(settings.PUBLIC.DIR));
frontend.use('/', indexRouter)


module.exports = {
    frontendport: process.env.NODE_ENV === "development" ? Ports.Front.Dev : Ports.Front.Prod,
    frontend
}
