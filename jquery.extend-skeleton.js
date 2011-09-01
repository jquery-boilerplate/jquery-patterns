/*
****************************************************************
jQuery plugin skeleton using extend pattern 
by @oscargodson with input from @timmywil
note: needs comments
****************************************************************
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