###!
* jQuery UI Widget + RequireJS module boilerplate (for 1.8/9+)
* Authors: @jrburke, @addyosmani
* Ported to CoffeeScript: @yckart
* Licensed under the MIT license
###

# Note from James:
#
# This assumes you are using the RequireJS+jQuery file, and
# that the following files are all in the same directory:
#
# - require-jquery.js
# - jquery-ui.custom.min.js (custom jQuery UI build with widget factory)
# - templates/
#    - asset.html
# - ao.myWidget.js

# Then you can construct the widget like so:

#ao.myWidget.js file:
#Uncomment this version for a sample using templates
#define("ao.myWidget", ["jquery", "text!templates/asset.html", "jquery-ui.custom.min","jquery.tmpl"], function ($, assetHtml) {
define "ao.myWidget", ["jquery", "jqueryui"], ($) ->

  # define your widget under a namespace of your choice
  # 'ao' is used here as a demonstration
  $.widget "ao.myWidget",

    # Options to be used as defaults
    options: {}

    # Set up widget (e.g. create element, apply theming,
    # bind events, etc.)
    _create: ->

      # _create will automatically run the first time
      # this widget is called. Put the initial widget
      # set-up code here, then you can access the element
      # on which the widget was called via this.element.
      # The options defined above can be accessed via
      # this.options

      #this.element.addStuff();
      #this.element.addStuff();
      #this.element.tmpl(assetHtml).appendTo(this.content);

    # Destroy an instantiated plugin and clean up modifications
    # that the widget has made to the DOM
    destroy: ->
      #t his.element.removeStuff();
      # For UI 1.8, destroy must be invoked from the base
      # widget
      $.Widget::destroy.call @
      # For UI 1.9, define _destroy instead and don't worry
      # about calling the base widget
      return

    methodB: (event) ->
      # _trigger dispatches callbacks the plugin user can
      # subscribe to
      #signature: _trigger( "callbackName" , [eventObject],
      # [uiObject] )
      console.log "methodB called"

    methodA: (event) ->
      @_trigger "dataChanged", event,
        key: "someValue"



    #Respond to any changes the user makes to the option method
    _setOption: (key, value) ->
      switch key
        when "someValue"
          #this.options.someValue = doSomethingWith( value );
        else
          #this.options[ key ] = value;
          break

      # For UI 1.8, _setOption must be manually invoked from
      # the base widget
      $.Widget::_setOption.apply @, arguments_
      # For UI 1.9 the _super method can be used instead
      #this._super( "_setOption", key, value );

    #somewhere assetHtml would be used for templating, depending
    # on your choice.

  return


# If you are going to use the RequireJS optimizer to combine files
# together, you can leave off the "ao.myWidget" argument to define:
# define(["jquery", "text!templates/asset.html", "jquery-ui.custom.min"], …