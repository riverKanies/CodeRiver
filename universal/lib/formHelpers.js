import { SubmissionError } from 'redux-form'

export function handleFailure (error, dispatch) {
  const errors = { }
  for (const key of Object.keys(error)) {
    errors[key] = error[key]
  }

  if (Array.isArray(error)) errors['_error'] = error.join(', ')

  throw new SubmissionError(errors)
}

export function genFormHandler ({ action, onSuccess, onFailure = handleFailure }) {
  return function (data, dispatch) {
    return dispatch(action(data))
      .then(result => onSuccess(result, dispatch))
      .catch(e => onFailure(e, dispatch))
  }
}
