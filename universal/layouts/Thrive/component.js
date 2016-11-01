/* @flow */
import React from 'react'
import styles from './styles'

import PartnersSection from 'components/PartnersSection'
import TeamSection from 'components/TeamSection'
import FounderBio from 'components/FounderBio'

export const ThriveView = () => (
  <div className={styles.container}>
    <PartnersSection />
    <FounderBio />
    <TeamSection />
  </div>
)

export default ThriveView
