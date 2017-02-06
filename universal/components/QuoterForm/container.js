import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { genFormHandler } from 'lib/formHelpers'
import { createValidator, required } from 'lib/validate'
import { getQuotes } from 'modules/Quoter'
import Form from './component'

const validate = createValidator({
  state: [required],
  birthdate: [required],
  gender: [required],
  rate_class: [required],
  smoker: [required],
  term: [required]
})

function onSuccess (result, dispatch) {
  console.log('called onSuccess', result)
  // dispatch(setUserMessage('We Found Quotes!'))
  // setTimeout(() => dispatch(clearUserMessage()), 3000)
}

const onSubmit = genFormHandler({
  action: getQuotes,
  onSuccess
})

const QuoterForm = reduxForm({
  form: 'quoter',
  validate,
  onSubmit
})(Form)

export default connect()(QuoterForm)
