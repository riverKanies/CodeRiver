import { reduxForm } from 'redux-form'
import { actions } from 'modules/Middleware/analytics'
import { connect } from 'react-redux'
import { KEY, createMessage, clearMessages } from 'modules/Messages'
import { createValidator, required, email } from 'lib/validate'
import Component from './component'

const validate = createValidator({
  email: [required, email]
})

const handleSubmit = (values, dispatch) => {
  // dispatch event to be caught by middleware
  const successMessage = `Thank you for subscribing to the thrive newsletter.`
  dispatch({ type: actions.newsletterFormSubmitted, track: { email: values.email } })
  dispatch(createMessage('email-capture-mini', successMessage))
  setTimeout(() => dispatch(clearMessages()), 5000)

  // reset the lead form
  values.email = ''
}

const ConnectedComponent = connect((state) => ({
  message: state[KEY]['email-capture-mini']
}))(Component)

export default reduxForm({
  form: 'email-capture-mini',
  onSubmit: handleSubmit,
  validate
})(ConnectedComponent)
