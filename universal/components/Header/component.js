// Site Header
import React from 'react'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/thriveText.png'

export const Header = () => (
  <header role='banner' className={styles.siteHeader}>
    <figure className={styles.brand}>
      <IndexLink id='linkHome' to='/'>
        <img className={styles.thriveLogo} src={mark} alt='Thrive Global' />
      </IndexLink>
    </figure>

    <section className={styles.navContainer}>

      <nav role='navigation' className={styles.mainNav}>
        <Link id='navEngage' to='/engage' className={styles.link} activeClassName={styles.activeRoute}>
          Engage
        </Link>
        <Link id='navLearn' to='/learn' className={styles.link} activeClassName={styles.activeRoute}>
          Learn
        </Link>
        <Link id='navShop' to='javascript:void(0)' className={styles.link} activeClassName={styles.activeRoute}>
          Shop
        </Link>
        <Link id='navGive' to='javascript:void(0)' className={styles.link} activeClassName={styles.activeRoute}>
          Give
        </Link>
        <Link id='navThrive' to='/thrive' className={styles.link} activeClassName={styles.activeRoute}>
          Thrive
        </Link>
      </nav>

      <nav role='navigation' className={styles.utilityNav}>
        <Link id='navSignUp' to='/signup' className={styles.linkUtility} activeClassName={styles.activeRoute}>
          Sign Up
        </Link>
        <Link id='navLogin' to='/login' className={styles.linkUtility} activeClassName={styles.activeRoute}>
          Login
        </Link>
      </nav>

    </section>
  </header>
)

export default Header
