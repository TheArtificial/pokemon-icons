const gulp   = require('gulp');
const svgo = require('gulp-svgo');

/*
 Optimize our SVGs using svgo
*/

gulp.task('optimize', function() {
  return gulp.src('**/*.svg', {cwd: '_icons/SVG'})
    .pipe(svgo({
      multipass: true
    }))
    .pipe(gulp.dest('_icons/SVG'));
});
