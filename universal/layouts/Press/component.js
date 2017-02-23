import React from 'react'
import ContactUsForm from 'components/ContactUsForm'

import styles from './styles'

class Press extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <div className={styles.container}>
          <h1 className={styles.header}>Press Inquiries</h1>
          <section className={styles.body}>
            <p>If you are a member of the media, please use the form below to submit a request to our team.  We will review promptly and get back to you as soon as possible.</p>
          </section>
          <ContactUsForm />
        </div>
      </main>
    )
  }
}

export default Press
