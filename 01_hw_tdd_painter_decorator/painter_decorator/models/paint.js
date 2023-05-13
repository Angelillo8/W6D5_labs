const Paint = function (litres) {
    this.litres = litres;
    this.empty = false;
};

Paint.prototype.getEmpty = function () {
    this.empty = true;
};

module.exports = Paint;
