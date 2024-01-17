jest.setTimeout(80000);

const WeatherClient = require('./weatherClient.js');
const client = new WeatherClient();

describe('testing api', () => {
    test('returns info from api', async () => {
        console.log("im here")
        const data = await client.fetchWeatherData('London');
        expect(data.city).toEqual('London');

        });
    });
