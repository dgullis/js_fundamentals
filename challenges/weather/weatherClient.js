class WeatherClient {

    async fetchWeatherData(city) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed`)
            .then((response) => response.json())
            .then((jsonData) => {
                // console.log(jsonData)
                return {
                    main: jsonData.weather[0]['main'],
                    temp: jsonData.main['temp']
                }
            })
    }
}
module.exports = WeatherClient