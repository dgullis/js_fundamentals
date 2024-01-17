const searchCandies = require('./searchCandies')

const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
];

describe('searches for candies', () => {
    it('returns candies less than £10 beginning with Ma', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
    it('returns candies less than £2 beginning with Ma', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    });
    it('returns candies less than £10 beginning with S', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
    it('returns candies less than £4 beginning with S', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
    it('returns candies less than £10 beginning with ma', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
});