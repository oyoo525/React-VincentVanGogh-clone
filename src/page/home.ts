import $ from 'jquery';


$(document).ready(function() {

	let currentSection = 0;
	const numberSection = $(window).outerWidth() * $('.home_box').length; // 전체 문서 너비
	const view_width = $(document).width();

	function scrollToSection(index, progress) {
		const scrollPosition = index * $(window).width();
		
		if(progress > 100) progress = 100;

		$('body, html').animate({
			scrollLeft : scrollPosition
		}, 0);
		$(':root').css('background-color', `rgb(255, ${206 - (index * 50)}, 1)`);
		$('.solid').css('width', `${progress}%`);
		$('.dotted').css('width', `calc(100% - ${progress})`);
	}

	$('.home').on('wheel', function(e) {
		const scrollAmount = e.originalEvent.deltaY;
		const scrollDirection = scrollAmount > 0 ? 'down' : 'up';
		const max_section = (numberSection / view_width) * 10 - 1;


		if(scrollDirection === 'down' && currentSection < (numberSection % view_width) * 10 && currentSection <= max_section) {
			currentSection ++;
			
		} else if(scrollDirection === 'up' && currentSection > 0) {
			currentSection --;
			
		}
		
		scrollToSection(currentSection * 0.1, (currentSection / max_section) * 100);
		return false;
	
	});

	$(window).on('beforeunload', function() {
		$('body, html').animate({
			scrollLeft : 0
		}, 0);
	});


});