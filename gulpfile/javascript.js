'use strict'

import gulp from 'gulp'

import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import prune from 'gulp-prune'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'

// Minify JavaScript files
gulp.task('js', () => {
  const uglifyDropConsole = (process.env.NODE_ENV.trim() !== 'development')

  return gulp.src('./example/scripts/main.js')
    .pipe(plumber())
    .pipe(prune({ dest: './example/scripts', ext: ['.compiled.js', '.js.map'] }))
    .pipe(sourcemaps.init())
    .pipe(babel())
    // .pipe(uglify({
    //   compress: {
    //     drop_console: uglifyDropConsole
    //   }
    // }).on('error', (e) => {
    //   console.log(e + '\r\n There\'s something wrong with the JavaScript file(s).')
    // }))
    .pipe(rename({
      suffix: '.compiled'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./example/scripts/'))
    .pipe(browserSync.stream({
      match: '**/*.js'
    }))
})
