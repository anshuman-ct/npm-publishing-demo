const test = require('node:test');
const assert = require('node:assert');

const { add, subtract } = require('./index');

test('addition works correctly', () => {
    assert.strictEqual(add(2, 3), 5);
});

test('subtraction works correctly', () => {
    assert.strictEqual(subtract(5, 3), 2);
});