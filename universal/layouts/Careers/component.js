/* @flow */
import React from 'react'
import styles from './styles'
import TextBanner from 'components/TextBanner'
import FullBleedImage from 'components/FullBleedImage'
import HalfTextOverlay from 'components/HalfTextOverlay'
import FullWidthText from 'components/FullWidthText'
import ThreeColHeader from 'components/ThreeColHeader'

// Content import
import CareerBanner from './assets/mission.jpg'
import ThriveTeam from './assets/thriveTeam.jpg'

// Page Content
const bannerIMG = {
  image: CareerBanner,
  altText: 'Thrive Global Careers'
}
const careersHeader = {
  bgColor: 'default',
  hasTitle: 'titleTrue',
  hasDivider: 'dividerFalse',
  titleFont: 'playfair',
  subTitle: [
    `Thrive Global’s mission is to end the epidemic of stress and burnout by offering
    companies and individuals sustainable, science-based solutions to enhance both
    well-being and performance.`
  ],
  title: 'Mission'
}
const careersText = {
  sectionClass: 'tagalong',
  divider: 'dividerFalse',
  sectionWidth: 'halfWidth',
  textStyle: 'bodyText',
  header: 'headerFalse',
  sectionText: [
    `Recent science has shown that the pervasive belief that burnout is the price we
    must pay for success is a delusion. We know, instead, that when we prioritize
    our well-being, our decision-making, creativity and productivity improve dramatically.`,

    `Thrive Global’s three interconnected core components are: corporate trainings and workshops
    that bring the latest strategies and tools around health and well-being to organizations; a
    media platform that serves as the global hub for the conversation about well-being and performance
    with an emphasis on action; and, an e-commerce platform that offers a curated selection of the
    best technology and products for well-being. Together, the three components create an integrated
    platform that empowers people to make sustainable changes to their daily lives, going from
    knowing what to do to actually doing it.`,

    `Thrive Global is committed to accelerating the culture shift that allows people to reclaim
    their lives and move from surviving to thriving.`
  ]
}
const careers = {
  id: 'careers',
  title: 'Join The Thrive Tribe',
  target: '_self',
  sectionText: [
    `Join the team that is changing the way we work and live. Thrive Global is
    looking for innovative and passionate employees across all our teams--technology
    and engineering, media, sales and marketing, and more.`,

    `Email us with your resume
    attached at jobs@thriveglobal.com to learn about joining our Thrive Tribe!`
  ],
  url: 'mailto:jobs@thriveglobal.com',
  bgColor: 'white',
  bgImage: ThriveTeam,
  postContentStyle: 'postContent'
}
const coreComponents = {
  bgColor: 'default',
  colOne: {
    title: 'Press',
    link: {
      linkStyle: 'inline',
      linkText: ' press@thriveglobal.com',
      linkTo: 'mailto:press@thriveglobal.com',
      target: '_self'
    },
    text: [
      `Are you a member of the press seeking information about Thrive Global?
      Email Monica Lee at`
    ]
  },
  colTwo: {
    title: 'Media',
    link: {
      linkStyle: 'inline',
      linkText: ' media@thriveglobal.com',
      linkTo: 'mailto:media@thriveglobal.com',
      target: '_self'
    },
    text: [
      `Interested in learning more about brand partnerships and sponsorships with Thrive Global? Email us at`
    ]
  },
  colThree: {
    title: 'Corporate',
    link: {
      linkStyle: 'inline',
      linkText: ' info@thriveglobal.com',
      linkTo: 'mailto:info@thriveglobal.com',
      target: '_self'
    },
    text: [
      `Interested in learning more about our corporate partnerships? Email us at`
    ]
  },
  footerLink: {
    linkStyle: 'inline',
    linkText: ' info@thriveglobal.com',
    linkTo: 'mailto:info@thriveglobal.com',
    target: '_self'
  },
  footerText: [
    `Say hello. Contact us at`
  ]
}

export const CareersView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <FullBleedImage {...bannerIMG} />
      <TextBanner {...careersHeader} />
      <FullWidthText {...careersText} />
      <HalfTextOverlay {...careers} />
      <ThreeColHeader {...coreComponents} />
    </main>
  )
}

export default CareersView
