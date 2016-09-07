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

// MIDDLEWARE-s
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Content-Type', 'application/json');
  next();
});
// ROUTES
app.use('/', guestRoutes);
// app.use('*', function(req, res, next) {
//   next(404);
// });
// app.use(errorHandler); // TODO: need to test

module.exports = app;