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


	// 스크롤 이벤트
	let pageNavSticky = false;
	$(window).on('wheel', function(e) {
		let App = document.getElementsByClassName('App')[0] as HTMLElement | null;
		let page = "";

		if(App) {
			let firstChild = App.firstElementChild;
			if(firstChild) {
				page = firstChild.className;
			}
		}
		console.log('page : ', page);

		if(page == 'home') {
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

		} else if(page.includes('visit')) {
			// 현재 스크롤 위치
			const currentScrollPosition = $(window).scrollTop();
			// 원하는 위치 지정
			const pageNav = $('.page_nav');
			const pageNavScrollPosition = pageNav.offset().top;
			if(pageNav.length > 0) {
				if (currentScrollPosition > pageNavScrollPosition && !pageNavSticky) {
					pageNavSticky = true;
					pageNav.addClass('sticky');
				} else if (currentScrollPosition < pageNavScrollPosition && pageNavSticky) {
					pageNavSticky = false;
					pageNav.removeClass('sticky');
				}
			}

		}




	});

	$(window).on('beforeunload', function() {
		$('body, html').animate({
			scrollLeft : 0
		}, 0);
	});


});