module.exports = function(grunt) {

    // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Grunfile.js', 'src/**/*.js']
    },

    //configure uglify to minifi js files -----------------------------------------------
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'dist/js/app.js': ['src/js/app.js'],
          'dist/js/bootstrap.min.js' : 'node_modules/bootstrap/dist/js/bootstrap.min.js'
        }
      }
    },

    // compile less stylesheets to css -----------------------------------------
    less: {
      build: {
        files: {
          'dist/css/app.css': 'src/less/app.less',
          'dist/css/module.css': 'src/less/module.less'
        }
      }
    },

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/app.min.css': 'dist/css/app.css',
          'dist/css/module.min.css': 'dist/css/module.css'
        }
      }
    },



    // // configure watch to auto update ----------------
    watch: {
      
      // for stylesheets, watch css and less files 
      // only run less and cssmin stylesheets: { 
      files: ['dist//*.css', 'src/less/**/*.less'], 
      tasks: ['less', 'cssmin'] ,//},

      // for scripts, run jshint and uglify 
      scripts: { 
        files: 'src/**/*.js', tasks: ['jshint', 'uglify'] 
      } 
    }



  });

  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

    // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['less', 'jshint', 'uglify', 'watch']);


};