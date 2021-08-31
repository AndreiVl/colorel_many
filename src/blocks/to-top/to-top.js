$(function() {
	let btnScroll = $('.to-top');

	function scrollBtn() {
		let top = $(this).scrollTop();

		if ( top > 600) {
			btnScroll.fadeIn(350);
		}
		else {
			btnScroll.fadeOut(500);
		}
	};
	scrollBtn();
	
	$(document).on('scroll', scrollBtn);
	btnScroll.on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 350);
	});
});