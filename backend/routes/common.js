var express = require('express');
var router  = express.Router();

router.get('/initialize', function (req, res, next) {
    if (req.user) {
        req.user.profile.get(function(err, profile) {
            if (err) return next(err);
            var settings = {isGuest: false};
            if (profile) {
                settings.user = {
                    firstName: profile.get('firstName'),
                    lastName: profile.get('lastName'),
                };
            }
            res.json(settings);
        });
    } else {
        res.json({isGuest: true});
    }
});

module.exports = router;