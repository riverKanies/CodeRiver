import segment from 'lib/segment'

export const actions = {
  locationChange: 'analytics/location-change',
  leadFormSubmitted: 'analytics/lead-form-submitted',
  newsletterFormSubmitted: 'analytics/newsletter-form-submitted'
}

const handleActions = {
  [actions.locationChange]: function () {
    segment.page()
  },
  [actions.leadFormSubmitted]: function ({ track }) {
    const email = track
    segment.identify(email, track)
    segment.track('LEAD_FORM_SUBMITTED', track)
  },
  [actions.newsletterFormSubmitted]: function ({ track }) {
    const email = track
    segment.identify(email, track)
    segment.track('NEWSLETTER_FORM_SUBMITTED', track)
  }
}

export default function analyticsMiddleware ({ dispatch, getState }) {
  return next => action => {
    const { type } = action

    if (handleActions[type]) {
      handleActions[type](action)
    }

    return next(action)
  }
}
