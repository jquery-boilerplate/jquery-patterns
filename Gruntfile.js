module.exports = function(grunt) {

	grunt.initConfig({

		// Lint definitions
		jshint: {
			all: ["Gruntfile.js", "patterns/**/*.js", "scripts/**/*.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-jshint");

	grunt.registerTask("default", ["jshint"]);
	grunt.registerTask("travis", ["jshint"]);

};
