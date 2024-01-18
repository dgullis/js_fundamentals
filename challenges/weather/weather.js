class Weather {
    constructor(client) {
        this.client = client
        this.loadedCity = []
    }
    async load(city) {
        let cityWeather = await this.client.fetchWeatherData(city)
        this.loadedCity.push(cityWeather)
    }
    async compareWith(city) {
        let compareWeather = await this.client.fetchWeatherData(city);
        if (compareWeather.temp > this.loadedCity[0].temp) {
            console.log(`${compareWeather.city} temp is ${compareWeather.temp} which is hotter than ${this.loadedCity[0].city} temp of ${this.loadedCity[0].temp}`);
        } else {
            console.log(`${this.loadedCity[0].city} temp is ${this.loadedCity[0].temp} which is hotter than ${compareWeather.city} temp of ${compareWeather.temp}`);
        }
    }
    getWeatherReport() {
        if (this.loadedCity) {
            return this.loadedCity[0];
        } else {
            console.log('No city loaded');
        }
    }

}

// const WeatherClient = require('./weatherClient.js');
// const client = new WeatherClient();

// async function main() {
//     const londonWeather = new Weather(client); 
//     await londonWeather.load('London');
//     await londonWeather.compareWith('Newcastle');
//     console.log(londonWeather.getWeatherReport())
// }



// main();
module.exports = Weather;