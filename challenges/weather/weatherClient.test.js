require('dotenv').config();


const WeatherClient = require('./weatherClient');
const client = new WeatherClient();

describe('testing api', () => {
    it('returns info from api', async () => {
        const data = await client.fetchWeatherData('London')
            expect(data.name).toBe('London');
    });
    it('returns info from api', () => {
        return client.fetchWeatherData('London')
            .then(data => {
                expect(data.name).toBe('London')
            })
    });
});


