'use strict';

const { watch, series, parallel, src, dest } = require('gulp');
const eslint = require('gulp-eslint');
const excludeGitignore = require('gulp-exclude-gitignore');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const del = require('del');
const { exec } = require('child_process');

function staticFiles() {
  return src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}

//TODO: Update this section to support watchers
//gulp.task('watch', () => {
//  gulp.watch(['lib/**/*.js', 'test/**'], ['test']);
//});
//

function testCoverage() {
  return exec('npm i nyc');
}

function jsTranspile() {
  // With Babel
  return src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
}

function prepublish() {
  return jsTranspile()
}

function clean() {
  return del('dist');
}

//gulp.task('prepublish', ['babel']);

function defaultTask(cb) {
  cb();
}

exports.default = defaultTask
function defaultTask(cb) {
  // place code for your default task here
  staticFiles();
  test();
  cb();
}

exports.build = series(
  clean,
  jsTranspile,
  staticFiles,
  testCoverage
  //jsBundle,
  //jsMinify,
  //publish
);

exports.default = defaultTask

