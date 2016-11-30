import React from 'react'
import styles from './styles'
import TeamSection from 'components/TeamSection'

export const AboutView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <TeamSection />
    </main>
  )
}

export default AboutView
