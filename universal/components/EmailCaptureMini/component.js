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

const defaultText = 'Sign up to receive the best tips and articles right in your email.'

export default function ({
  title = 'Newsletter',
  handleSubmit = () => null,
  message = defaultText,
  pristine = false,
  submitting = false
}: Props) {
  return (
    <section className={styles.emailCaptureMini}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h3>{title}</h3>
          <p>{message}</p>
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

