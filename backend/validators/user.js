var validate = require('../libs/validate');

module.exports.validators = {
    signup: function (user) {
        var constraints = {
            login: {
                presence: true,
                unique: user.meta.collectionName,
                length: {
                    minimum: 4,
                    message: "must be at least 6 characters"
                }
            },
            password: {
                presence: true,
                length: {
                    minimum: 6,
                    message: "must be at least 6 characters"
                }
            }
        };

        return validate.async(user, constraints);
    }
};