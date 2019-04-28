// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.length += 1;
    }

    size() {
        return this.length;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null; // 0 elements

        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        return cur;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
        this.length -= 1;
    }

    removeLast() {
        if (!this.head) return; // 0 elements
        if (!this.head.next) { // 1 element
            this.head = null;
            this.length -= 1;
            return;
        }

        let prev = null;
        let cur = this.head;
        while (cur.next) {
            prev = cur;
            cur = cur.next
        }

        prev.next = null
        this.length -= 1;
    }

    insertLast(data) {
        let node = new Node(data);
        this.length += 1;

        let last = this.getLast();
        if (!last) this.head = node;
        else last.next = node; 
    }

    getAt(index) {
        if (index > this.length - 1) return null; // this should cover when this.length is 0 (assuming index is 0+)

        let conter = 0;
        let cur = this.head;
        while (conter < index && cur.next) {
            conter++;
            cur = cur.next;
        }

        return cur;
    }

    removeAt(index) {
        if (index > this.length - 1) return; // this should cover when this.length is 0 (assuming index is 0+)
        if (index === 0) {
            this.head = this.head.next;
            this.length -= 1;
            return;
        }

        const prev = this.getAt(index - 1);
        prev.next = prev.next.next;
        this.length -= 1;
    }
    
    insertAt(data, index) {
        if (index > this.length - 1) { // this should cover when this.length is 0 (assuming index is 0+)
            // exercise says if index out of bounds then insert to last
            this.insertLast(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            this.length += 1;
            return;
        }

        const prev = this.getAt(index - 1);
        prev.next = new Node(data, prev.next);
        this.length += 1;
    }

    forEach(fn) {
        let counter = 0;
        let cur = this.head;
        while (cur) {
            fn(cur, counter);
            counter++;
            cur = cur.next;
        }
    }

    *[Symbol.iterator]() {
        let cur  = this.head;
        while (cur) {
            yield cur;
            cur = cur.next;
        }
    }
}

module.exports = { Node, LinkedList };
