import { reduxForm } from 'redux-form'
import { actions } from 'modules/Middleware/analytics'
import { createValidator, required, email } from 'lib/validate'

import LeadForm from './component'

const validate = createValidator({
  email: [required, email]
})

const handleSubmit = (values, dispatch) => {
  // dispatch event to be caught by middleware
  dispatch({ type: actions.leadFormSubmitted, track: { email: values.email } })

  // reset the lead form
  values.email = ''
}

export default reduxForm({
  form: 'lead-form',
  onSubmit: handleSubmit,
  validate
})(LeadForm)
