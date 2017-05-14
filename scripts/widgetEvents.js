var WidgetEvents = {
    showElement: function(element) {
        /**
        * Shows an element/sets display: block.
        * @param {string} element = '.modal_wrapper'
        * @return {function}
        */
        $(element).show();
    },
    hideElement: function(element) {
        /**
        * Hides an element/sets display: none.
        * @param {string} element = '.modal_wrapper'
        * @return {function}
        */
        $(element).hide();
    },
    getDonateValue: function(element) {
        /**
        * Gets value from form
        * @param {string} element = '.widget_body form input[type="text"]'
        * @return {string}
        */
        return $(element).val();
    },
    setDonateValue: function(inputElement, outputElement) {
        /**
        * Sets value from inputElement to outputElement
        * @param {string} inputElement = '.widget_body form input[type="text"]'
        * @param {string} outputElement = '.donation_num'
        * @return {function}
        */
        var donateVal = $(inputElement).val() ? this.getDonateValue(inputElement) : "50";

        $(outputElement).html('$' + donateVal);
    },
    setToLocalStorage: function(element) {
        /**
        * Sets value from elment to LocalStorage
        * @param {string} element = '.widget_body form input[type="text"]'
        * @return {function}
        */
        var donateVal = $(element).val() ? this.getDonateValue(element) : "50";

        localStorage.setItem('donateValue', JSON.stringify(donateVal));
    },
    setModalContent: function(contentCue) {
        /**
        * Sets content of modal
        * @param {string} contentCue = 'saved'
        * @return {function}
        */
        var donateContent =  '<h3>Thank you<br>' +
                                'for donating<br>' +
                                '<span class="bold donation_num"></span>' +
                                '<span class="bold">!</span>' +
                            '</h3>';
        var savedContent = '<h4>Because there is not <br>' +
                                'a Back End<br>' +
                                'this has been saved to' +
                                'LocalStorage' +
                            '</h4>';
        var sharedContent = '<h4>This where the modal could <br>' +
                                'show different social networks<br>' +
                                'to share to.' +
                            '</h4>';

        var modalContent = $('.modal_content');

        if (contentCue === "donate") {
            modalContent.html(donateContent);
        } else if (contentCue === "save")  {
            modalContent.html(savedContent);
        } else {
            modalContent.html(sharedContent);
        }
    },
    isTooLong: function(e, inputElement) {
        /**
        * Checks to make sure donation input isn't too long of a number
        * If it is, then prevent user from adding more characters.
        * @param {e} element = '.num_input'
        * @param {inputElement} = element = '.widget_body form input[type="text"]'
        * @return {function}
        */
        var donateValue = this.getDonateValue(inputElement);

        if (donateValue.length >= 5) {
            e.preventDefault();
        }
    },
    isCurrencyValue: function(e) {
        /**
        * A quick and dirty number/currency check.
        * Disallows non-numbers to be intered into text input.
        * Adapted from:  http://stackoverflow.com/a/469362/2052678
        * @param {e} element = '.num_input'
        * @return {function}
        */

        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    },
    bodyNoScroll: function() {
        $('body').addClass('no-scroll');
    },
    bodyScroll: function() {
        $('body').removeClass('no-scroll');
    }
};
