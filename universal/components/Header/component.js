import React from 'react'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/mark-color.png'

export const Header = () => (
  <header role='banner' id='header' className={styles.container}>
    <div className={styles.header}>
      <IndexLink className={styles.logo} to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </IndexLink>
      <h1>Thrive Global</h1>
    </div>
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
