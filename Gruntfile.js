module.exports = myTasks;

function myTasks(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        "client/**/*.html",
                        "client/**/*.js"
                    ],
                    dest: "dist/"
                }]
            },
            vendor: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ["node_modules/jquery/dist/jquery.js"],
                    dest: "dist/vendor/"
                }]
            }
        },
        clean: {
            all: ["dist/*"],
            vendor: ["dist/vendor/*"],
            main: ["dist/**/*.js", "dist/**/*.html"]
        },
        watch: {
            main: {
                files: ["client/**/*.js", "client/**/*.html"],
                tasks: ["clean:main", "copy:main", "copy:vendor"],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.registerTask("default", ["clean:all", "build"]);
    grunt.registerTask("dev", ["default", "watch"]);
    grunt.registerTask("build", ["copy"]);

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
}