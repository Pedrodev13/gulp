const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('.source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}


function comprimindoJS(){
    return gulp.src('./source/sripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilandoSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.sass = compilandoSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilandoSass));
}

exports.javascript = comprimindoJS;
exports.images = comprimeImagens;