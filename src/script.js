$(document).ready(function() {
  getNewQuote();

  function getNewQuote() {
  var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]]
  
  var colors = ["#ECD0B2", "#91B5A8", "#4E6D52", "#40B4B6"]
    
    var randomIndex = Math.floor(Math.random()*quotes.length);
    var colorIndex = Math.floor(Math.random()*colors.length);
    var randomQuote = quotes[randomIndex][0];
    var randomAuthor = quotes[randomIndex][1];
    
    $("#quote").text(randomQuote);
    $('#author').text(randomAuthor);
    $('.card-body').css("background-color", colors[colorIndex].toString());

    $('#new-quote').on("click", function() {
      getNewQuote();
    })
} 
   $("#tweet").on("click", function(e) {
		e.preventDefault();
		var quoteText = $("#quote").text();
		var quoteBy = $("#author").text();
		var tweetTxt = quoteText + " " + "-" + " " + quoteBy;
		var tweetURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetTxt);
		if(quoteText.length < 140) {
			window.open(tweetURL, "_blank");
		} else {
			alert("This quote is too long to Tweet.");	
		}
	})
});




    
 