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
        <a
          className={styles.link}
          onClick={this.props.hideMenu}
          href='https://journal.thriveglobal.com/'
          target='_blank'
        >
          Journal
        </a>
        <Link
          onClick={this.props.hideMenu}
          id='navGrow'
          to='/grow'
          className={styles.link}
          activeClassName={styles.activeRoute}>
          Grow
        </Link>
        <Link
          id='navShop'
          className={styles.link}
          onClick={this.redirectToShopify}
          activeClassName={styles.activeRoute}
        >
          Shop
        </Link>
        <Link onClick={this.props.hideMenu}
          id='navGive'
          to='/give'
          className={styles.link}
          activeClassName={styles.activeRoute}>
          Give
        </Link>
        <Link onClick={this.props.hideMenu}
          id='navApps'
          to='/apps'
          className={styles.link}
          activeClassName={styles.activeRoute}>
          Apps
        </Link>
      </nav>
    )
  }
}

export default MainNav
