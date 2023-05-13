const Room = function (squareMeters) {
    this.squareMeters = squareMeters;
    this.painted = false;
};

Room.prototype.paint = function () {
    this.painted = true;
};

module.exports = Room;