/*
*******************************************************
jQueryUI 1.8/9 Widget boilerplate from @addyosmani 
with input from @peolanha
*******************************************************
*/


;(function ($, window, document, undefined) {

    $.widget("demo.myComponent", {

        //Options to be used as defaults
        options: {
            someValue: null
        },

        //Setup widget (eg. element creation, apply theming, bind events etc.)
        _create: function () {
            //this.element.addStuff();
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
    });

})(jQuery, window, document);