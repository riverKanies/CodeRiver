import React from 'react'
import styles from './styles'
import TeamSection from 'components/TeamSection'
import AboutSection from 'components/AboutSection'
import CareerSection from 'components/CareerSection'
import MiscSection from 'components/MiscSection'
import ExtendedFamilySection from 'components/ExtendedFamilySection'

export const AboutView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <AboutSection />
      <TeamSection />
      <ExtendedFamilySection />
      <CareerSection />
      <MiscSection />
     </main>
  )
}

export default AboutView
