import React from 'react'
import { IndexLink, Link } from 'react-router'

import styles from './styles.scss'
import mark from './assets/mark-color.png'

export const Header = () => (
  <div id='header' className={styles.container}>
    <div className={styles.header}>
      <IndexLink className={styles.logo} to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </IndexLink>
      <h1>Thrive Global</h1>
    </div>
    <div className={styles.links}>
      <Link to='/about' className={styles.link} activeClassName={styles.activeRoute}>
        About
      </Link>
      <Link to='/signup' className={styles.link} activeClassName={styles.activeRoute}>
        Sign Up
      </Link>
    </div>
  </div>
)

export default Header
