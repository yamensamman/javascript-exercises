// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

// This weave can handle falsy values EXCEPT UNDEFINED!!!
function weave(sourceOne, sourceTwo) {
    const q = new Queue();
    let oneDone = false, twoDone = false;

    while (!oneDone || !twoDone) {
        const one = sourceOne.peek();
        const two = sourceTwo.peek();

        // Be aware of doing if (one) because that would fail if one were a falsy value like 0!!
        if (one !== undefined) q.add(sourceOne.remove());
        else oneDone = true;

        if (two !== undefined) q.add(sourceTwo.remove());
        else twoDone = true;
    }

    return q;
}

module.exports = weave;
