$(document).ready(function() {
	var flag = false;
	var html = "";
	var wikiLink = "";
	$("#iconBoxAndSearch").on('click', '#mGlass', function() {
		flag = true;
		$(this).addClass("magictime vanishOut");
		setTimeout("$('#iconBoxAndSearch').html(\"<input type='text' class='magictime " 
				 + "vanishIn form-control text-center' id='query'>\");",500);
		
	});
	$(document).keyup(function(e) {
		if (e.keyCode === 13 && flag) {
			var queryStr = document.getElementById("query").value;
			var queryLink = "https://en.wikipedia.org/w/api.php?action=query"
					  	  + "&format=json&prop=extracts&generator=search&exsentences=1"
					  	  + "&exlimit=20&exintro=1&explaintext=1&gsrlimit=10&origin=*&gsrsearch="
					  	  + queryStr;
			$.getJSON(queryLink, function(data) {
				$("#instruct").css("display", "none");
				$("#allContent").css("margin-top", "-5px");
				html += "<div class='list-group' id='links'> ";
				for (pageid in data.query.pages) {
					//console.log(JSON.stringify(data.query.pages[pageid]));
					wikiLink = "https://en.wikipedia.org/?curid=" + data.query.pages[pageid].pageid;
					html += "<a href='" + wikiLink + "' class='list-group-item list-group-item-action' target='_blank'>";
					html += "<h5 class='list-group-item-heading'><strong>" + data.query.pages[pageid].title + "</strong></h5>";
					html += "<p class='list-group-item-text'>" + data.query.pages[pageid].extract + "</p></a>";
				}
				$("#results").html(html);
				html = "";
			});
		}
		if (e.keyCode === 27 && flag) {
			flag = false;
			$("#query").addClass("vanishOut");
			setTimeout("$('#iconBoxAndSearch').html(\"<button class='btn' id='mGlass'><i "
				     + "class='magictime vanishIn fa fa-search'></i></button>\");",500);
			$("#instruct").css("display", "initial");
			$("#allContent").css("margin-top", "400px");
			$("#links").remove();
		}
	});
});