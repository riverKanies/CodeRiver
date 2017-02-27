/* @flow */
import React from 'react'
import { Field } from 'redux-form'
import Button from 'components/Button'
import Input from 'components/Input'
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
      type='submit'
      handleClick={handleSubmit}
      disabled={!valid || submitting}
      buttonStyle='teal'
      buttonText='Reset Passowrd'
    />
  )
}

type Props = {
  renderField: string,
  handleSubmit: Function,
  submitting: boolean,
  valid: boolean,
  message: string
};

const Form = (props: Props) => {
  return (
    <section className={styles.passwordReset}>
      <header className={styles.greeting}>
        <h1 className={contentStyles.header}>Reset Password</h1>
      </header>
      <section className={styles.passwordResetDialogue}>
        <div className={styles.container}>
          <form
            onSubmit={props.handleSubmit}
            className={styles.passwordResetForm}
          >
            <fieldset className={styles.getInHere}>
              <GenericFormError {...props} />
              <Field
                component={Input}
                name='email'
                type='email'
                label='Email Address'
                theme='thriveInput'
              />
              {renderSubmit(props)}
              {props.message && (<p className={styles.message}>{props.message}</p>)}
            </fieldset>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Form
