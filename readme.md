##Recommended jQuery Plugin Patterns

This project is a work-in-progress with the end-goal of providing developers with a set of tried and tested patterns for jQuery plugin development.

###Introduction

I began this project after seeing a number of efforts made in the past to create a one-size-fits-all jQuery plugin boilerplate. Whilst the idea of such a boilerplate is a great idea in theory, the reality is that in plugin development we rarely approach writing plugins in one very-fixed way using a single pattern all the time.

Some developers may wish to use the widget factory. Some may not. Some might like to take advantage of namespacing patterns.  Some might want to use custom events or pub/sub to communicate from plugins to the rest of their app. Some may prefer using extend patterns and so on.

This project won't seek to provide solutions to every possible pattern, but will attempt to cover popular patterns developers often use in the wild.

###Patterns 
<ul>
<li>A lightweight start - jquery.basic.plugin-boilerplate.js</li>
<li>Widget factory - jquery.widget-factory.plugin-boilerplate.js</li>
<li>Namespaced - jquery.namespace.plugin-boilerplate.js</li>
<li>Glocally/Per-call overridable options - jquery.best-options.plugin-boilerplate.js</li>
<li>Custom events (Pseudo Pub/Sub) - jquery.customevents.plugin-boilerplate.js</li>
<li>Extend - jquery.extend-skeleton.plugin-boilerplate.js</li>
<li>Non Widget-factory widget - jquery.simplewidget.plugin-boilerplate.js</li>
</ul>


###Contributing

If you have ideas for improvements that can be made to patterns currently in the repo, please feel free to create a new issue for discussion or send a pull request upstream. The same can be said about new patterns you wish to propose being added; for the sake of limiting confusion and complexity, I would ideally like to keep the number of overall patterns in the repo below 10 for now.

###Coming soon

Whilst a number of patterns are well commented, I would like to improve comments on all of them to ease understanding and also include more inline examples of sample usage for beginners. 

###Credits
Thanks to @peolanha, @ajpiano, @mathias, @cowboy, @dougneiner and others for their previous work (or tips) in this area. Some of this work is used as a basis for further improvements.