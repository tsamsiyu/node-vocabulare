var User = require('../models/user').User;

module.exports = function (req, res, next) {
    if (!req.session.user || !req.session.user.id) return next();

    User.findById(req.session.user.id, function (err, user) {
        if (err) return next(err);

        req.user = user;
        next();
    });
};