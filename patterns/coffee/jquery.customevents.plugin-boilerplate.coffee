###!
* jQuery custom-events plugin boilerplate
* Author: DevPatch
* Further changes: @addyosmani
* Ported to CoffeeScript: @yckart
* Licensed under the MIT license
###

# In this pattern, we use jQuery's custom events to add
# pub/sub (publish/subscribe) capabilities to widgets.
# Each widget would publish certain events and subscribe
# to others. This approach effectively helps to decouple
# the widgets and enables them to function independently.
(($, window, document) ->
  $.widget "ao.eventStatus",
    options: {

    }
    _create: ->
      self = @

      #self.element.addClass( "my-widget" );

      #subscribe to 'myEventStart'
      self.element.bind "myEventStart", (e) ->
        console.log "event start"


      #subscribe to 'myEventEnd'
      self.element.bind "myEventEnd", (e) ->
        console.log "event end"
      return


    #unsubscribe to 'myEventStart'
    #self.element.unbind( "myEventStart", function(e){
      #console.log("unsubscribed to this event");
    #});
    destroy: ->
      $.Widget::destroy.apply @, arguments_
      return

  return
) jQuery, window, document

#Publishing event notifications
#usage:
# $(".my-widget").trigger "myEventStart"
# $(".my-widget").trigger "myEventEnd"
