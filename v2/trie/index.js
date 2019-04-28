// Basic Trie implementation for the English alphabet. The Trie is assumed to
// contain letters a-z or A-Z only. The trie ignores casing. Each node in the 
// trie has an array of 26 elements where 0 represents A (base letter), and 25
// represents Z. Letter index is calculated by subtracting the letter's ASCII
// code by the base letter code (A = 65). 

class Node {
    constructor(key) {
        this.key = key;
        this.value = null;
        this.children = [];
    }
}

class Trie {
    constructor() {
        this.root = new Node(); // No key for root
        this.baseCharCode = 'A'.charCodeAt(0); // A=0, B=1, etc.
    }

    put(word, value = null) {
        word = word.toUpperCase();
        let wordIndex = 0;
        let curr = this.root;

        do {
            let arrayIndex = word.charCodeAt(wordIndex) - this.baseCharCode;
            let nextNode = curr.children[arrayIndex];
            if (!nextNode) {
                nextNode = new Node(word.charAt(wordIndex));
                curr.children[arrayIndex] = nextNode;
            }
            curr = nextNode;
            wordIndex++;
        }
        while (wordIndex < word.length)

        // We've reached the desired node
        curr.value = value;
    }

    get(word) {
        word = word.toUpperCase();
        let wordIndex = 0;
        let curr = this.root;

        do {
            let arrayIndex = word.charCodeAt(wordIndex) - this.baseCharCode;
            let nextNode = curr.children[arrayIndex];
            if (!nextNode) return undefined;
            curr = nextNode;
            wordIndex++;
        }
        while (wordIndex < word.length)

        // We've reached the desired node
        return curr.value;
    }

    // Note that this method assumes that words end on leaf nodes only. E.g. if
    // you put 'hell' and 'hello' then you ask for words after 'he' you only
    // get 'hello' and not 'hell'. This could be improved by always putting 
    // a value on word ends then checking for values when traversing for words.
    findNextWords(prefix) {
        prefix = prefix.toUpperCase();

        let wordIndex = 0;
        let curr = this.root;

        do {
            let arrayIndex = prefix.charCodeAt(wordIndex) - this.baseCharCode;
            let nextNode = curr.children[arrayIndex];
            if (!nextNode) return undefined;
            curr = nextNode;
            wordIndex++;
        }
        while (wordIndex < prefix.length)

        let getWordsFromPath = (node) => {
            return node.children
            .filter(x => x)
            .reduce((combinedChildren, currentValue, currentIndex, array) => {
                if (currentValue.children.every(x => !x)) { // no children -- end of word
                    combinedChildren.push(currentValue.key);
                } else {
                    let childrenArrays = getWordsFromPath(currentValue);
                    childrenArrays.forEach(x => combinedChildren.push(currentValue.key + x));
                }
                return combinedChildren;
            }, []);
        };

        return getWordsFromPath(curr).map(x => prefix + x);
    }
}

let trie = new Trie();
trie.put('bat');
trie.put('battery');
trie.put('bats');
trie.put('batman');
trie.put('car');
trie.put('cargo');
const wordsAfterBat = trie.findNextWords('bat');


module.exports = { Node, Trie };