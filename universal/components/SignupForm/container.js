import { reduxForm } from 'redux-form'
import { createAccount } from 'modules/SignUp'

import { createValidator, required, email, minLength, match } from 'lib/validate'
import component from './component'
import toast from 'modules/Toast'

const validate = createValidator({
  email: [required, email],
  password: [required, minLength(8)],
  password_confirmation: [required, match('password')]
})

const handleSubmit = (data, dispatch) => {
  return dispatch(createAccount(data))
  .then(() => successfulSubmit(dispatch))
  .catch(() => failedSubmit(dispatch))
}

const successfulSubmit = (dispatch) => {
  dispatch(
    toast.actions.show({
      type: 'notice',
      message: 'Successfully Submitted Form'
    })
  )
}

const failedSubmit = (dispatch) => {
  dispatch(
    toast.actions.show({
      type: 'error',
      message: 'Error Submitting Form'
    })
  )
}

export default reduxForm({
  form: 'signup',
  validate,
  onSubmit: handleSubmit
})(component)
