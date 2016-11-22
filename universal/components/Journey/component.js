/* @flow */
import React from 'react'
import styles from './styles'

import Microstep from 'containers/Microstep/component'
import PageHeader from 'components/PageHeader'

type Props = {
  journey: Object,
  microsteps: Array<any>
}

export default function ({ journey, microsteps = [] }: Props) {
  if (!journey) return null

  return (
    <section id='journeys' className={styles.container}>
      <PageHeader title={journey.title} />
      <div>
        {microsteps.map(m => (
          <div id='journey_microstep' className={styles.microstepContainer}>
            <Microstep microstep={m} type={m.type} />
          </div>
        ))}
      </div>
    </section>
  )
}
