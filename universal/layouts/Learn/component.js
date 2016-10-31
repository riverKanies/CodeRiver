/* @flow */
import React from 'react'
import styles from './styles'
import PathwaySection from 'components/PathwaySection'
import BehaviorChangeSection from 'components/BehaviorChangeSection'

export const LearnView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <PathwaySection />
      <BehaviorChangeSection />
    </section>
  </section>
)

export default LearnView
