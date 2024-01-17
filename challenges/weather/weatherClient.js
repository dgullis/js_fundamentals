require('dotenv').config();


class WeatherClient {
    constructor() {
        this.apiKey = process.env.OPEN_WEATHER_API_KEY
    }

    async fetchWeatherData(city) {
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const jsonData = await response.json();
            
            return {
                city: jsonData.name,
                weather: jsonData.weather[0]['main'],
                temp: jsonData.main['temp'],
                feels_like: jsonData.main['feels_like'],
                humidity: jsonData.main['humidity']    
            };   
        } catch (error) {
            console.error('Error in fetchWeatherData:', error);
            throw error;
        }
    }
}

module.exports = WeatherClient;