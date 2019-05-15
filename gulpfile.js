const gulp = require("gulp");
const gulpCopy = require("gulp-copy");

// ***************************************
// recreate entire grunt file
// ***************************************

// gulp.task("default", gulp.parallel("clean", "copy", "build"));

gulp.task("copy:main", function () {
    return gulp
        .src("./client/**/*.html")
        .pipe(gulpCopy("", { prefix: 1 }))
        .dest("dist/")
});

gulp.task("copy:vendor", function () {
    return gulp.src("node_modules/jquery/dist/jquery.js");
});