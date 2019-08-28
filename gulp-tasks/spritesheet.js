const gulp    = require('gulp');
const svgSprite	= require('gulp-svg-sprite');

/*
 Build a sprite sheet out of our SVGs
*/

config					= {
    mode				: {
        symbol			: {
            dest        : '', // don't nest
            sprite      : 'icon-symbols.svg'
        }
    },
    shape               : {
        dimension       : {
            precision   : 4 // not sure this is being honored
        }
    }
};

gulp.task('spritesheet', function() {
  return gulp.src('**/*.svg', {cwd: '_icons/SVG'})
      .pipe(svgSprite(config))
      .on('error', function(error) {
        console.log('oh no!');
      })
      .pipe(gulp.dest('_prepared_assets'));
});
