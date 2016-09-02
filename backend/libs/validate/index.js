var validate = require('validate.js');

validate.async.options = {
    cleanAttributes: false
};

validate.validators.unique = require('./unique');

module.exports = validate;