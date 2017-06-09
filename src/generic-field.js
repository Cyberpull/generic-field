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
    // Callback Trigger
    function caller(callback, args) {
        args= (args instanceof Array) ? args : [];
        if(typeof(callback) == 'function') {
            return callback.apply(this, args);
        }
        return null;
    }

    // Maps of private variables for GenericField
    var GFMap= new Map();

    // Allowed GenericField Types
    var allowedTypes= ['text', 'number'];

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

        GFMap.set(this, $private);
        $private.$element= $element;

        $private.$options= $options= Object.assign({
            type: allowedTypes[0], // text|number
            maxLineCount: 1, // Maximum Line Count
        }, options);

    }

    Object.defineProperties(GenericField.prototype, {
        type: {
            get: function() {
                return this.$options.type;
            }
        },
        value: {
            get: function() {
                return this.$element.innerText;
            },
            set: function(value) {
                this.$element.innerHTML= value;
            }
        },
        $element: {
            get: function() {
                var $private= GFMap.get(this);
                return $private.$element;
            }
        },
        $options: {
            get: function() {
                var $private= GFMap.get(this);
                return $private.$options;
            }
        },
        set: {
            value: function(key, value) {
                // 
            }
        }
    });

})();
