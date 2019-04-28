// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, numSpacesOnOneSide = 0) {
    if (n === 0) return;
    pyramid(n - 1, numSpacesOnOneSide + 1);
    
    const numHashes = 2*n - 1;
    console.log(
        Array.from(
            Array(numHashes + 2*numSpacesOnOneSide), 
            (v, i) => i < numSpacesOnOneSide || i >= numHashes + numSpacesOnOneSide ? ' ' : '#'
        ).join(''));
}

module.exports = pyramid;
