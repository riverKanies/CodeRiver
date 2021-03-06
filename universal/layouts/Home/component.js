import React from 'react'
import HomePage from 'components/HomePage'

import styles from './styles'

class HomeView extends React.Component {

  render() {
    return (
      <main id='home' role='main' className={styles.homePage}>
        <HomePage />
      </main>
    )
  }
}

export default HomeView
