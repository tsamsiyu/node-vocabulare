var crypto          = require('crypto');
var mongoose        = require('libs/mongoose');
var userValidators  = require('validators/user').validators;

var Schema = mongoose.Schema;

var schema = new Schema({
    login: {
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

User.prototype.signup = function (callback) {
    userValidators.signup(this).then(function (validatedUser) {
        validatedUser.save(function (err, savedUser, affected) {
            callback({status: 1});
        });
    }, function (errors) {
        callback({
            status: 0,
            errors: errors
        });
    });
};

module.exports.User = User;