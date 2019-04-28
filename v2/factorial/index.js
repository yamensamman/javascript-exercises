// JavaScript numbers are 64-bit floating point numbers (IEEE 754), with min/max +/- 9007199254740991
// The largest exponent that can be represented as such is (308), thus the largest factorial JS number
// type can handle is 170! which is 7.257415615307994e+306. Interestingly, 170! is also the largest 
// factorial Google calculator was able to do! (probably for this exact reason) -- factorial(171) = ∞
// On a side note, remember that computers represent integers using two's complement:
// https://www.cs.cornell.edu/~tomf/notes/cps104/twoscomp.html

function factorial(n) {
    if (n === 1 || n === 0) return 1; // by definition
    return n * factorial(n - 1);
}

module.exports = { factorial };