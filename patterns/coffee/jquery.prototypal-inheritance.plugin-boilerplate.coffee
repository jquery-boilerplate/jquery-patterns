###!
* jQuery prototypal inheritance plugin boilerplate
* Author: Alex Sexton, Scott Gonzalez
* Further changes: @addyosmani
* Ported to CoffeeScript: @yckart
* Licensed under the MIT license
###

# myObject - an object representing a concept that you want
# to model (e.g. a car)
myObject =
  init: (options, elem) ->
    # Mix in the passed-in options with the default options
    @options = $.extend({}, @options, options)

    # Save the element reference, both as a jQuery
    # reference and a normal reference
    @elem = elem
    @$elem = $(elem)

    # Build the DOM's initial structure
    @_build()

    # return this so that we can chain and use the bridge with less code.
    @

  options:
    name: "No name"

  _build: ->
    #this.$elem.html('<h1>'+this.options.name+'</h1>');

  myMethod: (msg) ->
    # You have direct access to the associated and cached
    # jQuery element
    console.log "myMethod triggered"
    # this.$elem.append('<p>'+msg+'</p>');

# Object.create support test, and fallback for browsers without it
if typeof Object.create isnt "function"
  Object.create = (o) ->
    F = ->
    F:: = o
    new F()

# Create a plugin based on a defined object
$.plugin = (name, object) ->
  $.fn[name] = (options) ->
    @each ->
      $.data @, name, Object.create(object).init(options, @)  unless $.data(@, name)
  return


# Usage:
# With myObject, we could now essentially do this:
# $.plugin('myobj', myObject);

# and at this point we could do the following
# $('#elem').myobj({name: "John"});
# var inst = $('#elem').data('myobj');
# inst.myMethod('I am a method');
