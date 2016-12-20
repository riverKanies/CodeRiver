/* @flow */
import React from 'react'
import styles from './styles'
import TextBanner from 'components/TextBanner'
import QuoteSection from 'components/QuoteSection'
import CTASection from 'components/CTASection'

import fortune from './assets/fortune.png'
import ft from './assets/ft.png'
import nyt from './assets/nyt.png'

const pressBanner = {
  asset: 'growBannerPattern.png',
  hasTitle: 'titleTrue',
  subTitle: [
    'What people are saying...'
  ],
  title: 'Press'
}

const fortuneQuote = {
  bgColor: 'white',
  quoteImage: fortune,
  imageShape: 'squareImage',
  isLink: true,
  quoteURL: 'http://fortune.com/arianna-huffington-thrive-global-company/',
  quoteFont: 'Playfair',
  citation: 'Fortune',
  quote: [`With the launch today of her new company, Thrive Global, Arianna Huffington
    is hoping to turn sleeping well into the corporate world’s most celebrated productivity tool.`]
}

const nytQuote = {
  bgColor: 'white',
  quoteImage: nyt,
  imageShape: 'squareImage',
  isLink: true,
  quoteURL: 'https://www.ft.com/content/a4322038-bc09-11e6-8b45-b8b81dd5d080',
  quoteFont: 'Playfair',
  citation: 'NYT',
  quote: ['Not Sleeping Enough? Arianna Huffington Wants to Help']
}

const ftQuote = {
  bgColor: 'white',
  quoteImage: ft,
  imageShape: 'squareImage',
  isLink: true,
  quoteURL: 'http://www.nytimes.com/2016/12/04/nyregion/not-sleeping-enough-arianna-huffington-wants-to-help.html?_r=0',
  quoteFont: 'Playfair',
  citation: 'FT',
  quote: ['Four weeks later, I can report that Huffington has changed my life...' +
  'bedtime now means bedtime: a phase of leaving the day behind.']
}

const pressReleases = {
  colorScheme: 'white',
  sectionWidth: 'twoThirdsWidth',
  title: 'Press Releases',
  button: {
    linkTo: '/press-releases',
    buttonStyle: 'blue',
    buttonText: 'Read Full Press Release'
  },
  sectionText: [
    `When you run a global business that never sleeps, often you don’t either.
    I used to think it made me tough not to get much sleep," said Travis Kalanick,
    CEO of Uber. "Luckily, I had a good friend who made me to rethink my
    relationship with rest — and I've been a lot happier and more productive
    ever since. So when Arianna started Thrive Global to change the way people live and work,
    I immediately asked how everyone at Uber could participate. Today Uber is proud to be
    one of the first companies to partner with Thrive Global to help our employees get the
    most out of their time in and out of the office.`
  ]
}

export const PressView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <TextBanner {...pressBanner} />
      <QuoteSection {...fortuneQuote} />
      <QuoteSection {...nytQuote} />
      <QuoteSection {...ftQuote} />
      <CTASection {...pressReleases} />
    </section>
  </section>
)

export default PressView
