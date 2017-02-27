/* @flow */
import React from 'react'
//import SocialAuth from 'components/SocialAuth'
import { Field } from 'redux-form'
import Button from 'components/Button'
import Input from 'components/Input'
import { Link } from 'react-router'
import GenericFormError from 'components/GenericFormError'
import styles from './styles'
import contentStyles from 'styles/content.css'

type renderSubmitField = {
  valid: boolean,
  submitting: boolean,
  handleSubmit: Function
};

const renderSubmit = ({ valid = false, submitting = false, handleSubmit }: renderSubmitField) => {
  return (
    <Button
      id='loginSubmit'
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
  const forgotPasswordProps = {
    id: 'resetPassword',
    to: '/reset-password',
    className: styles.forgotPasswordLink
  }
  return (
    <section id='login' className={styles.login}>
      <header className={styles.greeting}>
        <h1 className={contentStyles.header}>Log In</h1>
      </header>
      <section className={styles.loginDialogue}>
        <div className={styles.container}>
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
              <Link
                id='navSignUp'
                to='/signup'
                className={styles.forgotPasswordLink}
                style={{marginTop: '1rem'}}
              >
                Need to Sign Up?
              </Link>
              <Link {...forgotPasswordProps}>Forgot your password?</Link>
            </fieldset>
          </form>
        </div>
      </section>
    </section>
  )
}

export default LoginForm
