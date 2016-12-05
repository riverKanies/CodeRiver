/* @flow */
import React from 'react'
import styles from './styles'
import { Field } from 'redux-form'
import Input from 'components/BasicInput'

type Props = {
  title: string,
  message: string,
  handleSubmit: Function,
  pristine: boolean,
  submitting: boolean
};

const EmailCapture = ({
  title = 'Sign up for the #thrivenow newsletter',
  handleSubmit = () => null,
  message,
  pristine = false,
  submitting = false
}: Props) => {
  return (
    <section className={styles.emailCapture}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.h2}>{message || title}</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <span className={styles.inputWrap}>
            <Field
              type='email'
              name='email'
              placeholder='Enter Your Email'
              component={Input} />
            <button type='submit'>Submit</button>
          </span>
        </form>
      </div>
    </section>
  )
}

export default EmailCapture
