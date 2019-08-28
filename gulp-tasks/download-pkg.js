const gulp    = require('gulp');
const zip     = require('gulp-zip');

/*
 Make the .zip for downloading
*/
gulp.task('download-pkg', function () {
    return gulp.src('./**', {cwd: '_icons/'})
        .pipe(zip('pokemon-icons.zip'))
        .pipe(gulp.dest('_prepared_assets'));
});
