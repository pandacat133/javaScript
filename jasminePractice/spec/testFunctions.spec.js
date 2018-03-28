describe('appendWorld function', function() {
 it('Should return the string hello world when hello is the parameter.', function() {
     let result = appendWorld('hello');
     expect(result).toBe('hello world');
 });
});


describe('evens function', function() {
    it('Should return an empty array if the parameters are empty.', function () {
        let result = evens([]);
        expect(result).toEqual([]);
    });

    it('Should return an empty array if there are no even numbers in the array', function () {
        let result = evens([1,3,5]);
        expect(result).toEqual([]);
    });

    it('Should return an array of even numbers', function () {
        let result = evens([1,2,3,4,5]);
        expect(result).toEqual([2,4]);
    });
});