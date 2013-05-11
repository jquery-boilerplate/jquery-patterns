###!
* jQuery extend-based plugin boilerplate
* Author: @oscargodson
* Further changes: @timmywil, @addyosmani
* Ported to CoffeeScript: @yckart
* Licensed under the MIT license
###

#As you'll notice below, we're making use of $.fn.extend to create our plugin rather
#than opting for $.fn.pluginname. This type of structure may be useful if you need
#to add a relatively large number of methods to your plugin. There are however alternatives
#to this that may be better suited, including Alex Sexton's prototypal inheritence pattern
#which is also included in this repo.

(($) ->
  $.fn.extend pluginname: (options) ->
    @defaultOptions = {}
    settings = $.extend({}, @defaultOptions, options)
    @each ->
      $this = $(@)

  # Prevents CoffeeScript to return a value from plugin wrapper.
  return
) jQuery
