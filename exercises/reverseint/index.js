// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const nAsStringArray = n.toString().split('');
    if (nAsStringArray[0] === '-') nAsStringArray.splice(0, 1);
    const reversedIntNoSign = parseInt(nAsStringArray.reverse().join(''));
    return reversedIntNoSign * Math.sign(n); // Math.sign(n) returns 1, -1 or 0
}

module.exports = reverseInt;
