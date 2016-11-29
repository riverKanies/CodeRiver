import React from 'react'
import styles from './styles'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
const title ="Contact Us"
const text = ["Say hello. E-mail us at info@thriveglobal.com."]
const label = {"label":"Contact Thrive"}
export const ContactSection = () => {
    return (
    <section className={styles.SectionContainer}>
        <section className={styles.content}>
          <FullWidthTwoCol title={title} sectionText={text} label={label}/> 
        </section>
    </section> 

  )
}

export default ContactSection
