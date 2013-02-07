/* [URL] */
;(function(defaults, $, window, document, undefined) {

	var

		// The plugin name
		name = 'pluginName',

		dataName = $.camelCase('plugin-' + name),

		// A namespace to delegate events
		namespace = '.' + dataName,

		// The plugin mathods
		methods = {
			init : function(options, element, data) {

				// Plugin logic
				// Calling the function:
				// jQuery(selector).pluginName();
			},
			destroy : function() {

				return $(this).removeData(dataName).off(namespace);
			},
			otherMethod : function(options, element, data) {

				// Your logic
				// Calling the function:
				// jQuery(selector).pluginName('otherMethod');
			}
		};

	$.fn[name] = function(options, param) {

		if(typeof options === 'string') {

			var

				method = methods[options],
				element = $(this).data(dataName, options),
				data = element.data(dataName);

			return $.isFunction(method) ? method.call(this, param, element, data) : false;
		}

		options = $.extend({}, defaults, options);

		return $(this)[name]('destroy').each(function() {

			var

				element = $(this).data(dataName, options),
				data = element.data(dataName);

			methods.init.call(this, param, element, data);
		});
	};

	// An optional function to change the default properties of the plugin
	// Usage:
	// jQuery.pluginNameSetup({property:'CustomValue'});
	$[name + 'Setup'] = function(options) {

		return $.extend(defaults, options);
	};
})({
	property : 'value',
	otherProperty : 'value'
}, jQuery, window, document);