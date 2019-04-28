// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        const index = this.children.findIndex(x => x.data === data);
        if (index === -1) return;
        this.children.splice(index, 1);
    }
    
    // (2)
    // remove(data) {
    //     this.children = this.children.filter(x => x.data !== data);
    // }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const queue = [this.root];
        while (queue.length) {
            const first = queue.shift();
            fn(first);
            queue.push(...first.children);
            // OR => Array.prototype.push.apply(queue, first.children);
        }
    }

    // An iterative solution similar to BF would be by using a stack (array but with push/pop or unshift/shift)
    traverseDF(fn, root = this.root) {
        fn(root);
        for (let child of root.children) {
            this.traverseDF(fn, child);
        }
    }
}

module.exports = { Tree, Node };
