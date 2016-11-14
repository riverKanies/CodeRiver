import { reduxForm } from 'redux-form'
import { createAccount } from 'modules/SignUp'

import { createValidator, required, email, minLength, match } from 'lib/validate'
import component from './component'

const validate = createValidator({
  email: [required, email],
  password: [required, minLength(8)],
  password_confirmation: [required, match('password')]
})

const handleSubmit = (data, dispatch) => {
  return dispatch(createAccount(data))
}

export default reduxForm({
  form: 'signup',
  validate,
  onSubmit: handleSubmit
})(component)
