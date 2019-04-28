// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Memoization! === Dynamic Programming
// Same solution as (4) just in a different way (func + memoizer)

// Generic memoizer
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) return cache[args];
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

function slowFib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

// (2)
// function fib(n) {
//     if (n === 0 || n === 1) return n;

//     return (fib(n-1) + fib(n-2));
// }

// (3)
// function fib(n) {
//     const fibValues = [0, 1];
    
//     for (let i = 2; i <= n; i++) {
//         fibValues[i] = fibValues[i-1] + fibValues[i-2];
//     }
    
//     return fibValues[n];
// }

// (4)
// function fib(n, memoizationMap = {}) {
//     if (n < 2) return n;
//     if (typeof memoizationMap[n] !== 'undefined') return memoizationMap[n];

//     const result = fib(n-1, memoizationMap) + fib(n-2, memoizationMap);
//     memoizationMap[n] = result;
//     return result;
// }