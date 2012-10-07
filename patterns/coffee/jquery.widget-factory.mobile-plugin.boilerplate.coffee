###!
* (jQuery mobile) jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
* Author: @scottjehl
* Further changes: @addyosmani
* Ported to CoffeeScript: @yckart
* Licensed under the MIT license
###
(($, window, document) ->

  #define a widget under a namespace of your choice
  #here 'mobile' has been used in the first parameter
  $.widget "mobile.widgetName", $.mobile.widget,

    #Options to be used as defaults
    options:
      foo: true
      bar: false

    _create: ->
      # _create will automatically run the first time this
      # widget is called. Put the initial widget set-up code
      # here, then you can access the element on which
      # the widget was called via this.element
      # The options defined above can be accessed via
      # this.options

      #var m = this.element,
      #p = m.parents(":jqmData(role='page')"),
      #c = p.find(":jqmData(role='content')")

    # Private methods/props start with underscores
    _dosomething: ->

    # Public methods like these below can can be called
    # externally:
    # $("#myelem").foo( "enable", arguments );

    enable: ->

    # Destroy an instantiated plugin and clean up modifications
    # the widget has made to the DOM
    destroy: ->
      #this.element.removeStuff();
      # For UI 1.8, destroy must be invoked from the
      # base widget
      $.Widget::destroy.call @
      return


    # For UI 1.9, define _destroy instead and don't
    # worry about calling the base widget
    methodB: (event) ->
      #_trigger dispatches callbacks the plugin user can
      # subscribe to
      #signature: _trigger( "callbackName" , [eventObject],
      #  [uiObject] )
      # eg. this._trigger( "hover", e /*where e.type ==
      # "mouseenter"*/, { hovered: $(e.target)});
      console.log "method B called"
      #this.methodA();


    methodA: (event) ->
      @_trigger "dataChanged", event,
        key: "someValue"



    #Respond to any changes the user makes to the option method
    _setOption: (key, value) ->
      switch key
        when "someValue"
          # this is all optional
          @options.someValue = doSomethingWith(value)
        else
          # optional
          @options[key] = value
          break

      # For UI 1.8, _setOption must be manually invoked from
      # the base widget
      $.Widget::_setOption.apply @, arguments
      return
      # For UI 1.9 the _super method can be used instead
      # this._super( "_setOption", key, value );
  return
) jQuery, window, document

#usage: $("#myelem").foo( options );

# Some additional notes - delete this section before using the boilerplate.
#
# We can also self-init this widget whenever a new page in jQuery Mobile is created. jQuery Mobile's "page" plugin dispatches a "create" event when a jQuery Mobile page (found via data-role=page attr) is first initialized.
#
#We can listen for that event (called "pagecreate" ) and run our plugin automatically whenever a new page is created.
#
#$(document).bind("pagecreate", function (e) {
#    // In here, e.target refers to the page that was created
#    // (it's the target of the pagecreate event)
#    // So, we can simply find elements on this page that match a
#    // selector of our choosing, and call our plugin on them.
#    // Here's how we'd call our "foo" plugin on any element with a
#    // data-role attribute of "foo":
#    $(e.target).find("[data-role='foo']").foo(options);
#
#    // Or, better yet, let's write the selector accounting for the configurable
#    // data-attribute namespace
#    $(e.target).find(":jqmData(role='foo')").foo(options);
#});
#
#That's it. Now you can simply reference the script containing your widget and pagecreate binding in a page running jQuery Mobile site, and it will automatically run like any other jQM plugin.