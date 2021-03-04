const gulp = require('gulp')
const sass = require('gulp-sass')
const browser = require('browser-sync').create()

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browser.stream())
}

function watch() {
  browser.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.html').on('change', browser.reload)
}

exports.watch = watch;