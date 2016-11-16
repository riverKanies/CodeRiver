/* @flow */
import React from 'react'
import styles from './styles'
// import LeadForm from 'containers/LeadForm'

type Props = {
  title: string,
  message: Array<string>
};

const defaultText = ['Sign up to receive the best tips and articles right in your email.']

const EmailCaptureMini = ({
  title = 'Newsletter',
  message = defaultText
}: Props) => {
  return (
    <section className={styles.emailCaptureMini}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h3>{title}</h3>
          <p>{message}</p>
        </header>
        <form>
          <span className={styles.inputWrap}>
            <input type='email' name='email' label='email' placeholder='Enter Your Email' />
            <button type='submit'>Submit</button>
          </span>
        </form>
      </div>
    </section>
  )
}

export default EmailCaptureMini
