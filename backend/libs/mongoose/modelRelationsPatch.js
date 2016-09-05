module.exports = function(model) {
    var _relationsDefinitions = {};
    var _relations;

    var _relation = function (name, relationConstructor, isRelationCarrier, relationAttribute, hasMany) {
        _relationsDefinitions[name] = {
            relationConstructor: relationConstructor,
            isRelationCarrier: isRelationCarrier,
            relationAttribute: relationAttribute,
            hasMany: hasMany,
            hasOne: !hasMany
        };
    };

    model.hasMany = function (name, relationConstructor, attribute) {
        _relation(name, relationConstructor, true, attribute, true);
    };

    model.hasOne = function (name, relationConstructor, attribute) {
        _relation(name, relationConstructor, true, attribute, false);
    };

    model.belongsTo = function (name, relationConstructor, relationAttribute, hasMany = true) {
        _relation(name, relationConstructor, false, relationAttribute, hasMany);
    };

    model.prototype.setRelation = function(name, relationObject) {
        if (this.hasRelation(name)) {
            let rel = _relationsDefinitions[name];
            if (!relationObject instanceof rel.relationConstructor) {
                throw new Error('Value must have constructor type');
            }

            if (rel.isRelationCarrier) {
                this.set(rel.relationAttribute, relationObject.get('_id'));
            } else {
                relationObject.set(rel.relationAttribute, this.get('_id'));
            }
        } else {
            throw new Error('Such relation is absent: ' + name);
        }
    };

    model.prototype.getRelation = function(name, cb, reload = false) {
        if (this.hasRelation(name)) {
            if (reload || _relations[name] === undefined) {
                let rel = _relationsDefinitions[name];
                let relationQuery = {};

                if (rel.isRelationCarrier) {
                    if (this.get(rel.relationAttribute)) {
                        // TODO: add check on set of values
                        relationQuery['_id'] = this.get(rel.relationAttribute);
                    } else {
                        relationQuery = null;
                    }
                } else {
                    if (this.isNew) {
                        relationQuery = null;
                    } else {
                        // TODO: add check on set of values
                        relationQuery[rel.relationAttribute] = this.get('_id');
                    }
                }

                if (relationQuery) {
                    if (rel.hasOne) {
                        rel.relationConstructor.findOne(relationQuery, function (err, doc) {
                            _relations[name] = doc;
                            cb(doc);
                        });
                    } else {
                        rel.relationConstructor.find(relationQuery, function (err, docs) {
                            _relations[name] = docs;
                            cb(docs);
                        });
                    }
                } else {
                    _relations[name] = null;
                    cb(null);
                }
            } else {
                cb(_relations[name]);
            }
        } else {
            throw new Error('Such relation is absent: ' + name);
        }
    };

    model.prototype.hasRelation = function(name) {
        return _relationsDefinitions.hasOwnProperty(name);
    };
};