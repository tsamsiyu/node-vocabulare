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
                unique: 'users',
                length: { minimum: 2 }
            },
            password: {
                presence: true,
                length: { minimum: 6 }
            },
            passwordRepeat: {
                presence: true,
                equality: 'password'
            },
            first_name: {
                length: { minimum: 2 }
            },
            last_name: {
                length: { minimum: 2 }
            },
            birthday: {
                date: { earliest: true }
            }
        };

        return validate.async(user, userConstraints);
    }
};