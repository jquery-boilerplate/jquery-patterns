/*!
 * jQuery extend-based plugin boilerplate
 * Author: @oscargodson
 * Further changes: @timmywil
 * Licensed under the MIT license
 */


;(function($){
    $.fn.extend({

        pluginname: function(options) {

            this.defaultOptions = {};

            var settings = $.extend({}, this.defaultOptions, options);

            return this.each(function() {

                var $this = $(this);

            });

        }
        
    });

})(jQuery);