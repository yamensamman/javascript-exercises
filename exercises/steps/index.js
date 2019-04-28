// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// (1)
function steps(n, numSpaces = 0) { 
    if (n === 0) return;
    steps(n - 1, numSpaces + 1);
    console.log(Array.from(Array(n + numSpaces), (v, i) => i < n ? '#' : ' ').join(''));
}

module.exports = steps;

// (2)
// function steps(n) {
//     for (let row = 1; row <= n; row++) {
//         let line = '';
//         for (let col = 1; col <= n; col++) {
//             line += col > row ? ' ' : '#'
//         }
//         console.log(line);
//     }
// }