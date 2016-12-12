/* @flow */
import React from 'react'
import styles from './styles'
import PathwayHeader from 'components/PathwayHeader'
import JourneyCard from 'components/JourneyCard'

type Props = {
  journeys: Array<any>,
  pathway: Object,
  title: string
}

export default function ({ pathway, title = 'Choose a Journey', journeys = [] }: Props) {
  if (!pathway) return null

  return (
    <section className={styles.container}>
      <PathwayHeader {...pathway} />
      <section className={styles.content}>
        <header className={styles.title}>
          <h2>{title}</h2>
        </header>
        <section id='pathway_container' className={styles.row}>
          {journeys.map(j => <JourneyCard {...j} pathwayId={pathway.id} />)}
        </section>
      </section>
    </section>
  )
}
