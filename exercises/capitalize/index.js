// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// (1)
function capitalize(str) {
    const words = [];

    for (const word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

module.exports = capitalize;

// (2)
// function capitalize(str) {
//     let capitalized = '';

//     for (let i = 0; i < str.length; i++) {
//         if (i === 0) capitalized += str[0].toUpperCase();
//         else capitalized += str[i - 1] === ' ' ? str[i].toUpperCase() : str[i];
//     } 

//     return capitalized;
// }