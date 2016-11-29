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
    <section className={styles.login}>
      <header className={styles.greeting}>
        <h1>Log In</h1>
      </header>
      <section className={styles.loginDialogue}>
        <div className={styles.container}>
          <section className={styles.socialSignIn}>
            <FacebookAuth />
          </section>
          <form className={styles.loginForm}>
            <fieldset className={styles.getInHere}>
              <GenericFormError {...props} />
              <Field
                component={Input}
                name='email'
                type='email'
                label='Email Address'
                theme='thriveInput'
              />
              <Field
                component={Input}
                name='password'
                type='password'
                label='Password'
                theme='thriveInput'
              />
              {renderSubmit(props)}
            </fieldset>
          </form>
        </div>
      </section>
    </section>
  )
}

export default LoginForm
