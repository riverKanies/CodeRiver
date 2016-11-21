
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import PathwaySection from 'components/PathwaySection'
import BehaviorChangeSection from 'components/BehaviorChangeSection'
import LearnCTASection from 'components/LearnCTASection'

const bannerProps = {
  title: 'Learn & Grow',
  details: 'Ad sea vidisse appetere evertitur, cu pro ridens efficiendi, duo ' +
  'dicant oporteat ad. Wisi periculis conceptam pro eu, discere accusata.'
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
