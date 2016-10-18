import React from 'react'
import styles from './styles'

import HeroHeader from 'components/HeroHeader'
import PartnersSection from 'components/PartnersSection'
import TeamSection from 'components/TeamSection'
import FounderBio from 'components/FounderBio'
import Offerings from 'components/Offerings'

export const AboutView = () => (
  <div className={styles.container}>
    <HeroHeader />
    <PartnersSection />
    <FounderBio />
    <TeamSection />
    <Offerings />
  </div>
)

export default AboutView
