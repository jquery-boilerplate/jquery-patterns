/*!
 * jQuery plugin boilerplate with method wiring
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani, @thgreasi
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "defaultPluginName",
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.options).
        },

        yourOtherFunction: function( options ) {
            // some logic
        },

        yourGetterFunction: function( options ) {
            // some logic that returns a result
            return Math.random();
        },

        _yourPrivateFunction: function( options ) {
            // some logic
        },

        destroy: function() {
            // Place logic that completely removes
            // the plugin's functionality
            $.removeData(this.element, pluginName);
        }
    };

    // A wrapper around the plugin's constructor,
    // preventing against multiple instantiations &
    // wiring with the plugin methods.
    $.fn[pluginName] = function ( options ) {
        var result,
            restArgs = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
            var instance = $.data(this, "plugin_" + pluginName);
            if (!instance) {
                instance = new Plugin( this, options );
                $.data(this, "plugin_" + pluginName, instance);

            // When the first argument matches the name of a method
            } else if (typeof options === "string" && // method name
                options[0] !== "_" && // protect private methods
                typeof instance[options] === "function") {

                // invoke the method with the rest arguments
                result = instance[options].apply( instance, restArgs );
                if (result !== undefined) {
                    return false; // break the $.fn.each() iteration
                }
            }
        });

        // if there is no return value,
        // then return `this` to enable chaining
        return result !== undefined ? result : this;
    };

})( jQuery, window, document );
