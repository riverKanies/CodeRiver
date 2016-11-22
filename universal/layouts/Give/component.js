
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import CTASection from 'components/CTASection'
import QuoteSection from 'components/QuoteSection'
import FeaturedStory from 'components/FeaturedStory'

import bannerImage from './assets/givingBanner.jpg'

const bannerProps = {
  contentPosition: 'bottomLeft',
  title: 'Don\'t Just Be a Go-Getter, Be a Go-Giver',
  bannerText: 'Donec sed odio dui.',
  bannerImage: bannerImage,
  bannerImageOverlay: 'overlayFalse',
  height: 'halfHeight'
}

const theThriveFoundation = {
  sectionClass: 'default',
  title: 'We Train Non-Profits',
  sectionText: ['Hello there... ' +
  'Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ' +
  'Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ' +
  'Curabitur blandit tempus porttitor.']
}

const globalPovertyProject = {
  bgColor: 'white',
  quoteImage: 'http://steezo.com/wp-content/uploads/2012/12/man-in-suit2.jpg',
  citation: 'Hugh Evans - CEO Global Poverty Project',
  quote: ['The training was truly an eye opener as it reminded us of the importance of ' +
  'living out our true purpose, and doing so in a way that will ensure our team is sustainable in the long-term.']
}

const trainNonProfits = {
  alignment: 'center',
  sectionClass: 'default',
  title: 'We Train Non-Profits',
  sectionText: ['Hello there... ' +
  'Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ' +
  'Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ' +
  'Curabitur blandit tempus porttitor.']
}

const RichardDavidson = {
  author: 'Richard Davidson',
  details: ['this the details Cras justo odio, dapibus ac ' +
  'facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.'],
  title: 'Why Giving is Good'
}

export const GiveView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <Banner {...bannerProps} />
      <CTASection {...theThriveFoundation} />
      <CTASection {...trainNonProfits} />
      <QuoteSection {...globalPovertyProject} />
      <FeaturedStory {...RichardDavidson} />
    </section>
  </section>
)

export default GiveView
