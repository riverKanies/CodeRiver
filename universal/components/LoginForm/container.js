import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required } from 'lib/validate'
import { KEY as QUOTERKEY } from 'modules/Quoter'

import { createSession } from 'modules/UserSession'
import component from './component'

const validate = createValidator({
  email: [required],
  password: [required]
})

function onSuccess (result, dispatch) {
  dispatch({ type: ssoMiddlewareActions.checkForRedirect })
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
