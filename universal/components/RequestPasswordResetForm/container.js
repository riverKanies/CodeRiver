import { reduxForm } from 'redux-form'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required, email } from 'lib/validate'
import { KEY, createMessage } from 'modules/Messages'
import { requestResetPassword } from 'modules/UserSession'
import { connect } from 'react-redux'

import Component from './component'

const validate = createValidator({
  email: [required, email]
})

function onSuccess (result, dispatch) {
  const successMessage = 'You will receive an email containing a link to reset your password.'
  dispatch(createMessage('request-password-reset', successMessage))
}

export const onSubmit = genFormHandler({
  action: requestResetPassword,
  onSuccess
})

const ConnectedComponent = connect((state) => ({
  message: state[KEY]['request-password-reset']
}))(Component)

export default reduxForm({
  form: 'request-password-reset',
  validate,
  onSubmit
})(ConnectedComponent)
