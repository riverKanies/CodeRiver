import { reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required } from 'lib/validate'

import { createSession } from 'modules/UserSession'
import component from './component'

const validate = createValidator({
  email: [required],
  password: [required]
})

function onSuccess () {
  browserHistory.push('profile')
}

const onSubmit = genFormHandler({
  action: createSession,
  onSuccess
})

export default reduxForm({
  form: 'login',
  validate,
  onSubmit
})(component)
