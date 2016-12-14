import React from 'react'
import styles from './styles'
import OneColTextWithHeader from 'components/OneColTextWithHeader'
import MiscSection from 'components/MiscSection'

// Content import

// Page Content
const ContactInro = {
  title: 'Contact Thrive Global',
  hasSubtitle: true,
  subTitle:
    `If you have any questions or comments about Thrive Global, we'd love to hear from you:`,
  largeCopyContent: false,
  text: [
  ]
}

export const ContactView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <OneColTextWithHeader {...ContactInro} />
      <MiscSection />
    </main>
  )
}

export default ContactView
