const combinatorics = require('./index');

describe('Combinations (nCk)', () => {
    test('nCk calculates combinations', () => {
        expect(combinatorics.nCk(4, 2)).toEqual(6);
        expect(combinatorics.nCk(5, 3)).toEqual(10);
        expect(combinatorics.nCk(10, 10)).toEqual(1);
        expect(combinatorics.nCk(50, 5)).toEqual(2118760);
    });
});

describe('Permutations (nPk)', () => {
    test('nPk calculates permutations', () => {
        expect(combinatorics.nPk(4, 2)).toEqual(12);
        expect(combinatorics.nPk(5, 3)).toEqual(60);
        expect(combinatorics.nPk(10, 10)).toEqual(3628800);
        expect(combinatorics.nPk(50, 5)).toEqual(254251200);
    }); 
});