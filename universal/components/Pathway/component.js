/* @flow */
import React from 'react'
import styles from './styles'
import JourneyHeader from 'components/JourneyHeader'
import JourneyCard from 'components/JourneyCard'

type Props = {
  journeys: Array<any>,
  pathway: Object
}

export default function ({ pathway, journeys = [] }: Props) {
  if (!pathway) return null

  return (
    <section className={styles.container}>
      <JourneyHeader {...pathway} />
      <section className={styles.content}>
        <section id='pathway_container' className={styles.row}>
          {journeys.map(j => <JourneyCard {...j} pathwayId={pathway.id} />)}
        </section>
      </section>
    </section>
  )
}
