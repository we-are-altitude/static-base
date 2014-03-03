// Generated on 2013-07-13 using generator-webapp 0.2.6
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
              files: ['<%= yeoman.app %>/assets/scripts/{,*/}*.coffee'],
              tasks: ['coffee:server']
            },
            concat: {
              files: ['<%= yeoman.app %>/assets/scripts/vendor/{,*/}*.js'],
              tasks: ['concat:server']
            },
            sass: {
              files: ['<%= yeoman.app %>/assets/styles/{,*/}*.scss'],
              tasks: ['sass:server']
            },   
            jekyll: {
              files: ['<%= yeoman.app %>/{,*/}*.html', '<%= yeoman.app %>/{,*/}*.md'],
              tasks: ['jekyll:server']
            },        
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '.tmp/{,*/}*.html',
                    '.tmp/assets/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/assets/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            build: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        coffee: {
            server: {
                files: {
                   '.tmp/assets/scripts/static-app.js': ['app/assets/scripts/*.coffee', 'app/assets/scripts/*/*.coffee']
                }              
            },
            build: {
                files: {
                   '.tmp/assets/scripts/static-app.js': ['app/assets/scripts/*.coffee', 'app/assets/scripts/*/*.coffee']
                }
            },          
        },
        concat: {
          server: {
            files: {
              '.tmp/assets/scripts/static-app.js': ['app/assets/scripts/vendor/{,*/}*.js', '.tmp/assets/scripts/static-app.js']
            }    
          },
          build: {
            files: {
              '.tmp/assets/scripts/static-app.js': ['app/assets/scripts/vendor/{,*/}*.js', '.tmp/assets/scripts/static-app.js']
            }    
          }          
        },
        uglify: {
          build: {
            files: {
              'dist/assets/scripts/static-app.js': '.tmp/assets/scripts/static-app.js'
            }            
          },          
        },
        sass: {
          server: {
            files: [{
              expand: true,
              cwd: 'app/assets/styles',
              src:['**/*.scss', '**/*.css'],
              dest: '.tmp/assets/styles',
              ext: '.css'
            }]
          },
          build: {
            files: [{
              expand: true,
              cwd: 'app/assets/styles',
              src:['**/*.scss', '**/*.css'],
              dest: '.tmp/assets/styles',
              ext: '.css'
            }]
          },          
        }, 
        cssmin: {
          build: {
            files: {
              'dist/assets/styles/static-app.css' : '.tmp/assets/styles/static-app.css'
            }
          }
        },              
        copy: {
            server: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '.tmp',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'assets/images/{,*/}*',
                        'assets/fonts/{,*/}*',
                        'assets/scripts/{,*/}*.js'
                    ]
                }]
            },
            build: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'assets/images/{,*/}*',
                        'assets/fonts/{,*/}*',
                        'assets/scripts/*.js',
                    ]
                }]
            }            
        },
        concurrent: {
            server: [
                'sass:server',
                'coffee:server',
            ],
            build: [
                'coffee:build',
                'sass:build'
            ]
        },
        jekyll: {                             
          server: {
            options: {
              dest: '.tmp'
            },
            cmd: 'jekyll build'
          },
          build: {
            options: {
              dest: 'dist'
            },
            cmd: 'jekyll build'
          }
            
        }        
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'jekyll:server',
            'concurrent:server',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:build',
        'coffee:build',
        'concat:build',
        'uglify:build',
        'sass:build',
        'cssmin:build',
        'copy:build'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
