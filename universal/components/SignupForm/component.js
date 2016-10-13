import React from 'react'
import { Field } from 'redux-form'

const renderField = ({input, label, type, meta: { touched, error }}) => {
  const _error = (touched && error) ? error : undefined
  return (
    <label>
      {label}
      {_error}
      <Field {...input} component='input' type={type} />
    </label>
  )
}

const renderSubmit = ({ valid = false, submitting = false, handleSubmit }) => {
  return (
    <button
      type='submit'
      onClick={handleSubmit}
      disabled={!valid || submitting}
    >
    Sign Up
    </button>
  )
}

const SignUpForm = (props) => {
  return (
    <form>
      <Field
        component={renderField}
        name='email'
        type='email'
        label='email' />
      <Field
        component={renderField}
        name='password'
        type='password'
        label='password' />
      <Field
        component={renderField}
        name='password_confirmation'
        type='password'
        label='password_confirmation' />
      {renderSubmit(props)}
    </form>
  )
}

export default SignUpForm
