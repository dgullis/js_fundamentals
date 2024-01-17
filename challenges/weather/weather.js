const WeatherClient = require('./weatherClient.js')
class Weather {
    constructor() {
        this.weatherReports = []
    }
    async load(city) {
        let client = new WeatherClient()
        let weather = await client.fetchWeatherData(city)
        this.weatherReports.push(weather)
    }
}

module.exports = Weather;