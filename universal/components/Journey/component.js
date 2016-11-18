/* @flow */
import React from 'react'
import styles from './styles'

import Microstep from 'containers/Microstep/component'

type Props = {
  journey: Object,
  microsteps: Array<any>
}

export default function ({ journey = null, microsteps = [] }: Props) {
  if (!journey) return null

  return (
    <div className={styles.container}>
      <h1>{journey.title}</h1>
      <ul>
        {microsteps.map(m => (
          <div className={styles.microstepContainer}>
            <Microstep microstep={m} type={m.type} />
          </div>
        ))}
      </ul>
    </div>
  )
}

