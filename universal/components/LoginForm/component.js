/* @flow */
import React from 'react'
import { Field } from 'redux-form'
import Button from 'components/Button'
import Input from 'components/Input'
import GenericFormError from 'components/GenericFormError'
import FacebookLogin from 'react-facebook-login'
import { httpPost } from 'lib/http'
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

const responseFacebook = (response) => {
  return httpPost('/api/auth/facebook/callback', response).then(result => {
    window.handleFacebook(result)
  });
}

const LoginForm = (props: signupProps) => {
  window.handleFacebook = props.handleFacebook
  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h2>Log In</h2>
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
        <div className={styles.buttonRow}>
          {renderSubmit(props)}
        </div>
      </form>
    </section>
  )
}

export default LoginForm
