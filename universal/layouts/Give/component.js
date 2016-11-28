
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import CTASection from 'components/CTASection'
import QuoteSection from 'components/QuoteSection'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FeaturedStory from 'components/FeaturedStory'

import bannerImage from './assets/givingBanner.jpg'
import thriveFoundationImage from './assets/thriveFoundation.jpg'
import hughImage from './assets/hugh.jpg'

const bannerProps = {
  contentPosition: 'bottomLeft',
  title: 'Don\'t Just Be a Go-Getter, Be a Go-Giver',
  bannerText: 'Donec sed odio dui.',
  bannerImage: bannerImage,
  bannerImageOverlay: 'overlayFalse',
  height: 'halfHeight'
}

const thriveFoundation = {
  sectionClass: 'default',
  title: 'Thrive Foundation',
  image: thriveFoundationImage,
  hasLabel: 'labelFalse',
  label: {
    label: 'Thrive',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    `The Thrive Foundation is a 501(c)3 organization that brings free Thrive trainings to
    nonprofit and civic leaders who are on the front lines of serving others.
    Leaders in the public and nonprofit sectors are at particular risk of burnout,
    believing that the world rests on their shoulders and thus they have to work around
    the clock to solve the world's problems. The Thrive Foundation helps teach
    these people that putting their own oxygen mask on first will make them
    more effective at helping others. You can donate to the Thrive Foundation
    on Crowdrise below.`
  ],
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Donate Now',
    linkTo: 'https://www.crowdrise.com/',
    buttonStyle: 'violet-medium'
  }
}

const trainNonProfits = {
  alignment: 'center',
  colorScheme: 'default',
  title: 'We Train Non-Profits',
  sectionWidth: 'twoThirdsWidth',
  sectionText: ['Interested in bringing Thrive trainings to your workplace? ' +
  'Email our director of trainings Joey Hubbard at jh@thriveglobal.com'],
  button: {
    buttonText: 'Get in Touch',
    linkTo: 'mailto:jh@thriveglobal.com',
    buttonStyle: 'teal'
  }
}

const globalPovertyProject = {
  bgColor: 'white',
  quoteFont: 'Playfair',
  containerBorders: 'bordersTrue',
  quoteImage: hughImage,
  citation: 'Hugh Evans, CEO Global Poverty Project',
  quote: ['The training was truly an eye opener as it reminded us of the importance of ' +
  'living out our true purpose, and doing so in a way that will ensure our team is sustainable in the long-term.']
}

const GivingisGood = {
  details: [
    `Whether it's volunteering, donating or just smiling at someone on the street,
    giving is a scientifically-proven way to increase your well-being.
    Read more stories at Thrive Global's Giving section. `
  ],
  hasAuthor: 'authorFalse',
  title: 'Why Giving is Good For You',
  asset: 'richard.jpg',
  externalLink: {
    linkText: 'Read More',
    linkTo: '//stories.thriveglobal.com/giving/',
    linkStyle: 'white'
  }
}

const minneapolisQuote = {
  bgColor: 'white',
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
      <Banner {...bannerProps} />
      <FullWidthTwoCol {...thriveFoundation} />
      <CTASection {...trainNonProfits} />
      <QuoteSection {...globalPovertyProject} />
      <FeaturedStory {...GivingisGood} />
      <QuoteSection {...minneapolisQuote} />
    </section>
  </section>
)

export default GiveView
