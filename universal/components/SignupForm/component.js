/* @flow */
import React from 'react'
import { Field } from 'redux-form'
import GenericFormError from 'components/GenericFormError'
import Button from 'components/Button'
import Input from 'components/Input'
import styles from './styles'
import FacebookLogin from 'react-facebook-login'
import { httpPost } from 'lib/http'

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
      buttonText='Sign Up'
    />
  )
}

type signupProps = {
  renderField: string,
  handleSubmit: Function,
  handleFacebook: Function,
  submitting: boolean,
  valid: boolean,
  message: string
};

const responseFacebook = (response) => {
  return httpPost('/api/auth/facebook/callback', response).then(result => {
    window.handleFacebook(result)
  });
}

const SignUpForm = (props: signupProps) => {
  window.handleFacebook = props.handleFacebook
  return (
    <section className={styles.container}>
     <div className={styles.headerRow}>
        <h2>Sign up to start thriving</h2>
      </div>
      <div className={styles.headerRow}>
        <FacebookLogin
          appId='232613377159246'
          autoLoad={true}
          fields="email"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
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
        <div className={styles.fieldRow}>
          <Field
            component={Input}
            name='password_confirmation'
            type='password'
            label='Confirm Password' />
        </div>
        <div className={styles.buttonRow}>
          {renderSubmit(props)}
        </div>
        {(props.message) ? <p>{props.message}</p> : null }
      </form>
    </section>
  )
}

export default SignUpForm
