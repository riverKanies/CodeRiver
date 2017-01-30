/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from '../styles'

class MainNav extends React.Component {
  props: {
    hideMenu: Function
  }
  constructor () {
    super(...arguments)

  }

  render () {
    return (
      <nav role='navigation' className={styles.mainNav}>
        <Link onClick={this.props.hideMenu}
          id='navWelcome'
          to='/welcome'
          className={styles.link}
          activeClassName={styles.activeRoute}>
          Welcome
        </Link>
        <Link onClick={this.props.hideMenu}
          id='navAbout'
          to='/home'
          className={styles.link}
          activeClassName={styles.activeRoute}>
          Home
        </Link>
      </nav>
    )
  }
}

export default MainNav
