###!
* jQuery namespaced 'Starter' plugin boilerplate
* Author: @dougneiner
* Further changes: @addyosmani
* Ported to CoffeeScript: @yckart
* Licensed under the MIT license
###
(($) ->
  $.myNamespace = {}  unless $.myNamespace
  $.myNamespace.myPluginName = (el, myFunctionParam, options) ->
    # To avoid scope issues, use 'base' instead of 'this'
    # to reference this class from internal events and functions.
    base = @

    # Access to jQuery and DOM versions of element
    base.$el = $(el)
    base.el = el

    # Add a reverse reference to the DOM object
    base.$el.data "myNamespace.myPluginName", base

    base.init = ->
      base.myFunctionParam = myFunctionParam
      base.options = $.extend({}, $.myNamespace.myPluginName.defaultOptions, options)

      # Put your initialization code here


    # Sample Function, Uncomment to use
    # base.functionName = function( paramaters ){
    #
    # };
    # Run initializer
    base.init()

  $.myNamespace.myPluginName.defaultOptions = myDefaultValue: ""

  $.fn.mynamespace_myPluginName = (myFunctionParam, options) ->
    @each ->
      new $.myNamespace.myPluginName(@, myFunctionParam, options)
      return
  return

) jQuery
