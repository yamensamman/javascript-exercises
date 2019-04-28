const Node = require('./index').Node;
const Trie = require('./index').Trie;

describe('Classes are defined properly', () => {
    test('Node and Trie have constructors', () => {
        expect(typeof Node.prototype.constructor).toEqual('function');
        expect(typeof Trie.prototype.constructor).toEqual('function');
    });

    test('Trie has get, put and findNextWords methods', () => {
        expect(typeof Trie.prototype.get).toEqual('function');
        expect(typeof Trie.prototype.put).toEqual('function');
        expect(typeof Trie.prototype.findNextWords).toEqual('function');
    });
});

describe('get() and put()', () => {
    test('Getting a nonexistent word value returns undefined', () => {
        let trie = new Trie();
        expect(trie.get('h')).toBeUndefined();
        expect(trie.get('he')).toBeUndefined();
        expect(trie.get('hell')).toBeUndefined();
        expect(trie.get('hello')).toBeUndefined();  
    });

    test('Putting a word value then getting it returns the same value', () => {
        let trie = new Trie();
        const valueHello = 53;
        const valueWorld = 90;
        trie.put('hello', valueHello);
        trie.put('world', valueWorld);
        expect(trie.get('hello')).toEqual(valueHello);  
        expect(trie.get('world')).toEqual(valueWorld);  
    });

    test('Trie handles A and Z letters and ignores case', () => {
        let trie = new Trie();
        const valueZoo = 123;
        const valueAnimal = 4;
        trie.put('ZoO', valueZoo);
        trie.put('AniMAl', valueAnimal);
        expect(trie.get('zoo')).toEqual(valueZoo);  
        expect(trie.get('animal')).toEqual(valueAnimal);  
    });

    test('Putting a word value creates nodes with null values along the path if no node found', () => {
        let trie = new Trie();
        expect(trie.get('hel')).toBeUndefined();  
        trie.put('hello', 34);
        expect(trie.get('hel')).toBeNull();  
    });

    test('Putting a word value does not overwrite values of nodes on the path', () => {
        let trie = new Trie();
        const valueBat = 992;
        const valueBatMan = 10;
        trie.put('bat', valueBat);
        trie.put('batman', valueBatMan);
        expect(trie.get('bat')).toEqual(valueBat);  
        expect(trie.get('batman')).toEqual(valueBatMan); 
    });
});

describe('Auto-complete scenarios', () => {
    test('Finding available next words', () => {
        let trie = new Trie();
        trie.put('bat');
        trie.put('battery');
        trie.put('bats');
        trie.put('batman');
        trie.put('car');
        trie.put('cargo');
        const wordsAfterBat = trie.findNextWords('bat');
        const wordsAfterCar = trie.findNextWords('CAR');
        expect(wordsAfterBat).toHaveLength(3);
        expect(wordsAfterBat).toEqual(expect.arrayContaining(['BATTERY', 'BATS', 'BATMAN']));
        expect(wordsAfterCar).toHaveLength(1);
        expect(wordsAfterCar).toEqual(expect.arrayContaining(['CARGO']));
    });
});
