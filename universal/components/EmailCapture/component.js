/* @flow */
import React from 'react'
import styles from './styles'
import LeadForm from 'containers/LeadForm'
// Add in a button

type Props = {
  title: string,
  sectionText: Array<string>,
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const EmailCapture = ({ title = 'Title', sectionText = defaultText }: Props) => {
  return (
    <section className={styles.emailCapture}>
      <div className={styles.container}>
        <header>
          <h3>{title}</h3>
        </header>
        <section className={styles.sectionContent}>
          {sectionText.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <LeadForm />
        </section>
      </div>
    </section>
  )
}

export default EmailCapture
