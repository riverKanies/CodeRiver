/* @flow */
import React from 'react'
import { Link } from 'react-router'
import styles from '../styles'

const MainNav = () => {
  return (
    <nav role='navigation' className={styles.mainNav}>
      <a
        className={styles.link}
        onClick={this.hideMenu}
        href='https://journal.thriveglobal.com/'
        target='_blank'
      >
        Journal
      </a>
      <Link
        onClick={this.hideMenu}
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
      <Link onClick={this.hideMenu}
        id='navGive'
        to='/give'
        className={styles.link}
        activeClassName={styles.activeRoute}>
        Give
      </Link>
      <Link onClick={this.hideMenu}
        id='navApps'
        to='/apps'
        className={styles.link}
        activeClassName={styles.activeRoute}>
        Apps
      </Link>
    </nav>
  )
}

export default MainNav
