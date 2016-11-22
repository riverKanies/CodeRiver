import React from 'react'
import styles from './styles'
import TeamSection from 'components/TeamSection'
import ScienceSection from 'components/ScienceSection'
import OfferSection from 'components/OfferSection'
import PartnerSection from 'components/PartnerSection'

export const AboutUsSection = () => {
  return (
    <div className={styles.AboutUsSection}>
      <h2>About Us</h2>
      <p> Some info</p>
    </div> 
  )
}


export const AboutView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <AboutUsSection />
      <ScienceSection />
      <OfferSection />
      <TeamSection />
      <PartnerSection/>

    </main>
  )
}

export default AboutView
