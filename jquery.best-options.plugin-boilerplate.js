/*!
 * jQuery 'best options' plugin boilerplate
 * Author: @cowboy
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */


;(function ( $, window, document, undefined ) {

    $.fn.pluginName = function ( options ) {

        // Here's a 'best' approach for overriding 'defaults' with specified options. 
        // Note how rather than a regular defaults object being passed as the second
        // parameter, we instead refer to $.fn.pluginName.options explicitly, merging it
        // with the options passed directly to the plugin. This allows us to override
        // options both globally and on a per-call level. 

        options = $.extend( {}, $.fn.pluginName.options, options );

        return this.each(function () {

            var elem = $(this);

        });
    };

    // Globally overriding options
    // Here are our publicly accessible default plugin options that are available in case
    // the user doesn't pass in all of the values expected. The user is provided a default
    // experience but can also override the values as necessary.
    // eg. $fn.pluginName.key ='otherval';

    $.fn.pluginName.options = {

        key: "value",
        myMethod: function ( elem, param ) {
            
        }
    };
    
})( jQuery, window, document );