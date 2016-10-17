import React from 'react'
import styles from './styles'

import HeroHeader from 'components/HeroHeader'
import PartnersSection from 'components/PartnersSection'
import PartnerDetail from 'components/PartnerDetail'
import TeamBio from 'components/TeamBio'
import TeamSection from 'components/TeamSection'
import FounderBio from 'components/FounderBio'
import Offerings from 'components/Offerings'
import OfferingCTA from 'components/OfferingCTA'

export const AboutView = () => (
  <div className={styles.container}>
    <HeroHeader />

    <PartnersSection>
      <PartnerDetail />
      <PartnerDetail />
      <PartnerDetail />
    </PartnersSection>

    <FounderBio />

    <TeamSection>
      <TeamBio />
    </TeamSection>

    <Offerings>
      <OfferingCTA />
      <OfferingCTA />
      <OfferingCTA />
    </Offerings>

  </div>
)

export default AboutView
