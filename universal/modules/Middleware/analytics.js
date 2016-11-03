import segment from 'lib/segment'

const handleEvents = {
  'LOCATION_CHANGE': function () {
    segment.page()
  },
  'LEAD_FORM_SUBMITTED': function ({ track }) {
    segment.track('LEAD_FORM_SUBMITTED', track)
  }
}

export default function analyticsMiddleware ({ dispatch, getState }) {
  return next => action => {
    const { type } = action

    if (handleEvents[type]) {
      handleEvents[type](action)
    }

    return next(action)
  }
}
