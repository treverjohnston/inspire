function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (drawImage) {
		// ^^^^^^^ How do you call this function?
		return $.get(apiUrl, function (res) {
			console.log(res)
			image = JSON.parse(res)
			console.log('Image Data:', image)
			drawImage(image)
		})
	}
}
