import Nightmare from 'nightmare'
import path from 'path'
import config from '../../config'

/* eslint-disable */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000
/* eslint-enable */

export const browser = Nightmare({
  show: true,
  webPreferences: {
    preload: path.resolve(__dirname, 'preload.js')
  },
  waitTimeout: 6000,
  gotoTimeout: 6000,
  loadTimeout: 6000,
  typeInterval: 20
})

export const baseUrl = config.test_server
