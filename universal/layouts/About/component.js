import React from 'react'
import styles from './styles'
import TeamSection from 'components/TeamSection'
import ScienceSection from 'components/ScienceSection'
import OfferSection from 'components/OfferSection'
import PartnerSection from 'components/PartnerSection'
import BrowseSection from 'components/BrowseSection'
import AboutSection from 'components/AboutSection'
import AdvertiseSection from 'components/AdvertiseSection'
import PressSection from 'components/PressSection'
import TrainingSection from 'components/TrainingSection'
import CareerSection from 'components/CareerSection'
import ContactSection from 'components/ContactSection'
import BecomeAContributorSection from 'components/BecomeAContributorSection'
import MiscSection from 'components/MiscSection'


export const AboutView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <AboutSection />
      <TeamSection />
      <CareerSection />
      <PartnerSection/>
      <BecomeAContributorSection/>
      <TrainingSection/>
      <MiscSection />
     </main>
  )
}

export default AboutView
