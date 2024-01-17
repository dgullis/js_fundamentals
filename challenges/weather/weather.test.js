const WeatherClient = require('./weatherClient.js');
const Weather = require('./weather.js');
const jestFetchMock = require("jest-fetch-mock");
jest.mock('./weatherClient.js');
jestFetchMock.enableMocks();


describe("test weather class", () => {
    beforeEach(() => {
        WeatherClient.mockClear();
    });

    it("adds to weather reports", async () => {
        
        //mock behaiour of fetchWeatherData
        WeatherClient.prototype.fetchWeatherData.mockResolvedValueOnce({
                city: 'London',
                weather: 'Clouds',
                temp: 1.51,
                feels_like: -1.76,
                humidity: 82
        });

        const weather = new Weather(new WeatherClient());
        await weather.load('London');

        expect(WeatherClient).toHaveBeenCalledTimes(1);
        expect(WeatherClient.mock.instances[0].fetchWeatherData).toHaveBeenCalledWith('London');
        expect(weather.weatherReports).toEqual([{
            city: 'London',
            weather: 'Clouds',
            temp: 1.51,
            feels_like: -1.76,
            humidity: 82
        }]);
    });
});





