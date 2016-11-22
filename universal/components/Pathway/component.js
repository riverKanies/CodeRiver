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
    <section id='pathway_container' className={styles.container}>
      <section className={styles.title}>
        <h1>{pathway.title}</h1>
      </section>
      <section className={styles.row}>
        {journeys.map(j => <JourneyCard {...j} pathwayId={pathway.id} />)}
      </section>
    </section>
  )
}
