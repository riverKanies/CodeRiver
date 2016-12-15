import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createAccount, KEY } from 'modules/SignUp'
import { genFormHandler } from 'lib/formHelpers'
import { browserHistory } from 'react-router'
import { createValidator, required, email, minLength, match } from 'lib/validate'

import component from './component'

const validate = createValidator({
  email: [required, email],
  password: [required, minLength(8)],
  password_confirmation: [required, match('password')]
})

function onSuccess (result, dispatch) {
  console.log(result); return;
  browserHistory.push('registration-success')
}

const onSubmit = genFormHandler({
  action: createAccount,
  onSuccess
})

const mapStateToProps = (store) => ({ message: store[KEY].message })
const container = connect(mapStateToProps)(component)

export default reduxForm({
  form: 'signup',
  validate,
  onSubmit
})(container)
