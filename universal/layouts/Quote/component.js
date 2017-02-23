import React from 'react'
import Quoter from 'components/Quoter'

import styles from './styles'

class HomeView extends React.Component {

  render() {
    return (
      <main id='home' role='main' className={styles.homePage}>
        <Quoter />
      </main>
    )
  }
}

export default HomeView
