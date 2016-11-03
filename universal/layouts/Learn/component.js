/* @flow */
import React from 'react'
import styles from './styles'
import PageHeader from 'components/PageHeader'
import PathwaySection from 'components/PathwaySection'
import BehaviorChangeSection from 'components/BehaviorChangeSection'
import LearnCTASection from 'components/LearnCTASection'

const headerProps = {
  title: 'Learn & Grow',
  details: `Maecenas sed diam eget risus varius blandit sit amet non magna.
  Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula
  ut id elit. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem
  lacinia quam venenatis vestibulum.`
}

export const LearnView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <PageHeader {...headerProps} />
      <PathwaySection />
      <BehaviorChangeSection />
      <LearnCTASection />
    </section>
  </section>
)

export default LearnView
