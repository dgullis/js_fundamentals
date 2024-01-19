const Scorecard = require('./scorecard.js');

describe('unit tests for scorecard', () => {
    test('initially returns score of 0', () => {
        const scorecard = new Scorecard();
        expect(scorecard.calculateScore()).toEqual(0);
    });
    test('(5,2) equal 7', () => {
        const scorecard = new Scorecard();
        scorecard.addFrame(5,2);
        expect(scorecard.calculateScore()).toEqual(7);
    });
    test('stike - (5,2) equal 24', () => {
        const scorecard = new Scorecard();
        scorecard.addFrame(10);
        scorecard.addFrame(5,2);
        expect(scorecard.calculateScore()).toEqual(24);
    });
    test('strike, spare equal 20', () => {
        const scorecard = new Scorecard();
        scorecard.addFrame(10);
        scorecard.addFrame(1,9)
        expect(scorecard.calculateScore()).toEqual(20);
    });
    test('strike, strike, spare then 8 equal 26', () => {
        const scorecard = new Scorecard();
        scorecard.addFrame(10);
        scorecard.addFrame(7,1);
        expect(scorecard.calculateScore()).toEqual(26);
    });
    test('strike, strike, spare, spare equal 68', () => {
        const scorecard = new Scorecard();
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(9,1);
        scorecard.addFrame(9,1);
        expect(scorecard.calculateScore()).toEqual(68);
    });
    test('spare, spare, strike, (5,2) equal 63', () => {
        const scorecard = new Scorecard();
        scorecard.addFrame(9,1);
        scorecard.addFrame(9,1);
        scorecard.addFrame(10);
        scorecard.addFrame(5,2);
        expect(scorecard.calculateScore()).toEqual(63);
    });
    test('13 strikes equal 300', () => {
        const scorecard = new Scorecard();
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        expect(scorecard.calculateScore()).toEqual(300);
    });
    test('random score equal', () => {
        const scorecard = new Scorecard();
        scorecard.addFrame(2,5);
        scorecard.addFrame(8,1);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        scorecard.addFrame(5,1);
        scorecard.addFrame(3,7);
        scorecard.addFrame(9,0);
        scorecard.addFrame(2,8);
        scorecard.addFrame(7,3);
        scorecard.addFrame(1,9);

        expect(scorecard.calculateScore()).toEqual(149);
    });
//     test('strike, strike, 5,1 equals 47', () => {
//         const scorecard = new Scorecard();
//         scorecard.addFrame(10);
//         scorecard.addFrame(10);
//         scorecard.addFrame(5,1);
//         expect(scorecard.calculateScore()).toEqual(47);
//     });
// //     test('strike, strike, strike, (6, 2) equals 82', () => {
// //         const scorecard = new Scorecard();
// //         scorecard.addFrame(10);
// //         scorecard.addFrame(10);
// //         scorecard.addFrame(10);
// //         scorecard.addFrame(6,2)
// //         expect(scorecard.calculateScore()).toEqual(82);


    });


