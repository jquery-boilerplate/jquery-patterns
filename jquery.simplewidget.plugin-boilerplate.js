/*!
 * jQuery simpleWidget - v0.1pre - 10/28/2010
 * http://benalman.com/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  $.simpleWidget = function( widget_name, widget ) {
    
    // Create selector.
    $.expr[':'][ widget_name ] = function( elem ) {
      return !!$.data( elem, widget_name );
    };
    
    // Create plugin method.
    $.fn[ widget_name ] = function( options ) {
      var args,
        args_to_slice = 0,
        method_name = '_create',
        result;
      
      // Was a method name passed as the first argument?
      if ( typeof options === 'string' && $.isFunction( widget[ options ] ) ) {
        method_name = options;
        args_to_slice = 1;
      }
      
      // Parse the passed arguments.
      args = Array.prototype.slice.call( arguments, args_to_slice );
      
      // Call the appropriate method in the context of each passed element's
      // instance.
      this.each(function(){
        var elem = $(this),
          data = elem.data( widget_name ),
          created = data,
          method;
        
        // If widget has no data, initialize instance data.
        data || elem.data( widget_name, data = $.extend( {}, widget, {
          element: elem,
          options: options
        }));
        
        // Only execute method when appropriate.
        if ( created ? method_name !== '_create' : method_name !== 'destroy' ) {
          method = data[ method_name ];
          result = $.isFunction( method ) && method.apply( data, args );
        }
        
        if ( method_name === 'destroy' ) {
          // If destroying a widget, remove instance data.
          elem.removeData( widget_name );
          
        } else if ( result !== undefined ) {
          // If method returned a non-undefined value, break out of the each.
          return false;
        }
      });
      
      // If method returned a non-undefined value, return that value (this will
      // break the chain).
      return result !== undefined ? result : this;
    };
  };
  
})(jQuery);