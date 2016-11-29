import React from 'react'
import styles from './styles'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
const title ="Advertise With Us"
const text = ["Interested in learning more about brand partnerships and sponsorships with Thrive Global? Email Sam Winkelman at sw@thriveglobal.com to learn more."]
const label = {"label":"Advertisers"}
export const AdvertiseSection = () => {
    return (
    <section className={styles.SectionContainer}>
        <section className={styles.content}>
          <FullWidthTwoCol title={title} sectionText={text} label={label}/> 
        </section>
    </section> 

  )
}

export default AdvertiseSection
