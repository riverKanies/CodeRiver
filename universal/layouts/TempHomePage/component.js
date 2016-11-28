/* @flow */
import React from 'react'
import styles from './styles'

class TempHomePage extends React.Component {

  render () {
    return (
      <iframe
        className={styles.iframe}
        src='/landingpage.html'
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    )
  }
}

export default TempHomePage
