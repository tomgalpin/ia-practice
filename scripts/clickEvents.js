var ClickEvents = {
    clickDonateSubmit: function() {
        WidgetEvents.setModalContent('donate');
        WidgetEvents.bodyNoScroll();
        WidgetEvents.showElement('.modal_wrapper');
        WidgetEvents.setDonateValue('.widget_body form input[type="text"]', '.donation_num');
    },
    clickSaveButton: function() {
        WidgetEvents.setModalContent('save');
        WidgetEvents.bodyNoScroll();
        WidgetEvents.showElement('.modal_wrapper');
        WidgetEvents.setToLocalStorage('.widget_body form input[type="text"]');
    },
    clickShareButton: function() {
        WidgetEvents.setModalContent('share');
        WidgetEvents.bodyNoScroll();
        WidgetEvents.showElement('.modal_wrapper');
    },
    restrictToNums: function(e) {
        WidgetEvents.isTooLong(e, '.widget_body form input[type="text"]');
        WidgetEvents.isCurrencyValue(e);
    },
    closeModal: function() {
        WidgetEvents.bodyScroll();
        WidgetEvents.hideElement('.modal_wrapper');
    },
}