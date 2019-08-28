const project = require('./_project.js');
const gulp    = require('gulp');
const svg2png   = require('gulp-svg2png');

/*
 Render PNGs out of our SVGs
*/

gulp.task('pngs', function() {
  return gulp.src('**/*.svg', {cwd: project.buildSrc + '/_icons'})
    .pipe(svg2png({width: 32, height: 32}, true, 1))
    .pipe(gulp.dest('assets/pngs'));
});
