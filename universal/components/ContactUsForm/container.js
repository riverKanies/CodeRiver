import { reduxForm } from 'redux-form'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required, email, integer, minLength } from 'lib/validate'

import { contactUs } from 'modules/ContactUs'
import component from './component'

const validate = createValidator({
  email: [required, email],
  name: [required],
  phone: [required, integer, minLength(10)],
  message: [required]
})

function onSuccess (result, dispatch) {
}

const onSubmit = genFormHandler({
  action: contactUs,
  onSuccess
})

export default reduxForm({
  form: 'contactus',
  validate,
  onSubmit
})(component)
