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
	$('.widget_body form input[type="submit"]').click(ClickEvents.clickDonateSubmit);

	$('.save_button').click(ClickEvents.clickSaveButton);

	$('.share_button').click(ClickEvents.clickShareButton);

	// Restrict to Number Imputs
	$(".num_input").keydown(function (e) {
		ClickEvents.restrictToNums(e);
	});

	// Close Modal
	$('.modal_close').click(ClickEvents.closeModal);
	$('.modal_backdrop').click(ClickEvents.closeModal);
});
