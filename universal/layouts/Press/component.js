/* @flow */
import React from 'react'
import styles from './styles'
import TextBanner from 'components/TextBanner'
import CTASection from 'components/CTASection'
import PressArticles from 'components/PressArticles'
import TwoColImage from 'components/TwoColImage'
import FullBleed from 'components/FullBleed'

import thriveGlobal from './assets/thrive-global.jpg'

import articleImage_One from './assets/article1.jpg'
import articleImage_Two from './assets/article2.jpg'
import articleImage_Three from './assets/article3.jpg'
import articleImage_Four from './assets/article4.jpg'
import articleImage_Five from './assets/article5.jpg'

import videoImage_One from './assets/video1.jpg'
import videoImage_Two from './assets/video2.jpg'
import videoImage_Three from './assets/video3.jpg'
import videoImage_Four from './assets/video4.jpg'

const pressBanner = {
  bgColor: 'default',
  hasTitle: 'titleTrue',
  hasDivider: 'dividerFalse',
  titleFont: 'playfair',
  subTitle: [
    'What people are saying about Thrive Global'
  ],
  title: 'In the Press'
}

const fortuneBlock = {
  sectionClass: 'altTeal',
  image: thriveGlobal,
  hasLabel: false,
  title: 'Fortune',
  sectionText: `“What’s compelling here is not so much the
   message that well-being leads to happiness, but rather that
   well-being leads to productivity . . . and creativity.”`,
  hasButton: true,
  link: {
    linkText: 'Read This Featured Article',
    linkTo: 'http://fortune.com/arianna-huffington-thrive-global-company/',
    linkStyle: 'white'
  }
}

const pressReleases = {
  colorScheme: 'pattern',
  sectionWidth: 'fill930',
  sectionContent: 'large',
  hasTitle: 'titleFalse',
  button: {
    linkTo: '/press-releases',
    buttonStyle: 'teal-blackText',
    buttonText: 'Read Full Press Release'
  },
  sectionText: [
    `Arianna Huffington Launches Thrive Global to End the
     Escalating Stress and Burnout Epidemic with Sustainable,
     Science-Based Solutions`
  ]
}

// articles

const articleImages = [
  {
    image: articleImage_One,
    link: 'https://www.ft.com/content/a4322038-bc09-11e6-8b45-b8b81dd5d080',
    caption: 'Arianna Huffington: Selling the zzzzeitgeist'
  },
  {
    image: articleImage_Two,
    link: 'http://www.nytimes.com/2016/12/04/nyregion/not-sleeping-enough-arianna-huffington-wants-to-help.html',
    caption: 'Not Sleeping Enough? Arianna Huffington Wants to Help'
  },
  {
    image: articleImage_Three,
    link: ' http://www.nytimes.com/2016/12/12/books/review/arianna-huffington-rest-alex-soojung-kim-pang.html',
    caption: 'Arianna Huffington on a Book About Working Less, Resting More'
  },
  {
    image: articleImage_Four,
    // eslint-disable-next-line max-len
    link: 'http://www.standard.co.uk/lifestyle/london-life/arianna-huffington-on-why-we-should-all-be-sleeping-our-way-to-the-top-a3419831.html',
    caption: 'Arianna Huffington on Why We Should All Be Sleeping Our Way to The Top'
  },
  {
    image: articleImage_Five,
    link: 'http://fortune.com/2016/12/01/a-ceos-most-important-duty/',
    caption: 'A CEO’s Most Important Duty'
  }
]

const articles = {
  bgColor: 'default',
  hasTitle: 'titleTrue',
  title: 'Recent Articles',
  images: articleImages
}

// video links

const defaultVideoImages = [
  {
    image: videoImage_One,
    link: 'http://video.cnbc.com/gallery/?video=3000572198',
    caption: 'CNBC’S SQUAWK BOX',
    column: 'oneCol'
  },
  {
    image: videoImage_Two,
    link: 'http://money.cnn.com/video/news/2016/11/30/arianna-huffington-thrive-global-sleep-wellness.cnnmoney/',
    caption: 'CNN MONEY',
    column: 'oneCol'
  },
  {
    image: videoImage_Three,
    link: 'http://bit.ly/2hsPF04',
    caption: 'MSNBC\'s Morning Joe',
    column: 'twoCol'
  },
  {
    image: videoImage_Four,
    link: 'https://www.bloomberg.com/news/videos/2016-12-07/arianna-huffington-s-mission-to-end-the-burnout-epidemic',
    caption: 'BLOOMBERG TV',
    column: 'twoCol'
  }
]

const videoImages = {
  bgColor: 'default',
  hasTitle: 'titleTrue',
  title: 'Recent Videos',
  images: defaultVideoImages
}

export const PressView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <TextBanner {...pressBanner} />
      <FullBleed {...fortuneBlock} />
      <PressArticles {...articles} />
      <CTASection {...pressReleases} />
      <TwoColImage {...videoImages} />
    </section>
  </section>
)

export default PressView
