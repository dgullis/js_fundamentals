const WeatherClient = require('./weatherClient.js')
const client = new WeatherClient();

const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe("testing mock api", ()=> {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('calls weather api and returns data', (done) => {
        fetch.mockResponseOnce(JSON.stringify({
            weather: [
                {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d'
                }
            ],
            main: {
                temp: 292.15,
                feels_like: 292.01,
                temp_min: 290.25,
                temp_max: 293.53,
                pressure: 1010,
                humidity: 73
            },
            
            name: 'London',
        }));

        client.fetchWeatherData('London')
            .then((data) => {
                expect(data.city).toEqual('London');
                expect(data.weather).toEqual('Clouds');
                expect(data.temp).toEqual(292.15);
                expect(data.feels_like).toEqual(292.01);
                expect(data.humidity).toEqual(73);

                expect(fetch).toHaveBeenCalledTimes(1);
                done();
            }); 
    });
});

