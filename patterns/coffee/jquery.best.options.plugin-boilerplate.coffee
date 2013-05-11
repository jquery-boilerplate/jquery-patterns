###!
* jQuery 'best options' plugin boilerplate
* Author: @cowboy
* Further changes: @addyosmani
* Forked to CoffeeScript: @yckart
* Licensed under the MIT license
###
(($, window, document) ->
  $.fn.pluginName = (options) ->

    # Here's a best practice for overriding 'defaults'
    # with specified options. Note how, rather than a
    # regular defaults object being passed as the second
    # parameter, we instead refer to $.fn.pluginName.options
    # explicitly, merging it with the options passed directly
    # to the plugin. This allows us to override options both
    # globally and on a per-call level.

    options = $.extend({}, $.fn.pluginName.options, options)
    @each ->
      elem = $(@)
      # Some logic


  # Globally overriding options
  # Here are our publicly accessible default plugin options
  # that are available in case the user doesn't pass in all
  # of the values expected. The user is given a default
  # experience but can also override the values as necessary.
  # eg. $fn.pluginName.key ='otherval';

  $.fn.pluginName.options =
    key: "value"
    myMethod: (elem, param) ->

  # Prevents CoffeeScript to return a value from plugin wrapper.
  return
) jQuery, window, document
