function WeatherController() {
	var service = new WeatherService();

	function drawWeather(weatherData, type) {
		let kel = weatherData.main.temp
		if (type) {
			let cel = Math.floor(kToC(kel))
			// <img src="http://openweathermap.org/img/w/${weatherData.weather.icon}.png><img>
			document.getElementById('weather').innerHTML = `
			<button type="button" class="btn btn-xs weather-btn" onclick="app.controllers.weatherController.changeWeather('fahr')"><h3>${cel} C</h3></button>`
		}

		if (!type) {
			let fahr = Math.floor(kToF(kel))
			document.getElementById('weather').innerHTML = `
			<button type="button" class="btn btn-xs weather-btn" onclick="app.controllers.weatherController.changeWeather('celcius')"><h3>${fahr} F</h3></button>
	`
		}
	}

	function kToF(kel) {
		let fahr = ((9 / 5 * ((kel - 273)) + 32))
		return fahr
	}
	function kToC(kel) {
		let cel = (kel - 273)
		return cel
	}

	this.changeWeather = function changeWeather(type) {
		if (type == 'celcius') {
			drawWeather(weather, type)
		}
		if (type == 'fahr') {
			drawWeather(weather)
			service.getWeather(function (weather) {
				drawWeather(weather)
			})
		}
	}

	service.getWeather(function (weather) {
		//What can you do with this weather object?
		drawWeather(weather)
	})

}
