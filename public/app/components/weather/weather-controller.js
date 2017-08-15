function WeatherController() {
	var service = new WeatherService();

	function drawWeather(weatherData, type) {
		let kel = weatherData.main.temp
		let icon = weatherData.weather[0].icon
		let iconUrl = `http://openweathermap.org/img/w/${icon}.png`

		if (type) {
			let cel = Math.floor(kToC(kel))
			document.getElementById('weather').innerHTML = `
			<div class="row">
				<div class="col-xs-12">
					<img class ="img-responsive weather-icon" src=${iconUrl}><img>
				</div>
				<div class ="col-xs-12">
					<button type="button" class="btn btn-xs weather-btn" onclick="app.controllers.weatherController.changeWeather('fahr')"><h3 class="weather">${cel}°C</h3></button>
				</div>	
			</div>
			`
		}

		if (!type) {
			let fahr = Math.floor(kToF(kel))
			document.getElementById('weather').innerHTML = `
			<div class="row">
				<div class="col-xs-12">
					<img class ="img-responsive weather-icon"src=${iconUrl}><img>
				</div>
				<div class ="col-xs-12">
					<button type="button" class="btn btn-xs weather-btn" onclick="app.controllers.weatherController.changeWeather('celcius')"><h3 class="weather">${fahr}°F</h3></button>
				</div>
			</div>
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
