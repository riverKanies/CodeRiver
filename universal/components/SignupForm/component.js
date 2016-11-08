/* @flow */
import React from 'react'
import { Field } from 'redux-form'

type renderFieldProps = {
  input: Object,
  label: string,
  type: string,
  meta: {
    touched: boolean,
    error: string
  }
};

const renderField = ({input, label, type, meta: { touched, error }}: renderFieldProps) => {
  const _error = (touched && error) ? error : undefined
  return (
    <label>
      {label}
      {_error}
      <Field {...input} component='input' type={type} />
    </label>
  )
}

type renderSubmitField = {
  valid: boolean,
  submitting: boolean,
  handleSubmit: Function
};

const renderSubmit = ({ valid = false, submitting = false, handleSubmit }: renderSubmitField) => {
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

type signupProps = {
  renderField: string,
  handleSubmit: Function,
  submitting: boolean,
  valid: boolean,
};

const SignUpForm = (props: signupProps) => {
  return (
    <form style={{ marginTop: '100px' }}>
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
