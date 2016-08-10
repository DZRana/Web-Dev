$(document).ready(function() {	
	var apiURL = "";
	var html = "";
	var zip = prompt("Enter ZIP:");
	var cTemp = 0;
	var fTemp = 0;
	apiURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=58c95c512b8638a53d731b067640077e";

	$.getJSON(apiURL, function(data) {
		cTemp = Math.floor(data.main.temp/10);
		fTemp = Math.floor((cTemp * 1.8) + 32);
		html += "<h2>" + data.name + ", " + data.sys.country + "</h2>";
		html += "<h2 id='tempCtrl'>" + cTemp + "&deg;</h2>";
		html += "<button class='btn' id='degree'>C</button>";
		html += "<h2>" + data.weather[0].description + "</h2>";
		switch(data.weather[0].icon) {
			case "01d":
			case "02d":
				$("body").css("background", "url(backgrounds/sunny.jpg) no-repeat center center fixed");
				$("body").css("-webkit-background-size", "cover");
				$("body").css("-moz-background-size", "cover");
				$("body").css("-o-background-size", "cover");
				$("body").css("background-size", "cover");
				break;
			case "01n":
			case "02n":
				$("body").css("background", "url(backgrounds/night.jpg) no-repeat center center fixed");
				$("body").css("-webkit-background-size", "cover");
				$("body").css("-moz-background-size", "cover");
				$("body").css("-o-background-size", "cover");
				$("body").css("background-size", "cover");
				break;
			case "03d":
			case "03n":
			case "04d":
			case "04n":
				$("body").css("background", "url(backgrounds/cloudy.jpg) no-repeat center center fixed");
				$("body").css("-webkit-background-size", "cover");
				$("body").css("-moz-background-size", "cover");
				$("body").css("-o-background-size", "cover");
				$("body").css("background-size", "cover");
				break;
			case "09d":
			case "09n":
			case "10d":
			case "10n":
			case "11d":
			case "11n":
				$("body").css("background", "url(backgrounds/rain.jpg) no-repeat center center fixed");
				$("body").css("-webkit-background-size", "cover");
				$("body").css("-moz-background-size", "cover");
				$("body").css("-o-background-size", "cover");
				$("body").css("background-size", "cover");
				break;
			case "13d":
			case "13n":
				$("body").css("background", "url(backgrounds/snow.jpg) no-repeat center center fixed");
				$("body").css("-webkit-background-size", "cover");
				$("body").css("-moz-background-size", "cover");
				$("body").css("-o-background-size", "cover");
				$("body").css("background-size", "cover");
				break;
			case "50d":
			case "50n":
				$("body").css("background", "url(backgrounds/misty.jpg) no-repeat center center fixed");
				$("body").css("-webkit-background-size", "cover");
				$("body").css("-moz-background-size", "cover");
				$("body").css("-o-background-size", "cover");
				$("body").css("background-size", "cover");
				break;
			default:
				$("body").css("background", "url(backgrounds/default.jpg) no-repeat center center fixed");
				$("body").css("-webkit-background-size", "cover");
				$("body").css("-moz-background-size", "cover");
				$("body").css("-o-background-size", "cover");
				$("body").css("background-size", "cover");
		}
		var iconLink = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
		html += "<img src='" + iconLink+ "'>";
		$("#weather").html(html);

		$("#degree").click(function() {
			if ($("#degree").text() === "C") {
				$("#tempCtrl").html(fTemp + "&deg;");
				$("#degree").text("F");
			}
			else {
				$("#tempCtrl").html(cTemp + "&deg;");
				$("#degree").text("C");
			}
		});
	});	
});