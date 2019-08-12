'use strict';

const path = require('path');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const excludeGitignore = require('gulp-exclude-gitignore');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const del = require('del');
import run from "gulp-run-command";

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');

gulp.task('static',
  () => gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch(['lib/**/*.js', 'test/**'], ['test']);
});

gulp.task('test-coverage', [run('npm i nyc')])
gulp.task('test', ['test-coverage'])

gulp.task('babel', ['clean'],
  () => gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
);

gulp.task('clean', () => del('dist'));

gulp.task('prepublish', ['babel']);
gulp.task('default', ['static', 'test']);
