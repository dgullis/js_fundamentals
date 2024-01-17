// object is a colelction of properties
// property is an association between a key and a value
// property value can be a function ins which case the property is a method

// declare an object v1

const person = {
    name: 'Maxine',
    age: 32,
    address: 'London, E1 123',

    // attach functions to object

    getHello: () => { return 'Hello'; }

};

// console.log(person.getHello());

const person2 = {
    name: 'Maxine',
    age: 32,
    address: {
        city: 'London',
        postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person2.hobbies[1]);

const cohort1 = {
    name: 'May2022',
    id: 1234,
    studentNames: ['dan', 'bill', 'josh', 'tom']
};

const printCohortDetails = (cohort) => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`);
};
printCohortDetails(cohort1);




