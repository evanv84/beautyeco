$(document).ready(function() {
	
	// Nav toggle
	$('.nav-collapse').on('click', function(){
		$('nav ul').toggleClass('showing');
		$('#nav-icon').toggleClass('open');
	});

	if ($(window).width() <= 1024) {
		$('.store-menu-item').attr('href', '/shop');
	} else {
		$('.store-menu-item').attr('href', '#');
	}
	
});