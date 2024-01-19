const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat.js')
const thermostat = new Thermostat();


app.get('/', (req, res) => {
    res.send('Hello Dan, thermostat!')
});

app.get('/temperature', (req, res) => {
    let temperature = thermostat.getTemperature();
    let responseData = {
        temperature: temperature
    }
    res.json(responseData)
});

app.post('/up', (req, res) => {
    res.send(thermostat.up())
});

app.post('/down', (req, res) => {
    res.send(thermostat.down())
});

app.delete('/temperature', (req, res) => {
    res.send(thermostat.reset())
});

app.get('/energy-usage', (req, res) => {
    res.send(thermostat.getEnergyUsage())
});

app.get('/energy-saving', (req, res) => {
    const status = req.query.status
    thermostat.setPowerSavingMode(`${status}`)
    res.send(`powersaving mode is ${thermostat.powerSavingMode}`)
});


console.log(`Server listening on localhost:${port}`);
app.listen(port);