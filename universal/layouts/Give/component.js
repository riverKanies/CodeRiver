
/* @flow */
import React from 'react'
import styles from './styles'
import BrandRow from 'components/BrandRow'
import QuoteSection from 'components/QuoteSection'
import TextBanner from 'components/TextBanner'
import FourColImage from 'components/FourColImage'
import OneColTextWithHeader from 'components/OneColTextWithHeader'
import FeaturedStory from 'components/FeaturedStory'
import ExternalLink from 'components/ExternalLink'

import hughImage from './assets/hugh.jpg'

const giveBanner = {
  asset: 'giveBannerPattern.png',
  hasTitle: 'titleTrue',
  subTitle: [
    'Giving is a fundamental part of a healthy, full life.',
    'Don\'t Just Be A Go-Getter. Be A Go-Giver.'],
  title: 'Give'
}

const thriveFoundation = {
  bgLink: false,
  details: [
    `The Thrive Foundation is a 501(c)3 organization that brings free Thrive trainings to nonprofit
    and civic leaders who are on the front lines of service others and at particular risk of burnout.
    The Thrive trainings teach these leaders that when they put their own oxygen masks on first,
    they are more effective at helping others.`
  ],
  hasAuthor: false,
  hasLabel: false,
  hasButton: false,
  title: 'Thrive Foundation',
  asset: 'thriveFoundation.jpg'
}

const trainNonProfits = {
  textAlign: 'center',
  title: 'Thrive Global\'s Nonprofit Trainings',
  text: [
    `Thrive Global is proud to support nonprofit organizations including Khan Academy,
    Global Citizen, Alliance for Children's Rights, EduCare Foundation
    and Lean In with free trainings to enhance well-being and performance.`,
    ` Interested in bringing Thrive to your nonprofit?`
  ]
}

const emailButton = {
  linkText: 'Email Us',
  linkTo: 'mailto:nonprofits@thriveglobal.com',
  linkStyle: 'violet',
  target: '_self'
}

const globalPovertyProject = {
  bgColor: 'white',
  quoteFont: 'Playfair',
  containerBorders: 'bordersTrue',
  quoteImage: hughImage,
  citation: 'Hugh Evans, CEO Global Citizen',
  quote: ['The training was truly an eye opener as it reminded us of the importance of ' +
  'living out our true purpose, and doing so in a way that will ensure our team is sustainable in the long-term.']
}

const GivingisGood = {
  bgLink: false,
  details: [
    `Whether it's volunteering, donating or just smiling at someone on the street,
    giving is a scientifically-proven way to increase your well-being.
    Read more stories at Thrive Global's Giving section. `
  ],
  hasAuthor: false,
  hasLabel: true,
  label: 'Journal',
  title: 'Why Giving is Good For You',
  asset: 'richard.jpg',
  hasButton: true,
  externalLink: {
    linkText: 'Read More',
    linkTo: 'https://journal.thriveglobal.com/giving/home',
    linkStyle: 'white'
  }
}

const mayorHeading = {
  title: 'Mayors',
  bgColor: 'gray',
  textAlign: 'center',
  text: [
    `Thrive Global is pleased to be working with the following U.S. mayors and their teams
     to support civic leaders on the front lines of serving others, beginning with:`
  ]
}

const mayorSection = {
  bgColor: 'gray',
  gutters: 'guttersTrue'
}

const mayorQuote = {
  bgColor: 'gray',
  quoteFont: 'Playfair',
  containerBorders: 'bordersTrue',
  hasImage: 'imageFalse',
  citation: 'Jorge Elorza, Mayor of Providence',
  quote: [
    `I have seen firsthand the hard work that non-profit and public sectors employees
    put into their work and I know that providing them with the resources and trainings
    they need is critical to supporting their quality of life both at work and at home.`
  ]
}

export const GiveView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <TextBanner {...giveBanner} />
      <FeaturedStory {...thriveFoundation} />
      <OneColTextWithHeader {...trainNonProfits} />
      <section className={styles.emailLink}>
        <ExternalLink {...emailButton} />
      </section>
      <BrandRow />
      <QuoteSection {...globalPovertyProject} />
      <FeaturedStory {...GivingisGood} />
      <OneColTextWithHeader {...mayorHeading} />
      <FourColImage {...mayorSection} />
      <QuoteSection {...mayorQuote} />
    </section>
  </section>
)

export default GiveView
