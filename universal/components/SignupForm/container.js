import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { http } from 'lib'

import validate from './validations'
import component from './component'
import toaster from '../../modules/Toast/module'

function handleSuccess (dispatch) {
  dispatch(toaster.actions.show({type: 'notice', message: 'You should receive a confirmation email shortly.'}))
}

function handleFailure (error, genericMessage = undefined) {
  const errors = { }
  for (const key of Object.keys(error)) {
    errors[key] = error[key].join(', ')
  }
  if (genericMessage) errors['_error'] = genericMessage

  throw new SubmissionError(errors)
}

function genHandler ({ errorMessage }) {
  return function (data, dispatch) {
    return http.post('/api/auth', { ...data, confirm_success_url: `${currentHost}/welcome` })
      .then(() => handleSuccess(dispatch))
      .catch(e => handleFailure(e, errorMessage))
  }
}

const currentHost = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`

const handler = genHandler({
  errorMessage: 'Failed to sign up.'
})

const CreateForm = reduxForm({
  form: 'signup',
  validate,
  onSubmit: handler
})(component)

export default class Form extends React.Component {
  render () {
    return <CreateForm />
  }
}
