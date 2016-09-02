var util = require('util');
var http = require('http');

// *** BaseError ***
function BaseError(message) {
    this.setMessage(message);
    Error.captureStackTrace(this, BaseError);
}

BaseError.prototype.setMessage = function (message) {
    if (message) {
        this.message = message instanceof Object ? JSON.stringify(message) : message;
    }

    if (!this.message) {
        this.message = 'Error';
    }
};

NotFoundHttpError.prototype.name = 'BaseError';
util.inherits(BaseError, Error);

// *** HttpError ***
function HttpError(status, message) {
    this.status = status;
    this.setMessage(message);
    Error.captureStackTrace(this, HttpError);
}

HttpError.setMessage = function (message, status) {
    status = status || this.status;
    if (message) {
        this.message = message instanceof Object ? JSON.stringify(message) : message;
    } else if (status) {
        this.message = http.STATUS_CODES[this.status];
    }

    if (!this.message) {
        this.message = 'Error';
    }
};

NotFoundHttpError.prototype.name = 'HttpError';
util.inherits(HttpError, BaseError);

// *** NotFoundHttpError ***
function NotFoundHttpError() {
    this.status = 404;
    this.setMessage('Page not found');
    Error.captureStackTrace(this, NotFoundHttpError);
}

NotFoundHttpError.prototype.name = 'NotFoundHttpError';
util.inherits(NotFoundHttpError, HttpError);

// *** InvalidRequestHttpError ***
function InvalidRequestHttpError() {
    this.status = 500;
    this.setMessage('Invalid request');
    Error.captureStackTrace(this, InvalidRequestHttpError);
}

NotFoundHttpError.prototype.name = 'InvalidRequestHttpError';
util.inherits(InvalidRequestHttpError, HttpError);

module.exports = {
    BaseError: BaseError,
    HttpError: HttpError,
    NotFoundHttpError: NotFoundHttpError,
    InvalidRequestHttpError: InvalidRequestHttpError
};