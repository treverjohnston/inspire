function WeatherController(){
	var service = new WeatherService();
	
	function drawWeather(weather){
		let kel = weather.main.temp
			let cel = Math.floor(kToC(kel))
			
			let fahr = Math.floor(kToF(kel))
			document.getElementById('weather').innerHTML = `
		<button type="button" class="btn btn-default" onclick="app.controllers.weatherController.getWeather('celcius')">The Temp is F ${fahr}</button>
	`		
	}



	function kToF(kel){
		let fahr = ((9/5)*((kel-273)+32))
		return fahr
	}
	function kToC(kel){
		let cel = (kel-273)
		return cel
	}
	service.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
		drawWeather(weather)
	})
}
