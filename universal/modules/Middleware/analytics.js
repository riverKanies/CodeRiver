import segment from 'lib/segment'

export default function analyticsMiddleware ({ dispatch, getState }) {
  return next => action => {
    const { type } = action
    const events = ['LOCATION_CHANGE']

    if (!events.includes(type)) {
      // Normal action: pass it on
      return next(action)
    }

    segment.page()

    return next(action)
  }
}
