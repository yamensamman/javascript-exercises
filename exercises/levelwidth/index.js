// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const queue = [root, 's']; // 's' is just a stopper value
    const counters = [0];

    while (queue.length > 1) {
        const first = queue.shift();
        if (first === 's') { 
            queue.push(first);
            counters.push(0);
        } else {
            queue.push(...first.children);
            counters[counters.length - 1] += 1;    
        }
    }

    return counters;
}

module.exports = levelWidth;
