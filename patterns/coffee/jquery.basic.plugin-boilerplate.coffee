###!
* jQuery lightweight plugin boilerplate
* Original author: @ajpiano
* Further changes, comments: @addyosmani
* Forked to CoffeeScript: @yckart
###

(($, window, document) ->
    # window and document are passed through as local
    # variables rather than as globals, because this (slightly)
    # quickens the resolution process and can be more
    # efficiently minified (especially when both are
    # regularly referenced in your plugin).

    # The actual plugin constructor
    Plugin = (element, options) ->
        @element = element

        # jQuery has an extend method that merges the
        # contents of two or more objects, storing the
        # result in the first object. The first object
        # is generally empty because we don't want to alter
        # the default options for future instances of the plugin
        @options = $.extend({}, defaults, options)
        @_defaults = defaults
        @_name = pluginName
        @init()

    # Create the defaults once
    pluginName = "defaultPluginName"
    defaults =
        propertyName: "value"
        popperttyName: "value"

    Plugin:: =
        init: ->
            # Place initialization logic here
            # You already have access to the DOM element and
            # the options via the instance, e.g. this.element
            # and this.options
            # you can add more functions like the one below and
            # call them like so: this.yourOtherFunction(this.element, this.options).
        yourOtherFunction: (el, options) ->
            # some logic

    # A really lightweight plugin wrapper around the constructor,
    # preventing against multiple instantiations
    $.fn[pluginName] = (options) ->
        @each ->
            $.data @, "plugin_" + pluginName, new Plugin(@, options)  unless $.data(@, "plugin_" + pluginName)

    # Prevents CoffeeScript to return a value from plugin wrapper.
    return
) jQuery, window, document
