###
* 'Highly configurable' mutable plugin boilerplate
* Author: @markdalgleish
* Further changes, comments: @addyosmani
* Ported to CoffeeScript: @yckart
* Licensed under the MIT license
###

# Note that with this pattern, as per Alex Sexton's, the plugin logic
# hasn't been nested in a jQuery plugin. Instead, we just use
# jQuery for its instantiation.
(($, window, document) ->

  # our plugin constructor
  Plugin = (elem, options) ->
    @elem = elem
    @$elem = $(elem)
    @options = options

    # This next line takes advantage of HTML5 data attributes
    # to support customization of the plugin on a per-element
    # basis. For example,
    # <div class=item' data-plugin-options='{"message":"Goodbye World!"}'></div>
    @metadata = @$elem.data("plugin-options")
    return


  # the plugin prototype
  Plugin:: =
    defaults:
      message: "Hello world!"

    init: ->
      # Introduce defaults that can be extended either
      # globally or using an object literal.
      @config = $.extend({}, @defaults, @options, @metadata)

      # Sample usage:
      # Set the message per instance:
      # $('#elem').plugin({ message: 'Goodbye World!'});
      # or
      # var p = new Plugin(document.getElementById('elem'),
      # { message: 'Goodbye World!'}).init()
      # or, set the global default message:
      # Plugin.defaults.message = 'Goodbye World!'
      @sampleMethod()
      @

    sampleMethod: ->
      # eg. show the currently configured message
      # console.log(this.config.message);


  Plugin.defaults = Plugin::defaults
  $.fn.plugin = (options) ->
    @each ->
      new Plugin(@, options).init()
      return
  return

  #optional: window.Plugin = Plugin;

) jQuery, window, document
