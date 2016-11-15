/* @flow */
import React from 'react'
import styles from './styles'
import LeadForm from 'containers/LeadForm'

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
        <LeadForm />
      </div>
    </section>
  )
}

export default EmailCapture
