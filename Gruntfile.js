module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: 9111
      },

      gruntFileChange: {
        files: 'Gruntfile.js',
        tasks: ['sass', 'pug']
      },

      css: {
        files: [
          'src/scss/*.scss',
        
        ],

        tasks: ['sass'],
      },
      
      pug: {
        files: [
          'src/pug/*.pug',
        ],
        tasks: 'pug',
      },
    },


    sass: {
      src: {
        options: {
          style: 'expanded',
          noCache: true,
        },
        files: {
          'css/style.css': 'src/scss/style.scss',
          'css/game.css': 'src/scss/game.scss'
        }
      }
    },

    pug: {
      src: {
        options: {
          pretty: true,
          data: {
            
          }
        },

        files: {
          'index.html'   : ['src/pug/index.pug'],
          'game.html'   : ['src/pug/game.pug'],
        }
      }
    },


  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-pug');
  // Default task(s)
  grunt.registerTask('default', ['watch']);

}
