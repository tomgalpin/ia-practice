$(document).ready(function(){
	// set default value of unique array output:
	Uniques.setDefault('.array_output span');

	// Prevent normal form(s) submit
	$('form').submit(function(e){
		e.preventDefault();
	});

	// Set Unique Array in .js-result div
	$('.js-result input[type="submit"]').click(function(){
		Uniques.setArray('.js-result input[type="text"]', '.array_output span');
	});

	// Widget Events:
	$('.why_give a').hover(function(){
	    WidgetEvents.showElement('.tooltip');
	}, function(){
	    WidgetEvents.hideElement('.tooltip');
	});

	// Button Click Events
	$('.widget_body form input[type="submit"]').click(function(){
		WidgetEvents.setModalContent('donate');
		WidgetEvents.showElement('.modal_wrapper');
	    WidgetEvents.setDonateValue('.widget_body form input[type="text"]', '.donation_num');
	});

	$('.save_button').click(function(){
		WidgetEvents.setModalContent('save');
		WidgetEvents.showElement('.modal_wrapper');
		WidgetEvents.setToLocalStorage('.widget_body form input[type="text"]');
	});

	$('.share_button').click(function(){
		WidgetEvents.setModalContent('share');
		WidgetEvents.showElement('.modal_wrapper');
	});

	// Restrict to Number Imputs
	$(".num_input").keydown(function (e) {
		WidgetEvents.isTooLong(e, '.widget_body form input[type="text"]');
		WidgetEvents.isCurrencyValue(e);
	});

	// Close Modal
	$('.modal_close').click(function(){
		WidgetEvents.hideElement('.modal_wrapper');
	});
	$('.modal_backdrop').click(function(){
		WidgetEvents.hideElement('.modal_wrapper');
	});
});
