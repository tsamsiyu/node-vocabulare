var User = require('../models/user').User;
var Profile = require('../models/user').Profile;
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

    req.getAppUser = function() {
        if (this.user instanceof User) {
            return {
                isGuest: false,
                firstName: this.user.profile.firstName,
                lastName: this.user.profile.lastName
            };
        } else {
            return {isGuest: true};
        }
    };

    const userId = lookup(req, 'session.user.id');
    if (userId !== undefined) {
        User.findById(userId).populate('profile').exec((err, user) => {
            if (err) return next(err);
            req.setUser(user);
            next();
        });
    } else {
        next();
    }
};