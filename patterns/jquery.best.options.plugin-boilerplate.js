/**
 * @name : Plugin Name
 * @description : Plugin description
 * @author : Author Name
 * @licence : Licence
 * @version : 1 beta
 * @required : jQuery 1.4+
 */
;(function($, window, document, undefined) {

	var
		// Defines object to store default values of the plugins
		defaults = {
			methodName : {
				propertyName : 'value'
			}
		};

	// Extends jQuery object
	$.extend({

		// Creates a optional method to change the default values of the method
		// Use: jQuery.methodNameSetup(options);
		methodNameSetup : function(options) {

			// Returns the changed object
			return defaults.methodName = $.isPlainObject(options) && !$.isEmptyObject(options) ? $.extend(defaults.methodName, options) : defaults.methodName;
		},

		// Creates a optional object to store info of the methods (Sample: version, required, deprecated)
		// Use: jQuery.methodNameInfo.property;
		methodNameInfo : {
			property : 'value'
		}
	})

	// Extends jQuery.fn object
	.fn.extend({

		// Creates a method in jQuery.fn object
		// Use: jQuery(selector).methodName(options);
		methodName : function(options) {

			// Stores the parameters of the method
			options = $.isPlainObject(options) && !$.isEmptyObject(options) ? $.extend(defaults.methodName, options) : defaults.methodName;

			return $(this).each(function() {

				// ...
			});
		}
	});
})(jQuery, window, document);