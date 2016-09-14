var express       = require('express');
var config        = require('config');
var log           = require('libs/log')(module);
var http          = require('http');
var path          = require('path');
var bodyParser    = require('body-parser');
var errorHandler  = require('./middlewares/errorHandler');
var session       = require('express-session');
var mongoose      = require('./libs/mongoose');
var loadUser      = require('./middlewares/loadUser');
var app           = express();
var MongoStore    = require('connect-mongo')(session);

http.createServer(app).listen(config.get("port"), function () {
  log.info('Server started');
});

// MIDDLEWARE-s
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  resave: true,
  saveUninitialized: true
}));
app.use(loadUser);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Content-Type', 'application/json');
  next();
});
// ROUTES
app.use('/', require('./routes/guest'));
app.use('/', require('./routes/common'));

// app.use(function (req, res, next) {
//   // if (!res.user) {
//     app.use('/', require('./routes/guest'));
//   // }
//
//   next();
// });
// app.use('*', function(req, res, next) {
//   next(404);
// });
// app.use(errorHandler); // TODO: need to test

module.exports = app;