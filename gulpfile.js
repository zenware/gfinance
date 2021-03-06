'use strict';

const {series, src, dest} = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const del = require('del');
const {exec} = require('child_process');

function staticFiles() {
  return src(['**/*.js'])
    // .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function testCoverage() {
  return exec('npm i nyc');
}

function jsTranspile() {
  return src('lib/**/*.js')
    .pipe(babel())
    .pipe(dest('dist'));
}

function prepublish() {
  return jsTranspile();
}

function clean() {
  return del('dist');
}

const build = series(
  clean,
  staticFiles,
  prepublish,
  testCoverage
);

function defaultTask(cb) {
  build();
  cb();
}

exports.build = build;
exports.default = defaultTask;

