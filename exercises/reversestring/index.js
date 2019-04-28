// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// (1)
function reverse(str) {
    debugger;
    return str
        .split('')
        .reduce((reversed, character) => character + reversed, '');
}

// To launch the debugger (node inspect index.js -> cont -> repl)
reverse('asdf');

module.exports = reverse;

// (2)
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// (3)
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// (4)
// function reverse(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }