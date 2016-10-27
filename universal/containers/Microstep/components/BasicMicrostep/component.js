/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  microstep: {
    title: String,
    description: String,
  }
}

const BasicMicrostep = ({ microstep }: Props) => {
  return (
    <div className={styles.container}>
      <h1>
        {microstep.title}
      </h1>
      <p>
        {microstep.description}
      </p>
    </div>
  )
}

BasicMicrostep.defaultProps = {
  microstep: {
    title: 'A basic Microstep',
    description: 'Lorem ipsum...'
  }
}

export default BasicMicrostep
