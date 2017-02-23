import React from 'react'
import ContactUsForm from 'components/ContactUsForm'

import styles from './styles'

class ContactUs extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <div className={styles.container}>
          <h1 className={styles.header}>Contact Us</h1>
          <h3 className={styles.subheader}>Get in touch!</h3>
          <ContactUsForm />
          <section className={styles.body}>
            <p><strong>Toll Free:</strong> 1-844-801-5829</p>
            <p><strong>Local:</strong> 423-803-9310</p>
            <p><strong>Physical correspondence:</strong><br/>711 Signal Mountain Rd, #148<br/>Chattanooga, TN 37405</p>
            <br/>
            <p><strong>Business Hours:</strong> 9:00a-6:00p EST Monday-Friday</p>
          </section>
        </div>
      </main>
    )
  }
}

export default ContactUs
