import { actions } from 'modules/Middleware/analytics'
import { reduxForm } from 'redux-form'
import { createValidator, required, email } from 'lib/validate'
import Component from './component'

const validate = createValidator({
  email: [required, email]
})

const handleSubmit = (values, dispatch) => {
  // dispatch event to be caught by middleware
  dispatch({
    type: actions.leadFormSubmitted,
    track: { email: values.email }
  })

  // reset the lead form
  values.email = ''
}

export default reduxForm({
  form: 'email-capture',
  onSubmit: handleSubmit,
  validate
})(Component)
