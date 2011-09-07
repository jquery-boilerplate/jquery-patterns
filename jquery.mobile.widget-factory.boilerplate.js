/*!
 * (jQuery mobile) jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
 * Author: @scottjehl
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */

/*
* Note from addy: This is due to be fleshed out in more detail
shortly. Including a preliminary version that we can build on.
*/

//define a widget under the mobile namespace
$.widget( "mobile.widgetName", $.mobile.widget, {

	//widget options
	options: {
		foo: true,
		bar: false
	},

	_create: function() {
		// _create will automatically run the first time this widget is called
		// Put the initial widget setup code here, then 
		// you can access the element on which the widget was called via this.element
		// The options defined above can be accessed via this.options
	},

	// Private methods/props start with underscores
	_dosomething: function(){ ... },

	// Public methods like these below can can be called externally: 
	// $("#myelem").foo( "enable", arguments );

	enable: function() { ... },
	disable: function() { ... },
	refresh: function() { ... }
});


//usage: $("#myelem").foo( options );


// We can also self-init this widget whenever a new page in jQuery Mobile is created.
// jQuery Mobile's "page" plugin dispatches a "create" event
// when a jQuery Mobile page (found via data-role=page attr) is first initialized.

// We can listen for that event (called "pagecreate" ) and run our plugin automatically whenever a new page is created.

$( document ).bind( "pagecreate", function( e ){
	// In here, e.target refers to the page that was created (it's the target of the pagecreate event)
	// So, we can simply find elements in this page that match a selector of our choosing, and call our plugin on them.

	// Here's how we'd call our "foo" plugin on any element with a data-role attribute of "foo":
	$( e.target ).find( "[data-role='foo']" ).foo( options );

	// Or, better yet, let's write the selector accounting for the configurable data-attribute namespace
	$( e.target ).find( ":jqmData(role='foo')" ).foo( options );
});

// That's it. Now you can simply reference the script containing your widget and 
// pagecreate binding in a page running jQuery Mobile site and it will automatically run like any other jQM plugin
