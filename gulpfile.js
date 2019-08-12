'use strict';

const path = require('path');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const excludeGitignore = require('gulp-exclude-gitignore');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const del = require('del');
const run = require('gulp-run-command').default

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');

gulp.task('static', gulp.series(
  () => gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
));

gulp.task('watch', () => {
  gulp.watch(['lib/**/*.js', 'test/**'], ['test']);
});

gulp.task('test-coverage', gulp.series(run('npm i nyc')));
gulp.task('test', gulp.series('test-coverage'))

gulp.task('babel', gulp.series('clean',
  () => gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
));

gulp.task('clean', gulp.series(() => del('dist')));

gulp.task('prepublish', gulp.series('babel'));
gulp.task('default', gulp.parallel('static', 'test'));
