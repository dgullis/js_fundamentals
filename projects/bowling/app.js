const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('bowling');
})

console.log(`server is listening on localhost:${port}`);
app.listen(port)