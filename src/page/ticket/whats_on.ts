import $ from 'jquery';

$(document).ready(function() {

	// 스크롤스파이 설정
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

		scrollSpy(top[index] - 20);
	});



})