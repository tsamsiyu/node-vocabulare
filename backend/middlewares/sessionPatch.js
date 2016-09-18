var User = require('../models/user').User;
var lookup = require('lodash/get');

module.exports = function (req, res, next) {
    req.setUser = function(user) {
        if (!user instanceof User) {
            throw new Error('User must implements interface User');
        }
        this.user = user;
        this.session.user = { id : user._id};
        this.emit('setAppUser');
        return this;
    };

    req.getAppUser = function(cb) {
        if (this.user instanceof User) {
            this.user.profile.get((err, profile) => {
                if (err) return cb(err);
                cb(null, {
                    isGuest: false,
                    firstName: profile.firstName,
                    lastName: profile.lastName
                });
            });
        } else {
            cb(null, {isGuest: true});
        }
    };

    var userId = lookup(req, 'session.user.id');
    if (userId) {
        User.findById(userId, (err, user) => {
            if (err) return next(err);
            req.setUser(user);
            next();
        });
    } else {
        next();
    }
};