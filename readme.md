##Recommended jQuery Plugin Patterns

###Introduction

So, you've tried out [jQuery Boilerplate](https://github.com/jquery-boilerplate/boilerplate) or written a few of your own plugins before. They work to a degree and are readable, but you're interesting in learning if there a better ways your plugin can be structured.

Perhaps you're just looking for something that works better with the jQuery UI Widget factory, RequireJS or has built-in support for Publish/Subscribe. This repo hopes to provide a number of alternative boilerplates for kick-starting your jQuery plugin development catered towards the intermediate to advanced developer. 

This project won't seek to provide implementations for every possible pattern, but will attempt to cover popular patterns developers often use in the wild.

###Patterns 

-   **[A lightweight start](patterns/jquery.basic.plugin-boilerplate.js)**: perfect as a generic template for beginners
    and above, uses a basic defaults object, simple constructor for
    assigning the element to work with and extending options with
    defaults and a lightweight wrapper around the constructor to avoid
    issues with multiple instantiations
-   **[Widget factory](patterns/jquery.widget-factory.plugin-boilerplate.js)**: for building complex, stateful plugins based on
    object-oriented principles. The majority of jQueryUI heavily relies
    on the widget factory as a base for components and this template
    covers almost all supported default methods including triggering
    events
-   **[Widget factory + RequireJS](patterns/jquery.widget-factory.requirejs.boilerplate.js)**: for wrapping jQueryUI widgets inside
    RequireJS compatible modules. Also demonstrates very basic widget
    templating
-   **[Widget factory for jQuery mobile](patterns/jquery.widget-factory.mobile-plugin.boilerplate.js)** - demonstrating best practices
    for building mobile widgets, includes many of the same concepts as
    the widget factory boilerplate, but also JQM specific usage
    advice/tips in the comments
-   **[Namespaced pattern](patterns/jquery.namespace.plugin-boilerplate.js)**: to avoid collisions and improve code
    organization when working with components under another namespace
-   **[Better options](patterns/jquery.best-options.plugin-boilerplate.js)**: globally/Per-call overridable options for
    greater option customization, based on Ben Almans pluginization talk
-   **[Custom events (Pseudo Pub/Sub)](patterns/jquery.customevents.plugin-boilerplate.js)**: for better application
    decoupling. Uses the Widget factory, but could be applied to the
    generic template
-   **[Extend pattern](patterns/jquery.extend-skeleton.plugin-boilerplate.js)**: Extended options
-   **[Non Widget-factory widget](patterns/jquery.simplewidget.plugin-boilerplate.js])**: if you wish to stay away from the
    widget factory. Uses Ben Alman’s simplewidget including coverage for
    creation, instantiation and other best practices that may be helpful
-   **[Prototypal inheritance pattern](patterns/jquery.prototypal-inheritance.plugin-boilerplate.js)**: use a bridge to generate a
    plugin from an object (literal). Useful for code organization,
    readability, functionality heavily based around DOM element
    selection
-   **[Universal Module Definition pattern](patterns/amd%2Bcommonjs/pluginCore.js)**: create AMD and CommonJS
    compatible plugin modules which are compatible with a number of
    different script loaders. You may also be interested in the [UMD](https://github.com/umdjs) project.


###Further reading:

More information about the patterns in this repo can be found in [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#jquerypluginpatterns).

###Contributing

If you have ideas for improvements that can be made to patterns currently in the repo, please feel free to create a new issue for discussion or send a pull request upstream. The same can be said about new patterns you wish to propose being added; for the sake of limiting confusion and complexity, I would ideally like to keep the number of overall patterns in the repo, but there are plans to separate these out into folders based on concerns. 

###Credits
Thanks to [@peol](http://github.com/peol), [@ajpiano](http://github.com/ajpiano), [@mathias](http://github.com/mathias), [@cowboy](http://github.com/cowboy), [@dougneiner](http://github.com/dougneiner) and others for their previous work (or tips) in this area. Some of this work is used as a basis for further improvements.

