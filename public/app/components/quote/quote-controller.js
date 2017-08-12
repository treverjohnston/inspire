function QuoteController() {

	var service = new QuoteService()

	function drawQuote(quote) {
		var words = quote.quote
		var author = quote.author
		document.getElementById('quote').innerHTML = `
								<div class="card">
										<h2 class ="words">${words}</h2>
									<div class="replacement">
										<h3 class="change">${author}</h3>
									</div>
								</div>
		`
	}

	service.getQuote(function (quote) {
		drawQuote(quote)
	})
} 

