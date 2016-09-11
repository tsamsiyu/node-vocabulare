var express = require('express');
var router  = express.Router();
var User    = require('../models/user').User;
var Profile    = require('../models/user/profile').Profile;
var mongoose = require('../libs/mongoose');

router.post('/signup', function (req, res, next) {
    if (res.user) {
        next();
    }
    if (req.body.User) {
        User.signup(req.body.User, function (savingResult) {
            res.end(JSON.stringify(savingResult));
        });
    } else {
        next(400);
    }
});

router.post('/signin', function (req, res, next) {
    if (res.user) {
        next();
    }
    if (req.body.User) {
        User.signin(req.body.User, function (user) {
            if (user) {
                req.session.user = {
                    id: user._id
                }
            }

            res.end(JSON.stringify({ status: !!user }));
        });
    } else {
        next(400)
    }
});

module.exports = router;