let counter = 0;

const increment = () => {
    counter += 1;
    console.log(counter);
};

setInterval(increment, 1000);

// callback functions = function that is passed to another function as an argument.
// Intended to be executed after the completion of another operation. Time control.