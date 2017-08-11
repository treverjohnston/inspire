function WeatherController() {
	var service = new WeatherService();

	function drawWeather(weather, type) {
		let kel = weather.main.temp

		if (type){
		let cel = Math.floor(kToC(kel))
			document.getElementById('weather').innerHTML = `
			<button type="button" class="btn btn-default" onclick="app.controllers.weatherController.changeWeather('fahr')">The Temp is C ${cel} in Boise</button>`
		}

		if (!type) {
			let fahr = Math.floor(kToF(kel))
			document.getElementById('weather').innerHTML = `
			<button type="button" class="btn btn-default" onclick="app.controllers.weatherController.changeWeather('celcius')">The Temp is F ${fahr} in Boise</button>
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
		console.log(weather);
		//What can you do with this weather object?
		drawWeather(weather)
	})

}
