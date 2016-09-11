var express = require('express');
var router  = express.Router();

router.get('/initialize', function (req, res, next) {
    var settings = {};

    settings.isGuest = !!req.user;
    if (req.user) {
        settings.user = {
            firstName: req.user.profile.firstName,
            lastName: req.user.profile.lastName,
        };
    }

    res.end(JSON.stringify(settings));
});

module.exports = router;