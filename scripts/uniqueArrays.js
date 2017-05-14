// Please write a function that returns distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7").
// The function should accept an array and return an array with the distinct values.
// Please output the resulting array values to the page in the div with the `js-result` class.

var Uniques = {
    returnUniques: function(array){
        /**
        * Loops through and filters an array, based on
        * passed in this.isItemUnique criteria.
        * adapted from:  http://stackoverflow.com/a/14438954/2052678
        * @param {array}
        * @return {array}
        */

        return array.filter(this.isItemUnique);
    },
    isItemUnique: function(value, index, array){
        /**
        * Checks if index value in array is unique.
        * Called be this.returnUniques()
        * adapted from:  http://stackoverflow.com/a/14438954/2052678
        * @param {array}
        * @param {index}
        * @param {value}
        * @return {boolean}
        */

        return array.indexOf(value) === index;
    },
    getArray: function(element){
        /**
        * Gets value from text input field.
        * @param {element} element = '.js-result input[type="text"]'
        * @return {string}
        */

        var inputVal = $(element).val();

        return this.parseArray(inputVal);
    },
    parseArray: function(stringedArray){
        /**
        * Parses a stringed array to
        * remove spaces (added later), trailing comma, and brackets
        * @param {array} stringedArray
        * @return {array}
        */

        // remove all spaces first:
        stringedArray = stringedArray.replace(/\s/g,'');
        // check if user added brackets, if so remove them:
        if (stringedArray.charAt(0) === "[") {
            stringedArray = stringedArray.substring(1);
            // also check if last character is an empty comma:
        } else if ((stringedArray.slice(-1) === "]") || (stringedArray.slice(-1) === ",")) {
            stringedArray = stringedArray.substring(0, stringedArray.length - 1);
        }

        return stringedArray.split(",");
    },
    setArray: function(inputElement, outputElement){
        /**
        * Sets array to outputElement
        * @param {element} inputElement = '.js-result input[type="text"]'
        * @param {element} outputElement = '.array_output span'
        * @return {function}
        */

        var array       = this.getArray(inputElement),
            dommedArray = this.setArrayForDom(array);

        $(outputElement).html(dommedArray);
    },
    setArrayForDom: function(array){
        /**
        * Parses array back with commas, spaces and brackets for front end.
        * @param {array
        * @return {string}
        */

        var uniques         = this.returnUniques(array),
            stringedArray   = "[" + uniques.toString() + "]",
            addedSpaces     = stringedArray.replace(/,/g , ", ");

        return addedSpaces;
    },
    setDefault: function(element){
        /**
        * Sets default array from top instructions, and sends to front end
        * @param {element} = '.array_output span'
        * @return {function}
        */

        var defaultArray    = [1, 3, 5, 3, 7, 3, 1, 1, 5],
        dommedArray         = this.setArrayForDom(defaultArray);

        $(element).html(dommedArray);
    }
};
