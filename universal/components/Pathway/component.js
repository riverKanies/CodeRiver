/* @flow */
import React from 'react'
import styles from './styles'
import JourneyCard from 'components/JourneyCard'

type Props = {
  journeys: Array<any>,
  pathway: Object
}

export default function ({ pathway, journeys = [] }: Props) {
  if (!pathway) return null

  return (
    <section className={styles.container}>
      <section className={styles.title}>
        <h2>{pathway.title}</h2>
      </section>
      <section className={styles.row}>
        {journeys.map(j => <JourneyCard {...j} pathwayId={pathway.id} />)}
      </section>
    </section>
  )
}
