const assert = require('assert');
const Room = require('../models/room.js')

describe('Room', function () {
    let room1;
    let room2;

    beforeEach(function () {
        room1 = new Room(20);
        room2 = new Room(30);
    });

    it('should have square meters', function () {
        const actual = room1.squareMeters;
        assert.strictEqual(actual, 20);
    });

    it('should be not painted', function () {
        const actual = room1.painted;
        assert.strictEqual(actual, false);
    });

    it('should get painted', function () {
        room1.paint();
        const actual = room1.painted;
        assert.strictEqual(actual, true);
    });

});