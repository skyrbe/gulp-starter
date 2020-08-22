const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function(){

});

// Compile scss into css
function style() {
  // Locate the files
  return gulp.src('./scss/**/*.scss')
    // Converts Sass to CSS with gulp-sass
    .pipe(sass())
    // move it to the destination folder
    .pipe(gulp.dest('./css'))
    // stream changes to all the browsers
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 5000
  })
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;