'use strict'

import gulp from 'gulp'

import browserSync from 'browser-sync'
import csscomb from 'gulp-csscomb'
import cssnano from 'cssnano'
import cssnext from 'postcss-cssnext'
import cssimport from 'postcss-import'
import cssnested from 'postcss-nested'
import csssimplevars from 'postcss-simple-vars'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import prune from 'gulp-prune'
import pxtorem from 'postcss-pxtorem'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'

// Sass to CSS
gulp.task('css', () => {
  const cssnanoConfig = {
    autoprefixer: false
  }

  const cssnextConfig = {
    browsers: [
      'Firefox >= 48',
      'Chrome >= 54',
      'ie >= 10',
      'last 4 versions',
      'Safari >= 8'
    ]
  }

  const pxtoremConfig = {
    rootValue: 16,
    unitPrecision: 5,
    propList: ['*'],
    selectorBlackList: ['html', 'body'],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0
  }

  const processors = [
    // cssnano(cssnanoConfig),
    cssimport(),
    cssnested(),
    cssnext(cssnextConfig),
    csssimplevars(),
    pxtorem(pxtoremConfig)
  ]

  return gulp.src('./example/styles/styles.css')
    .pipe(plumber())
    .pipe(prune({ dest: './example/styles', ext: ['.compiled.css', '.css.map'] }))
    // .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(csscomb())
    .pipe(rename({
      suffix: '.compiled'
    }))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./example/styles/'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
})
