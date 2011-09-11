/*!
 * jQuery UI Widget factory "bridge" plugin boilerplate
 * Author: @erichynds
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */


// a "widgetName" object constructor
var widgetName = function( options, element ){
  this.name = "myWidgetName";
  this.options = options;
  this.element = element;
  this._init();
}


// the "widget" prototype
widgetName.prototype = {
    
    // _create will automatically run the first time this widget is called
    _create: function(){
        // creation code
    },

    // _init fires when your instance is first created and when 
    // attempting to initialize the widget again (by the bridge)
    // after it has already been initialized.
    _init: function(){
        // init code
    },

    option: function( key, value ){
        
        // optional: get/change options post initialization
        
        // signature: $('#foo').bar({ cool:false });
        if( $.isPlainObject( key ) ){
            this.options = $.extend(true, this.options, key);
        
        // signature: $('#foo').option('cool'); - getter
        } else if ( key && typeof value === "undefined" ){
            return this.options[ key ];
            
        // signature: $('#foo').bar('option', 'baz', false);
        } else {
            this.options[ key ] = value;
        }
        
        return this; //return the instance
    },

    // notice no underscore is used for public methods
    publicFunction: function(){ 
        console.log('public function');
    },

    // underscores are used for private methods
    _privateFunction: function(){ 
        console.log('private function');
    }
};

/*
usage:
// connect the widget obj to jQuery's API under the "foo" namespace
$.widget.bridge("foo", widgetName);

// create an instance of the widget for use
var instance = $("#elem").foo({
     baz: true
});

 // your widget instance exists in the elem's data
instance.data("foo").element; // => #elem element

// bridge allows you to call public methods...
instance.foo("publicFunction"); // => "public method"

// bridge prevents calls to internal methods
instance.foo("_privateFunction"); // => #elem element
*/



