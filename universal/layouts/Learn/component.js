
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
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

export const LearnView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <Banner {...bannerProps} />
      <PathwaySection />
      <BehaviorChangeSection />
      <LearnCTASection />
    </section>
  </section>
)

export default LearnView
