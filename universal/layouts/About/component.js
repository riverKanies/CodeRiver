import React from 'react'
import styles from './styles'
import TeamSection from 'components/TeamSection'
import ScienceSection from 'components/ScienceSection'
import OfferSection from 'components/OfferSection'
import PartnerSection from 'components/PartnerSection'




const AboutUsContent  = "Here is a couple paragraphs about us."


export const AboutUsSection = () => {
  return (
    <div className={styles.AboutUsSection}>
      <h2 className={styles.AboutUsTitle}>About Us</h2>
      <p className={styles.AboutUsContent}> {AboutUsContent}</p>
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
