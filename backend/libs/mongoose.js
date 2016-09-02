var mongoose            = require('mongoose');
var config              = require('config');
var mongooseUtils       = require('mongoose/lib/utils');

mongoose.connect(config.get('db:uri'), config.get('libs:mongoose'));

var prevModelFunction = mongoose.model;

mongoose.model = function(name, schema, collection, skipInit) {
    var m = prevModelFunction.call(mongoose, name, schema, collection, skipInit);
    m.prototype.meta = {
        collectionName: mongooseUtils.toCollectionName(name, schema),
        model: m
    };

    return m;
};

module.exports = mongoose;