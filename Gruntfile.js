const sass = require("node-sass");
module.exports = function (grunt) {
  //Configure main project settings
  grunt.initConfig({
    //basic settings and info about our plugins
    // pkg: grunt.file.readJSON("package.json"),
    // concat: {
    // 	css: {
    // 		src: ["css/*.scss"],
    // 		dest: "css/main.scss",
    // 	},
    // },
    //sass setup
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: [{
          src: "css/style.scss",
          dest: "css/style.css",
        }, ],
      },
    },

    clean: ["css/main.scss", "style.css"],

    watch: {
      scripts: {
        files: ["**/*.html", "css/*.scss"],
        // tasks: ["clean", "concat", "sass"],
        tasks: ["clean", "sass"],

      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // grunt.registerTask("default", ["clean", "concat", "sass"]);
  grunt.registerTask("default", ["clean", "sass"]);

};
