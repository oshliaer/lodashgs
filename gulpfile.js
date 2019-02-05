var gulp = require('gulp');
var include = require('gulp-include');
var del = require('del');
var rename = require('gulp-rename');

// Copy files of the project
gulp.task('copy', function () {
  return gulp.src('src/appsscript.json')
    .pipe(gulp.dest('build'));
});

// Clear the build folder
gulp.task('del', function () {
  return del('build/*');
});

// The default task of gulp
gulp.task('default', gulp.series('del', 'copy', function () {
  return gulp.src('./src/load.js')
    .pipe(include())
    .on('error', console.log)
    .pipe(rename('lodashgs.js'))
    .pipe(gulp.dest('build'));
}));
