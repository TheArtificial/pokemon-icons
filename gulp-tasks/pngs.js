const gulp    = require('gulp');
const svg2png   = require('gulp-svg2png');

/*
 Render PNGs out of our SVGs
*/

gulp.task('pngs', function() {
  return gulp.src('**/*.svg', {cwd: '_icons/SVG'})
    .pipe(svg2png({width: 32, height: 32}, true, 1))
      .pipe(gulp.dest('_prepared_assets/pngs'));
});
