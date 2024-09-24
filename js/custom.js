$(document).on('click', '.lp-faq-question', function(){
	var $this = $(this),
	$item = $this.closest('.lp-faq-item'),
	$answer = $item.find('.lp-faq-answer');
	if($item.hasClass('lp-active-faq')) {
		console.log('Up');
		$answer.slideUp();
		$item.removeClass('lp-active-faq');
	} else {
		console.log('Down');
		$item.addClass('lp-active-faq');
		$answer.slideDown();
	}
});

$(document).on('click', '.btn-view-faq', function(){
	var $this = $(this),
	$text = $this.find('span');
	if($('.more-lp-faq').is(':visible')) {
		$('.more-lp-faq').slideUp();
		$text.text('See more FAQs');
		$this.removeClass('btn-active');
	} else {
		$('.more-lp-faq').slideDown();
		$text.text('See less FAQs');
		$this.removeClass('btn-active');
	}
});

$(document).on('click', '.btn-see-bundles', function(){
	var $this = $(this),
	$text = $this.find('span');
	if($('.lp-bundles-container').is(':visible')) {
		$('.lp-bundles-container').slideUp();
		$text.text('See all available bundles');
		$this.removeClass('bundles-active');
	} else {
		$('.lp-bundles-container').slideDown({
			start: function() {
				$(this).css('display','grid');
			}
		});
		$text.text('Close bundles');
		$this.addClass('bundles-active');
	}
});

$(document).on('click', '.lp-popup-title', function(){
	$(this).closest('.lp-popup-main-desc').find('.lp-popup-course-desc-container').slideDown();
});

$(document).on('click', '.lp-desc-close', function(){
	$(this).closest('.lp-popup-main-desc').find('.lp-popup-course-desc-container').slideUp();
});

$(document).on('click', 'a[data-lp-popup-trigger]', function(){
	var $this = $(this),
	$popup = $($this.data('lp-popup-trigger'));
	$popup.fadeIn();
	return false;
});

$(document).on('click', '.lp-close-popup', function(){
	$(this).closest('.lp-popup').fadeOut();
	return false;
});