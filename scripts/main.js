requirejs.config({
	paths: {
		"jquery": "http://code.jquery.com/jquery-1.8.3.min",
		"jqueryui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min",
		"boilerplate": "../patterns/jquery.widget-factory.requirejs.boilerplate"
	}
});

require(["jquery", "jqueryui", "boilerplate"], function ($, ui, boilerplate) {
	$(function () {
		var instance = ($("body").myWidget());
		console.log(instance);

		instance.myWidget("methodB");
	});
});
