const WeatherClient = require('./weatherClient.js');
const Weather = require('./weather.js');
const jestFetchMock = require("jest-fetch-mock");
jest.mock('./weatherClient.js');
jestFetchMock.enableMocks();



// it('should load weather report for a city', async () => {
//     // Mock the behavior of fetchWeatherData
//     WeatherClient.prototype.fetchWeatherData.mockResolvedValue({
//         main: 'Clear',
//         temp: 25
//     });

//     const weather = new Weather();
//     await weather.load('London');

describe("test weather class", () => {
    beforeEach(() => {
        WeatherClient.mockClear();
    });

    it("adds to weather reports", async () => {
        
        //mock behaiour of fetchWeatherData
        WeatherClient.prototype.fetchWeatherData.mockResolvedValue({
            main: 'Clouds',
            temp: 25
        });

        const weather = new Weather();
        await weather.load('London');

        expect(WeatherClient).toHaveBeenCalledTimes(1);
        expect(WeatherClient.mock.instances[0].fetchWeatherData).toHaveBeenCalledWith('London');
        expect(weather.weatherReports).toEqual([
            { main: 'Clouds', temp: 25 }
        ]);
    });
});





