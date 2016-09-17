module.exports.json = function (req, res, next) {
    res.json = function(data = {}) {
        this.end(JSON.stringify(data));
    };
    next();
};