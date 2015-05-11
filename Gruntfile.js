module.exports = function(grunt) {

  grunt.initConfig({

    svgmin: {
      options: {
        plugins: [
          {},
          {}
        ]
      },

      dist: {
        files: {}
      }
    } // svgmin

  });

  grunt.loadNpmTasks('grunt-svgmin');

  grunt.registerTask('default', ['svgmin']);
};
