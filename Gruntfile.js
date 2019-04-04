"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            html: {
                files: ['WebContent/modules/**/*.html', 'WebContent/modules/**/*.js'],
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 3333,
                    base: ['WebContent'],
                    livereload: false,
                    open: {
                        target: 'http://localhost:3333/'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('run', '', function() {
        grunt.task.run(['connect:server', 'watch']);
    });
}