const assert = require('assert');
const {message} = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
});

try {
    assert.strictEqual(1, 2);
} catch (err) {
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
}