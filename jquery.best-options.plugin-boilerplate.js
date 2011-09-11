/*!
 * jQuery 'best options' plugin boilerplate
 * Author: @cowboy
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */


;(function ($, window, document, undefined) {

    $.fn.pluginName = function (options) {

        // Best approach for overriding 'defaults' with specified options. 
        // Note how rather than a regular defaults object being passed as the second
        // parameter, we instead refer to $.fn.pluginName.options explicitly, merging it
        // with the options passed directly to the plugin. This allows us to override
        // options both globally and on a per-call level. 

        options = $.extend({}, $.fn.pluginName.options, options);

        return this.each(function () {

            var elem = $(this);

        });
    };

    // Some sensible defaults.
    $.fn.pluginName.options = {

        key: "value",
        myMethod: function (elem, param) {
            
        }
    };
    
})(jQuery, window);
