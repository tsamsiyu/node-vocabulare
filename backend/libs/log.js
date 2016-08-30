var winston = require('winston');
var ENV = process.env.NODE_ENV;

function getLogger(module) {
	var path = module.filename.split('/').slice(-2).join('/');

	var consoleTransport = new winston.transports.Console({
		colorize: true,
		level: (ENV == 'development') ? 'debug' : 'error',
		level: 'debug',
		label: path
	});

	return new (winston.Logger)({
		transports: [consoleTransport]
	});
}

module.exports = getLogger;