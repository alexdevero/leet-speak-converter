'use strict'

import gulp from 'gulp'
import requireDir from 'require-dir'
import sequence from 'gulp-sequence'

requireDir('./gulpfile/')

const environment = process.env.NODE_ENV
if (environment !== undefined) {
  console.log(`Environment: ${environment}`)
}

// Builds the website
gulp.task('build', sequence('css', 'js'))

// Setup development environment
gulp.task('dev', sequence('build', 'server'))

// Start server and watch HTML, CSS and JavaScript files for changes
gulp.task('server', ['browser-sync'], () => {
  const browserSync = require('browser-sync')
  const reload = browserSync.reload

  // gulp.watch('./src/*.html', ['html'], reload)
  gulp.watch('./src/styles/**/*.css', ['css'], reload)
  gulp.watch('./src/scripts/**/*.js', ['js'], reload)
})
