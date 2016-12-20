import React from 'react'
import styles from './styles'
import MiscSection from 'components/MiscSection'
import TextBanner from 'components/TextBanner'

// Page Content
const ContactIntro = {
  title: 'Contact Thrive Global',
  hasSubtitle: true,
  subTitle:
    `If you have any questions or comments about Thrive Global, we'd love to hear from you`
}

export const ContactView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <TextBanner {...ContactIntro} />
      <MiscSection />
    </main>
  )
}

export default ContactView
