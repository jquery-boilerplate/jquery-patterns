/*
**********************************************************
A distilled template based on @cowboys jQuery pluginization
'best options' tip where options can be overridden both globally 
and per-call. Thanks to @mathias for reminding me about the 
pattern.
**********************************************************
*/

(function ($, undefined) {

    $.fn.pluginName = function (options) {

        // Override defaults with specified options.
        options = $.extend({}, $.fn.pluginName.options, options);

        return this.each(function () {

            var elem = $(this);

        });
    };

    // Some sensible defaults.
    $.fn.pluginName.options = {

        key: "value",
        myMethod: function (elem, param) {}

    };
    
})(jQuery);
