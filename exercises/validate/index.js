// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = -Infinity, max = Infinity) {

    const leftBranch = node.left 
        ? node.left.data < node.data && node.left.data > min && validate(node.left, min, node.data)
        : true;

    const rightBranch = node.right
        ? node.right.data > node.data && node.right.data < max && validate(node.right, node.data, max)
        : true;

    return leftBranch && rightBranch;
}

module.exports = validate;
