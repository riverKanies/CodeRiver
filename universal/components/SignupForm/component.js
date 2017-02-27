/* @flow */
import React from 'react'
import { Field } from 'redux-form'
import GenericFormError from 'components/GenericFormError'
import ExternalLink from 'components/ExternalLink'
import Input from 'components/Input'
import styles from './styles'
import contentStyles from 'styles/content.css'

import { renderSelectedQuote } from 'components/QuoteCard'

type renderSubmitField = {
  valid: boolean,
  submitting: boolean,
  handleSubmit: Function
};

const renderSubmit = ({ valid = false, submitting = false, handleSubmit }: renderSubmitField) => {
  return (
    <ExternalLink
      id='signupSubmit'
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

const SignUpForm = (props: signupProps) => {
  return (
    <section className={styles.signUp}>
      <header className={styles.greeting}>
        <h1 className={contentStyles.header}>Sign up to make a plan</h1>
      </header>
      <section className={styles.signUpDialogue}>
        <div className={styles.container}>
          {renderSelectedQuote(props.selectedQuote)}
          <form className={styles.signUpForm}>
            <fieldset className={styles.timeToThrive}>
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
                name='name'
                type='name'
                label='Full Name'
                theme='thriveInput'
              />
              <Field
                component={Input}
                name='phone'
                type='phone'
                label='Phone Number'
                theme='thriveInput'
              />
              <Field
                component={Input}
                name='password'
                type='password'
                label='Password'
                theme='thriveInput'
              />
              <Field
                component={Input}
                name='password_confirmation'
                type='password'
                label='Confirm Password'
                theme='thriveInput'
                />
              {renderSubmit(props)}
              {(props.message) ? <p>{props.message}</p> : null }
            </fieldset>
          </form>
        </div>
      </section>
    </section>
  )
}

export default SignUpForm
