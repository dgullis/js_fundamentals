require('dotenv').config();

class WeatherClient {
    constructor() {
        this.apiKey = process.env.OPEN_WEATHER_API_KEY
    }

    fetchWeatherData(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
                .then(response => response.json())
        }
}
    



// const client = new WeatherClient;
// client.fetchWeatherData('London')
//     .then(data=> console.log(data))


module.exports = WeatherClient;
