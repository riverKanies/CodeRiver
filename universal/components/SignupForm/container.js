import { reduxForm, SubmissionError } from 'redux-form'
import { createAccount } from 'modules/SignUp'

import { createValidator, required, email, minLength, match } from 'lib/validate'
import component from './component'
import toast from 'modules/Toast'

const validate = createValidator({
  email: [required, email],
  password: [required, minLength(8)],
  password_confirmation: [required, match('password')]
})

function handleSuccess (result, dispatch) {
  dispatch(toast.actions.show({
    type: 'notice',
    message: 'Please check your email to verify your account'
  }))
}

function handleFailure (error, dispatch) {
  const errors = { }
  for (const key of Object.keys(error)) {
    errors[key] = error[key].join(', ')
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
  action: createAccount
})

export default reduxForm({
  form: 'signup',
  validate,
  onSubmit
})(component)
