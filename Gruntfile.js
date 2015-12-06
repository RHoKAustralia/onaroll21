module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
  grunt.registerTask('default', [
    'concat:app', 
    'concat:vendor',
    'copy:templates', 
    'copy:index',
    'copy:images',
    'copy:fonts',
    'uglify',
    'less'
  ]);
  grunt.registerTask('serve', [
    'concat:app', 
    'concat:vendor',
    'copy:templates', 
    'copy:index',
    'copy:images',
    'copy:fonts',
    'uglify',
    'less',
    'connect:server', 
    'watch'
  ]);
 
  grunt.initConfig({
    concat: {
      app: {
        options: {
          separator: ';'
        },
        src: [
          'scripts/app.js',
          'scirpts/angular-upload.js',
          'scripts/**/*.js'
        ],
        dest: 'build/scripts/app-min.js'
      },
      vendor: {
        options: {
          separator: ';'
        },
        src: [
            'bower_components/jquery-old/jquery-1.11.3.min.js',
            'bower_components/formbuilder/vendor/js/vendor.js',
            'bower_components/formbuilder/dist/formbuilder.js',
            'bower_components/angular/angular.min.js',
            'bower_components/json2/json-2.js',
            'bower_components/jquery.modal/js/jquery.modal.min.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/ng-file-upload/ng-file-upload-shim.min.js',
            'bower_components/ng-file-upload/ng-file-upload.min.js',
            'bower_components/ng-mobile-menu/dist/ng-mobile-menu.min.js',
            'bower_components/underscore/underscore-min.js',
            'bower_components/moment/moment.js',
            'bower_components/ngDialog/js/ngDialog.min.js',
            'bower_components/tweenlite/TweenLite.min.js',
            'bower_components/freewall/freewall.js',
            'bower_components/processing/processing.min.js',
            'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js',
            'bower_components/materialize/dist/js/materialize.js',
            'bower_components/angular-google-analytics/dist/angular-google-analytics.js',
            'js/non_bower_components/**.js',
        ],
        dest: 'build/js/libraries-min.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'build/scripts/app-min.js': ['build/scripts/app-min.js']
        }
      }
    },
    copy: {
      templates: {
          expand: true, 
          src: 'templates/**', 
          dest: 'build/'
      },
      index: {
        expand: false,
        src: 'index.html',
        dest: 'build/index.html'
      },
      images: {
        expand: true, 
        src: 'images/**', 
        dest: 'build/'
      },
      fonts: {
        expand: true,
        src: 'fonts/**',
        dest: 'build/'
      }
    },
    less: {
      style: {
        files: {
          "build/css/master.css": "css/master.less"
        }
      }
    },
  connect: {
    server: {
      options: {
        livereload: true,
        port: 9001,
        base: 'build'
      }
    }
  },
    watch: {
      js: {
        files: ['scripts/*.js'],
        tasks: ['concat:app', 'uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['css/*.less'],
        tasks: ['less:style'],
        options: {
          livereload: true,
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
 
};
