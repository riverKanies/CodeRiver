import { reduxForm } from 'redux-form'
import { createAccount } from 'modules/SignUp'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required, email, minLength, match } from 'lib/validate'

import toast from 'modules/Toast'
import component from './component'

const validate = createValidator({
  email: [required, email],
  password: [required, minLength(8)],
  password_confirmation: [required, match('password')]
})

function onSuccess (result, dispatch) {
  dispatch(toast.actions.show({
    type: 'notice',
    message: 'Please check your email to verify your account'
  }))
}

const onSubmit = genFormHandler({
  action: createAccount,
  onSuccess
})

export default reduxForm({
  form: 'signup',
  validate,
  onSubmit
})(component)
