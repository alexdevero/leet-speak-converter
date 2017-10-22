'use strict'

import gulp from 'gulp'

gulp.task('browser-sync', () => {
  const browserSync = require('browser-sync')

  browserSync.init({
    // All options: https://browsersync.io/docs/options
    injectChanges: true, // Inject CSS without reloading the page
    server: './example/', // Directory for starting the server
    port: '1337', // Default port for server
    online: false, // Browser-sync will not attempt to determine network status - assumes you're OFFLINE
    open: false, // Don't open new window after starting server
    ui: {
      port: '1338'// Default port for server of Browser-sync UI
    }
  })
})
