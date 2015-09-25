module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            default: {
                options: {
                    preserveComments: 'some',
                    sourceMap: 'angular-taucharts.min.map',
                    sourceMappingURL: 'angular-taucharts.min.map'
                },
                files: {
                    'angular-taucharts.min.js': 'angular-taucharts.js'
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', '*.js', 'test/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify']);

};