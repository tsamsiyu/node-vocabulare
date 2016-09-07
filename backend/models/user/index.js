var crypto          = require('crypto');
var mongoose        = require('libs/mongoose');
var userValidators  = require('../../validators/user').validators;
var Profile         = require('./profile').Profile;

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

var User = mongoose.model('User', schema);

User.signup = function(attributes, cb) {
    userValidators.signup(attributes).then(function(validatedUser) {
        var user = new User;
        user.fill(attributes, ['login', 'email', 'password']);

        var profile = new Profile;
        profile.fill(attributes, ['firstName', 'lastName', 'birthday']);

        user.save(function(uErr, uModel, uAffected) {
            if (uErr) throw uErr;
            profile.set('userId', user.get('_id')).save(function (pErr, pModel, pAffected) {
                if (pErr) throw pErr;
                cb({ status: 1 });
            });
        });
    }, function(errors) {
        cb({ status: 0, errors: errors });
    });
};

module.exports.User = User;