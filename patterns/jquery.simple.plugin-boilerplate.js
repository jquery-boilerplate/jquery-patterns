/**
* Plugin Authoring
*
* Simple and organized
* The variables, DOMS elements, methods and events were separated
* @author Richard Santos <richaardsantos@gmail.com>
* 
**/
;(function( $ ){

    "use strict";

    $.fn.pluginName = function( params ) {

        // Default options
        var options = $.extend( {
            'option1' : 'value1',
            'option2' : 'value2'
        }, params);

        // Plugin variables
        var myVarOne = 'simple';

        var myVarTwo = 'organized';

        // Put your DOM elements here
        var elements = {
            $body  : $('body'),
            win   : window
        };


        // Plugin methods
        var methods = {

            // init here
            init : function(){
                events.yourEvent();
            },

            setOptions : function( key, value ) {
                options[key] = value;
                return this;
            },

            getOptions : function( key ){
                return options[key];
            }

        };

        // Plugin events
        var events = {

            yourEvent : function() {
                
                elements.$body.html( 'Hey man, it is working! Here option1: ' + methods.getOptions('option1') );

                return this;

            }

        };

        return this.each( function() {

            methods.init();

        });

    };

})( jQuery );

// calling plugin
// $(document).pluginName();