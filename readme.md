##Recommended jQuery Plugin Patterns

###Introduction

So, you've tried your hand at writing jQuery plugins and you're comfortable putting together something that probably works. Awesome!. Thing is, you think there might be better ways you could be writing them - you've seen them done a number of different ways in the wild, but aren't really sure what the differences between these patterns are or how to get started with them. This project hopes to help solve this.

I began this patterns repo after seeing a number of efforts made in the past to create a one-size-fits-all jQuery plugin boilerplate. Whilst the idea of such a boilerplate is a great idea in theory, the reality is that in plugin development we <b>rarely</b> approach writing plugins in one very-fixed way using a single pattern all the time. 

Some patterns may work better for structuring solutions to a particular problem or component than others. Some developers may wish to use the widget factory. Some may not. Some might like to take advantage of nested namespacing patterns.  Some might want to use custom events or pub/sub to communicate from plugins to the rest of their app. Some may prefer using extend patterns and so on.

This project won't seek to provide solutions to every possible pattern, but will attempt to cover popular patterns developers often use in the wild.

###Patterns 

<ul>
<li><strong>A lightweight start</strong>: perfect as a generic template for beginners and above, uses a basic defaults object, simple constructor for assigning the element to work with and extending options with defaults and a lightweight wrapper around the constructor to avoid issues with multiple instantiations - jquery.basic.plugin-boilerplate.js</li>
<li><strong>Widget factory</strong>: for building complex, stateful plugins based on object-oriented principles. The majority of jQueryUI heavily relies on the widget factory as a base for components and this template covers almost all supported default methods including triggering events - jquery.widget-factory.plugin-boilerplate.js</li>
<li><strong>Widget factory + RequireJS</strong>: for wrapping jQueryUI widgets inside RequireJS compatible modules. Also demonstrates very basic widget templating - jquery.widget-factory.requirejs.boilerplate.js</li>
<li><strong>Namespaced pattern</strong>: to avoid collisions and improve code organization when working with components under another namespace - jquery.namespace.plugin-boilerplate.js</li>
<li><strong>Better options</strong>: globally/Per-call overridable options for greater option customization, based on Ben Almans pluginization talk - jquery.best-options.plugin-boilerplate.js</li>
<li><strong>Custom events (Pseudo Pub/Sub)</strong>: for better application decoupling. Uses the Widget factory, but could be applied to the generic template - jquery.customevents.plugin-boilerplate.js</li>
<li><strong>Extend pattern</strong> - jquery.extend-skeleton.plugin-boilerplate.js</li>
<li><strong>Non Widget-factory widget</strong>: if you wish to stay away from the widget factory. Uses Ben Alman's simplewidget including coverage for creation, instantiation and other best practices that may be helpful  - jquery.simplewidget.plugin-boilerplate.js</li>
<li><strong>Prototypal inheritance pattern</strong>: use a bridge to generate a plugin from an object (literal). Useful for code organization, readability, functionality heavily based around DOM element selection - jquery.prototypal-inheritance.plugin-boilerplate.js</li>
</ul>


###Contributing

If you have ideas for improvements that can be made to patterns currently in the repo, please feel free to create a new issue for discussion or send a pull request upstream. The same can be said about new patterns you wish to propose being added; for the sake of limiting confusion and complexity, I would ideally like to keep the number of overall patterns in the repo, but there are plans to separate these out into folders based on concerns. 

###Coming soon

####AMD/UMD-compatible plugin and widget boilerplates

Whilst the current repo provides examples for patterns you can use to create jQuery plugins, this is really only the beginning. @thomasdavis, I and a few other developers are currently discussing ways that we can define AMD/UMD-compatible widget and plugin modules which would offer a cleaner way to easily extend plugins/widgets than what we have available right now. 

We want to define a boilerplate for solving this which works with AMD-compatible loaders such as RequireJS and retains the principles of modular development at heart. To follow the discussion or get involved, checkout https://github.com/addyosmani/jquery-plugin-patterns/issues/1.

####Improved examples demonstrating usage of patterns. Further documentation on why particular patterns should be used.

###Credits
Thanks to @peolanha, @ajpiano, @mathias, @cowboy, @dougneiner and others for their previous work (or tips) in this area. Some of this work is used as a basis for further improvements.

####Further reading

<ul>
<li><a href="http://msdn.microsoft.com/en-us/scriptjunkie/ff696759">Style in jQuery plugins and why it matters</a></li>
<li><a href="http://alexsexton.com/?p=51">Using inheritance patterns to organize large jQuery applications</a></li>
<li><a href="http://benalman.com/talks/jquery-pluginization.html">jQuery Pluginization by Ben Alman</a></li>
<li><a href="http://fuelyourcoding.com/jquery-plugin-design-patterns-part-i/">jQuery Plugin design patterns</a></li>
<li><a href="http://ajpiano.com/widgetfactory/#slide1">The jQuery UI Widet Factory - Wat? By Adam Sontag</a></li>
<li><a href="http://docs.jquery.com/UI_Developer_Guide">jQuery UI developer's guide (incl. coverage of the widget factory)</a></li>
<li><a href="http://www.learningjquery.com/2007/10/a-plugin-development-pattern">A Plugin development pattern</a></li>
<li><a href="http://tagneto.blogspot.com/2011/01/jquery-ui-as-amd-modules-for-use-in.html">jQuery UI as AMD modules</a></li>
</ul>

