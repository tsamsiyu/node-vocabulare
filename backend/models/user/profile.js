var mongoose        = require('../../libs/mongoose');
var Schema          = mongoose.Schema;
var User            = require('./index');

var schema = new Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    userId: Schema.Types.ObjectId,
});


var Profile = mongoose.model('Profile', schema);

Profile.belongsToOne('User');

module.exports.Profile = Profile;