/// <binding BeforeBuild='zoneJsSPFix, webpack:build-dev' />
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var replace = require('gulp-replace');

gulp.task('default', function () {
    // place code for your default task here
});

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task('build-dev', ['webpack:build-dev'], function () {
    gulp.watch(['app/**/*', 'app/*'], ['webpack:build-dev']);
});

// create a single instance of the compiler to allow caching
var devCompiler = webpack(webpackConfig);

gulp.task('webpack:build-dev', function (callback) {
    // run webpack
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build-dev', err);
        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }));
        callback();
    });
});

// Due to this bug with Zone.js : https://github.com/angular/zone.js/issues/434, we have to make a modification to Zone.js to avoid an issue.
// We could manually edit the file whenever we get it via npm, but easier this way.
gulp.task('zoneJsSPFix', function () {

    var patternLineToComment = /throw new Error\('Zone already loaded\.'\);/gim;
    var replacement = '//This originally threw an error here but was commented out via Gulp task zoneJsSPFix to address an issue with SP.';

    gulp.src(['node_modules/zone.js/dist/zone.js'])
      .pipe(replace(patternLineToComment, replacement))
      .pipe(gulp.dest('node_modules/zone.js/dist', { overwrite: true }));
});

