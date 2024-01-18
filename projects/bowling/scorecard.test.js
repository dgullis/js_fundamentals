const Scorecard = require('./scorecard.js');

describe('unit tests for scorecard', () => {
    test('initially returns score of 0', () => {
        const scorecard = new Scorecard();
        expect(scorecard.calculateScore()).toEqual(0);
    });
})