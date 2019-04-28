// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let maxChar = null;
    let maxCharCount = 0;

    for (let char of str) {
        // Remember that undefined + 1 = undefined -- which is falsey!
        const currentCount = charMap[char] = charMap[char] + 1 || 1;
        if (currentCount > maxCharCount) {
            maxChar = char;
            maxCharCount = currentCount;
        }    
    }
    
    console.log(charMap);
    return maxChar;
}

module.exports = maxChar;

// (2)
// function maxChar(str) {
//     const charMap = {};
//     let maxChar = null;
//     let maxCharCount = 0;

//     for (let char of str) {
//         if (typeof charMap[char] === 'undefined') {
//             charMap[char] = 1;
//             if (maxCharCount === 0) {
//                 maxChar = char;
//                 maxCharCount = 1;
//             }
//         } else {
//             charMap[char] += 1;
//             if (charMap[char] > maxCharCount) {
//                 maxChar = char;
//                 maxCharCount = charMap[char];
//             }
//         }
//     }

//     return maxChar;
// }