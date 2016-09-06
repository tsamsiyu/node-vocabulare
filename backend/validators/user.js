var validate = require('../libs/validate');

module.exports.validators = {
    signup: function (user) {
        var userConstraints = {
            email: {
                presence: true,
                email: true,
                unique: 'users'
            },
            login: {
                unique: true,
                length: { minimum: 2 }
            },
            password: {
                presence: true,
                length: { minimum: 6 }
            },
            first_name: {
                length: { minimum: 2 }
            },
            last_name: {
                length: { minimum: 2 }
            },
            // birthday: { // TODO: read documentation, format and parser must be set
            //     date: { earliest: true }
            // }
        };

        return validate.async(user, userConstraints);
    }
};