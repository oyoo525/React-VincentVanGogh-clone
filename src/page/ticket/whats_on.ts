import $ from 'jquery';

$(document).ready(function() {

	$(window).on('scroll', function() {
		// 스크롤 위치 확인하기
		const currentScrollPosition = $(window).scrollTop();
		// nav 위치 확인하기
		const pageNavScrollPosition = $(".page_nav").offset().top;

		console.log(pageNavScrollPosition);

		if(currentScrollPosition > pageNavScrollPosition) {
			$('.page_nav').css({'position' : 'fixed', 'left' : 0, 'top' : '98px' })
		} else (
			$('.page_nav').css({'position' : 'initial'})
		)


	});






	let contents : number = $('.content_title').length;
	const top : number[] = [];
	for(let i=0; i<contents; i++) {
		top[i] = $('.content_title').eq(i).offset().top;
		// console.log('top[',i,'] : ', top[i]);
	}

	function scrollSpy(height) {
		console.log(`height : ${height}`);
		$('body, html').animate({
			scrollTop : height
		});
	}

	$('.page_nav > ul > li').on('click', function() {
		const index = $(this).index();

		console.log('index : ', index);
		console.log(`top[index] : ${top[index]}`);

		scrollSpy(top[index] - 98);
	});



})