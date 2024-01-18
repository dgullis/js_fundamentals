require('dotenv').config();


const WeatherClient = require('./weatherClient.js');
const client = new WeatherClient();

describe('testing api', () => {
    test('returns info from api', () => {
        // console.log("env variables: ", process.env);
        console.log("before API call")
        return client.fetchWeatherData('London').then((data) => {
            console.log("data in test", data)
            expect(data.city).toEqual('London');
        });
        });
    });
