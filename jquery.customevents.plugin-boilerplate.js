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

;(function ( $, window, document, undefined ) {
    $.widget("ao.eventStatus", {
        options: {

        },
        
        _create : function() {
            var self = this;

            //self.element.addClass("my-widget");

            //subscribe to 'myEventStart'
            self.element.bind("myEventStart", function( e ) {
                console.log("event start");
            });

            //subscribe to 'myEventEnd'
            self.element.bind("myEventEnd", function( e ) {
                console.log("event end");
            });

            //unsubscribe to 'myEventStart'
            //self.element.unbind("myEventStart", function(e){
                ///console.log("unsubscribed to this event"); 
            //});
        },

        destroy: function(){
            $.Widget.prototype.destroy.apply( this, arguments );
        },
    });
})( jQuery, window );

//Publishing event notifications
//usage: 
// $(".my-widget").trigger("myEventStart");
// $(".my-widget").trigger("myEventEnd");