// filter - creates new array by applying a function on existing arrays elements
// map - creates new array by applying specific operation to existing arrays elements

const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

const isShorterThanThree = (name => {
    if (name.length<3) {
        return true;
    } else {
        return false;
    }
});

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

const getUppercased = (name) => {
    return name.toUpperCase();
}

const uppercasedNamed = names.map(getUppercased);

const lowercasedNames = names.map((name) => { 
    return name.toLowerCase();
});

const checkLength = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
        return true;
    } else {
        return false;
    }
};

const numbers = ['1763687364', '4763687363', '7867867862', 'AAAA#####AAAA#87@768767382672', '4763687363', '4763687363'];
const names2 = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const filterLongNumbers = (array) => {
    return array.filter(checkLength); 
};

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

const generateMessages = (names) => {
    return names.map((name) => {
        return `Hi ${name}! ${name.discount}% off our best candies for you today!`
    })
}

console.log(generateMessages(namesAndDiscounts))




