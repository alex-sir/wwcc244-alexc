const gulp = require("gulp");
const clean = require("gulp-clean");
const browserify = require("browserify");
const vinylSS = require("vinyl-source-stream");
const livereload = require("gulp-livereload");

// copy tasks
gulp.task("copy:main", () => {
    return gulp.src("client/**/*.html")
        .pipe(gulp.dest("dist/"))
        .pipe(livereload());
});

gulp.task("copy:vendor", () => {
    return gulp.src("node_modules/jquery/dist/jquery.js")
        .pipe(gulp.dest("dist/vendor/"));
});

// clean tasks
gulp.task("clean:all", () => {
    // cleaning after folder is deleted gives an error
    // use 'del' or catch the error
    return gulp.src("dist/", {
            read: false
        })
        .pipe(clean());
});

gulp.task("clean:vendor", () => {
    return gulp.src("dist/vendor/*", {
            read: false
        })
        .pipe(clean());
});

gulp.task("clean:main", () => {
    // different way to do it with 'del'
    // return del(["dist/**/*.js", "dist/**/*.html", "dist/**.*"]);
    return gulp.src(["dist/**/*.js", "dist/**/*.html", "dist/**.*"], {
            read: false
        })
        .pipe(clean());
});

// watch tasks
gulp.task("watch", () => {
    livereload.listen();
    gulp.watch(["client/**/*.js", "client/**/*.html"],
        gulp.series(["clean:main", "browserify", "copy:main", "copy:vendor"]));
});

// browserify tasks
gulp.task("browserify", () => {
    return browserify({
            entries: "client/app.js",
            debug: true
        })
        .bundle()
        .pipe(vinylSS("app.js"))
        .pipe(gulp.dest("dist/"));
});

gulp.task("copy", gulp.parallel(["copy:main", "copy:vendor"]));
gulp.task("build", gulp.parallel(["browserify", "copy"]));
gulp.task("default", gulp.series(["clean:all", "build"]));
gulp.task("dev", gulp.series(["default", "watch"]));