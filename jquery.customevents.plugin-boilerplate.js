/*!
 * jQuery custom-events plugin boilerplate
 * Author: DevPatch
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */


/*
Use jQuery’s custom events to enable publish/speak and subscribe/
listen into widgets. Each widget would publish certain events and 
subscribe to others. This approach effectively decouples the widgets 
and allows them to function independently.
*/

(function(){
    $.widget("ao.eventStatus", {
        options: {

        },
        _create : function() {
            var self = this;

            self.element.addClass("my-widget")
            self.element.bind("myEventStart", function(e) {
                console.log("event start");
            });

            self.element.bind("myEventEnd", function(e) {
                console.log("event end");
            });
        },
        destroy: function(){
            $.Widget.prototype.destroy.apply(this, arguments);
        },
    });
});

//usage: $(".my-widget").trigger("myEventStart");