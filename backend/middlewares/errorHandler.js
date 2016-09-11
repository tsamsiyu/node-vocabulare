var HttpError   = require('../errors/http').HttpError;
var log         = require('../libs/log');

module.exports = function (err, req, res, next) {
    if (!err) {
        err = new HttpError(404);
    } else if (typeof err == 'number') {
        err = new HttpError(err);
    } else if (!err instanceof HttpError) {
        log.error(err.message);
        err = new HttpError(500);
    }

    res.status(err.status);
    res.end(JSON.stringify({error: err.message}));
};