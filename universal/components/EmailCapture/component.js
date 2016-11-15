/* @flow */
import React from 'react'
import styles from './styles'
// import LeadForm from 'containers/LeadForm'

type Props = {
  title: string,
};

const EmailCapture = ({ title = 'Thrive with us today!' }: Props) => {
  return (
    <section className={styles.emailCapture}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>{title}</h2>
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

export default EmailCapture
