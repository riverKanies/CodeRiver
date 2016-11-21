/* @flow */
import React from 'react'
import styles from './styles'

import Microstep from 'containers/Microstep/component'
import PageHeader from 'components/PageHeader'

type Props = {
  journey: Object,
  microsteps: Array<any>
}

export default function ({ journey = null, microsteps = [] }: Props) {
  if (!journey) return null

  return (
    <div>
      <PageHeader title={journey.title} />
      <section className={styles.container}>
        {microsteps.map(m => (
          <div className={styles.microstepContainer}>
            <Microstep microstep={m} type={m.type} />
          </div>
        ))}
      </section>
    </div>
  )
}

