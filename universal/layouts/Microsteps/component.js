/* @flow */
import React from 'react'
import styles from './styles'
import MicrostepList from 'containers/MicrostepList'

function MicrostepsView () {
  return (
    <div className={styles.container}>
      <MicrostepList />
    </div>
  )
}

export default MicrostepsView
