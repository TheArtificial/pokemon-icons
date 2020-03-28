const gulp      = require('gulp');
const git       = require('gulp-git');
const del       = require('del');

/*
Commit site to gh-pages branch
*/
const localDir  = '../pokemon-icons-gh-pages';

const email = process.env.GH_EMAIL;
const token = process.env.GH_TOKEN;

var message = 'Publishing';
if (process.env.TRAVIS_BUILD_NUMBER) {
    message = `Publishing Travis build ${process.env.TRAVIS_BUILD_NUMBER}`;
}

// Clone the gh-pages branch (no need to checkout)
gulp.task('pub-clone', function(cb) {
    git.clone(
        `https://${token}@github.com/TheArtificial/pokemon-icons`,
        {args: `-b gh-pages --single-branch ${localDir}`},
        function(err) {
            if (err) { console.log('Error cloning', err); }
            console.log('Finished cloning');
            cb();
        }
    );
});

// Copy our build into the repo
gulp.task('pub-stage', function(cb) {
    // first delete existing contents
    del.sync([
        `${localDir}/**/*`,
        `${localDir}/**/.*`,
        `!${localDir}/.git` // except git metadata
    ], {force: true});
    // then copy and git add
    gulp.src('_site/**/*', {base: '_site'})
        .pipe(gulp.dest(localDir))
        .pipe(git.add({cwd: localDir}));
    console.log('Finished staging');
    cb();
});

// Add everything and commit
gulp.task('pub-commit', function(cb) {
    gulp.src('**/*', {cwd: localDir})
        .pipe(git.commit(message,  {cwd: localDir, author: email}, cb()));
    console.log('Finished commiting');
    cb();
});

// Push to GitHub
gulp.task('pub-push', function(cb) {
    git.push('origin', 'gh-pages', {cwd: localDir}, function (err) {
        if (err) throw err;
        console.log('Pushed to origin:gh-pages');
        cb();
      });
});

// Do all the things
gulp.task('publish', gulp.series(
    'pub-clone',
    'pub-stage',
    'pub-commit',
    'pub-push'
));
