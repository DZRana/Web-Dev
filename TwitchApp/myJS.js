$(document).ready(function() {
	var streamerName = "";
	var streamerURL = "";
	var streamerApiURL = "";
	var itemOn = "";
	var itemOff = "";
	var imgLink = "";
	var streamerStatus = "";

	$.getJSON("https://api.twitch.tv/kraken/users/toad555/follows/channels?callback=?", function(data) {
		for (var i = 0; i < (data.follows).length; i++) {
			//console.log(data.follows[i]);
			streamerURL = data.follows[i].channel.url;
			streamerName = streamerURL.substr(22);
			streamerApiURL = "https://api.twitch.tv/kraken/streams/" + streamerName + "?callback=?";
			$.getJSON(streamerApiURL, function(streamerData) {		
				streamerName = streamerData._links.channel.substr(38);
				streamerURL = "https://www.twitch.tv/" + streamerName;
				console.log(streamerData);
				if (streamerData.stream !== null) {
					imgLink = streamerData.stream.channel.logo;
					streamerStatus = "<strong>" + streamerData.stream.game + "</strong>: " 
								   + streamerData.stream.channel.status;
					itemOn += "<a href='" + streamerURL + "' class='list-group-item list-group-item-action " 
						    + "list-group-item-success' target='_blank'><div class='row'><div class='col-md-2'>"
						    + "<img src='" + imgLink + "' class='img-circle' alt='" + "logo of " + streamerName + "'>" 
						    + "</div><div class='col-md-4'><h2>" + streamerName + "</h2></div><div class='col-md-6'>"
						    + "<p>" + streamerStatus + "</p></div></div></a>";
				}
				else {
					itemOff += "<a href='" + streamerURL + "' class='list-group-item list-group-item-action " 
						     + "list-group-item-danger' target='_blank'><div class='row'><div class='col-md-6'>" 
						     + streamerName + "</div><div class='col-md-6'><p>OFFLINE</p></div></div></a>";
				}
				$("#statusOn").html(itemOn);
				$("#statusOff").html(itemOff);
			});	
		}
	});
	$("#btnAll").click(function() {
		$("#statusOn").css("display", "initial");
		$("#statusOff").css("display", "initial");
	});
	$("#btnOn").click(function() {
		$("#statusOn").css("display", "initial");
		$("#statusOff").css("display", "none");
	});
	$("#btnOff").click(function() {
		$("#statusOn").css("display", "none");
		$("#statusOff").css("display", "initial");
	});
});