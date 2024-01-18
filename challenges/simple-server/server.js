const express = require('express');
const app = express();
const port = 3000;

const increment = require('./counter.js');
let counter = 0;

app.get('/', (req, res) => {
    res.send('Hello, dan!')
});

app.post('/counter', (req, res) => {
    console.log(counter)
    counter = increment(counter);
    res.send(`counter incremented to ${counter}`)
});

app.get('/counter', (req, res) => {
    res.send(`counter is ${counter}`)
});

app.delete('/counter', (req, res) => {
    counter = 0;
    res.send('counter reset to 0');
})


console.log(`Server listening on localhost:${port}`);
app.listen(port);