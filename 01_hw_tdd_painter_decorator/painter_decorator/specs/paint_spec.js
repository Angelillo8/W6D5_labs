const assert = require('assert');
const Paint = require('../models/paint.js')

describe('Paint', function () {
    let paint1;
    let paint2;

    beforeEach(function () {
        paint1 = new Paint(10);
        paint2 = new Paint(5);
    });

    it('should have litres', function () {
        const actual = paint1.litres;
        assert.strictEqual(actual, 10);
    });

    it('should be not empty', function () {
        const actual = paint1.empty;
        assert.strictEqual(actual, false);
    });

    it('should get empty', function () {
        paint1.getEmpty();
        const actual = paint1.empty;
        assert.strictEqual(actual, true);
    });

});
