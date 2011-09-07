/*!
 * jQuery UI Widget + RequireJS module boilerplate (for 1.8/9+)
 * Authors: @jrburke, @addyosmani
 * Licensed under the MIT license
 */

 /*
Note from James:

This assumes you are using the RequireJS+jQuery file, and that the following 
files are all in the same directory: 

- require-jquery.js 
- jquery-ui.custom.min.js (custom jQueryUI build with widget factory) 
- templates/ 
    - asset.html 
- ao.myWidget.js 

Then you can construct the widget like so: 
*/


//ao.myWidget.js file: 
define("ao.myWidget", ["jquery", "text!templates/asset.html", "jquery-ui.custom.min"], function ($, assetHtml) { 
    $.widget("ao.myWidget", { 
        options: {}, 
        //Setup widget (eg. element creation, apply theming, bind events etc.)
        _create: function () {
            //this.element.addStuff();
            //this.element.tmpl(assetHtml).appendTo(this.content); 
        },

        //Destroy an instantiated plugin and clean-up modifications the widget has made to the DOM
        destroy: function () {
            //this.element.removeStuff();
            // For UI 1.8, destroy must be invoked from the base widget
            $.Widget.prototype.destroy.call(this);
            // For UI 1.9, define _destroy instead and don't worry about calling the base widget
        },

        methodB: function (event) {
            //_trigger dispatches callbacks the plugin user can subscribe to
            //signature: _trigger(type, event, objectOfKeyValuePairsToPassToCallback)
            this._trigger('methodA', event, {
                key: value
            });
        },

        methodA: function (event) {
            this._trigger('dataChanged', event, {
                key: value
            });
        },

        //Respond to any changes the user makes to the option method
        _setOption: function (key, value) {
            switch (key) {
            case "someValue":
                //this.options.someValue = doSomethingWith( value );
                break;
            default:
                //this.options[ key ] = value;
                break;
            }

            // For UI 1.8, _setOption must be manually invoked from the base widget
            $.Widget.prototype._setOption.apply(this, arguments);
            // For UI 1.9 the _super method can be used instead
            //this._super( "_setOption", key, value );
        }

        //somewhere assetHtml would be used for templating, depending on your choice.
    }); 
}); 

/*
If you are going to use the RequireJS optimizer to combine files  together, you can 
leave off the "ao.myWidget" argument to define: 
define(["jquery", "text!templates/asset.html", "jquery-ui.custom.min"], ..... 
*/


