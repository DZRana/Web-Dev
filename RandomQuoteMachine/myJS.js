$(document).ready(function() {
	var html = "";
	var randomHex = '#'+ Math.floor(Math.random()*16777215).toString(16);
    var quote = "";
    var author = "";
    var hrefQuoteString = "";

	$.ajax ({
    	url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', // The URL to the API. You can get this in the API page of the API you intend to consume
    	type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    	data: {}, // Additional parameters here
    	dataType: 'json',
    	success: function(data) { 
    		console.dir((data.source));	
			$("body").css("color", randomHex);
			$("body").css("background-color", randomHex);
			$(".target").css("background-color", randomHex);
			$(".btn-twitter").css("background-color", randomHex);
            quote = data.quote;
            author = data.author;
    		html += "<h1><b>\"</b>" + quote + "</h1>";
    		html += "<h2>-" + author + "</h2>";
    		$("#currentQuote").html(html);
    	},
    	error: function(err) { alert(err); },
    	beforeSend: function(xhr) {
    		xhr.setRequestHeader("X-Mashape-Authorization", "FW3XLF2OmimshJmZljc3nqWJ9ojxp1w7yzdjsnr41vaFKR0BwF"); // Enter here your Mashape key
    	}
	});
	$(".target").click(function() {
		html = "";
		$.ajax ({
    		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    		type: 'GET',
    		data: {},
    		dataType: 'json',
    		success: function(data) { 
    			console.dir((data.source));
    			randomHex = '#'+ Math.floor(Math.random()*16777215).toString(16);
				$("body").css("color", randomHex);
				$("body").css("background-color", randomHex);
				$(".target").css("background-color", randomHex);
				$(".btn-twitter").css("background-color", randomHex);
                quote = data.quote;
                author = data.author;
    			html += "<h1><b>\"</b>" + quote + "</h1>";
    			html += "<h2>-" + author + "</h2>";
    			$("#currentQuote").html(html);  			
    		},
    		error: function(err) { alert(err); },
    		beforeSend: function(xhr) {
    			xhr.setRequestHeader("X-Mashape-Authorization", "FW3XLF2OmimshJmZljc3nqWJ9ojxp1w7yzdjsnr41vaFKR0BwF");
    		}
		});
	});
    $(".btn-twitter").click(function() {
        hrefQuoteString = "https://twitter.com/share?text=" + "\"" + quote + "\" " + author;
        hrefQuoteString += " %23quote";
        $("a").attr("href", hrefQuoteString);
    });
});