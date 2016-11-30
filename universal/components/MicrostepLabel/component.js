/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  visible: boolean
}

const MicrostepLabel = ({ title = 'Microstep Label', visible = false }: Props) => {
  if (!visible) { return null }
  return (
    <div className={styles.container}>
      <span className={styles.label}>
        <p className={styles.title}>{title} </p>
      </span>
    </div>
  )
}

export default MicrostepLabel
