/* @flow */
import React from 'react'
import { Field } from 'redux-form'
import GenericFormError from 'components/GenericFormError'
import ExternalLink from 'components/ExternalLink'
import Input from 'components/Input'
import styles from './styles'

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
      buttonText='Contact Us'
    />
  )
}

const ContactUsForm = (props) => {
  return (
    <section className={styles.signUpDialogue}>
      <div className={styles.container}>
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
              name='message'
              type='textarea'
              label='Message'
              theme='thriveInput'
            />
            {renderSubmit(props)}
            {props.contacted ? <p>Thank you for contacting us! We’ll be in touch shortly.</p> : ''}
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default ContactUsForm
