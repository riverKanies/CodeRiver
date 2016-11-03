import { reduxForm } from 'redux-form'
import { createValidator, required, email } from 'lib/validate'

import LeadForm from './component'

const validate = createValidator({
  email: [required, email]
})

const handleSubmit = (values, dispatch) => {
  // dispatch event to be caught by middleware
  dispatch({ type: 'LEAD_FORM_SUBMITTED', track: { email: values.email } })

  // reset the lead form
  values.email = ''
}

export default reduxForm({
  form: 'lead-form',
  onSubmit: handleSubmit,
  validate
})(LeadForm)
