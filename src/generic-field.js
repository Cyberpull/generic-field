/**
 * generic-field.js
 * 
 * Module Name: GenericField
 * Module Purpose: Displays generic form fields with powerful functionalities
 * @copyright 2017 Christian Ezeani
 * @author Christian Ezeani <christian.ezeani@gmail.com>
 */

/**
 * This callback is triggered when the GenericField is initialized
 * @callback onInit
 * @param {GenericField} GenericField
 */

/**
 * This callback is triggered each time the content of the GenericField changes
 * @callback onChange
 * @param {Event} e
 * @param {GenericField} GenericField
 */

(function() {
    // Maps of private variables for GenericField
    var GFMap= new Map();

    // Make GenericField global variable
    window.GenericField= GenericField;

    /**
     * Creates an instance of generic form field
     * @param {(String|ElementNode)} selector - HTML Element selector
     * @param {Object} options - GenericField Options
     * @returns {GenericField} an instance of GenericField
     */
    function GenericField(selector, options) {
        var $private= {}, $element, $options;
        switch(typeof(selector)) {
            case 'string': {
                $element= document.querySelector(selector);
            } break;
            case 'object': {
                if(selector instanceof Element) {
                    $element= selector;
                } else {
                    throw 'Invalid Element Supplied!';
                }
            } break;
            default: {
                throw 'Invalid Parameter Supplied!';
            }
        }

        if(!$element) throw 'Element not found!';

        $private.$element= $element;

        $private.$options= $options= '';

    }

    Object.defineProperties(GenericField.prototype, {
        value: {
            get: function() {
                return null;
            },
            set: function(value) {
                // 
            }
        }
    });

})();
