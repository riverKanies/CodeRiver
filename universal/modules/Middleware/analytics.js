import segment from 'lib/segment'

export const actions = {
  locationChange: 'analytics/location-change',
  leadFormSubmitted: 'analytics/lead-form-submitted',
  newsletterFormSubmitted: 'analytics/newsletter-form-submitted',
  articleClickThrough: 'analytics/article-click-through'
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
  },
  [actions.articleClickThrough]: function ({ articleId }) {
    segment.track('ARTICLE_CLICK_THROUGH', articleId)
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
