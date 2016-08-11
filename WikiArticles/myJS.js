$(document).ready(function() {

	$("button").click(function() {
		var queryStr = document.getElementById("query").value;
		var queryLink = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*"
				      + "&prop=extracts&exsentences=1&list=prefixsearch&pssearch=" + queryStr
				      + "&titles=" + queryStr;
		console.log(queryLink);
		$.getJSON(queryLink, function(data) {
			console.log(JSON.stringify(data));

		});
	});
});