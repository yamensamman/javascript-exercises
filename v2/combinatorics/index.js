const factorial = require('../factorial/index').factorial;
const memoizationMap = new Map();

function fastFactorial(n) {
    if (n === 1 || n === 0) return 1; // By definition

    let result = memoizationMap.get(n);
    if (result) return result;

    result = n * fastFactorial(n - 1);
    memoizationMap.set(n, result);
    return result;
}

// Combination (n choose k)
function nCk(n, k) {
    if (n === k) return 1; // No need to calculate 100! to discover that 100!/100! is 1

    return fastFactorial(n)/(fastFactorial(k) * fastFactorial(n - k));
}

// Permutation
function nPk(n, k) {
    return fastFactorial(n)/fastFactorial(n - k);
}

module.exports = { nCk, nPk };