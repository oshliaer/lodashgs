var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var exec = require('child_process').exec;

gulp.task('default', ['build'], function (cb) {
  exec('gapps push | while read OUTPUT; do notify-send "$OUTPUT"; done', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean', function () {
  del([
    'build/*'
  ]);
});

// gulp.task('src', ['clean'], function () {
//   gulp.src(['*.html', '*.gs', '*.js', '!gulpfile.js'])
//     .pipe(gulp.dest('src'));
// });

// gulp.task('init', function () {
//   gulp.src(['src/*.html', 'src/*.gs', 'src/*.js'])
//     .pipe(gulp.dest('.'));
// });

gulp.task('build', ['clean'], function () {
  return gulp.src(['lodash/lodash.js', 'src/load.gs'])
    .pipe(concat('logashgs.gs'))
    .pipe(gulp.dest('build'));
});
