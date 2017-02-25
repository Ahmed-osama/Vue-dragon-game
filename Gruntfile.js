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
          'src/*.scss',
        
        ],

        tasks: ['sass'],
      },
      
      pug: {
        files: [
          'src/*.pug',
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
          'style.css': 'src/style.scss'
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
          'index.html'   : ['src/index.pug'],
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
