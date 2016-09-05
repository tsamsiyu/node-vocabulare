var mongoose            = require('mongoose');
var config              = require('config');
// var mongooseUtils       = require('mongoose/lib/utils');
var modelBasePatch      = require('./modelBasePatch');
var modelRelationsPatch = require('./modelRelationsPatch');

mongoose.connect(config.get('db:uri'), config.get('libs:mongoose'));

var prevModelFunction = mongoose.model;

mongoose.model = function(name, schema, collection, skipInit) {
    var m = prevModelFunction.call(mongoose, name, schema, collection, skipInit);

    modelBasePatch(m);
    modelRelationsPatch(m);

    return m;
};

module.exports = mongoose;