class Weather {
    constructor(client) {
        this.client = client
        this.weatherReports = []
    }
    async load(city) {
        let weather = await this.client.fetchWeatherData(city)
        this.weatherReports.push(weather)
    }
}

const WeatherClient = require('./weatherClient.js');
const client = new WeatherClient();

async function main() {
    const londonWeather = new Weather(client); 
    await londonWeather.load('London');
    console.log("weather reports", londonWeather.weatherReports)
}

main();
module.exports = Weather;