var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

router.post('/signup', function (req, res, next) {
    if (req.body.User) {
        var user = new User(req.body.User);
        user.signup(function (savingResult) {
            res.end(JSON.stringify(savingResult));
        });
    } else {
        next(500);
    }
});

module.exports = router;