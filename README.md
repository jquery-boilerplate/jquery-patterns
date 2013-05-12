# jQuery Plugin Patterns [![Build Status](https://secure.travis-ci.org/jquery-boilerplate/patterns.png?branch=master)](https://travis-ci.org/jquery-boilerplate/patterns)

So, you've tried out [jQuery Boilerplate](https://github.com/jquery-boilerplate/boilerplate) or written a few of your own plugins before. They work to a degree and are readable, but you're interesting in learning if there a better ways your plugin can be structured.

Perhaps you're just looking for something that works better with the jQuery UI Widget factory, RequireJS or has built-in support for Publish/Subscribe. This repo hopes to provide a number of alternative boilerplates for kick-starting your jQuery plugin development catered towards the intermediate to advanced developer.

This project won't seek to provide implementations for every possible pattern, but will attempt to cover popular patterns developers often use in the wild.

## Patterns

-   **[A lightweight start](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.basic.plugin-boilerplate.js)**: perfect as a generic template for beginners
    and above, uses a basic defaults object, simple constructor for
    assigning the element to work with and extending options with
    defaults and a lightweight wrapper around the constructor to avoid
    issues with multiple instantiations
-   **[Widget factory](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.widget-factory.plugin-boilerplate.js)**: for building complex, stateful plugins based on
    object-oriented principles. The majority of jQueryUI heavily relies
    on the widget factory as a base for components and this template
    covers almost all supported default methods including triggering
    events
-   **[Widget factory + RequireJS](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.widget-factory.requirejs.boilerplate.js)**: for wrapping jQueryUI widgets inside
    RequireJS compatible modules. Also demonstrates very basic widget
    templating
-   **[Widget factory for jQuery mobile](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.widget-factory.mobile-plugin.boilerplate.js)** - demonstrating best practices
    for building mobile widgets, includes many of the same concepts as
    the widget factory boilerplate, but also JQM specific usage
    advice/tips in the comments
-   **[Namespaced pattern](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.namespace.plugin-boilerplate.js)**: to avoid collisions and improve code
    organization when working with components under another namespace
-   **[Best options](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.best.options.plugin-boilerplate.js)**: globally/Per-call overridable options for
    greater option customization, based on Ben Almans [pluginization](http://benalman.com/talks/jquery-pluginization.html) talk
-   **[Custom events (Publish/Subscribe)](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.customevents.plugin-boilerplate.js)**: for better application
    decoupling. Uses the Widget factory, but could be applied to the
    generic template
-   **[Extend pattern](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.extend-skeleton.plugin-boilerplate.js)**: Extended options
-   **[Non Widget-factory widget](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.simplewidget.plugin-boilerplate.js])**: if you wish to stay away from the
    widget factory. Uses Ben Alman’s simplewidget including coverage for
    creation, instantiation and other best practices that may be helpful
-   **[Prototypal inheritance pattern](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/jquery.prototypal-inheritance.plugin-boilerplate.js)**: use a bridge to generate a
    plugin from an object (literal). Useful for code organization,
    readability, functionality heavily based around DOM element
    selection
-   **[Universal Module Definition pattern](https://github.com/jquery-boilerplate/patterns/blob/master/patterns/amd%2Bcommonjs/pluginCore.js)**: create AMD and CommonJS
    compatible plugin modules which are compatible with a number of
    different script loaders. You may also be interested in the [UMD](https://github.com/umdjs) project.


## Further reading

More information about the patterns in this repo can be found in [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#jquerypluginpatterns).

## Contributing

If you have ideas for improvements that can be made to patterns currently in the repo, please feel free to create a new issue for discussion or send a pull request upstream. The same can be said about new patterns you wish to propose being added; for the sake of limiting confusion and complexity, I would ideally like to keep the number of overall patterns in the repo, but there are plans to separate these out into folders based on concerns.

## Team

jQuery Patterns was made with love by these people and a bunch of awesome [contributors](https://github.com/jquery-boilerplate/boilerplate/graphs/contributors).

[![Addy Osmani](http://gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275?s=70)](http://addyosmani.com) | [![Zeno Rocha](http://gravatar.com/avatar/e190023b66e2b8aa73a842b106920c93?s=70)](http://zenorocha.com)
--- | --- | --- | --- | --- | --- | ---
[Addy Osmani](http://addyosmani.com) | [Zeno Rocha](http://zenorocha.com)

## Credits

Thanks to [@peol](http://github.com/peol), [@ajpiano](http://github.com/ajpiano), [@mathias](http://github.com/mathias), [@cowboy](http://github.com/cowboy), [@dougneiner](http://github.com/dougneiner) and others for their previous work (or tips) in this area. Some of this work is used as a basis for further improvements.

