/**
 * generic-field.js
 * 
 * Module Name: GenericField
 * Module Purpose: Displays generic form fields with powerful functionalities
 * 
 * @copyright 2017 Christian Ezeani
 * @author Christian Ezeani <christian.ezeani@gmail.com>
 */

/**
 * This callback is triggered when the GenericField is initialized
 * 
 * @callback onInit
 * @param {GenericField} GenericField
 */

/**
 * This callback is triggered each time the content of the GenericField changes
 * 
 * @callback onChange
 * @param {Event} e - Event Object
 * @param {GenericField} inst - An Instance of GenericField
 */



/** Type Definitions */

/**
 * A String or an Element Object
 * @typedef {(string|Element)} GenericFieldSelector
 */

/**
 * A GenericField Object
 * @typedef {object} GenericField
 */

/**
 * A value GenericField
 * @typedef {((string|object|string[]|object[]))} GenericFieldValue
 */

/**
 * Target Elements of GenericField
 * @typedef {Element[]} GenericFieldTarget
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

    /**
     * Initializes GenericField
     */
    function initialize() {
        console.info(this);
    }

    /** @type {GenericField} */
    window.GenericField= GenericField;

    /**
     * Creates an instance of generic form field
     * 
     * @global
     * @class
     * @param {GenericFieldSelector} selector - HTML Element selector
     * @param {object} options - GenericField Options
     * @returns {GenericField} an instance of GenericField
     */
    function GenericField(selector, options) {
        var $private= {}, $target, $options;
        switch(typeof(selector)) {
            case 'string': {
                $target= document.querySelectorAll(selector);
            } break;
            case 'object': {
                $target= [];
                if(selector instanceof Element) {
                    $target.push(selector);
                } else {
                    throw 'Invalid Element Supplied!';
                }
            } break;
            default: {
                throw 'Invalid Parameter Supplied!';
            }
        }

        if(!($target && $target.length)) throw 'Element not found!';

        GFMap.set(this, $private);
        $private.$target= $target;

        $private.$options= $options= Object.assign({
            type: allowedTypes[0],
            maxLineCount: 1,
        }, options);

        initialize.call(this);
    }


    Object.defineProperties(GenericField.prototype, {
        /**
         * @this {GenericField}
         * @type {String}
         */
        type: {
            get: function() {
                return this.$options.type;
            }
        },
        /**
         * @this {GenericField}
         * @type {GenericFieldValue}
         */
        value: {
            get: function() {
                return this.$element.innerText;
            },
            set: function(value) {
                this.$element.innerHTML= value;
            }
        },
        /**
         * @this {GenericField}
         * @type {GenericFieldTarget}
         */
        $target: {
            get: function() {
                var $private= GFMap.get(this);
                return $private.$target;
            }
        },
        /**
         * @this {GenericField}
         * @type {object}
         */
        $options: {
            get: function() {
                var $private= GFMap.get(this);
                return $private.$options;
            }
        },
        /**
         * Set or modify an option
         * 
         * @this {GenericField}
         */
        set: {
            value: function(key, value) {
                // 
            }
        }
    });

})();
