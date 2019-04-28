// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").split('').sort().join('');
}

module.exports = anagrams;

// (2)
// Another more obvious way then below is to build charMap of A (loop#1) then charMap of B (loop#2) then compare them (loop#3)
// function anagrams(stringA, stringB) {
//     const charMap = {};
//     const regexp = /[^\w]/g; // Match any non alphanumeric character (and the g flag is to not stop after first match)
//     const cleanStringA = stringA.replace(regexp, "").toUpperCase();
//     const cleanStringB = stringB.replace(regexp, "").toUpperCase();

//     for (const char of cleanStringA) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     for (const char of cleanStringB) {
//         // Watch out and don't do something like: charMap[char] = charMap[char] - 1 || 1
//         // Because 1 - 1 = 0 which is FALSY!!! (just like undefined - 1 = undefined which is also falsy!)
//         if (!charMap[char]) return false;
//         charMap[char] = charMap[char] - 1; 
//     }

//     for (const count of Object.values(charMap)) {
//         if (count !== 0) return false;
//     }

//     return true;
// }
