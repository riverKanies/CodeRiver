import React from 'react'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/mark-color.png'

export const Header = () => (
  <header role='banner' id='header' className={styles.container}>
    <span className={styles.thriveLogo}>
      <IndexLink to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </IndexLink>
    </span>
    <nav role='navigation' className={styles.links}>
      <Link id='about' to='/about' className={styles.link} activeClassName={styles.activeRoute}>
        About
      </Link>
      <Link to='/signup' className={styles.link} activeClassName={styles.activeRoute}>
        Sign Up
      </Link>
    </nav>
  </header>
)

export default Header
