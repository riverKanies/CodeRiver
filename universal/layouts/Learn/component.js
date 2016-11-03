/* @flow */
import React from 'react'
import styles from './styles'
import LearnHeader from 'components/LearnHeader'
import PathwaySection from 'components/PathwaySection'
import BehaviorChangeSection from 'components/BehaviorChangeSection'
import LearnCTASection from 'components/LearnCTASection'

export const LearnView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <LearnHeader />
      <PathwaySection />
      <BehaviorChangeSection />
      <LearnCTASection />
    </section>
  </section>
)

export default LearnView
