function WeatherController() {
	var service = new WeatherService();

	function drawWeather(weather, type) {
		let kel = weather.main.temp
// debugger
		if (type){
		let cel = Math.floor(kToC(kel))
			document.getElementById('weather').innerHTML = `<h3>C ${cel}</h3>
			<button type="button" class="btn btn-default" onclick="app.controllers.weatherController.changeWeather('fahr')"><p>F</p></button>`
		}

		if (!type) {
			let fahr = Math.floor(kToF(kel))
			document.getElementById('weather').innerHTML = `<h3>F ${fahr}</h3>
			<button type="button" class="btn btn-default" onclick="app.controllers.weatherController.changeWeather('celcius')"><p>C</p></button>
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
