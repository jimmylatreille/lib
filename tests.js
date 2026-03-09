const path = require('path');

function runTests(libPath) {
    console.log(`\nTesting: ${libPath}`);
    const lib = require(path.resolve(libPath));

    let passed = 0;
    let failed = 0;

    function assert(condition, message) {
        if (condition) {
            passed++;
        } else {
            failed++;
            console.error(`FAILED: ${message}`);
        }
    }

    // lib.isObject
    assert(lib.isObject({a: 1}) === true, 'lib.isObject({a: 1}) should be true');
    assert(lib.isObject([]) === false, 'lib.isObject([]) should be false');
    assert(lib.isObject(null) === false, 'lib.isObject(null) should be false');

    // lib.deepClone
    const obj = { a: 1, b: { c: 2 } };
    const clone = lib.deepClone(obj);
    assert(JSON.stringify(obj) === JSON.stringify(clone), 'lib.deepClone should clone object');
    assert(obj !== clone && obj.b !== clone.b, 'lib.deepClone should be a deep clone');

    // String.prototype.clean
    assert("a    b".clean() === "a b", '"a    b".clean() should be "a b"');

    // String.prototype.capitalize
    assert("hello".capitalize() === "Hello", '"hello".capitalize() should be "Hello"');

    // String.prototype.truncate
    assert("hello world".truncate(5) === "hello...", '"hello world".truncate(5) should be "hello..."');
    assert("hi".truncate(5) === "hi", '"hi".truncate(5) should be "hi"');

    // Array.prototype.unique
    assert(JSON.stringify([1, 2, 2, 3].unique()) === JSON.stringify([1, 2, 3]), '[1, 2, 2, 3].unique() should be [1, 2, 3]');

    // Array.prototype.shuffle
    const arr = [1, 2, 3, 4, 5];
    const shuffled = [...arr].shuffle();
    assert(shuffled.length === 5 && shuffled.sort().join(',') === '1,2,3,4,5', 'Array.prototype.shuffle should maintain elements');

    // Number.prototype.clamp
    assert((10).clamp(0, 5) === 5, '(10).clamp(0, 5) should be 5');
    assert((3).clamp(0, 5) === 3, '(3).clamp(0, 5) should be 3');
    assert((-1).clamp(0, 5) === 0, '(-1).clamp(0, 5) should be 0');

    // lib.debounce (limited test in Node)
    let count = 0;
    const debounced = lib.debounce(() => count++, 50);
    debounced();
    debounced();
    setTimeout(() => {
        assert(count === 1, 'lib.debounce should only execute once');
        finish();
    }, 100);

    function finish() {
        console.log(`Passed: ${passed}, Failed: ${failed}`);
        if (failed > 0) process.exit(1);
    }
}

// Run for both lib.js and lib.min.js
runTests('./lib.js');
// We need to clear cache for require to test the other one
delete require.cache[require.resolve('./lib.js')];
// Wait for the first test suite to finish due to async debounce test
setTimeout(() => {
    runTests('./lib.min.js');
}, 500);
