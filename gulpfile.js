'use strict';

const gulp = require('gulp')
const less = require('gulp-less')(require('less'));

function defaultTask() {
    return gulp.src('./src/styles/*.less')
        .pipe(less.on('error', console.error.bind(console)))
        .pipe(gulp.dest('./dist'))
}
exports.default = defaultTask
