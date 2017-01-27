/* @flow */
import React from 'react'
import { redirectToShopify } from 'lib/sso'
import { Link } from 'react-router'

import styles from '../styles'

class MainNav extends React.Component {
  redirectToShopify: Function;
  props: {
    hideMenu: Function
  }
  constructor () {
    super(...arguments)

    this.redirectToShopify = this.redirectToShopify.bind(this)
  }

  redirectToShopify () {
    this.props.hideMenu()
    redirectToShopify()
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
