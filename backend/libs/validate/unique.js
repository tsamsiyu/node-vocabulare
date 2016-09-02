var mongoose        = require('./../mongoose');
var connStates      = require('mongoose/lib/connectionstate');

var uniqueValidator = function (value, options, field, hash) {
    var collectionName, collectionField;
    var isOptionsObject = options instanceof Object;

    if (isOptionsObject && options.collection) {
        collectionName = options.collection;
    } else if (options instanceof String) {
        collectionName = options;
    } else {
        collectionName = hash.meta.collectionName;
    }

    if (isOptionsObject && options.field) {
        collectionField = options.field;
    } else {
        collectionField = field;
    }

    return new Promise(function (resolve, reject) {
        var conditions = [];
        conditions[collectionField] = value;

        try {
            if (mongoose.connection.readyState == connStates.connected) {
                _mustUnique(resolve, collectionName, conditions);
            } else {
                mongoose.connection.on('open', function () {
                    _mustUnique(resolve, collectionName, conditions);
                });
            }
        } catch (e) {
            resolve('was broken')
        }
    });
};

var _mustUnique = function (resolve, collectionName, conditions) {
    var db = mongoose.connection.db;
    var collection = db.collection(collectionName);
    collection.count(conditions, function (err, cnt) {
        if (cnt > 0) {
            resolve('already exists');
        } else {
            resolve();
        }
    });
};

module.exports = uniqueValidator;