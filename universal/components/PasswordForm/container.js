import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required, match, minLength } from 'lib/validate'
import { updatePassword, setPasswordMessage, clearPasswordMessage } from 'modules/UserSession'
import { passwordFormSelector } from 'modules/UserSession/selectors'
import Form from './component'

const validate = createValidator({
  password: [required, minLength(8)],
  password_confirmation: [required, match('password')]
})

function onSuccess (result, dispatch) {
  dispatch(setPasswordMessage('Password updated!'))
  setTimeout(() => dispatch(clearPasswordMessage()), 3000)
}

const onSubmit = genFormHandler({
  action: updatePassword,
  onSuccess
})

const PasswordForm = reduxForm({
  form: 'user-password',
  validate,
  onSubmit
})(Form)

export default connect(passwordFormSelector)(PasswordForm)
