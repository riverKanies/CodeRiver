/* @flow */
function track () {
  window.analytics.track(...arguments)
}

function identify () {
  return (
    window.analytics.identify(...arguments)
  )
}

function page () {
  window.analytics.page(...arguments)
}

function alias (user: string) {
  window.analytics.alias(user, window.analytics.user().anonymousId())
}

function trackLink (properties: string) {
  return () => track('Link Clicked', properties)
}

function load () {
  return window.analytics.load(...arguments)
}

const segment = { track, identify, page, alias, trackLink, load }

export default segment
