import React from 'react'
import styles from './styles'
import OneColTextWithHeader from 'components/OneColTextWithHeader'
import HalfTextOverlay from 'components/HalfTextOverlay'

// Content import
import careersImg from './assets/team.jpg'

// Page Content
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
const careers = {
  postLabel: {
    label: 'Careers',
    labelColor: 'whiteLabel'
  },
  id: 'careers',
  title: 'Join The Thrive Tribe',
  sectionText: [
    `Join the team that is changing the way we work and live. Thrive Global is
    looking for innovative and passionate employees across all our teams--technology
    and engineering, media, sales and marketing, and more. Email us with your resume
    attached at jobs@thriveglobal.com to learn about joining our Thrive Tribe!`
  ],
  url: 'mailto:jobs@thriveglobal.com',
  bgImage: careersImg,
  hasButton: 'buttonFalse',
  button: {
    buttonText: 'Thrive With Us',
    linkTo: 'mailto:jobs@thriveglobal.com',
    buttonStyle: 'white'
  },
  postContentStyle: 'postContent'
}

export const AboutView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <OneColTextWithHeader {...aboutInro} />
      <HalfTextOverlay {...careers} />
    </main>
  )
}

export default AboutView
