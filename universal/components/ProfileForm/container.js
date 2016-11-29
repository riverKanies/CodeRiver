import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required } from 'lib/validate'
import { updateSession, setUserMessage, clearUserMessage } from 'modules/UserSession'
import { profileFormSelector } from 'modules/UserSession/selectors'
import Form from './component'

const validate = createValidator({
  email: [required],
  name: [required]
})

function onSuccess (result, dispatch) {
  dispatch(setUserMessage('Account settings updated!'))
  setTimeout(() => dispatch(clearUserMessage()), 3000)
}

const onSubmit = genFormHandler({
  action: updateSession,
  onSuccess
})

const ProfileForm = reduxForm({
  form: 'user-profile',
  validate,
  onSubmit
})(Form)

export default connect(profileFormSelector)(ProfileForm)
