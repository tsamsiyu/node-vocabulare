var express = require('express');
var router  = express.Router();
var User    = require('../models/user').User;
var Profile = require('../models/user/profile').Profile;

User.remove().exec();
Profile.remove().exec();
//
// var u = new User({
//     email: 'lskdjf@gmail.com',
//     password: 'slkdjf;aksdjf'
// });
//
// console.log(u.isNew);
// u.save(function () {
//     console.log(u.isNew);
// });

//
// var p = new Profile({
//     first_name: 'Peter',
//     last_name: 'Valono'
// });
//
// u.setRelation('profile', p);
// u.updateRelation('profile');



router.post('/signup', function (req, res, next) {
    if (req.body.User) {
        var profile = new Profile(req.body.Profile);
        var user    = new User(req.body.User);
        // user.setProfile(profile);
        user.signup(function (savingResult) {
            res.end(JSON.stringify(savingResult));
        });
    } else {
        next(500);
    }
});

module.exports = router;