// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) { 
    // g flag is for "global" to not stop after first match, i is for case-insensitive
    // Also, str.match returns either an array of matches, or null if none found
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;

// (2)
// const vowelList = ['A', 'E', 'I', 'O', 'U'];
// An obvious for-of loop solution with a counter also works fine
// function vowels(str) {
//     return str.split('').reduce(
//         (accumulator, currentValue) => accumulator += vowelList.includes(currentValue.toUpperCase()) ? 1 : 0, 0);
// }