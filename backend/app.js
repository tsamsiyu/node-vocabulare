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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', guestRoutes);
app.all(/.+/, function (req, res, next) {
  next(404);
});
app.use(errorHandler);

module.exports = app;