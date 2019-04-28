// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Bubblesort works by moving the largest items to the end of the array.
// E.g. after the first full iteration, the largest item is the last one,
// after the second iteration, the second largest item is the second last one, etc.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Kind of like the inverse strategy of bubblesort
// Start by assuming first element is smallest, then find if there is a smaller
// one and swap them.
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) indexOfMin = j;
        }
        if (indexOfMin !== i) {
            const temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const midpoint = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, midpoint));
    const right = mergeSort(arr.slice(midpoint, arr.length));
    return merge(left, right);
}

// Merge two sorted lists
function merge(left, right) {
    const merged = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }
    return [...merged, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
