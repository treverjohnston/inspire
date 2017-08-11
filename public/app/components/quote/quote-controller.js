function QuoteController() {

	var service = new QuoteService()

	function drawQuote(quote) {
		var words = quote.quote
		var author = quote.author
		document.getElementById('quote').innerHTML = `
								<h2>${words}</h2>
								<h3>${author}</h3>
		`
	}

	service.getQuote(function (quote) {
		drawQuote(quote)
	})
} 

