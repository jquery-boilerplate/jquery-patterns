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

		// Defines the plugin name
		pluginName = 'pluginName',

		// Defines object to store default values of the plugin
		defaults = {
			propertyName : 'value'
		};

	// Creates a method in jQuery.fn object
	// Use: jQuery(selector).pluginName(options);
	$.fn[pluginName] = function(options) {

		// Stores the parameters of the method
		options = $.isPlainObject(options) && !$.isEmptyObject(options) ? $.extend(defaults, options) : defaults;

		return $(this).each(function() {

			// ...
		});
	};

	// Creates a optional method to change the default values of the method
	// Use: jQuery.pluginNameSetup(options);
	$[pluginName + 'Setup'] = function(options) {

		// Returns the changed object
		return defaults = $.isPlainObject(options) && !$.isEmptyObject(options) ? $.extend(defaults, options) : defaults;
	};

	// Creates a optional object to store info of the methods (Example: version, required, deprecated)
	// Use: jQuery.pluginNameInfo.property;
	$[pluginName + 'Info'] = {
		property : 'value'
	};
})(jQuery, window, document);