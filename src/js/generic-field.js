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
* @typedef {Element} GenericFieldTarget
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
  var GFMap = new Map();
  
  // Allowed GenericField Types
  var allowedTypes = ['text', 'number'];
  
  /**
  * Initializes GenericField
  */
  function initialize() {
    if(this instanceof GenericField) {
      var $private = GFMap.get(this);
      var $options = $private.$options;
      var $target = $private.$target;
      // Create Editor for GenericField
      var $editor = document.createElement('div');
      $editor.contentEditable = true;
      $target.appendChild($editor);
      // Conclude Initialization
      registerEvents.call(this);
      setOptions.call(this, $options);
    }
  }
  
  function setFieldType(type) {
    if(this instanceof GenericField) {
      // 
    }
  }
  
  function registerEvents() {
    // 
  }
  
  /**
  * Sets GenericField Options
  * 
  * @param {string} key 
  * @param {any} value 
  */
  function setOption(key, value) {
    if (this instanceof GenericField) {
      switch (key) {
        case 'type': {
          setFieldType.call(this, value);
        } break;
      }
    }
  }
  
  /**
  * Sets GenericField Options
  * 
  * @param {object} options 
  */
  function setOptions(options) {
    if (this instanceof GenericField && typeof (options) == 'object') {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          setOption.call(this, key, options[key]);
        }
      }
    }
  }
  
  function target() {
    var $private = GFMap.get(this);
    if($private) return $private.$target;
    return null;
  }
  
  function options() {
    var $private = GFMap.get(this);
    if($private) return $private.$options;
    return null;
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
        $target= document.querySelector(selector);
      } break;
      case 'object': {
        if(selector instanceof Element) {
          $target= selector;
        } else {
          throw 'Invalid Element Supplied!';
        }
      } break;
      default: {
        throw 'Invalid Parameter Supplied!';
      }
    }
    
    if(!$target) throw 'Element not found!';
    
    GFMap.set(this, $private);
    $private.$target= $target;
    
    $private.$options= $options= Object.assign({
      type: allowedTypes[0],
      maxLineCount: 1,
      onInit: null,
      onChange: null,
      onKeyPress: null,
      onKeyDown: null,
      onKeyUp: null,
      onMouseEnter: null,
      onBlur: null,
      onFocus: null,
    }, options);
    
    initialize.call(this);
  }
  
  Object.defineProperties(GenericField.prototype, {
    /**
    * @this {GenericField.prototype}
    * @type {String}
    */
    type: {
      get: function() {
        return this.$options.type;
      }
    },
    /**
    * @this {GenericField.prototype}
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
    * @this {GenericField.prototype}
    * @type {GenericFieldTarget}
    */
    $target: {
      get: function() {
        var $private= GFMap.get(this);
        return $private.$target;
      }
    },
    /**
    * @this {GenericField.prototype}
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
    * @this {GenericField.prototype}
    */
    set: {
      value: function(key, value) {
        // 
      }
    }
  });
  
  /*
  var GenericFieldProto = Object.create(HTMLElement.prototype);

  Object.defineProperties(GenericFieldProto, {
    createdCallback: {
      value: function() {
        console.info(this);
        this.addEventListener('click', function (e) {
          alert('Thanks!');
        });
      }
    },
    adoptedCallback: {
      value: function() {
        console.info(this);
      }
    }
  });

  window.GenericFieldElement= document.registerElement('generic-field', {
    prototype: GenericFieldProto,
    extends: 'div'
  });
  
  var domObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      console.info(mutations);
    });
  });
  
  domObserver.observe(document, {
    attributes: true,
    childList: true
  });
  
  document.addEventListener('readystatechange', function (e) {
    if(e.target.readyState == 'complete') {
      var fields= document.querySelectorAll('[generic-field]');
      fields.forEach(function(field) {
        console.info(field.getAttribute('generic-field'));
        var gfield= new GenericField(field, {
          type: field.getAttribute('generic-field')||'text'
        });
        domObserver.observe(field, {
          attributes: true
        });
      });
    }
  });
  */
  
})();
