const gulp    = require('gulp');
const shell = require('gulp-shell');

/*
 Run our static site generator to build the pages
*/
gulp.task('generate', shell.task('npx eleventy --quiet'));
