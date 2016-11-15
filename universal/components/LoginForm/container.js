import { reduxForm, SubmissionError } from 'redux-form'
import { createSession } from 'modules/UserSession'

import { createValidator, required } from 'lib/validate'
import component from './component'
import { browserHistory } from 'react-router'

const validate = createValidator({
  email: [required],
  password: [required]
})

function handleSuccess () {
  browserHistory.push('profile')
}

function handleFailure (error, dispatch) {
  const errors = { }
  for (const key of Object.keys(error)) {
    errors[key] = error[key]
  }
  throw new SubmissionError(errors)
}

function genFormHandler ({ action }) {
  return function (data, dispatch) {
    return dispatch(action(data))
      .then(result => handleSuccess(result, dispatch))
      .catch(e => handleFailure(e, dispatch))
  }
}

const onSubmit = genFormHandler({
  action: createSession
})

export default reduxForm({
  form: 'login',
  validate,
  onSubmit
})(component)
