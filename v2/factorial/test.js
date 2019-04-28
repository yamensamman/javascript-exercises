const factorial = require('./index').factorial;

describe('Factorial tests', () => {
    test('factorial(n) calculates different factorials', () => {
        expect(factorial(10)).toEqual(3628800);
        expect(factorial(7)).toEqual(5040);
        expect(factorial(4)).toEqual(24);
        expect(factorial(2)).toEqual(2);
    });

    test('factorial(n) handles very large factorials', () => {
        expect(factorial(100)).toEqual(9.33262154439441e+157);
        expect(factorial(170)).toEqual(7.257415615307994e+306);
        expect(factorial(171)).toEqual(Infinity);
    })
      
    test('factorial(n) handles n=1 and n=0', () => {
        expect(factorial(1)).toEqual(1);
        expect(factorial(0)).toEqual(1);
    });
});