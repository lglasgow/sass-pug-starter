module.exports = function(grunt) {

  // Loads all the grunt tasks matching grunt-*
  require('load-grunt-tasks')(grunt);

  // configure the tasks
  grunt.initConfig({

    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          './public/css/styles.css': './assets/sass/*.scss'
        }
      }
    },

    pug: {
      compile: {
        options: {
          data: {},
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'pug',
          src: [ '*.jade', '*.pug' ],
          dest: 'public',
          ext: '.html'
        }]
      }
    },

    watch: {
      sass: {
        files: [ 'assets/sass/*.scss' ],
        tasks: [ 'sass' ],
        options: { livereload: true }
      },
      pug: {
        files: [ 'pug/*.pug' ],
        tasks: [ 'pug' ]
      }
    },

    connect: {
      server: {
        options: {
          port: 3200,
          base: 'public'
        }
      }
    }
  });

  // define the tasks
  grunt.registerTask( 'build', [ 'sass', 'pug' ]);
  grunt.registerTask( 'dev', [ 'connect', 'watch' ]);
  grunt.registerTask( 'all', [ 'build', 'dev' ]);
};
