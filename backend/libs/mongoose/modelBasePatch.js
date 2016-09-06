module.exports = function (model) {
    model.prototype.update = function(hash, cb) {
        let newAttributes = {};
        if (typeof hash === 'string') {
            hash = [hash];
        }
        hash.forEach(function(item) {
            newAttributes[item] = this.get(item);
        });
        this.constructor.update({_id: this._id}, {$set: newAttributes}, cb);
    };

    model.prototype.fill = function(container, safeAttributes) {
        safeAttributes.forEach(function(attr) {
            if (container[attr]) {
                this.set(attr, container[attr]);
            }
        });
    };
};