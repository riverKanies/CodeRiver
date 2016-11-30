
/* @flow */
import React from 'react'
import styles from './styles'
import BrandRow from 'components/BrandRow'
import QuoteSection from 'components/QuoteSection'
import TextBanner from 'components/TextBanner'
import FourColImage from 'components/FourColImage'
import FullWidthText from 'components/FullWidthText'
import FeaturedStory from 'components/FeaturedStory'

import hughImage from './assets/hugh.jpg'

const giveBanner = {
  asset: 'giveBannerPattern.png',
  hasTitle: 'titleTrue',
  subTitle: 'Giving is a fundamental part of a healthy, full life.' + ' Don\'t Just Be A Go-Getter. Be A Go-Giver.',
  title: 'Give'
}

const thriveFoundation = {
  details: [
    `The Thrive Foundation is a 501(c)3 organization that brings free Thrive trainings to
    nonprofit and civic leaders who are on the front lines of serving others.
    Leaders in the public and nonprofit sectors are at particular risk of burnout,
    believing that the world rests on their shoulders and thus they have to work around
    the clock to solve the world's problems. The Thrive Foundation helps teach
    these people that putting their own oxygen mask on first will make them
    more effective at helping others. You can donate to the Thrive Foundation
    on Crowdrise below.`
  ],
  hasAuthor: 'authorFalse',
  hasLabel: 'labelFalse',
  title: 'Thrive Foundation',
  asset: 'thriveFoundation.jpg',
  externalLink: {
    linkText: 'Donate Now',
    linkTo: 'https://www.crowdrise.com/',
    linkStyle: 'white'
  }
}

const trainNonProfits = {
  sectionClass: 'fade',
  sectionWidth: 'halfWidth',
  divider: 'dividerTrue',
  textAlign: 'textCenter',
  title: 'Thrive Global\'s Nonprofit Trainings',
  sectionText: [
    `Thrive Global is proud to support nonprofit organizations including Khan Academy,
    Global Citizen, Alliance for Children's Rights, EduCare Foundation
    and Lean In with free trainings to enhance well-being and performance.`
  ]
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

const nonProfitEmail = {
  sectionClass: 'tagalong',
  sectionWidth: 'halfWidth',
  textAlign: 'textCenter',
  header: 'headerFalse',
  sectionText: [
    'Interested in bringing Thrive to your nonprofit? ' + 'E-mail nonprofits@thriveglobal.com'
  ]
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

const mayorHeading = {
  sectionClass: 'gray',
  sectionWidth: 'halfWidth',
  divider: 'dividerTrue',
  textAlign: 'textCenter',
  title: 'Mayors',
  sectionText: [
    `Thrive Global is pleased to be working with the following U.S. mayors and their teams
     to support civic leaders on the front lines of serving others, beginning with:`
  ]
}

const mayorSection = {
  bgColor: 'gray',
  gutters: 'guttersFalse'
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
      <FullWidthText {...trainNonProfits} />
      <FullWidthText {...nonProfitEmail} />
      <BrandRow />
      <QuoteSection {...globalPovertyProject} />
      <FeaturedStory {...GivingisGood} />
      <FullWidthText {...mayorHeading} />
      <FourColImage {...mayorSection} />
      <QuoteSection {...mayorQuote} />
    </section>
  </section>
)

export default GiveView
