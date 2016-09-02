var HttpError   = require('../errors/http').HttpError;
var log         = require('../libs/log');

module.exports = function (err, req, res, next) {
    if (typeof err == 'number') {
        err = new HttpError(err);
    }

    if (!err instanceof HttpError) {
        log.error(err.message);
        err = new HttpError(500);
    }

    res.status = err.status;
    res.json({error: err.message});
};