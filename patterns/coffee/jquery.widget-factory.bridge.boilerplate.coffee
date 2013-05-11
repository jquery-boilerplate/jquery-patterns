###!
* jQuery UI Widget factory "bridge" plugin boilerplate
* Author: @erichynds
* Further changes, additional comments: @addyosmani
* Ported to CoffeeScript: @yckart
* Licensed under the MIT license
###

# a "widgetName" object constructor
# required: this must accept two arguments,
# options: an object of configuration options
# element: the DOM element the instance was created on
widgetName = (options, element) ->
  @name = "myWidgetName"
  @options = options
  @element = element
  @_init()
  return


# the "widgetName" prototype
widgetName:: =

  # _create will automatically run the first time this
  # widget is called
  _create: ->
    # creation code

  # required: initialization logic for the plugin goes into _init
  # This fires when your instance is first created and when
  # attempting to initialize the widget again (by the bridge)
  # after it has already been initialized.
  _init: ->
    # init code

  # required: objects to be used with the bridge must contain an
  # 'option'. Post-initialization, the logic for changing options
  # goes here.
  option: (key, value) ->

    # optional: get/change options post initialization
    # ignore if you don't require them.

    # signature: $('#foo').bar({ cool:false });
    if $.isPlainObject(key)
      @options = $.extend(true, @options, key)

    # signature: $('#foo').option('cool'); - getter
    else if key and typeof value is "undefined"
      return @options[key]

    # signature: $('#foo').bar('option', 'baz', false);
    else
      @options[key] = value

    # required: option must return the current instance.
    # When re-initializing an instance on elements, option
    # is called first and is then chained to the _init method.
    @


  # notice no underscore is used for public methods
  publicFunction: ->
    console.log "public function"


  # underscores are used for private methods
  _privateFunction: ->
    console.log "private function"

# usage:

# connect the widget obj to jQuery's API under the "foo" namespace
# $.widget.bridge("foo", widgetName);

# create an instance of the widget for use
# var instance = $("#elem").foo({
#     baz: true
# });

# your widget instance exists in the elem's data
# instance.data("foo").element; // => #elem element

# bridge allows you to call public methods...
# instance.foo("publicFunction"); // => "public method"

# bridge prevents calls to internal methods
# instance.foo("_privateFunction"); // => #elem element
