$(document).ready(function() {
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	$("body").scrollspy();

	var html = "";
	for (var i = 0; i < 25; i++) {
		html += "<h1>Danzel Rana</h1>";
	}	
	$("#portfolio").html(html);
	$("#contact").html(html);
});