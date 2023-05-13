const Decorator = function () {
    this.paintStock = [];
};

Decorator.prototype.addCanOfPaint = function (canOfPaint) {
    this.paintStock.push(canOfPaint);
};

Decorator.prototype.calculatePaintLitresInStock = function () {
    const paintInStock = this.paintStock.reduce((total, currentValue) => {
        return total + currentValue.litres;
    }, 0);
    return paintInStock;
};

Decorator.prototype.getEnoughPaintForRoom = function (room) {
    const paintInStock = this.calculatePaintLitresInStock();
    if (paintInStock >= room.squareMeters) {
        return true;
    } else {
        return false;
    };
};

Decorator.prototype.usePaint = function (room) {
    let squareMeters = room.squareMeters;
    let index = 0;
    do {
        if (squareMeters >= this.paintStock[index].litres) {
            squareMeters = squareMeters - this.paintStock[index].litres;
            this.paintStock[index].litres = 0;
            this.paintStock[index].getEmpty();
            index++;
        } else {
            this.paintStock[index].litres = this.paintStock[index].litres - squareMeters;
            squareMeters = 0;
        };
    }
    while (squareMeters > 0);
};

Decorator.prototype.paintRoom = function (room) {
    const enoughPaint = this.getEnoughPaintForRoom(room);
    if (enoughPaint === true) {
        this.usePaint(room);
        room.paint();
    } else {
        return 'There is not enough paint to paint this room.';
    };
};

Decorator.prototype.removeEmptyCans = function () {
    const cansWithPaint = this.paintStock.filter((can) => {
        return can.empty === false;
    });
    this.paintStock = cansWithPaint;
};

module.exports = Decorator;
