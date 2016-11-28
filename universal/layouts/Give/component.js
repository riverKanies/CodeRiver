
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import CTASection from 'components/CTASection'
import QuoteSection from 'components/QuoteSection'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FeaturedStory from 'components/FeaturedStory'

import bannerImage from './assets/givingBanner.jpg'
import quoteImage from './assets/GPPLogo.jpg'

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
  imageShape: 'squareImage',
  quoteImage: quoteImage,
  citation: 'Hugh Evans - CEO Global Poverty Project',
  quote: ['The training was truly an eye opener as it reminded us of the importance of ' +
  'living out our true purpose, and doing so in a way that will ensure our team is sustainable in the long-term.']
}

const RichardDavidson = {
  author: 'Richard Davidson',
  details: ['this the details Cras justo odio, dapibus ac ' +
  'facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.'],
  title: 'Why Giving is Good',
  asset: 'richard.jpg',
  externalLink: {
    linkText: 'Get in Touch',
    linkTo: 'http://www.richardjdavidson.com',
    linkStyle: 'white'
  }
}

const minneapolisQuote = {
  bgColor: 'white',
  quoteText: 'Playfair',
  citation: 'Quote Source - Minneapolis',
  quote: ['Through our Foundation, Thrive Global offers free Thrive trainings to non-profit and civic ' +
  'leaders who are on the front lines of serving others, including Khan Academy, Global Citizen, ' +
  'Alliance for Children\'s Rights, EduCare Foundation, and Lean In, as well as mayors ' +
  '(along with their teams) around the world. First up are the mayors of Boston, Minneapolis, Oakland, and Providence.']
}

export const GiveView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <Banner {...bannerProps} />
      <FullWidthTwoCol {...thriveFoundation} />
      <CTASection {...trainNonProfits} />
      <QuoteSection {...globalPovertyProject} />
      <FeaturedStory {...RichardDavidson} />
      <QuoteSection {...minneapolisQuote} />
    </section>
  </section>
)

export default GiveView
