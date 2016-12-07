import React from 'react'
import styles from './styles'
import TeamSection from 'components/TeamSection'
import OneColTextWithHeader from 'components/OneColTextWithHeader'
import CareerSection from 'components/CareerSection'
import MiscSection from 'components/MiscSection'
import ExtendedFamilySection from 'components/ExtendedFamilySection'

const aboutInro = {
  title: 'About Thrive Global',
  hasSubtitle: true,
  subTitle:
    `Thrive Global’s mission is to end the epidemic of stress
    and burnout by offering companies and individuals sustainable, science-based
    solutions to enhance both well-being and performance.`,
  largeCopyContent: true,
  text: [
    `Recent science has shown that the pervasive belief that burnout is the price
     we must pay for success is a delusion. We know, instead, that when we prioritize
     our well-being, our decision-making, creativity and productivity improve
     dramatically.`,
    `Thrive Global's three interconnected core components are: corporate trainings
     and workshops that bring the latest strategies and tools around health and
     well-being to organizations; a media platform that serves as the global hub
     for the conversation about well-being and performance with an emphasis on
     action; and, an e-commerce platform that offers a curated selection of the best
     technology and products for well-being. Together, the three components create
     an integrated platform that empowers people to make sustainable changes to
     their daily lives, going from knowing what to do to actually doing it.`,
    `Thrive Global is committed to accelerating the culture shift that allows
     people to reclaim their lives and move from surviving to thriving.`
  ]
}

export const AboutView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <OneColTextWithHeader {...aboutInro} />
      <TeamSection />
      <ExtendedFamilySection />
      <CareerSection />
      <MiscSection />
    </main>
  )
}

export default AboutView
