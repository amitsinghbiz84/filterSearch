module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
        server: {
          options: {
            port: 8080,
            base: './'
          }
        }
      },
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {"app/css/main.css": "src/less/main.less"}
      },
      watch: {
        files: "*.less",
        tasks: ["less"]
      }
    },
    cssmin: {
			target : {
				src : 'app/css/main.css',
				dest : 'app/css/main.min.css'
			}
    },
    uglify : {
      options: {
        mangle: false,
        sourceMap: true,
        sourceMapName: 'path/to/sourcemap.map'
      },
      my_target: {
        files: {
          'app/js/card.min.js': ['src/js/card.js'],
          'app/js/form.min.js': ['src/js/form.js']
        }
      }    
    },
    watch: {
      styles:{
        options:{
          livereload: true,
          spawn: false,
          event: ['added','deleted','changed']
        },
        files:['**/*.less'],
        tasks:['less','cssmin','uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect:server', 'watch']);
};
