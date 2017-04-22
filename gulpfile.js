var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var git = require('gulp-git');
var exec = require('child_process').exec;

/*
 * The default apporoach is the build of the project
 * It seems this is wrong
 **/

gulp.task('default', ['build'], function (cb) {
  exec('gapps push | while read OUTPUT; do notify-send "$OUTPUT"; done', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

//
gulp.task('clean', function () {
  del([
    'build/*'
  ]);
});

gulp.task('build', ['clean'], function () {
  return gulp.src(['lodash/lodash.js', 'src/load.gs'])
    .pipe(concat('logashgs.gs'))
    .pipe(gulp.dest('build'));
});

/*
gulp.task('checkout', function () {
    git.checkout('master', function (err) {
      if (err) throw err;
    },  {cwd: "./lodash/"});
});

*/
