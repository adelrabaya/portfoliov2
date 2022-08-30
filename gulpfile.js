const gulp = require('gulp');
const clean = require('gulp-clean-css');
const less = require('gulp-less');
const concat = require('gulp-concat');
const path = require('path');


function concatTask(){
    return gulp.src('./*.less')
    // .pipe(less())
    .pipe(concat('lessfile.css'))
    .pipe(clean())
    .pipe(gulp.dest('./styles'));
}

exports.concat = concatTask;
