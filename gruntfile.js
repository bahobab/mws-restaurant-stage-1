// credit https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433

module.exports = function(grunt) {
    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'gm',
            sizes: [
              { name: 'sm', suffix: '_1x', quality: 60, width: 600 },
              { name: 'sm', suffix: '_2x', quality: 60, width: 1200 },
              { name: 'md', suffix: '_1x', quality: 60, width: 900 },
              { name: 'md', suffix: '_2x', quality: 60, width: 1800 },
              { name: 'lg', suffix: '_1x', quality: 60, width: 1440 },
              { name: 'lg', suffix: '_2x', quality: 60, width: 2880 }
            ]
          },
          files: [
            {
              expand: true,
              src: ['**/*.{jpg,png}'],
              cwd: 'img/',
              dest: 'img/dest/'
            }
          ]
        }
      }
    });
  grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);
  };