import { SubmissionError } from 'redux-form'

// this function will propagate failures back to redux form
function handleFailure (error, dispatch) {
  const errors = { }

  for (const key of Object.keys(error)) {
    errors[key] = error[key]
  }

  if (Array.isArray(error)) errors['_error'] = error.join(', ')

  throw new SubmissionError(errors)
}

// defaults error handler to one defined above, if you must override it, honor
// the same calling signature (error, dispatch)
export function genFormHandler ({ action, onSuccess, onFailure = handleFailure }) {
  return function (data, dispatch) {
    return dispatch(action(data))
      .then(result => onSuccess(result, dispatch))
      .catch(e => onFailure(e, dispatch))
  }
}
