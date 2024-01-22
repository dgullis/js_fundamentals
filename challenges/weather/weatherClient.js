require('dotenv').config();

class WeatherClient {
    constructor() {
        this.apiKey = process.env.OPEN_WEATHER_API_KEY
    }

    fetchWeatherData(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
            .then(response => response.json())
            .then(jsonData => {
                return {
                    city: jsonData.name,
                    weather: jsonData.weather[0]['main'],
                    temp: jsonData.main['temp'],
                    feels_like: jsonData.main['feels_like'],
                    humidity: jsonData.main['humidity']
                }
            });
    
    }

}

const client = new WeatherClient();
client.fetchWeatherData('London')
    .then(response => console.log(response))

module.exports = WeatherClient;
