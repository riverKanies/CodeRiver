import path from 'path'
import config from '../../config'

/* eslint-disable */
jasmine.DEFAULT_TIMEOUT_INTERVAL = config.jasmine_timeout
/* eslint-enable */

export const browserConfig = {
  show: false,
  webPreferences: {
    preload: path.resolve(__dirname, 'preload.js')
  },
  waitTimeout: config.nightmare_wait_timeout,
  gotoTimeout: config.nightmare_goto_timeout,
  loadTimeout: config.nightmare_load_timeout,
  typeInterval: 20
}

export const baseUrl = config.test_server
