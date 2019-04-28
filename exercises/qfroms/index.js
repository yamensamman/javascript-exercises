// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// Optimized solution for the case of multiple adds or multiple removes in a row
class Queue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = null;
        this.isInRemoveMode = false;
    }

    add(x) {
        this.switchToAddMode();
        this.stackOne.push(x);
    }

    remove() {
        this.switchToRemoveMode();
        return this.stackTwo.pop();
    }

    peek() {
        this.switchToRemoveMode();
        return this.stackTwo.peek();
    }

    switchToRemoveMode() {
        // Nothing to do
        if (this.isInRemoveMode) return;

        // This wouldn't work for falsy values in the stack
        this.stackTwo = new Stack();
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop());
        }
        this.isInRemoveMode = true;
    }

    switchToAddMode() {
        // Nothing to do
        if (!this.isInRemoveMode) return;
        
        // This wouldn't work for falsy values in the stack
        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop());
        }
        this.stackTwo = null;
        this.isInRemoveMode = false;
    }
}

module.exports = Queue;
