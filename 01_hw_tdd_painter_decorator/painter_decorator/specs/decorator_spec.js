const assert = require('assert');
const Paint = require('../models/paint.js')
const Room = require('../models/room.js')
const Decorator = require('../models/decorator.js')

describe('Decorator', function () {
    let decorator;
    let paint1;
    let paint2;
    let paint3;
    let paint4;
    let paint5;
    let room1;
    let room2;

    beforeEach(function () {
        decorator = new Decorator();
        paint1 = new Paint(10);
        paint2 = new Paint(5);
        paint3 = new Paint(10);
        paint4 = new Paint(5);
        paint5 = new Paint(3);
        room1 = new Room(20);
        room2 = new Room(30);
    });

    it('should have an empty paint stock', function () {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add paint to stock', function () {
        decorator.addCanOfPaint(paint1);
        decorator.addCanOfPaint(paint2);
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [paint1, paint2]);
    });

    it('should be able to calculate total litres of paint', function () {
        decorator.addCanOfPaint(paint1);
        decorator.addCanOfPaint(paint2);
        const actual = decorator.calculatePaintLitresInStock();
        assert.strictEqual(actual, 15);
    });

    it('should be able to calculate whether there is enough paint for a room', function () {
        decorator.addCanOfPaint(paint1);
        decorator.addCanOfPaint(paint2);
        const actual = decorator.getEnoughPaintForRoom(room1);
        assert.strictEqual(actual, false);
        decorator.addCanOfPaint(paint3);
        const actual1 = decorator.getEnoughPaintForRoom(room1);
        assert.strictEqual(actual1, true);
    });

    it('should be able to paint a room', function () {
        decorator.addCanOfPaint(paint1);
        decorator.addCanOfPaint(paint2);
        decorator.addCanOfPaint(paint3);
        decorator.paintRoom(room1);
        const actual = room1.painted
        assert.strictEqual(actual, true);
    });

    it('should be able to decrease amount of paint in stock', function () {
        decorator.addCanOfPaint(paint1);
        decorator.addCanOfPaint(paint2);
        decorator.addCanOfPaint(paint3);
        decorator.paintRoom(room1);
        const actual = room1.painted
        assert.strictEqual(actual, true);
        const actual1 = decorator.calculatePaintLitresInStock()
        assert.strictEqual(actual1, 5)
        const actual2 = paint3.litres
        assert.strictEqual(actual2, 5)
    });

    it('should be able to remove empty cans', function () {
        decorator.addCanOfPaint(paint1);
        decorator.addCanOfPaint(paint2);
        decorator.addCanOfPaint(paint3);
        decorator.paintRoom(room2);
        const actual = room2.painted
        assert.strictEqual(actual, false);
        decorator.addCanOfPaint(paint4);
        decorator.addCanOfPaint(paint5);
        decorator.paintRoom(room2);
        const actual1 = room2.painted
        assert.strictEqual(actual1, true);
        decorator.removeEmptyCans()
        const actual2 = decorator.calculatePaintLitresInStock()
        assert.strictEqual(actual2, 3)
        const actual3 = decorator.paintStock
        assert.deepStrictEqual(actual3, [paint5])
    });

});