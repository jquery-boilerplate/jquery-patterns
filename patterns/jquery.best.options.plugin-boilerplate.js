/* [URL] */
;(function(defaults, $, window, document, undefined) {

	$.extend({
		// Function to change the default properties of the plugin
		// Usage:
		// jQuery(selector).pluginSetup({property:'CustomValue'});
		pluginSetup : function(options) {

			return $.extend(defaults, options);
		}
	}).fn.extend({
		pluginName : function(options) {

			options = $.extend({}, defaults, options);

			return $(this).each(function() {

				// Plugin logic
				// Calling the function:
				// jQuery(selector).pluginName(options);
			});
		},

		otherMethod : function(options) {

			// Some logic
			// Calling the function:
			// jQuery(selector).otherMethod(options);
		}
	});
})({
	property : 'value',
	otherProperty : 'value'
}, jQuery, window, document);