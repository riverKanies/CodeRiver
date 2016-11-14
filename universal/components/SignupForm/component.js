/* @flow */
import React from 'react'
import { Field } from 'redux-form'
import Input from 'components/Input'

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
    <form style={{ marginTop: '100px', backgroundColor: 'blue' }}>
      <Field
        component={Input}
        name='email'
        type='email'
        label='email' />
      <Field
        component={Input}
        name='password'
        type='password'
        label='password' />
      <Field
        component={Input}
        name='password_confirmation'
        type='password'
        label='password_confirmation' />
      {renderSubmit(props)}
    </form>
  )
}

export default SignUpForm
