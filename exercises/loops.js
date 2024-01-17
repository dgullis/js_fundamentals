// for (let i=0; i<=10; i++) {
//     console.log(i);
// };



// for (let i=1; i<=10; i++) {
//     if (i%2 === 0) {
//         console.log(i + ' is even');
//     } else {
//         console.log(i + ' is odd');
//     }
// };

const fizzBuzz = (num) => {
    if (num % 15 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
};

const fizzBuzzUnitl = (num) => {
    for (i=1; i<=num; i++) {
        console.log(fizzBuzz(i));
    }
};

fizzBuzzUnitl(5);