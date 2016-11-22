
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import FullWidthText from 'components/FullWidthText'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import PathwaySection from 'components/PathwaySection'
import BehaviorChangeSection from 'components/BehaviorChangeSection'
import LearnCTASection from 'components/LearnCTASection'

import bannerImage from './assets/learnBanner.jpg'

const bannerProps = {
  contentPosition: 'bottomLeft',
  title: 'Learn & Grow',
  bannerText: 'Ad sea vidisse appetere evertitur, cu pro ridens efficiendi, duo.',
  bannerImage: bannerImage,
  bannerImageOverlay: 'overlayFalse',
  height: 'halfHeight'
}

const howToGrowOne = {
  sectionClass: 'default',
  title: 'How to Grow?',
  sectionText: ['So, where do you go from here? You know about the scientific ' +
  'evidence on sleep, meditation, giving, our relationship with technology, and so ' +
  'much more. But how do you move from awareness to action? How do you use this ' +
  'knowledge to make changes in your daily life?']
}
const howToGrowTwo = {
  sectionText: ['But changing habits is not something we can achieve quickly. ' +
  'As with any other well-established pattern, making a lasting change requires ' +
  'taking small daily steps toward our goal. And the steps that will work for each ' +
  'of us are unique; we may need to try out a few different practices and ' +
  'rituals before landing on the right combination.']
}

export const LearnView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <Banner {...bannerProps} />
      <FullWidthText {...howToGrowOne} />
      <FullWidthTwoCol {...howToGrowTwo} />
      <PathwaySection />
      <BehaviorChangeSection />
      <LearnCTASection />
    </section>
  </section>
)

export default LearnView
