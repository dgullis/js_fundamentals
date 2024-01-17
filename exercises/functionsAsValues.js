// const lowerCaseMessage = (message) => {
//     return message.toLowerCase();
// };

// const transform = (message, func) => {
//     return func(message);
// };

// console.log(transform('WHY ARE YOU SHOUTING?', lowerCaseMessage));

const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
};

const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
};

const notify = (string, func) => {
    return func(string);
};

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('10000000000', notifyByText));