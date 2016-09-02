var express       = require('express');
var config        = require('config');
var log           = require('libs/log')(module);
var http          = require('http');
var path          = require('path');
var bodyParser    = require('body-parser');
var guestRoutes   = require('./routes/guest');
var errorHandler  = require('./middlewares/errorHandler');
var app           = express();

http.createServer(app).listen(config.get("port"), function () {
  log.info('Server started');
});

// middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorHandler());

// routes
app.use('/', guestRoutes);

module.exports = app;