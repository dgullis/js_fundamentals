const weatherClient = require('./weatherClient.js')
const client = new weatherClient();

const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe("testing api", ()=> {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('calls weather api and returns data', (done) => {
        fetch.mockResponseOnce(JSON.stringify( {
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
            },
            
        }));

        client.fetchWeatherData('London')
            .then((data) => {
                expect(data.main).toEqual('Clouds');
                expect(data.temp).toEqual(292.15)
            });
            expect(fetch).toHaveBeenCalledTimes(1);
            done();
    
    });
});