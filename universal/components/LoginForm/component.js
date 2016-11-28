/* @flow */
import React from 'react'
import FacebookAuth from 'components/FacebookAuth'
import { Field } from 'redux-form'
import Button from 'components/Button'
import Input from 'components/Input'
import GenericFormError from 'components/GenericFormError'
import styles from './styles'

type renderSubmitField = {
  valid: boolean,
  submitting: boolean,
  handleSubmit: Function
};

const renderSubmit = ({ valid = false, submitting = false, handleSubmit }: renderSubmitField) => {
  return (
    <Button
      type='submit'
      handleClick={handleSubmit}
      disabled={!valid || submitting}
      buttonStyle='teal'
      buttonText='Log In'
    />
  )
}

type signupProps = {
  renderField: string,
  handleSubmit: Function,
  handleFacebook: Function,
  submitting: boolean,
  valid: boolean,
};

const LoginForm = (props: signupProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h2>Log In</h2>
      </div>
      <div className={styles.headerRow}>
        <FacebookAuth />
      </div>
      <form>
        <GenericFormError {...props} />
        <div className={styles.fieldRow}>
          <Field
            component={Input}
            name='email'
            type='email'
            label='Email Address' />
        </div>
        <div className={styles.fieldRow}>
          <Field
            component={Input}
            name='password'
            type='password'
            label='Password' />
        </div>
        <div className={styles.buttonRow}>
          {renderSubmit(props)}
        </div>
      </form>
    </section>
  )
}

export default LoginForm
