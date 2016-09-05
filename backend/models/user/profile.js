var mongoose        = require('libs/mongoose');
var Schema          = mongoose.Schema;
var User            = require('./index');

var schema = new Schema({
    first_name: String,
    last_name: String,
    birthday: Date
});

var Profile = mongoose.model('Profile', schema);

module.exports.Profile = Profile;