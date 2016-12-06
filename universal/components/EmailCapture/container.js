import { actions } from 'modules/Middleware/analytics'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { KEY, createMessage, clearMessages } from 'modules/Messages'
import { createValidator, required, email } from 'lib/validate'
import Component from './component'

const validate = createValidator({
  email: [required, email]
})

export function handleSubmit (values, dispatch) {
  // dispatch event to be caught by middleware
  dispatch({
    type: actions.leadFormSubmitted,
    track: { email: values.email }
  })
  const successMessage = `Thank you for subscribing to the thrive newsletter.`
  dispatch(createMessage('email-capture', successMessage))
  setTimeout(() => dispatch(clearMessages()), 5000)

  // reset the lead form
  values.email = ''
}

const ConnectedComponent = connect((state) => ({
  message: state[KEY]['email-capture']
}))(Component)

export default reduxForm({
  form: 'email-capture',
  onSubmit: handleSubmit,
  validate
})(ConnectedComponent)
