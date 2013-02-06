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
			init : function(options) {

				var

					element = $(this),
					data = element.data(dataName);

				// Plugin logic
				// Calling the function:
				// jQuery(selector).pluginName();
			},
			destroy : function() {

				return $(this).removeData(dataName).off(namespace);
			},
			otherMethod : function(options) {

				// Your logic
				// Calling the function:
				// jQuery(selector).pluginName('otherMethod');
			}
		};

	$.fn[name] = function(options, param) {

		if(typeof options === 'string') {

			var method = methods[options];

			return $.isFunction(method) ? method.apply(this, param) : false;
		}

		options = $.extend({}, defaults, options);

		return $(this)[name]('destroy').data(dataName, options).each(function() {

			methods.init.apply(this, param);
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