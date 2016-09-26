var express = require('express');
var router  = express.Router();
var User    = require('../models/user').User;

router.post('/signup', function (req, res, next) {
    if (res.user) return next();

    if (req.body.User) {
        User.signup(req.body.User, function (err, user, errors) {
            if (err) return next(err);
            if (errors) {
                res.json({status: 0, errors: errors});
            } else {
                res.json({status: 1});
            }
        });
    } else {
        next(400);
    }
});

router.post('/signin', function (req, res, next) {
    if (res.user) return next(404);

    if (req.body.User) {
        User.signin(req.body.User, function (err, user, errors) {
            if (err) return next(err);

            if (errors) {
                res.json({status: 0, errors: errors});
            } else {
                req.setUser(user);
                const appUser = getAppUser();
                res.json({status: 1, data: appUser});
            }
        });
    } else {
        next(400)
    }
});

router.post('/signout', function (req, res, next) {
    if (req.user) {
        req.session.destroy();
        res.json({status: true});
    } else {
        next(401)
    }
});

router.get('/session', function (req, res, next) {
    const appUser = req.getAppUser();
    res.json(appUser);
});

module.exports = router;