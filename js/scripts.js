$(document).ready(function() {

$("#slideshow").css("overflow", "hidden");

$("ul#slides").cycle({
	fx: 'fade',
	pause: 3,
	// prev: '#prev',
	// next: '#next'
});

/*$("#slideshow").hover(function() {
	$("ul#slidenav").fadeIn();
	},
		function() {
	$("ul#slidenav").fadeOut();
	});*/ 

});