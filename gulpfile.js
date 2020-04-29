const gulp  = require('gulp');

/**
  Our core gulp tasks live in their own files.
 */
require('require-dir')('./gulp-tasks');

/*
  compile the assets to the correct destination
*/
gulp.task('assets', gulp.parallel(
  // PNG generation is way too heavy
  // 'pngs',
  'spritesheet',
  'download-pkg'
));

/*
  Build the site
*/
gulp.task('build', gulp.series(
  'optimize',
  'assets', // this goes first because it writes to /assets
  'generate'
));

gulp.task('default', gulp.series('build'));
