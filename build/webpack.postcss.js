import cssBrowserReporter from 'postcss-browser-reporter'
import cssNext from 'postcss-cssnext'
import cssReporter from 'postcss-reporter'
import fontMagician from 'postcss-font-magician'
import lost from 'lost'

export default [
  cssNext,
  lost,
  cssBrowserReporter,
  cssReporter,
  fontMagician({ formats: 'local woff2 woff ttf eot svg otf' })
]
