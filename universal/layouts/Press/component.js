/* @flow */
import React from 'react'
import styles from './styles'
import TextBanner from 'components/TextBanner'
import QuoteSection from 'components/QuoteSection'
import CTASection from 'components/CTASection'
import TwoColQuote from 'components/TwoColQuote'
import BrandRow from 'components/BrandRow'
import TwoColImage from 'components/TwoColImage'

import fortune from './assets/fortune.png'
import ftlong from './assets/ftlong.png'
import nytlong from './assets/nytlong.png'
import bloomberg from './assets/bloomberg.png'
import fortunelong from './assets/fortunelong.png'
import image_one from './assets/msnbc.jpg'
import image_two from './assets/bloomberg-video-thumb.jpg'

const pressBanner = {
  bgColor: 'default',
  hasTitle: 'titleTrue',
  subTitle: [
    'What people are saying...'
  ],
  title: 'Press'
}

const fortuneQuote = {
  bgColor: 'pattern',
  byElement: 'hideBy',
  quoteImage: fortune,
  imageShape: 'squareImage',
  isLink: true,
  quoteURL: 'http://fortune.com/arianna-huffington-thrive-global-company/',
  quoteFont: 'Playfair',
  citation: 'Fortune',
  quote: [`With the launch today of her new company, Thrive Global, Arianna Huffington
    is hoping to turn sleeping well into the corporate world’s most celebrated productivity tool.`]
}

const quotes = {
  bgColor: 'white',
  byElement: 'hideBy',
  quoteURL: 'https://www.ft.com/content/a4322038-bc09-11e6-8b45-b8b81dd5d080',
  quoteURL2:
  'http://www.nytimes.com/2016/12/04/nyregion/not-sleeping-enough-arianna-huffington-wants-to-help.html?_r=0',
  quoteFont: 'Playfair',
  citation: 'Financial Times',
  citation2: 'The New York Times',
  quote: `Four weeks later, I can report that Huffington has changed my life...
  bedtime now means bedtime: a phase of leaving the day behind.`,
  quote2: `Not Sleeping Enough? Arianna Huffington Wants to Help.`
}

const logos = [
  { logoImage: bloomberg,
    link: 'http://www.bloomberg.com/news/videos/2016-12-07/arianna-huffington-s-mission-to-end-the-burnout-epidemic'
  },
  { logoImage: fortunelong,
    link: 'http://fortune.com/2016/12/01/a-ceos-most-important-duty/'
  },
  { logoImage: nytlong,
    link: 'http://www.nytimes.com/2016/12/04/nyregion/not-sleeping-enough-arianna-huffington-wants-to-help.html'
  },
  { logoImage: ftlong,
    link: 'https://www.ft.com/content/a4322038-bc09-11e6-8b45-b8b81dd5d080'
  }
]

const pressReleases = {
  colorScheme: 'white',
  sectionWidth: 'defaultWidth',
  sectionContent: 'large',
  title: null,
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

const defaultVideoImages = [
  {
    image: image_one,
    link: 'http://bit.ly/2hsPF04',
    caption: 'MSNBC\'s Morning Joe'
  },
  {
    image: image_two,
    link: 'https://www.bloomberg.com/news/videos/2016-12-07/arianna-huffington-s-mission-to-end-the-burnout-epidemic',
    caption: 'Bloomberg Technology'
  }
]

const videoImages = {
  bgColor: 'default',
  hasTitle: 'titleTrue',
  title: 'Other Press',
  images: defaultVideoImages
}

export const PressView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <TextBanner {...pressBanner} />
      <QuoteSection {...fortuneQuote} />
      <TwoColQuote {...quotes} />
      <BrandRow logos={logos} />
      <CTASection {...pressReleases} />
      <TwoColImage {...videoImages} />
    </section>
  </section>
)

export default PressView
