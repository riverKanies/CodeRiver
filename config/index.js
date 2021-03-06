/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path'
import _debug from 'debug'
import { argv } from 'yargs'
import ip from 'ip'

const localip = ip.address()
const debug = _debug('app:config')
debug('Creating default configuration.')

// ========================================================
// Default Configuration
// ========================================================
const config = {
  env    : process.env.NODE_ENV || 'development',

  app_name : 'reactBoosterKit',

  force_https : process.env.FORCE_HTTPS || false,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base     : path.resolve(__dirname, '..'),
  dir_client    : 'client',
  dir_universal : 'universal',
  dir_dist      : 'dist',
  dir_server    : 'server',
  dir_test      : 'tests',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_protocol    : process.env.PROTOCOL || 'http',
  server_host        : process.env.HOST || localip,
  server_port        : process.env.PORT || 3000,

  // ----------------------------------
  // Socket Configuration
  // ----------------------------------
  socket_channel_limit     : 1000,
  socket_log_level         : 1,
  socket_workers           : 1,
  socket_brokers           : 1,
  socket_engine            : 1,

  // ----------------------------------
  // BrowserSync Options
  // ----------------------------------
  browser_sync_port        : 4000,
  browser_sync_ui_port     : 4001,
  browser_sync_open_window : false,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_options         : {
    env: process.env.NODE_ENV || 'development'
  },
  compiler_extensions      : [
    '.js',
    '.jsx',
    '.json',
    '.css',
    '.sss',
    '.md'
  ],
  compiler_target          : 'web',
  compiler_devtool         : 'source-map',
  compiler_hash_type       : 'hash',
  compiler_fail_on_warning : false,
  compiler_quiet           : false,
  compiler_public_path     : '/',
  compiler_stats           : {
    chunks : false,
    chunkModules : false,
    colors : true
  },
  compiler_vendor : [
    'babel-polyfill',
    'react',
    'react-redux',
    'react-router',
    'redux'
  ],

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  coverage_reporters : [
    { type : 'text-summary' },
    { type : 'lcov', dir : 'coverage' }
  ],
  jasmine_timeout: process.env.JASMINE_TIMEOUT || 15000,
  nightmare_wait_timeout: process.env.NIGHTMARE_WAIT_TIMEOUT || 14000,
  nightmare_goto_timeout: process.env.NIGHTMARE_GOTO_TIMEOUT || 14000,
  nightmare_load_timeout: process.env.NIGHTMARE_LOAD_TIMEOUT || 14000
}

config.server_url = `${config.server_protocol}://${config.server_host}:${config.server_port}`
config.test_server = process.env.TEST_SERVER || config.server_url

/************************************************
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
************************************************/

// ------------------------------------
// Environment
// ------------------------------------
// N.B.: globals added here must _also_ be added to .eslintrc
config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env),
    'SEGMENT'  : JSON.stringify(process.env.SEGMENT),
    'ROLLBAR'  : JSON.stringify(process.env.ROLLBAR),
    'ROLLBAR_ENV'  : JSON.stringify(process.env.ROLLBAR_ENV),
    'FACEBOOK_ID'  : JSON.stringify(process.env.FACEBOOK_ID)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production',
  '__TEST__'     : config.env === 'test',
  '__DEBUG__'    : config.env === 'development' && !argv.no_debug,
  '__COVERAGE__' : !argv.watch && config.env === 'test',
  '__PROTOCOL__' : config.server_protocol,
  '__HOST__'     : config.server_host,
  '__PORT__'     : config.server_port,
  '__TEST_SERVER__' : config.test_server
}

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json')

config.compiler_vendor = config.compiler_vendor
  .filter((dep) => {
    if (pkg.dependencies[dep]) return true

    debug(
      `Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from vendor_dependencies in ~/config/index.js`
    )
  })

// ------------------------------------
// Utilities
// ------------------------------------
function base () {
  const args = [config.path_base].concat([].slice.call(arguments))
  return path.resolve.apply(path, args)
}

config.utils_paths = {
  base      : base,
  client    : base.bind(null, config.dir_client),
  dist      : base.bind(null, config.dir_dist),
  server    : base.bind(null, config.dir_server),
  universal : base.bind(null, config.dir_universal)
}

// ========================================================
// Environment Configuration
// ========================================================
debug(`Looking for environment overrides for NODE_ENV "${config.env}".`)
const environments = require('./environments').default
const overrides = environments[config.env]
if (overrides) {
  debug('Found overrides, applying to default configuration.')
  Object.assign(config, overrides(config))
} else {
  debug('No environment overrides found, defaults will be used.')
}

export default config
