/*!
 * jQuery extend-based plugin boilerplate
 * Author: @oscargodson
 * Further changes: @timmywil, @addyosmani
 * Licensed under the MIT license
 */

/*
As you'll notice below, we're making use of $.fn.extend to create our plugin rather
than opting for $.fn.pluginname. This type of structure may be useful if you need
to add a relatively large number of methods to your plugin. There are however alternatives
to this that may be better suited, including Alex Sexton's prototypal inheritence pattern
which is also included in this repo.
*/


//the semi colon before function invocation is a safety net against concatenated
//scripts and/or other plugins which may not be closed properly.
;(function($){
    $.fn.extend({
        pluginName: function( options ) {

            this.defaultOptions = {};

            var settings = $.extend({}, this.defaultOptions, options);

            return this.each(function() {

                var $this = $(this);

            });

        }

    });

})(jQuery);
