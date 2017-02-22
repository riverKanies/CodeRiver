import { reduxForm } from 'redux-form'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required, email, integer, minLength } from 'lib/validate'
import { connect } from 'react-redux'

import { KEY } from 'modules/ContactUs'
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

const mapStateToProps = (store) => ({
  contacted: store[KEY].contacted
})
const container = connect(mapStateToProps)(component)


export default reduxForm({
  form: 'contactus',
  validate,
  onSubmit
})(container)
