export default function callAPIMiddleware ({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      payload = {}
    } = action

    if (!types) {
      // Normal action: pass it on
      return next(action)
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.')
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.')
    }

    if (!shouldCallAPI(getState())) {
      return
    }

    const [ requestType, successType, failureType ] = types

    dispatch(Object.assign({}, payload, {
      type: requestType
    }))

    return callAPI().then(
      data => dispatch(Object.assign({}, payload, {
        data,
        type: successType
      })),
      error => {
        const e = error.errors || { error: 'there was an error processing request' }
        dispatch(Object.assign({}, payload, {
          error: e,
          type: failureType
        }))
        return Promise.reject(e)
      }
    )
  }
}
