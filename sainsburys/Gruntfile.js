/*
 * grunt-express-server
 * https://github.com/ericclemmons/grunt-express-server
 *
 * Copyright (c) 2013 Eric Clemmons
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp'],
        },

        watch: {
            express: {
                options: {
                    livereload: true,
                    spawn: false
                },
                files: [
                    'Gruntfile.js',
                    'app.js',
                    'views/**/*.*',
                    'routes/*.js'
                ],
                tasks: ['express:defaults']
            }
        },


        express: {
            options: {
                script: './bin/www',
                port: 3000
            },
            defaults: {},
            stoppable: {}
        },

        galen: {
            local: {

                // Check all test.js files in the test directory
                src: ['./tests/specs/*.test.js'],
                options: {

                    // Run test on the localhost:3000
                    //url: 'http://localhost:3000',
                    htmlReport: true,
                    htmlReportDest: 'report',
                    project: {
                        name: 'Automate',
                    }
                    //devices: {
                    //
                    //    // Run tests in firefox browser, scaled to basic desktop resolution
                    //    desktop: {
                    //        deviceName: 'desktop',
                    //        browser: 'firefox',
                    //        size: '1280x800'
                    //    },
                    //
                    //    // Also run them in firefox, but scaled to iPad screen size
                    //    tablet: {
                    //        deviceName: 'tablet',
                    //        browser: 'firefox',
                    //        size: '768x576'
                    //    }
                    //}
                }
            }
        },

        exec: {
            dumy: 'galen test tests/specs/dumy.test --htmlreport ./reports/dummy',
            testsuit: 'galen test tests/specs/testsuit.test --htmlreport ./reports/users',
            google: 'galen test tests/specs/google.test --htmlreport ./reports/google',
            dump: 'galen dump "tests/specs/detail.gspec" --url "http://localhost:3000/detail" --size "320x600" --export "dumps/detail"',
            dumpsuit: 'galen test tests/specs/dump.test --htmlreport ./reports/dumpsuit',
            maintest: 'galen test tests/specs/main.test --htmlreport ./reports/main',
            basicjs: 'galen test tests/specs/basic.test.js --htmlreport ./reports/basic',
            structurejs: 'galen test tests/specs/structure.test.js --htmlreport ./reports/structure',
            samplepage: 'galen test tests/specs/samplepage.test.js --htmlreport ./reports/samplepage',
            login: 'galen test tests/specs/login.test.js --htmlreport ./reports/login',
        }



    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.loadNpmTasks('grunt-galen');

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-exec');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['express', 'watch']);
    grunt.registerTask('automate', ['galen']);
};