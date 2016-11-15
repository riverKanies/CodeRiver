const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'required'
  }

  if (!values.password) {
    errors.password = 'required'
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'required'
  }

  return errors
}

export default validate
