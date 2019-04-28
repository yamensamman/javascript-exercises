// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// (1) 
function chunk(array, size) {
    let arrayOfArrays = [];
    let index = 0;
    
    // Important tip! From MDN documentation for Array.slice(start, end):
    // If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
    while (index < array.length) {
        arrayOfArrays.push(array.slice(index, index + size));
        index += size;
    }

    return arrayOfArrays;
}

module.exports = chunk;

// (2)
// function chunk(array, size) {
//     let nFullChunks = Math.floor(array.length / size);
//     let partialChunkLength = array.length % size; // if 0 then no partial chunk
//     let arrayOfArrays = [];

//     for (let i = 0; i < nFullChunks; i++) {
//         arrayOfArrays.push(array.slice(i*size, (i+1)*size));
//     }

//     if (partialChunkLength > 0) {
//         arrayOfArrays.push(array.slice(nFullChunks*size, nFullChunks*size+partialChunkLength));
//     }

//     return arrayOfArrays;
// }

// (3)
// function chunk(array, size) {
//     const arrayOfArrays = [];

//     for (let element of array) {
//         const currentChunk = arrayOfArrays[arrayOfArrays.length - 1];

//         if (!currentChunk || currentChunk.length === size) {
//             arrayOfArrays.push([element]);
//         } else {
//             currentChunk.push(element);
//         }
//     }

//     return arrayOfArrays;
// }