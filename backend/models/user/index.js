var crypto          = require('crypto');
var mongoose        = require('../../libs/mongoose');
var userValidators  = require('../../validators/user').validators;
var Profile         = require('./profile').Profile;
var validate        = require('../../libs/validate');

var Schema = mongoose.Schema;

var schema = new Schema({
    login: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

schema.methods.encryptPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
    .set(function (password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () {
        return this._plainPassword;
    });

schema.virtual('profile', {
    ref: 'Profile',
    localField: '_id',
    foreignField: 'userId'
});

var User = mongoose.model('User', schema);

User.signup = function(attributes, cb) {
    userValidators.signup(attributes).then(function(validatedUser) {
        var user = new User;
        user.fill(attributes, ['login', 'email', 'password']);

        var profile = new Profile;
        profile.fill(attributes, ['firstName', 'lastName', 'birthday']);

        user.save(function(uErr, uModel, uAffected) {
            if (uErr) return cb(uErr);
            profile.set('userId', user.get('_id')).save((pErr, profile) => {
                cb(pErr, user);
            });
        });
    }, function(errors) {
        cb(null, null, errors);
    });
};

User.signin = function(attributes, cb) {
    userValidators.signin(attributes).then(function(validatedUser) {
        var query = {};
        if (!validate.single(attributes.loginOrEmail, {email: true})) {
            query.email = attributes.loginOrEmail;
        } else {
            query.login = attributes.loginOrEmail;
        }

        User.findOne(query, function (err, user) {
            if (err) return cb(err);
            if (user && user.encryptPassword(attributes.password) === user.hashedPassword) {
                cb(null, user);
            } else {
                cb(null, null, {password: "Such user doesn't exist"});
            }
        });
    }, function(errors) {
        cb(null, null, errors);
    });
};

module.exports.User = User;